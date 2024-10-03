"use client";

import React, { useEffect, useState } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import AuthorLayout from "@/layouts/AuthorLayout";

interface AuthorProps {
  name: string;
  avatar: string;
  occupation: string;
  company: string;
  email: string;
  twitter: string;
  linkedin: string;
  github: string;
}

interface AboutPageProps {
  mdxSource: MDXRemoteSerializeResult;
  data: AuthorProps;
}

const AboutPage = () => {
  const [aboutPageData, setAboutPageData] = useState<AboutPageProps | null>(
    null
  );

  useEffect(() => {
    async function fetchAuthorData() {
      const response = await fetch("/api/author"); // Fetch from the API route
      const data = await response.json();
      setAboutPageData(data); // Set the response data
    }

    fetchAuthorData();
  }, []);

  if (!aboutPageData) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  return (
    <AuthorLayout content={aboutPageData.data}>
      <MDXRemote {...aboutPageData.mdxSource} />
    </AuthorLayout>
  );
};

export default AboutPage;
