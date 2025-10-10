import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <div className='min-h-screen bg-s1 pt-32 pb-20'>
      <div className='container max-w-6xl'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='h1 text-p4 mb-4'>Sitemap</h1>
          <p className='body-1 text-p4/80 max-w-2xl mx-auto'>
            Explore all pages and sections of the Innovatx website. Find exactly
            what you're looking for quickly and easily.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Main Pages */}
          <div className='bg-s2 rounded-2xl p-6 border border-s3/50'>
            <h2 className='h5 text-p1 mb-4 flex items-center gap-2'>
              <span>🏠</span> Main Pages
            </h2>
            <ul className='space-y-3'>
              <li>
                <Link
                  to='/'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='/book-consultation'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link
                  to='/careers'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to='/blog'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Home Sections */}
          <div className='bg-s2 rounded-2xl p-6 border border-s3/50'>
            <h2 className='h5 text-p1 mb-4 flex items-center gap-2'>
              <span>⚡</span> Home Sections
            </h2>
            <ul className='space-y-3'>
              <li>
                <Link
                  to='/#features'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to='/#plans'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link
                  to='/#faq'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to='/#contact'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Mission Pages */}
          <div className='bg-s2 rounded-2xl p-6 border border-s3/50'>
            <h2 className='h5 text-p1 mb-4 flex items-center gap-2'>
              <span>🎯</span> Our Mission
            </h2>
            <ul className='space-y-3'>
              <li>
                <Link
                  to='/mission/small-business'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  Small Business Solutions
                </Link>
              </li>
              <li>
                <Link
                  to='/mission/startups'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  Startup Acceleration
                </Link>
              </li>
              <li>
                <Link
                  to='/mission/inhouse-projects'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  In-House R&D Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog Articles */}
          <div className='bg-s2 rounded-2xl p-6 border border-s3/50'>
            <h2 className='h5 text-p1 mb-4 flex items-center gap-2'>
              <span>📝</span> Blog Articles
            </h2>
            <ul className='space-y-3'>
              <li>
                <Link
                  to='/blog/ai-innovation'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  AI Innovation in Business
                </Link>
              </li>
              <li>
                <Link
                  to='/blog/digital-transformation'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link
                  to='/blog/ux-design-trends'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  UX Design Trends 2024
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Features */}
          <div className='bg-s2 rounded-2xl p-6 border border-s3/50'>
            <h2 className='h5 text-p1 mb-4 flex items-center gap-2'>
              <span>💼</span> What We Offer
            </h2>
            <ul className='space-y-3'>
              <li className='text-p4/80 body-1'>✓ Web Development</li>
              <li className='text-p4/80 body-1'>✓ AI Integration</li>
              <li className='text-p4/80 body-1'>✓ MVP Development</li>
              <li className='text-p4/80 body-1'>✓ Business Automation</li>
              <li className='text-p4/80 body-1'>✓ Technical Consulting</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className='bg-s2 rounded-2xl p-6 border border-s3/50'>
            <h2 className='h5 text-p1 mb-4 flex items-center gap-2'>
              <span>🔗</span> Quick Links
            </h2>
            <ul className='space-y-3'>
              <li>
                <Link
                  to='/#contact'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  to='/book-consultation'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  Schedule Meeting
                </Link>
              </li>
              <li>
                <Link
                  to='/#faq'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  Help & FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className='bg-s2 rounded-2xl p-6 border border-s3/50'>
            <h2 className='h5 text-p1 mb-4 flex items-center gap-2'>
              <span>📋</span> Legal & Policies
            </h2>
            <ul className='space-y-3'>
              <li>
                <Link
                  to='/terms-of-use'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to='/privacy-policy'
                  className='text-p4 hover:text-p1 transition-colors body-1 block'
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <div className='mt-16 text-center'>
          <p className='body-2 text-p4/60'>
            Can't find what you're looking for?{" "}
            <Link to='/#contact' className='text-p1 hover:underline'>
              Contact us
            </Link>{" "}
            for assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
