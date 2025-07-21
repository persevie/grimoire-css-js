# Grimoire CSS JS Monorepo

This repository provides the official JavaScript bindings and build tool plugins for [Grimoire CSS](https://github.com/persevie/grimoire-css) - a high-performance, Rust-powered CSS engine. It enables advanced, dynamic, and optimized CSS workflows for modern JS projects, with seamless integration into Vite, Rollup, and Webpack.

## Structure

- **grimoire-css-js/**  
  Node.js wrapper for Grimoire CSS. Provides CLI, API, and core config management.
- **plugins/**
  - **grimoire-css-js-vite/**  
    Vite plugin
  - **grimoire-css-js-rollup/**  
    Rollup plugin
  - **grimoire-css-js-webpack/**  
    Webpack plugin

## Getting Started

### Install Core Package

```bash
npm i @persevie/grimoire-css-js
```

### Install Plugins (as needed)

```bash
# Vite
npm i @persevie/grimoire-css-js-vite

# Rollup
npm i @persevie/grimoire-css-js-rollup

# Webpack
npm i @persevie/grimoire-css-js-webpack
```

## Usage

### CLI

```bash
grimoire-css-js init           # Create config
grimoire-css-js build          # Build CSS from sources
grimoire-css-js shorten        # Convert long property names to shorthands
```

### Bundler Plugins

For real-world plugin configuration examples, see the `test-app` folders in each plugin:

- [`plugins/grimoire-css-js-vite/test-app`](./plugins/grimoire-css-js-vite/test-app)
- [`plugins/grimoire-css-js-rollup/test-app`](./plugins/grimoire-css-js-rollup/test-app)
- [`plugins/grimoire-css-js-webpack/test-app`](./plugins/grimoire-css-js-webpack/test-app)

## Configuration

All features are controlled via a single `grimoire.config.json` file. Define spells, scrolls, variables, projects, shared/critical CSS, and more. See [Grimoire CSS docs](https://github.com/persevie/grimoire-css#configuration) for details.

## Migration

Convert existing CSS to Grimoire format using the [Transmutator](https://github.com/persevie/grimoire-css-transmutator) (CLI or Web UI).

## Resources

- [Grimoire CSS Documentation](https://github.com/persevie/grimoire-css)
- [Playground](https://grimoirecss.com/playground)

---

Grimoire CSS JS and its plugins deliver the full power of Grimoire’s engine to JavaScript projects - no compromises, no boilerplate, just pure CSS magic.
