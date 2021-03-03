import * as posts from "./controller.js";

export default async function (app) {
  // Create a new Post
  await app.post("/api/v1/posts", await posts.create);

  // Retrieve all Posts
  await app.get("/api/v1/posts", await posts.findAll);

  // Retrieve a single Post with postId
  await app.get("/api/v1/posts/:postId", await posts.findOne);

  // Update a Post with postId
  await app.put("/api/v1/posts/:postId", await posts.update);

  // Delete a Post with postId
  await app.delete("/api/v1/posts/:postId", await posts.deleted);
}
