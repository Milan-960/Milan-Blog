// src/app/about/page.tsx

import AboutMePage from "@/pages/AboutMePage/AboutMePage";
import { getMetadata } from "@/utils/getMetadata";

// Define the metadata at the server level
export const metadata = getMetadata({
  title: "About me - My Blog",
  description: "Learn more about the author of this blog.",
});

// Import the client component here, ensuring metadata is separate
export default function AboutPageWrapper() {
  return <AboutMePage />;
}
