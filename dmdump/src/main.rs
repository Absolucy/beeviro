/// SPDX-License-Identifier: MIT OR Apache-2.0
/// Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
mod cli;
mod severity;

use askama::Template;
use clap::Parser;
use color_eyre::eyre::{ContextCompat, Result, WrapErr};
use dreammaker as dm;
use log::{debug, info};
use once_cell::sync::Lazy;
use regex::Regex;
use serde::Serialize;
use std::collections::BTreeMap;

static STAT_VARS: &[&str] = &[
	"stealth",
	"resistance",
	"stage_speed",
	"transmission",
	"level",
	"severity",
];

static THRESHOLD_SPLIT_REGEX: Lazy<Regex> = Lazy::new(|| {
	Regex::new(r"(?im)(<br>|([^:]<b>))[^$]").expect("failed to setup THRESHOLD_SPLIT_REGEX")
});
static THRESHOLD_PARSE_REGEX: Lazy<Regex> = Lazy::new(|| {
	Regex::new(r"(?im)(?:<b>)?(?P<name>[[[:alpha:]] ]+) ?(?P<level>[[:digit:]]{1,2})?[[:space:]]?(?:</b>[[:space:]]*|:</b>[[:space:]]*)(?P<desc>[^<>\n]+)").expect("failed to setup THRESHOLD_PARSE_REGEX")
});
// static SEVERITYSET_PROC_PARSE_REGEX: Lazy<FancyRegex> = Lazy::new(|| {
// FancyRegex::new(
// r"(?mxi) # setup flags
// (?P<severityset>
// # find the severityset proc header
// (?P<path>\/datum\/symptom\/[[:graph:]]+)\/severityset\(
// # handle prefix of `var/` or just `/` before the argument
// (?:var)?\/?
// # advance disease argument
// datum\/disease\/advance\/A
// \)
// # match inner code
// (?:.|\s)*?)
// # stop before we touch another definition
// [\r\n\t]+(?:\/|$)
// ",
// )
// .expect("failed to setup SEVERITYSET_PROC_PARSE_REGEX")
// });
// static SEVERITY_BLOCK_PARSE_REGEX: Lazy<FancyRegex> = Lazy::new(|| {
// FancyRegex::new(
// r"
// (?mxi) # setup flags
// # get indent level at beginning of block
// (?P<indent>[[:blank:]]+)
// # parse if statement
// if[ \t]*\(A\.(?P<var>[[:alpha:]]+)[ \t]*(?P<op>>=|>|<|<=)[
// \t]*(?P<val>[[:digit:]]+)[ \t]*\) # handle any potential comments
// [ [:print:] ]*\n
// # alright, now we check the next line to ensure it has the same indent
// (?:(?P=indent){2,}.*\n*)+(?!(?P=indent))",
// )
// .expect("failed to setup SEVERITY_BLOCK_PARSE_REGEX")
// });

#[derive(Debug, Serialize)]
struct Threshold {
	name: String,
	desc: String,
	level: Option<i32>,
}

#[derive(Template)]
#[template(path = "symptom.ts", escape = "none")]
struct SymptomDefinition {
	base_name: String,
	name: String,
	desc: String,
	stats: BTreeMap<String, i32>,
	thresholds: Vec<Threshold>,
	set_severity: Option<String>,
}

fn split_thresholds(threshold_desc: &str) -> Result<Vec<Threshold>> {
	let split_threshold_descs = THRESHOLD_SPLIT_REGEX
		.split(threshold_desc)
		.map(|threshold| threshold.trim())
		.filter(|threshold| !threshold.is_empty())
		.map(|threshold| threshold.to_string())
		.collect::<Vec<_>>();
	let mut thresholds = Vec::<Threshold>::with_capacity(split_threshold_descs.len());
	for threshold in &split_threshold_descs {
		let captured = THRESHOLD_PARSE_REGEX
			.captures(threshold)
			.wrap_err_with(|| format!("failed to parse with regex: {threshold}"))?;
		let name = captured
			.name("name")
			.map(|name| {
				name.as_str()
					.trim()
					.to_lowercase()
					.replace(char::is_whitespace, "_")
			})
			.wrap_err("failed to get name of threshold")?;
		let desc = captured
			.name("desc")
			.map(|name| name.as_str().trim().to_string())
			.wrap_err("failed to get desc of threshold")?;
		let level = captured
			.name("level")
			.and_then(|level| level.as_str().trim().parse::<i32>().ok());
		thresholds.push(Threshold { name, desc, level });
	}
	Ok(thresholds)
}

