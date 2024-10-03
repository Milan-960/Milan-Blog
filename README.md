# Nextjs Blog App

A modern, responsive blog application built with **Next.js**, **MDX**, **Tailwind CSS**, and **Framer Motion**. This blog features dark mode support, dynamic content generation from Markdown (MDX), and SEO enhancements with a sitemap and robots.txt.

## Features

- **Dark Mode Support**: Toggle between dark and light themes.
- **Dynamic Content with MDX**: Write blog posts using Markdown (MDX) and render them as dynamic pages.
- **SEO-Optimized**: Automatically generates `sitemap.xml` and `robots.txt` for improved search engine visibility.
- **Responsive Design**: Optimized for mobile and desktop with a clean, responsive UI.
- **Smooth Animations**: Includes beautiful animations using **Framer Motion**.
- **Tag-based categorization**: Organize posts with tags like `#reactjs` or `#nextjs`.

## Demo

You can view the live demo of this blog at [https://yourblogdomain.com](https://yourblogdomain.com).

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Writing a Blog Post](#writing-a-blog-post)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started, clone this repository and install the dependencies:

```bash
git clone https://github.com/Milan-960/nextjs-blog-app.git
cd my-blog-app
npm install
``````

## Running the Project Locally

- To run the project locally:

```
npm run dev
```

- The app will be available at http://localhost:3000.

## Project Structure

The main files and folders:

```bash
my-blog-app/
├── content/                   # Blog posts written in MDX
│   └── first-post.mdx
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Layout component for the blog
│   │   ├── page.tsx           # Homepage rendering the list of blog posts
│   │   └── [slug].tsx         # Dynamic blog post pages
│   ├── components/
│   │   ├── Card.tsx           # Blog post card component
│   │   ├── DarkModeToggle.tsx # Dark mode toggle component
│   │   └── Navbar.tsx         # Navbar component
│   ├── scripts/
│   │   └── sitemap.mjs        # Sitemap generation script
│   └── utils/
│       └── getAllPosts.ts     # Utility to fetch all MDX blog posts
├── public/
│   ├── images/                # Blog post images and assets
│   ├── favicon.ico
│   └── robots.txt             # SEO robots.txt file
├── .env                       # Environment variables for project
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.mjs             # Next.js configuration with MDX and other plugins
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project scripts and dependencies
```

### Writing a Blog Post

- Blog posts are written in the content/ folder using MDX. Example blog post:

```
---
title: "First Blog Post"
description: "This is a brief introduction to my first blog post."
tags: ["#reactjs", "#nextjs"]
img: "/images/blog1.jpg"
---

# Welcome to My First Post

This is a sample blog post written in **MDX**. You can use Markdown and JSX together to create dynamic content.

You can also include images and components inside your posts.
```

## Environment Variables

- You will need to set up a .env file in the root of your project with the following values:

```bash
NEXT_PUBLIC_BASE_URL=https://yourblogdomain.com
```

## Scripts

- `npm run dev`: Starts the development server at http://localhost:3000.
- `npm run build`: Builds the application for production.
- `npm run start`: Runs the production build.
- `npm run lint`: Runs ESLint to check for issues.

## Deployment

This project is easily deployable on platforms like Vercel. Make sure to configure your environment variables in the Vercel dashboard.

## Sitemap Generation

The sitemap is generated automatically during the build step. You can view the sitemap at /sitemap.xml in production. This helps search engines crawl and index your pages.

## Dark Mode

Users can toggle between dark and light mode using the built-in toggle. The theme is automatically saved in localStorage.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.


### How to Use It

1. **Update the necessary links**: Replace placeholder links like `https://yourblogdomain.com` with your actual domain or GitHub repository URL.
2. **Personalize the description**: Tailor the introduction and features list based on your preferences.
3. **Add a License**: You can include an open-source license like MIT or any other license based on your requirements.

This template should be good to go for sharing on GitHub as a community project!





