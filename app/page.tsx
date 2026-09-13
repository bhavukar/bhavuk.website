'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Copy,
  Check,
  Lock,
} from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
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
    company: 'Fork (Blue Fork)',
    location: 'Delhi',
    period: 'May 2026 – Present',
    url: 'https://app.fork.blue',
    displayUrl: 'app.fork.blue',
    embedUrl: 'https://app.fork.blue',
    previewImage: 'https://app.fork.blue/preview_url.png',
    summary:
      'Building an AI-native operating platform for independent talent — creators, artists, musicians, actors, and craftspeople who monetize their audience and work.',
    highlights: [
      'Developing AI agents for discovering commercial opportunities, pricing work, automated contract review, invoicing, and everyday business decisions.',
      'Creating a unified marketplace where talent and brands collaborate and transact directly, replacing fragmented workflows across DMs, spreadsheets, and manual tools.',
      'Architecting end-to-end fullstack platform with TypeScript, Next.js, and structured LLM tool-calling pipelines.'
    ],
    skills: ['TypeScript', 'Next.js', 'AI Agents', 'PostgreSQL', 'Fullstack Architecture']
  },
  {
    id: 'reve',
    role: 'Founding Member – Product & Engineering',
    company: 'Reve',
    location: 'Gurugram, HR',
    period: 'Sep 2024 – Present',
    url: 'https://reve.rsvp',
    displayUrl: 'reve.rsvp',
    embedUrl: 'https://reve.rsvp',
    previewImage:
      'https://assets.reve.rsvp/prod/media/image/f_jpg,q_70,w_1200/webp/v1/static/reve_preview_url.jpg',
    summary:
      'Part of the founding team taking Reve from zero to launch, evolving through multiple pivots into a consumer event app with 25K+ downloads across iOS and Android.',
    highlights: [
      'Shaped core user experiences across product, engineering, and design, taking critical features from early wireframes straight into production.',
      'Engineered cross-platform mobile architecture with Flutter, including offline-first SQLite synchronization and real-time event feeds.',
      'Built and optimized onboarding funnels, viral invite loops, and retention mechanics that drove organic community growth.'
    ],
    skills: ['Flutter', 'SQLite', 'Mobile Architecture', 'Product Design', '25K+ Downloads']
  },
  {
    id: 'mythyaverse',
    role: 'Software Development Engineer',
    company: 'MythyaVerse (VRPlaced & Oncarea)',
    location: 'Noida, UP',
    period: 'Sep 2023 – Aug 2024',
    url: 'https://www.vrplaced.ai',
    displayUrl: 'vrplaced.ai',
    embedUrl: 'https://www.vrplaced.ai',
    previewImage: 'https://www.vrplaced.ai/opengraph-image.png',
    summary:
      'Shipped client and internal production applications across healthcare and AI interview coaching, delivering end-to-end products under strict timelines.',
    highlights: [
      'Built and launched Oncarea and Oncarea Doctor using Flutter in under two months, supporting live video consultations and remote diagnostic workflows.',
      'Engineered VRPlaced, a Next.js platform for 1-on-1 interview practice featuring OpenAI-driven resume customization and live feedback.',
      'Owned full development lifecycle: architecture, client-side testing, automated deployments, and continuous UX iterations.'
    ],
    skills: ['Flutter', 'Next.js', 'OpenAI API', 'Healthcare Systems', 'WebRTC Video']
  },
  {
    id: 'suraasa',
    role: 'Mobile Application Developer',
    company: 'Suraasa',
    location: 'Gurugram, HR',
    period: 'Dec 2022 – Jul 2023',
    url: 'https://www.suraasa.com',
    displayUrl: 'suraasa.com',
    summary:
      'Re-engineered Suraasa’s flagship EdTech application from the ground up in Flutter, replacing legacy native code and scaling to 50K+ downloads.',
    highlights: [
      'Rebuilt core mobile systems including authentication, profile state management, push notification infrastructure, and modular app architecture.',
      'Integrated a custom high-performance video player, learning course workflows, and interactive assessment modules for teachers.',
      'Collaborated closely with product and design teams to refine teacher learning journeys and boost student course completion rates.'
    ],
    skills: ['Flutter', 'Modular Architecture', 'Custom Video Player', '50K+ Downloads'],
    previewFallback: {
      title: 'Suraasa: For Teachers',
      subtitle: 'Global EdTech platform for teacher education and qualification.',
      badge: '50,000+ App Downloads • 4.7 ★',
      details: 'Flutter rebuild of legacy native apps • Custom media player • Modular state'
    }
  },
  {
    id: 'iitd',
    role: 'AR/VR Developer',
    company: 'Indian Institute of Technology, Delhi',
    location: 'New Delhi',
    period: 'Dec 2021 – May 2022',
    url: 'https://home.iitd.ac.in',
    displayUrl: 'iitd.ac.in',
    summary:
      'Researched and built immersive virtual reality experiences and experimental brain-computer interface (BCI) systems.',
    highlights: [
      'Developed interactive VR simulations and games exploring novel human-computer interaction models.',
      'Engineered software pipelines interpreting EEG brain signals and neural spikes to drive real-time device interaction.',
      'Conducted live laboratory demonstrations introducing students and research peers to practical applications of VR and neuro-interfaces.'
    ],
    skills: ['Virtual Reality', 'EEG / Neural Spikes', 'Unity / C#', 'BCI Research'],
    previewFallback: {
      title: 'IIT Delhi — BCI & Neuro Lab',
      subtitle: 'Experimental brain-computer interface research and immersive VR.',
      badge: 'Neural Signal Processing',
      details: 'EEG brain activity decoding • Real-time hardware control • Academic research'
    }
  }
];

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  url: string;
  displayUrl: string;
  embedUrl?: string;
  previewImage?: string;
}

