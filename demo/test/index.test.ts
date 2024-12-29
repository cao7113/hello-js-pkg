import { describe, expect, it } from "bun:test";
import { sayHello } from "@cao7113/hello-js-pkg";

describe("sayHello", () => {
  it("should return a greeting message", () => {
    // console.log(sayHello("Bun"));
    expect(sayHello("World")).toBe("Hello World!");
  });
});
