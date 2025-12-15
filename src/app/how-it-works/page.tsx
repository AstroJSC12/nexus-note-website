import type { Metadata } from 'next';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { ButtonLink } from '@/components/site/button';

export const metadata: Metadata = {
  title: 'How It Works - Nexus Note',
  description: 'Learn how Nexus Note ingests, indexes, reasons, and acts on your personal knowledge—entirely on your Mac with local AI.',
  openGraph: {
    title: 'How It Works - Nexus Note',
    description: 'Learn how Nexus Note ingests, indexes, reasons, and acts on your personal knowledge—entirely on your Mac with local AI.',
  },
};

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <section className="px-6 pt-20 pb-16 sm:pt-32 sm:pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              How Nexus Note works
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              A local intelligence system that ingests, indexes, reasons, and acts—entirely on your Mac.
            </p>
          </div>
        </section>

        {/* The Core Idea */}
        <section className="px-6 pb-20 sm:pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Everything becomes a note
                </h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  In Nexus Note, a "note" isn't just a text document. It's the atomic unit of meaning—any piece of information worth remembering.
                </p>
                <p className="mt-4 text-muted-foreground leading-7">
                  This reframing is fundamental. When everything important becomes a note, your entire digital life becomes queryable, connectable, and actionable.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { type: 'Documents', desc: 'Files, PDFs, Markdown, rich text' },
                  { type: 'Calendar events', desc: 'Meetings, deadlines, reminders' },
                  { type: 'Tasks', desc: 'To-dos, projects, commitments' },
                  { type: 'Email', desc: 'Messages, threads, attachments' },
                  { type: 'Transcripts', desc: 'Audio and video recordings' },
                  { type: 'Preferences', desc: 'Choices, settings, decisions' },
                  { type: 'Patterns', desc: 'Inferred routines and behaviors' },
                  { type: 'Signals', desc: 'Context you want to remember' },
                ].map((item) => (
                  <div key={item.type} className="rounded-xl border border-border/50 bg-surface/20 p-4">
                    <div className="text-sm font-medium">{item.type}</div>
                    <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Pipeline */}
        <section className="border-y border-border/50 bg-surface/30 px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                The pipeline
              </h2>
              <p className="mt-4 text-muted-foreground leading-7">
                Four stages transform raw information into usable intelligence—all running locally on your machine.
              </p>
            </div>

            <div className="mt-16 space-y-16">
              {/* Stage 1: Ingest */}
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-4">
                  <div className="text-5xl font-light text-accent/40">01</div>
                  <h3 className="mt-4 text-xl font-semibold">Ingest</h3>
                  <p className="mt-3 text-muted-foreground leading-7">
                    Notes flow in from the sources you already use. No migration required—Nexus Note connects to your existing tools.
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-border/50 bg-background/50 p-5">
                      <div className="text-sm font-medium">File system</div>
                      <p className="mt-2 text-sm text-muted-foreground">Watch folders for documents, PDFs, images, and any file type you choose.</p>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-background/50 p-5">
                      <div className="text-sm font-medium">Calendar</div>
                      <p className="mt-2 text-sm text-muted-foreground">Sync events, meetings, and scheduling context from your calendar apps.</p>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-background/50 p-5">
                      <div className="text-sm font-medium">Email</div>
                      <p className="mt-2 text-sm text-muted-foreground">Index messages, threads, and attachments with full-text search.</p>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-background/50 p-5">
                      <div className="text-sm font-medium">Audio & Video</div>
                      <p className="mt-2 text-sm text-muted-foreground">Transcribe recordings and meeting audio into searchable notes.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 2: Index */}
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-4">
                  <div className="text-5xl font-light text-accent/40">02</div>
                  <h3 className="mt-4 text-xl font-semibold">Index locally</h3>
                  <p className="mt-3 text-muted-foreground leading-7">
                    Every note is processed into a unified representation, then indexed for both semantic and keyword search.
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-border/50 bg-background/50 p-5">
                      <div className="text-sm font-medium">Normalization</div>
                      <p className="mt-2 text-sm text-muted-foreground">All formats are converted to a unified internal representation so the system can reason across them.</p>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-background/50 p-5">
                      <div className="text-sm font-medium">Embeddings</div>
                      <p className="mt-2 text-sm text-muted-foreground">Local embedding models create vector representations for semantic similarity search.</p>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-background/50 p-5">
                      <div className="text-sm font-medium">Full-text index</div>
                      <p className="mt-2 text-sm text-muted-foreground">Fast keyword search with fuzzy matching, filters, and boolean operators.</p>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-background/50 p-5">
                      <div className="text-sm font-medium">Graph connections</div>
                      <p className="mt-2 text-sm text-muted-foreground">Notes are linked by time, topic, project, and inferred relationships.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 3: Reason */}
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-4">
                  <div className="text-5xl font-light text-accent/40">03</div>
                  <h3 className="mt-4 text-xl font-semibold">Retrieve and reason</h3>
                  <p className="mt-3 text-muted-foreground leading-7">
                    When you ask a question, the system retrieves relevant notes and uses a local LLM to synthesize an answer.
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-border/50 bg-background/50 p-5">
                      <div className="text-sm font-medium">RAG retrieval</div>
                      <p className="mt-2 text-sm text-muted-foreground">Combines semantic search with keyword matching to find the most relevant notes.</p>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-background/50 p-5">
                      <div className="text-sm font-medium">Local LLM</div>
                      <p className="mt-2 text-sm text-muted-foreground">A model running on your Mac synthesizes answers from retrieved context.</p>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-background/50 p-5">
                      <div className="text-sm font-medium">Citations</div>
                      <p className="mt-2 text-sm text-muted-foreground">Every answer includes source links so you can verify and explore further.</p>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-background/50 p-5">
                      <div className="text-sm font-medium">Confidence cues</div>
                      <p className="mt-2 text-sm text-muted-foreground">The system signals when it's uncertain or when sources may be outdated.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 4: Act */}
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-4">
                  <div className="text-5xl font-light text-accent/40">04</div>
                  <h3 className="mt-4 text-xl font-semibold">Act with consent</h3>
                  <p className="mt-3 text-muted-foreground leading-7">
                    Beyond answering questions, Nexus Note can take action—but only with explicit confirmation.
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-border/50 bg-background/50 p-5">
                      <div className="text-sm font-medium">Draft content</div>
                      <p className="mt-2 text-sm text-muted-foreground">Generate follow-up emails, meeting summaries, or document drafts based on your notes.</p>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-background/50 p-5">
                      <div className="text-sm font-medium">Create tasks</div>
                      <p className="mt-2 text-sm text-muted-foreground">Extract action items from meetings and add them to your task system.</p>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-background/50 p-5">
                      <div className="text-sm font-medium">Schedule events</div>
                      <p className="mt-2 text-sm text-muted-foreground">Propose calendar events based on commitments mentioned in notes.</p>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-background/50 p-5">
                      <div className="text-sm font-medium">Update notes</div>
                      <p className="mt-2 text-sm text-muted-foreground">Suggest edits, link related notes, or flag outdated information.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Principle */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Intelligence from connection
            </h2>
            <p className="mt-6 text-muted-foreground leading-7">
              The power of Nexus Note isn't in storing more—it's in connecting what you already have. When your calendar knows about your documents, and your emails know about your tasks, questions that used to require hours of digging become instant.
            </p>
            <p className="mt-4 text-sm text-muted-foreground/70">
              The best AI is invisible until it matters.
            </p>
          </div>
        </section>

        {/* Technical Details */}
        <section className="border-y border-border/50 bg-surface/30 px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Under the hood
              </h2>
              <p className="mt-4 text-muted-foreground leading-7">
                For those who want to know what's running on their machine.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-border/50 bg-background/50 p-6">
                <div className="text-sm font-semibold">Local models</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Embedding and language models run entirely on your Mac using optimized inference (Metal, MLX, or llama.cpp).
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background/50 p-6">
                <div className="text-sm font-semibold">Vector database</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  A local vector store enables fast semantic search across millions of embeddings.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background/50 p-6">
                <div className="text-sm font-semibold">SQLite backbone</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  All metadata, relationships, and indexes stored in a portable SQLite database you can inspect anytime.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background/50 p-6">
                <div className="text-sm font-semibold">Native Swift app</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Built for macOS with native APIs for file system access, calendar integration, and system services.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background/50 p-6">
                <div className="text-sm font-semibold">No cloud required</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Everything runs offline. Optional cloud features (backup, sync) are explicit and user-controlled.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background/50 p-6">
                <div className="text-sm font-semibold">Open formats</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your data is stored in standard formats. Export everything as JSON, Markdown, or SQLite at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to try it?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join the waitlist for early access.
            </p>
            <div className="mt-8">
              <ButtonLink href="/#waitlist">Request early access</ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
