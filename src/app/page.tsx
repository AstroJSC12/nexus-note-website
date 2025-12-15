import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { ButtonLink } from '@/components/site/button';
import { WaitlistForm } from '@/components/site/waitlist-form';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <section className="px-6 pt-20 pb-16 sm:pt-32 sm:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              A private intelligence layer over your digital life.
            </h1>
            <p className="mt-6 text-base leading-7 text-muted-foreground max-w-2xl mx-auto">
              Nexus Note is a Mac-native system that turns everything worth remembering into a unified, searchable memory – documents, tasks, calendars, email, meetings, and the patterns you'd want to keep. It indexes locally, reasons locally, and only acts with explicit boundaries.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <ButtonLink href="#waitlist">Request early access</ButtonLink>
            </div>
          </div>
        </section>

        {/* Example interaction */}
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

        {/* Definitions */}
        <section className="border-y border-border/50 bg-surface/30 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-10">Definitions</div>
            <div className="grid gap-12 sm:grid-cols-2 sm:gap-16">
              <div>
                <div className="text-lg font-semibold text-accent">Nexus</div>
                <p className="mt-2 text-muted-foreground leading-7">
                  The central and most important point or place.
                </p>
              </div>
              <div>
                <div className="text-lg font-semibold text-accent">Note</div>
                <p className="mt-2 text-muted-foreground leading-7">
                  Any piece of information worth remembering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What a note is */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              A note is not a document.
            </h2>
            <p className="mt-4 text-muted-foreground leading-7">
              In Nexus Note, a "note" is the atomic unit of meaning. It can be a document, a calendar event, a task, an email, a transcript, a remembered preference, or a pattern inferred from your behavior. Everything worth remembering becomes a note.
            </p>
            <p className="mt-4 text-muted-foreground leading-7">
              Intelligence emerges from connection, not volume. The system links your notes across time and type—so when you ask a question, the answer draws from your meetings, your files, and your decisions, not just keyword matches.
            </p>
          </div>
        </section>

        {/* Not a note-taking app */}
        <section className="border-y border-border/50 bg-surface/30 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Not a note-taking app.
            </h2>
            <p className="mt-4 text-muted-foreground leading-7">
              Nexus Note is not a new place to write. It's not a cloud service. It's not a chatbot that only reacts to prompts.
            </p>
            <p className="mt-4 text-muted-foreground leading-7">
              It's a local, private RAG system over your personal knowledge—an orchestration layer that connects documents, time, tasks, and media into a protected intelligence hub. The best AI is invisible until it matters.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="px-6 py-20 sm:py-28" id="how">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              How it works
            </h2>
            <div className="mt-10 space-y-8">
              <div>
                <h3 className="font-semibold">Ingest</h3>
                <p className="mt-2 text-muted-foreground leading-7">
                  Notes flow in from the sources you already use—docs, calendars, tasks, mail, audio, video, and more.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Index locally</h3>
                <p className="mt-2 text-muted-foreground leading-7">
                  Embeddings and search indexes are built entirely on your Mac. Nothing leaves your machine.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Retrieve and reason</h3>
                <p className="mt-2 text-muted-foreground leading-7">
                  A local model answers questions grounded in your notes—with citations, confidence cues, and traceable sources.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Act with consent</h3>
                <p className="mt-2 text-muted-foreground leading-7">
                  Draft updates, schedule meetings, create tasks, plan sequences—always with explicit confirmation before anything changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust section */}
        <section className="border-y border-border/50 bg-surface/30 px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Trust by default
            </h2>
            <p className="mt-4 text-muted-foreground leading-7">
              A local-first system should feel like infrastructure: predictable, inspectable, and calm. Your data is portable, under your control, and never a black box.
            </p>
            <ul className="mt-8 space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent">—</span>
                All models run locally or on infrastructure you control
              </li>
              <li className="flex gap-3">
                <span className="text-accent">—</span>
                All data stays on your machine unless you configure otherwise
              </li>
              <li className="flex gap-3">
                <span className="text-accent">—</span>
                Export, inspect, or delete anything at any time
              </li>
            </ul>
          </div>
        </section>

        {/* Who it's for */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Built for people who think for a living
            </h2>
            <p className="mt-4 text-muted-foreground leading-7">
              Technical professionals, founders, CTOs, and researchers with large personal knowledge stores—files, notes, calendars, tasks—who understand AI but don't want their private data in the cloud.
            </p>
            <p className="mt-4 text-muted-foreground leading-7">
              For users who want AI to <em>do things</em>, not just answer questions. Who value trust, control, and leverage over novelty.
            </p>
          </div>
        </section>

        {/* Waitlist */}
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
