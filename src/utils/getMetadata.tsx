// src/utils/getMetadata.ts

// Define the interface for Open Graph properties
interface OpenGraphParams {
  title: string;
  description: string;
  url: string;
  type: string;
  images: {
    url: string;
    alt: string;
  }[];
}

// Define the interface for Twitter properties
interface TwitterParams {
  card: string;
  title: string;
  description: string;
  images: string[];
}

// Define the interface for the metadata parameters
interface MetadataParams {
  title: string;
  description?: string;
  keywords?: string[];
  url?: string;
  image?: string;
  ogType?: string;
  author?: string;
  robots?: string;
  viewport?: string;
  canonical?: string;
  openGraph?: OpenGraphParams;
  twitter?: TwitterParams;
}

// Updated getMetadata function with proper typing
export function getMetadata({
  title,
  description = "A blog app with dark mode and smooth animations.",
  keywords = ["blog", "Next.js", "SEO"],
  url = "https://your-site-url.com",
  image = "https://your-site-url.com/default-image.jpg",
  ogType = "website",
  author = "Your Name",
  robots = "index,follow",
  viewport = "width=device-width, initial-scale=1",
  canonical = "https://your-site-url.com",
  openGraph,
  twitter,
}: MetadataParams) {
  return {
    title,
    description,
    keywords,
    author,
    robots,
    viewport,
    canonical,
    openGraph: openGraph || {
      title,
      description,
      url,
      type: ogType,
      images: [
        {
          url: image,
          alt: `${title} image`,
        },
      ],
    },
    twitter: twitter || {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
