import colors from "colors";
import env from "../config/env.config.js";
import mongoose from "mongoose";
import dbConfig from "../config/database.config.js";

export default async () => {
  mongoose.Promise = global.Promise;

  // Connecting to the database
  try {
    await mongoose
      .connect(await dbConfig(), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        retryWrites: true,
        w: "majority",
      })
      .then(async () => {
        await console.log("Successfully connected to the database".yellow.bold);
      })
      .catch(async (error) => {
        await console.log(
          "Could not connect to the database. Exiting now...",
          error
        );
        await process.exit(1);
      });
  } catch (errors) {
    console.log(errors.message);
  }
};
