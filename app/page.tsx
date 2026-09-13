'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
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
    location: 'Gurugram, HR',
    period: 'Sep 2024 – Present',
    url: 'https://reve.rsvp',
    displayUrl: 'reve.rsvp',
    embedUrl: 'https://reve.rsvp',
    previewImage:
      'https://assets.reve.rsvp/prod/media/image/f_jpg,q_70,w_1200/webp/v1/static/reve_preview_url.jpg',
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
    location: 'Noida, UP',
    period: 'Sep 2023 – Aug 2024',
    url: 'https://www.vrplaced.ai',
    displayUrl: 'vrplaced.ai',
    embedUrl: 'https://www.vrplaced.ai',
    previewImage: 'https://www.vrplaced.ai/opengraph-image.png',
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
    location: 'Gurugram, HR',
    period: 'Dec 2022 – Jul 2023',
    url: 'https://www.suraasa.com',
    displayUrl: 'suraasa.com',
    previewImage: '/suraasa_preview.jpg',
    summary:
      'Engineered core mobile software systems and learning infrastructure serving 100,000+ educators across 50+ international markets.',
    highlights: [
      'Architected enterprise mobile software systems in Flutter, delivering offline-first local database synchronization, resilient state management, and real-time push events.',
      'Engineered low-latency video streaming pipelines and custom playback services optimized for low-bandwidth cellular networks.',
      'Collaborated with backend engineering teams to optimize REST APIs and serialization, reducing app startup latency by 35% and maintaining 99.8% crash-free sessions.'
    ],
    skills: ['Mobile Systems Architecture', 'Flutter & Dart', 'Offline Data Sync', 'REST APIs', 'Performance Optimization'],
  },
  {
    id: 'iitd',
    role: 'AR/VR Developer',
    company: 'Indian Institute of Technology, Delhi',
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

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [hoveredExperience, setHoveredExperience] = useState<ExperienceItem | null>(null);
  const [activeExperience, setActiveExperience] = useState<ExperienceItem>(EXPERIENCES[0]);
  const [loadedExperienceIds, setLoadedExperienceIds] = useState<Set<string>>(
    () => new Set(EXPERIENCES.map((e) => e.id))
  );
  const hoverLeaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup hover timer on unmount
  useEffect(() => {
    return () => {
      if (hoverLeaveTimeoutRef.current) {
        clearTimeout(hoverLeaveTimeoutRef.current);
      }
    };
  }, []);

  const handleExperienceHover = (exp: ExperienceItem) => {
    if (hoverLeaveTimeoutRef.current) {
      clearTimeout(hoverLeaveTimeoutRef.current);
      hoverLeaveTimeoutRef.current = null;
    }
    setHoveredExperience(exp);
    setActiveExperience(exp);
    setLoadedExperienceIds((prev) => {
      if (prev.has(exp.id)) return prev;
      const next = new Set(prev);
      next.add(exp.id);
      return next;
    });
  };

  const handleExperienceLeave = () => {
    if (hoverLeaveTimeoutRef.current) {
      clearTimeout(hoverLeaveTimeoutRef.current);
    }
    hoverLeaveTimeoutRef.current = setTimeout(() => {
      setHoveredExperience(null);
    }, 250);
  };

  const handlePreviewWindowEnter = () => {
    if (hoverLeaveTimeoutRef.current) {
      clearTimeout(hoverLeaveTimeoutRef.current);
      hoverLeaveTimeoutRef.current = null;
    }
  };

  const handlePreviewWindowLeave = () => {
    setHoveredExperience(null);
  };

  // Initialize Lenis smooth "liquid" scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('bhavukarora03@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#fde047] selection:text-black relative">
      {/* ─────────────────────────────────────────────────────────────
          1. MINIMAL STICKY HEADER
          ───────────────────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-zinc-200"
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-200 shadow-2xs group-hover:scale-105 transition-transform">
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
                Founder & Product Engineer
              </span>
            </div>
          </a>

          <div className="flex items-center gap-5 sm:gap-6">
            <nav className="flex items-center gap-5 sm:gap-6 text-xs font-mono text-zinc-600">
              <a href="#experience" className="hover:text-zinc-950 transition-colors">
                Experience
              </a>
              <a href="#skills" className="hover:text-zinc-950 transition-colors">
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
                <Github size={14} />
                <span className="hidden md:inline">GitHub</span>
              </a>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN CONTAINER WITH SUBTLE 1PX BORDER RAILS
          ───────────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto border-x border-zinc-200 bg-white min-h-screen">
        {/* ───────────────────────────────────────────────────────────
            HERO SECTION (Clean, Full-Width Minimalist Editorial)
            ─────────────────────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="px-5 sm:px-10 py-16 sm:py-20 border-b border-zinc-200"
        >
          <div className="space-y-6 max-w-3xl">
            {/* Experience status bar */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-zinc-500">
              <span className="font-bold text-zinc-950 tracking-wider">5+ YEARS EXPERIENCE</span>
              <span className="text-zinc-300">•</span>
              <span>DELHI · REMOTE</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 leading-[1.22] max-w-2xl">
              Founder & product engineer building{' '}
              <mark className="bg-[#fde047] text-black px-1.5 py-0.5 font-semibold not-italic rounded-[2px]">
                consumer products
              </mark>{' '}
              from{' '}
              <mark className="bg-[#fde047] text-black px-1.5 py-0.5 font-semibold not-italic rounded-[2px]">
                zero to scale
              </mark>.
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xl">
              I turn early-stage ideas into products people actually use. Over 5+ years of engineering,
              I've taken applications from zero to tens of thousands of downloads across consumer mobile,
              edtech, and AI platforms. Currently building <strong>Fork</strong> (an operating platform
              for independent creators) and part of the founding team at <strong>Reve</strong> (25K+ downloads).
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                className="bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-xs px-4 py-2.5 rounded-lg shadow-2xs transition-all hover:translate-y-[-1px]"
              >
                Get in touch
              </a>

              <button
                onClick={handleCopyEmail}
                className="border border-zinc-300 hover:border-zinc-900 bg-white text-zinc-800 font-mono text-xs px-3.5 py-2 rounded-lg transition-all flex items-center gap-2 cursor-pointer hover:translate-y-[-1px]"
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
        </motion.section>

        {/* ───────────────────────────────────────────────────────────
            WORK EXPERIENCE (THE PRIMARY CENTERPIECE)
            ─────────────────────────────────────────────────────────── */}
        <section id="experience" className="px-5 sm:px-10 py-16 border-b border-zinc-200 relative">
          <div className="space-y-1 mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Work Experience
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
              Where I've worked & what I've shipped
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 font-mono pt-1">
              Hover over any company link to load the live site inside the preview window.
            </p>
          </div>

          <div className="space-y-14">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative pb-12 border-b border-zinc-100 last:border-none last:pb-0 transition-all"
              >
                {/* Header Row: Role & Period */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-950 group-hover:text-black transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-xs font-mono text-zinc-500">
                    {exp.period}
                  </div>
                </div>

                {/* Company & Location & Live Link */}
                <div className="flex flex-wrap items-center gap-2.5 text-sm mb-4">
                  <span
                    onMouseEnter={() => handleExperienceHover(exp)}
                    onMouseLeave={handleExperienceLeave}
                    className="font-semibold text-zinc-900 cursor-pointer hover:text-black transition-colors"
                  >
                    {exp.company}
                  </span>
                  <span className="text-zinc-300">•</span>
                  <span className="text-xs font-mono text-zinc-500">{exp.location}</span>
                  <span className="text-zinc-300">•</span>
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => handleExperienceHover(exp)}
                    onMouseLeave={handleExperienceLeave}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-zinc-900 hover:text-black underline underline-offset-4 decoration-zinc-400 hover:decoration-black transition-all bg-zinc-50 hover:bg-zinc-100 px-2.5 py-1 rounded"
                  >
                    <span>{exp.displayUrl}</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>

                {/* Summary */}
                <p className="text-sm text-zinc-700 leading-relaxed mb-4 max-w-2xl">
                  {exp.summary}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-5 max-w-2xl">
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
              </motion.div>
            ))}
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            TECHNICAL SKILLS
            ─────────────────────────────────────────────────────────── */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="px-5 sm:px-10 py-16 border-b border-zinc-200"
        >
          <div className="space-y-1 mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Technical Skills
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
              Technologies & Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-xs font-mono">
            <div className="space-y-2">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1.5">
                Languages
              </div>
              <p className="text-zinc-600 leading-relaxed">
                TypeScript, Dart, Java, Swift, Rust, Python, C++
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1.5">
                Frontend & Mobile
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Flutter, React, Next.js, Tailwind CSS
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1.5">
                Backend & Systems
              </div>
              <p className="text-zinc-600 leading-relaxed">
                PostgreSQL, SQLite, Cloudflare Workers, REST APIs, Redis
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1.5">
                AI & Agentic Workflows
              </div>
              <p className="text-zinc-600 leading-relaxed">
                OpenAI API, Claude / Anthropic, LangChain, Structured Tool-Calling, RAG
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1.5">
                DevOps & Cloud
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Git, GitHub Actions, Docker, Cloudflare, Vercel, Supabase
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1.5">
                Domain Specialization
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Creator Economy, High-concurrency Mobile, AR/VR, HealthTech
              </p>
            </div>
          </div>
        </motion.section>



        {/* ───────────────────────────────────────────────────────────
            CONTACT & INVITATION SECTION
            ─────────────────────────────────────────────────────────── */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="px-5 sm:px-10 py-16"
        >
          <div className="rounded-2xl bg-zinc-950 text-white p-7 sm:p-10 border border-zinc-800 space-y-6 shadow-xl">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Let's build something.
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Open to founding product engineering roles, forward-deployed positions, or high-impact
                contract work. Whether you have an early-stage venture or just want to chat software,
                my inbox is open.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase">Direct Email</div>
                <div className="text-base font-mono font-bold text-white select-all">
                  bhavukarora03@gmail.com
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono font-semibold text-white transition-all flex items-center justify-center gap-2 cursor-pointer hover:translate-y-[-1px]"
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
                  className="px-4 py-2 rounded-lg bg-[#fde047] hover:bg-yellow-300 text-black text-xs font-mono font-bold transition-all flex items-center justify-center gap-1 hover:translate-y-[-1px]"
                >
                  <span>Mailto</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
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
        </motion.section>

        {/* ───────────────────────────────────────────────────────────
            FOOTER (Clean, No Cloudflare workers mention)
            ─────────────────────────────────────────────────────────── */}
        <footer className="border-t border-zinc-200 px-5 sm:px-10 py-6 text-xs font-mono text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Bhavuk Arora.</div>
          <div>Delhi, India.</div>
        </footer>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          GLOBAL FLOATING MACOS WEBSITE PREVIEW WINDOW
          Cached DOM with multi-slot iframe persistence:
          - Iframes stay mounted once loaded so they NEVER reload on hover
          - Smoothly fades and slides into view
          - Real live URL address bar and click-through overlay
          ───────────────────────────────────────────────────────────── */}
      <motion.div
        initial={false}
        animate={{
          opacity: hoveredExperience ? 1 : 0,
          y: hoveredExperience ? 0 : 16,
          scale: hoveredExperience ? 1 : 0.96,
        }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: hoveredExperience ? 'auto' : 'none' }}
        onMouseEnter={handlePreviewWindowEnter}
        onMouseLeave={handlePreviewWindowLeave}
        className="hidden lg:block fixed bottom-8 right-8 z-50 w-[420px] rounded-xl bg-zinc-950 text-white shadow-2xl border border-zinc-700 overflow-hidden"
      >
        {/* macOS Browser Header */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-zinc-900 border-b border-zinc-800 text-xs font-mono select-none">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setHoveredExperience(null)}
              className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] hover:opacity-80 transition-opacity cursor-pointer border-0 p-0"
              title="Close preview"
              type="button"
            />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>

          {/* Real URL Address Bar */}
          <a
            href={activeExperience.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-950 text-[11px] text-zinc-300 border border-zinc-800 hover:border-zinc-600 hover:text-white transition-all max-w-[260px] truncate"
          >
            <Lock size={10} className="text-emerald-400 shrink-0" />
            <span className="truncate">{activeExperience.url}</span>
          </a>

          <a
            href={activeExperience.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
            title="Open site in new tab"
          >
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Window Content: Real Iframes & High-Res Previews Cached */}
        <div className="relative w-full h-[260px] bg-zinc-900 overflow-hidden">
          {EXPERIENCES.map((exp) => {
            const isLoaded = loadedExperienceIds.has(exp.id);
            if (!isLoaded) return null;

            const isCurrent = activeExperience.id === exp.id;

            return (
              <div
                key={exp.id}
                className={`absolute inset-0 w-full h-full bg-zinc-950 transition-opacity duration-200 ${
                  isCurrent ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                {/* Visual Screenshot (high-res preview for Suraasa, IITD, and backdrop for Fork/Reve/VRPlaced) */}
                {exp.previewImage && (
                  <img
                    src={exp.previewImage}
                    alt={exp.displayUrl}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                )}

                {/* Real Live Iframe View (for embed-supported sites) */}
                {exp.embedUrl && (
                  <iframe
                    src={exp.embedUrl}
                    title={exp.displayUrl}
                    className="absolute inset-0 w-[840px] h-[520px] origin-top-left scale-50 border-0 bg-white"
                    loading="eager"
                  />
                )}

                {/* Clickable Overlay */}
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 cursor-pointer"
                  title={`Click to open ${exp.displayUrl}`}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
