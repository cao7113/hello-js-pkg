import { sayHello } from "hello-js-pkg-cao";

const dependencyVersion = require('hello-js-pkg-cao/package.json').version;
let hello = sayHello("js from cao version: " + dependencyVersion);
console.log(hello);