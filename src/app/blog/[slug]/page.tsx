import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { ButtonLink } from '@/components/site/button';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}

const posts: Record<string, BlogPost> = {
  'why-local-first-matters': {
    slug: 'why-local-first-matters',
    title: 'Why Local-First Matters for Personal AI',
    description: 'Cloud AI is convenient, but at what cost? We explore why keeping your personal knowledge on your own machine is the only sustainable path forward.',
    date: '2024-12-14',
    readTime: '5 min read',
    content: (
      <>
        <p>
          The promise of AI assistants is compelling: ask a question, get an answer drawn from everything you've ever written, read, or discussed. But most implementations require sending your most private data—your notes, emails, meeting transcripts—to someone else's servers.
        </p>
        <p>
          We think there's a better way.
        </p>
        <h2>The Privacy Problem</h2>
        <p>
          When you use a cloud-based AI assistant, every query you make, every document you upload, and every piece of context you provide passes through infrastructure you don't control. Even with the best intentions and strongest encryption, this creates risks:
        </p>
        <ul>
          <li><strong>Data breaches</strong> — Your personal knowledge becomes a target</li>
          <li><strong>Policy changes</strong> — Terms of service can change overnight</li>
          <li><strong>Training data</strong> — Your inputs may improve models you don't benefit from</li>
          <li><strong>Vendor lock-in</strong> — Your data becomes harder to move</li>
        </ul>
        <h2>The Local-First Alternative</h2>
        <p>
          Local-first means your data stays on your machine. The AI models run on your hardware. The indexes are built locally. Nothing leaves your device unless you explicitly choose to sync it.
        </p>
        <p>
          This isn't just about privacy—it's about ownership. Your personal knowledge base should be as portable as a folder of files. You should be able to inspect it, export it, or delete it at any time.
        </p>
        <h2>Why Now?</h2>
        <p>
          For years, running sophisticated AI models locally was impractical. The models were too large, the hardware too slow. But that's changing rapidly:
        </p>
        <ul>
          <li>Apple Silicon makes local inference fast and efficient</li>
          <li>Smaller, specialized models match larger ones for specific tasks</li>
          <li>Embedding models run efficiently on consumer hardware</li>
          <li>Vector databases can be built and queried locally</li>
        </ul>
        <p>
          The technology has caught up with the philosophy. Local-first AI isn't a compromise anymore—it's a choice.
        </p>
        <h2>What We're Building</h2>
        <p>
          Nexus Note is a local-first intelligence layer over your digital life. Everything—ingestion, indexing, reasoning, and action—happens on your Mac. We're not building another cloud service that happens to have a desktop app. We're building software that respects your privacy by default.
        </p>
        <p>
          If this resonates with you, <Link href="/#waitlist" className="text-accent hover:underline">join our waitlist</Link>. We're building this for people who think for a living and care about where their thoughts go.
        </p>
      </>
    ),
  },
  'anatomy-of-a-note': {
    slug: 'anatomy-of-a-note',
    title: 'The Anatomy of a Note',
    description: 'In Nexus Note, a "note" is not a document. It\'s the atomic unit of meaning. Here\'s how we think about structuring personal knowledge.',
    date: '2024-12-10',
    readTime: '4 min read',
    content: (
      <>
        <p>
          When we named the product "Nexus Note," we chose the word "note" deliberately. Not "document." Not "file." Note.
        </p>
        <p>
          A note is the atomic unit of meaning—the smallest piece of information worth remembering. Understanding this distinction is key to understanding what we're building.
        </p>
        <h2>Documents Are Containers</h2>
        <p>
          A document is a container. It holds multiple ideas, often spanning different topics and time periods. A meeting transcript might contain decisions about hiring, product direction, and vacation schedules all in one file.
        </p>
        <p>
          Traditional note-taking apps treat documents as the primary unit. You create files, organize them in folders, and search within them. But this means context gets buried. The hiring decision is locked inside a 45-minute transcript.
        </p>
        <h2>Notes Are Connections</h2>
        <p>
          In Nexus Note, we extract meaning from containers. A single meeting might generate several notes:
        </p>
        <ul>
          <li>A decision about delaying Q1 hiring</li>
          <li>A task to follow up with the product team</li>
          <li>A preference about how you like status updates formatted</li>
        </ul>
        <p>
          Each note is linked to its source, timestamped, and connected to related notes across your knowledge base. When you ask "What did I decide about hiring?", the answer isn't buried in a document—it's surfaced as a first-class object.
        </p>
        <h2>Types of Notes</h2>
        <p>
          Everything worth remembering becomes a note:
        </p>
        <ul>
          <li><strong>Decisions</strong> — What you chose and why</li>
          <li><strong>Tasks</strong> — Commitments you've made</li>
          <li><strong>Events</strong> — Things that happened at specific times</li>
          <li><strong>Preferences</strong> — How you like things done</li>
          <li><strong>Patterns</strong> — Behaviors the system has observed</li>
          <li><strong>Signals</strong> — Things you've flagged to remember later</li>
        </ul>
        <h2>Intelligence from Connection</h2>
        <p>
          The power isn't in storing notes—it's in connecting them. A hiring decision links to the meeting where it was made, the calendar event that blocked the time, and the follow-up email you sent afterward.
        </p>
        <p>
          When you ask a question, the answer draws from this web of connections. Not keyword matching. Not file searching. Semantic understanding of your personal knowledge graph.
        </p>
        <p>
          That's what we mean by a note. And that's what makes Nexus Note different.
        </p>
      </>
    ),
  },
  'rag-without-the-cloud': {
    slug: 'rag-without-the-cloud',
    title: 'RAG Without the Cloud',
    description: 'Retrieval-Augmented Generation is powerful, but most implementations send your data to third parties. We built it differently.',
    date: '2024-12-05',
    readTime: '6 min read',
    content: (
      <>
        <p>
          Retrieval-Augmented Generation (RAG) has become the standard approach for making AI systems knowledgeable about specific domains. Instead of relying solely on what a model learned during training, RAG retrieves relevant context from a knowledge base and uses it to generate more accurate, grounded responses.
        </p>
        <p>
          It's powerful. It's also, in most implementations, a privacy nightmare.
        </p>
        <h2>How RAG Typically Works</h2>
        <p>
          The standard RAG pipeline looks like this:
        </p>
        <ol>
          <li>Your documents are uploaded to a cloud service</li>
          <li>An embedding model (often OpenAI's) converts them to vectors</li>
          <li>Vectors are stored in a hosted database (Pinecone, Weaviate, etc.)</li>
          <li>Queries hit a cloud API, retrieve context, and generate responses</li>
        </ol>
        <p>
          At every step, your data passes through third-party infrastructure. Your notes, emails, and meeting transcripts become training data for someone else's models, attack surfaces for potential breaches, and leverage for vendor lock-in.
        </p>
        <h2>Our Approach</h2>
        <p>
          Nexus Note implements the full RAG pipeline locally:
        </p>
        <ul>
          <li><strong>Local embedding</strong> — Models run on your Mac using Apple's MLX framework</li>
          <li><strong>Local vector storage</strong> — SQLite with vector extensions, no external database</li>
          <li><strong>Local inference</strong> — Reasoning models run on-device</li>
          <li><strong>Local orchestration</strong> — The entire pipeline executes without network calls</li>
        </ul>
        <h2>The Technical Challenges</h2>
        <p>
          Building RAG locally isn't trivial. Cloud providers have invested billions in infrastructure optimized for this workload. Going local means solving several hard problems:
        </p>
        <p>
          <strong>Model efficiency:</strong> We can't run GPT-4-class models on a laptop. Instead, we use smaller, specialized models fine-tuned for specific tasks. A 7B parameter model running on Apple Silicon can match larger models for many retrieval and reasoning tasks.
        </p>
        <p>
          <strong>Embedding quality:</strong> Local embedding models have improved dramatically. Models like BGE and E5 provide excellent semantic search quality while running efficiently on consumer hardware.
        </p>
        <p>
          <strong>Index performance:</strong> Vector search at scale requires careful engineering. We use approximate nearest neighbor algorithms that balance accuracy with speed, keeping queries fast even with large knowledge bases.
        </p>
        <h2>The Tradeoffs</h2>
        <p>
          Local RAG isn't free. You need capable hardware (M1 Mac or better). Initial indexing takes time. Some advanced capabilities require more compute than a laptop can provide.
        </p>
        <p>
          But for personal knowledge management—your notes, your decisions, your context—the tradeoffs are worth it. You get:
        </p>
        <ul>
          <li>Complete privacy by default</li>
          <li>No API costs or rate limits</li>
          <li>Offline capability</li>
          <li>Full data portability</li>
        </ul>
        <p>
          RAG without the cloud isn't just possible—for personal AI, it's preferable.
        </p>
      </>
    ),
  },
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) {
    return { title: 'Post Not Found - Nexus Note' };
  }
  return {
    title: `${post.title} - Nexus Note`,
    description: post.description,
    openGraph: {
      title: `${post.title} - Nexus Note`,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <article className="px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            {/* Header */}
            <header>
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to blog
              </Link>
              <h1 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
                {post.title}
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </header>

            {/* Content */}
            <div className="mt-12 prose prose-neutral dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline max-w-none">
              {post.content}
            </div>

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-border/50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="font-semibold">Interested in Nexus Note?</p>
                  <p className="mt-1 text-sm text-muted-foreground">Join the waitlist for early access.</p>
                </div>
                <ButtonLink href="/#waitlist">
                  Join waitlist
                </ButtonLink>
              </div>
            </footer>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
