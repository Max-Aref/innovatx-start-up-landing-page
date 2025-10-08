import { marked } from "marked";
import DOMPurify from "dompurify";

// Configure marked for better rendering
marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: true,
  mangle: false,
});

/**
 * Safely parse and sanitize markdown content to HTML
 * @param {string} markdown - Raw markdown content
 * @returns {string} - Sanitized HTML string
 */
export function parseMarkdown(markdown) {
  if (!markdown) return "";

  // Parse markdown to HTML
  const rawHtml = marked.parse(markdown);

  // Sanitize HTML to prevent XSS attacks
  const cleanHtml = DOMPurify.sanitize(rawHtml, {
    ALLOWED_TAGS: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "br",
      "ul",
      "ol",
      "li",
      "strong",
      "em",
      "code",
      "pre",
      "blockquote",
      "a",
      "img",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
    ],
    ALLOWED_ATTR: ["href", "src", "alt", "title", "class", "id"],
  });

  return cleanHtml;
}

/**
 * Extract reading time estimate from content
 * @param {string} content - Article content
 * @returns {number} - Estimated reading time in minutes
 */
export function calculateReadingTime(content) {
  if (!content) return 0;

  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime;
}

/**
 * Get related posts based on shared tags
 * @param {object} currentPost - Current post object
 * @param {array} allPosts - Array of all posts
 * @param {number} limit - Maximum number of related posts to return
 * @returns {array} - Array of related posts
 */
export function getRelatedPosts(currentPost, allPosts, limit = 3) {
  if (!currentPost || !allPosts || allPosts.length === 0) return [];

  const currentTags = currentPost.tags || [];

  // Score posts based on shared tags
  const scoredPosts = allPosts
    .filter((post) => post.id !== currentPost.id)
    .map((post) => {
      const postTags = post.tags || [];
      const sharedTags = postTags.filter((tag) => currentTags.includes(tag));
      return {
        ...post,
        relevanceScore: sharedTags.length,
      };
    })
    .filter((post) => post.relevanceScore > 0)
    .sort((a, b) => {
      // Sort by relevance score, then by date
      if (b.relevanceScore === a.relevanceScore) {
        return new Date(b.date) - new Date(a.date);
      }
      return b.relevanceScore - a.relevanceScore;
    });

  // If we don't have enough related posts, fill with recent posts
  if (scoredPosts.length < limit) {
    const recentPosts = allPosts
      .filter((post) => post.id !== currentPost.id)
      .filter((post) => !scoredPosts.find((sp) => sp.id === post.id))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit - scoredPosts.length);

    return [...scoredPosts, ...recentPosts].slice(0, limit);
  }

  return scoredPosts.slice(0, limit);
}
