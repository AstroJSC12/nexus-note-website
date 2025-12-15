import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { ButtonLink } from '@/components/site/button';
import { WaitlistForm } from '@/components/site/waitlist-form';
import { FadeIn } from '@/components/site/fade-in';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <section className="px-4 sm:px-6 pt-16 pb-12 sm:pt-32 sm:pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                A private intelligence layer over your digital life.
              </h1>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                Mac-native. Local-first. Entirely yours.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="mt-10 flex justify-center gap-4">
                <ButtonLink href="#waitlist">Request early access</ButtonLink>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* What it does - 3 column grid */}
        <section className="px-4 sm:px-6 pb-16 sm:pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
              <FadeIn delay={0}>
              <div className="rounded-2xl border border-border/50 bg-surface/30 p-6">
                <div className="text-sm font-medium text-accent">Unified Memory</div>
                <p className="mt-3 text-sm text-muted-foreground leading-6">
                  Documents, calendars, email, meetings, tasks, and patterns—all searchable in one place.
                </p>
              </div>
              </FadeIn>
              <FadeIn delay={100}>
              <div className="rounded-2xl border border-border/50 bg-surface/30 p-6">
                <div className="text-sm font-medium text-accent">Local Intelligence</div>
                <p className="mt-3 text-sm text-muted-foreground leading-6">
                  Indexes and reasons entirely on your Mac. Nothing leaves your machine.
                </p>
              </div>
              </FadeIn>
              <FadeIn delay={200}>
              <div className="rounded-2xl border border-border/50 bg-surface/30 p-6">
                <div className="text-sm font-medium text-accent">Explicit Boundaries</div>
                <p className="mt-3 text-sm text-muted-foreground leading-6">
                  Acts only with your consent. Every action requires confirmation.
                </p>
              </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Example interaction - split layout */}
        <section className="px-4 sm:px-6 pb-16 sm:pb-28">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {/* Question */}
              <FadeIn>
              <div className="rounded-2xl border border-border/50 bg-surface/30 p-6">
                <div className="text-xs font-medium text-accent uppercase tracking-wide">You ask</div>
                <p className="mt-4 text-xl font-medium leading-snug">
                  "What did I decide about the hiring plan last month?"
                </p>
              </div>
              </FadeIn>
              {/* Answer */}
              <FadeIn delay={150}>
              <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
                <div className="text-xs font-medium text-accent uppercase tracking-wide">Nexus Note</div>
                <p className="mt-4 text-foreground leading-7">
                  You decided to delay Q1 hiring by 6 weeks and revisit after the product launch.
                </p>
                <div className="mt-6 pt-4 border-t border-accent/20">
                  <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mb-2">Sources</div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">
                      Mar 12 meeting
                    </span>
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">
                      Calendar note
                    </span>
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">
                      Follow-up email
                    </span>
                  </div>
                </div>
              </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Definitions - asymmetric layout */}
        <section className="border-y border-border/50 bg-surface/30 px-4 sm:px-6 py-16 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 sm:gap-16 sm:grid-cols-2 lg:gap-24">
              <FadeIn>
              <div>
                <div className="text-4xl sm:text-5xl font-semibold text-accent">Nexus</div>
                <p className="mt-4 text-lg text-muted-foreground leading-8">
                  The central and most important point or place.
                </p>
              </div>
              </FadeIn>
              <FadeIn delay={200}>
              <div className="sm:pt-8 lg:pt-12">
                <div className="text-4xl sm:text-5xl font-semibold text-accent">Note</div>
                <p className="mt-4 text-lg text-muted-foreground leading-8">
                  Any piece of information worth remembering.
                </p>
              </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* What a note is - left/right layout */}
        <section className="px-4 sm:px-6 py-16 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  A note is not a document.
                </h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  In Nexus Note, a "note" is the atomic unit of meaning. Everything worth remembering becomes a note.
                </p>
                <p className="mt-6 text-muted-foreground leading-7">
                  Intelligence emerges from connection, not volume. The system links your notes across time and type.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { type: 'Documents', desc: 'Files, PDFs, and written notes' },
                    { type: 'Events', desc: 'Calendar entries and meetings' },
                    { type: 'Tasks', desc: 'To-dos and commitments' },
                    { type: 'Email', desc: 'Messages and threads' },
                    { type: 'Transcripts', desc: 'Audio and video recordings' },
                    { type: 'Preferences', desc: 'Remembered choices and settings' },
                    { type: 'Patterns', desc: 'Inferred behaviors and routines' },
                    { type: 'Signals', desc: 'Things you want to remember later' },
                  ].map((item) => (
                    <div key={item.type} className="rounded-xl border border-border/50 bg-surface/20 p-4 hover:bg-surface/40 transition-colors">
                      <div className="text-sm font-medium">{item.type}</div>
                      <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Not a note-taking app - centered statement */}
        <section className="border-y border-border/50 bg-surface/30 px-4 sm:px-6 py-12 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Not a note-taking app.
            </h2>
            <p className="mt-6 text-muted-foreground leading-7">
              It's a local, private RAG system over your personal knowledge—an orchestration layer that connects documents, time, tasks, and media into a protected intelligence hub.
            </p>
            <p className="mt-4 text-sm text-muted-foreground/70">
              The best AI is invisible until it matters.
            </p>
          </div>
        </section>

        {/* How it works - 4 column grid */}
        <section className="px-4 sm:px-6 py-16 sm:py-28" id="how">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-center">
              How it works
            </h2>
            <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-light text-accent/60">1</div>
                <h3 className="mt-3 font-semibold">Ingest</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-6">
                  Notes flow in from docs, calendars, tasks, mail, audio, video, and more.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-accent/60">2</div>
                <h3 className="mt-3 font-semibold">Index</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-6">
                  Embeddings and search indexes are built entirely on your Mac.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-accent/60">3</div>
                <h3 className="mt-3 font-semibold">Reason</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-6">
                  A local model answers questions with citations and traceable sources.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-accent/60">4</div>
                <h3 className="mt-3 font-semibold">Act</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-6">
                  Draft, schedule, create—always with explicit confirmation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust section - left/right alternating */}
        <section className="border-y border-border/50 bg-surface/30 px-4 sm:px-6 py-16 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Local Models</div>
                      <p className="mt-1 text-sm text-muted-foreground">All models run on your Mac or infrastructure you control.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Your Data</div>
                      <p className="mt-1 text-sm text-muted-foreground">Everything stays on your machine unless you configure otherwise.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Full Control</div>
                      <p className="mt-1 text-sm text-muted-foreground">Export, inspect, or delete anything at any time.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Trust by default
                </h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  A local-first system should feel like infrastructure: predictable, inspectable, and calm. Your data is portable, under your control, and never a black box.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for - left-aligned with accent */}
        <section className="px-4 sm:px-6 py-16 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Built for people who think for a living
                </h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  Technical professionals, founders, CTOs, and researchers with large personal knowledge stores—who understand AI but don't want their private data in the cloud.
                </p>
                <p className="mt-4 text-muted-foreground leading-7">
                  For users who want AI to <em>do things</em>, not just answer questions.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-accent/5 border border-accent/20 p-4">
                  <div className="text-sm font-medium text-accent">Founders</div>
                </div>
                <div className="rounded-xl bg-accent/5 border border-accent/20 p-4">
                  <div className="text-sm font-medium text-accent">CTOs</div>
                </div>
                <div className="rounded-xl bg-accent/5 border border-accent/20 p-4">
                  <div className="text-sm font-medium text-accent">Researchers</div>
                </div>
                <div className="rounded-xl bg-accent/5 border border-accent/20 p-4">
                  <div className="text-sm font-medium text-accent">Power Users</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist - centered */}
        <section className="border-t border-border/50 bg-surface/30 px-4 sm:px-6 py-16 sm:py-28" id="waitlist">
          <div className="mx-auto max-w-md text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Join the waitlist
            </h2>
            <p className="mt-4 text-muted-foreground">
              Early access for those who care about privacy, ownership, and local-first systems.
            </p>
            <div className="mt-8">
              <WaitlistForm source="home" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
