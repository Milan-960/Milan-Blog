// apps/tags/page.tsx
import Link from "next/link";
import { getAllTags } from "@/utils/getAllPosts";

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="mx-auto">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-lg font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          All Tags
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {tags.length > 0 ? (
          tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              {tag}
            </Link>
          ))
        ) : (
          <p>No tags found.</p>
        )}
      </div>
    </div>
  );
}
