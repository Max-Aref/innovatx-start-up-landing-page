import { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogPostById, getAllBlogPosts } from "../constants/markdownLoader";
import {
  parseMarkdown,
  calculateReadingTime,
  getRelatedPosts,
} from "../constants/markdownUtils";

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setReadingProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load post and related posts
  useEffect(() => {
    const loadContent = async () => {
      try {
        const [blogPost, posts] = await Promise.all([
          getBlogPostById(id),
          getAllBlogPosts(),
        ]);

        setPost(blogPost);
        setAllPosts(posts);

        if (blogPost) {
          // Set SEO meta tags
          document.title = `${blogPost.title} | Innovatx Blog`;

          const metaDescription = document.querySelector(
            'meta[name="description"]'
          );
          if (metaDescription && blogPost.description) {
            metaDescription.setAttribute("content", blogPost.description);
          }

          // Get related posts
          const related = getRelatedPosts(blogPost, posts, 3);
          setRelatedPosts(related);
        }

        // Trigger fade-in animation
        setTimeout(() => setIsVisible(true), 100);
      } catch (error) {
        console.error("Error loading blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
    window.scrollTo(0, 0);
  }, [id]);

  // Reset title on unmount
  useEffect(() => {
    return () => {
      document.title =
        "Innovatx | Revolutionize Web Experience with Cutting-Edge Solutions";
    };
  }, []);

  // Memoize expensive computations
  const readingTime = useMemo(() => {
    return post ? calculateReadingTime(post.content) : 0;
  }, [post]);

  const htmlContent = useMemo(() => {
    return post ? parseMarkdown(post.content) : "";
  }, [post]);

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center pt-40'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-p1 mx-auto mb-4'></div>
          <p className='text-p4 body-1'>Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className='min-h-screen flex items-center justify-center pt-40'>
        <div className='text-center animate-fade-in'>
          <h2 className='h3 text-p4 mb-4'>Article Not Found</h2>
          <p className='text-p5 mb-8 body-1'>
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            to='/blog'
            className='inline-block px-6 py-3 bg-p1 text-black rounded-full hover:bg-p1/80 transition-all duration-300 hover:scale-105 font-medium'
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div className='fixed top-0 left-0 w-full h-1 bg-s2 z-50'>
        <div
          className='h-full bg-gradient-to-r from-p1 to-p3 transition-all duration-300'
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Floating Back Button - Mobile Optimized */}
      <Link
        to='/blog'
        className='fixed bottom-6 md:bottom-8 left-4 md:left-8 z-40 flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-s2 border-2 border-s3 rounded-full text-p1 hover:border-p1 hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm text-sm'
        title='Back to Blog'
      >
        <svg
          className='w-4 h-4 md:w-5 md:h-5'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 19l-7-7 7-7'
          />
        </svg>
        <span className='max-md:hidden font-medium'>Back</span>
      </Link>

      <article
        className={`min-h-screen pb-20 pt-40 transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Article Header - Mobile Optimized */}
        <div className='container max-w-4xl px-4 md:px-0'>
          <header className='mb-10 md:mb-12'>
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className='flex flex-wrap gap-2 mb-4 md:mb-6 animate-slide-up'>
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='text-xs md:text-sm px-2.5 md:px-3 py-1 md:py-1.5 bg-p1/10 text-p1 rounded-full border border-p1/20 hover:bg-p1/20 transition-colors'
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title - Mobile Optimized */}
            <h1 className='h1 max-lg:h2 max-md:h3 text-p4 mb-4 md:mb-6 leading-tight animate-slide-up'>
              {post.title}
            </h1>

            {/* Meta Info Bar - Mobile Optimized */}
            <div className='flex flex-wrap items-center gap-3 md:gap-4 text-p5 text-xs md:text-sm border-l-4 border-p1 pl-3 md:pl-4 py-2 animate-slide-up'>
              <div className='flex items-center gap-1.5 md:gap-2'>
                <svg
                  className='w-3.5 h-3.5 md:w-4 md:h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='font-medium'>
                  {post.author || "Innovatx Team"}
                </span>
              </div>

              <span className='text-p5/50'>•</span>

              <div className='flex items-center gap-1.5 md:gap-2'>
                <svg
                  className='w-3.5 h-3.5 md:w-4 md:h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                    clipRule='evenodd'
                  />
                </svg>
                <time dateTime={post.date} className='whitespace-nowrap'>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <span className='text-p5/50 max-sm:hidden'>•</span>

              <div className='flex items-center gap-1.5 md:gap-2 max-sm:w-full max-sm:mt-1'>
                <svg
                  className='w-3.5 h-3.5 md:w-4 md:h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>{readingTime} min read</span>
              </div>
            </div>
          </header>
        </div>

        {/* Featured Image - Full Header Width (Container width) */}
        {post.featuredImage && (
          <div className='container px-4 md:px-0 mb-12'>
            <div className='rounded-2xl overflow-hidden border-2 border-s2 shadow-lg hover:border-p1/50 transition-all duration-500 animate-slide-up w-full'>
              <div className='aspect-video w-full bg-s2'>
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className='w-full h-full object-cover'
                  loading='lazy'
                />
              </div>
            </div>
          </div>
        )}

        {/* Article Content - Enhanced Typography */}
        <div className='container max-w-4xl px-4 md:px-0'>
          <div
            className='article-content prose prose-invert max-w-none mb-16 animate-slide-up'
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Share Section */}
          <div className='mt-16 pt-8 border-t-2 border-s2 animate-slide-up'>
            <h3 className='h6 text-p4 mb-4'>Share this article</h3>
            <div className='flex flex-wrap gap-3'>
              <a
                href={`https://x.com/intent/tweet?text=${encodeURIComponent(
                  post.title
                )}&url=${encodeURIComponent(window.location.href)}`}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-4 py-2 border-2 border-s3 rounded-full text-p5 hover:border-p1 hover:text-p1 transition-all duration-300 text-sm hover:scale-105'
              >
                <svg
                  className='w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                </svg>
                X
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  window.location.href
                )}`}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-4 py-2 border-2 border-s3 rounded-full text-p5 hover:border-p1 hover:text-p1 transition-all duration-300 text-sm hover:scale-105'
              >
                <svg
                  className='w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                </svg>
                LinkedIn
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  window.location.href
                )}`}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-4 py-2 border-2 border-s3 rounded-full text-p5 hover:border-p1 hover:text-p1 transition-all duration-300 text-sm hover:scale-105'
              >
                <svg
                  className='w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className='container max-w-6xl mt-20 pt-16 border-t-2 border-s2'>
            <h2 className='h3 max-md:h4 text-p4 mb-10 text-center'>
              Related Articles
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {relatedPosts.map((relatedPost, index) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className='group border-2 border-s2 rounded-xl overflow-hidden hover:border-p1 transition-all duration-300 hover:scale-[1.02] bg-s1 animate-slide-up'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {relatedPost.featuredImage && (
                    <div className='aspect-video overflow-hidden bg-s2'>
                      <img
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                        loading='lazy'
                      />
                    </div>
                  )}

                  <div className='p-6'>
                    {relatedPost.tags && relatedPost.tags.length > 0 && (
                      <div className='flex flex-wrap gap-2 mb-3'>
                        {relatedPost.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className='text-xs px-2 py-1 bg-p1/10 text-p1 rounded-full'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <h3 className='h6 text-p4 mb-3 group-hover:text-p1 transition-colors line-clamp-2'>
                      {relatedPost.title}
                    </h3>

                    {relatedPost.description && (
                      <p className='text-p5 text-sm mb-4 line-clamp-2'>
                        {relatedPost.description}
                      </p>
                    )}

                    <div className='flex items-center justify-between text-xs text-p5/70'>
                      <span>{relatedPost.author || "Innovatx Team"}</span>
                      <span>
                        {new Date(relatedPost.date).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
};

export default BlogDetails;
