#!/usr/bin/env bun

console.log("Hello js package!");

import { sayHello } from "../dist/index.js";
const dependencyVersion = require("../package.json").version;
const hello = sayHello(`js world on version: ${dependencyVersion}`);
console.log(hello);
