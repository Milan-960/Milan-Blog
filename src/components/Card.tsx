"use client"; // This ensures the component is only run on the client

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { customLoader } from "@/utils";

type CardProps = {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  image: string;
};

export default function Card({
  title,
  description,
  tags,
  slug,
  image,
}: CardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.12)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
    >
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          loader={customLoader}
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Card content */}
      <div className="p-4">
        {/* Title */}
        <Link
          href={`/blog/${slug}`}
          className="text-2xl font-bold text-blue-600  hover:underline"
        >
          {title}
        </Link>

        {/* Description */}
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Link
              key={index}
              href={`/tags/${tag}`}
              className="inline-block bg-blue-100 text-blue-600 px-3 py-1 text-sm font-semibold rounded-full hover:underline hover:cursor-pointer"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
