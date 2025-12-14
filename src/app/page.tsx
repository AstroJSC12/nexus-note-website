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
    <Card className="p-5">
      <div className="text-sm font-semibold tracking-tight text-foreground">
        {title}
      </div>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Section className="pt-14 sm:pt-20">
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
              <p className="mt-4 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
                It indexes locally, reasons locally, and only acts with explicit boundaries.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="#waitlist">Request access</ButtonLink>
                <ButtonLink href="#how" variant="secondary">
                  How it works
                </ButtonLink>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-surface p-4">
                  <div className="text-xs font-medium text-muted-foreground">Runs on-device</div>
                  <div className="mt-1 text-sm font-semibold">Local RAG</div>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-4">
                  <div className="text-xs font-medium text-muted-foreground">No silent sync</div>
                  <div className="mt-1 text-sm font-semibold">Explicit network</div>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-4">
                  <div className="text-xs font-medium text-muted-foreground">You own memory</div>
                  <div className="mt-1 text-sm font-semibold">Portable data</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-sm">
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
                    <div className="rounded-2xl border border-border bg-background p-4">
                      <div className="text-xs text-muted-foreground">Example</div>
                      <div className="mt-1 text-sm font-medium">
                        “What did I decide about the hiring plan last month?”
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Sources: meeting transcript, calendar, follow-up email
                      </div>
                    </div>
                    <div className="rounded-2xl border border-border bg-background p-4">
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

        <Section className="py-10 sm:py-14">
          <div className="grid gap-4 md:grid-cols-4" id="features">
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
              <div className="grid gap-4">
                {[
                  {
                    title: 'Ingest',
                    body: 'Bring in notes from the sources you already use: docs, calendars, tasks, mail, audio/video, and more.',
                  },
                  {
                    title: 'Normalize',
                    body: 'Everything is converted into a unified representation, so the system can reason across formats.',
                  },
                  {
                    title: 'Index locally',
                    body: 'Build a local semantic index (embeddings) and a fast text index on-device.',
                  },
                  {
                    title: 'Retrieve + reason',
                    body: 'A local model answers questions grounded in your notes (RAG), with citations and confidence cues.',
                  },
                  {
                    title: 'Act (with consent)',
                    body: 'Draft updates, plan sequences, create tasks, schedule meetings—always with explicit confirmation.',
                  },
                ].map((s) => (
                  <Card key={s.title} className="p-6">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="text-sm font-semibold">{s.title}</div>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.body}</p>
                      </div>
                      <div className="mt-0.5 hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 ring-1 ring-accent/25 sm:flex">
                        <span className="text-xs font-semibold text-accent">●</span>
                      </div>
                    </div>
                  </Card>
                ))}
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
              <div className="grid gap-4 sm:grid-cols-2">
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
                  <Card key={u.title} className="p-6">
                    <div className="text-sm font-semibold">{u.title}</div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{u.body}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <Card className="p-8">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h2 className="text-xl font-semibold tracking-tight">Not a note-taking app.</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Nexus Note isn’t a new place to write. It’s a local system that sits above what
                  you already use—connecting documents, time, tasks, and media into a calm,
                  trustworthy intelligence hub.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-border bg-background p-5">
                  <div className="text-xs font-medium text-muted-foreground">Design principle</div>
                  <div className="mt-2 text-sm font-semibold">Quiet power, explicit control.</div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    No hype loops. No black-box automation. Just grounded retrieval and
                    deliberate actions.
                  </p>
                </div>
              </div>
            </div>
          </Card>
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
