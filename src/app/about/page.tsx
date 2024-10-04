"use client";

import { useEffect, useState } from "react";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { motion } from "framer-motion";
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

// Loading Spinner Component with Framer Motion
const LoadingSpinner = () => {
  return (
    <motion.div
      className="flex justify-center items-center h-screen"
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotate: 360 }} // Scaling and rotating animation
      transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }} // Infinite looping
    >
      <div className="h-16 w-16 border-4 border-t-transparent border-blue-500 rounded-full"></div>
    </motion.div>
  );
};

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

  // Show loading spinner while data is being fetched
  if (loading) return <LoadingSpinner />; // Show the animated loading spinner

  if (!authorData) return <div>Error: Failed to load author data</div>; // Error state

  // Pass the fetched data to the AboutPage component
  return <AboutPage mdxSource={authorData.mdxSource} data={authorData.data} />;
}
