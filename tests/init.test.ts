import { describe, expect, it } from "vitest";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { runInit } from "../src/commands/init.js";

describe("letyar init", () => {
  it("creates the required project files", () => {
    const testDir = mkdtempSync(join(tmpdir(), "letyar-test-"));
    const originalCwd = process.cwd();

    try {
      process.chdir(testDir);
      runInit();

      expect(existsSync(join(testDir, "src"))).toBe(true);
      expect(existsSync(join(testDir, "package.json"))).toBe(true);
      expect(existsSync(join(testDir, "README.md"))).toBe(true);
      expect(existsSync(join(testDir, "letyar.config.json"))).toBe(true);
      expect(existsSync(join(testDir, ".gitignore"))).toBe(true);
      expect(existsSync(join(testDir, ".git"))).toBe(true);
    } finally {
      process.chdir(originalCwd);
      rmSync(testDir, { recursive: true, force: true });
    }
  });
});
