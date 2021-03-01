import * as posts from "./controller.js";

export default async function (app) {
  // Create a new Post
  await app.post("/api/posts", posts.create);

  // Retrieve all Posts
  await app.get("/api/posts", posts.findAll);

  // Retrieve a single Post with postId
  await app.get("/api/posts/:postId", posts.findOne);

  // Update a Post with postId
  await app.put("/api/posts/:postId", posts.update);

  // Delete a Post with postId
  await app.delete("/api/posts/:postId", posts.deleted);
}
