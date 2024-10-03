import fs from 'fs';
import path from 'path';
import { getAllPosts } from '../utils/getAllPosts';  // Correct path

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com';

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

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapEntries.join('\n')}
    </urlset>
  `;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
};

generateSitemap();
