'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Github,
  Linkedin,
  ArrowUpRight,
  Copy,
  Check,
  FileText,
  Terminal,
} from 'lucide-react';

function XIcon({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function RedditIcon({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-4.466 3.99a.327.327 0 0 0-.231.095.332.332 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
    </svg>
  );
}

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  logo?: string;
  location: string;
  period: string;
  url: string;
  displayUrl: string;
  embedUrl?: string;
  previewImage?: string;
  summary: string;
  highlights: string[];
  skills: string[];
  previewFallback?: {
    title: string;
    subtitle: string;
    badge: string;
    details: string;
  };
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'fork',
    role: 'Founder & CEO',
    company: 'Fork (Bluefork)',
    logo: '/logos/fork.png',
    location: 'Delhi',
    period: 'May 2026 – Present',
    url: 'https://app.fork.blue',
    displayUrl: 'app.fork.blue',
    previewImage: '/fork_preview.png',
    summary:
      'Building the commercial operating system for independent creators, artists, and digital entrepreneurs to monetize their audience and run end-to-end commercial operations.',
    highlights: [
      'Defined company vision, commercial roadmap, and go-to-market strategy, pivoting creator operations from chaotic DMs and spreadsheets into automated deal execution.',
      'Led creator business development and partnerships, directly signing and onboarding 50+ independent talent, digital artists, and creator management agencies.',
      'Architected creator monetization infrastructure with agentic AI pipelines automating deal discovery, brand contract risk audits, dynamic pricing, and cross-border invoicing.',
      'Spearheaded product-led growth and business operations, driving continuous creator retention and high commercial transaction completion.'
    ],
    skills: ['Executive Leadership', 'Creator Monetization', 'Venture Strategy', 'AI Workflows', 'Commercial Infrastructure']
  },
  {
    id: 'reve',
    role: 'Founding Member – Product & Engineering',
    company: 'Reve',
    logo: '/logos/reve.png',
    location: 'Gurugram, HR',
    period: 'Sep 2024 – Present',
    url: 'https://reve.rsvp',
    displayUrl: 'reve.rsvp',
    previewImage: '/reve_preview.jpg',
    summary:
      'Joined as part of the founding team taking Reve from zero to launch, evolving through multiple pivots into a consumer event app with 25,000+ downloads across iOS and Android.',
    highlights: [
      'Owned product engineering end-to-end: wireframes, user journeys, design systems, and the cross-platform Flutter client.',
      'Built the offline-first SQLite sync engine and real-time feed for seamless in-person event check-ins and ticketing.',
      'Designed onboarding funnels and viral invite loops that powered our organic community growth.'
    ],
    skills: ['Flutter', 'SQLite', 'Mobile Architecture', 'Product Design', '25K+ Downloads']
  },
  {
    id: 'mythyaverse',
    role: 'Software Development Engineer',
    company: 'MythyaVerse (VRPlaced & Oncarea)',
    logo: '/logos/mythyaverse.png',
    location: 'Noida, UP',
    period: 'Sep 2023 – Aug 2024',
    url: 'https://www.vrplaced.ai',
    displayUrl: 'vrplaced.ai',
    previewImage: '/vrplaced_preview.jpg',
    summary:
      'Shipped client and internal production applications across healthcare and AI interview coaching, delivering end-to-end products under strict timelines.',
    highlights: [
      'Shipped VRPlaced, an AI interview simulator with real-time feedback scoring and dynamic resume tailoring using Next.js and OpenAI.',
      'Built and launched Oncarea and Oncarea Doctor from scratch in under two months, supporting live video consultations and remote diagnostics.',
      'Owned full development lifecycle: architecture, client-side testing, automated deployments, and continuous UX iterations.'
    ],
    skills: ['Flutter', 'Next.js', 'OpenAI API', 'Healthcare Systems', 'WebRTC Video']
  },
  {
    id: 'suraasa',
    role: 'Software Development Engineer',
    company: 'Suraasa',
    logo: '/logos/suraasa.png',
    location: 'Gurugram, HR',
    period: 'Dec 2022 – Jul 2023',
    url: 'https://www.suraasa.com',
    displayUrl: 'suraasa.com',
    previewImage: '/suraasa_preview.jpg',
    summary:
      'Engineered core mobile software systems and learning infrastructure serving 10 Lakh+ downloads and educators across 50+ international markets.',
    highlights: [
      'Scaled mobile application architecture to support 10 Lakh+ downloads with 99.8% crash-free session reliability.',
      'Architected enterprise mobile software systems in Flutter, delivering offline-first local database synchronization, resilient state management, and real-time push events.',
      'Engineered low-latency video streaming pipelines and custom playback services optimized for low-bandwidth cellular networks.',
      'Collaborated with backend engineering teams to optimize REST APIs and serialization, reducing app startup latency by 35%.'
    ],
    skills: ['Mobile Systems Architecture', 'Flutter & Dart', '10 Lakh+ Downloads', 'Offline Data Sync', 'Performance Optimization'],
  },
  {
    id: 'iitd',
    role: 'AR/VR Developer',
    company: 'Indian Institute of Technology, Delhi',
    logo: '/logos/iitd.svg',
    location: 'New Delhi',
    period: 'Dec 2021 – May 2022',
    url: 'https://home.iitd.ac.in',
    displayUrl: 'iitd.ac.in',
    previewImage: '/iitd_preview.png',
    summary:
      'Researched and built immersive virtual reality experiences and experimental brain-computer interface (BCI) systems.',
    highlights: [
      'Developed interactive VR simulations and games exploring novel human-computer interaction models.',
      'Engineered software pipelines interpreting EEG brain signals and neural spikes to drive real-time device interaction.',
      'Conducted live laboratory demonstrations introducing students and research peers to practical applications of VR and neuro-interfaces.'
    ],
    skills: ['Virtual Reality', 'EEG / Neural Spikes', 'Unity / C#', 'BCI Research'],
  }
];

interface DesignProject {
  id: string;
  title: string;
  category: string;
  tools: string[];
  summary: string;
  coverImage: string;
  videoSrc: string;
  behanceUrl: string;
  badge: string;
}

const DESIGN_PROJECTS: DesignProject[] = [
  {
    id: 'bluefork',
    title: 'Bluefork',
    category: 'Brand Identity & Motion Graphics',
    tools: ['After Effects', 'Motion Design', 'Visual Systems', 'Figma'],
    summary: 'Dynamic brand identity, kinetic motion system, and high-contrast visual direction crafted for the Bluefork creator platform.',
    coverImage: '/behance_bluefork.png',
    videoSrc: '/bluefork_motion.mp4',
    behanceUrl: 'https://www.behance.net/gallery/253324443/Bluefork',
    badge: '0:24 Motion Piece',
  },
  {
    id: 'pulp-ai',
    title: 'Pulp AI',
    category: 'AI Engine Interface & Visual Direction',
    tools: ['After Effects', 'AI UI/UX', 'Motion Direction', 'Branding'],
    summary: "Visual architecture, spectral gradient aesthetics, and generative motion graphics for Fork's native frontier AI agent engine.",
    coverImage: '/behance_pulp_ai.png',
    videoSrc: '/pulp_ai_motion.mp4',
    behanceUrl: 'https://www.behance.net/gallery/253324169/Pulp-AI',
    badge: '0:27 Motion Piece',
  },
  {
    id: 'ace-glitch',
    title: 'ACE Glitch',
    category: 'Kinetic Motion & Glitch Animation',
    tools: ['Adobe After Effects', 'Kinetic Typography', 'Glitch VFX'],
    summary: 'Experimental kinetic glitch animation, audio-reactive frame displacement, and geometric logo deconstruction crafted in After Effects.',
    coverImage: '/behance_ace_glitch.jpg',
    videoSrc: '/ace_glitch.mp4',
    behanceUrl: 'https://www.behance.net/gallery/151738765/ace-glitch',
    badge: '0:10 Motion Piece',
  },
];

