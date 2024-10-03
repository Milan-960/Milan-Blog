import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export async function GET() {
  const authorFilePath = path.join(
    process.cwd(),
    "content",
    "author",
    "author.mdx"
  );
  const authorContent = fs.readFileSync(authorFilePath, "utf-8");
  const { content, data } = matter(authorContent); // Extract frontmatter and content
  const mdxSource = await serialize(content); // Serialize the content for rendering

  return NextResponse.json({
    mdxSource,
    data,
  });
}
