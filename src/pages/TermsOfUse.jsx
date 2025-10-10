import { useEffect } from "react";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='min-h-screen bg-s1'>
      <div className='container py-20 px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='max-w-4xl mx-auto mb-12'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-p1 mb-4'>
            Terms of Use
          </h1>
          <p className='text-p5 text-lg'>Last Updated: October 8, 2025</p>
          <div className='mt-6 p-4 bg-s2 rounded-2xl border border-s3'>
            <p className='text-p4 text-sm sm:text-base'>
              Please read these Terms of Use carefully before using the Innovatx
              Technologies, LLC website and services. By accessing or using our
              services, you agree to be bound by these terms.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className='max-w-4xl mx-auto space-y-8'>
          {/* Section 1 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              1. Acceptance of Terms
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                By accessing and using the Innovatx Technologies, LLC
                ("Innovatx," "we," "our," or "us") website and services, you
                accept and agree to be bound by these Terms of Use and our
                Privacy Policy. If you do not agree to these terms, please do
                not use our services.
              </p>
              <p>
                These terms constitute a legally binding agreement between you
                and Innovatx Technologies, LLC, a Limited Liability Company
                registered in the United States.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              2. Services Description
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                Innovatx provides innovative technology solutions including but
                not limited to:
              </p>
              <ul className='list-disc list-inside space-y-2 ml-4'>
                <li>AI-powered automation and productivity tools</li>
                <li>Cloud-based software solutions</li>
                <li>Web and mobile application development</li>
                <li>Technology consulting and strategy services</li>
                <li>Custom software development for businesses</li>
                <li>Digital transformation solutions</li>
              </ul>
              <p>
                Our mission is to empower small businesses, startups, and
                enterprises with cutting-edge technology that drives growth,
                efficiency, and innovation.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              3. User Accounts and Registration
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                <strong className='text-p1'>3.1 Account Creation:</strong> To
                access certain features of our services, you may be required to
                create an account. You agree to provide accurate, current, and
                complete information during registration.
              </p>
              <p>
                <strong className='text-p1'>3.2 Account Security:</strong> You
                are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. Notify us immediately of any unauthorized access or
                security breach.
              </p>
              <p>
                <strong className='text-p1'>3.3 Account Termination:</strong> We
                reserve the right to suspend or terminate accounts that violate
                these terms or engage in fraudulent, abusive, or illegal
                activities.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              4. Acceptable Use Policy
            </h2>
            <div className='space-y-4 text-p4'>
              <p>You agree NOT to use our services to:</p>
              <ul className='list-disc list-inside space-y-2 ml-4'>
                <li>
                  Violate any local, state, federal, or international laws or
                  regulations
                </li>
                <li>Infringe upon intellectual property rights of others</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Engage in unauthorized access to systems or networks</li>
                <li>Harass, threaten, or harm other users</li>
                <li>
                  Use automated systems (bots, scrapers) without authorization
                </li>
                <li>Interfere with or disrupt the integrity of our services</li>
                <li>Impersonate any person or entity</li>
                <li>Collect personal information without consent</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              5. Intellectual Property Rights
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                <strong className='text-p1'>5.1 Ownership:</strong> All content,
                features, and functionality of our services, including but not
                limited to text, graphics, logos, icons, images, audio clips,
                software, and design, are the exclusive property of Innovatx
                Technologies, LLC and are protected by United States and
                international copyright, trademark, and other intellectual
                property laws.
              </p>
              <p>
                <strong className='text-p1'>5.2 License Grant:</strong> We grant
                you a limited, non-exclusive, non-transferable, revocable
                license to access and use our services for personal or internal
                business purposes in accordance with these terms.
              </p>
              <p>
                <strong className='text-p1'>5.3 User Content:</strong> You
                retain ownership of content you submit to our services. By
                submitting content, you grant Innovatx a worldwide, royalty-free
                license to use, reproduce, and display such content as necessary
                to provide our services.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              6. Payment Terms and Billing
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                <strong className='text-p1'>6.1 Pricing:</strong> Prices for our
                services are subject to change with 30 days' notice. Current
                pricing is displayed on our website and is exclusive of
                applicable taxes unless otherwise stated.
              </p>
              <p>
                <strong className='text-p1'>6.2 Payment Processing:</strong> We
                use secure third-party payment processors. You agree to provide
                accurate payment information and authorize us to charge your
                selected payment method.
              </p>
              <p>
                <strong className='text-p1'>6.3 Refunds:</strong> Refund
                requests must be submitted within 30 days of purchase and are
                subject to our refund policy. Custom development work and
                consulting services are non-refundable after work has commenced.
              </p>
              <p>
                <strong className='text-p1'>6.4 Late Payments:</strong> Failure
                to make timely payments may result in suspension of services. A
                late fee of 1.5% per month (or the maximum allowed by law) may
                be applied to overdue balances.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              7. Privacy and Data Protection
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                Your privacy is important to us. Our collection, use, and
                protection of your personal information are governed by our
                Privacy Policy, which is incorporated into these Terms of Use by
                reference.
              </p>
              <p>
                We comply with applicable data protection laws, including the
                California Consumer Privacy Act (CCPA) and other state and
                federal regulations. You have rights regarding your personal
                data, including access, correction, and deletion requests.
              </p>
              <p>
                <Link
                  to='/privacy-policy'
                  className='text-p1 hover:underline font-medium'
                >
                  View our complete Privacy Policy →
                </Link>
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              8. Service Level and Availability
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                <strong className='text-p1'>8.1 Uptime:</strong> We strive to
                maintain 99.9% uptime for our services, excluding scheduled
                maintenance and circumstances beyond our control.
              </p>
              <p>
                <strong className='text-p1'>8.2 Maintenance:</strong> We may
                perform scheduled maintenance with advance notice. Emergency
                maintenance may be performed without notice when necessary.
              </p>
              <p>
                <strong className='text-p1'>8.3 Support:</strong> Customer
                support is available 24/7 via email and chat. Response times
                vary based on your service tier and issue severity.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              9. Disclaimers and Limitations of Liability
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                <strong className='text-p1'>
                  9.1 "AS IS" AND "AS AVAILABLE":
                </strong>{" "}
                Our services are provided "as is" and "as available" without
                warranties of any kind, either express or implied, including but
                not limited to warranties of merchantability, fitness for a
                particular purpose, or non-infringement.
              </p>
              <p>
                <strong className='text-p1'>
                  9.2 Limitation of Liability:
                </strong>{" "}
                To the maximum extent permitted by law, Innovatx Technologies,
                LLC shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including loss of profits,
                data, or business opportunities, arising from your use of our
                services.
              </p>
              <p>
                <strong className='text-p1'>9.3 Maximum Liability:</strong> Our
                total liability to you for all claims arising from these terms
                or your use of our services shall not exceed the amount you paid
                us in the 12 months preceding the claim, or $1,000, whichever is
                greater.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              10. Indemnification
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                You agree to indemnify, defend, and hold harmless Innovatx
                Technologies, LLC, its officers, directors, employees, agents,
                and affiliates from any claims, liabilities, damages, losses,
                costs, or expenses (including reasonable attorneys' fees)
                arising from:
              </p>
              <ul className='list-disc list-inside space-y-2 ml-4'>
                <li>Your use or misuse of our services</li>
                <li>Your violation of these Terms of Use</li>
                <li>Your violation of any third-party rights</li>
                <li>Your violation of applicable laws or regulations</li>
                <li>Content you submit through our services</li>
              </ul>
            </div>
          </section>

          {/* Section 11 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              11. Dispute Resolution and Governing Law
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                <strong className='text-p1'>11.1 Governing Law:</strong> These
                Terms of Use shall be governed by and construed in accordance
                with the laws of the State where Innovatx Technologies, LLC is
                registered, without regard to its conflict of law provisions.
              </p>
              <p>
                <strong className='text-p1'>11.2 Dispute Resolution:</strong>{" "}
                Any disputes arising from these terms or your use of our
                services shall first be resolved through good faith
                negotiations. If negotiations fail, disputes shall be resolved
                through binding arbitration in accordance with the rules of the
                American Arbitration Association.
              </p>
              <p>
                <strong className='text-p1'>11.3 Class Action Waiver:</strong>{" "}
                You agree to resolve disputes with us on an individual basis and
                waive your right to participate in class action lawsuits or
                class-wide arbitration.
              </p>
              <p>
                <strong className='text-p1'>11.4 Jurisdiction:</strong> You
                agree to submit to the personal jurisdiction of the state and
                federal courts located in our registered state for any actions
                not subject to arbitration.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              12. Third-Party Services and Links
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                Our services may contain links to third-party websites or
                integrate with third-party services. We are not responsible for
                the content, privacy policies, or practices of third-party
                websites or services. Your use of third-party services is at
                your own risk and subject to their terms and conditions.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              13. Modifications to Terms
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                We reserve the right to modify these Terms of Use at any time.
                Material changes will be notified through email or a prominent
                notice on our website at least 30 days before taking effect.
                Your continued use of our services after changes become
                effective constitutes acceptance of the modified terms.
              </p>
              <p>
                It is your responsibility to review these terms periodically.
                The "Last Updated" date at the top of this page indicates when
                these terms were last revised.
              </p>
            </div>
          </section>

          {/* Section 14 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              14. Termination
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                <strong className='text-p1'>14.1 Termination by You:</strong>{" "}
                You may terminate your account at any time by contacting our
                customer support. Termination does not relieve you of payment
                obligations for services already provided.
              </p>
              <p>
                <strong className='text-p1'>14.2 Termination by Us:</strong> We
                may suspend or terminate your access to our services
                immediately, without prior notice, for violations of these
                terms, fraudulent activity, or legal requirements.
              </p>
              <p>
                <strong className='text-p1'>14.3 Effect of Termination:</strong>{" "}
                Upon termination, your right to use our services ceases
                immediately. We may delete your account data in accordance with
                our data retention policies. Sections of these terms that by
                their nature should survive termination shall remain in effect.
              </p>
            </div>
          </section>

          {/* Section 15 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              15. Compliance with Laws
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                You agree to comply with all applicable local, state, federal,
                and international laws and regulations in your use of our
                services, including:
              </p>
              <ul className='list-disc list-inside space-y-2 ml-4'>
                <li>Export control laws and sanctions regulations</li>
                <li>Data protection and privacy laws (CCPA, GDPR, etc.)</li>
                <li>Anti-spam regulations (CAN-SPAM Act, TCPA)</li>
                <li>Accessibility standards (ADA, Section 508)</li>
                <li>Intellectual property laws</li>
                <li>Consumer protection laws</li>
              </ul>
            </div>
          </section>

          {/* Section 16 */}
          <section className='bg-s2 rounded-2xl p-6 sm:p-8 border border-s3'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              16. Miscellaneous Provisions
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                <strong className='text-p1'>16.1 Entire Agreement:</strong>{" "}
                These Terms of Use, together with our Privacy Policy, constitute
                the entire agreement between you and Innovatx Technologies, LLC
                regarding our services.
              </p>
              <p>
                <strong className='text-p1'>16.2 Severability:</strong> If any
                provision of these terms is found to be unenforceable or
                invalid, that provision shall be limited or eliminated to the
                minimum extent necessary, and the remaining provisions shall
                remain in full force and effect.
              </p>
              <p>
                <strong className='text-p1'>16.3 Waiver:</strong> No waiver of
                any term of these Terms of Use shall be deemed a further or
                continuing waiver of such term or any other term.
              </p>
              <p>
                <strong className='text-p1'>16.4 Assignment:</strong> You may
                not assign or transfer these terms or your rights hereunder
                without our prior written consent. We may assign these terms
                without restriction.
              </p>
              <p>
                <strong className='text-p1'>16.5 Force Majeure:</strong> We
                shall not be liable for any failure or delay in performance due
                to circumstances beyond our reasonable control, including acts
                of God, war, terrorism, natural disasters, or internet/network
                failures.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className='bg-gradient-to-br from-p1/10 to-p3/10 rounded-2xl p-6 sm:p-8 border border-p1/20'>
            <h2 className='text-2xl sm:text-3xl font-bold text-p1 mb-4'>
              17. Contact Information
            </h2>
            <div className='space-y-4 text-p4'>
              <p>
                If you have questions, concerns, or require clarification about
                these Terms of Use, please contact us:
              </p>
              <div className='space-y-2'>
                <p>
                  <strong className='text-p1'>
                    Innovatx Technologies, LLC
                  </strong>
                </p>
                <p>Email: legal@innovatx.com</p>
                <p>Email: support@innovatx.com</p>
                <p>
                  Phone: Available through our{" "}
                  <Link
                    to='/book-consultation'
                    className='text-p1 hover:underline font-medium'
                  >
                    consultation booking
                  </Link>
                </p>
              </div>
              <p className='mt-6'>
                For general inquiries, visit our{" "}
                <Link to='/' className='text-p1 hover:underline font-medium'>
                  contact page
                </Link>{" "}
                or reach out through our 24/7 customer support channels.
              </p>
            </div>
          </section>

          {/* Footer Notice */}
          <div className='bg-s3/50 rounded-2xl p-6 border border-s4'>
            <p className='text-p5 text-sm text-center'>
              By using Innovatx Technologies, LLC services, you acknowledge that
              you have read, understood, and agree to be bound by these Terms of
              Use and our Privacy Policy.
            </p>
            <div className='flex flex-wrap justify-center gap-4 mt-4'>
              <Link
                to='/privacy-policy'
                className='text-p1 hover:underline text-sm font-medium'
              >
                Privacy Policy
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

export default TermsOfUse;
