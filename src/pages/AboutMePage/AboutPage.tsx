import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import AuthorLayout from "@/layouts/AuthorLayout";

// Define MDX components for custom rendering
const mdxComponents = {
  h1: (props: any) => (
    <h1 className="text-4xl font-extrabold mb-4" {...props} />
  ),
  h2: (props: any) => <h2 className="text-3xl font-bold mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-semibold mb-2" {...props} />,
  p: (props: any) => <p className="mb-4 leading-relaxed" {...props} />,
  code: (props: any) => (
    <code className="bg-gray-200 rounded-md px-2 py-1 text-sm" {...props} />
  ),
  pre: (props: any) => (
    <pre
      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"
      {...props}
    />
  ),
};

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

// Pass the `mdxComponents` to `MDXRemote`
export default function AboutPage({ mdxSource, data }: AboutPageProps) {
  return (
    <AuthorLayout content={data}>
      <MDXRemote {...mdxSource} components={mdxComponents} />
    </AuthorLayout>
  );
}
