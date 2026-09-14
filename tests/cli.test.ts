import { describe, expect, it } from "vitest";
import { execFileSync } from "node:child_process";
import { resolve } from "node:path";

describe("Letyar CLI", () => {
  it("fails for an unknown command", () => {
    const cliPath = resolve("dist/cli.js");

    expect(() => {
      execFileSync("node", [cliPath, "unknown"], {
        encoding: "utf8",
        stdio: "pipe"
      });
    }).toThrow();
  });
});
