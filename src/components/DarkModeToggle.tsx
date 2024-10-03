// src/components/DarkModeToggle.tsx
"use client";

import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Check user's preference and update the state
  useEffect(() => {
    const storedPreference = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedPreference === "dark" || (!storedPreference && prefersDarkMode)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode and persist the preference
  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-gray-700 text-white px-4 py-2 rounded"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
