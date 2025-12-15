import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <section className="px-6 pt-20 pb-16 sm:pt-32 sm:pb-20">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-6 text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 pb-20 sm:pb-28">
          <div className="mx-auto max-w-3xl prose prose-neutral dark:prose-invert">
            
            <div className="space-y-12">
              {/* Agreement */}
              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">1. Agreement to Terms</h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  By accessing or using Nexus Note (the "Software") or this website (nexusnote.ai), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Software or website.
                </p>
                <p className="mt-4 text-muted-foreground leading-7">
                  We reserve the right to update these terms at any time. Continued use of the Software or website after changes constitutes acceptance of the new terms.
                </p>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">2. Description of Service</h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  Nexus Note is a local-first personal knowledge management application for macOS. The Software runs entirely on your computer and processes your data locally. We do not operate cloud servers that store or process your personal data.
                </p>
                <p className="mt-4 text-muted-foreground leading-7">
                  The website (nexusnote.ai) provides information about the Software, collects waitlist signups, and may offer account management features in the future.
                </p>
              </div>

              {/* License */}
              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">3. License Grant</h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to download, install, and use the Software on devices you own or control, for personal or internal business purposes.
                </p>
                <p className="mt-4 text-muted-foreground leading-7">
                  You may not:
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    Copy, modify, or distribute the Software except as expressly permitted
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    Reverse engineer, decompile, or disassemble the Software
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    Remove or alter any proprietary notices or labels
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    Use the Software to develop competing products
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    Sublicense, rent, lease, or lend the Software to third parties
                  </li>
                </ul>
              </div>

              {/* Your Data */}
              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">4. Your Data</h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  You retain full ownership of all data you create, import, or process using the Software. We do not claim any rights to your content.
                </p>
                <p className="mt-4 text-muted-foreground leading-7">
                  Because Nexus Note is a local-first application, your data is stored on your device. We do not have access to your data unless you explicitly choose to use optional cloud features (if available). You are responsible for backing up your data.
                </p>
                <p className="mt-4 text-muted-foreground leading-7">
                  For information about how we handle data, please see our <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.
                </p>
              </div>

              {/* Acceptable Use */}
              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">5. Acceptable Use</h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  You agree to use the Software and website only for lawful purposes. You may not use the Software or website to:
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    Violate any applicable laws or regulations
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    Infringe on the intellectual property rights of others
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    Transmit malware, viruses, or other harmful code
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    Interfere with or disrupt the integrity of our systems
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    Attempt to gain unauthorized access to any systems or networks
                  </li>
                </ul>
              </div>

              {/* Payment */}
              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">6. Payment and Refunds</h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  Pricing for the Software will be announced before general availability. If you purchase the Software:
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    All fees are stated in USD unless otherwise specified
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    Prices may change with notice for new purchases
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    Refund policies will be clearly stated at time of purchase
                  </li>
                </ul>
              </div>

              {/* Disclaimers */}
              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">7. Disclaimers</h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  THE SOFTWARE AND WEBSITE ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="mt-4 text-muted-foreground leading-7">
                  We do not warrant that the Software will be error-free, uninterrupted, or free of harmful components. You use the Software at your own risk.
                </p>
                <p className="mt-4 text-muted-foreground leading-7">
                  The Software uses AI models that may produce inaccurate results. You are responsible for verifying any information or actions suggested by the Software before relying on them.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">8. Limitation of Liability</h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, PROFITS, OR BUSINESS OPPORTUNITIES.
                </p>
                <p className="mt-4 text-muted-foreground leading-7">
                  Our total liability for any claims arising from these Terms or your use of the Software shall not exceed the amount you paid for the Software in the twelve months preceding the claim.
                </p>
              </div>

              {/* Indemnification */}
              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">9. Indemnification</h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  You agree to indemnify and hold harmless Nexus Note, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising from your use of the Software, your violation of these Terms, or your violation of any rights of a third party.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">10. Termination</h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  We may terminate or suspend your access to the Software or website at any time, with or without cause, with or without notice. Upon termination, your license to use the Software ends immediately.
                </p>
                <p className="mt-4 text-muted-foreground leading-7">
                  Because the Software runs locally, termination does not affect your existing data. You may export your data at any time before or after termination.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">11. Governing Law</h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved in the courts of competent jurisdiction.
                </p>
              </div>

              {/* Severability */}
              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">12. Severability</h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </div>

              {/* Entire Agreement */}
              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">13. Entire Agreement</h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and Nexus Note regarding your use of the Software and website.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">14. Contact</h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  If you have questions about these Terms, please contact us at{' '}
                  <a href="mailto:legal@nexusnote.ai" className="text-accent hover:underline">
                    legal@nexusnote.ai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
