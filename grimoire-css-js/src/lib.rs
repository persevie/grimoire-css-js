#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn start(mode: String) {
  if let Err(e) = grimoire_css_lib::start_as_cli(vec![String::new(), mode]) {
    eprintln!("Error: {}", e);
  }
}
