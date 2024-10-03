// src/app/page.tsx
import HomePage from "@/pages/Home";
import { getAllPosts, PostMeta } from "@/utils/getAllPosts";
import Card from "@/components/Card";

export default function Home() {
  const posts: PostMeta[] = getAllPosts();

  return (
    <div className="grid gap-16 mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <HomePage />

      <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Card
              key={post.slug}
              title={post.title}
              description={post.description}
              tags={post.tags}
              slug={post.slug}
              image={post.img}
            />
          ))
        ) : (
          <p className="text-center text-gray-600">No blog posts found.</p>
        )}
      </div>
    </div>
  );
}
