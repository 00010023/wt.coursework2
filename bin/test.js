/**
 * @name Serverland Test CI
 * @version 0.1.0 alpha
 * @description Express REST API Server for any purpose
 */

import isReachable from "is-reachable";
import colors from "colors";
import fetch from "node-fetch";
import port from "../apps/config/server.config";

// Test function created manually by myself
const test = async (endpoint) => {
  await fetch(`http://127.0.0.1:${port()}/` + endpoint, {
    method: "GET",
  })
    .then((res) => {
      switch (res.ok) {
        case true:
          console.log(`PASS`.bgGreen.white + ` /${endpoint || ""}`.yellow);
          break;
        case false:
          console.log(`FAIL`.bgRed.white + ` /${endpoint || ""}`.yellow);
          process.exit(1);
          break;
      }
    })
    .catch((err) => {
      throw new Error(err);
    });
};

// Main function
(async () => {
  // Initializing application for test
  await console.log(`\n` + `INIT PHASE`.bgYellow.red + `\n`);
  await require("../apps/config/env.config");
  await require("../apps/core/server")
    .launch()
    .then(async () => {
      await console.log("Server is being started".yellow.bold);
    })
    .catch((error) => {
      console.log(`Error occurred while executing: ${error}`.red.bold);
    });

  // Starting test phase
  switch (await isReachable(`http://127.0.0.1:${port()}`)) {
    case true:
      await console.log("Application is reachable!".green.bold);
      await console.log(`\n` + `TEST PHASE`.bgYellow.red + `\n`);
      await test("");
      await test("posts");
      await test("quotes");
      await console.log(`\n` + `FINISHED`.bgGreen.bold.white + `\n`);
      process.exit(0);
      break;
    case false:
      await console.log("Application is not reachable!".red.bold);
      await console.log(`\n` + `ABORTED`.bgRed.bold.white + `\n`);
      process.exit(0);
      break;
  }
})();
