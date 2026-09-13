'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
  Copy,
  Check,
} from 'lucide-react';

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('bhavuk.arora03@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#fde047] selection:text-black">
      {/* ─────────────────────────────────────────────────────────────
          1. MINIMAL STICKY HEADER
          ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Left Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-200">
              <img
                src="/profile.jpeg"
                alt="Bhavuk Arora"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-zinc-950 tracking-tight">
                Bhavuk Arora
              </span>
              <span className="text-[11px] text-zinc-500 font-mono">
                Forward Deployed Engineer
              </span>
            </div>
          </a>

          {/* Nav & Contact */}
          <div className="flex items-center gap-5 sm:gap-7 text-xs font-mono text-zinc-600">
            <a href="#work" className="hover:text-zinc-950 transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-zinc-950 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-zinc-950 transition-colors">
              Contact
            </a>
            <a
              href="https://github.com/bhavukar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-zinc-950 transition-colors flex items-center gap-1"
            >
              <Github size={14} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN CONTAINER WITH SUBTLE 1PX VERTICAL RAILS
          ───────────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto border-x border-zinc-200 bg-white min-h-screen">
        {/* ───────────────────────────────────────────────────────────
            HERO SECTION
            ─────────────────────────────────────────────────────────── */}
        <section className="px-5 sm:px-10 md:px-14 pt-14 pb-14 border-b border-zinc-200">
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
            {/* Left Copy */}
            <div className="space-y-5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Founding Engineer @ Reve • New Delhi, India</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.12]">
                Building reliable{' '}
                <mark className="bg-[#fde047] text-black px-2 py-0.5 inline-block font-bold not-italic">
                  systems
                </mark>
                , mobile apps, and practical{' '}
                <mark className="bg-[#fde047] text-black px-2 py-0.5 inline-block font-bold not-italic">
                  AI workflows
                </mark>
                .
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                Hey, I'm Bhavuk. I'm a founding product engineer who loves turning early-stage ideas
                into fast, reliable software. At Reve, I helped take the product from 0 to 20,000+ users.
                I work across the stack — from low-level Rust developer tools to cross-platform mobile
                and pragmatic AI integrations.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#contact"
                  className="bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all"
                >
                  Get in touch
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="border border-zinc-300 hover:border-zinc-900 bg-white text-zinc-800 font-mono text-xs px-4 py-2.5 rounded-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} className="text-emerald-600" />
                      <span className="text-emerald-600 font-medium">Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} className="text-zinc-500" />
                      <span>bhavuk.arora03@gmail.com</span>
                    </>
                  )}
                </button>

                <a
                  href="https://github.com/bhavukar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-zinc-950 font-mono text-xs px-3 py-2 flex items-center gap-1.5 transition-colors"
                >
                  <Github size={15} />
                  <span>github.com/bhavukar</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* Right Photo */}
            <div className="shrink-0">
              <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
                <img
                  src="/profile.jpeg"
                  alt="Bhavuk Arora"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            SECTION: WHAT I DO / CORE EXPERTISE
            ─────────────────────────────────────────────────────────── */}
        <section id="about" className="px-5 sm:px-10 md:px-14 py-14 border-b border-zinc-200">
          <div className="space-y-2 mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              What I Focus On
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
              Engineering across product, systems, and AI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-zinc-200 bg-white hover:shadow-sm transition-all flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="text-xs font-mono text-zinc-500 font-bold uppercase">01</div>
                <h3 className="text-lg font-bold text-zinc-950">
                  Zero-to-One Product Engineering
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Founding member mindset. Turning rough concepts into production-grade mobile and web
                  apps. I care deeply about snappy user experiences, offline state, and clean visual details.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5 text-[11px] font-mono text-zinc-500">
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Flutter</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Next.js</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Full Lifecycle</span>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-zinc-200 bg-white hover:shadow-sm transition-all flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="text-xs font-mono text-zinc-500 font-bold uppercase">02</div>
                <h3 className="text-lg font-bold text-zinc-950">
                  Applied AI & Automation
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Integrating LLMs and automated workflows where they actually provide value. Focused on
                  reliable tool-calling, structured data extraction, and search that users can rely on.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5 text-[11px] font-mono text-zinc-500">
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Tool Calling</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Embeddings</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Structured Output</span>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-zinc-200 bg-white hover:shadow-sm transition-all flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="text-xs font-mono text-zinc-500 font-bold uppercase">03</div>
                <h3 className="text-lg font-bold text-zinc-950">
                  Low-Level Systems & Tools
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Building developer utilities and CLI tools in Rust and low-overhead runtimes. From
                  real-world network simulators to instant asset processors that speed up dev cycles.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5 text-[11px] font-mono text-zinc-500">
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Rust</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Cloudflare Workers</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">CLI Tooling</span>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            SECTION: SELECTED WORK
            ─────────────────────────────────────────────────────────── */}
        <section id="work" className="px-5 sm:px-10 md:px-14 py-14 border-b border-zinc-200">
          <div className="space-y-2 mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Selected Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
              Things I've built & shipped
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Reve */}
            <div className="p-6 sm:p-7 rounded-xl border border-zinc-200 bg-white hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#fde047] text-black font-bold">
                    FOUNDING ENGINEER
                  </span>
                  <a
                    href="https://reve.rsvp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-950 transition-colors inline-flex items-center gap-1 text-xs font-mono"
                  >
                    <span>reve.rsvp</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-zinc-950 mb-2">Reve</h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                  Event network app scaled to 20,000+ users. Led the cross-platform mobile architecture
                  across iOS and Android, built the offline-first SQLite cache, and optimized real-time
                  event synchronization.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-2 text-xs font-mono text-zinc-500">
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Flutter</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">SQLite</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Realtime Sync</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">20k+ Users</span>
              </div>
            </div>

            {/* Fork AI */}
            <div className="p-6 sm:p-7 rounded-xl border border-zinc-200 bg-white hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-800 font-bold">
                    PLATFORM & AI
                  </span>
                  <span className="text-xs font-mono text-zinc-400">In Production</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-950 mb-2">Fork AI</h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                  Creator intelligence and discovery platform. Built automated tax compliance
                  calculation engines, semantic creator search workflows, and structured LLM extraction
                  harnesses for brand-creator matchmaking.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-2 text-xs font-mono text-zinc-500">
                <span className="bg-zinc-100 px-2 py-0.5 rounded">TypeScript</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Next.js</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Semantic Search</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Tax Logic</span>
              </div>
            </div>

            {/* subway-sim */}
            <div className="p-6 sm:p-7 rounded-xl border border-zinc-200 bg-white hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-800 font-bold">
                    RUST CLI
                  </span>
                  <a
                    href="https://github.com/bhavukar/subway-sim.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-950 transition-colors inline-flex items-center gap-1 text-xs font-mono"
                  >
                    <span>code</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-zinc-950 mb-2">subway-sim</h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                  Network throttler and chaos simulator written in Rust. Injects jitter, packet drops,
                  and 3G latency into localhost sockets to test how mobile apps and backend clients
                  behave under poor subway connectivity.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-2 text-xs font-mono text-zinc-500">
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Rust</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Sockets</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Chaos Engineering</span>
              </div>
            </div>

            {/* asset-vibe */}
            <div className="p-6 sm:p-7 rounded-xl border border-zinc-200 bg-white hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-800 font-bold">
                    RUST TOOL
                  </span>
                  <a
                    href="https://github.com/bhavukar/asset-vibe.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-950 transition-colors inline-flex items-center gap-1 text-xs font-mono"
                  >
                    <span>code</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-zinc-950 mb-2">asset-vibe</h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                  Blazing fast mobile asset pipeline written in Rust. Watches design folders to
                  instantly generate 1x, 2x, 3x iOS and Android drawables with strongly typed code
                  references in milliseconds.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-2 text-xs font-mono text-zinc-500">
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Rust</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Image Processing</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Code Generation</span>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            SECTION: STACK / TOOLS (Clean list, zero icons)
            ─────────────────────────────────────────────────────────── */}
        <section className="px-5 sm:px-10 md:px-14 py-14 border-b border-zinc-200">
          <div className="space-y-2 mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Stack & Technologies
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
              What I work with
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2.5">
              <div className="text-xs font-mono font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1.5">
                Languages
              </div>
              <p className="text-xs font-mono text-zinc-600 leading-relaxed">
                Rust, TypeScript, Python, Dart, Go, Java, C++
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="text-xs font-mono font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1.5">
                Frontend & Mobile
              </div>
              <p className="text-xs font-mono text-zinc-600 leading-relaxed">
                Flutter, React 19, Next.js, Tailwind CSS
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="text-xs font-mono font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1.5">
                Backend & Cloud
              </div>
              <p className="text-xs font-mono text-zinc-600 leading-relaxed">
                Cloudflare Workers, Node.js, FastAPI, Docker, GitHub Actions
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="text-xs font-mono font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1.5">
                Data & Storage
              </div>
              <p className="text-xs font-mono text-zinc-600 leading-relaxed">
                PostgreSQL, Redis, SQLite, Firestore
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            SECTION: CONTACT (High-contrast, clean, human)
            ─────────────────────────────────────────────────────────── */}
        <section id="contact" className="px-5 sm:px-10 md:px-14 py-14">
          <div className="rounded-2xl bg-zinc-950 text-white p-7 sm:p-10 border border-zinc-800 shadow-xl space-y-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Open for forward deployed & founding engineer roles</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Let's build together.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Whether you have an interesting product problem, an early-stage venture, or just want
                to chat about systems and software, my inbox is open.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="text-[11px] font-mono text-zinc-500 uppercase">Email</div>
                <div className="text-base font-mono font-bold text-white select-all">
                  bhavuk.arora03@gmail.com
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono font-semibold text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} className="text-[#fde047]" />
                      <span className="text-[#fde047]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href="mailto:bhavuk.arora03@gmail.com"
                  className="px-4 py-2 rounded-lg bg-[#fde047] hover:bg-yellow-300 text-black text-xs font-mono font-bold transition-all flex items-center justify-center gap-1"
                >
                  <span>Mailto</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Social Links & Location */}
            <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/bhavukar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href="https://www.linkedin.com/in/bhavuk-arora-4a7263216/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href="https://www.instagram.com/nobhavuk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Twitter size={15} />
                  <span>@nobhavuk</span>
                </a>
              </div>

              <div>New Delhi, India (IST / UTC+5:30)</div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            FOOTER
            ─────────────────────────────────────────────────────────── */}
        <footer className="border-t border-zinc-200 px-5 sm:px-10 md:px-14 py-6 text-xs font-mono text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Bhavuk Arora.</div>
          <div>Edge-deployed on Cloudflare Workers.</div>
        </footer>
      </div>
    </div>
  );
}
