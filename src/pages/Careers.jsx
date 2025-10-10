import { useState, useEffect } from "react";
import clsx from "clsx";
import Button from "../components/Button";
import PropTypes from "prop-types";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Google Form links for each job position
  const jobApplicationLinks = {
    1: "https://forms.gle/dZxoxGsZCvBBLeKt8", // Senior Full Stack Developer
    2: "https://forms.gle/HUfLFw6kmxtjQRBe9", // UI/UX Designer
    3: "https://forms.gle/ghi789", // DevOps Engineer
    4: "https://forms.gle/jkl012", // Product Manager
    5: "https://forms.gle/roB5EqpBbuBwc2Mx8", // WordPress Expert Developer
    6: "https://forms.gle/yC5SeBQzFXzAMpDg7", // Social Media Marketing Manager
    7: "https://forms.gle/uNByhT1RAFKBiEmXA", // Social Media Content Creator Intern
    8: "https://forms.gle/AJcF9hGpQfJJW3qK8", // Mobile Applications Developer
  };

  const jobPostings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote /Austin",
      type: "Full-time",
      experience: "5+ years",
      applicationLink: jobApplicationLinks[1],
      description:
        "We're looking for a senior full stack developer to join our innovative team. You'll work on cutting-edge web applications and help shape the future of our technology stack.",
      requirements: [
        "5+ years of experience with React, Node.js, and modern web technologies",
        "Strong understanding of database design and optimization",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Excellent problem-solving and communication skills",
        "Bachelor's degree in Computer Science or equivalent experience",
      ],
      responsibilities: [
        "Develop and maintain scalable web applications",
        "Collaborate with cross-functional teams to deliver high-quality products",
        "Mentor junior developers and contribute to technical decisions",
        "Optimize application performance and user experience",
      ],
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "5+ years",
      applicationLink: jobApplicationLinks[2],
      description:
        "Join our design team to create beautiful, intuitive user experiences that delight our customers and drive business growth.",
      requirements: [
        "5+ years of experience in UI/UX design",
        "Proficiency in Figma, Adobe Creative Suite, and prototyping tools",
        "Strong portfolio showcasing web and mobile design projects",
        "Understanding of design systems and accessibility principles",
        "Bachelor's degree in Design, creative arts, or related field",
      ],
      responsibilities: [
        "Design user interfaces for web and mobile applications",
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and high-fidelity designs",
        "Collaborate with developers to ensure design implementation",
      ],
    },
    // {
    //   id: 3,
    //   title: "DevOps Engineer",
    //   department: "Infrastructure",
    //   location: "Remote / Austin",
    //   type: "Full-time",
    //   experience: "4+ years",
    //   applicationLink: jobApplicationLinks[3],
    //   description:
    //     "Help us build and maintain robust, scalable infrastructure that powers our applications and supports our growing user base.",
    //   requirements: [
    //     "4+ years of experience with cloud infrastructure and automation",
    //     "Expertise in Docker, Kubernetes, and CI/CD pipelines",
    //     "Strong knowledge of AWS, Azure, or Google Cloud Platform",
    //     "Experience with Infrastructure as Code (Terraform, CloudFormation)",
    //     "Excellent troubleshooting and monitoring skills",
    //   ],
    //   responsibilities: [
    //     "Design and maintain cloud infrastructure",
    //     "Implement and optimize CI/CD pipelines",
    //     "Monitor system performance and reliability",
    //     "Ensure security best practices and compliance",
    //   ],
    // },
    // {
    //   id: 4,
    //   title: "Product Manager",
    //   department: "Product",
    //   location: "Remote / Austin",
    //   type: "Full-time",
    //   experience: "4+ years",
    //   applicationLink: jobApplicationLinks[4],
    //   description:
    //     "Drive product strategy and execution for our core platform. You'll work closely with engineering, design, and business teams to deliver innovative solutions.",
    //   requirements: [
    //     "4+ years of product management experience in tech",
    //     "Strong analytical and data-driven decision-making skills",
    //     "Experience with agile development methodologies",
    //     "Excellent communication and stakeholder management abilities",
    //     "MBA or equivalent experience preferred",
    //   ],
    //   responsibilities: [
    //     "Define product roadmap and strategy",
    //     "Gather and prioritize product requirements",
    //     "Work with engineering teams to deliver features",
    //     "Analyze product metrics and user feedback",
    //   ],
    // },
    {
      id: 5,
      title: "WordPress Expert Developer",
      department: "Web Development",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "5+ years",
      applicationLink: jobApplicationLinks[5],
      description:
        "We're seeking a skilled WordPress expert developer to create and maintain high-performance WordPress websites and applications. You'll work with PHP, custom themes, plugins, and modern WordPress development practices.",
      requirements: [
        "5+ years of professional WordPress development experience",
        "Expert-level PHP programming skills and MySQL database management",
        "Proficiency in custom theme and plugin development from scratch",
        "Strong knowledge of WordPress REST API and Gutenberg block development",
        "Experience with modern PHP frameworks and WordPress coding standards",
        "Familiarity with WooCommerce and popular WordPress plugins",
        "Understanding of web security best practices and optimization techniques",
        "Experience with version control (Git) and deployment workflows",
      ],
      responsibilities: [
        "Develop custom WordPress themes and plugins using PHP and modern practices",
        "Optimize website performance and implement SEO best practices",
        "Integrate third-party APIs and services with WordPress installations",
        "Maintain and update existing WordPress sites and troubleshoot issues",
        "Collaborate with designers to implement pixel-perfect designs",
        "Ensure website security and implement backup and recovery solutions",
        "Provide technical guidance on WordPress architecture and best practices",
        "Create and maintain documentation for custom developments",
      ],
    },
    {
      id: 6,
      title: "Social Media Marketing Manager",
      department: "Marketing",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "5+ years",
      applicationLink: jobApplicationLinks[6],
      description:
        "We're looking for a creative and strategic Social Media Marketing Manager to manage multiple client accounts and drive engagement across all major social platforms. You'll be responsible for developing comprehensive social media strategies that build brand awareness and drive business growth.",
      requirements: [
        "5+ years of experience managing multiple social media accounts for businesses",
        "Proven track record with Facebook, Instagram, X, LinkedIn, TikTok, and YouTube",
        "Experience with social media management tools (Hootsuite, Buffer, Sprout Social)",
        "Strong knowledge of social media analytics and performance tracking",
        "Proficiency in content creation tools (Canva, Adobe Creative Suite, Figma)",
        "Understanding of paid social advertising campaigns and budget management",
        "Excellent written communication and copywriting skills",
        "Bachelor's degree in Marketing, Communications, or related field",
      ],
      responsibilities: [
        "Manage and oversee 8-12 client social media accounts simultaneously",
        "Develop and execute comprehensive social media strategies for each client",
        "Create engaging content calendars and manage posting schedules",
        "Design graphics, videos, and other visual content for social platforms",
        "Monitor social media trends and implement best practices",
        "Analyze performance metrics and provide detailed monthly reports",
        "Manage paid social advertising campaigns and optimize for ROI",
        "Engage with followers and respond to comments and messages promptly",
        "Collaborate with clients to align social media goals with business objectives",
        "Stay updated on platform algorithm changes and adjust strategies accordingly",
      ],
    },
    {
      id: 7,
      title: "Social Media Content Creator Intern",
      department: "Marketing",
      location: "Remote / Austin",
      type: "Internship",
      experience: "Entry Level",
      applicationLink: jobApplicationLinks[7],
      description:
        "Join our dynamic marketing team as a Social Media Content Creator Intern! This is an exciting opportunity for a creative individual to gain hands-on experience in content creation, social media strategy, and digital marketing while working with multiple client accounts.",
      requirements: [
        "Currently pursuing or recently completed degree in Marketing, Communications, Graphic Design, or related field",
        "Strong creative skills with experience in visual content creation",
        "Familiarity with social media platforms (Instagram, TikTok, Facebook, LinkedIn, X)",
        "Basic knowledge of design tools (Canva, Adobe Creative Suite, or similar)",
        "Understanding of social media trends and viral content formats",
        "Excellent written communication and storytelling skills",
        "Basic video editing skills (CapCut, Adobe Premiere, or similar)",
        "Self-motivated with ability to work independently and meet deadlines",
        "Portfolio showcasing creative work (personal social media, school projects, etc.)",
      ],
      responsibilities: [
        "Create engaging visual content including graphics, reels, and stories for client accounts",
        "Assist in developing content calendars and social media strategies",
        "Research current social media trends and viral content formats",
        "Write compelling captions and copy for various social media posts",
        "Support community management by engaging with followers and responding to comments",
        "Assist with basic video editing and motion graphics creation",
        "Help with content planning and brainstorming creative campaign ideas",
        "Monitor competitor activities and industry best practices",
        "Collaborate with the marketing team on client projects and campaigns",
        "Learn and apply social media analytics to measure content performance",
      ],
    },
    {
      id: 8,
      title: "Senior Mobile Applications Developer",
      department: "Mobile Development",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "6+ years",
      applicationLink: jobApplicationLinks[8],
      description:
        "Join our innovative mobile development team to create cutting-edge native applications for iOS and Android platforms. You'll lead the development of high-performance mobile solutions that deliver exceptional user experiences and drive business growth across multiple client projects.",
      requirements: [
        "6+ years of professional mobile application development experience",
        "Expert proficiency in Swift/Objective-C for iOS and Kotlin/Java for Android development",
        "Strong experience with cross-platform frameworks (React Native, Flutter, or Xamarin)",
        "Deep understanding of mobile UI/UX design principles and platform-specific guidelines",
        "Experience with mobile app architecture patterns (MVP, MVVM, Clean Architecture)",
        "Proficiency in RESTful APIs, GraphQL, and third-party library integration",
        "Knowledge of mobile security best practices and data encryption techniques",
        "Experience with app store deployment processes and App Store Optimization (ASO)",
        "Familiarity with mobile analytics tools (Firebase Analytics, Crashlytics, Flurry)",
        "Understanding of mobile DevOps, CI/CD pipelines, and automated testing frameworks",
        "Experience with version control systems (Git) and agile development methodologies",
        "Bachelor's degree in Computer Science, Software Engineering, or equivalent experience",
      ],
      responsibilities: [
        "Design and develop high-quality native mobile applications for iOS and Android platforms",
        "Collaborate with product managers and designers to translate requirements into technical solutions",
        "Implement responsive and intuitive user interfaces following platform-specific design guidelines",
        "Optimize mobile applications for performance, battery efficiency, and memory management",
        "Integrate mobile apps with backend services, APIs, and cloud platforms (AWS, Firebase)",
        "Conduct code reviews and mentor junior developers on mobile development best practices",
        "Implement robust testing strategies including unit tests, integration tests, and UI automation",
        "Stay current with mobile development trends, new platform features, and emerging technologies",
        "Troubleshoot and debug complex mobile application issues across different devices and OS versions",
        "Manage app store submissions, updates, and compliance with platform guidelines",
        "Collaborate with QA teams to ensure comprehensive testing and quality assurance",
        "Document technical specifications, APIs, and development processes for team knowledge sharing",
      ],
    },
  ];

  const JobCard = ({ job, isSelected, onClick }) => (
    <div
      className={clsx(
        "border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02]",
        isSelected ? "border-p1 bg-p1/5" : "border-s2 hover:border-p1/50"
      )}
      onClick={onClick}
    >
      <div className='flex justify-between items-start mb-4'>
        <div>
          <h3 className='text-xl font-bold text-p4 mb-2'>{job.title}</h3>
          <div className='flex flex-wrap gap-2 text-sm'>
            <span className='px-3 py-1 bg-p1/10 text-p1 rounded-full'>
              {job.department}
            </span>
            <span className='px-3 py-1 bg-s2/50 text-p4 rounded-full'>
              {job.type}
            </span>
            <span className='px-3 py-1 bg-s2/50 text-p4 rounded-full'>
              {job.location}
            </span>
          </div>
        </div>
        <div className='text-right'>
          <p className='text-sm text-p5'>{job.experience}</p>
        </div>
      </div>

      <p className='text-p5 mb-4 line-clamp-2'>{job.description}</p>

      <div className='flex justify-between items-center'>
        <span className='text-p1 text-sm font-medium'>
          Click to view details
        </span>
        <svg
          className={clsx(
            "w-5 h-5 transition-transform duration-200",
            isSelected ? "rotate-180" : ""
          )}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </div>
    </div>
  );

  JobCard.propTypes = {
    job: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      experience: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      applicationLink: PropTypes.string.isRequired,
      requirements: PropTypes.arrayOf(PropTypes.string),
      responsibilities: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  const JobDetails = ({ job }) => (
    <div className='border-2 border-p1 rounded-xl p-6 bg-p1/5 mt-4'>
      <div className='mb-6'>
        <h4 className='text-lg font-bold text-p4 mb-3'>Job Description</h4>
        <p className='text-p5 leading-relaxed'>{job.description}</p>
      </div>

      <div className='mb-6'>
        <h4 className='text-lg font-bold text-p4 mb-3'>Requirements</h4>
        <ul className='space-y-2'>
          {job.requirements.map((req, index) => (
            <li key={index} className='flex items-start gap-3'>
              <img
                src='/images/check.png'
                alt='check'
                className='w-5 h-5 mt-0.5'
              />
              <span className='text-p5'>{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='mb-6'>
        <h4 className='text-lg font-bold text-p4 mb-3'>Responsibilities</h4>
        <ul className='space-y-2'>
          {job.responsibilities.map((resp, index) => (
            <li key={index} className='flex items-start gap-3'>
              <img
                src='/images/check.png'
                alt='check'
                className='w-5 h-5 mt-0.5'
              />
              <span className='text-p5'>{resp}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex gap-4 pt-4'>
        <a
          href={job.applicationLink}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block'
        >
          <Button>Apply Now</Button>
        </a>
        <button className='px-6 py-3 border-2 border-p1 text-p1 rounded-full hover:bg-p1/10 transition-all duration-300'>
          Save Job
        </button>
      </div>
    </div>
  );

  JobDetails.propTypes = {
    job: PropTypes.shape({
      description: PropTypes.string.isRequired,
      requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
      responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
      applicationLink: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <section className='min-h-screen pb-20' style={{ paddingTop: "300px" }}>
      <div className='container'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='h1 max-lg:h2 max-md:h3 text-p4 mb-6'>Join Our Team</h1>
          <p className='body-1 max-w-3xl mx-auto text-p5 mb-8'>
            We&apos;re building the future of technology and looking for
            passionate individuals to join our mission. Discover exciting career
            opportunities and grow with us.
          </p>
          <div className='flex justify-center'>
            <div className='px-6 py-3 border-2 border-p1 text-p1 rounded-full'>
              {jobPostings.length} Open Positions
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className='max-w-4xl mx-auto'>
          <h2 className='h3 max-lg:h4 text-p4 mb-8'>Current Openings</h2>

          <div className='space-y-6'>
            {jobPostings.map((job) => (
              <div key={job.id}>
                <JobCard
                  job={job}
                  isSelected={selectedJob === job.id}
                  onClick={() =>
                    setSelectedJob(selectedJob === job.id ? null : job.id)
                  }
                />
                {selectedJob === job.id && <JobDetails job={job} />}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className='max-w-3xl mx-auto mt-20 text-center'>
          <div className='border-2 border-s2 rounded-xl p-8 bg-s1/50'>
            <h3 className='h4 text-p4 mb-4'>Don&apos;t see the right role?</h3>
            <p className='text-p5 mb-6'>
              We&apos;re always looking for talented individuals. Send us your
              resume and let us know how you&apos;d like to contribute to our
              mission.
            </p>
            <a
              href='https://forms.gle/H8FmvFBwBgTGMy6Z8'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block'
            >
              <Button>Contact Us</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
