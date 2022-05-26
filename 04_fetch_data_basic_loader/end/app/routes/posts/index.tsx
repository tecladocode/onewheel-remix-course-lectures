import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export const loader = async () => {
  const posts = [
    {
      slug: "my-first-post",
      title: "My First Post!",
    },
    {
      slug: "trail-riding-with-onewheel",
      title: "Trail Riding with Onewheel",
    },
  ];

  return json({ posts });
};

export default function PostsRoute() {
  const { posts } = useLoaderData();

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
