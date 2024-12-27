import { sayHello } from "hello-js-pkg-cao";

const dependencyVersion = require("hello-js-pkg-cao/package.json").version;
const hello = sayHello(`js from cao version: ${dependencyVersion}`);
console.log(hello);
