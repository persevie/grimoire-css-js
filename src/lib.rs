#![deny(clippy::all)]

use grimoire_css_lib;

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn start(mode: String) {
  if let Err(e) = grimoire_css_lib::start(mode) {
    eprintln!("Error: {}", e);
  }
}
