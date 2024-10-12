import React from "react";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

// Custom MDX components to handle images and GIFs
const mdxComponents = {
  img: ({ src, alt, ...props }: any) => {
    const isHeaderImage = alt === "MDX Header Image"; // Target the first image by alt text
    const isGif = src.endsWith(".gif"); // Check if the image is a GIF

    if (isGif) {
      // Use a regular <img> tag for GIFs
      return (
        <Image
          src={src}
          alt={alt}
          width={isHeaderImage ? 1200 : 800} // Default width for header vs other images
          height={isHeaderImage ? 250 : 400} // Height for header image
          className={
            isHeaderImage
              ? "object-cover w-full h-full" // Tailwind CSS for object-cover
              : "object-contain w-full h-auto" // Tailwind CSS for object-contain
          }
          {...props}
        />
      );
    }

    // Use next/image for non-GIF images
    return (
      <div className={isHeaderImage ? "w-full h-[250px]" : "w-full h-auto"}>
        <Image
          src={src}
          alt={alt}
          width={isHeaderImage ? 1200 : 800} // Default width for header vs other images
          height={isHeaderImage ? 250 : 400} // Height for header image
          className={
            isHeaderImage
              ? "object-cover w-full h-full" // Tailwind CSS for object-cover
              : "object-contain w-full h-auto" // Tailwind CSS for object-contain
          }
          {...props}
        />
      </div>
    );
  },
};

type BlogPostProps = {
  params: {
    slug: string;
  };
};

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = params;
  const postFilePath = path.join(process.cwd(), "content", `${slug}.mdx`);

  if (!fs.existsSync(postFilePath)) {
    return { title: "Post not found - Milan's Blog" };
  }

  const postContent = fs.readFileSync(postFilePath, "utf-8");
  const { data } = matter(postContent);

  return {
    title: `${data.title} - Milan's Blog`,
    description: data.description || "Milan's Blog Post",
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  const postFilePath = path.join(process.cwd(), "content", `${slug}.mdx`);

  if (!fs.existsSync(postFilePath)) {
    return <div>Post not found</div>;
  }

  const postContent = fs.readFileSync(postFilePath, "utf-8");
  const { content } = matter(postContent);

  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="prose dark:prose-dark">
        {/* Pass custom components to MDXRemote */}
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </div>
  );
}

// Static path generation for blog posts
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}
