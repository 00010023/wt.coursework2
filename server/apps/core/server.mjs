/**
 * @name Server Bootstrap
 * The main server where everything will be initialized
 */

import cors from "cors";
import http from "http";
import express from "express";
import enforce from "express-sslify";
import env from "../config/env.config.mjs";
import bodyParser from "body-parser";
import database from "../database/mongoose.mjs";
import dbConfig from "../config/server.config.mjs";
import packager from "../config/package.config.mjs";

// Routes
import postRoutes from "../../posts/routes.mjs";

// Create express app
export const app = express();

export const launch = async () => {
  // Enforce https
  if (env.HOST === "heroku") {
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
  }

  // Parse apps/x-www.mjs-form-urlencoded
  await app.use(bodyParser.urlencoded({ extended: true }));

  // Cors
  await app.use(cors());

  // Parse apps/json
  await app.use(bodyParser.json());

  // Initializing MongoDB database
  await database();

  // Define a simple route
  await app.get("/", async (req, res) => {
    await res.redirect(process.env.WEBSITE);
  });

  await app.get("/docs", async (req, res) => {
    await res.redirect(process.env.DOCUMENTATION);
  });

  await app.get("/edit", async (req, res) => {
    await res.redirect(
      (await packager()).homepage.replace("github", "github1s")
    );
  });

  await app.get("/source", async (req, res) => {
    await res.redirect((await packager()).homepage);
  });

  // Connecting routes
  await postRoutes(app);

  // Error handling
  // Handle 404
  app.use(function (req, res) {
    res.status(400);
    res.json({ message: "404: Not Found" });
  });

  // Handle 500
  app.use(function (req, res, next, error) {
    res.status(500);
    res.json({ message: "500: Internal Server Error", error: error });
  });

  // Listen for requests
  await (async () => {
    if (env.HOST === "heroku") {
      await http.createServer(app).listen(await dbConfig(), () => {
        console.log(
          `Server is listening on port ${dbConfig()} => [heroku]`.yellow.bold
        );
      });
    } else {
      await app.listen(await dbConfig(), () => {
        console.log(
          `Server is listening on port ${dbConfig()} => [localhost]`.yellow.bold
        );
      });
    }
  })();
};
