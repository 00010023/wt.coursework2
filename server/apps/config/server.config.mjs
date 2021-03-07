/**
 * This function initializes which PORT should engine use
 * @description If code is being run in heroku, it chooses the
 * heroku provided PORT number, if it's local, then it chooses local
 * preferred port
 */

import env from "./env.config.mjs";

export default function () {
  if (env.HOST === "heroku") return env.PORT;
  else if (env.HOST === "test") return 3001;
  else return 3001;
}
