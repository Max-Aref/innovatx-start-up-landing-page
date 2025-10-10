import { useEffect } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='min-h-screen bg-s1'>
      <div className='container py-20 px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='max-w-4xl mx-auto mb-12'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-p1 mb-4'>
            Privacy Policy
          </h1>
          <p className='text-p5 text-lg'>Last Updated: October 8, 2025</p>
          <div className='mt-6 p-4 bg-s2 rounded-2xl border border-s3'>
            <p className='text-p4 text-sm sm:text-base'>
              Innovatx Technologies, LLC is committed to protecting your privacy
              and ensuring the security of your personal information. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your data in compliance with Texas state laws and
              federal regulations.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className='max-w-4xl mx-auto space-y-8'>
          {/* Section 1 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              1. Information We Collect
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                We collect information that you provide directly to us,
                information we obtain automatically when you use our services,
                and information from third-party sources as described below.
              </p>

              <div className='ml-4 space-y-4'>
                <div>
                  <h3 className='text-xl font-semibold text-p1 mb-2'>
                    1.1 Personal Information You Provide
                  </h3>
                  <ul className='list-disc list-inside space-y-2 ml-4'>
                    <li>
                      <strong className='text-p1'>Contact Information:</strong>{" "}
                      Name, email address, phone number, mailing address
                    </li>
                    <li>
                      <strong className='text-p1'>Account Information:</strong>{" "}
                      Username, password, security questions, preferences
                    </li>
                    <li>
                      <strong className='text-p1'>Business Information:</strong>{" "}
                      Company name, job title, business address, industry
                    </li>
                    <li>
                      <strong className='text-p1'>Payment Information:</strong>{" "}
                      Credit card details, billing address, payment history
                      (processed securely through third-party payment
                      processors)
                    </li>
                    <li>
                      <strong className='text-p1'>Communication Data:</strong>{" "}
                      Messages, feedback, support requests, consultation notes
                    </li>
                    <li>
                      <strong className='text-p1'>
                        Professional Information:
                      </strong>{" "}
                      Resume, portfolio, work history (for career applications)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className='text-xl font-semibold text-p1 mb-2'>
                    1.2 Information Collected Automatically
                  </h3>
                  <ul className='list-disc list-inside space-y-2 ml-4'>
                    <li>
                      <strong className='text-p1'>Device Information:</strong>{" "}
                      IP address, browser type, operating system, device
                      identifiers
                    </li>
                    <li>
                      <strong className='text-p1'>Usage Information:</strong>{" "}
                      Pages viewed, features used, time spent, click patterns,
                      access times
                    </li>
                    <li>
                      <strong className='text-p1'>Location Data:</strong>{" "}
                      Approximate geographic location based on IP address
                    </li>
                    <li>
                      <strong className='text-p1'>Cookies and Tracking:</strong>{" "}
                      Browser cookies, web beacons, pixel tags, local storage
                    </li>
                    <li>
                      <strong className='text-p1'>Analytics Data:</strong>{" "}
                      Performance metrics, error reports, system diagnostics
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className='text-xl font-semibold text-p1 mb-2'>
                    1.3 Information from Third Parties
                  </h3>
                  <ul className='list-disc list-inside space-y-2 ml-4'>
                    <li>Social media platforms (when you connect accounts)</li>
                    <li>Business partners and affiliates</li>
                    <li>Public databases and data providers</li>
                    <li>Marketing and analytics providers</li>
                    <li>Payment processors and financial institutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              2. How We Use Your Information
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                We use the information we collect for the following purposes:
              </p>
              <ul className='list-disc list-inside space-y-2 ml-4'>
                <li>
                  <strong className='text-p1'>Service Delivery:</strong>{" "}
                  Provide, maintain, and improve our technology solutions and
                  services
                </li>
                <li>
                  <strong className='text-p1'>Account Management:</strong>{" "}
                  Create and manage your account, verify identity, process
                  transactions
                </li>
                <li>
                  <strong className='text-p1'>Customer Support:</strong> Respond
                  to inquiries, provide technical support, resolve issues
                </li>
                <li>
                  <strong className='text-p1'>Communication:</strong> Send
                  service updates, newsletters, marketing materials (with your
                  consent)
                </li>
                <li>
                  <strong className='text-p1'>Personalization:</strong>{" "}
                  Customize your experience, recommend relevant services
                </li>
                <li>
                  <strong className='text-p1'>Analytics:</strong> Analyze usage
                  patterns, improve features, optimize performance
                </li>
                <li>
                  <strong className='text-p1'>Security:</strong> Detect fraud,
                  prevent abuse, protect against threats
                </li>
                <li>
                  <strong className='text-p1'>Legal Compliance:</strong> Comply
                  with laws, regulations, legal processes, and government
                  requests
                </li>
                <li>
                  <strong className='text-p1'>Business Operations:</strong>{" "}
                  Conduct research, develop new features, manage partnerships
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              3. Legal Basis for Processing (Texas & Federal Compliance)
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                Under Texas law and federal regulations, we process your
                personal information based on the following legal grounds:
              </p>
              <ul className='list-disc list-inside space-y-2 ml-4'>
                <li>
                  <strong className='text-p1'>Consent:</strong> You have given
                  explicit consent for processing your personal information for
                  specific purposes
                </li>
                <li>
                  <strong className='text-p1'>Contract Performance:</strong>{" "}
                  Processing is necessary to fulfill our contractual obligations
                  to you
                </li>
                <li>
                  <strong className='text-p1'>Legal Obligation:</strong>{" "}
                  Processing is required to comply with Texas state law or
                  federal regulations
                </li>
                <li>
                  <strong className='text-p1'>Legitimate Interests:</strong>{" "}
                  Processing is necessary for our legitimate business interests
                  (while respecting your privacy rights)
                </li>
                <li>
                  <strong className='text-p1'>Vital Interests:</strong>{" "}
                  Processing is necessary to protect your life or physical
                  safety
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              4. Information Sharing and Disclosure
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                We do not sell your personal information. We may share your
                information in the following circumstances:
              </p>

              <div className='ml-4 space-y-4'>
                <div>
                  <h3 className='text-xl font-semibold text-p1 mb-2'>
                    4.1 Service Providers
                  </h3>
                  <p>
                    We share information with third-party vendors who perform
                    services on our behalf:
                  </p>
                  <ul className='list-disc list-inside space-y-1 ml-4 mt-2'>
                    <li>Cloud hosting and infrastructure providers</li>
                    <li>Payment processors and financial services</li>
                    <li>Email and communication platforms</li>
                    <li>Analytics and marketing tools</li>
                    <li>Customer support systems</li>
                    <li>Security and fraud prevention services</li>
                  </ul>
                </div>

                <div>
                  <h3 className='text-xl font-semibold text-p1 mb-2'>
                    4.2 Business Transfers
                  </h3>
                  <p>
                    In the event of a merger, acquisition, reorganization, sale
                    of assets, or bankruptcy, your information may be
                    transferred as part of the business transaction.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-semibold text-p1 mb-2'>
                    4.3 Legal Requirements
                  </h3>
                  <p>We may disclose information when required by law:</p>
                  <ul className='list-disc list-inside space-y-1 ml-4 mt-2'>
                    <li>
                      To comply with court orders, subpoenas, or legal process
                    </li>
                    <li>To respond to government or regulatory requests</li>
                    <li>To enforce our Terms of Use and other agreements</li>
                    <li>To protect our rights, property, and safety</li>
                    <li>To prevent fraud, abuse, or illegal activities</li>
                    <li>
                      To comply with Texas state law and federal regulations
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className='text-xl font-semibold text-p1 mb-2'>
                    4.4 With Your Consent
                  </h3>
                  <p>
                    We may share your information with third parties when you
                    give us specific permission to do so.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              5. Your Privacy Rights (Texas Residents)
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                As a Texas resident, you have specific rights regarding your
                personal information under Texas law and federal regulations:
              </p>

              <div className='ml-4 space-y-4'>
                <div>
                  <h3 className='text-xl font-semibold text-p1 mb-2'>
                    5.1 Right to Access
                  </h3>
                  <p>
                    You have the right to request and receive a copy of the
                    personal information we hold about you, including categories
                    of data, sources, purposes, and recipients.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-semibold text-p1 mb-2'>
                    5.2 Right to Correction
                  </h3>
                  <p>
                    You have the right to request correction of inaccurate or
                    incomplete personal information we maintain about you.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-semibold text-p1 mb-2'>
                    5.3 Right to Deletion
                  </h3>
                  <p>
                    You have the right to request deletion of your personal
                    information, subject to certain legal exceptions (e.g.,
                    completing transactions, legal obligations, security
                    purposes).
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-semibold text-p1 mb-2'>
                    5.4 Right to Data Portability
                  </h3>
                  <p>
                    You have the right to receive your personal information in a
                    structured, commonly used, machine-readable format and
                    transmit it to another provider.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-semibold text-p1 mb-2'>
                    5.5 Right to Opt-Out
                  </h3>
                  <p>You have the right to opt-out of:</p>
                  <ul className='list-disc list-inside space-y-1 ml-4 mt-2'>
                    <li>Sale of personal information (we do not sell data)</li>
                    <li>Targeted advertising and profiling</li>
                    <li>Marketing communications</li>
                    <li>
                      Sharing with third parties for their marketing purposes
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className='text-xl font-semibold text-p1 mb-2'>
                    5.6 Right to Non-Discrimination
                  </h3>
                  <p>
                    We will not discriminate against you for exercising your
                    privacy rights. You will not be denied services, charged
                    different prices, or receive different quality of service.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-semibold text-p1 mb-2'>
                    5.7 How to Exercise Your Rights
                  </h3>
                  <p>To exercise any of these rights, contact us at:</p>
                  <ul className='list-none space-y-1 ml-4 mt-2'>
                    <li>Email: privacy@innovatx.com</li>
                    <li>Email: support@innovatx.com</li>
                    <li>Phone: Available through our consultation booking</li>
                  </ul>
                  <p className='mt-2'>
                    We will respond to your request within 45 days (as required
                    by law) and may extend this period by an additional 45 days
                    with notice.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              6. Data Security and Protection
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                We implement industry-standard security measures to protect your
                personal information:
              </p>

              <div className='ml-4 space-y-3'>
                <div>
                  <h3 className='text-lg font-semibold text-p1 mb-1'>
                    Technical Safeguards
                  </h3>
                  <ul className='list-disc list-inside space-y-1 ml-4'>
                    <li>256-bit SSL/TLS encryption for data transmission</li>
                    <li>AES-256 encryption for data at rest</li>
                    <li>Secure, encrypted databases</li>
                    <li>
                      Regular security audits and vulnerability assessments
                    </li>
                    <li>Intrusion detection and prevention systems</li>
                    <li>Multi-factor authentication (MFA)</li>
                  </ul>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-p1 mb-1'>
                    Administrative Safeguards
                  </h3>
                  <ul className='list-disc list-inside space-y-1 ml-4'>
                    <li>Employee training on data privacy and security</li>
                    <li>Access controls and role-based permissions</li>
                    <li>Background checks for employees with data access</li>
                    <li>Confidentiality agreements with staff and vendors</li>
                    <li>
                      Incident response and breach notification procedures
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-p1 mb-1'>
                    Physical Safeguards
                  </h3>
                  <ul className='list-disc list-inside space-y-1 ml-4'>
                    <li>Secure data centers with 24/7 monitoring</li>
                    <li>Restricted physical access to servers and equipment</li>
                    <li>Video surveillance and access logging</li>
                    <li>
                      Environmental controls (fire suppression, climate control)
                    </li>
                  </ul>
                </div>
              </div>

              <p className='mt-4'>
                <strong className='text-p1'>Data Breach Notification:</strong>{" "}
                In the event of a data breach that compromises your personal
                information, we will notify you and relevant authorities as
                required by Texas law, typically within 60 days of discovery.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              7. Data Retention
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                We retain your personal information for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, unless a
                longer retention period is required or permitted by law.
              </p>

              <div className='ml-4 space-y-2'>
                <p>
                  <strong className='text-p1'>Retention Periods:</strong>
                </p>
                <ul className='list-disc list-inside space-y-1 ml-4'>
                  <li>
                    <strong>Account Information:</strong> Retained while account
                    is active, plus 3 years after closure
                  </li>
                  <li>
                    <strong>Transaction Records:</strong> 7 years (tax and
                    accounting requirements)
                  </li>
                  <li>
                    <strong>Support Communications:</strong> 3 years from last
                    interaction
                  </li>
                  <li>
                    <strong>Marketing Data:</strong> Until opt-out, or 2 years
                    of inactivity
                  </li>
                  <li>
                    <strong>Usage Logs:</strong> 90 days to 2 years (depending
                    on type)
                  </li>
                  <li>
                    <strong>Legal Hold Data:</strong> Retained as required by
                    law or litigation
                  </li>
                </ul>
              </div>

              <p>
                After the retention period expires, we securely delete or
                anonymize your information in accordance with our data disposal
                policies.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              8. Cookies and Tracking Technologies
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                We use cookies and similar tracking technologies to enhance your
                experience on our website:
              </p>

              <div className='ml-4 space-y-3'>
                <div>
                  <h3 className='text-lg font-semibold text-p1 mb-1'>
                    Types of Cookies We Use
                  </h3>
                  <ul className='list-disc list-inside space-y-1 ml-4'>
                    <li>
                      <strong>Essential Cookies:</strong> Required for website
                      functionality (login, security)
                    </li>
                    <li>
                      <strong>Performance Cookies:</strong> Collect anonymous
                      usage data to improve performance
                    </li>
                    <li>
                      <strong>Functional Cookies:</strong> Remember your
                      preferences and settings
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Help us understand how
                      visitors interact with our site
                    </li>
                    <li>
                      <strong>Marketing Cookies:</strong> Track your activity
                      for targeted advertising (with consent)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-p1 mb-1'>
                    Managing Cookies
                  </h3>
                  <p>You can control cookies through:</p>
                  <ul className='list-disc list-inside space-y-1 ml-4 mt-1'>
                    <li>Browser settings (block, delete, or accept cookies)</li>
                    <li>Our cookie consent banner (select preferences)</li>
                    <li>
                      Opt-out tools from advertising networks (NAI, DAA, Google)
                    </li>
                  </ul>
                  <p className='mt-2'>
                    Note: Disabling cookies may limit website functionality.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-p1 mb-1'>
                    Third-Party Tracking
                  </h3>
                  <p>
                    We use third-party analytics and advertising services
                    (Google Analytics, Facebook Pixel, etc.) that may collect
                    information about your online activities. These services
                    have their own privacy policies.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              9. Children&apos;s Privacy
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                Our services are not directed to children under 13 years of age.
                We do not knowingly collect personal information from children
                under 13.
              </p>
              <p>
                If we discover that we have collected information from a child
                under 13 without parental consent, we will delete that
                information immediately. If you believe we have collected
                information from a child under 13, please contact us at
                privacy@innovatx.com.
              </p>
              <p>
                For children aged 13-18, we require parental or guardian consent
                before collecting personal information, in compliance with Texas
                law and federal COPPA requirements.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              10. International Data Transfers
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                Innovatx Technologies, LLC is based in the United States. If you
                access our services from outside the U.S., your information may
                be transferred to, stored, and processed in the United States or
                other countries where our service providers operate.
              </p>
              <p>
                We implement appropriate safeguards to ensure your information
                receives adequate protection, including:
              </p>
              <ul className='list-disc list-inside space-y-1 ml-4'>
                <li>
                  Standard contractual clauses approved by regulatory
                  authorities
                </li>
                <li>Data processing agreements with international vendors</li>
                <li>
                  Compliance with Privacy Shield frameworks (where applicable)
                </li>
                <li>Adherence to GDPR principles for EU data transfers</li>
              </ul>
            </div>
          </section>

          {/* Section 11 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              11. Third-Party Websites and Services
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                Our website may contain links to third-party websites, services,
                or integrations. This Privacy Policy does not apply to those
                third-party sites.
              </p>
              <p>
                We are not responsible for the privacy practices or content of
                third-party websites. We encourage you to review the privacy
                policies of any third-party sites you visit.
              </p>
              <p>
                Third-party services we integrate with (e.g., payment
                processors, social media platforms) have their own privacy
                policies and data practices.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              12. California Privacy Rights (CCPA)
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                If you are a California resident, you have additional rights
                under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className='list-disc list-inside space-y-2 ml-4'>
                <li>
                  <strong className='text-p1'>Right to Know and Access:</strong>{" "}
                  Request disclosure of personal information collected, used,
                  disclosed, or sold in the past 12 months
                </li>
                <li>
                  <strong className='text-p1'>Right to Delete:</strong> Request
                  deletion of personal information we have collected
                </li>
                <li>
                  <strong className='text-p1'>Right to Opt-Out:</strong> Opt-out
                  of the sale of personal information (we do not sell data)
                </li>
                <li>
                  <strong className='text-p1'>
                    Right to Non-Discrimination:
                  </strong>{" "}
                  Equal service and pricing regardless of privacy choices
                </li>
                <li>
                  <strong className='text-p1'>Shine the Light Law:</strong>{" "}
                  Request information about sharing for direct marketing
                  purposes
                </li>
              </ul>
              <p className='mt-4'>
                To exercise your CCPA rights, contact us at privacy@innovatx.com
                or call our toll-free number. We will verify your identity
                before processing your request.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              13. Changes to This Privacy Policy
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technologies, legal requirements, or
                business operations.
              </p>
              <p>
                <strong className='text-p1'>Notification of Changes:</strong>
              </p>
              <ul className='list-disc list-inside space-y-1 ml-4'>
                <li>
                  Material changes: 30-day advance notice via email and website
                  banner
                </li>
                <li>
                  Minor changes: Updated "Last Updated" date at the top of this
                  page
                </li>
                <li>
                  Significant changes: May require re-consent for certain data
                  uses
                </li>
              </ul>
              <p className='mt-3'>
                Your continued use of our services after changes take effect
                constitutes acceptance of the updated Privacy Policy. We
                encourage you to review this page periodically.
              </p>
            </div>
          </section>

          {/* Section 14 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              14. Texas-Specific Provisions
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                As a company operating in Texas, we comply with all applicable
                Texas state privacy laws and regulations:
              </p>

              <div className='ml-4 space-y-3'>
                <div>
                  <h3 className='text-lg font-semibold text-p1 mb-1'>
                    Identity Theft Protection
                  </h3>
                  <p>
                    In compliance with Texas Business and Commerce Code Chapter
                    521 (Identity Theft Enforcement and Protection Act), we:
                  </p>
                  <ul className='list-disc list-inside space-y-1 ml-4 mt-1'>
                    <li>Implement reasonable security procedures</li>
                    <li>
                      Notify affected individuals of security breaches without
                      unreasonable delay
                    </li>
                    <li>
                      Provide free credit monitoring if social security numbers
                      are compromised
                    </li>
                    <li>
                      Report breaches to the Texas Attorney General when
                      required
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-p1 mb-1'>
                    Data Breach Notification
                  </h3>
                  <p>
                    Under Texas Business and Commerce Code §521.053, we will
                    notify you of security breaches involving sensitive personal
                    information within 60 days of discovery.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-p1 mb-1'>
                    Biometric Data
                  </h3>
                  <p>
                    If we collect biometric data (fingerprints, facial
                    recognition, etc.), we will obtain your informed written
                    consent and comply with Texas Business and Commerce Code
                    Chapter 503.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-p1 mb-1'>
                    Student Data Privacy
                  </h3>
                  <p>
                    If we provide services to educational institutions, we
                    comply with Texas Education Code Chapter 32 regarding
                    student data privacy and security.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className='bg-gradient-to-br from-p1/10 to-p3/10 rounded-2xl p-6 sm:p-8 border border-p1/20'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              15. Contact Us
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                If you have questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
              </p>

              <div className='space-y-2'>
                <p>
                  <strong className='text-p1'>
                    Innovatx Technologies, LLC - Privacy Department
                  </strong>
                </p>
                <p>Email: privacy@innovatx.com</p>
                <p>Email: support@innovatx.com</p>
                <p>Email: legal@innovatx.com</p>
                <p>
                  Phone: Available through our{" "}
                  <Link
                    to='/book-consultation'
                    className='text-p1 hover:underline font-medium'
                  >
                    consultation booking
                  </Link>
                </p>
                <p className='mt-4'>
                  <strong className='text-p1'>Response Time:</strong> We will
                  respond to privacy inquiries within 10 business days and
                  fulfill verified requests within 45 days (may extend to 90
                  days with notice).
                </p>
              </div>

              <div className='mt-6 p-4 bg-s1 rounded-xl'>
                <p className='text-sm'>
                  <strong className='text-p1'>Texas Attorney General:</strong>{" "}
                  If you have concerns about our privacy practices, you may also
                  contact the Texas Attorney General&apos;s Consumer Protection
                  Division.
                </p>
              </div>
            </div>
          </section>

          {/* Footer Notice */}
          <div className='bg-s3/50 rounded-2xl p-6 border border-s4'>
            <p className='text-p5 text-sm text-center'>
              By using Innovatx Technologies, LLC services, you acknowledge that
              you have read, understood, and agree to this Privacy Policy and
              our data practices.
            </p>
            <div className='flex flex-wrap justify-center gap-4 mt-4'>
              <Link
                to='/terms-of-use'
                className='text-p1 hover:underline text-sm font-medium'
              >
                Terms of Use
              </Link>
              <span className='text-p5'>•</span>
              <Link
                to='/sitemap'
                className='text-p1 hover:underline text-sm font-medium'
              >
                Site Map
              </Link>
              <span className='text-p5'>•</span>
              <Link
                to='/careers'
                className='text-p1 hover:underline text-sm font-medium'
              >
                Careers
              </Link>
              <span className='text-p5'>•</span>
              <Link
                to='/book-consultation'
                className='text-p1 hover:underline text-sm font-medium'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
