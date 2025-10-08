import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

const InhouseProjectsMission = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set SEO meta tags
    document.title = "In-House Projects & R&D | Innovatx";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore Innovatx's cutting-edge in-house projects, AI experiments, and SaaS innovations. Discover our R&D pipeline and partnership opportunities in future tech."
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

  const projects = [
    {
      title: "Innovatx AI Assistant",
      category: "AI/SaaS",
      status: "Beta",
      description:
        "Intelligent code companion that helps developers write, debug, and optimize code using advanced language models.",
      tech: ["GPT-4", "React", "Python", "WebSockets"],
      image: "🤖",
      progress: 75,
    },
    {
      title: "DataFlow Studio",
      category: "Analytics Platform",
      status: "Alpha",
      description:
        "Real-time data visualization and dashboard builder for modern businesses. No-code solution with powerful insights.",
      tech: ["D3.js", "Node.js", "PostgreSQL", "Redis"],
      image: "📊",
      progress: 60,
    },
    {
      title: "CloudSync Pro",
      category: "DevOps Tool",
      status: "Development",
      description:
        "Automated deployment and monitoring platform that simplifies infrastructure management for development teams.",
      tech: ["Docker", "Kubernetes", "AWS", "Terraform"],
      image: "☁️",
      progress: 40,
    },
    {
      title: "VoiceFlow AI",
      category: "Voice Tech",
      status: "Research",
      description:
        "Natural language processing platform for building conversational AI interfaces and voice-first applications.",
      tech: ["Whisper API", "FastAPI", "TensorFlow", "WebRTC"],
      image: "🎙️",
      progress: 25,
    },
    {
      title: "SmartForms Engine",
      category: "Automation",
      status: "Beta",
      description:
        "Intelligent form builder with AI-powered validation, conditional logic, and seamless integrations.",
      tech: ["React", "TypeScript", "Zod", "tRPC"],
      image: "📝",
      progress: 80,
    },
    {
      title: "PixelPerfect AI",
      category: "Design Tool",
      status: "Concept",
      description:
        "AI-assisted design system that generates pixel-perfect UI components from natural language descriptions.",
      tech: ["Stable Diffusion", "Next.js", "Tailwind", "Figma API"],
      image: "🎨",
      progress: 15,
    },
  ];

  const innovationAreas = [
    {
      icon: "🤖",
      title: "Artificial Intelligence",
      description:
        "Exploring LLMs, computer vision, and generative AI to build next-gen intelligent applications.",
    },
    {
      icon: "🔐",
      title: "Web3 & Blockchain",
      description:
        "Researching decentralized technologies and smart contracts for secure, transparent systems.",
    },
    {
      icon: "🌐",
      title: "Edge Computing",
      description:
        "Developing distributed architectures that bring computation closer to data sources.",
    },
    {
      icon: "🧬",
      title: "No-Code Platforms",
      description:
        "Building tools that empower non-technical users to create sophisticated applications.",
    },
  ];

  const approach = [
    {
      phase: "Ideation",
      description:
        "Identify problems worth solving through market research and user feedback",
      icon: "💡",
    },
    {
      phase: "Prototyping",
      description:
        "Rapid iteration and experimentation with emerging technologies",
      icon: "🔧",
    },
    {
      phase: "Validation",
      description:
        "Beta testing with select users and gathering actionable insights",
      icon: "✅",
    },
    {
      phase: "Scale",
      description:
        "Transform successful experiments into production-ready products",
      icon: "🚀",
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
        {/* Animated Grid Background */}
        <div className='absolute inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-s1 via-s2 to-s1'></div>
          <div
            className='absolute inset-0 opacity-20'
            style={{
              backgroundImage: `linear-gradient(rgba(121, 240, 218, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(121, 240, 218, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-p1/10 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-1/4 right-1/3 w-80 h-80 bg-p3/10 rounded-full blur-3xl animate-pulse delay-700'></div>
        </div>

        <div className='container relative z-10 px-4'>
          <div className='max-w-5xl mx-auto text-center'>
            {/* Badge */}
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-p1/10 border border-p1/20 rounded-full mb-6 animate-slide-up'>
              <span className='text-2xl'>🔬</span>
              <span className='text-p1 text-sm font-medium uppercase tracking-wider'>
                Innovation Lab
              </span>
            </div>

            {/* Main Headline */}
            <h1 className='h1 max-lg:h2 text-p4 mb-6 leading-tight animate-slide-up'>
              Building the{" "}
              <span className='relative inline-block'>
                <span className='relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-p1 via-p2 to-p3'>
                  Future of Tech
                </span>
                <span className='absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-p1/30 to-p3/30 -z-10'></span>
              </span>
              <br />
              One Experiment at a Time
            </h1>

            {/* Subtitle */}
            <p className='body-1 text-p5 mb-8 max-w-3xl mx-auto animate-slide-up'>
              Innovatx&apos;s internal R&D lab where we explore emerging
              technologies, build experimental SaaS products, and incubate
              tomorrow&apos;s innovations. Our in-house projects push boundaries
              and challenge conventions.
            </p>

            {/* Stats */}
            <div className='flex flex-wrap justify-center gap-8 mb-10 animate-slide-up'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-p1 mb-1'>12+</div>
                <div className='text-p5 text-sm'>Active Projects</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-p1 mb-1'>5</div>
                <div className='text-p5 text-sm'>Products Launched</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-p1 mb-1'>∞</div>
                <div className='text-p5 text-sm'>Innovations Ahead</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-wrap gap-4 justify-center animate-slide-up'>
              <a
                href='#projects'
                className='px-8 py-4 bg-gradient-to-r from-p1 via-p2 to-p3 rounded-full text-black font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-p1/50'
              >
                Explore Our Projects
              </a>
              <Link
                to='/contact'
                className='px-8 py-4 border-2 border-s3 rounded-full text-p4 hover:border-p1 hover:text-p1 transition-all duration-300 font-semibold'
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <Element name='mission'>
        <section className='py-20 border-t-2 border-s2'>
          <div className='container px-4'>
            <div className='max-w-5xl mx-auto'>
              <div className='grid lg:grid-cols-2 gap-12 items-center'>
                {/* Left Column - Text */}
                <div>
                  <h2 className='h2 max-lg:h3 text-p4 mb-6'>
                    Innovation Through Internal R&D
                  </h2>
                  <div className='space-y-4 text-p5 body-1'>
                    <p>
                      Great technology companies don&apos;t just serve clients —
                      they create the future. Our in-house projects represent
                      Innovatx&apos;s commitment to continuous innovation and
                      technical excellence.
                    </p>
                    <p>
                      We allocate dedicated time and resources to explore
                      emerging technologies, experiment with bold ideas, and
                      build products that solve real problems. Some become
                      standalone SaaS offerings, others inform our client work,
                      and all push our team to grow.
                    </p>
                    <p className='text-p1 font-semibold'>
                      This is where curiosity meets execution — where
                      tomorrow&apos;s solutions take shape today.
                    </p>
                  </div>
                </div>

                {/* Right Column - Innovation Areas */}
                <div className='space-y-4'>
                  {innovationAreas.map((area, index) => (
                    <div
                      key={index}
                      className='bg-gradient-to-br from-s2 to-s1 border-2 border-s3 rounded-2xl p-6 hover:border-p1 transition-all duration-300 group'
                    >
                      <div className='flex items-start gap-4'>
                        <div className='text-4xl group-hover:scale-110 transition-transform'>
                          {area.icon}
                        </div>
                        <div>
                          <h3 className='h6 text-p4 mb-2 group-hover:text-p1 transition-colors'>
                            {area.title}
                          </h3>
                          <p className='text-p5 text-sm'>{area.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Projects Showcase */}
      <Element name='projects'>
        <section className='py-20 bg-s1/50'>
          <div className='container px-4'>
            <div className='max-w-7xl mx-auto'>
              <div className='text-center mb-16'>
                <h2 className='h2 max-lg:h3 text-p4 mb-4'>
                  Current In-House Projects
                </h2>
                <p className='body-1 text-p5 max-w-2xl mx-auto'>
                  A glimpse into our innovation pipeline — from concept to
                  production
                </p>
              </div>

              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className='bg-gradient-to-br from-s2 to-s1 border-2 border-s3 rounded-2xl overflow-hidden hover:border-p1 transition-all duration-300 group'
                  >
                    {/* Project Header */}
                    <div className='p-6 border-b border-s3'>
                      <div className='flex items-start justify-between mb-4'>
                        <div className='text-5xl group-hover:scale-110 transition-transform'>
                          {project.image}
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            project.status === "Beta"
                              ? "bg-p1/10 text-p1 border border-p1/20"
                              : project.status === "Alpha"
                              ? "bg-p2/10 text-p2 border border-p2/20"
                              : project.status === "Development"
                              ? "bg-p3/10 text-p3 border border-p3/20"
                              : "bg-p5/10 text-p5 border border-p5/20"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <h3 className='h5 text-p4 mb-2 group-hover:text-p1 transition-colors'>
                        {project.title}
                      </h3>
                      <p className='text-p1 text-xs font-semibold uppercase tracking-wider mb-3'>
                        {project.category}
                      </p>
                      <p className='text-p5 text-sm leading-relaxed'>
                        {project.description}
                      </p>
                    </div>

                    {/* Project Details */}
                    <div className='p-6'>
                      {/* Tech Stack */}
                      <div className='mb-4'>
                        <p className='text-p5 text-xs mb-2 uppercase tracking-wider'>
                          Tech Stack
                        </p>
                        <div className='flex flex-wrap gap-2'>
                          {project.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className='px-2 py-1 bg-s3 text-p5 rounded text-xs'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div>
                        <div className='flex justify-between items-center mb-2'>
                          <p className='text-p5 text-xs uppercase tracking-wider'>
                            Progress
                          </p>
                          <p className='text-p1 text-sm font-semibold'>
                            {project.progress}%
                          </p>
                        </div>
                        <div className='w-full h-2 bg-s3 rounded-full overflow-hidden'>
                          <div
                            className='h-full bg-gradient-to-r from-p1 to-p3 transition-all duration-500'
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Innovation Approach */}
      <section className='py-20'>
        <div className='container px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='h2 max-lg:h3 text-p4 mb-4'>
                Our Innovation Process
              </h2>
              <p className='body-1 text-p5 max-w-2xl mx-auto'>
                How we transform ideas into impactful products
              </p>
            </div>

            <div className='grid md:grid-cols-4 gap-6'>
              {approach.map((step, index) => (
                <div key={index} className='relative'>
                  {/* Connecting Line */}
                  {index < approach.length - 1 && (
                    <div className='hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-p1 to-p3 opacity-20 z-0'></div>
                  )}

                  <div className='relative bg-gradient-to-br from-s2 to-s1 border-2 border-s3 rounded-2xl p-6 hover:border-p1 transition-all duration-300 text-center z-10'>
                    <div className='text-5xl mb-4 hover:scale-110 transition-transform'>
                      {step.icon}
                    </div>
                    <h3 className='h6 text-p4 mb-3'>{step.phase}</h3>
                    <p className='text-p5 text-sm'>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className='py-20 bg-s1/50'>
        <div className='container px-4'>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='h2 max-lg:h3 text-p4 mb-4'>
                Collaborate on Future Tech
              </h2>
              <p className='body-1 text-p5 max-w-2xl mx-auto'>
                We&apos;re open to partnerships, early access programs, and
                co-development opportunities
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-6'>
              {[
                {
                  title: "Beta Access",
                  description:
                    "Get early access to our products and shape their development with your feedback",
                  icon: "🎯",
                },
                {
                  title: "Co-Development",
                  description:
                    "Partner with us to build custom solutions based on our in-house technology",
                  icon: "🤝",
                },
                {
                  title: "Investment Opportunities",
                  description:
                    "Join us in commercializing promising projects from our innovation pipeline",
                  icon: "💰",
                },
              ].map((opportunity, index) => (
                <div
                  key={index}
                  className='bg-gradient-to-br from-s2 to-s1 border-2 border-s3 rounded-2xl p-8 hover:border-p1 transition-all duration-300 text-center group'
                >
                  <div className='text-5xl mb-4 group-hover:scale-110 transition-transform'>
                    {opportunity.icon}
                  </div>
                  <h3 className='h6 text-p4 mb-3 group-hover:text-p1 transition-colors'>
                    {opportunity.title}
                  </h3>
                  <p className='text-p5 text-sm'>{opportunity.description}</p>
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
          <div className='absolute top-1/3 left-1/4 w-96 h-96 bg-p1/10 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-1/3 right-1/4 w-96 h-96 bg-p3/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
        </div>

        <div className='container px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='h2 max-lg:h3 text-p4 mb-6'>
              Join Our Innovation Journey
            </h2>
            <p className='body-1 text-p5 mb-8 max-w-2xl mx-auto'>
              Whether you&apos;re interested in early access, partnership
              opportunities, or just want to learn more about our R&D efforts,
              we&apos;d love to hear from you.
            </p>
            <div className='flex flex-wrap gap-4 justify-center'>
              <Link
                to='/contact'
                className='px-8 py-4 bg-gradient-to-r from-p1 via-p2 to-p3 rounded-full text-black font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-p1/50'
              >
                Get in Touch
              </Link>
              <Link
                to='/blog'
                className='px-8 py-4 border-2 border-s3 rounded-full text-p4 hover:border-p1 hover:text-p1 transition-all duration-300 font-semibold'
              >
                Read Our Research
              </Link>
            </div>

            <div className='mt-12 flex flex-wrap justify-center gap-8 text-p5'>
              <div className='flex items-center gap-2'>
                <span className='text-p1'>✓</span>
                <span className='text-sm'>Open Source Friendly</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-p1'>✓</span>
                <span className='text-sm'>Early Access Programs</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-p1'>✓</span>
                <span className='text-sm'>Partnership Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InhouseProjectsMission;