fn main() -> Result<()> {
	color_eyre::install()?;
	let args = cli::Args::parse();
	if std::env::var("RUST_LOG").is_err() {
		std::env::set_var(
			"RUST_LOG",
			if args.debug || cfg!(debug_assertions) {
				"debug"
			} else {
				"info"
			},
		);
	}
	pretty_env_logger::try_init().wrap_err("failed to initialize logger")?;
	let context = dm::Context::default();
	info!("parsing DME at {}", args.dme.display());
	let pp =
		dm::preprocessor::Preprocessor::new(&context, args.dme).expect("i/o error opening .dme");
	let indents = dm::indents::IndentProcessor::new(&context, pp);
	let mut parser = dm::parser::Parser::new(&context, indents);
	parser.enable_procs();
	let object_tree = parser.parse_object_tree();
	let mut symptoms = Vec::new();
	object_tree
		.expect("/datum/symptom")
		.recurse(&mut |symptom| {
			let name = symptom
				.get_value("name")
				.and_then(|name| name.constant.as_ref())
				.and_then(|name| name.as_str())
				.unwrap_or("");
			if !name.is_empty() {
				symptoms.push(symptom)
			}
		});
	info!("found {} symptoms", symptoms.len());
	for symptom in symptoms {
		let name = symptom
			.get_value("name")
			.and_then(|name| name.constant.as_ref())
			.and_then(|name| name.as_str())
			.map(str::to_string)
			.wrap_err_with(|| format!("failed to get name from {}", symptom.path))?;
		let desc = symptom
			.get_value("desc")
			.and_then(|desc| desc.constant.as_ref())
			.and_then(|desc| desc.as_str())
			.map(str::to_string)
			.wrap_err_with(|| format!("failed to get desc from {}", symptom.path))?;
		let thresholds = symptom
			.get_value("threshold_desc")
			.and_then(|th| th.constant.as_ref())
			.and_then(|th| th.as_str())
			.wrap_err_with(|| format!("failed to get threshold desc from {}", symptom.path))?;
		let thresholds = split_thresholds(thresholds)
			.wrap_err_with(|| format!("failed to split thresholds from {}", symptom.path))?;
		// info!("[{}] ~ {} ", symptom.path, name);
		let mut stats = BTreeMap::<String, i32>::new();
		for var_name in STAT_VARS {
			let var = symptom
				.get_value(var_name)
				.wrap_err_with(|| {
					format!("failed to get var '{}' from {}", var_name, symptom.path)
				})?
				.constant
				.as_ref()
				.wrap_err_with(|| {
					format!("var '{}' from {} is not constant", var_name, symptom.path)
				})?
				.to_int();
			match var {
				Some(value) if value != 0 => {
					stats.insert(var_name.to_string(), value);
				}
				_ => continue,
			}
		}
		let proc_ref = symptom
			.get_proc("severityset")
			.wrap_err_with(|| format!("failed to get proc 'severityset' from {}", symptom.path))?;
		let mut set_severity = Option::<String>::None;
		if proc_ref.is_externally_visible() && proc_ref.ty() == symptom {
			if let Some(ref x) = proc_ref.get().code {
				let typescript = severity::translate_spanned_statements(x).trim().to_string();
				if !typescript.is_empty() {
					debug!("----\n[{}]\n--\n{}\n--\n----", symptom.path, typescript);
					set_severity = Some(typescript);
				}
			}
		}
		if let Some(output_path) = &args.output {
			let base_name = symptom
				.path
				.split('/')
				.last()
				.wrap_err_with(|| format!("failed to get base name from {}", symptom.path))?
				.trim()
				.to_lowercase();
			let file_path = output_path.join(&base_name).with_extension("ts");
			let definition = SymptomDefinition {
				base_name,
				name,
				desc,
				stats,
				thresholds,
				set_severity,
			};
			std::fs::write(
				&file_path,
				definition.render().wrap_err_with(|| {
					format!(
						"failed to render template to {} for {}",
						file_path.display(),
						symptom.path
					)
				})?,
			)
			.wrap_err_with(|| {
				format!(
					"failed to write ts definition to {} for {}",
					file_path.display(),
					symptom.path
				)
			})?;
		}
	}
	Ok(())
}
