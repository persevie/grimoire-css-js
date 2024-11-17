#!/usr/bin/env node

const { start } = require("./index.js");

const mode = process.argv[2];
start(mode);
