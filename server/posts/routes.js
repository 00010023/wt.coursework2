import * as posts from "./controller.js";

export default async function (app) {
  // Create a new Post
  await app.post("/posts", await posts.create);

  // Retrieve all Posts
  await app.get("/posts", await posts.findAll);

  // Retrieve a single Post with postId
  await app.get("/posts/:postId", await posts.findOne);

  // Update a Post with postId
  await app.put("/posts/:postId", await posts.update);

  // Delete a Post with postId
  await app.delete("/posts/:postId", await posts.deleted);
}
