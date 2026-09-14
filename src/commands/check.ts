import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";
import process from "node:process";

function checkFile(cwd: string, file: string): boolean {
  return existsSync(join(cwd, file));
}

function checkJsonFile(cwd: string, file: string): boolean {
  try {
    JSON.parse(readFileSync(join(cwd, file), "utf8"));
    return true;
  } catch {
    return false;
  }
}

function getGitStatus(cwd: string): string {
  try {
    return execSync("git status --short", {
      cwd,
      encoding: "utf8"
    }).trim();
  } catch {
    return "Git repository not found";
  }
}

export function runCheck(): void {
  const cwd = process.cwd();

  console.log("Letyar Check");
  console.log("Every build carries a fingerprint.");
  console.log("");

  const checks = [
    ["src", checkFile(cwd, "src")],
    ["package.json", checkFile(cwd, "package.json") && checkJsonFile(cwd, "package.json")],
    ["README.md", checkFile(cwd, "README.md")],
    [
      "letyar.config.json",
      checkFile(cwd, "letyar.config.json") &&
        checkJsonFile(cwd, "letyar.config.json")
    ],
    [".git", checkFile(cwd, ".git")]
  ] as const;

  let passed = 0;

  for (const [name, ok] of checks) {
    console.log(`${ok ? "✓" : "✗"} ${name}`);
    if (ok) passed++;
  }

  console.log("");
  console.log(`Result: ${passed}/${checks.length} checks passed`);

  if (passed < checks.length) {
    process.exitCode = 1;
  }

  console.log("");
  console.log("Git status:");

  const status = getGitStatus(cwd);
  console.log(status || "Clean");
}
