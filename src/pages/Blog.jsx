import React, { useState } from "react";
import { Element } from "react-scroll";
import Button from "../components/Button";
import { Link } from "react-router-dom";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: 2025 Trends and Predictions",
    excerpt:
      "Discover how artificial intelligence is revolutionizing business operations and what trends to expect in the coming year.",
    content:
      "Artificial Intelligence is no longer a futuristic concept—it's here, and it's transforming how businesses operate across every industry. From automation to predictive analytics, AI is becoming the backbone of modern enterprise solutions...",
    author: "Sarah Johnson",
    authorRole: "AI Research Director",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "/api/placeholder/600/400",
    tags: ["AI", "Business", "Technology", "Innovation"],
  },
  {
    id: 2,
    title: "Digital Transformation Success Stories: Real Client Results",
    excerpt:
      "Learn how our clients achieved 300% ROI through strategic digital transformation initiatives.",
    content:
      "Digital transformation isn't just about adopting new technology—it's about reimagining how your business operates. Our recent client success stories demonstrate the incredible impact of strategic digital initiatives...",
    author: "Michael Chen",
    authorRole: "Digital Strategy Lead",
    date: "December 10, 2024",
    readTime: "6 min read",
    category: "Case Studies",
    image: "/api/placeholder/600/400",
    tags: ["Digital Transformation", "ROI", "Case Study", "Success"],
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for Modern Businesses",
    excerpt:
      "Essential security measures every business needs to implement to protect against cyber threats in 2025.",
    content:
      "With cyber threats evolving rapidly, businesses must stay ahead of the curve with robust security measures. This comprehensive guide covers the essential practices every modern business needs...",
    author: "Emily Rodriguez",
    authorRole: "Cybersecurity Specialist",
    date: "December 5, 2024",
    readTime: "10 min read",
    category: "Security",
    image: "/api/placeholder/600/400",
    tags: ["Cybersecurity", "Business", "Protection", "Best Practices"],
  },
  {
    id: 4,
    title: "Cloud Migration: A Complete Guide for Enterprises",
    excerpt:
      "Step-by-step guide to successful cloud migration with minimal downtime and maximum efficiency.",
    content:
      "Cloud migration is a critical step for businesses looking to scale and modernize their operations. This comprehensive guide walks you through every aspect of a successful cloud migration strategy...",
    author: "David Park",
    authorRole: "Cloud Architect",
    date: "November 28, 2024",
    readTime: "12 min read",
    category: "Cloud Computing",
    image: "/api/placeholder/600/400",
    tags: ["Cloud", "Migration", "Enterprise", "Guide"],
  },
  {
    id: 5,
    title: "Data Analytics: Turning Information into Business Intelligence",
    excerpt:
      "How to leverage data analytics to make informed decisions and drive business growth.",
    content:
      "In today's data-driven world, the ability to extract meaningful insights from raw data is what separates successful businesses from the rest. Data analytics provides the foundation for informed decision-making...",
    author: "Lisa Wang",
    authorRole: "Data Science Manager",
    date: "November 20, 2024",
    readTime: "7 min read",
    category: "Data Science",
    image: "/api/placeholder/600/400",
    tags: ["Data Analytics", "Business Intelligence", "Insights", "Growth"],
  },
  {
    id: 6,
    title: "The Rise of No-Code/Low-Code Development Platforms",
    excerpt:
      "Exploring how no-code and low-code platforms are democratizing software development.",
    content:
      "No-code and low-code platforms are revolutionizing the way businesses approach software development. These platforms enable organizations to build applications faster and more efficiently...",
    author: "Alex Thompson",
    authorRole: "Product Development Lead",
    date: "November 15, 2024",
    readTime: "9 min read",
    category: "Development",
    image: "/api/placeholder/600/400",
    tags: ["No-Code", "Low-Code", "Development", "Innovation"],
  },
];

const categories = [
  "All",
  "AI & Technology",
  "Case Studies",
  "Security",
  "Cloud Computing",
  "Data Science",
  "Development",
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

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
    <section className='relative min-h-screen bg-gradient-to-b from-[#040016] via-[#090024] to-[#040016]'>
      {/* Gradient overlay to match hero section */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#040016] via-[#090024] to-[#040016] opacity-90'></div>

      <Element name='blog' className='relative z-10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16  '>
          {/* Hero Section with increased margin */}
          <div className='text-center mb-[150px]'>
            <h1 className='sectionHeadText text-[#79f0da] mb-6 mt-20'>
              Our Blog
            </h1>
            <p className='text-p4 max-w-3xl mx-auto text-lg'>
              Discover the latest insights, trends, and best practices in
              technology, digital transformation, and business innovation from
              our expert team.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className='mb-24'> {/* Changed from mb-12 to mb-24 to double the space */}
            <div className='flex flex-col md:flex-row items-center gap-6'>
              {/* Search Bar - Fixed width */}
              <div className='w-full md:w-[320px]'>
                <input
                  type='text'
                  placeholder='Search articles...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='w-full bg-s2 text-white py-3 px-4 rounded-lg border border-s3 focus:border-[#79f0da] focus:outline-none transition-colors'
                />
              </div>

              {/* Category Filter - Takes remaining space */}
              <div className='w-full md:flex-1 flex flex-wrap gap-2 justify-start'>
                {categories.map((category) => (
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
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className='bg-s2 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-s3'
              >
                {/* Post Image */}
                <div className='relative h-48 bg-gradient-to-br from-[#79f0da] to-[#6de0ca] flex items-center justify-center'>
                  <div className='text-black font-bold text-xl'>
                    {post.category}
                  </div>
                </div>

                {/* Post Content */}
                <div className='p-6'>
                  {/* Category and Date */}
                  <div className='flex items-center justify-between mb-3'>
                    <span className='text-[#79f0da] text-sm font-medium'>
                      {post.category}
                    </span>
                    <span className='text-p4 text-sm'>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className='text-white text-xl font-bold mb-3 line-clamp-2 cursor-pointer'>
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className='text-p4 text-sm mb-4 line-clamp-3'>
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className='bg-s3 text-p4 px-2 py-1 rounded text-xs'
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Author and Date */}
                  <div className='flex items-center justify-between pt-4 border-t border-s3'>
                    <div>
                      <p className='text-white text-sm font-medium'>
                        {post.author}
                      </p>
                      <p className='text-p4 text-xs'>{post.authorRole}</p>
                    </div>
                    <span className='text-p4 text-xs'>{post.date}</span>
                  </div>

                  {/* "Read More" navigates to the full article page */}
                  <div className='mt-4'>
                    <Link to={`/blog/${post.id}`}>
                      <Button containerClassName='w-full' className='text-sm'>
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className='text-center py-16'>
              <h3 className='text-white text-2xl font-bold mb-4'>
                No articles found
              </h3>
              <p className='text-p4 mb-8'>
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

          {/* Newsletter Subscription */}
          <div className='bg-s2 rounded-2xl p-8 lg:p-12 text-center border border-s3'>
            <h3 className='text-white text-3xl font-bold mb-4'>
              Stay in the Loop
            </h3>
            <p className='text-p4 text-lg mb-8 max-w-2xl mx-auto'>
              Subscribe to our newsletter and get the latest insights, trends,
              and updates delivered straight to your inbox.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 bg-s1 text-white py-3 px-4 rounded-lg border border-s3 focus:border-[#79f0da] focus:outline-none transition-colors'
              />
              <Button className='whitespace-nowrap'>Subscribe</Button>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Blog;
