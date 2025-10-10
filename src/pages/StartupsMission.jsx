import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

const StartupsMission = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set SEO meta tags
    document.title = "Startups Mission | Innovatx";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Accelerate your startup success with Innovatx. Agile web development, AI integration, and scalable technology foundations to launch and scale your MVP faster."
      );
    }

    // Trigger fade-in animation
    setTimeout(() => setIsVisible(true), 100);

    // Scroll to top
    window.scrollTo(0, 0);

    // Reset title on unmount
    return () => {
      document.title =
        "Innovatx | Revolutionize Web Experience with Cutting-Edge Solutions";
    };
  }, []);

  const advantages = [
    {
      icon: "🚀",
      title: "Rapid MVP Development",
      description:
        "Launch your minimum viable product in weeks, not months. Fast iteration cycles to test market fit.",
    },
    {
      icon: "⚙️",
      title: "Scalable Architecture",
      description:
        "Built for growth from day one. Infrastructure that scales seamlessly from 100 to 100,000 users.",
    },
    {
      icon: "💡",
      title: "Innovation Partnership",
      description:
        "We think like founders. Collaborative approach with strategic insights and technical expertise.",
    },
    {
      icon: "🔄",
      title: "Agile Methodology",
      description:
        "Sprint-based development with weekly demos. Adapt quickly to user feedback and market changes.",
    },
    {
      icon: "🤝",
      title: "Founder-Friendly Pricing",
      description:
        "Flexible equity options and payment plans. Aligned incentives for long-term success.",
    },
    {
      icon: "📊",
      title: "Data-Driven Insights",
      description:
        "Built-in analytics and user tracking. Make informed decisions with real-time metrics.",
    },
  ];

  const techStack = [
    { name: "React & Next.js", category: "Frontend", icon: "⚛️" },
    { name: "Node.js & Python", category: "Backend", icon: "🔧" },
    { name: "PostgreSQL & MongoDB", category: "Database", icon: "🗄️" },
    { name: "AWS & Vercel", category: "Cloud", icon: "☁️" },
    { name: "OpenAI & TensorFlow", category: "AI/ML", icon: "🤖" },
    { name: "Stripe & Payment APIs", category: "Integrations", icon: "💳" },
  ];

  const successStories = [
    {
      startup: "TechFlow AI",
      industry: "SaaS",
      result: "$500K ARR in 6 months",
      description: "AI-powered workflow automation platform",
    },
    {
      startup: "LocalConnect",
      industry: "Marketplace",
      result: "10K+ active users",
      description: "Hyperlocal community marketplace",
    },
    {
      startup: "DataViz Pro",
      industry: "Analytics",
      result: "Series A Funded",
      description: "Real-time data visualization tool",
    },
  ];

  return (
    <div
      className={`mt-[100px] transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'>
        {/* Animated Background */}
        <div className='absolute inset-0 z-0'>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-p1/5 via-s1 to-p3/5'></div>
          <div className='absolute top-1/4 left-1/3 w-64 h-64 bg-p1/20 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-1/3 right-1/4 w-80 h-80 bg-p3/20 rounded-full blur-3xl animate-pulse delay-700'></div>
          <div className='absolute top-1/2 right-1/3 w-72 h-72 bg-p2/15 rounded-full blur-3xl animate-pulse delay-1000'></div>
        </div>

        <div className='container relative z-10 px-4'>
          <div className='max-w-5xl mx-auto text-center'>
            {/* Badge */}
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-p1/10 border border-p1/20 rounded-full mb-6 animate-slide-up'>
              <span className='text-2xl'>🚀</span>
              <span className='text-p1 text-sm font-medium uppercase tracking-wider'>
                Startup Acceleration Program
              </span>
            </div>

            {/* Main Headline */}
            <h1 className='h1 max-lg:h2 text-p4 mb-6 leading-tight animate-slide-up'>
              Launch Your{" "}
              <span className='relative inline-block'>
                <span className='relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-p1 via-p2 to-p3'>
                  Startup Dream
                </span>
                <span className='absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-p1/30 to-p3/30 -z-10'></span>
              </span>{" "}
              at Light Speed
            </h1>

            {/* Subtitle */}
            <p className='body-1 text-p5 mb-8 max-w-3xl mx-auto animate-slide-up'>
              From idea to market in record time. Innovatx partners with
              ambitious founders to build scalable MVPs, integrate cutting-edge
              AI, and establish technology foundations that grow with your
              vision.
            </p>

            {/* Key Stats */}
            <div className='flex flex-wrap justify-center gap-8 mb-10 animate-slide-up'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-p1 mb-1'>4-8</div>
                <div className='text-p5 text-sm'>Weeks to MVP</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-p1 mb-1'>15+</div>
                <div className='text-p5 text-sm'>Startups Launched</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-p1 mb-1'>$2M+</div>
                <div className='text-p5 text-sm'>Funding Raised</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-wrap gap-4 justify-center animate-slide-up'>
              <Link
                to='/book-consultation'
                className='px-8 py-4 bg-gradient-to-r from-p1 via-p2 to-p3 rounded-full text-black font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-p1/50 animate-pulse-slow'
              >
                Build Your MVP with Us
              </Link>
              <a
                href='#success-stories'
                className='px-8 py-4 border-2 border-s3 rounded-full text-p4 hover:border-p1 hover:text-p1 transition-all duration-300 font-semibold'
              >
                View Success Stories
              </a>
            </div>

            {/* Trust Line */}
            <p className='mt-8 text-p5 text-sm animate-slide-up'>
              Trusted by YC-backed startups, bootstrapped founders, and
              innovation labs
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <Element name='mission'>
        <section className='py-20 border-t-2 border-s2'>
          <div className='container px-4'>
            <div className='max-w-6xl mx-auto'>
              <div className='grid lg:grid-cols-2 gap-16 items-center'>
                {/* Left Column - Text */}
                <div>
                  <h2 className='h2 max-lg:h3 text-p4 mb-6'>
                    Built for Speed, Designed for Scale
                  </h2>
                  <div className='space-y-4 text-p5 body-1'>
                    <p>
                      Startups operate in a different world — one where speed,
                      agility, and innovation determine survival. Traditional
                      development agencies don&apos;t understand the urgency.
                    </p>
                    <p>
                      We&apos;re different. Innovatx operates like your
                      technical co-founder: thinking strategically about
                      product-market fit, building with best practices, and
                      moving at startup velocity.
                    </p>
                    <p>
                      Our startup-optimized process combines rapid prototyping
                      with enterprise-grade architecture. You get a polished MVP
                      that impresses investors and delights early adopters —
                      without technical debt holding you back.
                    </p>
                    <p className='text-p1 font-semibold'>
                      Let&apos;s turn your vision into a fundable, scalable
                      reality.
                    </p>
                  </div>

                  <div className='mt-8 flex flex-wrap gap-3'>
                    <span className='px-4 py-2 bg-p1/10 border border-p1/20 rounded-full text-p1 text-sm'>
                      Y Combinator Approved
                    </span>
                    <span className='px-4 py-2 bg-p1/10 border border-p1/20 rounded-full text-p1 text-sm'>
                      Investor Ready
                    </span>
                    <span className='px-4 py-2 bg-p1/10 border border-p1/20 rounded-full text-p1 text-sm'>
                      AI-First Approach
                    </span>
                  </div>
                </div>

                {/* Right Column - Visual */}
                <div className='relative'>
                  <div className='bg-gradient-to-br from-s2 to-s1 border-2 border-s3 rounded-2xl p-8'>
                    <h3 className='h5 text-p4 mb-6'>Our Startup Promise</h3>
                    <ul className='space-y-4'>
                      {[
                        "Weekly sprint demos and progress updates",
                        "Direct access to senior engineers",
                        "Unlimited iterations during development",
                        "Post-launch support and optimization",
                        "Flexible equity partnership options",
                        "Strategic product & growth advice",
                      ].map((item, index) => (
                        <li key={index} className='flex items-start gap-3'>
                          <span className='text-p1 text-xl mt-1'>✓</span>
                          <span className='text-p5'>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Floating Elements */}
                  <div className='absolute -top-4 -right-4 w-20 h-20 bg-p1/20 rounded-full blur-xl animate-pulse'></div>
                  <div className='absolute -bottom-4 -left-4 w-24 h-24 bg-p3/20 rounded-full blur-xl animate-pulse delay-500'></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Advantages Section */}
      <section className='py-20 bg-s1/50'>
        <div className='container px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='h2 max-lg:h3 text-p4 mb-4'>
                Why Founders Choose Innovatx
              </h2>
              <p className='body-1 text-p5 max-w-2xl mx-auto'>
                Everything you need to go from zero to traction — fast,
                efficient, and founder-friendly
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className='bg-s2 border-2 border-s3 rounded-2xl p-6 hover:border-p1 hover:scale-105 transition-all duration-300 group'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className='text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                    {advantage.icon}
                  </div>
                  <h3 className='h6 text-p4 mb-3 group-hover:text-p1 transition-colors'>
                    {advantage.title}
                  </h3>
                  <p className='text-p5 text-sm leading-relaxed'>
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className='py-20'>
        <div className='container px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='h2 max-lg:h3 text-p4 mb-4'>Modern Tech Stack</h2>
              <p className='body-1 text-p5 max-w-2xl mx-auto'>
                Enterprise-grade technologies that scale with your growth
              </p>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className='bg-gradient-to-br from-s2 to-s1 border-2 border-s3 rounded-2xl p-6 hover:border-p1 transition-all duration-300 group text-center'
                >
                  <div className='text-4xl mb-3 group-hover:scale-110 transition-transform'>
                    {tech.icon}
                  </div>
                  <h3 className='h6 text-p4 mb-2 group-hover:text-p1 transition-colors'>
                    {tech.name}
                  </h3>
                  <p className='text-p5 text-sm'>{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <Element name='success-stories'>
        <section className='py-20 bg-s1/50'>
          <div className='container px-4'>
            <div className='max-w-6xl mx-auto'>
              <div className='text-center mb-16'>
                <h2 className='h2 max-lg:h3 text-p4 mb-4'>
                  Startup Success Stories
                </h2>
                <p className='body-1 text-p5 max-w-2xl mx-auto'>
                  Real startups, real traction, real results
                </p>
              </div>

              <div className='grid md:grid-cols-3 gap-8'>
                {successStories.map((story, index) => (
                  <div
                    key={index}
                    className='bg-gradient-to-br from-s2 to-s1 border-2 border-s3 rounded-2xl p-8 hover:border-p1 transition-all duration-300 group'
                  >
                    <div className='text-p1 text-sm font-semibold mb-2 uppercase tracking-wider'>
                      {story.industry}
                    </div>
                    <h3 className='h5 text-p4 mb-3 group-hover:text-p1 transition-colors'>
                      {story.startup}
                    </h3>
                    <p className='text-p5 mb-4 text-sm'>{story.description}</p>
                    <div className='pt-4 border-t border-s3'>
                      <div className='text-2xl font-bold text-p1'>
                        {story.result}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Process Timeline */}
      <section className='py-20'>
        <div className='container px-4'>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='h2 max-lg:h3 text-p4 mb-4'>From Idea to Launch</h2>
              <p className='body-1 text-p5'>Our proven 4-week sprint process</p>
            </div>

            <div className='space-y-8'>
              {[
                {
                  week: "Week 1",
                  title: "Discovery & Design Sprint",
                  tasks: [
                    "Product roadmap planning",
                    "UX/UI wireframes",
                    "Technical architecture",
                    "Sprint planning",
                  ],
                },
                {
                  week: "Week 2",
                  title: "Core Development",
                  tasks: [
                    "Frontend build",
                    "Backend APIs",
                    "Database setup",
                    "Authentication system",
                  ],
                },
                {
                  week: "Week 3",
                  title: "Feature Development",
                  tasks: [
                    "Key features build",
                    "AI integration",
                    "Third-party APIs",
                    "Admin dashboard",
                  ],
                },
                {
                  week: "Week 4",
                  title: "Testing & Launch",
                  tasks: [
                    "QA testing",
                    "Performance optimization",
                    "Deployment",
                    "Launch support",
                  ],
                },
              ].map((phase, index) => (
                <div key={index} className='flex gap-6 items-start group'>
                  <div className='flex-shrink-0 w-24 text-center'>
                    <div className='inline-block px-4 py-2 bg-p1/10 border-2 border-p1/20 rounded-full group-hover:border-p1 transition-colors'>
                      <span className='text-p1 font-bold text-sm'>
                        {phase.week}
                      </span>
                    </div>
                  </div>
                  <div className='flex-1 bg-s2 border-2 border-s3 rounded-2xl p-6 hover:border-p1 transition-all duration-300'>
                    <h3 className='h6 text-p4 mb-4'>{phase.title}</h3>
                    <div className='grid sm:grid-cols-2 gap-3'>
                      {phase.tasks.map((task, idx) => (
                        <div key={idx} className='flex items-center gap-2'>
                          <span className='text-p1'>→</span>
                          <span className='text-p5 text-sm'>{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-p1/10 via-s1 to-p3/10'></div>
        <div className='absolute inset-0'>
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-p1/10 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-p3/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
        </div>

        <div className='container px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='h2 max-lg:h3 text-p4 mb-6'>
              Ready to Build the Future?
            </h2>
            <p className='body-1 text-p5 mb-8 max-w-2xl mx-auto'>
              Join 15+ startups who chose Innovatx as their technology partner.
              Let&apos;s discuss your vision and build something extraordinary
              together.
            </p>
            <div className='flex flex-wrap gap-4 justify-center'>
              <Link
                to='/book-consultation'
                className='px-8 py-4 bg-gradient-to-r from-p1 via-p2 to-p3 rounded-full text-black font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-p1/50'
              >
                Start Your Startup Journey
              </Link>
              <Link
                to='/pricing'
                className='px-8 py-4 border-2 border-s3 rounded-full text-p4 hover:border-p1 hover:text-p1 transition-all duration-300 font-semibold'
              >
                View Startup Packages
              </Link>
            </div>

            <div className='mt-12 flex flex-wrap justify-center gap-8 text-p5'>
              <div className='flex items-center gap-2'>
                <span className='text-p1'>✓</span>
                <span className='text-sm'>Equity-Friendly Terms</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-p1'>✓</span>
                <span className='text-sm'>Free Strategy Session</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-p1'>✓</span>
                <span className='text-sm'>Investor Pitch Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartupsMission;
