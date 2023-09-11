/// SPDX-License-Identifier: MIT OR Apache-2.0
/// Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
use dreammaker::ast::{
	AssignOp, BinaryOp, Expression, Follow, PropertyAccessKind, Spanned, Statement, Term,
};
use std::borrow::Cow;

fn translate_expression(expr: &Expression) -> Option<String> {
	match expr {
		Expression::AssignOp { op, lhs, rhs } => {
			let lhs_code = translate_expression(lhs)?;
			let rhs_code = translate_expression(rhs)?;
			let op_code = match op {
				AssignOp::Assign => Cow::from("="),
				AssignOp::AddAssign => Cow::from("+="),
				AssignOp::SubAssign => Cow::from("-="),
				// Add more cases here...
				_ => Cow::from(op.to_string()),
			};
			Some(format!("{} {} {}", lhs_code, op_code, rhs_code))
		}
		Expression::Base { term, follow } => {
			let mut base_code = match &term.elem {
				Term::Int(i) => i.to_string(),
				Term::Ident(ident) if ident == "A" => "stats".to_owned(),
				Term::Ident(ident) => ident.clone(),
				Term::Expr(expr) => translate_expression(expr)?,
				#[cfg(debug_assertions)]
				_ => format!("[Term::{:?}]", term.elem),
				#[cfg(not(debug_assertions))]
				_ => return None,
			};

			for follow_op in follow.iter() {
				match &follow_op.elem {
					Follow::Field(PropertyAccessKind::Dot, ident) => {
						base_code.push('.');
						base_code.push_str(ident);
					}
					#[cfg(debug_assertions)]
					_ => base_code.push_str(&format!("[FollowOp::{:?}]", follow_op)),
					#[cfg(not(debug_assertions))]
					_ => return None,
				}
			}
			Some(base_code)
		}
		Expression::BinaryOp { op, lhs, rhs } => {
			let lhs_code = translate_expression(lhs)?;
			let rhs_code = translate_expression(rhs)?;
			let op_code = match op {
				BinaryOp::Eq => Cow::Borrowed("==="),
				BinaryOp::NotEq => Cow::Borrowed("!=="),
				_ => Cow::Owned(op.to_string()),
			};
			Some(format!("{} {} {}", lhs_code, op_code, rhs_code))
		}

		#[cfg(debug_assertions)]
		_ => Some(format!("[Expression::{:?}]", expr)),
		#[cfg(not(debug_assertions))]
		_ => None,
	}
}

fn translate_statement(statement: &Statement, indent: usize) -> Option<String> {
	let indentation = "\t".repeat(indent);
	match statement {
		Statement::Expr(expr) => {
			translate_expression(expr).map(|expr| format!("{}{};\n", indentation, expr))
		}
		Statement::If { arms, else_arm } => {
			let mut if_str = String::new();
			for (i, (condition, block)) in arms.iter().enumerate() {
				if_str += &format!(
					"{}{}if ({}) {{\n",
					indentation,
					if i > 0 { "else " } else { "" },
					translate_expression(&condition.elem)?
				);
				for stmt in block.iter() {
					if_str += &translate_statement(&stmt.elem, indent + 1)?;
				}
				if_str += &format!("{}}}\n", indentation);
			}
			if let Some(else_block) = else_arm {
				if_str += &format!("{}else {{\n", indentation);
				for stmt in else_block.iter() {
					if_str += &translate_statement(&stmt.elem, indent + 1)?;
				}
				if_str += &format!("{}}}\n", indentation);
			}
			Some(if_str)
		}
		#[cfg(debug_assertions)]
		_ => Some(format!("[Statement::{:?}]", statement)),
		#[cfg(not(debug_assertions))]
		_ => None,
	}
}

pub fn translate_spanned_statements(block: &[Spanned<Statement>]) -> String {
	let mut ts_code = String::new();
	for spanned_stmt in block.iter() {
		if let Some(new_code) = translate_statement(&spanned_stmt.elem, 0) {
			ts_code += &new_code;
		}
	}
	ts_code
}
