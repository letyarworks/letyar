import { describe, expect, it } from "vitest";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

describe("letyar check failure", () => {
  it("fails when package.json is invalid", () => {
    const testDir = mkdtempSync(join(tmpdir(), "letyar-check-failure-"));
    const cliPath = resolve("dist/cli.js");

    try {
      execFileSync("node", [cliPath, "init"], {
        cwd: testDir,
        encoding: "utf8"
      });

      writeFileSync(join(testDir, "package.json"), "{ invalid json");

      expect(() => {
        execFileSync("node", [cliPath, "check"], {
          cwd: testDir,
          encoding: "utf8",
          stdio: "pipe"
        });
      }).toThrow();

      expect(readFileSync(join(testDir, "package.json"), "utf8"))
        .toBe("{ invalid json");
    } finally {
      rmSync(testDir, { recursive: true, force: true });
    }
  });
});
