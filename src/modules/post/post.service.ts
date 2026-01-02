import { Post } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

//  create a new post
const createPost = async (
  data: Omit<Post, "id" | "createdAt" | "updatedAt">
) => {
  const result = await prisma.post.create({
    data,
  });
  return result;
};

// get all post
const getAllPost = async () => {
  const result = await prisma.post.findMany();
  return result;
};

export const PostService = {
  createPost,
  getAllPost,
};
