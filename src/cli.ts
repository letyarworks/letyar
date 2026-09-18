#!/usr/bin/env node
import { runInit } from "./commands/init.js";
import { runDoctor } from "./commands/doctor.js";
import { runCheck } from "./commands/check.js";

const command = process.argv[2];

if (command === "--version" || command === "-v") {
  console.log("Letyar CLI v1.0.0");
  process.exit(0);
}

switch (command) {
  case "init":
    runInit();
    break;

  case "doctor":
    runDoctor();
    break;

  case "check":
    runCheck();
    break;

  default:
    console.error("Unknown command.");
    console.error("");
    console.error("Commands:");
    console.error("  letyar init      Initialize a project");
    console.error("  letyar doctor    Check development environment");
    console.error("  letyar check     Check project health");
    console.error("  letyar --version Show CLI version");
    process.exitCode = 1;
}

