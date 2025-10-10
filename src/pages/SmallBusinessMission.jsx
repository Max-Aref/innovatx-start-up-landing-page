import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

const SmallBusinessMission = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set SEO meta tags
    document.title = "Small Business Mission | Innovatx";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Empowering small businesses with affordable, scalable AI-driven digital solutions. Transform your operations with Innovatx's tailored web and automation services."
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

  const benefits = [
    {
      icon: "💰",
      title: "Cost-Efficient Solutions",
      description:
        "Affordable pricing models designed specifically for small business budgets without compromising quality.",
    },
    {
      icon: "⚡",
      title: "Quick Deployment",
      description:
        "Get your digital presence up and running in weeks, not months. Fast turnaround times tailored to your needs.",
    },
    {
      icon: "📈",
      title: "Scalable Growth",
      description:
        "Start small and grow at your own pace. Our solutions scale seamlessly as your business expands.",
    },
    {
      icon: "🤖",
      title: "AI Automation",
      description:
        "Automate repetitive tasks and workflows with intelligent AI tools that save time and reduce operational costs.",
    },
    {
      icon: "🎯",
      title: "Local SEO Focus",
      description:
        "Optimize your online presence for local searches and connect with customers in your community.",
    },
    {
      icon: "🛠️",
      title: "Ongoing Support",
      description:
        "Dedicated technical support and maintenance to keep your digital systems running smoothly 24/7.",
    },
  ];

  const services = [
    {
      title: "Website Development",
      description:
        "Modern, mobile-responsive websites that convert visitors into customers",
      features: [
        "Custom Design",
        "SEO Optimized",
        "Fast Loading",
        "E-commerce Ready",
      ],
    },
    {
      title: "AI Chatbots",
      description:
        "24/7 customer service automation that handles inquiries and bookings",
      features: [
        "Lead Generation",
        "Instant Responses",
        "Multi-language",
        "Easy Setup",
      ],
    },
    {
      title: "Business Automation",
      description:
        "Streamline operations with intelligent workflow automation tools",
      features: [
        "Inventory Management",
        "Email Automation",
        "Data Analytics",
        "CRM Integration",
      ],
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
        {/* Background Elements */}
        <div className='absolute inset-0 z-0'>
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-p1/10 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-p3/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
        </div>

        <div className='container relative z-10 px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            {/* Badge */}
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-p1/10 border border-p1/20 rounded-full mb-6 animate-slide-up'>
              <span className='text-2xl'>🏪</span>
              <span className='text-p1 text-sm font-medium uppercase tracking-wider'>
                Small Business Mission
              </span>
            </div>

            {/* Main Headline */}
            <h1 className='h1 max-lg:h2 text-p4 mb-6 leading-tight animate-slide-up'>
              Empowering{" "}
              <span className='relative inline-block'>
                <span className='relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-p1 to-p3'>
                  Small Businesses
                </span>
                <span className='absolute bottom-2 left-0 w-full h-3 bg-p1/20 -z-10'></span>
              </span>{" "}
              Through Technology
            </h1>

            {/* Subtitle */}
            <p className='body-1 text-p5 mb-8 max-w-2xl mx-auto animate-slide-up'>
              We believe every small business deserves access to world-class
              digital tools. Our mission is to democratize technology, making
              powerful web solutions and AI automation affordable and accessible
              to local businesses everywhere.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-wrap gap-4 justify-center animate-slide-up'>
              <Link
                to='/book-consultation'
                className='px-8 py-4 bg-gradient-to-r from-p1 to-p3 rounded-full text-black font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-p1/50'
              >
                Schedule Free Consultation
              </Link>
              <a
                href='#services'
                className='px-8 py-4 border-2 border-s3 rounded-full text-p4 hover:border-p1 hover:text-p1 transition-all duration-300 font-semibold'
              >
                Explore Solutions
              </a>
            </div>

            {/* Trust Indicators */}
            <div className='mt-12 pt-8 border-t border-s2 animate-slide-up'>
              <p className='text-p5 text-sm mb-4'>
                Trusted by local businesses
              </p>
              <div className='flex flex-wrap justify-center gap-8 text-p5/70'>
                <div className='flex items-center gap-2'>
                  <span className='text-2xl'>⭐</span>
                  <span className='text-sm'>5.0 Rating</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span className='text-2xl'>🚀</span>
                  <span className='text-sm'>50+ Projects Delivered</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span className='text-2xl'>💼</span>
                  <span className='text-sm'>100% Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <Element name='mission'>
        <section className='py-20 border-t-2 border-s2'>
          <div className='container px-4'>
            <div className='max-w-5xl mx-auto'>
              <div className='grid md:grid-cols-2 gap-12 items-center'>
                {/* Left Column - Text */}
                <div>
                  <h2 className='h2 max-lg:h3 text-p4 mb-6'>
                    Our Commitment to Small Business Success
                  </h2>
                  <div className='space-y-4 text-p5 body-1'>
                    <p>
                      Small businesses are the backbone of our economy, yet many
                      struggle to compete in an increasingly digital world.
                      We&apos;re here to level the playing field.
                    </p>
                    <p>
                      At Innovatx, we&apos;ve stripped away the complexity and
                      high costs traditionally associated with digital
                      transformation. Our specialized small business packages
                      include everything you need — from responsive websites and
                      e-commerce platforms to AI-powered customer service and
                      marketing automation.
                    </p>
                    <p className='text-p1 font-semibold'>
                      Your success is our mission. We don&apos;t just build
                      websites — we build partnerships that grow with you.
                    </p>
                  </div>
                </div>

                {/* Right Column - Stats */}
                <div className='grid grid-cols-2 gap-4'>
                  <div className='bg-gradient-to-br from-s2 to-s1 border-2 border-s3 rounded-2xl p-6 hover:border-p1 transition-all duration-300'>
                    <div className='text-4xl font-bold text-p1 mb-2'>50%</div>
                    <div className='text-p5 text-sm'>Average Cost Savings</div>
                  </div>
                  <div className='bg-gradient-to-br from-s2 to-s1 border-2 border-s3 rounded-2xl p-6 hover:border-p1 transition-all duration-300'>
                    <div className='text-4xl font-bold text-p1 mb-2'>3x</div>
                    <div className='text-p5 text-sm'>Revenue Growth</div>
                  </div>
                  <div className='bg-gradient-to-br from-s2 to-s1 border-2 border-s3 rounded-2xl p-6 hover:border-p1 transition-all duration-300'>
                    <div className='text-4xl font-bold text-p1 mb-2'>24/7</div>
                    <div className='text-p5 text-sm'>Support Available</div>
                  </div>
                  <div className='bg-gradient-to-br from-s2 to-s1 border-2 border-s3 rounded-2xl p-6 hover:border-p1 transition-all duration-300'>
                    <div className='text-4xl font-bold text-p1 mb-2'>30</div>
                    <div className='text-p5 text-sm'>Days to Launch</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Benefits Section */}
      <section className='py-20 bg-s1/50'>
        <div className='container px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='h2 max-lg:h3 text-p4 mb-4'>
                Why Small Businesses Choose Innovatx
              </h2>
              <p className='body-1 text-p5 max-w-2xl mx-auto'>
                Designed specifically for small business needs, budgets, and
                growth goals
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className='bg-s2 border-2 border-s3 rounded-2xl p-6 hover:border-p1 hover:scale-105 transition-all duration-300 group'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className='text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                    {benefit.icon}
                  </div>
                  <h3 className='h6 text-p4 mb-3 group-hover:text-p1 transition-colors'>
                    {benefit.title}
                  </h3>
                  <p className='text-p5 text-sm leading-relaxed'>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Element name='services'>
        <section className='py-20'>
          <div className='container px-4'>
            <div className='max-w-6xl mx-auto'>
              <div className='text-center mb-16'>
                <h2 className='h2 max-lg:h3 text-p4 mb-4'>
                  Tailored Solutions for Small Business Growth
                </h2>
                <p className='body-1 text-p5 max-w-2xl mx-auto'>
                  Everything you need to establish, enhance, and automate your
                  digital presence
                </p>
              </div>

              <div className='grid md:grid-cols-3 gap-8'>
                {services.map((service, index) => (
                  <div
                    key={index}
                    className='bg-gradient-to-br from-s2 to-s1 border-2 border-s3 rounded-2xl p-8 hover:border-p1 transition-all duration-300 group'
                  >
                    <h3 className='h5 text-p4 mb-3 group-hover:text-p1 transition-colors'>
                      {service.title}
                    </h3>
                    <p className='text-p5 mb-6 text-sm leading-relaxed'>
                      {service.description}
                    </p>
                    <ul className='space-y-2'>
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className='flex items-center gap-2 text-sm'
                        >
                          <span className='text-p1'>✓</span>
                          <span className='text-p5'>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Visual Section - Process */}
      <section className='py-20 bg-s1/50'>
        <div className='container px-4'>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='h2 max-lg:h3 text-p4 mb-4'>
                Simple, Transparent Process
              </h2>
              <p className='body-1 text-p5'>
                From consultation to launch in four straightforward steps
              </p>
            </div>

            <div className='grid md:grid-cols-4 gap-6'>
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  desc: "Share your vision and goals",
                },
                {
                  step: "02",
                  title: "Custom Proposal",
                  desc: "Receive tailored solution & pricing",
                },
                {
                  step: "03",
                  title: "Build & Iterate",
                  desc: "Weekly updates & feedback",
                },
                {
                  step: "04",
                  title: "Launch & Support",
                  desc: "Go live with ongoing maintenance",
                },
              ].map((item, index) => (
                <div key={index} className='relative'>
                  {index < 3 && (
                    <div className='hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-p1 to-p3 opacity-20'></div>
                  )}
                  <div className='relative bg-s2 border-2 border-s3 rounded-2xl p-6 hover:border-p1 transition-all duration-300 text-center'>
                    <div className='text-5xl font-bold text-p1/20 mb-2'>
                      {item.step}
                    </div>
                    <h3 className='h6 text-p4 mb-2'>{item.title}</h3>
                    <p className='text-p5 text-sm'>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-p1/5 via-s1 to-p3/5'></div>
        <div className='container px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='h2 max-lg:h3 text-p4 mb-6'>
              Ready to Transform Your Small Business?
            </h2>
            <p className='body-1 text-p5 mb-8 max-w-2xl mx-auto'>
              Schedule a free 30-minute consultation to discuss your goals. No
              pressure, no obligations — just honest advice on how technology
              can help your business thrive.
            </p>
            <div className='flex flex-wrap gap-4 justify-center'>
              <Link
                to='/book-consultation'
                className='px-8 py-4 bg-gradient-to-r from-p1 to-p3 rounded-full text-black font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-p1/50'
              >
                Book Your Free Consultation
              </Link>
              <Link
                to='/pricing'
                className='px-8 py-4 border-2 border-s3 rounded-full text-p4 hover:border-p1 hover:text-p1 transition-all duration-300 font-semibold'
              >
                View Pricing Plans
              </Link>
            </div>

            <div className='mt-12 flex flex-wrap justify-center gap-8 text-p5'>
              <div className='flex items-center gap-2'>
                <span className='text-p1'>✓</span>
                <span className='text-sm'>No Setup Fees</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-p1'>✓</span>
                <span className='text-sm'>Flexible Payment Plans</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-p1'>✓</span>
                <span className='text-sm'>30-Day Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmallBusinessMission;
