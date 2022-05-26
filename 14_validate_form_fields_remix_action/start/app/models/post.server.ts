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

export async function getPost(slug: string) {
  return prisma.post.findUnique({
    where: {
      slug,
    },
  });
}

export async function createPost(post) {
  return prisma.post.create({
    data: post,
  });
}
