import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';

export const metadata: Metadata = {
  title: 'Blog - Nexus Note',
  description: 'Thoughts on local-first AI, personal knowledge management, privacy, and building intelligent systems.',
  openGraph: {
    title: 'Blog - Nexus Note',
    description: 'Thoughts on local-first AI, personal knowledge management, privacy, and building intelligent systems.',
  },
};

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

const posts: BlogPost[] = [
  {
    slug: 'why-local-first-matters',
    title: 'Why Local-First Matters for Personal AI',
    description: 'Cloud AI is convenient, but at what cost? We explore why keeping your personal knowledge on your own machine is the only sustainable path forward.',
    date: '2024-12-14',
    readTime: '5 min read',
  },
  {
    slug: 'anatomy-of-a-note',
    title: 'The Anatomy of a Note',
    description: 'In Nexus Note, a "note" is not a document. It\'s the atomic unit of meaning. Here\'s how we think about structuring personal knowledge.',
    date: '2024-12-10',
    readTime: '4 min read',
  },
  {
    slug: 'rag-without-the-cloud',
    title: 'RAG Without the Cloud',
    description: 'Retrieval-Augmented Generation is powerful, but most implementations send your data to third parties. We built it differently.',
    date: '2024-12-05',
    readTime: '6 min read',
  },
];

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <section className="px-4 sm:px-6 pt-16 pb-12 sm:pt-32 sm:pb-20">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
              Thoughts on local-first AI, personal knowledge management, privacy, and building intelligent systems.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="px-4 sm:px-6 pb-20 sm:pb-28">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-12">
              {posts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-8">
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                          {post.title}
                        </h2>
                        <p className="mt-3 text-muted-foreground leading-7">
                          {post.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 text-sm text-muted-foreground sm:text-right">
                        <div>{formatDate(post.date)}</div>
                        <div className="mt-1">{post.readTime}</div>
                      </div>
                    </div>
                  </Link>
                  <div className="mt-6 border-b border-border/50" />
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
