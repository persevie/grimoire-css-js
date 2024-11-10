#!/usr/bin/env node

const { sum } = require("./index");
const a = process.argv[2];
const b = process.argv[2];
console.log(sum(parseInt(a), parseInt(b)));
