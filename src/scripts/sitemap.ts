import { getAllPosts } from '../utils/getAllPosts.js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

const generateSitemap = () => {
  const posts = getAllPosts();

  const sitemapEntries = posts.map((post) => {
    return `
      <url>
        <loc>${baseUrl}/blog/${post.slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.8</priority>
      </url>
    `;
  });

  // Make sure there's no whitespace before this line
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapEntries.join('\n')}
    </urlset>
  `;

  // Write the sitemap to the public directory
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap.trim()); // .trim() to remove potential surrounding whitespace
};

generateSitemap();
