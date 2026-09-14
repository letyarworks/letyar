import { execSync } from "node:child_process";
import process from "node:process";

function getVersion(command: string): string {
  try {
    return execSync(command, { encoding: "utf8" }).trim();
  } catch {
    return "Not found";
  }
}

export function runDoctor(): void {
  console.log("Letyar Doctor");
  console.log("Every build carries a fingerprint.");
  console.log("");

  const nodeVersion = getVersion("node --version");
  const npmVersion = getVersion("npm --version");
  const gitVersion = getVersion("git --version");

  console.log(`OS: ${process.platform} ${process.arch}`);
  console.log(`Node.js: ${nodeVersion}`);
  console.log(`npm: ${npmVersion}`);
  console.log(`Git: ${gitVersion}`);

  const nodeOk = nodeVersion !== "Not found";
  const npmOk = npmVersion !== "Not found";
  const gitOk = gitVersion !== "Not found";

  if (!nodeOk || !npmOk || !gitOk) {
    process.exitCode = 1;
  }
}
