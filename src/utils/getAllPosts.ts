// src/lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  img: string;
};

// Get all posts along with their tags
export function getAllPosts(): PostMeta[] {
  const postsDirectory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((filename) => {
      const filePath = path.join(postsDirectory, filename);
      return fs.statSync(filePath).isFile() && filename.endsWith(".mdx");
    })
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");

      try {
        const { data } = matter(fileContent);

        // Strip the '#' from tags for URL purposes but keep them for display
        const cleanTags = (data.tags || []).map((tag: string) =>
          tag.startsWith("#") ? tag.substring(1) : tag
        );

        return {
          slug: filename.replace(".mdx", ""),
          title: data.title,
          description: data.description,
          tags: cleanTags, // use cleaned tags here
          img: data.img || "/images/default-blog.webp",
        };
      } catch (error) {
        console.error(`Error processing file: ${filename}`, error);
        throw error;
      }
    });
}

// Helper function to get all unique tags
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const allTags = posts.flatMap((post) => post.tags); // Extract all tags
  const uniqueTags = Array.from(new Set(allTags)); // Get unique tags
  return uniqueTags;
}
