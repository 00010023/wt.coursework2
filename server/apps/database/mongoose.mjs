import colors from "colors";
import mongoose from "mongoose";
import database from "../config/database.config.mjs";

export default async () => {
  mongoose.Promise = global.Promise;

  // Connecting to the database
  await mongoose
    .connect(await database(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      retryWrites: true,
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
};
