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
        <section className="px-6 pt-20 pb-16 sm:pt-32 sm:pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
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
        <section className="px-6 pb-20 sm:pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:grid-cols-3">
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

        {/* Example interaction - centered */}
        <section className="px-6 pb-20 sm:pb-28">
          <div className="mx-auto max-w-xl">
            <div className="rounded-2xl border border-border/50 bg-surface/30 p-6">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">You ask</div>
              <p className="mt-2 font-medium">
                "What did I decide about the hiring plan last month?"
              </p>
              <div className="mt-6 text-xs font-medium text-muted-foreground uppercase tracking-wide">Nexus Note answers</div>
              <p className="mt-2 text-muted-foreground leading-7">
                You decided to delay Q1 hiring by 6 weeks and revisit after the product launch.
              </p>
              <div className="mt-4">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Sources</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">
                    Mar 12 meeting
                  </span>
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">
                    Calendar note
                  </span>
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">
                    Follow-up email
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Definitions - wide 2 column */}
        <section className="border-y border-border/50 bg-surface/30 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-10 text-center">Definitions</div>
            <div className="grid gap-12 sm:grid-cols-2 sm:gap-20">
              <div className="text-center sm:text-right">
                <div className="text-2xl font-semibold text-accent">Nexus</div>
                <p className="mt-3 text-muted-foreground leading-7">
                  The central and most important point or place.
                </p>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-semibold text-accent">Note</div>
                <p className="mt-3 text-muted-foreground leading-7">
                  Any piece of information worth remembering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What a note is - full width header + 4 column grid */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                A note is not a document.
              </h2>
              <p className="mt-4 text-muted-foreground leading-7">
                In Nexus Note, a "note" is the atomic unit of meaning. Everything worth remembering becomes a note.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                <div key={item.type} className="rounded-xl border border-border/50 bg-surface/20 p-4">
                  <div className="text-sm font-medium">{item.type}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-2xl text-muted-foreground leading-7">
              Intelligence emerges from connection, not volume. The system links your notes across time and type—so when you ask a question, the answer draws from your meetings, your files, and your decisions.
            </p>
          </div>
        </section>

        {/* Not a note-taking app - centered statement */}
        <section className="border-y border-border/50 bg-surface/30 px-6 py-16 sm:py-24">
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
        <section className="px-6 py-20 sm:py-28" id="how">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-center">
              How it works
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

        {/* Trust section - 3 column grid */}
        <section className="border-y border-border/50 bg-surface/30 px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Trust by default
              </h2>
              <p className="mt-4 text-muted-foreground leading-7">
                A local-first system should feel like infrastructure: predictable, inspectable, and calm.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-border/50 bg-background/50 p-6 text-center">
                <div className="text-sm font-semibold">Local Models</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  All models run on your Mac or infrastructure you control.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background/50 p-6 text-center">
                <div className="text-sm font-semibold">Your Data</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Everything stays on your machine unless you configure otherwise.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background/50 p-6 text-center">
                <div className="text-sm font-semibold">Full Control</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Export, inspect, or delete anything at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for - left-aligned with accent */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
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
        <section className="border-t border-border/50 bg-surface/30 px-6 py-20 sm:py-28" id="waitlist">
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
