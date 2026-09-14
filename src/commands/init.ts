import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";

export function runInit(): void {
  const cwd = process.cwd();

  mkdirSync(join(cwd, "src"), { recursive: true });

  const files: Record<string, string> = {
    "package.json": `{
  "name": "my-project",
  "version": "1.0.0",
  "private": true
}
`,
    ".gitignore": `node_modules/
dist/
.env
.DS_Store
`,
    "letyar.config.json": `{
  "version": 1
}
`,
    "README.md": `# Project

Initialized with Letyar.

Every build carries a fingerprint.
`
  };

  for (const [file, content] of Object.entries(files)) {
    const path = join(cwd, file);

    if (!existsSync(path)) {
      writeFileSync(path, content, "utf8");
    }
  }

  if (!existsSync(join(cwd, ".git"))) {
    try {
      execSync("git init", { cwd, stdio: "ignore" });
    } catch {
      console.log("Git initialization skipped.");
    }
  }

  console.log("Letyar initialized.");
  console.log("Every build carries a fingerprint.");
}
