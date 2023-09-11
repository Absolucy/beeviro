/// SPDX-License-Identifier: MIT OR Apache-2.0
/// Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
use clap::Parser;
use std::path::PathBuf;

#[derive(Parser)]
#[command(author, version, about, long_about = None)]
pub struct Args {
	/// Enable debug logging.
	#[clap(short, long)]
	pub debug: bool,
	/// Enable proc AST logging.
	#[clap(short, long)]
	pub ast: bool,
	/// Path to the DME of the codebase to dump.
	pub dme: PathBuf,
	/// Output folder for typescript definitions.
	pub output: Option<PathBuf>,
}
