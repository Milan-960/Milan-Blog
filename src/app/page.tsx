// src/app/page.tsx
import HomePage from "@/pages/HomePage";
import { getAllPosts, PostMeta } from "@/utils/getAllPosts";
import Card from "@/components/Card";
import { getMetadata } from "@/utils/getMetadata";

// SEO metadata for the home page
export const metadata = getMetadata({
  title: "Welcome to My Blog",
  description:
    "Explore the latest articles on web development, JavaScript, and more.",
  keywords: ["blog", "Next.js", "SEO"],
  author: "Milan Sachani",
  robots: "index,follow",
  viewport: "width=device-width, initial-scale=1",
  canonical: "https://blog.milansachani.dev/",
  openGraph: {
    title: "Welcome to My Blog",
    description:
      "Explore the latest articles on web development, JavaScript, and more.",
    url: "https://blog.milansachani.dev/",
    type: "website",
    images: [
      {
        url: "/images/seo.png",
        alt: "A minimalistic blog banner for SEO purposes representing web development and JavaScript.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to My Blog",
    description:
      "Explore the latest articles on web development, JavaScript, and more.",
    images: ["https://your-site-url.com/blog-image.jpg"],
  },
});

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
