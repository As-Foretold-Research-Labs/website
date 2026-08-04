"use client";

import { use } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/app/lib/blog-data";

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
          className="text-[#ff7722] hover:text-[#ff8833] underline underline-offset-2 font-medium transition-colors"
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
          className="px-1.5 py-0.5 rounded bg-[#181a20] border border-zinc-800 text-[#ff7722] font-mono text-xs"
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

export default function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0c0d10] text-zinc-100 py-24 px-6 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-zinc-400 text-sm mb-6">
            The requested research publication could not be located in our archives.
          </p>
          <Link href="/blog" className="px-5 py-2.5 rounded-lg bg-[#ff6000] text-white font-semibold text-xs hover:bg-[#ff7722] transition-colors">
            &larr; Return to Publications
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="min-h-screen bg-[#0c0d10] text-zinc-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-[#ff7722] font-semibold truncate max-w-xs">{post.title}</span>
        </div>

        {/* HEADER */}
        <header className="mb-12 border-b border-zinc-800 pb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 mb-6">
            <span className="px-3 py-1 rounded-md bg-[#ff6000]/10 text-[#ff7722] border border-[#ff6000]/25 font-semibold">
              {post.category}
            </span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-zinc-800/60">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#ff6000]/20 border border-[#ff6000]/40 flex items-center justify-center font-mono font-bold text-[#ff7722] text-base">
                {post.author.avatar}
              </div>
              <div>
                <div className="text-base font-semibold text-white">{post.author.name}</div>
                <div className="text-xs text-zinc-400 font-mono">{post.author.role}</div>
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
                className="px-3.5 py-1.5 rounded-md bg-[#14161b] border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
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
        <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed text-base space-y-6">
          {post.content.split("\n\n").map((block, idx) => {
            const trimmed = block.trim();
            if (!trimmed) return null;

            // Skip main title H1 if duplicated
            if (trimmed.startsWith("# ")) {
              return null;
            }

            // Horizontal rule
            if (trimmed === "---") {
              return <hr key={idx} className="my-8 border-zinc-800/80" />;
            }

            // Heading 2
            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-2xl sm:text-3xl font-bold text-white pt-8 pb-3 border-b border-zinc-800/80 mb-4 tracking-tight">
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }

            // Heading 3
            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-xl font-bold text-white pt-6 pb-2 mb-2 tracking-tight">
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }

            // Callout / Aside block
            if (trimmed.startsWith("<aside>") || trimmed.startsWith("<aside")) {
              const cleanText = trimmed.replace(/<\/?aside>/g, "").trim();
              return (
                <div key={idx} className="my-6 p-5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-200 text-sm leading-relaxed">
                  {renderInlineMarkdown(cleanText)}
                </div>
              );
            }

            // Image block ![alt](url)
            const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
            if (imgMatch) {
              const altText = imgMatch[1];
              const imgUrl = imgMatch[2];
              return (
                <figure key={idx} className="my-8 rounded-xl overflow-hidden border border-zinc-800 bg-[#121418] shadow-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgUrl}
                    alt={altText}
                    className="w-full h-auto object-cover max-h-[500px]"
                    referrerPolicy="no-referrer"
                  />
                  {altText && (
                    <figcaption className="p-3 text-center text-xs text-zinc-400 font-mono italic bg-[#16181d] border-t border-zinc-800">
                      {altText}
                    </figcaption>
                  )}
                </figure>
              );
            }

            // Code block ```
            if (trimmed.startsWith("```")) {
              const lines = trimmed.split("\n");
              const code = lines.slice(1, -1).join("\n");
              const lang = lines[0].replace("```", "");
              return (
                <div key={idx} className="my-6 rounded-xl border border-zinc-800 bg-[#090a0c] p-4 font-mono text-xs overflow-x-auto text-zinc-200 shadow-inner">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-2 font-semibold">
                    Code Listing // {lang || "text"}
                  </div>
                  <pre className="leading-relaxed">{code}</pre>
                </div>
              );
            }

            // Unordered / Ordered list block
            if (trimmed.startsWith("- ") || trimmed.startsWith("* ") || /^\d+\.\s/.test(trimmed)) {
              const lines = trimmed.split("\n");
              return (
                <ul key={idx} className="my-4 space-y-2.5 pl-2">
                  {lines.map((line, lIdx) => {
                    const cleanLine = line.replace(/^([*|-]|\d+\.)\s+/, "");
                    return (
                      <li key={lIdx} className="flex items-start gap-3 text-zinc-300 text-base leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6000] mt-2.5 shrink-0" />
                        <div>{renderInlineMarkdown(cleanLine)}</div>
                      </li>
                    );
                  })}
                </ul>
              );
            }

            // Italic caption standalone line e.g. *Caption text*
            if (trimmed.startsWith("*") && trimmed.endsWith("*") && !trimmed.includes("\n") && !trimmed.startsWith("**")) {
              return (
                <p key={idx} className="text-center text-xs text-zinc-400 font-mono italic -mt-3 mb-6">
                  {trimmed.slice(1, -1)}
                </p>
              );
            }

            // Standard Paragraph
            return (
              <p key={idx} className="text-zinc-300 text-base leading-relaxed">
                {renderInlineMarkdown(trimmed)}
              </p>
            );
          })}
        </div>

        {/* TAGS */}
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-zinc-500 mr-2">Tags:</span>
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono px-3 py-1 rounded-md bg-[#14161b] border border-zinc-800 text-zinc-300">
              #{tag}
            </span>
          ))}
        </div>

        {/* RELATED POSTS */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-zinc-800">
            <h3 className="text-xl font-bold text-white mb-6">Related Research Publications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="p-6 rounded-xl border border-zinc-800 bg-[#14161b] hover:border-zinc-700 transition-colors flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-xs font-mono text-[#ff7722] block mb-2">{rel.category}</span>
                    <h4 className="text-base font-bold text-white group-hover:text-[#ff7722] transition-colors mb-2 leading-snug">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">{rel.excerpt}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>{rel.readTime}</span>
                    <span className="text-[#ff7722] group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* BACK BUTTON */}
        <div className="mt-12 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors">
            &larr; Back to all publications
          </Link>
        </div>
      </div>
    </article>
  );
}
