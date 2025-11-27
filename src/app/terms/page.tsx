import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - ACube 2.0',
  description: 'Terms of Service for ACube Technologies',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <div className="container mx-auto px-6 py-32 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-zinc-400 mb-8">Last updated: November 28, 2025</p>

        <div className="space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using ACube Technologies&apos; services (&ldquo;Services&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you disagree with any part of these terms, you may not access our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
            <p>
              ACube Technologies provides a platform connecting businesses with vetted remote talent across various disciplines including software development, design, data science, and other professional services. Our Services include talent matching, vetting, and facilitating employment relationships.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
            <p className="mb-3">When you create an account with us, you must:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate, complete, and current information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Be responsible for all activities under your account</li>
              <li>Not transfer or share your account with others</li>
            </ul>
            <p className="mt-3">
              We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. User Obligations</h2>
            <h3 className="text-xl font-semibold text-white mb-2 mt-4">For Clients (Employers):</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate job descriptions and requirements</li>
              <li>Conduct interviews and hiring processes professionally</li>
              <li>Honor agreed-upon compensation and contract terms</li>
              <li>Treat talent with respect and professionalism</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2 mt-4">For Talent (Service Providers):</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate information about skills and experience</li>
              <li>Maintain professional standards in all engagements</li>
              <li>Deliver work according to agreed timelines and quality standards</li>
              <li>Communicate proactively with clients</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
            <p className="mb-3">Payment terms vary based on the service model:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Clients agree to pay fees as outlined in their service agreement</li>
              <li>Talent receives compensation according to individual contracts</li>
              <li>ACube Technologies may charge platform fees or commissions as specified</li>
              <li>All fees are exclusive of applicable taxes unless stated otherwise</li>
              <li>Payment disputes must be raised within 30 days of the invoice date</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property Rights</h2>
            <p className="mb-3">
              The Services and all content, features, and functionality are owned by ACube Technologies and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mb-3">Work Product:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Intellectual property rights for work created by talent typically belong to the client, as specified in individual contracts</li>
              <li>Talent retains rights to pre-existing materials and general knowledge</li>
              <li>Specific IP arrangements should be documented in service agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Prohibited Activities</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malicious code or interfere with our Services</li>
              <li>Engage in fraudulent, deceptive, or misleading practices</li>
              <li>Circumvent our platform to avoid fees</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Scrape, copy, or misuse our platform content</li>
              <li>Create multiple accounts to manipulate our systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Confidentiality</h2>
            <p>
              Users may have access to confidential information during their use of our Services. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Keep confidential information secure and not disclose it to third parties</li>
              <li>Use confidential information only for authorized purposes</li>
              <li>Return or destroy confidential information upon request</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimers and Limitations of Liability</h2>
            <p className="mb-3">
              Our Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied.
            </p>
            <p className="mb-3">
              To the maximum extent permitted by law, ACube Technologies shall not be liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Actions or omissions of talent or clients</li>
              <li>Quality of work performed by talent</li>
            </ul>
            <p className="mt-3">
              Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless ACube Technologies and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our Services or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Termination</h2>
            <p className="mb-3">
              We may terminate or suspend your access to our Services immediately, without prior notice, for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Request by law enforcement or government agencies</li>
              <li>Extended periods of inactivity</li>
            </ul>
            <p className="mt-3">
              Upon termination, your right to use the Services will immediately cease. Provisions that by their nature should survive termination shall survive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Dispute Resolution</h2>
            <p className="mb-3">
              In the event of any dispute arising from these Terms or our Services:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Parties agree to first attempt resolution through good-faith negotiation</li>
              <li>If negotiation fails, disputes may be resolved through binding arbitration</li>
              <li>Arbitration shall be conducted in accordance with applicable arbitration rules</li>
              <li>Each party bears its own costs unless otherwise determined by the arbitrator</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any legal action must be brought in the appropriate courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of material changes via email or through our Services. Continued use of our Services after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">16. Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and ACube Technologies regarding our Services and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">17. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-white/5 border border-white/10 rounded-xl">
              <p className="font-semibold text-white">ACube Technologies</p>
              <p>Email: team@acube-tech.com</p>
              <p className="mt-2">
                <Link href="https://calendly.com/absaarmalik15/30min" target="_blank" className="text-cyan-400 hover:text-cyan-300 underline">
                  Schedule a call with us
                </Link>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
