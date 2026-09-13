'use client';

import React, { useState, useEffect } from 'react';
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
  summary: string;
  highlights: string[];
  skills: string[];
  metrics: string;
  showcase: {
    badge: string;
    title: string;
    description: string;
    features: string[];
    gradient: string;
    accentGlow: string;
    status: string;
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
    metrics: 'Active Production • Global Creator OS',
    summary:
      'Building the commercial operating system for independent creators, artists, and musicians who monetize their audience and work.',
    highlights: [
      'Engineered autonomous AI agents automating deal discovery, contract risk audits, and fast invoicing.',
      'Replaced fragmented chains of DMs, spreadsheets, and manual billing with a unified marketplace.',
      'Architected end-to-end fullstack platform with TypeScript, Next.js, and structured LLM tool-calling pipelines.'
    ],
    skills: ['TypeScript', 'Next.js', 'AI Agents', 'PostgreSQL', 'Fullstack Architecture'],
    showcase: {
      badge: 'CREATOR OS • FOUNDING VENTURE',
      title: 'Pause chasing. Start creating.',
      description: 'AI-native operating system automating deals, contracts, and cashflow for independent creators.',
      features: [
        'Autonomous Deal Discovery Agents',
        'Real-time Contract Risk Audits',
        'Instant Multi-Currency Invoicing'
      ],
      gradient: 'from-blue-600 via-indigo-700 to-slate-950',
      accentGlow: '#3b82f6',
      status: 'Live in Production'
    }
  },
  {
    id: 'reve',
    role: 'Founding Member – Product & Engineering',
    company: 'Reve',
    location: 'Gurugram, HR',
    period: 'Sep 2024 – Present',
    url: 'https://reve.rsvp',
    displayUrl: 'reve.rsvp',
    metrics: '25,000+ App Downloads • iOS & Android',
    summary:
      'Joined as part of the founding team taking Reve from zero to launch, evolving through multiple pivots into a consumer event app with 25K+ downloads.',
    highlights: [
      'Owned product engineering end-to-end: wireframes, user journeys, design systems, and cross-platform Flutter client.',
      'Engineered offline-first SQLite sync engine and real-time feed for seamless in-person event check-ins.',
      'Designed onboarding funnels and viral invite loops powering organic community growth.'
    ],
    skills: ['Flutter', 'SQLite', 'Mobile Architecture', 'Product Design', '25K+ Downloads'],
    showcase: {
      badge: 'CONSUMER SOCIAL & EVENTS',
      title: 'Curated Nights & Intimate Gatherings',
      description: 'High-touch RSVP & nightlife discovery app connecting communities through live gatherings.',
      features: [
        'Offline-first SQLite Sync Engine',
        'Frictionless QR Check-in & Passes',
        'Viral Organic Referral Loops'
      ],
      gradient: 'from-purple-900 via-zinc-900 to-black',
      accentGlow: '#a855f7',
      status: '25K+ Downloads'
    }
  },
  {
    id: 'mythyaverse',
    role: 'Software Development Engineer',
    company: 'MythyaVerse (VRPlaced & Oncarea)',
    location: 'Noida, UP',
    period: 'Sep 2023 – Aug 2024',
    url: 'https://www.vrplaced.ai',
    displayUrl: 'vrplaced.ai',
    metrics: 'Production AI & Healthcare Apps',
    summary:
      'Shipped client and internal production applications across healthcare and AI interview coaching under strict timelines.',
    highlights: [
      'Shipped VRPlaced: an AI interview simulator with real-time feedback scoring and dynamic resume tailoring using Next.js and OpenAI.',
      'Built Oncarea and Oncarea Doctor from scratch in under two months, supporting live video consultations.',
      'Owned full development lifecycle: architecture, client-side testing, automated deployments, and continuous UX iterations.'
    ],
    skills: ['Flutter', 'Next.js', 'OpenAI API', 'Healthcare Systems', 'WebRTC Video'],
    showcase: {
      badge: 'AI COACHING & HEALTHCARE',
      title: 'AI Interview Coaching & Telehealth',
      description: 'Real-time evaluation simulator with automated interview telemetry and remote medical consultations.',
      features: [
        'Dynamic Resume Tailoring Engine',
        'Real-time LLM Performance Scoring',
        'WebRTC Live Doctor Consultations'
      ],
      gradient: 'from-emerald-900 via-zinc-900 to-black',
      accentGlow: '#10b981',
      status: 'Production Shipped'
    }
  },
  {
    id: 'suraasa',
    role: 'Mobile Application Developer',
    company: 'Suraasa',
    location: 'Gurugram, HR',
    period: 'Dec 2022 – Jul 2023',
    url: 'https://www.suraasa.com',
    displayUrl: 'suraasa.com',
    metrics: '50,000+ Downloads • 4.7 ★ Rating',
    summary:
      'Re-engineered Suraasa’s flagship EdTech application from the ground up in Flutter, replacing legacy native code and scaling to 50K+ downloads.',
    highlights: [
      'Rebuilt core mobile systems including auth, profile state management, push notification infra, and modular app architecture.',
      'Integrated custom high-performance video player, learning course workflows, and interactive assessments.',
      'Boosted course completion rates by streamlining playback, offline lesson caching, and navigation.'
    ],
    skills: ['Flutter', 'Modular Architecture', 'Custom Video Player', '50K+ Downloads'],
    showcase: {
      badge: 'GLOBAL TEACHER EDTECH',
      title: 'Empowering 50,000+ Educators',
      description: 'Global qualification platform helping educators master modern pedagogy and advance international careers.',
      features: [
        'Custom Modular Video Player',
        'Offline Course & Lesson Caching',
        'Interactive Teacher Assessments'
      ],
      gradient: 'from-amber-900 via-zinc-900 to-black',
      accentGlow: '#f59e0b',
      status: '50K+ Downloads'
    }
  },
  {
    id: 'iitd',
    role: 'AR/VR Developer',
    company: 'IIT Delhi (BCI Lab)',
    location: 'New Delhi',
    period: 'Dec 2021 – May 2022',
    url: 'https://home.iitd.ac.in',
    displayUrl: 'iitd.ac.in',
    metrics: 'Academic Neural HCI Research',
    summary:
      'Researched and built immersive virtual reality experiences and experimental brain-computer interface (BCI) systems.',
    highlights: [
      'Developed interactive VR simulations and games exploring novel human-computer interaction models.',
      'Engineered software pipelines interpreting EEG brain signals and neural spikes to drive real-time device interaction.',
      'Conducted live laboratory demonstrations introducing students and research peers to practical applications of neuro-interfaces.'
    ],
    skills: ['Virtual Reality', 'EEG / Neural Spikes', 'Unity / C#', 'BCI Research'],
    showcase: {
      badge: 'NEUROSCIENCE & SPATIAL HCI',
      title: 'Neural Signal Decoding & Spatial VR',
      description: 'Experimental brain-computer interface research combining real-time EEG telemetry with immersive 3D simulations.',
      features: [
        'EEG Brainwave Decoding Pipeline',
        'Real-time Hardware Telemetry Control',
        'Interactive Unity 3D Spatial Systems'
      ],
      gradient: 'from-cyan-900 via-zinc-900 to-black',
      accentGlow: '#06b6d4',
      status: 'Research Shipped'
    }
  }
];

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeExperience, setActiveExperience] = useState<ExperienceItem>(EXPERIENCES[0]);

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
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full overflow-hidden shadow-2xs group-hover:scale-105 transition-transform">
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
          2. MAIN CONTAINER
          ───────────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto bg-white min-h-screen">
        {/* ───────────────────────────────────────────────────────────
            HERO SECTION (Clean, Full-Width, Single Photo in Header)
            ─────────────────────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="px-5 sm:px-10 py-16 sm:py-20 border-b border-zinc-200"
        >
          <div className="space-y-6 max-w-3xl">
            {/* Open to work status bar */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-zinc-500">
              <span className="font-bold text-zinc-950 tracking-wider">OPEN TO WORK</span>
              <span className="text-zinc-300">•</span>
              <span>5+ YEARS EXPERIENCE</span>
              <span className="text-zinc-300">•</span>
              <span>DELHI · REMOTE</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 leading-[1.22] max-w-2xl">
              Product engineer & founder building{' '}
              <mark className="bg-[#fde047] text-black px-1.5 py-0.5 font-semibold not-italic rounded-[2px]">
                consumer products
              </mark>{' '}
              and{' '}
              <mark className="bg-[#fde047] text-black px-1.5 py-0.5 font-semibold not-italic rounded-[2px]">
                AI workflows
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
            WORK EXPERIENCE (INTEGRATED SPLIT SHOWCASE)
            ─────────────────────────────────────────────────────────── */}
        <section id="experience" className="px-5 sm:px-10 py-16 border-b border-zinc-200">
          <div className="space-y-1 mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Work Experience
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
              Where I've worked & what I've shipped
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: Experience Cards */}
            <div className="lg:col-span-7 space-y-3">
              {EXPERIENCES.map((exp, index) => {
                const isActive = activeExperience.id === exp.id;
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setActiveExperience(exp)}
                    onMouseEnter={() => setActiveExperience(exp)}
                    className={`group relative p-5 rounded-2xl transition-all cursor-pointer text-left ${
                      isActive
                        ? 'bg-zinc-100/90 shadow-xs'
                        : 'bg-white hover:bg-zinc-50/80 shadow-2xs'
                    }`}
                  >
                    {/* Header Row: Role & Period */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                      <div className="flex items-center gap-2">
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 shrink-0" />
                        )}
                        <h3
                          className={`text-base sm:text-lg font-bold transition-colors ${
                            isActive ? 'text-zinc-950' : 'text-zinc-800 group-hover:text-zinc-950'
                          }`}
                        >
                          {exp.role}
                        </h3>
                      </div>
                      <div className="text-xs font-mono text-zinc-400">
                        {exp.period}
                      </div>
                    </div>

                    {/* Company, Location & Live Link */}
                    <div className="flex flex-wrap items-center gap-2 text-xs mb-3 font-mono">
                      <span className="font-semibold text-zinc-900">{exp.company}</span>
                      <span className="text-zinc-300">•</span>
                      <span className="text-zinc-500">{exp.location}</span>
                      <span className="text-zinc-300">•</span>
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-zinc-600 hover:text-zinc-950 font-semibold underline underline-offset-2 decoration-zinc-300 hover:decoration-zinc-950 transition-colors flex items-center gap-0.5"
                      >
                        <span>{exp.displayUrl}</span>
                        <ArrowUpRight size={11} />
                      </a>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-3">
                      {exp.summary}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-1.5 mb-3.5">
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="text-xs text-zinc-600 leading-relaxed flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-zinc-300 mt-2 shrink-0 select-none" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {exp.skills.map((s, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-white text-[11px] font-mono text-zinc-600 shadow-2xs border-0"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Mobile-Only Inline Showcase Preview */}
                    <div className="block lg:hidden mt-4 pt-3 border-t border-zinc-200/60">
                      <div
                        className={`rounded-xl p-4 text-white bg-gradient-to-br ${exp.showcase.gradient} shadow-sm space-y-2.5`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-300">
                          <span>{exp.showcase.badge}</span>
                          <span className="text-[#fde047]">{exp.showcase.status}</span>
                        </div>
                        <div className="text-sm font-bold text-white">
                          {exp.showcase.title}
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {exp.showcase.description}
                        </p>
                        <div className="space-y-1 pt-1">
                          {exp.showcase.features.map((feat, fi) => (
                            <div key={fi} className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-200">
                              <span className="text-[#fde047]">✓</span>
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs font-mono text-[#fde047] hover:underline pt-1 font-semibold"
                        >
                          <span>Open {exp.displayUrl}</span>
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right 5 Columns: Desktop Sticky Showcase Stage */}
            <div className="hidden lg:block lg:col-span-5 sticky top-24 self-start">
              <div className="rounded-2xl bg-zinc-950 text-white shadow-xl overflow-hidden">
                {/* Browser Frame Top Bar */}
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-zinc-900 border-b border-zinc-800 text-xs font-mono select-none">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>

                  {/* Clean Address Bar */}
                  <a
                    href={activeExperience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-950 text-[11px] text-zinc-300 hover:text-white transition-all max-w-[200px] truncate"
                  >
                    <Lock size={10} className="text-emerald-400 shrink-0" />
                    <span className="truncate">{activeExperience.displayUrl}</span>
                  </a>

                  <a
                    href={activeExperience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                    title={`Open ${activeExperience.displayUrl}`}
                  >
                    <ArrowUpRight size={13} />
                  </a>
                </div>

                {/* Animated Showcase Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeExperience.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative p-6 bg-gradient-to-br ${activeExperience.showcase.gradient} min-h-[380px] flex flex-col justify-between overflow-hidden`}
                  >
                    {/* Ambient Glow Effect */}
                    <div
                      className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
                      style={{ backgroundColor: activeExperience.showcase.accentGlow }}
                    />

                    {/* Header: Badge & Status */}
                    <div className="space-y-3 relative z-10">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-xs text-zinc-200 tracking-wider font-semibold uppercase">
                          {activeExperience.showcase.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-zinc-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{activeExperience.showcase.status}</span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-1.5 pt-1">
                        <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                          {activeExperience.showcase.title}
                        </h4>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {activeExperience.showcase.description}
                        </p>
                      </div>

                      {/* Key Capabilities */}
                      <div className="space-y-2 pt-2">
                        {activeExperience.showcase.features.map((feat, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 p-2 rounded-lg bg-black/30 backdrop-blur-xs text-xs font-mono text-zinc-200"
                          >
                            <span className="text-[#fde047] font-bold">✓</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer: Metrics & Launch Button */}
                    <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between gap-3 relative z-10">
                      <div className="text-[11px] font-mono text-zinc-300">
                        <div className="text-zinc-400 text-[10px] uppercase">Impact Metric</div>
                        <div className="font-semibold text-white">{activeExperience.metrics}</div>
                      </div>

                      <a
                        href={activeExperience.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-white text-zinc-950 font-mono text-xs font-bold hover:bg-zinc-200 transition-all flex items-center gap-1 shadow-sm shrink-0"
                      >
                        <span>Visit site</span>
                        <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
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
                Backend & Services
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Node.js, Spring Boot, Firebase, WebRTC
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1.5">
                Cloud & Infrastructure
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Cloudflare Workers, Google Cloud Platform, Docker, GitHub Actions
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1.5">
                Databases
              </div>
              <p className="text-zinc-600 leading-relaxed">
                PostgreSQL, Firestore, MongoDB, ArangoDB, SQLite
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-zinc-950 uppercase border-b border-zinc-200 pb-1.5">
                AI & Design
              </div>
              <p className="text-zinc-600 leading-relaxed">
                OpenAI API, Antigravity, Figma, Adobe Creative Cloud
              </p>
            </div>
          </div>
        </motion.section>

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
    </div>
  );
}
