// scripts/sitemap.ts
import fs from "fs";
import path from "path";

const generateSitemap = () => {
  const baseUrl = "https://your-site.com";
  const pagesDirectory = path.join(process.cwd(), "src/app");
  const contentDirectory = path.join(process.cwd(), "content");
  const pagePaths = fs.readdirSync(pagesDirectory);
  const contentPaths = fs.readdirSync(contentDirectory);

  const urls = pagePaths.map(
    (page) => `${baseUrl}/${page.replace(".tsx", "")}`
  );
  const blogUrls = contentPaths.map(
    (file) => `${baseUrl}/blog/${file.replace(".mdx", "")}`
  );

  const sitemapContent = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${[...urls, ...blogUrls]
        .map((url) => `<url><loc>${url}</loc></url>`)
        .join("\n")}
    </urlset>
  `;

  fs.writeFileSync(
    path.join(process.cwd(), "public", "sitemap.xml"),
    sitemapContent
  );
};

generateSitemap();
