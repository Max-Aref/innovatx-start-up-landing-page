import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { blogPosts, blogCategories } from "../constants/blogData";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#040016] via-[#090024] to-[#040016]">
      {/* Gradient overlay to match hero section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040016] via-[#090024] to-[#040016] opacity-90"></div>

      <Element name="blog" className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section with increased margin */}
          <div className="text-center mb-[200px]">
            <p className="sectionSubText text-p3">Stay Updated</p>
            <h1 className="sectionHeadText text-[#79f0da] mb-6">Our Blog</h1>
            <p className="text-p4 max-w-3xl mx-auto text-lg">
              Discover the latest insights, trends, and best practices in
              technology, digital transformation, and business innovation from
              our expert team.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Search Bar */}
              <div className="w-full md:w-[320px]">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-s2 text-white py-3 px-4 rounded-lg border border-s3 focus:border-[#79f0da] focus:outline-none transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="w-full md:flex-1 flex flex-wrap gap-2 justify-start">
                {blogCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-[#79f0da] text-black"
                        : "bg-s2 text-p4 hover:bg-s3 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-s2 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-s3"
              >
                {/* Post Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-[#79f0da] to-[#6de0ca] flex items-center justify-center">
                  <div className="text-black font-bold text-xl">
                    {post.category}
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#79f0da] text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-p4 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3 line-clamp-2 cursor-pointer hover:text-[#79f0da] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-p4 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-s3 text-p4 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-s3">
                    <div>
                      <p className="text-white text-sm font-medium">
                        {post.author}
                      </p>
                      <p className="text-p4 text-xs">{post.authorRole}</p>
                    </div>
                    <span className="text-p4 text-xs">{post.date}</span>
                  </div>

                  {/* "Read More" navigates to the full article page */}
                  <div className="mt-4">
                    <Link to={`/blog/${post.id}`}>
                      <Button containerClassName="w-full">
                        <span className="text-sm">Read More</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-white text-2xl font-bold mb-4">
                No articles found
              </h3>
              <p className="text-p4 mb-8">
                Try adjusting your search terms or category filter.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Newsletter */}
          <div className="bg-s2 rounded-2xl p-8 lg:p-12 text-center border border-s3">
            <h3 className="text-white text-3xl font-bold mb-4">
              Stay in the Loop
            </h3>
            <p className="text-p4 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on technology,
              digital marketing, and business innovation delivered directly to
              your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-s1 text-white py-3 px-4 rounded-lg border border-s3 focus:border-[#79f0da] focus:outline-none transition-colors"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Blog;
