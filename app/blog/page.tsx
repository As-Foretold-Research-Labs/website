"use client";

import { useState } from "react";
import Link from "next/link";
import { getAllBlogPosts, getFeaturedPost } from "@/app/lib/blog-mdx";

const categories = [
  "All",
  "Research",
  "Engineering",
  "Governance & Security",
  "Agentic Simulation"
];

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Pre-load posts for initial render, then use client-side filtering
  const allPosts = getAllBlogPosts();
  const featuredPost = getFeaturedPost();

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-obsidian text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-mono text-dim mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-surface-border">/</span>
          <span className="text-cobalt-light font-semibold">Blog & Research Publications</span>
        </div>

        {/* HERO HEADER */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-surface border border-surface-border text-cobalt-light text-xs font-mono uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-cobalt-light animate-pulse" />
            As Foretold Research & Engineering
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Research & Systems Publications
          </h1>

          <p className="text-steel text-lg leading-relaxed">
            In-depth analysis and technical briefs on AI infrastructure, data sovereignty, security vulnerabilities, synthetic data pipelines, and agentic systems.
          </p>
        </div>

        {/* FEATURED POST BANNER */}
        {featuredPost && selectedCategory === "All" && !searchQuery && (
          <div className="mb-16">
            <div className="text-xs font-mono text-cobalt-light uppercase tracking-wider mb-3">
              Featured Publication
            </div>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group relative block rounded border border-surface-border bg-surface-card p-8 md:p-12 shadow-xl hover:border-surface-border-strong transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-dim">
                    <span className="px-2.5 py-0.5 rounded border border-surface-border bg-surface text-cobalt-light font-semibold">
                      {featuredPost.category}
                    </span>
                    <span className="text-surface-border">•</span>
                    <span>{featuredPost.date}</span>
                    <span className="text-surface-border">•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-cobalt-light transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-steel text-sm md:text-base leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded border border-surface-border bg-surface text-dim">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between h-full border-t lg:border-t-0 lg:border-l border-surface-border pt-6 lg:pt-0 lg:pl-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-border border border-surface-border flex items-center justify-center font-mono font-bold text-cobalt-light text-sm">
                      {featuredPost.author.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{featuredPost.author.name}</div>
                      <div className="text-xs text-dim font-mono">{featuredPost.author.role}</div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm font-mono font-semibold text-cobalt-light group-hover:translate-x-1 transition-transform">
                    Read Article →
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* SEARCH & FILTER CONTROLS */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-surface-border">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-cobalt text-white shadow-md shadow-cobalt/20"
                    : "bg-surface border border-surface-border text-steel hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & topics..."
              className="w-full text-xs p-3 pl-9 rounded-lg bg-surface border border-surface-border text-white placeholder:text-dim focus:outline-none focus:border-cobalt-light"
            />
            <svg
              className="absolute left-3 top-3.5 w-3.5 h-3.5 text-dim"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* POSTS GRID */}
        {filteredPosts.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-surface-border rounded bg-surface/50">
            <p className="text-steel text-sm">No articles matched your selected search criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-xs font-mono text-cobalt-light hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between rounded border border-surface-border bg-surface-card p-6 shadow-md hover:border-surface-border-strong transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-dim mb-3">
                    <span className="px-2 py-0.5 rounded bg-surface border border-surface-border text-cobalt-light font-semibold">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-white group-hover:text-cobalt-light transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-steel text-xs leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-surface-border text-dim">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-surface-border/50 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-surface border border-surface-border flex items-center justify-center text-[10px] font-mono font-bold text-dim">
                        {post.author.avatar}
                      </div>
                      <span className="text-dim font-medium">{post.author.name}</span>
                    </div>

                    <span className="font-mono text-cobalt-light group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}