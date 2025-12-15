import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { ButtonLink } from '@/components/site/button';

export default function UseCases() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <section className="px-6 pt-20 pb-16 sm:pt-32 sm:pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Built for people who think for a living
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Founders, CTOs, researchers, and power users who value trust, control, and leverage over novelty.
            </p>
          </div>
        </section>

        {/* Use Case 1: Decision Memory */}
        <section className="px-6 pb-20 sm:pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm font-medium text-accent uppercase tracking-wide">Decision Memory</div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Recover past decisions with full context
                </h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  "What did we decide about the pricing model?" "Why did we delay the launch?" "Who agreed to own the integration work?"
                </p>
                <p className="mt-4 text-muted-foreground leading-7">
                  Nexus Note surfaces the meeting where it was discussed, the follow-up email that confirmed it, and the task that was created—all in one answer with citations.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-surface/30 p-6">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Example query</div>
                <p className="mt-2 font-medium">
                  "What did we decide about the hiring plan and why?"
                </p>
                <div className="mt-6 text-xs font-medium text-muted-foreground uppercase tracking-wide">Answer</div>
                <p className="mt-2 text-sm text-muted-foreground leading-6">
                  You decided to delay Q1 hiring by 6 weeks due to budget uncertainty. The decision was made in the March 12 leadership sync, confirmed by Sarah in a follow-up email, and revisited in the April planning doc where you noted the product launch should come first.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">Mar 12 meeting</span>
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">Sarah's email</span>
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">April planning doc</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case 2: Meeting Synthesis */}
        <section className="border-y border-border/50 bg-surface/30 px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1 rounded-2xl border border-border/50 bg-background/50 p-6">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">From a 45-minute meeting</div>
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="text-sm font-medium">Summary</div>
                    <p className="mt-1 text-sm text-muted-foreground">Discussed Q2 roadmap priorities. Agreed to focus on API stability before new features. Design review scheduled for next week.</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Action items</div>
                    <ul className="mt-1 text-sm text-muted-foreground space-y-1">
                      <li>• Alex: Draft API migration guide by Friday</li>
                      <li>• Jordan: Schedule design review with eng team</li>
                      <li>• You: Review competitor analysis doc</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Decisions</div>
                    <p className="mt-1 text-sm text-muted-foreground">Postpone mobile app work until Q3. Hire one more backend engineer.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-sm font-medium text-accent uppercase tracking-wide">Meeting Synthesis</div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Turn transcripts into durable notes
                </h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  Meetings generate hours of audio but minutes of actionable insight. Nexus Note transcribes recordings, extracts summaries, identifies action items, and links everything to the right projects.
                </p>
                <p className="mt-4 text-muted-foreground leading-7">
                  Weeks later, when you ask "what did we agree to in that roadmap meeting?", the answer is instant—with a link to the original recording timestamp.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case 3: Research Layer */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm font-medium text-accent uppercase tracking-wide">Personal Research Layer</div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Search across everything you've collected
                </h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  PDFs from conferences. Bookmarked articles. Notes from books. Research papers. Your own writing. All of it indexed, searchable, and queryable in natural language.
                </p>
                <p className="mt-4 text-muted-foreground leading-7">
                  Ask "what have I read about retrieval-augmented generation?" and get a synthesized answer drawing from everything in your collection—not just keyword matches, but actual understanding of the content.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { query: 'Papers on transformer architectures', results: '47 documents' },
                  { query: 'Notes from last 3 AI conferences', results: '12 documents' },
                  { query: 'My highlights on product strategy', results: '23 documents' },
                  { query: 'Articles about local-first software', results: '8 documents' },
                ].map((item) => (
                  <div key={item.query} className="rounded-xl border border-border/50 bg-surface/30 p-4 flex justify-between items-center">
                    <span className="text-sm">{item.query}</span>
                    <span className="text-xs text-muted-foreground">{item.results}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Case 4: Operational Clarity */}
        <section className="border-y border-border/50 bg-surface/30 px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border/50 bg-background/50 p-4">
                    <div className="text-sm font-medium">This week</div>
                    <p className="mt-1 text-xs text-muted-foreground">12 tasks due, 4 meetings, 2 deadlines</p>
                  </div>
                  <div className="rounded-xl border border-border/50 bg-background/50 p-4">
                    <div className="text-sm font-medium">Overdue</div>
                    <p className="mt-1 text-xs text-muted-foreground">3 tasks from last week need attention</p>
                  </div>
                  <div className="rounded-xl border border-border/50 bg-background/50 p-4">
                    <div className="text-sm font-medium">Waiting on</div>
                    <p className="mt-1 text-xs text-muted-foreground">Responses from Alex, Jordan, finance team</p>
                  </div>
                  <div className="rounded-xl border border-border/50 bg-background/50 p-4">
                    <div className="text-sm font-medium">Upcoming</div>
                    <p className="mt-1 text-xs text-muted-foreground">Board prep next week, Q2 planning in 2 weeks</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-sm font-medium text-accent uppercase tracking-wide">Operational Clarity</div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  See your commitments clearly
                </h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  Tasks scattered across apps. Commitments buried in emails. Deadlines hidden in calendar notes. Nexus Note unifies them into a single view of what you owe, what's owed to you, and what's coming.
                </p>
                <p className="mt-4 text-muted-foreground leading-7">
                  Ask "what did I commit to this week?" or "what am I waiting on from others?" and get an honest answer drawn from your calendar, tasks, and email threads.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case 5: Writing & Drafting */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm font-medium text-accent uppercase tracking-wide">Writing & Drafting</div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Draft with context from your own notes
                </h2>
                <p className="mt-4 text-muted-foreground leading-7">
                  Need to write a project update? A board memo? A response to a complex email thread? Nexus Note can draft it using context from your actual notes, meetings, and documents—not generic AI output.
                </p>
                <p className="mt-4 text-muted-foreground leading-7">
                  "Draft a project update for the API migration, pulling from my notes and the last three engineering syncs." The draft arrives grounded in your actual work, ready for your edits.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-surface/30 p-6">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Draft request</div>
                <p className="mt-2 text-sm font-medium">
                  "Draft a follow-up email to the investor meeting, referencing our product roadmap discussion"
                </p>
                <div className="mt-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Sources used</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">Investor meeting transcript</span>
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">Q2 roadmap doc</span>
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">Product strategy notes</span>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground italic">Draft ready for review. 3 sources cited. Edit before sending.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who uses it */}
        <section className="border-y border-border/50 bg-surface/30 px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Who it's for
              </h2>
              <p className="mt-4 text-muted-foreground leading-7">
                People with large personal knowledge stores who understand AI but don't want their private data in the cloud.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center">
                <div className="text-lg font-semibold text-accent">Founders</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Managing investor relations, product decisions, and team commitments across dozens of threads.
                </p>
              </div>
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center">
                <div className="text-lg font-semibold text-accent">CTOs</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tracking technical decisions, architecture discussions, and engineering commitments across time.
                </p>
              </div>
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center">
                <div className="text-lg font-semibold text-accent">Researchers</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Building a personal knowledge base across papers, notes, and experiments over years.
                </p>
              </div>
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center">
                <div className="text-lg font-semibold text-accent">Power Users</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Anyone who takes their personal knowledge seriously and wants AI that respects their privacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Your knowledge, your control
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
