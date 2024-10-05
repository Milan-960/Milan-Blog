// src/app/about/page.tsx

import AboutMePage from "@/pages/AboutMePage/AboutMePage";
import { getMetadata } from "@/utils/getMetadata";

// SEO metadata for the home page
export const metadata = getMetadata({
  title: "About me - My Blog",
  description:
    "Learn more about Milan Sachani, a Software Engineer, and the creator of this blog. Explore the latest articles on web development, JavaScript, and more.",
  keywords: ["blog", "Next.js", "SEO"],
  author: "Milan Sachani",
  robots: "index,follow",
  viewport: "width=device-width, initial-scale=1",
  canonical: "https://blog.milansachani.dev/",
  openGraph: {
    title: "About me - My Blog",
    description:
      "Learn more about Milan Sachani, a Software Engineer, and the creator of this blog. Explore the latest articles on web development, JavaScript, and more.",
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
    title: "About me - My Blog",
    description:
      "Explore the latest articles on web development, JavaScript, and more.",
    images: ["/images/seo.png"],
  },
});

// Import the client component here, ensuring metadata is separate
export default function AboutPageWrapper() {
  return <AboutMePage />;
}
