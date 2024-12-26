import { describe, expect, it } from "bun:test";
import { sayHello } from "hello-js-pkg-cao";

describe("sayHello", () => {
  it("should return a greeting message", () => {
    // console.log(sayHello("Bun"));
    expect(sayHello("World")).toBe("Hello World!");
  });
});
