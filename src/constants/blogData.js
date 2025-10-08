// Blog post metadata and content
// Each blog post links to a markdown file for full content

export const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: 2025 Trends and Predictions",
    slug: "ai-business-transformation",
    excerpt: "Discover how artificial intelligence is revolutionizing business operations and what trends to expect in 2025. From automated decision-making to enhanced customer experiences.",
    author: "Sarah Johnson",
    authorRole: "AI Research Director",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "AI & Technology",
    tags: ["AI", "Business", "Technology", "Innovation", "Automation"],
    featured: true,
  },
  {
    id: 2,
    title: "Digital Marketing Strategies That Drive Real Results in 2025",
    slug: "digital-marketing-strategies",
    excerpt: "Learn proven digital marketing strategies including SEO, content marketing, social media, and PPC advertising that deliver measurable business growth.",
    author: "Michael Chen",
    authorRole: "Digital Marketing Strategist",
    date: "January 12, 2025",
    readTime: "10 min read",
    category: "Digital Marketing",
    tags: ["Marketing", "SEO", "Social Media", "Content", "Strategy"],
    featured: true,
  },
  {
    id: 3,
    title: "Modern Web Development: Best Practices for 2025",
    slug: "web-development-best-practices",
    excerpt: "Explore essential web development best practices including responsive design, performance optimization, accessibility, and security for building exceptional websites.",
    author: "David Martinez",
    authorRole: "Lead Full Stack Developer",
    date: "January 10, 2025",
    readTime: "12 min read",
    category: "Web Development",
    tags: ["Development", "WebDev", "Performance", "Security", "Responsive"],
    featured: true,
  },
  {
    id: 4,
    title: "Building a Strong Brand Identity in the Digital Age",
    slug: "brand-identity-digital-age",
    excerpt: "Understand the core elements of brand identity and learn how to build a strong, consistent brand that resonates with your audience across all digital channels.",
    author: "Emily Rodriguez",
    authorRole: "Brand Strategy Director",
    date: "January 8, 2025",
    readTime: "9 min read",
    category: "Branding",
    tags: ["Branding", "Design", "Strategy", "Identity", "Marketing"],
    featured: false,
  },
  {
    id: 5,
    title: "Cloud Solutions: Transforming Business Operations",
    slug: "cloud-solutions-business",
    excerpt: "Discover how cloud computing enables businesses to scale efficiently, reduce costs, and enhance collaboration while maintaining security and reliability.",
    author: "James Wilson",
    authorRole: "Cloud Architecture Lead",
    date: "January 5, 2025",
    readTime: "11 min read",
    category: "Cloud Technology",
    tags: ["Cloud", "Technology", "Infrastructure", "Business", "Innovation"],
    featured: false,
  },
];

export const blogCategories = [
  "All",
  "AI & Technology",
  "Digital Marketing",
  "Web Development",
  "Branding",
  "Cloud Technology",
];

// Helper function to get blog post by slug
export const getBlogPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};

// Helper function to get blog post by id
export const getBlogPostById = (id) => {
  return blogPosts.find((post) => post.id === parseInt(id));
};

// Helper function to get related posts (same category, excluding current post)
export const getRelatedPosts = (currentPostId, limit = 3) => {
  const currentPost = getBlogPostById(currentPostId);
  if (!currentPost) return [];

  return blogPosts
    .filter(
      (post) =>
        post.id !== currentPostId && post.category === currentPost.category
    )
    .slice(0, limit);
};