interface SubstackPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  url: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  tags: string[];
}

const SUBSTACK_POSTS: SubstackPost[] = [
  {
    id: 'context-engineering',
    slug: 'the-art-of-context-engineering-what',
    title: 'The Art of Context Engineering',
    subtitle: 'What Antigravity, Claude, and Codex teach us about AI memory architecture.',
    url: 'https://bhavuk3.substack.com/p/the-art-of-context-engineering-what',
    date: 'Sep 2026',
    readTime: '4 min read',
    category: 'AI Architecture',
    coverImage: '/substack_context_engineering.jpg',
    tags: ['AI Memory', 'Context Engineering', 'Agentic Systems'],
  },
  {
    id: 'middle-class-creator',
    slug: 'the-death-of-the-middle-class-creator',
    title: 'The Death of the Middle-Class Creator',
    subtitle: 'What actually happened to the creator economy in 2026.',
    url: 'https://bhavuk3.substack.com/p/the-death-of-the-middle-class-creator',
    date: 'Sep 2026',
    readTime: '4 min read',
    category: 'Creator Economy',
    coverImage: '/substack_creator_economy.jpg',
    tags: ['Creator Economy', 'Market Dynamics', 'Synthetic Media'],
  },
  {
    id: 'revenge-of-physical',
    slug: 'the-revenge-of-the-physical-why-touching',
    title: 'The Revenge of the Physical',
    subtitle: 'Why "Touching Grass" became the ultimate luxury in 2026.',
    url: 'https://bhavuk3.substack.com/p/the-revenge-of-the-physical-why-touching',
    date: 'Sep 2026',
    readTime: '4 min read',
    category: 'Culture & Tech',
    coverImage: '/substack_revenge_physical.jpg',
    tags: ['Post-Synthetic', 'Culture', 'Proof of Friction'],
  },
];

const LLM_TEXT_CONTENT = `---
title: "Bhavuk Arora"
role: "Founder & CEO, Product Engineer"
description: "Founder & CEO building consumer products from zero to scale. Over 5+ years of engineering across mobile, agentic AI, and full-stack systems."
canonical: "https://bhavuk.website"
source-index: "https://bhavuk.website/llms.txt"
email: "bhavukarora03@gmail.com"
location: "Delhi, India"
---

# Bhavuk Arora

Founder & CEO building consumer products from zero to scale. Over 5+ years of engineering, I've taken applications from zero to scale across consumer mobile, creator platforms, and edtech (10 Lakh+ downloads at Suraasa, 25K+ at Reve).

## Quick Facts
- Current Role: Founder & CEO at Fork (Bluefork)
- Previous: Founding Member (Product & Eng) at Reve, Software Engineer at MythyaVerse & Suraasa, AR/VR Developer at IIT Delhi
- Core Stacks: Flutter/Dart, React/Next.js, TypeScript, PostgreSQL, SQLite, Cloudflare Workers, OpenAI/Claude APIs
- Direct Contact: bhavukarora03@gmail.com / (+91) 8708254881
- Resume: https://bhavuk.website/bhavuk_arora_resume.pdf

## Work Experience & Track Record

### 1. Fork (Bluefork)
- Role: Founder & CEO
- Period: May 2026 – Present
- Location: Delhi, India
- URL: https://app.fork.blue
- Summary: Building the commercial operating system for independent creators, artists, and digital entrepreneurs to monetize their audience and run end-to-end commercial operations.
- Key Outcomes:
  * Defined company vision, commercial roadmap, and go-to-market strategy, pivoting creator operations from chaotic DMs and spreadsheets into automated deal execution.
  * Led creator business development and partnerships, directly signing and onboarding 50+ independent talent, digital artists, and creator management agencies.
  * Architected creator monetization infrastructure with agentic AI pipelines automating deal discovery, brand contract risk audits, dynamic pricing, and cross-border invoicing.
  * Spearheaded product-led growth and business operations, driving continuous creator retention and high commercial transaction completion.
- Stack: Executive Leadership • Creator Monetization • Venture Strategy • AI Workflows • Commercial Infrastructure

### 2. Reve
- Role: Founding Member – Product & Engineering
- Period: Sep 2024 – Present
- Location: Gurugram, HR, India
- URL: https://reve.rsvp
- Summary: Joined as part of the founding team taking Reve from zero to launch, evolving through multiple pivots into a consumer event app with 25,000+ downloads across iOS and Android.
- Key Outcomes:
  * Owned product engineering end-to-end: wireframes, user journeys, design systems, and the cross-platform Flutter client.
  * Built the offline-first SQLite sync engine and real-time feed for seamless in-person event check-ins and ticketing.
  * Designed onboarding funnels and viral invite loops that powered organic community growth.
- Stack: Flutter • SQLite • Mobile Architecture • Product Design • 25K+ Downloads

### 3. MythyaVerse (VRPlaced & Oncarea)
- Role: Software Development Engineer
- Period: Sep 2023 – Aug 2024
- Location: Noida, UP, India
- URL: https://vrplaced.ai
- Summary: Shipped client and internal production applications across healthcare and AI interview coaching, delivering end-to-end products under strict timelines.
- Key Outcomes:
  * Shipped VRPlaced, an AI interview simulator with real-time feedback scoring and dynamic resume tailoring using Next.js and OpenAI.
  * Built and launched Oncarea and Oncarea Doctor from scratch in under two months, supporting live video consultations and remote diagnostics.
  * Owned full development lifecycle: architecture, client-side testing, automated deployments, and continuous UX iterations.
- Stack: Flutter • Next.js • OpenAI API • Healthcare Systems • WebRTC Video

### 4. Suraasa
- Role: Software Development Engineer
- Period: Dec 2022 – Jul 2023
- Location: Gurugram, HR, India
- URL: https://suraasa.com
- Summary: Engineered core mobile software systems and learning infrastructure serving 10 Lakh+ downloads and educators across 50+ international markets.
- Key Outcomes:
  * Scaled mobile application architecture to support 10 Lakh+ downloads with 99.8% crash-free session reliability.
  * Architected enterprise mobile software systems in Flutter, delivering offline-first local database synchronization, resilient state management, and real-time push events.
  * Engineered low-latency video streaming pipelines and custom playback services optimized for low-bandwidth cellular networks.
  * Collaborated with backend engineering teams to optimize REST APIs and serialization, reducing app startup latency by 35%.
- Stack: Mobile Systems Architecture • Flutter & Dart • 10 Lakh+ Downloads • Offline Data Sync • Performance Optimization

### 5. Indian Institute of Technology, Delhi (IIT Delhi)
- Role: AR/VR Developer
- Period: Dec 2021 – May 2022
- Location: New Delhi, India
- URL: https://iitd.ac.in
- Summary: Researched and built immersive virtual reality experiences and experimental brain-computer interface (BCI) systems.
- Key Outcomes:
  * Developed interactive VR simulations and games exploring novel human-computer interaction models.
  * Engineered software pipelines interpreting EEG brain signals and neural spikes to drive real-time device interaction.
  * Conducted live laboratory demonstrations introducing students and research peers to practical applications of VR and neuro-interfaces.
- Stack: Virtual Reality • EEG / Neural Spikes • Unity / C# • BCI Research

## Motion & Design Systems (Behance)
- Bluefork: Dynamic brand identity, kinetic motion system, and high-contrast visual direction. (https://www.behance.net/gallery/253324443/Bluefork)
- Pulp AI: Visual architecture, spectral gradient aesthetics, and generative motion graphics for Fork's native frontier AI agent engine. (https://www.behance.net/gallery/253324169/Pulp-AI)
- ACE Glitch: Experimental kinetic glitch animation, audio-reactive frame displacement, and geometric logo deconstruction. (https://www.behance.net/gallery/151738765/ACE-Glitch)

## Longform Technical Essays (Substack)
- The Art of Context Engineering: What Antigravity, Claude, and Codex Teach Us About AI Memory. (https://cenosolutio845814.substack.com/p/the-art-of-context-engineering-what)
- The Death of the Middle-Class Creator: What Actually Happened to the Creator Economy in 2026. (https://cenosolutio845814.substack.com/p/the-death-of-the-middle-class-creator)
- The Revenge of the Physical: Why "Touching Grass" Became the Ultimate Luxury in 2026. (https://cenosolutio845814.substack.com/p/the-revenge-of-the-physical-why-touching)

## Technical Stack & Competencies
- Languages: TypeScript, Dart, Java, Swift, Rust, Python, C++
- Frontend & Mobile: Flutter, React, Next.js, Tailwind CSS, React Native, SwiftUI
- Backend & Systems: PostgreSQL, SQLite, Cloudflare Workers, REST APIs, Redis, Node.js
- AI & Agentic Workflows: OpenAI API, Claude / Anthropic, LangChain, Structured Tool-Calling, RAG
- DevOps & Cloud: Git, GitHub Actions, Docker, Cloudflare, Vercel, Supabase
- Creative & Motion: Adobe After Effects, Motion Graphics, Figma, Visual Identity, Kinetic VFX

## Verified Profiles & Links
- Website: https://bhavuk.website
- GitHub: https://github.com/bhavukar
- LinkedIn: https://www.linkedin.com/in/bhavuk-arora-4a7263216/
- X (Twitter): https://x.com/bhavukarora03
- Reddit: https://www.reddit.com/user/bhavuk15
- Substack: https://bhavuk3.substack.com
- Behance: https://www.behance.net/bhavukarora1
- Instagram: https://www.instagram.com/nobhavuk/
- Resume: https://bhavuk.website/bhavuk_arora_resume.pdf
`;

