#!/usr/bin/env node

import { runInit } from "./commands/init.js";
import { runDoctor } from "./commands/doctor.js";
import { runCheck } from "./commands/check.js";

const command = process.argv[2];

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
    console.error("  letyar init    Initialize a project");
    console.error("  letyar doctor  Check development environment");
    console.error("  letyar check   Check project health");
    process.exitCode = 1;
}
