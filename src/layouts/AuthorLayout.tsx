import { ReactNode } from "react";
import Image from "next/image";
import SectionContainer from "@/components/SectionContainer";
import SocialIcon from "@/components/social-icons";
import Link from "next/link";

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
  if (!content) {
    return <div>Error: Author content is missing.</div>;
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
    <div className=" dark:divide-gray-700">
      {/* Top Section with author info */}
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-lg font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About
          <span className="px-2 text-gradient-blue">{name}</span>
        </h1>
      </div>

      {/* Full Width Section with 30%/70% Layout */}
      <SectionContainer fullWidth>
        {/* Author Details Layout */}
        <div className="flex flex-col sm:flex-row w-full gap-4 rounded-lg">
          {/* Left Column: Avatar and Info */}
          <div className="w-full sm:w-1/3 flex flex-col items-center sm:items-center justify-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            {/* Avatar */}
            {avatar ? (
              <Image
                src={avatar}
                alt="avatar"
                width={200}
                height={200}
                className="h-full w-full rounded-lg object-cover"
              />
            ) : (
              <div className="h-48 w-48 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-400">
                  No Avatar
                </span>
              </div>
            )}

            {/* Name and Info */}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
              {name}
            </h3>
            <div className="text-gray-800 dark:text-gray-300">{occupation}</div>
            <div className="text-gray-800 dark:text-gray-300">{company}</div>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-6">
              {email && <SocialIcon kind="mail" href={`mailto:${email}`} />}
              {github && <SocialIcon kind="github" href={github} />}
              {linkedin && <SocialIcon kind="linkedin" href={linkedin} />}
              {twitter && <SocialIcon kind="x" href={twitter} />}
            </div>
          </div>

          {/* Right Column: 70% width on larger screens */}
          <div className="w-full sm:w-2/3 flex flex-col justify-center bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
            {children}
          </div>
        </div>
      </SectionContainer>
      {/* Bottom Divider */}
      {/* <div className="divide-y divide-gray-200 dark:divide-gray-700"></div> */}
    </div>
  );
}
