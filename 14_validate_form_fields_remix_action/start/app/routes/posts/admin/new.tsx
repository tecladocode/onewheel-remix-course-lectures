import { Form } from "@remix-run/react";
import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { createPost } from "~/models/post.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");

  await createPost({ title, slug, markdown });
  return redirect("/posts/admin");
};

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

export default function NewPostRoute() {
  return (
    <Form method="post">
      <p>
        <label>
          Post Title:
          <input type="text" name="title" className={inputClassName} />
        </label>
      </p>
      <p>
        <label>
          Post Slug:
          <input type="text" name="slug" className={inputClassName} />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">Markdown:</label>
        <textarea
          id="markdown"
          rows={20}
          name="markdown"
          className={`${inputClassName} font-mono`}
        />
      </p>
      <p className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
        >
          Create Post
        </button>
      </p>
    </Form>
  );
}
