"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import React from "react";

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

// LoadingLayout Component to wrap the layout
interface LoadingLayoutProps {
  children: ReactNode;
}

export default function LoadingLayout({ children }: LoadingLayoutProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate a loading state
    }, 2000); // Loading spinner will show for 2 seconds, you can adjust this or tie it to actual data fetching

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  if (loading) {
    return <LoadingSpinner />; // Show spinner if loading
  }

  return <>{children}</>; // Show children when loading is done
}
