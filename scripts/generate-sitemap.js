/* eslint-env node */
/**
 * Dynamic Sitemap Generator for Innovatx Website
 *
 * This utility generates an XML sitemap dynamically based on your routes and blog content.
 * Use this during your build process or as a serverless function.
 *
 * Standards:
 * - XML Sitemap Protocol 0.9
 * - Google Search Console compatible
 * - W3C validated XML format
 *
 * Usage:
 * node scripts/generate-sitemap.js
 */

import fs from "fs";
import path from "path";

// Configuration
const SITE_URL = "https://www.innovatx.com"; // Update with your actual domain
const OUTPUT_PATH = "./public/sitemap.xml";

// Static routes with metadata
const staticRoutes = [
  {
    path: "/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    path: "/#features",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/#plans",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/#faq",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/#contact",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/mission/small-business",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/mission/startups",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/mission/inhouse-projects",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    path: "/book-consultation",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/careers",
    priority: "0.7",
    changefreq: "weekly",
  },
  {
    path: "/blog",
    priority: "0.8",
    changefreq: "weekly",
  },
];

/**
 * Get all blog post slugs from the blog-content directory
 */
function getBlogPosts() {
  const blogDir = path.join(process.cwd(), "blog-content");

  try {
    const files = fs.readdirSync(blogDir);
    return files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const slug = file.replace(".md", "");
        const stats = fs.statSync(path.join(blogDir, file));
        return {
          slug,
          lastmod: stats.mtime.toISOString().split("T")[0], // Format: YYYY-MM-DD
        };
      });
  } catch (error) {
    console.warn("Could not read blog-content directory:", error.message);
    return [];
  }
}

/**
 * Generate a single URL entry for the sitemap
 */
function generateUrlEntry(url, priority, changefreq, lastmod = null) {
  const lastmodDate = lastmod || new Date().toISOString().split("T")[0];

  return `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${lastmodDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

/**
 * Generate the complete sitemap XML
 */
function generateSitemap() {
  const today = new Date().toISOString().split("T")[0];

  // Start XML with proper headers
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- Generated automatically by sitemap generator -->
  <!-- Last updated: ${today} -->

  <!-- Static Routes -->
`;

  // Add static routes
  staticRoutes.forEach((route) => {
    xml += generateUrlEntry(
      route.path,
      route.priority,
      route.changefreq,
      today
    );
    xml += "\n\n";
  });

  // Add blog posts dynamically
  xml += "  <!-- Blog Articles -->\n";
  const blogPosts = getBlogPosts();

  blogPosts.forEach((post) => {
    xml += generateUrlEntry(
      `/blog/${post.slug}`,
      "0.7",
      "monthly",
      post.lastmod
    );
    xml += "\n\n";
  });

  // Close XML
  xml += "</urlset>\n";

  return xml;
}

/**
 * Write sitemap to file
 */
function writeSitemap() {
  try {
    const sitemap = generateSitemap();
    const outputPath = path.join(process.cwd(), OUTPUT_PATH);

    fs.writeFileSync(outputPath, sitemap, "utf8");

    console.log("✅ Sitemap generated successfully!");
    console.log(`📍 Location: ${outputPath}`);
    console.log(`🔗 URL: ${SITE_URL}/sitemap.xml`);

    // Count URLs
    const urlCount = (sitemap.match(/<url>/g) || []).length;
    console.log(`📊 Total URLs: ${urlCount}`);

    return true;
  } catch (error) {
    console.error("❌ Error generating sitemap:", error.message);
    return false;
  }
}

/**
 * Validate generated sitemap
 */
function validateSitemap() {
  try {
    const sitemapPath = path.join(process.cwd(), OUTPUT_PATH);
    const content = fs.readFileSync(sitemapPath, "utf8");

    // Basic validation checks
    const checks = {
      hasXmlDeclaration: content.startsWith("<?xml"),
      hasUrlset: content.includes("<urlset"),
      hasClosingUrlset: content.includes("</urlset>"),
      hasLocations: content.includes("<loc>"),
      properlyFormatted: content.includes(
        "http://www.sitemaps.org/schemas/sitemap/0.9"
      ),
    };

    const allPassed = Object.values(checks).every((check) => check === true);

    if (allPassed) {
      console.log("✅ Sitemap validation passed!");
    } else {
      console.warn("⚠️  Some validation checks failed:", checks);
    }

    return allPassed;
  } catch (error) {
    console.error("❌ Error validating sitemap:", error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log("🚀 Generating sitemap for Innovatx website...\n");

  const success = writeSitemap();

  if (success) {
    validateSitemap();

    console.log("\n📋 Next Steps:");
    console.log("1. Update SITE_URL in this file with your actual domain");
    console.log("2. Deploy your website with the updated sitemap.xml");
    console.log(
      "3. Submit to Google Search Console: https://search.google.com/search-console"
    );
    console.log(
      "4. Submit to Bing Webmaster Tools: https://www.bing.com/webmasters"
    );
    console.log(
      "\n💡 Tip: Run this script before each deployment to keep sitemap updated!"
    );
  }
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

// Export for use as module
export { generateSitemap, writeSitemap, validateSitemap, getBlogPosts };
