const { spawn } = require("child_process");

const childPython = spawn("python", ["../src/script.py"]);

childPython.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});
