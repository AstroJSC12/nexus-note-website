import type { Metadata } from 'next';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { ButtonLink } from '@/components/site/button';

export const metadata: Metadata = {
  title: 'FAQ - Nexus Note',
  description: 'Frequently asked questions about Nexus Note—privacy, security, technical details, pricing, and philosophy.',
  openGraph: {
    title: 'FAQ - Nexus Note',
    description: 'Frequently asked questions about Nexus Note—privacy, security, technical details, pricing, and philosophy.',
  },
};

function FAQ({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border/50 py-8 first:pt-0 last:border-0">
      <h3 className="font-semibold text-lg">{question}</h3>
      <div className="mt-3 text-muted-foreground leading-7">{children}</div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <section className="px-6 pt-20 pb-16 sm:pt-32 sm:pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Frequently asked questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Everything you want to know about Nexus Note.
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="px-6 pb-20 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            
            {/* General */}
            <div className="mb-16">
              <h2 className="text-sm font-medium text-accent uppercase tracking-wide mb-8">General</h2>
              
              <FAQ question="What is Nexus Note?">
                <p>
                  Nexus Note is a Mac-native, local-first personal AI system. It ingests your documents, calendar, email, tasks, meeting recordings, and other information sources, indexes them locally, and lets you query and act on them using a local language model.
                </p>
                <p className="mt-3">
                  Think of it as a private intelligence layer over your entire digital life—entirely on your machine, under your control.
                </p>
              </FAQ>
              
              <FAQ question="Is it a note-taking app?">
                <p>
                  No. Nexus Note is not a new place to write. It's a system that sits above the tools you already use—connecting documents, time, tasks, and media into a unified, queryable knowledge base.
                </p>
                <p className="mt-3">
                  You keep using whatever note-taking app, calendar, or email client you prefer. Nexus Note ingests from them and makes the collective knowledge searchable and actionable.
                </p>
              </FAQ>
              
              <FAQ question="What makes it different from ChatGPT or other AI assistants?">
                <p>
                  Three things:
                </p>
                <ul className="mt-3 space-y-2">
                  <li><strong>Local:</strong> Everything runs on your Mac. Your data never goes to OpenAI, Anthropic, or any other cloud service.</li>
                  <li><strong>Grounded:</strong> Answers come from your actual notes with citations. No hallucinations about things you never wrote.</li>
                  <li><strong>Persistent:</strong> Your knowledge base grows over time. It's not a blank-slate conversation—it's an intelligence layer that knows your context.</li>
                </ul>
              </FAQ>
              
              <FAQ question="When will it be available?">
                <p>
                  We're currently in development with early access planned for 2025. Join the waitlist to be notified when spots open up.
                </p>
              </FAQ>
            </div>

            {/* Privacy & Security */}
            <div className="mb-16">
              <h2 className="text-sm font-medium text-accent uppercase tracking-wide mb-8">Privacy & Security</h2>
              
              <FAQ question="Is my data really private?">
                <p>
                  Yes. All processing happens locally on your Mac. Your notes, embeddings, search queries, and AI conversations never leave your machine. There's no cloud sync, no telemetry, no "anonymous" data collection.
                </p>
                <p className="mt-3">
                  We can't see your data because we never have access to it.
                </p>
              </FAQ>
              
              <FAQ question="Does it require an internet connection?">
                <p>
                  No. Nexus Note works entirely offline. The AI models run locally, and all your data is stored on your machine. You can use it on a plane, in a secure facility, or anywhere else without connectivity.
                </p>
              </FAQ>
              
              <FAQ question="Where is my data stored?">
                <p>
                  Everything is stored in a local SQLite database and vector store in your Mac's file system. You can find the files, back them up, move them, or delete them just like any other files on your computer.
                </p>
              </FAQ>
              
              <FAQ question="Can I export my data?">
                <p>
                  Yes. You can export your entire knowledge base as JSON, Markdown, or a raw SQLite database at any time. Your data is never locked in.
                </p>
              </FAQ>
            </div>

            {/* Technical */}
            <div className="mb-16">
              <h2 className="text-sm font-medium text-accent uppercase tracking-wide mb-8">Technical</h2>
              
              <FAQ question="What are the system requirements?">
                <p>
                  Nexus Note requires a Mac with Apple Silicon (M1 or later) for optimal performance. We leverage Metal and MLX for fast local inference. Intel Macs may be supported with reduced performance.
                </p>
                <p className="mt-3">
                  Minimum 16GB RAM recommended. Storage requirements depend on your knowledge base size—expect roughly 1-2GB per 100,000 notes indexed.
                </p>
              </FAQ>
              
              <FAQ question="What AI models does it use?">
                <p>
                  Nexus Note uses a combination of local models:
                </p>
                <ul className="mt-3 space-y-2">
                  <li><strong>Embedding models:</strong> For semantic search and similarity matching</li>
                  <li><strong>Language models:</strong> For answering questions, summarization, and drafting</li>
                </ul>
                <p className="mt-3">
                  All models run locally using optimized inference (Metal, MLX, or llama.cpp). You can choose from a selection of models based on your hardware and quality/speed preferences.
                </p>
              </FAQ>
              
              <FAQ question="What sources can it ingest?">
                <p>
                  Initial release will support:
                </p>
                <ul className="mt-3 space-y-1">
                  <li>• Local files (Markdown, plain text, PDF, common document formats)</li>
                  <li>• Apple Calendar</li>
                  <li>• Apple Reminders</li>
                  <li>• Apple Notes</li>
                  <li>• Audio/video files (transcribed locally)</li>
                </ul>
                <p className="mt-3">
                  Additional integrations (email, third-party apps, web bookmarks) are planned based on user demand.
                </p>
              </FAQ>
              
              <FAQ question="How does RAG work in Nexus Note?">
                <p>
                  When you ask a question, Nexus Note:
                </p>
                <ol className="mt-3 space-y-2 list-decimal list-inside">
                  <li>Converts your question into an embedding vector</li>
                  <li>Searches the vector database for semantically similar notes</li>
                  <li>Also performs keyword search for exact matches</li>
                  <li>Combines and ranks results</li>
                  <li>Passes the top results as context to the local language model</li>
                  <li>Returns an answer grounded in your actual notes, with citations</li>
                </ol>
                <p className="mt-3">
                  This retrieval-augmented generation (RAG) approach ensures answers are grounded in your data, not hallucinated.
                </p>
              </FAQ>
            </div>

            {/* Pricing & Access */}
            <div className="mb-16">
              <h2 className="text-sm font-medium text-accent uppercase tracking-wide mb-8">Pricing & Access</h2>
              
              <FAQ question="How much will it cost?">
                <p>
                  Pricing hasn't been finalized. We're considering a one-time purchase model that respects the local-first philosophy—you buy the software, you own it, no subscriptions required for core functionality.
                </p>
                <p className="mt-3">
                  Optional cloud features (if we add them) might have separate pricing.
                </p>
              </FAQ>
              
              <FAQ question="Will there be a free version?">
                <p>
                  We're exploring options. At minimum, there will be a trial period so you can evaluate whether Nexus Note fits your workflow before purchasing.
                </p>
              </FAQ>
              
              <FAQ question="How do I get early access?">
                <p>
                  Join the waitlist. We'll prioritize early access for users who:
                </p>
                <ul className="mt-3 space-y-1">
                  <li>• Care deeply about privacy and local-first software</li>
                  <li>• Have large personal knowledge stores</li>
                  <li>• Are willing to provide detailed feedback</li>
                  <li>• Can help stress-test the system with real workloads</li>
                </ul>
              </FAQ>
            </div>

            {/* Philosophy */}
            <div>
              <h2 className="text-sm font-medium text-accent uppercase tracking-wide mb-8">Philosophy</h2>
              
              <FAQ question="Why local-first?">
                <p>
                  Your personal knowledge is exactly that—personal. It contains your decisions, your relationships, your work, your thoughts. We believe this data should stay under your control by default.
                </p>
                <p className="mt-3">
                  Local-first also means you're not dependent on our servers, our pricing decisions, or our company's continued existence. The software works because it runs on your machine.
                </p>
              </FAQ>
              
              <FAQ question="Why Mac only?">
                <p>
                  We're starting with Mac because:
                </p>
                <ul className="mt-3 space-y-2">
                  <li><strong>Apple Silicon:</strong> M-series chips enable fast local AI inference that wasn't practical before</li>
                  <li><strong>Deep integration:</strong> macOS provides rich APIs for calendar, files, and system services</li>
                  <li><strong>Target users:</strong> Many knowledge workers and technical professionals use Macs</li>
                  <li><strong>Focus:</strong> Building one excellent Mac app is better than mediocre apps on three platforms</li>
                </ul>
                <p className="mt-3">
                  Windows and Linux may come later if there's demand.
                </p>
              </FAQ>
              
              <FAQ question="What does 'the best AI is invisible until it matters' mean?">
                <p>
                  We believe AI should be infrastructure, not spectacle. You shouldn't have to think about "using AI"—you should just be able to ask questions about your work and get useful answers.
                </p>
                <p className="mt-3">
                  The interface should be calm and minimal. The system should be predictable and trustworthy. The AI should help you think, not demand your attention.
                </p>
              </FAQ>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/50 bg-surface/30 px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              More questions?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join the waitlist and we'll keep you updated as we get closer to launch.
            </p>
            <div className="mt-8">
              <ButtonLink href="/#waitlist">Join the waitlist</ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
