// src/app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  const postFilePath = path.join(process.cwd(), "content", `${slug}.mdx`);

  if (!fs.existsSync(postFilePath)) {
    return <div>Post not found</div>;
  }

  const postContent = fs.readFileSync(postFilePath, "utf-8");
  const { data, content } = matter(postContent);

  return (
    <div className="mx-auto max-w-4xl p-8">
      <h1 className="text-4xl font-extrabold dark:text-white text-black text-center mb-6">
        {data.title}
      </h1>
      <div className="prose prose-lg dark:prose-dark mx-auto">
        <MDXRemote source={content} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}
