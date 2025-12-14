import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { Section } from '@/components/site/section';
import { Card } from '@/components/site/card';
import { ButtonLink } from '@/components/site/button';
import { WaitlistForm } from '@/components/site/waitlist-form';

function Pillar({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="py-4">
      <div className="text-sm font-semibold tracking-tight text-foreground">{title}</div>
      <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{description}</p>
    </div>
  );
}

function Detail({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-2xl border border-border/70 bg-surface/50 px-5 py-4">
      <summary className="cursor-pointer list-none select-none">
        <div className="flex items-start justify-between gap-6">
          <div className="text-sm font-semibold">{title}</div>
          <div
            className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-background/60 ring-1 ring-border/70"
            aria-hidden="true"
          >
            <span className="text-xs text-muted-foreground group-open:hidden">+</span>
            <span className="text-xs text-muted-foreground hidden group-open:inline">–</span>
          </div>
        </div>
      </summary>
      <div className="pt-3 text-sm leading-6 text-muted-foreground">{children}</div>
    </details>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Section className="pt-14 sm:pt-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                Mac-native. Local-first. Private by design.
              </div>
              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                A private intelligence layer over your digital life.
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
                Nexus Note is a Mac-native system that turns everything worth remembering into
                a unified, searchable memory—documents, meetings, tasks, calendars, email, and
                the patterns you’d want to keep.
              </p>
              <p className="mt-3 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
                It indexes locally, reasons locally, and only acts with explicit boundaries.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="#waitlist">Request access</ButtonLink>
                <ButtonLink href="#how" variant="secondary">
                  How it works
                </ButtonLink>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent/70" aria-hidden="true" />
                  Local RAG on-device
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent/70" aria-hidden="true" />
                  No silent network activity
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent/70" aria-hidden="true" />
                  Portable, inspectable memory
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-surface/60 p-6">
                <div
                  className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/25 blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="text-sm font-semibold">Nexus Node</div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    The local system that ingests your sources, normalizes them into notes,
                    builds an on-device index, and gives you reliable answers with traceable
                    provenance.
                  </p>

                  <div className="mt-5 grid gap-3">
                    <div className="rounded-2xl bg-background/60 p-4 ring-1 ring-border/70">
                      <div className="text-xs text-muted-foreground">Example</div>
                      <div className="mt-1 text-sm font-medium">
                        “What did I decide about the hiring plan last month?”
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Sources: meeting transcript, calendar, follow-up email
                      </div>
                    </div>
                    <div className="rounded-2xl bg-background/60 p-4 ring-1 ring-border/70">
                      <div className="text-xs text-muted-foreground">Result</div>
                      <div className="mt-1 text-sm font-medium">
                        A concise answer with citations—and suggested next actions.
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Action requires confirmation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="py-8 sm:py-10">
          <div className="max-w-4xl" id="features">
            <h2 className="text-xl font-semibold tracking-tight">Trust, by default</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              A local-first system should feel like infrastructure: predictable, inspectable, and calm.
            </p>
            <div className="mt-6 divide-y divide-border/70">
              <Pillar
                title="Local-first"
                description="Indexing, embeddings, and retrieval run on your Mac. Your knowledge stays yours."
              />
              <Pillar
                title="Explicit boundaries"
                description="Actions are deliberate. The system asks before it changes anything that matters."
              />
              <Pillar
                title="Transparent sources"
                description="Answers are grounded in your notes, with citations and traceable provenance."
              />
              <Pillar
                title="You own your memory"
                description="Your data is portable, inspectable, and under your control—not a black box."
              />
            </div>
          </div>
        </Section>

        <Section id="how">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight">
                How it works
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Nexus Note treats a “note” as an atomic unit of meaning—documents, events, tasks,
                messages, transcripts, preferences, and inferred signals.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-3">
                <Detail title="1. Ingest">
                  Bring in notes from the sources you already use: docs, calendars, tasks, mail, audio/video, and more.
                </Detail>
                <Detail title="2. Normalize">
                  Everything is converted into a unified representation, so the system can reason across formats.
                </Detail>
                <Detail title="3. Index locally">
                  Build a local semantic index (embeddings) and a fast text index on-device.
                </Detail>
                <Detail title="4. Retrieve + reason">
                  A local model answers questions grounded in your notes (RAG), with citations and confidence cues.
                </Detail>
                <Detail title="5. Act (with consent)">
                  Draft updates, plan sequences, create tasks, schedule meetings—always with explicit confirmation.
                </Detail>
              </div>
            </div>
          </div>
        </Section>

        <Section id="use-cases">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight">
                Built for technical professionals
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                For founders, CTOs, researchers, and power users who value trust, control, and
                time over tinkering.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: 'Decision memory',
                    body: 'Recover past decisions with context: who agreed, what changed, and what to do next.',
                  },
                  {
                    title: 'Meeting synthesis',
                    body: 'Turn transcripts into durable notes: summaries, action items, and follow-ups linked to projects.',
                  },
                  {
                    title: 'Personal research layer',
                    body: 'Search across PDFs, notes, and links. Ask precise questions and get grounded answers.',
                  },
                  {
                    title: 'Operational clarity',
                    body: 'Plan weeks, triage tasks, and keep commitments aligned across calendars, email, and docs.',
                  },
                ].map((u) => (
                  <Card key={u.title} className="p-5">
                    <div className="text-sm font-semibold">{u.title}</div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{u.body}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <h2 className="text-xl font-semibold tracking-tight">Not a note-taking app.</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Nexus Note isn’t a new place to write. It’s a local system that sits above what you already
                use—connecting documents, time, tasks, and media into a calm, trustworthy intelligence hub.
              </p>
            </div>
            <div className="lg:col-span-6">
              <Card className="p-6">
                <div className="text-xs font-medium text-muted-foreground">Design principle</div>
                <div className="mt-2 text-sm font-semibold">Quiet power, explicit control.</div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  No hype loops. No black-box automation. Just grounded retrieval and deliberate actions.
                </p>
              </Card>
            </div>
          </div>
        </Section>

        <Section id="waitlist">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight">Join the waitlist</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Early access will prioritize users who care about privacy, local-first systems, and
                reliable workflows.
              </p>
            </div>
            <div className="lg:col-span-7">
              <Card className="p-6">
                <WaitlistForm source="home" />
              </Card>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
