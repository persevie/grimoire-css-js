# grimoire-css-js

**Grimoire CSS JS** is a high-performance Node.js wrapper for [Grimoire CSS](https://github.com/persevie/grimoire-css), a Rust-powered CSS engine. It brings Grimoire’s advanced styling, optimization, and dynamic composition features to the JavaScript ecosystem - usable via CLI, API, or build tool plugins.

## Installation

```bash
npm i @persevie/grimoire-css-js
```

## Usage

### CLI

```bash
grimoire-css-js init           # Create config
grimoire-css-js build          # Build CSS from sources
grimoire-css-js shorten        # Convert long spell components to shorthands
```

### Node.js API

```js
const { start } = require('@persevie/grimoire-css-js')
start('build') // or 'init', etc.
```

### Configuration

All features are controlled via a single `grimoire.config.json` file. Define spells, scrolls, variables, projects, shared/critical CSS, and more. See [Grimoire CSS docs](https://github.com/persevie/grimoire-css#configuration) for details.

## Build Tool Plugins

- [Rollup](./plugins/grimoire-css-js-rollup)
- [Vite](./plugins/grimoire-css-js-vite)
- [Webpack](./plugins/grimoire-css-js-webpack)

## Migration

Convert existing CSS to Grimoire format using the [Transmutator](https://github.com/persevie/grimoire-css-transmutator) (CLI or Web UI).

## Resources

- [Grimoire CSS Documentation](https://github.com/persevie/grimoire-css)
- [Playground](https://grimoirecss.com/playground)

---

Grimoire CSS JS brings the full power of Grimoire’s engine to JavaScript projects - no compromises, no boilerplate, just pure CSS magic.
