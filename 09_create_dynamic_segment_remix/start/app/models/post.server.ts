import { prisma } from "~/db.server";

export async function getPostListings() {
  return prisma.post.findMany({
    select: {
      slug: true,
      title: true,
    },
  });
}

export async function getPosts() {
  return prisma.post.findMany();
}
