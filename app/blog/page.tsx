"use client";

import { useState } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/app/lib/blog-data";

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

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-[#0c0d10] text-zinc-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#ff7722] font-semibold">Blog & Research Publications</span>
        </div>

        {/* HERO HEADER */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#181a20] border border-zinc-800 text-[#ff7722] text-xs font-mono uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff6000] animate-pulse" />
            As Foretold Research & Engineering
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Research & Systems Publications
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed">
            In-depth analysis and technical briefs on AI infrastructure, data sovereignty, security vulnerabilities, synthetic data pipelines, and agentic systems.
          </p>
        </div>

        {/* FEATURED POST BANNER */}
        {featuredPost && selectedCategory === "All" && !searchQuery && (
          <div className="mb-16">
            <div className="text-xs font-mono text-[#ff7722] uppercase tracking-wider mb-3">
              Featured Publication
            </div>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group relative block rounded-2xl border border-zinc-800 bg-[#14161b] p-8 md:p-12 shadow-xl hover:border-[#ff6000]/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#ff6000]/10 text-[#ff7722] border border-[#ff6000]/20 font-semibold">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#ff7722] transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-black border border-zinc-800 text-zinc-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between h-full border-t lg:border-t-0 lg:border-l border-zinc-800 pt-6 lg:pt-0 lg:pl-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ff6000]/20 border border-[#ff6000]/40 flex items-center justify-center font-mono font-bold text-[#ff7722] text-sm">
                      {featuredPost.author.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{featuredPost.author.name}</div>
                      <div className="text-xs text-zinc-500 font-mono">{featuredPost.author.role}</div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm font-mono font-semibold text-[#ff7722] group-hover:translate-x-1 transition-transform">
                    Read Article &rarr;
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* SEARCH & FILTER CONTROLS */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-zinc-800">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#ff6000] text-white shadow-md shadow-[#ff6000]/20"
                    : "bg-[#14161b] text-zinc-400 hover:text-white border border-zinc-800"
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
              className="w-full text-xs p-3 pl-9 rounded-lg bg-[#14161b] border border-zinc-800 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#ff6000]"
            />
            <svg
              className="absolute left-3 top-3.5 w-3.5 h-3.5 text-zinc-500"
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
          <div className="py-16 text-center border border-dashed border-zinc-800 rounded-xl bg-[#14161b]/50">
            <p className="text-zinc-400 text-sm">No articles matched your selected search criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-xs font-mono text-[#ff7722] hover:underline"
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
                className="group flex flex-col justify-between rounded-xl border border-zinc-800 bg-[#14161b] p-6 shadow-md hover:border-zinc-700 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                    <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[#ff7722] font-semibold">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#ff7722] transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-black border border-zinc-800 text-zinc-400">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-mono font-bold text-zinc-300">
                        {post.author.avatar}
                      </div>
                      <span className="text-zinc-400 font-medium">{post.author.name}</span>
                    </div>

                    <span className="font-mono text-[#ff7722] group-hover:translate-x-1 transition-transform">
                      &rarr;
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
