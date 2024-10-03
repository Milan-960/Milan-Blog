"use client"; // This is necessary for Next.js app directory to use hooks

import { useEffect, useState } from "react";
import { MDXRemoteSerializeResult } from "next-mdx-remote"; // Import the type for mdxSource
import AboutPage from "@/pages/AboutPage";

interface AuthorProps {
  mdxSource: MDXRemoteSerializeResult;
  data: {
    name: string;
    avatar: string;
    occupation: string;
    company: string;
    email: string;
    twitter: string;
    linkedin: string;
    github: string;
  };
}

export default function AboutMePage() {
  const [authorData, setAuthorData] = useState<AuthorProps | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch author data from the API
  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        const res = await fetch("/api/author");
        const data: AuthorProps = await res.json(); // Type assertion for the data
        setAuthorData(data);
      } catch (error) {
        console.error("Failed to fetch author data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthorData();
  }, []);

  if (loading) return <div>Loading...</div>; // Loading state
  if (!authorData) return <div>Error: Failed to load author data</div>; // Error state

  // Pass the fetched data to the AboutPage component
  return <AboutPage mdxSource={authorData.mdxSource} data={authorData.data} />;
}
