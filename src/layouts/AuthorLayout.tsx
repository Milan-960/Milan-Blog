import { ReactNode } from "react";
import SocialIcon from "@/components/social-icons";
import Image from "next/image";

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

interface Props {
  children: ReactNode;
  content?: AuthorProps;
}

export default function AuthorLayout({ children, content }: Props) {
  console.log("🚀 ~ AuthorLayout ~ content:", content);
  if (!content) {
    return <div>Error: Author content is missing.</div>; // Handle missing content
  }

  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
  } = content;

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About
        </h1>
      </div>

      {/* Responsive Flexbox Layout */}
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        {/* Left Column: Avatar and Info */}
        <div className="flex-shrink-0 flex flex-col items-center sm:items-start sm:text-left sm:w-1/3">
          {/* Avatar Rendering */}

          {avatar ? (
            <Image
              src={avatar}
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full object-cover"
            />
          ) : (
            <div className="h-48 w-48 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600">No Avatar</span>
            </div>
          )}

          {/* Name and Info */}
          <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight text-white">
            {name}
          </h3>
          <div className="text-gray-400">{occupation}</div>
          <div className="text-gray-400">{company}</div>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-6">
            {email && <SocialIcon kind="mail" href={`mailto:${email}`} />}
            {github && <SocialIcon kind="github" href={github} />}
            {linkedin && <SocialIcon kind="linkedin" href={linkedin} />}
            {twitter && <SocialIcon kind="x" href={twitter} />}
          </div>
        </div>

        {/* Right Column: About Text */}
        <div className="flex-1 prose max-w-none dark:prose-dark sm:pt-0 sm:pb-0 pt-8">
          {children}
        </div>
      </div>
    </div>
  );
}
