import { describe, expect, it } from "vitest";
import { execSync } from "node:child_process";

describe("letyar doctor", () => {
  it("detects the development environment", () => {
    const output = execSync("node dist/cli.js doctor", {
      encoding: "utf8"
    });

    expect(output).toContain("Letyar Doctor");
    expect(output).toContain("Node.js:");
    expect(output).toContain("npm:");
    expect(output).toContain("Git:");
  });
});
