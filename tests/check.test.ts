import { describe, expect, it } from "vitest";
import { execSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

describe("letyar check", () => {
  it("passes for a valid Letyar project", () => {
    const testDir = mkdtempSync(join(tmpdir(), "letyar-check-"));
    const cliPath = resolve("dist/cli.js");

    try {
      for (const file of [
        "README.md",
        "letyar.config.json",
        "package.json",
        ".gitignore"
      ]) {
        existsSync(join(testDir, file));
      }

     execSync(`node "${cliPath}" init`, {
        cwd: testDir,
        encoding: "utf8"
      });

      const output = execSync(`node "${cliPath}" check`, {
        cwd: testDir,
        encoding: "utf8"
      });

      expect(output).toContain("Letyar Check");
      expect(output).toContain("5/5 checks passed");
    } finally {
      rmSync(testDir, { recursive: true, force: true });
    }
  });
});
