import React from "react";
import { useParams, Link } from "react-router-dom";
import { Element } from "react-scroll";
import Button from "../components/Button";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: 2025 Trends and Predictions",
    excerpt: "Discover how artificial intelligence is revolutionizing business operations...",
    content: `
# The Future of AI in Business: 2025 Trends and Predictions

Artificial Intelligence is revolutionizing how businesses operate across every industry. From automation to predictive analytics, AI is becoming the backbone of modern enterprise solutions.

## Key Trends for 2025

### 1. Automated Decision Making
AI systems are becoming more sophisticated in handling complex business decisions. Companies are increasingly relying on AI to:
- Analyze market trends
- Predict customer behavior
- Optimize supply chains
- Manage resource allocation

### 2. Enhanced Customer Experience
AI-powered solutions are transforming customer service through:
- 24/7 chatbot support
- Personalized recommendations
- Predictive customer needs
- Automated issue resolution

### 3. Workplace Transformation
The integration of AI is changing how we work:
- Automated routine tasks
- Smart scheduling and planning
- Enhanced collaboration tools
- Predictive maintenance

## Implementation Challenges

While AI adoption is growing, businesses face several challenges:
1. Data quality and availability
2. Integration with legacy systems
3. Staff training and adaptation
4. Privacy and security concerns

## Future Outlook

By 2025, we expect to see:
- 75% of enterprises using AI
- $190B global AI market size
- 50% reduction in routine tasks
- New job roles emerging

## Conclusion

Staying ahead in the AI revolution requires strategic planning and investment. Companies that adapt early will gain significant competitive advantages in their respective markets.

## Additional Resources

- Industry case studies
- Implementation guides
- Best practices
- Training materials
    `,
    author: "Sarah Johnson",
    authorRole: "AI Research Director",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI & Technology",
    headerImage: "/path/to/header-image.jpg",
    authorImage: "/path/to/author-image.jpg",
    tags: ["AI", "Business", "Technology", "Innovation"],
  }
  // ...add other blog posts with similar detailed content
];

const BlogDetails = () => {
  const { id } = useParams();
  console.log("Article ID:", id); // Debug log
  
  const article = blogPosts.find((post) => post.id === parseInt(id, 10));
  console.log("Found article:", article); // Debug log

  if (!article) {
    return (
      <div className="min-h-screen g7 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-white mb-4">Article Not Found</h1>
          <Link to="/blog">
            <Button>Return to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen g7">
      <Element name="blog-details" className="relative">
        {/* Article Header */}
        <div className="bg-s2 py-16 border-b border-s3">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-white mb-4">{article.title}</h1>
              <p className="text-p4 text-lg mb-6">{article.excerpt}</p>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="text-p4">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Author Info */}
            <div className="flex items-center mb-8 p-4 bg-s2 rounded-lg border border-s3">
              <div className="ml-4">
                <h3 className="text-white font-medium">{article.author}</h3>
                <p className="text-p4 text-sm">{article.authorRole}</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-invert max-w-none">
              {article.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('#')) {
                  const level = paragraph.match(/^#+/)[0].length;
                  const text = paragraph.replace(/^#+\s/, '');
                  const Tag = `h${level}`;
                  return (
                    <Tag 
                      key={index}
                      className={`text-white font-bold ${
                        level === 1 ? 'text-3xl mb-6' :
                        level === 2 ? 'text-2xl mb-4' :
                        'text-xl mb-3'
                      }`}
                    >
                      {text}
                    </Tag>
                  );
                }
                
                if (paragraph.startsWith('-')) {
                  return (
                    <ul key={index} className="list-disc list-inside text-p4 mb-4">
                      <li>{paragraph.replace('-', '').trim()}</li>
                    </ul>
                  );
                }

                if (paragraph.trim().length > 0) {
                  return (
                    <p key={index} className="text-p4 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }

                return null;
              })}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-6 border-t border-s3">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-s2 text-p4 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex justify-center">
              <Link to="/blog">
                <Button>Back to Blog</Button>
              </Link>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default BlogDetails;