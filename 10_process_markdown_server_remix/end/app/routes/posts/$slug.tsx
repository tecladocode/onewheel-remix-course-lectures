import { marked } from "marked";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getPost } from "~/models/post.server";

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  const html = marked(post.markdown);
  return json({ title: post.title, html });
};

export default function PostRoute() {
  const { title, html } = useLoaderData();
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