function MachineView({ onCopy, copied }: { onCopy: () => void; copied: boolean }) {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-300 font-mono text-xs sm:text-sm selection:bg-[#fde047] selection:text-black pb-28">
      {/* Top Sticky Bar */}
      <header className="sticky top-0 z-40 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-zinc-800/80 px-4 sm:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-500 text-xs font-mono">bhavuk.website</span>
          <span className="text-zinc-700">/</span>
          <span className="text-[#fde047] font-semibold text-xs">llms.txt</span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400">
            AI AGENT / LLM VIEW
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onCopy}
            className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-mono font-medium flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            {copied ? (
              <>
                <Check size={12} className="text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copy Markdown</span>
              </>
            )}
          </button>

          <a
            href="/llms.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 text-xs font-mono flex items-center gap-1 transition-colors"
          >
            <span>Raw .txt</span>
            <ArrowUpRight size={11} />
          </a>
        </div>
      </header>

      {/* Monospace Document Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
        {/* YAML Frontmatter Block */}
        <div className="rounded-xl bg-zinc-900/50 border border-zinc-800/80 p-4 sm:p-5 text-zinc-400 text-xs sm:text-[13px] leading-relaxed overflow-x-auto space-y-1">
          <div className="text-zinc-600">---</div>
          <div><span className="text-zinc-500">title:</span> <span className="text-white">"Bhavuk Arora"</span></div>
          <div><span className="text-zinc-500">role:</span> <span className="text-white">"Founder & CEO, Product Engineer"</span></div>
          <div><span className="text-zinc-500">description:</span> <span className="text-zinc-300">"Founder & CEO building consumer products from zero to scale. Over 5+ years of engineering across mobile, agentic AI, and full-stack systems."</span></div>
          <div><span className="text-zinc-500">canonical:</span> <a href="https://bhavuk.website" className="text-[#fde047] hover:underline">"https://bhavuk.website"</a></div>
          <div><span className="text-zinc-500">source-index:</span> <a href="/llms.txt" className="text-[#fde047] hover:underline">"https://bhavuk.website/llms.txt"</a></div>
          <div><span className="text-zinc-500">email:</span> <span className="text-white">"bhavukarora03@gmail.com"</span></div>
          <div><span className="text-zinc-500">location:</span> <span className="text-white">"Delhi, India"</span></div>
          <div className="text-zinc-600">---</div>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <span className="text-zinc-600 font-normal">#</span>
            <span>Bhavuk Arora</span>
          </h1>
          <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
            Founder & CEO building <span className="text-[#fde047] font-semibold">consumer products from zero to scale</span>. Over 5+ years of engineering, I've taken applications from zero to scale across consumer mobile, creator platforms, and edtech (10 Lakh+ downloads at Suraasa, 25K+ at Reve).
          </p>
        </div>

        {/* Quick Facts */}
        <div className="space-y-3 pt-2">
          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="text-zinc-600 font-normal">##</span>
            <span>Quick Facts</span>
          </h2>
          <ul className="space-y-1.5 text-zinc-300 pl-2">
            <li><span className="text-zinc-600">- </span><strong className="text-white">Current Role:</strong> Founder & CEO at <a href="https://app.fork.blue" target="_blank" rel="noopener noreferrer" className="text-[#fde047] hover:underline">Fork (Bluefork)</a></li>
            <li><span className="text-zinc-600">- </span><strong className="text-white">Previous:</strong> Founding Member (Product & Eng) at Reve, Software Engineer at MythyaVerse & Suraasa, AR/VR Developer at IIT Delhi</li>
            <li><span className="text-zinc-600">- </span><strong className="text-white">Core Stacks:</strong> Flutter/Dart, React/Next.js, TypeScript, PostgreSQL, SQLite, Cloudflare Workers, OpenAI/Claude APIs</li>
            <li><span className="text-zinc-600">- </span><strong className="text-white">Direct Contact:</strong> <a href="mailto:bhavukarora03@gmail.com" className="text-white underline underline-offset-4">bhavukarora03@gmail.com</a> / (+91) 8708254881</li>
            <li><span className="text-zinc-600">- </span><strong className="text-white">Resume:</strong> <a href="/bhavuk_arora_resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[#fde047] hover:underline">bhavuk_arora_resume.pdf ↗</a></li>
          </ul>
        </div>

        {/* Work Experience */}
        <div className="space-y-6 pt-2">
          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="text-zinc-600 font-normal">##</span>
            <span>Work Experience & Track Record</span>
          </h2>

          {/* 1. Fork */}
          <div className="space-y-2.5 rounded-xl bg-zinc-900/30 border border-zinc-800/80 p-4 sm:p-5">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="text-zinc-600 font-normal">###</span>
              <span>1. Fork (Bluefork)</span>
            </h3>
            <div className="space-y-1 text-zinc-400 pl-2 text-xs">
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Role:</span> <span className="text-white font-semibold">Founder & CEO</span></div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Period:</span> May 2026 – Present</div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Location:</span> Delhi, India</div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">URL:</span> <a href="https://app.fork.blue" target="_blank" rel="noopener noreferrer" className="text-[#fde047] hover:underline">https://app.fork.blue ↗</a></div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Summary:</span> Building the commercial operating system for independent creators, artists, and digital entrepreneurs to monetize their audience and run end-to-end commercial operations.</div>
            </div>
            <div className="pt-2 pl-2 text-xs space-y-1 text-zinc-300">
              <div className="text-zinc-400 font-semibold mb-1">Key Outcomes:</div>
              <div className="pl-3 border-l border-zinc-800 space-y-1.5">
                <div>• Defined company vision, commercial roadmap, and go-to-market strategy, pivoting creator operations from chaotic DMs and spreadsheets into automated deal execution.</div>
                <div>• Led creator business development and partnerships, directly signing and onboarding 50+ independent talent, digital artists, and creator management agencies.</div>
                <div>• Architected creator monetization infrastructure with agentic AI pipelines automating deal discovery, brand contract risk audits, dynamic pricing, and cross-border invoicing.</div>
                <div>• Spearheaded product-led growth and business operations, driving continuous creator retention and high commercial transaction completion.</div>
              </div>
            </div>
            <div className="pt-2 text-[11px] text-zinc-500 font-mono">
              <span className="text-zinc-400 font-semibold">Stack:</span> Executive Leadership • Creator Monetization • Venture Strategy • AI Workflows • Commercial Infrastructure
            </div>
          </div>

          {/* 2. Reve */}
          <div className="space-y-2.5 rounded-xl bg-zinc-900/30 border border-zinc-800/80 p-4 sm:p-5">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="text-zinc-600 font-normal">###</span>
              <span>2. Reve</span>
            </h3>
            <div className="space-y-1 text-zinc-400 pl-2 text-xs">
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Role:</span> <span className="text-white font-semibold">Founding Member – Product & Engineering</span></div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Period:</span> Sep 2024 – Present</div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Location:</span> Gurugram, HR, India</div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">URL:</span> <a href="https://reve.rsvp" target="_blank" rel="noopener noreferrer" className="text-[#fde047] hover:underline">https://reve.rsvp ↗</a></div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Summary:</span> Joined as part of the founding team taking Reve from zero to launch, evolving through multiple pivots into a consumer event app with 25,000+ downloads across iOS and Android.</div>
            </div>
            <div className="pt-2 pl-2 text-xs space-y-1 text-zinc-300">
              <div className="text-zinc-400 font-semibold mb-1">Key Outcomes:</div>
              <div className="pl-3 border-l border-zinc-800 space-y-1.5">
                <div>• Owned product engineering end-to-end: wireframes, user journeys, design systems, and the cross-platform Flutter client.</div>
                <div>• Built the offline-first SQLite sync engine and real-time feed for seamless in-person event check-ins and ticketing.</div>
                <div>• Designed onboarding funnels and viral invite loops that powered organic community growth.</div>
              </div>
            </div>
            <div className="pt-2 text-[11px] text-zinc-500 font-mono">
              <span className="text-zinc-400 font-semibold">Stack:</span> Flutter • SQLite • Mobile Architecture • Product Design • 25K+ Downloads
            </div>
          </div>

          {/* 3. MythyaVerse */}
          <div className="space-y-2.5 rounded-xl bg-zinc-900/30 border border-zinc-800/80 p-4 sm:p-5">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="text-zinc-600 font-normal">###</span>
              <span>3. MythyaVerse (VRPlaced & Oncarea)</span>
            </h3>
            <div className="space-y-1 text-zinc-400 pl-2 text-xs">
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Role:</span> <span className="text-white font-semibold">Software Development Engineer</span></div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Period:</span> Sep 2023 – Aug 2024</div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Location:</span> Noida, UP, India</div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">URL:</span> <a href="https://vrplaced.ai" target="_blank" rel="noopener noreferrer" className="text-[#fde047] hover:underline">https://vrplaced.ai ↗</a></div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Summary:</span> Shipped client and internal production applications across healthcare and AI interview coaching, delivering end-to-end products under strict timelines.</div>
            </div>
            <div className="pt-2 pl-2 text-xs space-y-1 text-zinc-300">
              <div className="text-zinc-400 font-semibold mb-1">Key Outcomes:</div>
              <div className="pl-3 border-l border-zinc-800 space-y-1.5">
                <div>• Shipped VRPlaced, an AI interview simulator with real-time feedback scoring and dynamic resume tailoring using Next.js and OpenAI.</div>
                <div>• Built and launched Oncarea and Oncarea Doctor from scratch in under two months, supporting live video consultations and remote diagnostics.</div>
                <div>• Owned full development lifecycle: architecture, client-side testing, automated deployments, and continuous UX iterations.</div>
              </div>
            </div>
            <div className="pt-2 text-[11px] text-zinc-500 font-mono">
              <span className="text-zinc-400 font-semibold">Stack:</span> Flutter • Next.js • OpenAI API • Healthcare Systems • WebRTC Video
            </div>
          </div>

          {/* 4. Suraasa */}
          <div className="space-y-2.5 rounded-xl bg-zinc-900/30 border border-zinc-800/80 p-4 sm:p-5">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="text-zinc-600 font-normal">###</span>
              <span>4. Suraasa</span>
            </h3>
            <div className="space-y-1 text-zinc-400 pl-2 text-xs">
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Role:</span> <span className="text-white font-semibold">Software Development Engineer</span></div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Period:</span> Dec 2022 – Jul 2023</div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Location:</span> Gurugram, HR, India</div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">URL:</span> <a href="https://suraasa.com" target="_blank" rel="noopener noreferrer" className="text-[#fde047] hover:underline">https://suraasa.com ↗</a></div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Summary:</span> Engineered core mobile software systems and learning infrastructure serving 10 Lakh+ downloads and educators across 50+ international markets.</div>
            </div>
            <div className="pt-2 pl-2 text-xs space-y-1 text-zinc-300">
              <div className="text-zinc-400 font-semibold mb-1">Key Outcomes:</div>
              <div className="pl-3 border-l border-zinc-800 space-y-1.5">
                <div>• Scaled mobile application architecture to support 10 Lakh+ downloads with 99.8% crash-free session reliability.</div>
                <div>• Architected enterprise mobile software systems in Flutter, delivering offline-first local database synchronization, resilient state management, and real-time push events.</div>
                <div>• Engineered low-latency video streaming pipelines and custom playback services optimized for low-bandwidth cellular networks.</div>
                <div>• Collaborated with backend engineering teams to optimize REST APIs and serialization, reducing app startup latency by 35%.</div>
              </div>
            </div>
            <div className="pt-2 text-[11px] text-zinc-500 font-mono">
              <span className="text-zinc-400 font-semibold">Stack:</span> Mobile Systems Architecture • Flutter & Dart • 10 Lakh+ Downloads • Offline Data Sync • Performance Optimization
            </div>
          </div>

          {/* 5. IIT Delhi */}
          <div className="space-y-2.5 rounded-xl bg-zinc-900/30 border border-zinc-800/80 p-4 sm:p-5">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="text-zinc-600 font-normal">###</span>
              <span>5. Indian Institute of Technology, Delhi (IIT Delhi)</span>
            </h3>
            <div className="space-y-1 text-zinc-400 pl-2 text-xs">
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Role:</span> <span className="text-white font-semibold">AR/VR Developer</span></div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Period:</span> Dec 2021 – May 2022</div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Location:</span> New Delhi, India</div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">URL:</span> <a href="https://iitd.ac.in" target="_blank" rel="noopener noreferrer" className="text-[#fde047] hover:underline">https://iitd.ac.in ↗</a></div>
              <div><span className="text-zinc-600">- </span><span className="text-zinc-300">Summary:</span> Researched and built immersive virtual reality experiences and experimental brain-computer interface (BCI) systems.</div>
            </div>
            <div className="pt-2 pl-2 text-xs space-y-1 text-zinc-300">
              <div className="text-zinc-400 font-semibold mb-1">Key Outcomes:</div>
              <div className="pl-3 border-l border-zinc-800 space-y-1.5">
                <div>• Developed interactive VR simulations and games exploring novel human-computer interaction models.</div>
                <div>• Engineered software pipelines interpreting EEG brain signals and neural spikes to drive real-time device interaction.</div>
                <div>• Conducted live laboratory demonstrations introducing students and research peers to practical applications of VR and neuro-interfaces.</div>
              </div>
            </div>
            <div className="pt-2 text-[11px] text-zinc-500 font-mono">
              <span className="text-zinc-400 font-semibold">Stack:</span> Virtual Reality • EEG / Neural Spikes • Unity / C# • BCI Research
            </div>
          </div>
        </div>

        {/* Motion & Design Systems */}
        <div className="space-y-3 pt-2">
          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="text-zinc-600 font-normal">##</span>
            <span>Motion & Design Systems (Behance)</span>
          </h2>
          <ul className="space-y-2 text-zinc-300 pl-2 text-xs sm:text-sm">
            <li>
              <span className="text-zinc-600">- </span>
              <a href="https://www.behance.net/gallery/253324443/Bluefork" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-[#fde047] underline underline-offset-4">Bluefork</a>:
              <span className="text-zinc-400"> Dynamic brand identity, kinetic motion system, and high-contrast visual direction.</span>
            </li>
            <li>
              <span className="text-zinc-600">- </span>
              <a href="https://www.behance.net/gallery/253324169/Pulp-AI" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-[#fde047] underline underline-offset-4">Pulp AI</a>:
              <span className="text-zinc-400"> Visual architecture, spectral gradient aesthetics, and generative motion graphics for Fork's native frontier AI agent engine.</span>
            </li>
            <li>
              <span className="text-zinc-600">- </span>
              <a href="https://www.behance.net/gallery/151738765/ACE-Glitch" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-[#fde047] underline underline-offset-4">ACE Glitch</a>:
              <span className="text-zinc-400"> Experimental kinetic glitch animation, audio-reactive frame displacement, and geometric logo deconstruction.</span>
            </li>
          </ul>
        </div>

        {/* Technical Essays */}
        <div className="space-y-3 pt-2">
          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="text-zinc-600 font-normal">##</span>
            <span>Longform Technical Essays (Substack)</span>
          </h2>
          <ul className="space-y-2 text-zinc-300 pl-2 text-xs sm:text-sm">
            <li>
              <span className="text-zinc-600">- </span>
              <a href="https://cenosolutio845814.substack.com/p/the-art-of-context-engineering-what" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-[#fde047] underline underline-offset-4">The Art of Context Engineering</a>:
              <span className="text-zinc-400"> What Antigravity, Claude, and Codex Teach Us About AI Memory. An architectural essay on context window economy and prompt routing.</span>
            </li>
            <li>
              <span className="text-zinc-600">- </span>
              <a href="https://cenosolutio845814.substack.com/p/the-death-of-the-middle-class-creator" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-[#fde047] underline underline-offset-4">The Death of the Middle-Class Creator</a>:
              <span className="text-zinc-400"> What Actually Happened to the Creator Economy in 2026. An economic analysis of zero-cost content generation and creator operator tooling.</span>
            </li>
            <li>
              <span className="text-zinc-600">- </span>
              <a href="https://cenosolutio845814.substack.com/p/the-revenge-of-the-physical-why-touching" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-[#fde047] underline underline-offset-4">The Revenge of the Physical</a>:
              <span className="text-zinc-400"> Why "Touching Grass" Became the Ultimate Luxury in 2026. A cultural critique of hyper-synthetic digital feeds and proof of physical friction.</span>
            </li>
          </ul>
        </div>

        {/* Technical Stack */}
        <div className="space-y-3 pt-2">
          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="text-zinc-600 font-normal">##</span>
            <span>Technical Stack & Competencies</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="rounded-lg bg-zinc-900/40 border border-zinc-800 p-3 space-y-1">
              <div className="text-white font-semibold">Languages</div>
              <div className="text-zinc-400">TypeScript, Dart, Java, Swift, Rust, Python, C++</div>
            </div>
            <div className="rounded-lg bg-zinc-900/40 border border-zinc-800 p-3 space-y-1">
              <div className="text-white font-semibold">Frontend & Mobile</div>
              <div className="text-zinc-400">Flutter, React, Next.js, Tailwind CSS, React Native, SwiftUI</div>
            </div>
            <div className="rounded-lg bg-zinc-900/40 border border-zinc-800 p-3 space-y-1">
              <div className="text-white font-semibold">Backend & Systems</div>
              <div className="text-zinc-400">PostgreSQL, SQLite, Cloudflare Workers, REST APIs, Redis, Node.js</div>
            </div>
            <div className="rounded-lg bg-zinc-900/40 border border-zinc-800 p-3 space-y-1">
              <div className="text-white font-semibold">AI & Agentic Workflows</div>
              <div className="text-zinc-400">OpenAI API, Claude / Anthropic, LangChain, Structured Tool-Calling, RAG</div>
            </div>
            <div className="rounded-lg bg-zinc-900/40 border border-zinc-800 p-3 space-y-1">
              <div className="text-white font-semibold">DevOps & Cloud</div>
              <div className="text-zinc-400">Git, GitHub Actions, Docker, Cloudflare, Vercel, Supabase</div>
            </div>
            <div className="rounded-lg bg-zinc-900/40 border border-zinc-800 p-3 space-y-1">
              <div className="text-white font-semibold">Creative & Motion</div>
              <div className="text-zinc-400">Adobe After Effects, Motion Graphics, Figma, Visual Identity, Kinetic VFX</div>
            </div>
          </div>
        </div>

        {/* Verified Channels */}
        <div className="space-y-3 pt-2">
          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="text-zinc-600 font-normal">##</span>
            <span>Verified Channels & Contact</span>
          </h2>
          <ul className="space-y-1 text-zinc-300 pl-2 text-xs">
            <li><span className="text-zinc-600">- </span><strong className="text-white">Email:</strong> <a href="mailto:bhavukarora03@gmail.com" className="text-white underline underline-offset-4">bhavukarora03@gmail.com</a></li>
            <li><span className="text-zinc-600">- </span><strong className="text-white">GitHub:</strong> <a href="https://github.com/bhavukar" target="_blank" rel="noopener noreferrer" className="text-[#fde047] hover:underline">https://github.com/bhavukar ↗</a></li>
            <li><span className="text-zinc-600">- </span><strong className="text-white">LinkedIn:</strong> <a href="https://www.linkedin.com/in/bhavuk-arora-4a7263216/" target="_blank" rel="noopener noreferrer" className="text-[#fde047] hover:underline">https://www.linkedin.com/in/bhavuk-arora-4a7263216/ ↗</a></li>
            <li><span className="text-zinc-600">- </span><strong className="text-white">X:</strong> <a href="https://x.com/bhavukarora03" target="_blank" rel="noopener noreferrer" className="text-[#fde047] hover:underline">https://x.com/bhavukarora03 ↗</a></li>
            <li><span className="text-zinc-600">- </span><strong className="text-white">Reddit:</strong> <a href="https://www.reddit.com/user/bhavuk15" target="_blank" rel="noopener noreferrer" className="text-[#fde047] hover:underline">https://www.reddit.com/user/bhavuk15 ↗</a></li>
            <li><span className="text-zinc-600">- </span><strong className="text-white">Substack:</strong> <a href="https://bhavuk3.substack.com" target="_blank" rel="noopener noreferrer" className="text-[#fde047] hover:underline">https://bhavuk3.substack.com ↗</a></li>
            <li><span className="text-zinc-600">- </span><strong className="text-white">Behance:</strong> <a href="https://www.behance.net/bhavukarora1" target="_blank" rel="noopener noreferrer" className="text-[#fde047] hover:underline">https://www.behance.net/bhavukarora1 ↗</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default function Home() {
  const [mode, setMode] = useState<'human' | 'machine'>('human');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMachineText, setCopiedMachineText] = useState(false);
  const [hoveredExpId, setHoveredExpId] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Sync with URL query parameter (?mode=machine or #machine)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('mode') === 'machine' || window.location.hash === '#machine') {
        setMode('machine');
      }
    }
  }, []);

  // Keyboard shortcut: Press M to toggle mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'm' || e.key === 'M') {
        setMode((prev) => (prev === 'human' ? 'machine' : 'human'));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Cleanup hover timer on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (id: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredExpId(id);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredExpId(null);
    }, 120);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('bhavukarora03@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyMachineText = () => {
    navigator.clipboard.writeText(LLM_TEXT_CONTENT);
    setCopiedMachineText(true);
    setTimeout(() => setCopiedMachineText(false), 2000);
  };

  return (
    <>
      {mode === 'machine' ? (
        <MachineView onCopy={handleCopyMachineText} copied={copiedMachineText} />
      ) : (
        <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#fde047] selection:text-black relative">
      {/* ─────────────────────────────────────────────────────────────
          1. MINIMAL STICKY HEADER
          ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 h-14 sm:h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-zinc-200 shadow-2xs group-hover:scale-105 transition-transform flex-shrink-0">
              <img
                src="/profile.jpeg"
                alt="Bhavuk Arora"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-zinc-950 tracking-tight leading-tight">
                <span className="sm:hidden">Bhavuk</span>
                <span className="hidden sm:inline">Bhavuk Arora</span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-zinc-500 font-mono hidden sm:inline leading-none mt-0.5">
                Founder & CEO · Bluefork
              </span>
            </div>
          </a>

          <div className="flex items-center flex-shrink-0">
            <nav className="flex items-center gap-2.5 sm:gap-6 text-[11px] sm:text-xs font-mono text-zinc-600">
              <a href="#experience" className="hover:text-zinc-950 transition-colors">
                Work
              </a>
              <a href="#craft" className="hover:text-zinc-950 transition-colors">
                Craft
              </a>
              <a href="#writing" className="hover:text-zinc-950 transition-colors">
                Writing
              </a>
              <a href="#skills" className="hidden md:inline hover:text-zinc-950 transition-colors">
                Skills
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
                <Github size={13} />
                <span className="hidden md:inline">GitHub</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN CONTAINER WITH CLEAN BORDERS
          ───────────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto border-x-0 sm:border-x border-zinc-200 bg-white min-h-screen">
        {/* ───────────────────────────────────────────────────────────
            HERO SECTION (Clean, Responsive Editorial)
            ─────────────────────────────────────────────────────────── */}
        <section
          id="hero"
          className="px-4 sm:px-10 py-10 sm:py-16 md:py-20 border-b border-zinc-200"
        >
          <div className="space-y-4 sm:space-y-6 max-w-3xl">
            {/* Experience status bar */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs font-mono text-zinc-500">
              <span className="font-bold text-zinc-950 tracking-wider">FOUNDER & CEO · BLUEFORK</span>
              <span className="text-zinc-300">•</span>
              <span>5+ YEARS EXPERIENCE</span>
              <span className="text-zinc-300">•</span>
              <span>DELHI · REMOTE</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 leading-[1.25] sm:leading-[1.22] max-w-2xl">
              Founder & CEO building{' '}
              <span className="bg-[#fde047] text-black px-1.5 sm:px-2 py-0.5 rounded-sm">
                consumer
              </span>{' '}
              <span className="bg-[#fde047] text-black px-1.5 sm:px-2 py-0.5 rounded-sm">
                products
              </span>{' '}
              from{' '}
              <span className="bg-[#fde047] text-black px-1.5 sm:px-2 py-0.5 rounded-sm">
                zero to scale
              </span>
              .
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xl">
              Founder & CEO of <strong>Bluefork</strong>, building the commercial operating system
              for independent creators and digital entrepreneurs. Over 5+ years of engineering,
              I've taken applications from zero to scale across consumer mobile and edtech platforms
              (10 Lakh+ downloads at Suraasa, 25K+ at Reve).
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
              <a
                href="#contact"
                className="bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-xs px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-2xs transition-all hover:translate-y-[-1px] shrink-0"
              >
                Get in touch
              </a>

              <a
                href="/bhavuk_arora_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-300 hover:border-zinc-900 bg-white text-zinc-800 font-mono text-xs px-3 sm:px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer hover:translate-y-[-1px] shrink-0"
              >
                <FileText size={13} className="text-zinc-500" />
                <span>Resume</span>
                <ArrowUpRight size={12} />
              </a>

              <button
                onClick={handleCopyEmail}
                className="border border-zinc-300 hover:border-zinc-900 bg-white text-zinc-800 font-mono text-xs px-3 sm:px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer hover:translate-y-[-1px] shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <Check size={13} className="text-emerald-600" />
                    <span className="text-emerald-600 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} className="text-zinc-500" />
                    <span className="hidden sm:inline">bhavukarora03@gmail.com</span>
                    <span className="sm:hidden">Copy email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            WORK EXPERIENCE (THE PRIMARY CENTERPIECE)
            ─────────────────────────────────────────────────────────── */}
        <section id="experience" className="px-4 sm:px-10 py-12 sm:py-16 border-b border-zinc-200 relative">
          <div className="space-y-1 mb-8 sm:mb-12">
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-500">
              Work Experience
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
              Where I've worked
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 font-mono pt-1">
              <span className="hidden md:inline">Hover over any company link for a live preview.</span>
              <span className="md:hidden">Tap company links to view live products.</span>
            </p>
          </div>

          <div className="space-y-10 sm:space-y-14">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={exp.id}
                className="group relative pb-10 sm:pb-12 border-b border-zinc-100 last:border-none last:pb-0 transition-all"
              >
                {/* Role & Period */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1 sm:mb-1.5">
                  <h3 className="text-base sm:text-xl font-bold text-zinc-950 group-hover:text-black transition-colors leading-snug">
                    {exp.role}
                  </h3>
                  <div className="text-[11px] sm:text-xs font-mono text-zinc-500 shrink-0">
                    {exp.period}
                  </div>
                </div>

                {/* Company & Location & Live Link */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm mb-3 sm:mb-4">
                  <span
                    onMouseEnter={() => handleMouseEnter(exp.id)}
                    onMouseLeave={handleMouseLeave}
                    className="font-semibold text-zinc-900 cursor-pointer hover:text-black transition-colors inline-flex items-center gap-1.5"
                  >
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded object-contain shrink-0 border border-zinc-200/80 p-[1px] bg-white shadow-2xs"
                      />
                    )}
                    <span>{exp.company}</span>
                  </span>
                      <span className="text-zinc-300">•</span>
                      <span className="text-[11px] sm:text-xs font-mono text-zinc-500">{exp.location}</span>
                      <span className="text-zinc-300">•</span>

                      {/* Relative Anchor Container for Link & Popover Preview */}
                      <div className="relative inline-flex items-center">
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => handleMouseEnter(exp.id)}
                          onMouseLeave={handleMouseLeave}
                          className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-mono font-semibold text-zinc-900 hover:text-black underline underline-offset-4 decoration-zinc-400 hover:decoration-black transition-all bg-zinc-50 hover:bg-zinc-100 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded"
                        >
                          <span>{exp.displayUrl}</span>
                          <ArrowUpRight size={11} className="sm:size-3" />
                        </a>

                        {/* Popover Preview Card anchored directly above the link (desktop only) */}
                        <div
                          onMouseEnter={() => handleMouseEnter(exp.id)}
                          onMouseLeave={handleMouseLeave}
                          className={`hidden md:block absolute bottom-full left-0 mb-3 w-[330px] rounded-xl bg-zinc-950 p-2 shadow-2xl border border-zinc-800 transition-all duration-200 ease-out origin-bottom-left z-50 pointer-events-auto ${
                            hoveredExpId === exp.id
                              ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                              : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
                          }`}
                        >
                          {/* Visual Viewport */}
                          <div className="w-full h-[195px] rounded-lg overflow-hidden relative bg-zinc-900 border border-zinc-800/80">
                            {exp.previewImage && (
                              <img
                                src={exp.previewImage}
                                alt={exp.displayUrl}
                                className="absolute inset-0 w-full h-full object-cover object-top"
                              />
                            )}
                            {/* Clickable Overlay */}
                            <a
                              href={exp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute inset-0 z-20 cursor-pointer"
                              title={`Open ${exp.displayUrl}`}
                            />
                          </div>

                          {/* URL Footer */}
                          <div className="flex items-center justify-between px-2 pt-2 pb-0.5 text-[11px] font-mono">
                            <div className="flex items-center gap-1.5 truncate max-w-[220px]">
                              {exp.logo && (
                                <img src={exp.logo} alt="" className="w-3.5 h-3.5 rounded object-contain shrink-0" />
                              )}
                              <span className="text-zinc-300 truncate">{exp.displayUrl}</span>
                            </div>
                            <span className="text-[#fde047] font-semibold text-[10px] flex items-center gap-0.5">
                              <span>Open</span>
                              <ArrowUpRight size={11} />
                            </span>
                          </div>

                          {/* Notch pointing directly down to the link */}
                          <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-zinc-950 border-r border-b border-zinc-800 rotate-45" />
                        </div>
                      </div>
                    </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed mb-3 sm:mb-4 max-w-2xl">
                  {exp.summary}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5 max-w-2xl">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-xs sm:text-sm text-zinc-600 leading-relaxed flex items-start gap-2 sm:gap-2.5">
                      <span className="text-zinc-400 select-none mt-0.5 sm:mt-1">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Plain skills text */}
                <div className="text-[11px] sm:text-xs font-mono text-zinc-500 pt-1 leading-normal">
                  <span className="text-zinc-400">Stack:</span> {exp.skills.join(' • ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            DESIGN & MOTION CRAFT (BEHANCE SHOWCASE)
            ─────────────────────────────────────────────────────────── */}
        <section
          id="craft"
          className="px-4 sm:px-10 py-12 sm:py-16 border-b border-zinc-200"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div className="space-y-1">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-500">
                Creative Direction
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
                Design & Motion Craft
              </h2>
            </div>
            <a
              href="https://www.behance.net/bhavukarora1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 hover:text-zinc-950 transition-colors group"
            >
              <span>View Behance gallery</span>
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {DESIGN_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group border border-zinc-200 hover:border-zinc-300 rounded-xl overflow-hidden bg-white hover:bg-zinc-50/40 transition-all shadow-2xs hover:shadow-md flex flex-col"
              >
                {/* Visual / Motion Player Container */}
                <div className="relative aspect-video bg-zinc-950 overflow-hidden">
                  <video
                    src={project.videoSrc}
                    poster={project.coverImage}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

                  {/* Badges on Video */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/10">
                      {project.badge}
                    </span>
                  </div>

                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-white/90 hover:bg-white text-zinc-900 text-[10px] font-mono font-medium flex items-center gap-0.5 shadow-sm transition-transform hover:scale-105"
                  >
                    <span>Behance</span>
                    <ArrowUpRight size={10} />
                  </a>
                </div>

                {/* Card Info */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="mb-1.5">
                      <h3 className="text-base font-bold text-zinc-950 group-hover:text-blue-600 transition-colors">
                        <a
                          href={project.behanceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-1"
                        >
                          <span>{project.title}</span>
                          <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-blue-600 transition-colors" />
                        </a>
                      </h3>
                    </div>

                    <div className="text-xs font-mono text-zinc-500 mb-2">
                      {project.category}
                    </div>

                    <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tool chips */}
                  <div className="pt-3 border-t border-zinc-100 flex flex-wrap gap-1.5">
                    {project.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 text-[10px] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Context note linking to Behance */}
          <div className="mt-6 pt-5 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-zinc-500">
            <div>
              Motion graphics, audio-reactive glitch VFX, and visual identity crafted in Adobe After Effects.
            </div>
            <a
              href="https://www.behance.net/bhavukarora1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-zinc-950 font-semibold inline-flex items-center gap-1 transition-colors"
            >
              <span>behance.net/bhavukarora1</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            WRITING & ESSAYS (SUBSTACK SHOWCASE)
            ─────────────────────────────────────────────────────────── */}
        <section
          id="writing"
          className="px-4 sm:px-10 py-12 sm:py-16 border-b border-zinc-200"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="space-y-1">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-500">
                Longform & Essays
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
                Writing
              </h2>
            </div>
            <a
              href="https://bhavuk3.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 hover:text-zinc-950 transition-colors group"
            >
              <span>Read on Substack</span>
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* 3 Essay Cards Grid (Clean 4:5 Visual Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {SUBSTACK_POSTS.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col hover:-translate-y-1"
              >
                {/* Visual Canvas (Substack Share Card, 4:5 ratio) */}
                <div className="aspect-[4/5] relative overflow-hidden bg-zinc-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />

                  {/* Read on Substack pill */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-zinc-950 text-[10px] font-mono font-medium flex items-center gap-0.5 shadow-sm transition-transform group-hover:scale-105">
                    <span>Read</span>
                    <ArrowUpRight size={10} />
                  </div>
                </div>

                {/* Minimal Card Footer */}
                <div className="px-4 py-3 bg-white border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                  <span className="font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                    {post.category}
                  </span>
                  <span className="text-zinc-400">
                    {post.readTime}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Context note linking to Substack */}
          <div className="mt-6 pt-5 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-zinc-500">
            <div>
              Essays exploring AI memory architecture, creator market dynamics, and post-synthetic culture.
            </div>
            <a
              href="https://bhavuk3.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-zinc-950 font-semibold inline-flex items-center gap-1 transition-colors"
            >
              <span>bhavuk3.substack.com</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            TECHNICAL SKILLS
            ─────────────────────────────────────────────────────────── */}
        <section
          id="skills"
          className="px-4 sm:px-10 py-12 sm:py-16 border-b border-zinc-200"
        >
          <div className="space-y-1 mb-8 sm:mb-10">
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-500">
              Technical Skills
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
              Technologies & Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-xs font-mono">
            <div className="space-y-2">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1 sm:pb-1.5">
                Languages
              </div>
              <p className="text-zinc-600 leading-relaxed">
                TypeScript, Dart, Java, Swift, Rust, Python, C++
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1 sm:pb-1.5">
                Frontend & Mobile
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Flutter, React, Next.js, Tailwind CSS
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1 sm:pb-1.5">
                Backend & Systems
              </div>
              <p className="text-zinc-600 leading-relaxed">
                PostgreSQL, SQLite, Cloudflare Workers, REST APIs, Redis
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1 sm:pb-1.5">
                AI & Agentic Workflows
              </div>
              <p className="text-zinc-600 leading-relaxed">
                OpenAI API, Claude / Anthropic, LangChain, Structured Tool-Calling, RAG
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1 sm:pb-1.5">
                DevOps & Cloud
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Git, GitHub Actions, Docker, Cloudflare, Vercel, Supabase
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1 sm:pb-1.5">
                Domain Specialization
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Creator Economy, High-concurrency Mobile, AR/VR, HealthTech
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1 sm:pb-1.5">
                Creative & Motion
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Adobe After Effects, Motion Graphics, Figma, Visual Identity, Kinetic VFX
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            CONTACT & INVITATION SECTION
            ─────────────────────────────────────────────────────────── */}
        <section
          id="contact"
          className="px-4 sm:px-10 py-12 sm:py-16"
        >
          <div className="rounded-2xl bg-zinc-950 text-white p-5 sm:p-8 md:p-10 border border-zinc-800 space-y-5 sm:space-y-6 shadow-xl">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Let's build something.
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Open to founding product engineering roles, forward-deployed positions, or high-impact
                contract work. Whether you have an early-stage venture or just want to chat software,
                my inbox is open.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="w-full sm:w-auto">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Direct Email</div>
                <div className="text-sm sm:text-base font-mono font-bold text-white select-all break-all">
                  bhavukarora03@gmail.com
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 sm:flex-initial px-3 sm:px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono font-semibold text-white transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer hover:translate-y-[-1px]"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={13} className="text-[#fde047]" />
                      <span className="text-[#fde047]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href="mailto:bhavukarora03@gmail.com"
                  className="px-3.5 sm:px-4 py-2 rounded-lg bg-[#fde047] hover:bg-yellow-300 text-black text-xs font-mono font-bold transition-all flex items-center justify-center gap-1 hover:translate-y-[-1px]"
                >
                  <span>Mailto</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-zinc-400">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="https://github.com/bhavukar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href="https://www.linkedin.com/in/bhavuk-arora-4a7263216/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href="https://x.com/bhavukarora03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <XIcon size={13} />
                  <span>@bhavukarora03</span>
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href="https://www.reddit.com/user/bhavuk15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <RedditIcon size={14} />
                  <span>u/bhavuk15</span>
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href="https://bhavuk3.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Substack</span>
                  <ArrowUpRight size={12} />
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href="https://www.behance.net/bhavukarora1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Behance</span>
                  <ArrowUpRight size={12} />
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href="https://www.instagram.com/nobhavuk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>

              <div className="text-[11px] sm:text-xs text-zinc-500">Rohini, Delhi, India (+91-8708254881)</div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            FOOTER (Clean & Simple)
            ─────────────────────────────────────────────────────────── */}
        <footer className="border-t border-zinc-200 px-4 sm:px-10 py-5 sm:py-6 text-xs font-mono text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center sm:text-left">
          <div>© {new Date().getFullYear()} Bhavuk Arora — Founder & CEO, Bluefork.</div>
          <div>Delhi, India.</div>
        </footer>
      </div>
    </div>
  )}

      {/* ─────────────────────────────────────────────────────────────
          FLOATING "HUMAN / MACHINE" TOGGLE PILL
          ───────────────────────────────────────────────────────────── */}
      <aside aria-label="View Mode Switcher" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-[#121214]/95 border border-zinc-800 shadow-2xl backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-3.5 select-none">
          <button
            onClick={() => {
              setMode('human');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className={`flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider transition-colors cursor-pointer ${
              mode === 'human' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                mode === 'human' ? 'bg-white' : 'border border-zinc-500'
              }`}
            />
            <span>HUMAN</span>
          </button>

          <span className="text-zinc-700 text-xs font-mono">•</span>

          <button
            onClick={() => {
              setMode('machine');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className={`flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider transition-colors cursor-pointer ${
              mode === 'machine' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                mode === 'machine' ? 'bg-white' : 'border border-zinc-500'
              }`}
            />
            <span>MACHINE</span>
          </button>
        </div>
      </aside>
    </>
  );
}
