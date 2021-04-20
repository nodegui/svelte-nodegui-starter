#!/usr/bin/env node
const { spawn } = require("child_process");
const { normalize } = require("path");

const termiateSignals = ["close", "exit", ""];

function startSubprocess() {
  return new Promise((res, rej) => {
    const proc = spawn(process.argv.slice(2).map(normalize).join(" "), {
      stdio: ["pipe", "pipe", "pipe"],
      shell:
        process.platform === "win32" ||
        /^(msys|cygwin)$/.test(process.env.OSTYPE),
    });
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    process.stdin.pipe(proc.stdin);
    termiateSignals.forEach((e) => proc.on(e, res));
    proc.on("error", rej);
  });
}

async function loop() {
  let code = 64;
  while (code === 64) code = await startSubprocess();
}

loop();
