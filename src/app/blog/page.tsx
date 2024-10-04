// src/app/blog/page.tsx
import Link from "next/link";
import { getAllPosts, PostMeta } from "@/utils/getAllPosts";

export default function BlogPage() {
  const posts: PostMeta[] = getAllPosts(); // Fetch all posts

  return (
    <div className="mx-auto">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-lg font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Explore Blogs
        </h1>
      </div>
      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.slug} className="border-b pb-4">
              <Link
                href={`/blog/${post.slug}`}
                className="text-2xl font-bold text-gray-900 dark:text-white hover:underline"
              >
                {post.title}
              </Link>
              <p className="dark:text-white text-black mt-2">
                {post.description}
              </p>

              <div className="flex space-x-2 mt-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No blog posts found.</p>
        )}
      </div>
    </div>
  );
}
