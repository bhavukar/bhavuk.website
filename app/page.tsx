'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
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
  preview: {
    title: string;
    tagline: string;
    metric: string;
    previewBg: string;
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
    url: 'https://github.com/bhavukar',
    displayUrl: 'fork.sh',
    summary:
      'Building an AI-native operating platform for independent talent — creators, artists, musicians, actors, and craftspeople who monetize their audience and work.',
    highlights: [
      'Developing AI agents for discovering commercial opportunities, pricing work, automated contract review, invoicing, and everyday business decisions.',
      'Creating a unified marketplace where talent and brands collaborate and transact directly, replacing fragmented workflows across DMs, spreadsheets, and manual tools.',
      'Architecting end-to-end fullstack platform with TypeScript, Next.js, and structured LLM tool-calling pipelines.'
    ],
    skills: ['TypeScript', 'Next.js', 'AI Agents', 'PostgreSQL', 'Fullstack Architecture'],
    preview: {
      title: 'Fork — AI Platform for Talent',
      tagline: 'Automating commercial workflows & contracts for independent creators.',
      metric: 'AI-Native Talent Marketplace',
      previewBg: 'from-amber-500/20 via-yellow-500/10 to-zinc-900',
      details: 'Automated deal discovery • Smart contract review • Creator business tooling'
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
    summary:
      'Part of the founding team taking Reve from zero to launch, evolving through multiple pivots into a consumer event app with 25K+ downloads across iOS and Android.',
    highlights: [
      'Shaped core user experiences across product, engineering, and design, taking critical features from early wireframes straight into production.',
      'Engineered cross-platform mobile architecture with Flutter, including offline-first SQLite synchronization and real-time event feeds.',
      'Built and optimized onboarding funnels, viral invite loops, and retention mechanics that drove organic community growth.'
    ],
    skills: ['Flutter', 'SQLite', 'Mobile Architecture', 'Product Design', '25K+ Downloads'],
    preview: {
      title: 'Reve — Event & Community Network',
      tagline: 'Realtime event discovery, RSVP management, and community ticketing.',
      metric: '25,000+ App Downloads',
      previewBg: 'from-purple-500/20 via-pink-500/10 to-zinc-900',
      details: 'Offline-first SQLite sync • Cross-platform iOS & Android • 0 to launch'
    }
  },
  {
    id: 'mythyaverse',
    role: 'Software Development Engineer',
    company: 'MythyaVerse',
    location: 'Noida, UP',
    period: 'Sep 2023 – Aug 2024',
    url: 'https://www.vrplaced.ai',
    displayUrl: 'vrplaced.ai',
    summary:
      'Shipped client and internal production applications across healthcare and AI interview coaching, delivering end-to-end products under strict timelines.',
    highlights: [
      'Built and launched Oncarea and Oncarea Doctor using Flutter in under two months, supporting live video consultations and remote diagnostic workflows.',
      'Engineered VRPlaced, a Next.js platform for 1-on-1 interview practice featuring OpenAI-driven resume customization and live feedback.',
      'Owned full development lifecycle: architecture, client-side testing, automated deployments, and continuous UX iterations.'
    ],
    skills: ['Flutter', 'Next.js', 'OpenAI API', 'Healthcare Systems', 'WebRTC Video'],
    preview: {
      title: 'VRPlaced & Oncarea Health',
      tagline: 'AI interview practice platform & telemedicine video consultations.',
      metric: 'End-to-End Delivery < 2 Months',
      previewBg: 'from-blue-500/20 via-cyan-500/10 to-zinc-900',
      details: 'OpenAI resume coaching • Flutter telemedicine • Full lifecycle engineering'
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
    summary:
      'Re-engineered Suraasa’s flagship EdTech application from the ground up in Flutter, replacing legacy native code and scaling to 50K+ downloads.',
    highlights: [
      'Rebuilt core mobile systems including authentication, profile state management, push notification infrastructure, and modular app architecture.',
      'Integrated a custom high-performance video player, learning course workflows, and interactive assessment modules for teachers.',
      'Collaborated closely with product and design teams to refine teacher learning journeys and boost student course completion rates.'
    ],
    skills: ['Flutter', 'Modular Architecture', 'Custom Video Player', '50K+ Downloads'],
    preview: {
      title: 'Suraasa — Flagship EdTech App',
      tagline: 'Teacher education and certification platform scaled across mobile.',
      metric: '50,000+ App Downloads',
      previewBg: 'from-emerald-500/20 via-teal-500/10 to-zinc-900',
      details: 'Flutter rebuild of legacy native apps • Custom media player • Global reach'
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
    preview: {
      title: 'IIT Delhi — BCI & VR Research',
      tagline: 'Experimental neural interface systems and immersive VR environments.',
      metric: 'Neural Signal Processing',
      previewBg: 'from-indigo-500/20 via-purple-500/10 to-zinc-900',
      details: 'EEG brain activity decoding • Real-time hardware control • Academic research'
    }
  }
];

const SIDE_PROJECTS = [
  {
    title: 'subway-sim',
    description:
      'Network chaos simulator written in Rust. Injects jitter, packet loss, and simulated 3G latency into localhost sockets to test how apps behave under bad subway connectivity.',
    tech: 'Rust • Networking • CLI',
    link: 'https://github.com/bhavukar/subway-sim.git'
  },
  {
    title: 'asset-vibe',
    description:
      'High-speed mobile asset compilation tool written in Rust. Watches design folders to instantly generate 1x, 2x, 3x iOS and Android drawables with strongly-typed references in milliseconds.',
    tech: 'Rust • Image Pipeline • Tooling',
    link: 'https://github.com/bhavukar/asset-vibe.git'
  },
  {
    title: 'Monik',
    description:
      'Windows display control utility built with C++ and Win32. Communicates over DDC/CI to adjust monitor inputs, brightness, and color profiles without physical buttons.',
    tech: 'C++ • Win32 • Hardware DDC/CI',
    link: 'https://github.com/bhavukar/monik.git'
  }
];

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [hoveredExperience, setHoveredExperience] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('bhavuk.arora03@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const activeExp = EXPERIENCES.find(e => e.id === hoveredExperience);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#fde047] selection:text-black">
      {/* ─────────────────────────────────────────────────────────────
          1. MINIMAL HEADER
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

          <nav className="flex items-center gap-6 text-xs font-mono text-zinc-600">
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
            HERO SECTION (Clean, human, grounded)
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
            WORK EXPERIENCE (PRIMARY STAR OF THE PAGE)
            ─────────────────────────────────────────────────────────── */}
        <section id="experience" className="px-5 sm:px-10 py-14 border-b border-zinc-200 relative">
          <div className="space-y-1 mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Work Experience
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
              Where I've worked & what I've shipped
            </h2>
            <p className="text-sm text-zinc-500 font-mono pt-1">
              Hover over any company to preview the live product in a window.
            </p>
          </div>

          <div className="space-y-12 relative">
            {EXPERIENCES.map(exp => (
              <div
                key={exp.id}
                onMouseEnter={() => setHoveredExperience(exp.id)}
                onMouseLeave={() => setHoveredExperience(null)}
                className="group relative pb-10 border-b border-zinc-100 last:border-none last:pb-0 transition-all"
              >
                {/* Header Row: Role & Period */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-zinc-950 group-hover:text-black transition-colors">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-xs font-mono text-zinc-500">
                    {exp.period}
                  </div>
                </div>

                {/* Company & Location & Interactive Hover Link */}
                <div className="flex items-center gap-2.5 text-sm mb-3">
                  <span className="font-semibold text-zinc-900">{exp.company}</span>
                  <span className="text-zinc-300">•</span>
                  <span className="text-xs font-mono text-zinc-500">{exp.location}</span>
                  <span className="text-zinc-300">•</span>
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-medium text-zinc-700 hover:text-black underline underline-offset-2 decoration-zinc-300 hover:decoration-black transition-all"
                  >
                    <span>{exp.displayUrl}</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>

                {/* Summary */}
                <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                  {exp.summary}
                </p>

                {/* Bullet Points from Resume */}
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-xs sm:text-sm text-zinc-600 leading-relaxed flex items-start gap-2.5">
                      <span className="text-zinc-400 select-none mt-1">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Plain skills text list (NO chips) */}
                <div className="text-xs font-mono text-zinc-500 pt-1">
                  <span className="text-zinc-400">Stack:</span> {exp.skills.join(' • ')}
                </div>

                {/* ───────────────────────────────────────────────────
                    HOVER WEBSITE PREVIEW WINDOW (MAC WINDOW POPUP)
                    ─────────────────────────────────────────────────── */}
                <AnimatePresence>
                  {hoveredExperience === exp.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="hidden lg:block absolute right-0 top-0 z-30 w-84 rounded-xl bg-zinc-950 text-white shadow-2xl border border-zinc-800 overflow-hidden pointer-events-none"
                    >
                      {/* macOS Window Title Bar */}
                      <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 border-b border-zinc-800 text-xs font-mono">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                        </div>
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-950 text-[10px] text-zinc-400 border border-zinc-800/80">
                          <Lock size={9} className="text-emerald-400" />
                          <span>{exp.displayUrl}</span>
                        </div>
                        <div className="w-6" />
                      </div>

                      {/* Mockup Preview Area */}
                      <div className={`p-4 bg-gradient-to-br ${exp.preview.previewBg} space-y-2.5`}>
                        <div className="text-[10px] font-mono text-[#fde047] font-bold uppercase tracking-wider">
                          {exp.preview.metric}
                        </div>
                        <div className="text-sm font-bold text-white leading-snug">
                          {exp.preview.title}
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {exp.preview.tagline}
                        </p>
                        <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-zinc-400">
                          {exp.preview.details}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            TECHNICAL SKILLS (From Resume, Clean Typographic Columns)
            ─────────────────────────────────────────────────────────── */}
        <section id="skills" className="px-5 sm:px-10 py-14 border-b border-zinc-200">
          <div className="space-y-1 mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Technical Arsenal
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
              Skills & Proficiencies
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
                Cloud & Infra
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
            SIDE PROJECTS (VERY SECONDARY)
            ─────────────────────────────────────────────────────────── */}
        <section id="projects" className="px-5 sm:px-10 py-14 border-b border-zinc-200">
          <div className="space-y-1 mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Side Projects & Tools
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
              Personal experiments & developer utilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SIDE_PROJECTS.map(proj => (
              <div
                key={proj.title}
                className="p-5 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-sm text-zinc-950">{proj.title}</h4>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-950 transition-colors"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                    {proj.description}
                  </p>
                </div>
                <div className="text-[11px] font-mono text-zinc-500 pt-2 border-t border-zinc-100">
                  {proj.tech}
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
            CONTACT SECTION
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
          <div>Deployed on Cloudflare Workers.</div>
        </footer>
      </div>
    </div>
  );
}