const NOTABLE_PROJECTS: ProjectItem[] = [
  {
    id: 'vrplaced',
    title: 'VRPlaced',
    category: 'AI Platform • Web',
    description:
      '1-on-1 AI interview practice platform with OpenAI-driven resume customization and live feedback scoring, helping candidates prepare for technical and behavioral loops.',
    tech: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
    url: 'https://www.vrplaced.ai',
    displayUrl: 'vrplaced.ai',
    embedUrl: 'https://www.vrplaced.ai',
    previewImage: 'https://www.vrplaced.ai/opengraph-image.png'
  },
  {
    id: 'pakt',
    title: 'Pakt',
    category: 'Community • Realtime Mobile',
    description:
      'Cycling and athletic community platform where riders discover routes, coordinate group rides, and sync up with real-time GPS tracking and live activity feeds.',
    tech: ['Flutter', 'Firebase', 'WebSockets', 'Maps API'],
    url: 'https://getpakt.run',
    displayUrl: 'getpakt.run',
    embedUrl: 'https://getpakt.run',
    previewImage:
      'https://firebasestorage.googleapis.com/v0/b/spilll-be.firebasestorage.app/o/Screenshot%202026-04-01%20at%205.42.40%E2%80%AFAM.png?alt=media&token=8e0ead7e-b389-4aa7-9911-76739638012a'
  },
  {
    id: 'subway-sim',
    title: 'subway-sim',
    category: 'Rust Systems CLI',
    description:
      'System-level network throttler and chaos simulator written in Rust. Injects jitter, packet loss, and flaky 3G latency into localhost sockets to stress-test app resilience.',
    tech: ['Rust', 'Tokio', 'Unix Sockets', 'CLI'],
    url: 'https://github.com/bhavukar/subway-sim.git',
    displayUrl: 'github.com/bhavukar/subway-sim'
  },
  {
    id: 'asset-vibe',
    title: 'asset-vibe',
    category: 'Rust Developer Toolchain',
    description:
      'Automated mobile asset compiler. Watches design directories to instantly generate 1x, 2x, 3x iOS and Android drawables with strongly-typed references in sub-milliseconds.',
    tech: ['Rust', 'ImageRS', 'Rayon', 'File Watcher'],
    url: 'https://github.com/bhavukar/asset-vibe.git',
    displayUrl: 'github.com/bhavukar/asset-vibe'
  },
  {
    id: 'overlay-keeb',
    title: 'overlay_keeb',
    category: 'Native Flutter Plugin',
    description:
      'High-performance Flutter plugin using native Swift and Kotlin method channels to maintain persistent floating UI layers above the system virtual keyboard.',
    tech: ['Dart', 'Swift', 'Kotlin', 'Platform Channels'],
    url: 'https://github.com/bhavukar/overlay_keeb.git',
    displayUrl: 'github.com/bhavukar/overlay_keeb'
  },
  {
    id: 'two-third',
    title: 'Two Third Dimensions',
    category: 'Game Engine & Procedural',
    description:
      'Trap-filled dungeon crawler with custom procedural room generation and lighting. Reached Top 5 Popularity in the BYOG 2021 Game Jam out of 155 global entries.',
    tech: ['Unity', 'C#', 'Custom Shaders', 'Game Jam Winner'],
    url: 'https://github.com/Bhavukarora03/Two-Third-Dimension.git',
    displayUrl: 'github.com/Bhavukarora03/Two-Third-Dimension'
  }
];

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<{
    id: string;
    url: string;
    displayUrl: string;
    embedUrl?: string;
    previewImage?: string;
    fallbackTitle?: string;
    fallbackSubtitle?: string;
    fallbackBadge?: string;
  } | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('bhavuk.arora03@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#fde047] selection:text-black relative">
      {/* ─────────────────────────────────────────────────────────────
          1. MINIMAL STICKY HEADER
          ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-200 shadow-2xs">
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
                Product & Forward Deployed Engineer
              </span>
            </div>
          </a>

          <nav className="flex items-center gap-5 sm:gap-7 text-xs font-mono text-zinc-600">
            <a href="#experience" className="hover:text-zinc-950 transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-zinc-950 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-zinc-950 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-zinc-950 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN CONTAINER WITH 1PX BORDER RAILS
          ───────────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto border-x border-zinc-200 bg-white min-h-screen">
        {/* ───────────────────────────────────────────────────────────
            HERO SECTION
            ─────────────────────────────────────────────────────────── */}
        <section className="px-5 sm:px-10 py-14 border-b border-zinc-200">
          <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.18]">
                Product engineer & founder building{' '}
                <mark className="bg-[#fde047] text-black px-2 py-0.5 inline-block font-bold not-italic">
                  consumer apps
                </mark>{' '}
                and{' '}
                <mark className="bg-[#fde047] text-black px-2 py-0.5 inline-block font-bold not-italic">
                  AI tools
                </mark>
                .
              </h1>

              <p className="text-base text-zinc-600 leading-relaxed">
                I'm Bhavuk, based in Delhi. Over the last 4+ years, I've built and shipped products
                reaching 75K+ total users. Currently building Fork (an operating platform with AI agents
                for independent talent) and founding engineer at Reve (scaled 0 to 25K+ downloads).
                Previously built EdTech at Suraasa (50K+ downloads) and healthtech at MythyaVerse.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#contact"
                  className="bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-xs px-4 py-2.5 rounded-lg shadow-2xs transition-all"
                >
                  Get in touch
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="border border-zinc-300 hover:border-zinc-900 bg-white text-zinc-800 font-mono text-xs px-3.5 py-2 rounded-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={13} className="text-emerald-600" />
                      <span className="text-emerald-600 font-medium">Copied email</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} className="text-zinc-500" />
                      <span>bhavukarora03@gmail.com</span>
                    </>
                  )}
                </button>

                <a
                  href="https://github.com/bhavukar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-zinc-950 font-mono text-xs px-3 py-2 flex items-center gap-1.5 transition-colors"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                  <ArrowUpRight size={12} />
                </a>

                <a
                  href="https://www.linkedin.com/in/bhavuk-arora-4a7263216/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-zinc-950 font-mono text-xs px-3 py-2 flex items-center gap-1.5 transition-colors"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

            <div className="shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
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
            WORK EXPERIENCE (PRIMARY FOCUS FROM RESUME)
            ─────────────────────────────────────────────────────────── */}
        <section id="experience" className="px-5 sm:px-10 py-14 border-b border-zinc-200 relative">
          <div className="space-y-1 mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Work Experience
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
              Where I've worked & what I've shipped
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 font-mono pt-1">
              Hover over any company link to load the live site preview.
            </p>
          </div>

          <div className="space-y-12">
            {EXPERIENCES.map(exp => (
              <div
                key={exp.id}
                className="group relative pb-10 border-b border-zinc-100 last:border-none last:pb-0 transition-all"
              >
                {/* Header Row: Role & Period */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                  <h3 className="text-xl font-bold text-zinc-950">
                    {exp.role}
                  </h3>
                  <div className="text-xs font-mono text-zinc-500">
                    {exp.period}
                  </div>
                </div>

                {/* Company & Location & Live URL trigger */}
                <div className="flex flex-wrap items-center gap-2.5 text-sm mb-3">
                  <span className="font-semibold text-zinc-900">{exp.company}</span>
                  <span className="text-zinc-300">•</span>
                  <span className="text-xs font-mono text-zinc-500">{exp.location}</span>
                  <span className="text-zinc-300">•</span>
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() =>
                      setHoveredItem({
                        id: exp.id,
                        url: exp.url,
                        displayUrl: exp.displayUrl,
                        embedUrl: exp.embedUrl,
                        previewImage: exp.previewImage,
                        fallbackTitle: exp.previewFallback?.title,
                        fallbackSubtitle: exp.previewFallback?.subtitle,
                        fallbackBadge: exp.previewFallback?.badge,
                      })
                    }
                    onMouseLeave={() => setHoveredItem(null)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-zinc-900 hover:text-black underline underline-offset-4 decoration-zinc-400 hover:decoration-black transition-all bg-zinc-50 hover:bg-zinc-100 px-2 py-0.5 rounded"
                  >
                    <span>{exp.displayUrl}</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>

                {/* Summary */}
                <p className="text-sm text-zinc-700 leading-relaxed mb-4 max-w-2xl">
                  {exp.summary}
                </p>

                {/* Bullet Points from Resume */}
                <ul className="space-y-2 mb-4 max-w-2xl">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-xs sm:text-sm text-zinc-600 leading-relaxed flex items-start gap-2.5">
                      <span className="text-zinc-400 select-none mt-1">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Plain skills text */}
                <div className="text-xs font-mono text-zinc-500 pt-1">
                  <span className="text-zinc-400">Stack:</span> {exp.skills.join(' • ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            TECHNICAL SKILLS
            ─────────────────────────────────────────────────────────── */}
        <section id="skills" className="px-5 sm:px-10 py-14 border-b border-zinc-200">
          <div className="space-y-1 mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Technical Skills
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
              Technologies & Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs font-mono">
            <div className="space-y-1.5">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1">
                Languages
              </div>
              <p className="text-zinc-600 leading-relaxed">
                TypeScript, Dart, Java, Swift, Rust, Python, C++
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1">
                Frontend & Mobile
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Flutter, React, Next.js, Tailwind CSS
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1">
                Backend & Services
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Node.js, Spring Boot, Firebase, WebRTC
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1">
                Cloud & Infrastructure
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Cloudflare Workers, Google Cloud Platform, Docker, GitHub Actions
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1">
                Databases
              </div>
              <p className="text-zinc-600 leading-relaxed">
                PostgreSQL, Firestore, MongoDB, ArangoDB, SQLite
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1">
                AI & Design
              </div>
              <p className="text-zinc-600 leading-relaxed">
                OpenAI API, Antigravity, Figma, Adobe Creative Cloud
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            NOTABLE ENGINEERING & PRODUCT PROJECTS
            ─────────────────────────────────────────────────────────── */}
        <section id="projects" className="px-5 sm:px-10 py-14 border-b border-zinc-200">
          <div className="space-y-1 mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Notable Projects
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
              Products, Systems & Open Source
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 font-mono pt-1">
              Hover over live product links to inspect their web windows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NOTABLE_PROJECTS.map(proj => (
              <div
                key={proj.id}
                className="p-6 rounded-xl border border-zinc-200 bg-white hover:border-zinc-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                      {proj.category}
                    </span>
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() =>
                        setHoveredItem({
                          id: proj.id,
                          url: proj.url,
                          displayUrl: proj.displayUrl,
                          embedUrl: proj.embedUrl,
                          previewImage: proj.previewImage,
                        })
                      }
                      onMouseLeave={() => setHoveredItem(null)}
                      className="text-xs font-mono text-zinc-700 hover:text-black font-semibold inline-flex items-center gap-1 underline underline-offset-2 decoration-zinc-300 hover:decoration-black"
                    >
                      <span>{proj.displayUrl}</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-950 mb-2">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 text-xs font-mono text-zinc-500">
                  {proj.tech.join(' • ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            EDUCATION
            ─────────────────────────────────────────────────────────── */}
        <section className="px-5 sm:px-10 py-10 border-b border-zinc-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
            <div>
              <span className="font-bold text-zinc-950">Bachelor of Computer Applications (CGPA: 8.9)</span>
              <span className="text-zinc-500"> — GGSIPU, Vivekananda Institute of Professional Studies</span>
            </div>
            <div className="text-zinc-500">Dec 2020 – Jul 2023 • New Delhi</div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            CONTACT
            ─────────────────────────────────────────────────────────── */}
        <section id="contact" className="px-5 sm:px-10 py-14">
          <div className="rounded-2xl bg-zinc-950 text-white p-6 sm:p-10 border border-zinc-800 space-y-5">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Let's talk.
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Whether you're looking for a founding product engineer, want to discuss forward-deployed
                AI roles, or just want to chat about building consumer products, feel free to reach out.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase">Direct Email</div>
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
                  href="mailto:bhavuk.arora03@gmail.com"
                  className="px-4 py-2 rounded-lg bg-[#fde047] hover:bg-yellow-300 text-black text-xs font-mono font-bold transition-all flex items-center justify-center gap-1"
                >
                  <span>Mailto</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-4">
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
                  href="https://www.instagram.com/nobhavuk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Twitter size={14} />
                  <span>@nobhavuk</span>
                </a>
              </div>

              <div>Rohini, Delhi, India (+91-8708254881)</div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            FOOTER
            ─────────────────────────────────────────────────────────── */}
        <footer className="border-t border-zinc-200 px-5 sm:px-10 py-6 text-xs font-mono text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Bhavuk Arora.</div>
          <div>Edge-deployed on Cloudflare Workers.</div>
        </footer>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          GLOBAL FLOATING MACOS WEBSITE PREVIEW WINDOW
          Loads the real website inside an iframe with real URL in chrome!
          ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="hidden lg:block fixed bottom-8 right-8 z-50 w-[420px] rounded-xl bg-zinc-950 text-white shadow-2xl border border-zinc-700 overflow-hidden pointer-events-auto"
          >
            {/* macOS Browser Header */}
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-zinc-900 border-b border-zinc-800 text-xs font-mono select-none">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>

              {/* Real URL Address Bar */}
              <a
                href={hoveredItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-950 text-[11px] text-zinc-300 border border-zinc-800 hover:border-zinc-600 hover:text-white transition-all max-w-[260px] truncate"
              >
                <Lock size={10} className="text-emerald-400 shrink-0" />
                <span className="truncate">{hoveredItem.url}</span>
              </a>

              <a
                href={hoveredItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                title="Open site in new tab"
              >
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Window Content: Real Iframe / Real Website Content */}
            <div className="relative w-full h-[260px] bg-zinc-900 overflow-hidden">
              {hoveredItem.embedUrl ? (
                <div className="w-full h-full relative overflow-hidden bg-zinc-950">
                  {/* Backdrop Screenshot for zero flicker */}
                  {hoveredItem.previewImage && (
                    <img
                      src={hoveredItem.previewImage}
                      alt={hoveredItem.displayUrl}
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-90"
                    />
                  )}

                  {/* Real Live Iframe View */}
                  <iframe
                    src={hoveredItem.embedUrl}
                    title={hoveredItem.displayUrl}
                    className="absolute inset-0 w-[840px] h-[520px] origin-top-left scale-50 border-0 bg-white"
                    loading="lazy"
                  />

                  {/* Clickable Overlay */}
                  <a
                    href={hoveredItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20 cursor-pointer"
                    title={`Click to open ${hoveredItem.displayUrl}`}
                  />
                </div>
              ) : (
                /* Fallback for same-origin protected sites like Suraasa or IITD */
                <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-br from-zinc-800 to-zinc-950 text-left">
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono text-[#fde047] font-bold uppercase tracking-wider">
                      {hoveredItem.fallbackBadge || 'Official Product'}
                    </div>
                    <div className="text-base font-bold text-white">
                      {hoveredItem.fallbackTitle || hoveredItem.displayUrl}
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {hoveredItem.fallbackSubtitle || 'Visit official website for details.'}
                    </p>
                  </div>
                  <a
                    href={hoveredItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white pt-3 border-t border-zinc-700/80"
                  >
                    <span>Open {hoveredItem.displayUrl}</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
