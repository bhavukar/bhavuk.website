'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import {
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Copy,
  Check,
  FileText,
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

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [hoveredExpId, setHoveredExpId] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
                Founder & CEO · Blue Fork
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
      </motion.header>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN CONTAINER WITH CLEAN BORDERS
          ───────────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto border-x-0 sm:border-x border-zinc-200 bg-white min-h-screen">
        {/* ───────────────────────────────────────────────────────────
            HERO SECTION (Clean, Responsive Editorial)
            ─────────────────────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="px-4 sm:px-10 py-10 sm:py-16 md:py-20 border-b border-zinc-200"
        >
          <div className="space-y-4 sm:space-y-6 max-w-3xl">
            {/* Experience status bar */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs font-mono text-zinc-500">
              <span className="font-bold text-zinc-950 tracking-wider">FOUNDER & CEO · BLUE FORK</span>
              <span className="text-zinc-300">•</span>
              <span>5+ YEARS EXPERIENCE</span>
              <span className="text-zinc-300">•</span>
              <span>DELHI · REMOTE</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 leading-[1.25] sm:leading-[1.22] max-w-2xl">
              Founder & CEO building{' '}
              <mark className="bg-[#fde047] text-black px-1 sm:px-1.5 py-0.5 font-semibold not-italic rounded-[2px]">
                consumer products
              </mark>{' '}
              from{' '}
              <mark className="bg-[#fde047] text-black px-1 sm:px-1.5 py-0.5 font-semibold not-italic rounded-[2px]">
                zero to scale
              </mark>.
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xl">
              Founder & CEO of <strong>Blue Fork</strong>, building the commercial operating system
              for independent creators and digital entrepreneurs. Over 5+ years of engineering,
              I've taken applications from zero to scale across consumer mobile and edtech platforms
              (10 Lakh+ downloads at Suraasa, 25K+ at Reve).
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              <a
                href="#contact"
                className="bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-xs px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-2xs transition-all hover:translate-y-[-1px]"
              >
                Get in touch
              </a>

              <a
                href="/bhavuk_arora_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-300 hover:border-zinc-900 bg-white text-zinc-800 font-mono text-xs px-3 sm:px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer hover:translate-y-[-1px]"
              >
                <FileText size={13} className="text-zinc-500" />
                <span>Resume</span>
                <ArrowUpRight size={12} />
              </a>

              <button
                onClick={handleCopyEmail}
                className="border border-zinc-300 hover:border-zinc-900 bg-white text-zinc-800 font-mono text-xs px-3 sm:px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer hover:translate-y-[-1px]"
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
                className="text-zinc-600 hover:text-zinc-950 font-mono text-xs px-2.5 sm:px-3 py-2 flex items-center gap-1.5 transition-colors"
              >
                <Github size={14} />
                <span>GitHub</span>
                <ArrowUpRight size={12} />
              </a>

              <a
                href="https://www.linkedin.com/in/bhavuk-arora-4a7263216/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-950 font-mono text-xs px-2.5 sm:px-3 py-2 flex items-center gap-1.5 transition-colors"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
                <ArrowUpRight size={12} />
              </a>

              <a
                href="https://www.behance.net/bhavukarora1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-950 font-mono text-xs px-2.5 sm:px-3 py-2 flex items-center gap-1.5 transition-colors"
              >
                <span>Behance</span>
                <ArrowUpRight size={12} />
              </a>

              <a
                href="https://bhavuk3.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-950 font-mono text-xs px-2.5 sm:px-3 py-2 flex items-center gap-1.5 transition-colors"
              >
                <span>Substack</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </motion.section>

        {/* ───────────────────────────────────────────────────────────
            WORK EXPERIENCE (THE PRIMARY CENTERPIECE)
            ─────────────────────────────────────────────────────────── */}
        <section id="experience" className="px-4 sm:px-10 py-12 sm:py-16 border-b border-zinc-200 relative">
          <div className="space-y-1 mb-8 sm:mb-12">
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-500">
              Work Experience
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
              Where I've worked & what I've shipped
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 font-mono pt-1">
              <span className="hidden md:inline">Hover over any company link for a live preview.</span>
              <span className="md:hidden">Tap company links to view live products.</span>
            </p>
          </div>

          <div className="space-y-10 sm:space-y-14">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative pb-10 sm:pb-12 border-b border-zinc-100 last:border-none last:pb-0 transition-all"
              >
                {/* Header Row: Role & Period */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5 sm:mb-2">
                  <h3 className="text-base sm:text-xl font-bold text-zinc-950 group-hover:text-black transition-colors leading-snug">
                    {exp.role}
                  </h3>
                  <div className="text-[11px] sm:text-xs font-mono text-zinc-500">
                    {exp.period}
                  </div>
                </div>

                {/* Company & Location & Live Link */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm mb-3 sm:mb-4">
                  <span
                    onMouseEnter={() => handleMouseEnter(exp.id)}
                    onMouseLeave={handleMouseLeave}
                    className="font-semibold text-zinc-900 cursor-pointer hover:text-black transition-colors"
                  >
                    {exp.company}
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
                        <span className="text-zinc-300 truncate max-w-[220px]">{exp.displayUrl}</span>
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
              </motion.div>
            ))}
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            DESIGN & MOTION CRAFT (BEHANCE SHOWCASE)
            ─────────────────────────────────────────────────────────── */}
        <motion.section
          id="craft"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
                    preload="metadata"
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
        </motion.section>

        {/* ───────────────────────────────────────────────────────────
            WRITING & ESSAYS (SUBSTACK SHOWCASE)
            ─────────────────────────────────────────────────────────── */}
        <motion.section
          id="writing"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
        </motion.section>

        {/* ───────────────────────────────────────────────────────────
            TECHNICAL SKILLS
            ─────────────────────────────────────────────────────────── */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
                  href="https://www.instagram.com/nobhavuk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Twitter size={14} />
                  <span>@nobhavuk</span>
                </a>
              </div>

              <div className="text-[11px] sm:text-xs text-zinc-500">Rohini, Delhi, India (+91-8708254881)</div>
            </div>
          </div>
        </motion.section>

        {/* ───────────────────────────────────────────────────────────
            FOOTER (Clean & Simple)
            ─────────────────────────────────────────────────────────── */}
        <footer className="border-t border-zinc-200 px-4 sm:px-10 py-5 sm:py-6 text-xs font-mono text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center sm:text-left">
          <div>© {new Date().getFullYear()} Bhavuk Arora — Founder & CEO, Blue Fork.</div>
          <div>Delhi, India.</div>
        </footer>
      </div>
    </div>
  );
}
