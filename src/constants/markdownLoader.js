// Use Vite's import.meta.glob to load all markdown files
const markdownFiles = import.meta.glob("/blog-content/*.md", {
  query: "?raw",
  import: "default",
  eager: false,
});

// Parse frontmatter manually (lightweight alternative to gray-matter)
function parseFrontmatter(fileContent) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, content: fileContent };
  }

  const frontmatterStr = match[1];
  const content = match[2];

  // Parse YAML-like frontmatter
  const frontmatter = {};
  frontmatterStr.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();

      // Remove quotes
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      // Parse arrays
      if (value.startsWith("[") && value.endsWith("]")) {
        value = value
          .slice(1, -1)
          .split(",")
          .map((v) => v.trim().replace(/['"]/g, ""));
      }

      frontmatter[key] = value;
    }
  });

  return { frontmatter, content };
}

export async function getAllBlogPosts() {
  const posts = await Promise.all(
    Object.entries(markdownFiles).map(async ([filepath, loader]) => {
      const fileContent = await loader();
      const { frontmatter, content } = parseFrontmatter(fileContent);
      const id = filepath.split("/").pop().replace(/\.md$/, "");

      return {
        id,
        ...frontmatter,
        content,
      };
    })
  );

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getBlogPostById(id) {
  const filepath = `/blog-content/${id}.md`;
  const loader = markdownFiles[filepath];

  if (!loader) return null;

  const fileContent = await loader();
  const { frontmatter, content } = parseFrontmatter(fileContent);

  return {
    id,
    ...frontmatter,
    content,
  };
}
