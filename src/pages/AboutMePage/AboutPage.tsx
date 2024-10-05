import { MDXRemote } from "next-mdx-remote";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
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

export default function AboutPage({ mdxSource, data }: AboutPageProps) {
  return (
    <AuthorLayout content={data}>
      <MDXRemote {...mdxSource} />
    </AuthorLayout>
  );
}
