#!/usr/bin/env node
const { spawn } = require("child_process");
const { normalize } = require("path");

// 'disconnect' is not needed as it will only be raised, when either the child process or this process calss disconnect explicitly.
// We are abel to ensure, that this will never happen, as we do not need communication with the spawned subprocess
const terminationSignal = ["close", "exit"];

function startSubprocess() {
  return new Promise((res, rej) => {
    const [command, ...args] = process.argv.slice(2);
    const proc = spawn(normalize(command), args, {
      stdio: ["pipe", "pipe", "pipe"],
      shell:
        process.platform === "win32" ||
        /^(msys|cygwin)$/.test(process.env.OSTYPE),
    });
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    process.stdin.pipe(proc.stdin);
    terminationSignal.forEach((event) => proc.on(event, res));
    proc.on("error", rej);
  });
}

async function loop() {
  let code = 64;
  while (code === 64) code = await startSubprocess();
}

loop();
