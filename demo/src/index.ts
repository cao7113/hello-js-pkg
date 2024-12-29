import { sayHello } from "@cao7113/hello-js-pkg";

const dependencyVersion = require("@cao7113/hello-js-pkg/package.json").version;
const hello = sayHello(`js from cao version: ${dependencyVersion}`);
console.log(hello);
