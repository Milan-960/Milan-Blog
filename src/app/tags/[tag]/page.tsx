import { getAllPosts } from "@/utils/getAllPosts";
import Link from "next/link";

type TagPageProps = {
  params: {
    tag: string;
  };
};

// This is for the tag metadata
export async function generateMetadata({ params }: TagPageProps) {
  const { tag } = params;
  const allPosts = getAllPosts();
  const filteredPosts = allPosts.filter((post) => post.tags.includes(tag));

  const description =
    filteredPosts.length > 0
      ? `Posts tagged with ${tag} on Milan's Blog.`
      : `No posts found for the tag ${tag}.`;

  return {
    title: `Posts tagged with ${tag} - Milan's Blog`,
    description,
  };
}

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const allPosts = getAllPosts();
  const filteredPosts = allPosts.filter((post) => post.tags.includes(tag));

  return (
    <div className="mx-auto">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-lg font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Posts with tag:
          <span className="px-2 text-blue-500 dark:text-blue-500">{tag}</span>
        </h1>
      </div>
      {filteredPosts.length > 0 ? (
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.slug} className="mb-4">
              <Link
                href={`/blog/${post.slug}`}
                className="text-lg font-semibold text-blue-500 hover:underline"
              >
                {post.title}
              </Link>
              <p className="text-gray-500">{post.description}</p>
              <div className="flex space-x-2 mt-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found for this tag.</p>
      )}
    </div>
  );
}

// Static paths for tag pages
export async function generateStaticParams() {
  const posts = getAllPosts();
  const tags = posts.flatMap((post) => post.tags);
  const uniqueTags = Array.from(new Set(tags));

  return uniqueTags.map((tag) => ({
    tag,
  }));
}
