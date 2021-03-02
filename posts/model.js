import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    title: String,
    author: { type: String, default: "Genemator" },
    snippet: String,
    content: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", PostSchema);
