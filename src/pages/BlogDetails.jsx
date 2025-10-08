import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Element } from "react-scroll";
import Button from "../components/Button";
import { getBlogPostById } from "../constants/blogData";

const BlogDetails = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  const article = getBlogPostById(id);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Load markdown content
    if (article) {
      import(`../data/blog/${article.slug}.md?raw`)
        .then((module) => {
          setContent(module.default);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error loading markdown:", error);
          setLoading(false);
        });
    }
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#040016] via-[#090024] to-[#040016] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-white mb-4">Article Not Found</h1>
          <Link to="/blog">
            <Button>Return to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Simple markdown parser for basic formatting
  const parseMarkdown = (markdown) => {
    const lines = markdown.split("\n");
    const elements = [];
    let listItems = [];
    let inList = false;

    lines.forEach((line, index) => {
      // Skip empty lines
      if (line.trim() === "") {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside text-p4 mb-6 ml-4 space-y-2">
              {listItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        return;
      }

      // Headers
      if (line.startsWith("# ")) {
        const text = line.replace(/^#\s+/, "");
        elements.push(
          <h1 key={index} className="text-white font-bold text-4xl mb-6 mt-8">
            {text}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        const text = line.replace(/^##\s+/, "");
        elements.push(
          <h2 key={index} className="text-white font-bold text-3xl mb-5 mt-8">
            {text}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        const text = line.replace(/^###\s+/, "");
        elements.push(
          <h3 key={index} className="text-white font-bold text-2xl mb-4 mt-6">
            {text}
          </h3>
        );
      }
      // List items
      else if (line.match(/^[-*]\s+/)) {
        const text = line.replace(/^[-*]\s+/, "");
        listItems.push(text);
        inList = true;
      }
      // Regular paragraphs
      else {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside text-p4 mb-6 ml-4 space-y-2">
              {listItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(
          <p key={index} className="text-p4 mb-5 leading-relaxed text-base">
            {line}
          </p>
        );
      }
    });

    // Handle any remaining list items
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key="list-final" className="list-disc list-inside text-p4 mb-6 ml-4 space-y-2">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }

    return elements;
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#040016] via-[#090024] to-[#040016]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040016] via-[#090024] to-[#040016] opacity-90"></div>

      <Element name="blog-details" className="relative z-10">
        {/* Article Header */}
        <div className="bg-s2 py-16 border-b border-s3">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Category Badge */}
              <span className="inline-block bg-[#79f0da] text-black py-2 px-4 rounded-full text-sm font-medium mb-6">
                {article.category}
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>
              <p className="text-p4 text-lg md:text-xl mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-center space-x-6 text-p4 text-sm">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Author Info */}
            <div className="flex items-center mb-10 p-6 bg-s2 rounded-lg border border-s3">
              <div className="w-16 h-16 bg-gradient-to-br from-[#79f0da] to-[#6de0ca] rounded-full flex items-center justify-center text-black font-bold text-xl mr-4">
                {article.author.charAt(0)}
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">
                  {article.author}
                </h3>
                <p className="text-p4 text-sm">{article.authorRole}</p>
              </div>
            </div>

            {/* Main Content */}
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block w-12 h-12 border-4 border-[#79f0da] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-p4 mt-4">Loading article...</p>
              </div>
            ) : (
              <div className="prose prose-invert max-w-none">
                {parseMarkdown(content)}
              </div>
            )}

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-s3">
              <h4 className="text-white text-lg font-bold mb-4">Tags</h4>
              <div className="flex flex-wrap gap-3">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-s2 text-p4 px-4 py-2 rounded-full text-sm border border-s3 hover:border-[#79f0da] transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-12 p-8 bg-s2 rounded-xl border border-s3 text-center">
              <h4 className="text-white text-xl font-bold mb-4">
                Found this helpful?
              </h4>
              <p className="text-p4 mb-6">
                Share this article with your network and stay tuned for more
                insights.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/blog">
                  <Button>More Articles</Button>
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex justify-center">
              <Link to="/blog">
                <Button>
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    Back to Blog
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default BlogDetails;
