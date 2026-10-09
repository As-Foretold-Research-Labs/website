import { use } from "react";
import Link from "next/link";
import { getAllBlogPosts } from "@/app/lib/blog-mdx";
import { getBlogPost } from "@/app/lib/blog-mdx-server";
import { MDXRemote } from "next-mdx-remote/rsc";

// Helper to format inline markdown (bold, code, links)
function renderInlineMarkdown(text: string) {
  // Regex to split markdown tokens: links [text](url), bold **text**, inline code `code`, italic *text*
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let keyIdx = 0;

  while (remaining.length > 0) {
    // Check for link [text](url)
    const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      const [fullMatch, linkText, url] = linkMatch;
      const isExternal = url.startsWith("http");
      parts.push(
        <a
          key={`link-${keyIdx++}`}
          href={url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-cobalt-light hover:text-cobalt hover:underline underline-offset-2 font-medium transition-colors"
        >
          {linkText}
        </a>
      );
      remaining = remaining.slice(fullMatch.length);
      continue;
    }

    // Check for bold **text**
    const boldMatch = remaining.match(/^\*\*([^*]+)\*\*/);
    if (boldMatch) {
      const [fullMatch, boldText] = boldMatch;
      parts.push(
        <strong key={`bold-${keyIdx++}`} className="font-semibold text-white">
          {boldText}
        </strong>
      );
      remaining = remaining.slice(fullMatch.length);
      continue;
    }

    // Check for inline code `code`
    const codeMatch = remaining.match(/^`([^`]+)`/);
    if (codeMatch) {
      const [fullMatch, codeText] = codeMatch;
      parts.push(
        <code
          key={`code-${keyIdx++}`}
          className="px-1.5 py-0.5 rounded bg-surface border border-surface-border text-cobalt-light font-mono text-xs"
        >
          {codeText}
        </code>
      );
      remaining = remaining.slice(fullMatch.length);
      continue;
    }

    // Find next markdown syntax trigger
    const nextSpecial = remaining.search(/\[|\*\*|`/);
    if (nextSpecial === -1) {
      parts.push(remaining);
      break;
    } else if (nextSpecial > 0) {
      parts.push(remaining.slice(0, nextSpecial));
      remaining = remaining.slice(nextSpecial);
    }
  }

  return parts;
  }

export default async function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-obsidian text-white py-24 px-6 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-semibold text-white mb-4">Article Not Found</h1>
          <p className="text-steel text-sm mb-6">
            The requested research publication could not be located in our archives.
          </p>
          <Link href="/blog" className="px-5 py-2.5 rounded bg-cobalt text-white font-semibold text-xs hover:bg-cobalt-light transition-colors">
            ← Return to Publications
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getAllBlogPosts().filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="min-h-screen bg-obsidian text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-mono text-dim mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-surface-border">/</span>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <span className="text-surface-border">/</span>
          <span className="text-cobalt-light font-semibold truncate max-w-xs">{post.title}</span>
        </div>

        {/* HEADER */}
        <header className="mb-12 border-b border-surface-border pb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-dim mb-6">
            <span className="px-3 py-1 rounded border border-surface-border bg-surface text-cobalt-light font-semibold">
              {post.category}
            </span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-steel text-lg md:text-xl leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-surface-border/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-border border border-surface-border flex items-center justify-center font-mono font-bold text-cobalt-light text-base">
                {post.author.avatar}
              </div>
              <div>
                <div className="text-base font-semibold text-white">{post.author.name}</div>
                <div className="text-xs text-dim font-mono">{post.author.role}</div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Article link copied to clipboard!");
                  }
                }}
                className="px-3.5 py-1.5 rounded bg-surface border border-surface-border text-xs font-mono text-dim hover:text-white transition-colors flex items-center gap-1.5"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                </svg>
                Copy Link
              </button>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="prose prose-invert max-w-none text-steel leading-relaxed text-base space-y-6">
          <MDXRemote source={post.content} />
        </div>

        {/* TAGS */}
        <div className="mt-12 pt-8 border-t border-surface-border flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-dim mr-2">Tags:</span>
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono px-3 py-1 rounded bg-surface border border-surface-border text-dim">
              #{tag}
            </span>
          ))}
        </div>

        {/* RELATED POSTS */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-surface-border">
            <h3 className="text-xl font-semibold text-white mb-6">Related Research Publications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="p-6 rounded border border-surface-border bg-surface-card hover:border-surface-border-strong transition-colors flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-xs font-mono text-cobalt-light block mb-2">{rel.category}</span>
                    <h4 className="text-base font-semibold text-white group-hover:text-cobalt-light transition-colors mb-2 leading-snug">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-steel line-clamp-2 leading-relaxed">{rel.excerpt}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-surface-border/50 flex items-center justify-between text-xs font-mono text-dim">
                    <span>{rel.readTime}</span>
                    <span className="text-cobalt-light group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* BACK BUTTON */}
        <div className="mt-12 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-mono text-dim hover:text-white transition-colors">
            ← Back to all publications
          </Link>
        </div>
      </div>
    </article>
  );
}
