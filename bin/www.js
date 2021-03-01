/**
 * @name Serverland
 * @version 1.0.0 beta
 * @description Express REST API Server for any purpose
 */

// Loading up environment
import "../apps/config/env.config.js";
import * as server from "../apps/core/server.js";

// Starting up an Express based application
server
  .launch()
  .then(async () => {
    await console.log("Server is being started".green.bold);
  })
  .catch(async (error) => {
    await console.log(`Error occurred while executing: ${error}`.red.bold);
    await console.log(error);
  });
