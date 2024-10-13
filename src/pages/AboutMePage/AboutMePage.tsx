"use client";

import React, { useEffect, useState } from "react";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { motion } from "framer-motion";
import AboutPage from "@/pages/AboutMePage/AboutPage";

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
      animate={{ scale: 1, rotate: 360 }}
      transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
    >
      <div className="h-16 w-16 border-4 border-t-transparent border-blue-500 rounded-full"></div>
    </motion.div>
  );
};

export default function AboutMePage() {
  const [authorData, setAuthorData] = useState<AuthorProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        const res = await fetch("/api/author");
        const data: AuthorProps = await res.json();
        setAuthorData(data);
      } catch (error) {
        console.error("Failed to fetch author data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthorData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (!authorData) return <div>Error: Failed to load author data</div>;

  return (
    <>
      <AboutPage mdxSource={authorData.mdxSource} data={authorData.data} />
    </>
  );
}
