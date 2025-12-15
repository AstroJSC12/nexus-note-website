import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <section className="px-6 pt-20 pb-16 sm:pt-32 sm:pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Privacy by design
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Your data stays on your machine. That's not a feature—it's the foundation.
            </p>
          </div>
        </section>

        {/* Core Principles */}
        <section className="px-6 pb-20 sm:pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-border/50 bg-surface/30 p-6">
                <div className="text-lg font-semibold text-accent">Local-first</div>
                <p className="mt-3 text-muted-foreground leading-7">
                  All indexing, embedding, and reasoning happens on your Mac. Your notes never leave your machine unless you explicitly choose to sync them.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-surface/30 p-6">
                <div className="text-lg font-semibold text-accent">No cloud required</div>
                <p className="mt-3 text-muted-foreground leading-7">
                  Nexus Note works entirely offline. There's no account, no login, no server that knows what you're storing or searching.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-surface/30 p-6">
                <div className="text-lg font-semibold text-accent">You own it</div>
                <p className="mt-3 text-muted-foreground leading-7">
                  Your data is stored in open formats you can inspect, export, or delete at any time. It's your knowledge, under your control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What we collect */}
        <section className="border-y border-border/50 bg-surface/30 px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              What we collect
            </h2>
            
            <div className="mt-10 space-y-8">
              <div>
                <h3 className="font-semibold">From the app: Nothing</h3>
                <p className="mt-2 text-muted-foreground leading-7">
                  The Nexus Note application does not collect, transmit, or store any of your data on our servers. Your notes, embeddings, search history, and preferences all stay on your local machine.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold">From this website: Minimal analytics</h3>
                <p className="mt-2 text-muted-foreground leading-7">
                  This marketing website uses privacy-respecting analytics to understand traffic patterns. We collect:
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    Page views (no personally identifiable information)
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    Referrer source (how you found us)
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    Country-level location (no precise geolocation)
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    Device type and browser (for compatibility)
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold">From the waitlist: Your email</h3>
                <p className="mt-2 text-muted-foreground leading-7">
                  If you join our waitlist, we collect your email address and any optional information you provide. This is used solely to notify you about early access and product updates. We will never sell or share your email with third parties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              How local-first works
            </h2>
            
            <div className="mt-10 space-y-8">
              <div>
                <h3 className="font-semibold">Local storage</h3>
                <p className="mt-2 text-muted-foreground leading-7">
                  All your data is stored in a SQLite database and vector store on your Mac's file system. You can find it, back it up, or delete it just like any other file.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold">Local models</h3>
                <p className="mt-2 text-muted-foreground leading-7">
                  Embedding models and language models run directly on your machine using Apple Silicon optimization (Metal, MLX) or CPU inference. Your queries and notes never travel to external AI services.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold">No phone home</h3>
                <p className="mt-2 text-muted-foreground leading-7">
                  The app makes no network requests except when you explicitly enable optional features like update checking. There's no telemetry, no usage tracking, no "anonymous" data collection from the app itself.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold">Optional cloud features</h3>
                <p className="mt-2 text-muted-foreground leading-7">
                  Future versions may offer optional cloud features like encrypted backup or device sync. These will always be:
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    Opt-in (never on by default)
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    End-to-end encrypted (we can't read your data)
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">—</span>
                    Deletable (you can remove all cloud data anytime)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Export */}
        <section className="border-y border-border/50 bg-surface/30 px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Your data, your control
            </h2>
            
            <div className="mt-10 space-y-8">
              <div>
                <h3 className="font-semibold">Export everything</h3>
                <p className="mt-2 text-muted-foreground leading-7">
                  Export your entire knowledge base as JSON, Markdown, or a raw SQLite database at any time. Your data is never locked in.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold">Delete everything</h3>
                <p className="mt-2 text-muted-foreground leading-7">
                  Delete individual notes, entire sources, or your whole database. When you delete something, it's gone—no 30-day retention, no backups we keep "just in case."
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold">Inspect everything</h3>
                <p className="mt-2 text-muted-foreground leading-7">
                  Your database is a standard SQLite file. Open it with any SQLite browser to see exactly what's stored. No black boxes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Questions?
            </h2>
            <p className="mt-4 text-muted-foreground leading-7">
              If you have questions about our privacy practices or want to request deletion of any data we hold (like your waitlist email), contact us at{' '}
              <a href="mailto:privacy@nexusnote.ai" className="text-accent hover:underline">
                privacy@nexusnote.ai
              </a>
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
