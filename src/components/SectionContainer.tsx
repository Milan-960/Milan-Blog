import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  fullWidth?: boolean;
}

export default function SectionContainer({
  children,
  fullWidth = false,
}: Props) {
  return (
    <section
      className={`${
        fullWidth
          ? "w-full max-w-none" // Full width for specific layouts
          : "mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0" // Restrict width for other layouts
      }`}
    >
      {children}
    </section>
  );
}
