import { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { getAllBlogPosts } from "../constants/markdownLoader";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const blogPosts = await getAllBlogPosts();
        setPosts(blogPosts);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  // Extract unique categories from all posts - memoized
  const categories = useMemo(() => {
    return ["all", ...new Set(posts.flatMap((post) => post.tags || []))];
  }, [posts]);

  // Filter posts based on search and category - memoized
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" ||
        (post.tags && post.tags.includes(selectedCategory));
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-p1 mx-auto mb-4'></div>
          <p className='text-p4'>Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <section className='min-h-screen pb-20 pt-40 px-4 md:px-0'>
      <div className='container'>
        {/* Header - Mobile Optimized */}
        <div className='text-center mb-12 md:mb-16'>
          <h1 className='h1 max-lg:h2 max-md:h3 text-p4 mb-4 md:mb-6 px-2 md:px-4'>
            Innovatx Blog
          </h1>
          <p className='body-1 max-md:text-base max-w-3xl mx-auto text-p5 mb-8 px-2 md:px-4'>
            Insights, trends, and strategies for digital transformation and
            innovation
          </p>
        </div>

        {/* Search and Filter - Mobile Optimized */}
        <div className='max-w-4xl mx-auto mb-12 px-2 md:px-0'>
          <div className='flex flex-col md:flex-row gap-4 mb-6'>
            {/* Search Bar */}
            <div className='flex-1'>
              <input
                type='text'
                placeholder='Search articles...'
                value={searchTerm}
                onChange={handleSearchChange}
                className='w-full px-4 md:px-6 py-3 md:py-4 bg-s2 border-2 border-s3 rounded-xl text-p4 placeholder-p5/50 focus:outline-none focus:border-p1 transition-colors text-sm md:text-base'
              />
            </div>
          </div>

          {/* Category Filter - Mobile Optimized */}
          <div className='flex flex-wrap gap-2 md:gap-3 justify-center'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full border-2 transition-all duration-300 text-xs md:text-sm font-medium uppercase ${
                  selectedCategory === category
                    ? "border-p1 bg-p1/10 text-p1"
                    : "border-s3 text-p5 hover:border-p1/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid - Mobile Optimized */}
        {filteredPosts.length === 0 ? (
          <div className='text-center py-20'>
            <p className='text-p5 text-lg'>
              No blog posts found matching your criteria.
            </p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto'>
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className='group border-2 border-s2 rounded-xl overflow-hidden hover:border-p1 transition-all duration-300 hover:scale-[1.02] bg-s1 shadow-lg'
              >
                {/* Featured Image - Optimized with aspect ratio */}
                {post.featuredImage && (
                  <div className='aspect-video overflow-hidden bg-s2'>
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                      loading='lazy'
                    />
                  </div>
                )}

                {/* Content */}
                <div className='p-4 md:p-6'>
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className='flex flex-wrap gap-2 mb-3'>
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className='text-xs px-2 py-1 bg-p1/10 text-p1 rounded-full'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className='h6 max-md:text-lg text-p4 mb-3 group-hover:text-p1 transition-colors line-clamp-2'>
                    {post.title}
                  </h3>

                  {/* Description */}
                  {post.description && (
                    <p className='text-p5 text-sm mb-4 line-clamp-3'>
                      {post.description}
                    </p>
                  )}

                  {/* Meta */}
                  <div className='flex items-center justify-between text-xs text-p5/70'>
                    <span className='truncate mr-2'>
                      {post.author || "Innovatx Team"}
                    </span>
                    <span className='whitespace-nowrap'>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
