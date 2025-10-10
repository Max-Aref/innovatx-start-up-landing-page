import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='min-h-screen bg-s1'>
      {/* Hero Section */}
      <section className='pt-32 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='container max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-p1 mb-6'>
              About Innovatx
            </h1>
            <p className='text-xl sm:text-2xl text-p4 max-w-3xl mx-auto leading-relaxed'>
              Empowering businesses with cutting-edge technology solutions,
              AI-powered automation, and innovative digital transformation
              strategies.
            </p>
          </div>

          {/* Mission Statement */}
          <div className='bg-gradient-to-br from-p1/10 to-p3/10 rounded-3xl p-8 sm:p-12 border border-p1/20 mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-p1 mb-6 text-center'>
              Our Mission
            </h2>
            <p className='text-lg sm:text-xl text-p4 text-center max-w-4xl mx-auto leading-relaxed'>
              At Innovatx Technologies, LLC, we are committed to revolutionizing
              how businesses leverage technology. Our mission is to empower
              small businesses, startups, and enterprises with innovative
              software solutions, cloud-based technologies, and AI-powered
              automation tools that drive growth, efficiency, and digital
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-s2'>
        <div className='container max-w-6xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-p1 mb-12 text-center'>
            Who We Are
          </h2>
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            <div className='bg-s1 rounded-2xl p-8 border border-s3'>
              <div className='text-4xl mb-4'>🚀</div>
              <h3 className='text-2xl font-bold text-p1 mb-4'>
                Technology Innovators
              </h3>
              <p className='text-p4 leading-relaxed'>
                Innovatx Technologies, LLC is a leading technology company
                specializing in software development, web and mobile application
                development, cloud computing solutions, and digital
                transformation consulting. We combine technical expertise with
                business acumen to deliver exceptional results for our clients.
              </p>
            </div>

            <div className='bg-s1 rounded-2xl p-8 border border-s3'>
              <div className='text-4xl mb-4'>💡</div>
              <h3 className='text-2xl font-bold text-p1 mb-4'>
                Problem Solvers
              </h3>
              <p className='text-p4 leading-relaxed'>
                We believe in the power of technology to solve real-world
                business challenges. Our team of experienced developers,
                designers, and strategists work collaboratively to create custom
                software solutions, enterprise applications, and innovative
                products that address unique business needs and drive measurable
                success.
              </p>
            </div>

            <div className='bg-s1 rounded-2xl p-8 border border-s3'>
              <div className='text-4xl mb-4'>🎯</div>
              <h3 className='text-2xl font-bold text-p1 mb-4'>
                Growth Partners
              </h3>
              <p className='text-p4 leading-relaxed'>
                We go beyond traditional software development services. As your
                strategic technology partner, we provide comprehensive business
                consulting, digital strategy planning, system integration, and
                ongoing technical support to ensure your organization stays
                competitive in the rapidly evolving digital landscape.
              </p>
            </div>

            <div className='bg-s1 rounded-2xl p-8 border border-s3'>
              <div className='text-4xl mb-4'>🔒</div>
              <h3 className='text-2xl font-bold text-p1 mb-4'>
                Security Focused
              </h3>
              <p className='text-p4 leading-relaxed'>
                Data security and privacy are at the core of everything we do.
                We implement industry-leading cybersecurity measures, encryption
                protocols, and compliance frameworks to protect your sensitive
                information. Our commitment to security gives you peace of mind
                while focusing on business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='container max-w-6xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-p1 mb-12 text-center'>
            What We Do
          </h2>
          <div className='space-y-6 mb-12'>
            <div className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
              <h3 className='text-xl sm:text-2xl font-bold text-p1 mb-3'>
                🤖 AI-Powered Automation & Machine Learning
              </h3>
              <p className='text-p4 leading-relaxed'>
                Leverage artificial intelligence and machine learning to
                automate repetitive tasks, optimize business processes, enhance
                productivity, and gain actionable insights from data. Our AI
                solutions include natural language processing, predictive
                analytics, intelligent chatbots, and automated decision-making
                systems that transform how you operate.
              </p>
            </div>

            <div className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
              <h3 className='text-xl sm:text-2xl font-bold text-p1 mb-3'>
                💻 Custom Software Development
              </h3>
              <p className='text-p4 leading-relaxed'>
                Build tailored software solutions that perfectly align with your
                business requirements. From enterprise resource planning (ERP)
                systems and customer relationship management (CRM) platforms to
                inventory management software and project management tools, we
                develop scalable, secure, and user-friendly applications using
                the latest programming languages and frameworks.
              </p>
            </div>

            <div className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
              <h3 className='text-xl sm:text-2xl font-bold text-p1 mb-3'>
                📱 Web & Mobile Application Development
              </h3>
              <p className='text-p4 leading-relaxed'>
                Create stunning, responsive websites and mobile apps that engage
                users and drive conversions. Our full-stack development team
                specializes in React, Node.js, React Native, Flutter, and
                progressive web apps (PWA). We deliver cross-platform solutions
                with seamless user experiences across all devices and operating
                systems.
              </p>
            </div>

            <div className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
              <h3 className='text-xl sm:text-2xl font-bold text-p1 mb-3'>
                ☁️ Cloud Solutions & Infrastructure
              </h3>
              <p className='text-p4 leading-relaxed'>
                Migrate to the cloud and unlock scalability, flexibility, and
                cost-efficiency. We provide cloud consulting, architecture
                design, migration services, and managed cloud operations using
                AWS, Azure, and Google Cloud Platform. Our DevOps expertise
                ensures continuous integration, continuous deployment (CI/CD),
                and infrastructure as code (IaC) for optimal performance.
              </p>
            </div>

            <div className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
              <h3 className='text-xl sm:text-2xl font-bold text-p1 mb-3'>
                🔄 Digital Transformation Consulting
              </h3>
              <p className='text-p4 leading-relaxed'>
                Navigate the digital revolution with expert guidance. Our
                consultants assess your current technology stack, identify
                opportunities for improvement, and develop comprehensive digital
                transformation roadmaps. We help modernize legacy systems,
                implement agile methodologies, and foster a culture of
                innovation throughout your organization.
              </p>
            </div>

            <div className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
              <h3 className='text-xl sm:text-2xl font-bold text-p1 mb-3'>
                🎨 UI/UX Design & Product Strategy
              </h3>
              <p className='text-p4 leading-relaxed'>
                Design exceptional user experiences that delight customers and
                drive engagement. Our design team conducts user research,
                creates wireframes and prototypes, performs usability testing,
                and delivers pixel-perfect interfaces. We follow human-centered
                design principles and accessibility standards to ensure
                inclusive digital products.
              </p>
            </div>

            <div className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
              <h3 className='text-xl sm:text-2xl font-bold text-p1 mb-3'>
                🔗 API Development & System Integration
              </h3>
              <p className='text-p4 leading-relaxed'>
                Connect your applications, databases, and third-party services
                seamlessly. We design and develop RESTful APIs, GraphQL
                endpoints, and microservices architectures that enable efficient
                data exchange and system interoperability. Our integration
                solutions streamline workflows and eliminate data silos.
              </p>
            </div>

            <div className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
              <h3 className='text-xl sm:text-2xl font-bold text-p1 mb-3'>
                📊 Data Analytics & Business Intelligence
              </h3>
              <p className='text-p4 leading-relaxed'>
                Transform raw data into actionable insights with advanced
                analytics solutions. We build data warehouses, create
                interactive dashboards using Power BI and Tableau, implement ETL
                pipelines, and develop custom reporting tools that empower
                data-driven decision-making and strategic planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-s2'>
        <div className='container max-w-6xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-p1 mb-12 text-center'>
            Our Approach
          </h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='bg-s1 rounded-2xl p-6 border border-s3 text-center'>
              <div className='text-5xl mb-4'>1️⃣</div>
              <h3 className='text-xl font-bold text-p1 mb-3'>Discovery</h3>
              <p className='text-p4 text-sm'>
                We start by understanding your business goals, challenges,
                target audience, and technical requirements through
                comprehensive discovery sessions and stakeholder interviews.
              </p>
            </div>

            <div className='bg-s1 rounded-2xl p-6 border border-s3 text-center'>
              <div className='text-5xl mb-4'>2️⃣</div>
              <h3 className='text-xl font-bold text-p1 mb-3'>Strategy</h3>
              <p className='text-p4 text-sm'>
                Our team develops a detailed project roadmap, technical
                architecture, user stories, and implementation timeline aligned
                with your business objectives and budget constraints.
              </p>
            </div>

            <div className='bg-s1 rounded-2xl p-6 border border-s3 text-center'>
              <div className='text-5xl mb-4'>3️⃣</div>
              <h3 className='text-xl font-bold text-p1 mb-3'>Development</h3>
              <p className='text-p4 text-sm'>
                Using agile methodology and iterative development cycles, we
                build your solution with regular sprint reviews, continuous
                testing, and transparent communication throughout the process.
              </p>
            </div>

            <div className='bg-s1 rounded-2xl p-6 border border-s3 text-center'>
              <div className='text-5xl mb-4'>4️⃣</div>
              <h3 className='text-xl font-bold text-p1 mb-3'>Support</h3>
              <p className='text-p4 text-sm'>
                Post-launch, we provide ongoing maintenance, performance
                monitoring, security updates, feature enhancements, and 24/7
                technical support to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='container max-w-6xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-p1 mb-12 text-center'>
            Industries We Serve
          </h2>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {[
              {
                icon: "🏪",
                name: "Retail & E-commerce",
                desc: "Online stores, POS systems",
              },
              {
                icon: "🏥",
                name: "Healthcare & Medical",
                desc: "Telemedicine, patient portals",
              },
              {
                icon: "💰",
                name: "Finance & Fintech",
                desc: "Payment processing, banking",
              },
              {
                icon: "🎓",
                name: "Education & E-learning",
                desc: "LMS, educational platforms",
              },
              {
                icon: "🏭",
                name: "Manufacturing",
                desc: "Supply chain, inventory",
              },
              {
                icon: "🏨",
                name: "Hospitality & Travel",
                desc: "Booking systems, management",
              },
              {
                icon: "🏗️",
                name: "Real Estate & PropTech",
                desc: "Property management, CRM",
              },
              {
                icon: "🚚",
                name: "Logistics & Transportation",
                desc: "Fleet tracking, delivery",
              },
              {
                icon: "🎯",
                name: "Marketing & Advertising",
                desc: "Campaign management, analytics",
              },
              {
                icon: "⚖️",
                name: "Legal & Professional Services",
                desc: "Case management, billing",
              },
              {
                icon: "🎮",
                name: "Media & Entertainment",
                desc: "Streaming, content platforms",
              },
              {
                icon: "🌱",
                name: "Startups & Entrepreneurs",
                desc: "MVP development, scaling",
              },
            ].map((industry, index) => (
              <div
                key={index}
                className='bg-s2 rounded-2xl p-6 border border-s3 text-center hover:border-p1 transition-all duration-300'
              >
                <div className='text-4xl mb-3'>{industry.icon}</div>
                <h3 className='text-lg font-bold text-p1 mb-2'>
                  {industry.name}
                </h3>
                <p className='text-p4 text-sm'>{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Innovatx */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-s2'>
        <div className='container max-w-6xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-p1 mb-12 text-center'>
            Why Choose Innovatx?
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-s1 rounded-2xl p-8 border border-s3'>
              <div className='text-3xl mb-4'>⚡</div>
              <h3 className='text-xl font-bold text-p1 mb-3'>
                Rapid Development & Deployment
              </h3>
              <p className='text-p4'>
                We use modern development frameworks, CI/CD pipelines, and agile
                methodologies to deliver projects faster without compromising
                quality. Our efficient processes reduce time-to-market and
                accelerate your competitive advantage.
              </p>
            </div>

            <div className='bg-s1 rounded-2xl p-8 border border-s3'>
              <div className='text-3xl mb-4'>💎</div>
              <h3 className='text-xl font-bold text-p1 mb-3'>
                Affordable & Transparent Pricing
              </h3>
              <p className='text-p4'>
                We offer competitive pricing models including fixed-price
                projects, hourly rates, and dedicated team arrangements. No
                hidden fees, clear milestone-based payments, and flexible
                engagement options that fit your budget.
              </p>
            </div>

            <div className='bg-s1 rounded-2xl p-8 border border-s3'>
              <div className='text-3xl mb-4'>🎓</div>
              <h3 className='text-xl font-bold text-p1 mb-3'>
                Experienced Expert Team
              </h3>
              <p className='text-p4'>
                Our developers, designers, and consultants have years of
                experience working with Fortune 500 companies, fast-growing
                startups, and everything in between. We bring best practices and
                industry expertise to every project.
              </p>
            </div>

            <div className='bg-s1 rounded-2xl p-8 border border-s3'>
              <div className='text-3xl mb-4'>🔧</div>
              <h3 className='text-xl font-bold text-p1 mb-3'>
                Cutting-Edge Technology Stack
              </h3>
              <p className='text-p4'>
                We leverage the latest technologies including React, Node.js,
                Python, AWS, Docker, Kubernetes, TensorFlow, and more. Our
                technology choices are based on scalability, performance, and
                long-term maintainability.
              </p>
            </div>

            <div className='bg-s1 rounded-2xl p-8 border border-s3'>
              <div className='text-3xl mb-4'>📞</div>
              <h3 className='text-xl font-bold text-p1 mb-3'>
                24/7 Support & Communication
              </h3>
              <p className='text-p4'>
                We believe in transparent communication and are always available
                to address your concerns. Our support team provides
                round-the-clock assistance via email, chat, phone, and video
                calls.
              </p>
            </div>

            <div className='bg-s1 rounded-2xl p-8 border border-s3'>
              <div className='text-3xl mb-4'>🏆</div>
              <h3 className='text-xl font-bold text-p1 mb-3'>
                Proven Track Record
              </h3>
              <p className='text-p4'>
                We have successfully delivered 100+ projects across various
                industries, helping businesses increase revenue, improve
                operational efficiency, enhance customer satisfaction, and
                achieve their digital transformation goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='container max-w-6xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-p1 mb-12 text-center'>
            Our Core Values
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-s2 rounded-2xl p-8 border border-s3'>
              <h3 className='text-2xl font-bold text-p1 mb-4'>🤝 Integrity</h3>
              <p className='text-p4 leading-relaxed'>
                We operate with honesty, transparency, and ethical business
                practices. Our commitment to integrity builds trust with
                clients, partners, and team members, forming the foundation of
                lasting relationships.
              </p>
            </div>

            <div className='bg-s2 rounded-2xl p-8 border border-s3'>
              <h3 className='text-2xl font-bold text-p1 mb-4'>🌟 Excellence</h3>
              <p className='text-p4 leading-relaxed'>
                We strive for excellence in everything we do, from code quality
                and user experience to customer service and project delivery.
                Our attention to detail and commitment to best practices ensures
                superior outcomes.
              </p>
            </div>

            <div className='bg-s2 rounded-2xl p-8 border border-s3'>
              <h3 className='text-2xl font-bold text-p1 mb-4'>💡 Innovation</h3>
              <p className='text-p4 leading-relaxed'>
                We embrace emerging technologies, encourage creative thinking,
                and continuously explore new ways to solve problems. Innovation
                drives our product development and helps clients stay ahead of
                the curve.
              </p>
            </div>

            <div className='bg-s2 rounded-2xl p-8 border border-s3'>
              <h3 className='text-2xl font-bold text-p1 mb-4'>
                🤗 Collaboration
              </h3>
              <p className='text-p4 leading-relaxed'>
                We believe in the power of teamwork and partnership. By working
                closely with clients and fostering collaboration within our
                team, we create solutions that truly meet business needs and
                exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-s2'>
        <div className='container max-w-6xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-p1 mb-12 text-center'>
            Our Technology Stack
          </h2>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
            <div className='bg-s1 rounded-2xl p-6 border border-s3'>
              <h3 className='text-xl font-bold text-p1 mb-4'>Frontend</h3>
              <p className='text-p4 text-sm space-y-1'>
                React, Vue.js, Angular, Next.js, TypeScript, HTML5, CSS3,
                Tailwind CSS, Material-UI, Redux, GraphQL
              </p>
            </div>

            <div className='bg-s1 rounded-2xl p-6 border border-s3'>
              <h3 className='text-xl font-bold text-p1 mb-4'>Backend</h3>
              <p className='text-p4 text-sm space-y-1'>
                Node.js, Python, Django, Flask, PHP, Laravel, Ruby on Rails,
                .NET Core, Java, Spring Boot
              </p>
            </div>

            <div className='bg-s1 rounded-2xl p-6 border border-s3'>
              <h3 className='text-xl font-bold text-p1 mb-4'>Mobile</h3>
              <p className='text-p4 text-sm space-y-1'>
                React Native, Flutter, Swift (iOS), Kotlin (Android), Ionic,
                Xamarin, Progressive Web Apps (PWA)
              </p>
            </div>

            <div className='bg-s1 rounded-2xl p-6 border border-s3'>
              <h3 className='text-xl font-bold text-p1 mb-4'>Cloud & DevOps</h3>
              <p className='text-p4 text-sm space-y-1'>
                AWS, Azure, Google Cloud, Docker, Kubernetes, Jenkins, GitHub
                Actions, Terraform, Ansible
              </p>
            </div>

            <div className='bg-s1 rounded-2xl p-6 border border-s3'>
              <h3 className='text-xl font-bold text-p1 mb-4'>Databases</h3>
              <p className='text-p4 text-sm space-y-1'>
                PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, DynamoDB,
                Firebase, Cassandra
              </p>
            </div>

            <div className='bg-s1 rounded-2xl p-6 border border-s3'>
              <h3 className='text-xl font-bold text-p1 mb-4'>
                AI & Machine Learning
              </h3>
              <p className='text-p4 text-sm space-y-1'>
                TensorFlow, PyTorch, OpenAI, Scikit-learn, NLP, Computer Vision,
                Predictive Analytics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='container max-w-4xl mx-auto'>
          <div className='bg-gradient-to-br from-p1/10 to-p3/10 rounded-3xl p-8 sm:p-12 border border-p1/20 text-center'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-p1 mb-6'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-lg sm:text-xl text-p4 mb-8 max-w-2xl mx-auto'>
              Let&apos;s discuss how Innovatx can help you achieve your business
              goals with innovative technology solutions, custom software
              development, and digital transformation strategies.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/book-consultation'
                className='px-8 py-4 bg-p1 text-white rounded-full font-semibold text-lg hover:bg-p1/90 transition-all duration-300 shadow-lg hover:shadow-xl'
              >
                Book Free Consultation
              </Link>
              <Link
                to='/#contact'
                className='px-8 py-4 bg-s2 text-p1 rounded-full font-semibold text-lg hover:bg-s3 transition-all duration-300 border-2 border-p1'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords Section (Hidden) */}
      <div className='sr-only'>
        <h2>Innovatx Technologies - Technology Solutions Provider</h2>
        <p>
          software development company, custom software development services,
          web application development, mobile app development, AI automation,
          machine learning solutions, cloud computing services, digital
          transformation consulting, technology consulting firm, IT services
          provider, enterprise software development, startup technology partner,
          small business software solutions, agile software development,
          full-stack development, React development, Node.js development, Python
          development, AWS cloud services, Azure cloud solutions, DevOps
          services, API development, system integration, data analytics,
          business intelligence, UI UX design, product development, MVP
          development, scalable software architecture, secure software
          development, cybersecurity solutions, SaaS development, PaaS
          solutions, e-commerce development, CRM development, ERP systems,
          inventory management software, project management tools, workflow
          automation, process optimization, business process automation, RPA
          services, NLP solutions, chatbot development, predictive analytics,
          data science services, big data solutions, IoT development, blockchain
          development, progressive web apps, cross-platform development,
          responsive web design, mobile-first design, user experience design,
          frontend development, backend development, database design,
          microservices architecture, serverless computing, continuous
          integration, continuous deployment, infrastructure as code,
          containerization, orchestration, monitoring and logging, performance
          optimization, load balancing, scalability solutions, high availability
          systems, disaster recovery, backup solutions, technical support,
          maintenance services, IT consulting, digital strategy, technology
          roadmap, modernization services, legacy system migration, technology
          assessment, vendor selection, startup consulting, business
          transformation, innovation strategy
        </p>
      </div>
    </div>
  );
};

export default About;
