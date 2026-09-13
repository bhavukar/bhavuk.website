'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  Cpu,
  Layers,
  Zap,
  ShieldCheck,
  ArrowUpRight,
  ChevronRight,
  Copy,
  Check,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Play,
  RotateCw,
  Globe,
  Radio,
  Server,
  Activity,
  Code2,
  Sliders,
  Sparkles,
  Menu,
  X
} from 'lucide-react';

export default function Home() {
  // Navigation & UI State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Hero Radar Telemetry State
  const [radarMode, setRadarMode] = useState<'human' | 'agent'>('agent');
  const [radarPingCount, setRadarPingCount] = useState(496);
  const [isPinging, setIsPinging] = useState(false);

  // Interactive Pipeline Inspector State
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);
  const [isSimulatingTrace, setIsSimulatingTrace] = useState(false);
  const [traceLogs, setTraceLogs] = useState<string[]>([
    '[INIT] Runtime ready on Cloudflare Edge V8 isolate.',
    '[STANDBY] Awaiting user execution trace request...'
  ]);

  // Live New Delhi (IST) Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Periodic subtle radar ping update
  useEffect(() => {
    const interval = setInterval(() => {
      setRadarPingCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('bhavuk.arora03@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleManualPing = () => {
    setIsPinging(true);
    setTimeout(() => setIsPinging(false), 800);
  };

  // Run interactive pipeline trace simulation
  const runSimulatedTrace = () => {
    if (isSimulatingTrace) return;
    setIsSimulatingTrace(true);
    setTraceLogs(['[TRACE // START] Incoming high-concurrency execution packet...']);
    setActivePipelineStep(0);

    const steps = [
      {
        step: 0,
        delay: 500,
        log: '[01 // INGEST] Prompt tensors normalized. Context vector parsed (1,536 dims).'
      },
      {
        step: 1,
        delay: 1200,
        log: '[02 // ROUTER] Intent decomposed: 2 sub-tasks identified. Tool graph constructed.'
      },
      {
        step: 2,
        delay: 2000,
        log: '[03 // TOOL BUS] MCP invocation: edge_inference_router() executed in 14ms.'
      },
      {
        step: 3,
        delay: 2800,
        log: '[04 // VERIFY] Strict JSON schema validated. 0 hallucinations detected. Tokens streaming.'
      }
    ];

    steps.forEach(({ step, delay, log }) => {
      setTimeout(() => {
        setActivePipelineStep(step);
        setTraceLogs(prev => [...prev, log]);
        if (step === 3) {
          setTimeout(() => {
            setIsSimulatingTrace(false);
            setTraceLogs(prev => [...prev, '[TRACE // COMPLETE] All evaluation gates verified ✓']);
          }, 800);
        }
      }, delay);
    });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans relative selection:bg-[#fde047] selection:text-black">
      {/* ─────────────────────────────────────────────────────────────
          1. TOP ANNOUNCEMENT STRIP (Infisical Signature)
          ───────────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-lime-300 via-[#fde047] to-amber-300 border-b border-zinc-200/80 text-zinc-950 px-4 py-2 text-center text-xs sm:text-sm font-medium flex items-center justify-center gap-2 relative z-50">
        <span className="inline-flex items-center gap-1.5 font-semibold">
          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          Production Notice:
        </span>
        <span className="hidden sm:inline text-zinc-800">
          Forward Deployed AI & Distributed Edge Systems live on Cloudflare Global Network.
        </span>
        <a
          href="#runtime"
          className="underline font-semibold hover:text-black ml-1 inline-flex items-center gap-0.5"
        >
          Explore Runtime <ArrowUpRight size={14} />
        </a>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. STICKY NAVIGATION BAR
          ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-white font-mono text-sm font-bold shadow-xs group-hover:bg-zinc-800 transition-colors">
              BA
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-zinc-950 leading-tight">
                bhavuk.website
              </span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                // Forward Deployed
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-tight text-zinc-600">
            <a href="#directives" className="hover:text-zinc-950 transition-colors">
              [01] Directives
            </a>
            <a href="#runtime" className="hover:text-zinc-950 transition-colors">
              [02] Runtime
            </a>
            <a href="#arsenal" className="hover:text-zinc-950 transition-colors">
              [03] Arsenal
            </a>
            <a href="#fieldwork" className="hover:text-zinc-950 transition-colors">
              [04] Field Work
            </a>
            <a href="#transmission" className="hover:text-zinc-950 transition-colors">
              [05] Transmission
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/bhavukar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md border border-zinc-200 text-xs font-mono text-zinc-700 hover:border-zinc-400 hover:text-zinc-950 transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
            <a
              href="#transmission"
              className="bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold px-4 py-2 rounded-md transition-all shadow-xs flex items-center gap-1.5"
            >
              <span>Initialize Contact</span>
              <ChevronRight size={14} />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Slide-down Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-b border-zinc-200 bg-white px-4 py-4 space-y-3"
            >
              <nav className="flex flex-col space-y-2 text-sm font-mono text-zinc-700">
                <a
                  href="#directives"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-1.5 rounded-md hover:bg-zinc-100"
                >
                  [01] Directives
                </a>
                <a
                  href="#runtime"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-1.5 rounded-md hover:bg-zinc-100"
                >
                  [02] Runtime
                </a>
                <a
                  href="#arsenal"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-1.5 rounded-md hover:bg-zinc-100"
                >
                  [03] Arsenal
                </a>
                <a
                  href="#fieldwork"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-1.5 rounded-md hover:bg-zinc-100"
                >
                  [04] Field Work
                </a>
                <a
                  href="#transmission"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-1.5 rounded-md hover:bg-zinc-100"
                >
                  [05] Transmission
                </a>
              </nav>
              <div className="pt-2 border-t border-zinc-100 flex items-center justify-between">
                <a
                  href="https://github.com/bhavukar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-zinc-600"
                >
                  <Github size={14} /> bhavukar
                </a>
                <a
                  href="#transmission"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-zinc-950 text-white text-xs font-medium px-3 py-1.5 rounded-md"
                >
                  Initialize Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          3. MAIN ARCHITECTURAL CONTAINER (Framed with 1px Guide Rails)
          ───────────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto border-x border-zinc-200 relative bg-white">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 light-grid pointer-events-none opacity-40" />

        {/* ───────────────────────────────────────────────────────────
            HERO SECTION
            ─────────────────────────────────────────────────────────── */}
        <section className="relative px-4 sm:px-8 md:px-12 pt-16 pb-14 border-b border-zinc-200">
          {/* Top Micro Telemetry */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-[11px] font-mono text-zinc-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>RUNTIME: ONLINE // CLOUDFLARE ISOLATES</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[11px] font-mono text-zinc-500">
              <span>LATENCY: 12ms</span>
              <span>•</span>
              <span>REGION: GLOBAL POP</span>
              <span>•</span>
              <span>P99: 38ms</span>
            </div>
          </div>

          {/* Headline with Infisical Signature Highlighter Blocks */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.035em] text-zinc-950 leading-[1.08]">
              Forward Deployed Engineer for{' '}
              <mark className="bg-[#fde047] text-black px-2.5 py-0.5 inline-block font-bold not-italic">
                Systems
              </mark>{' '}
              and{' '}
              <mark className="bg-[#fde047] text-black px-2.5 py-0.5 inline-block font-bold not-italic">
                Agents
              </mark>
            </h1>

            <p className="text-base sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-3xl">
              Architecting deterministic agentic runtimes, low-latency edge inference on Cloudflare
              V8 isolates, and resilient distributed workflows. Moving autonomous AI from experimental
              prompts to verified production infrastructure.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#transmission"
                className="bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-sm px-6 py-3 rounded-lg shadow-sm transition-all flex items-center gap-2"
              >
                <span>Initialize Transmission</span>
                <ChevronRight size={16} />
              </a>

              <a
                href="#runtime"
                className="border border-zinc-300 hover:border-zinc-900 bg-white hover:bg-zinc-50 text-zinc-900 font-medium text-sm px-6 py-3 rounded-lg transition-all flex items-center gap-2"
              >
                <span>Inspect Agent Runtime</span>
                <Sliders size={16} className="text-zinc-500" />
              </a>

              <a
                href="https://github.com/bhavukar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-950 text-sm font-mono px-3 py-3 flex items-center gap-1.5 transition-colors"
              >
                <Github size={16} />
                <span>github.com/bhavukar</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────
              INFISICAL SIGNATURE HERO VISUAL: RADAR TELEMETRY VIEWPORT
              (Recreation of reference screenshot media_1789295771218.png)
              ───────────────────────────────────────────────────────── */}
          <div className="mt-14 relative">
            <div className="rounded-xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden text-white relative">
              {/* Radar Top Bar */}
              <div className="border-b border-zinc-800/80 px-4 sm:px-6 py-3 bg-zinc-900/60 backdrop-blur-sm flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-emerald-400 font-semibold">POS {radarPingCount}, 316</span>
                  </div>
                  <span className="text-zinc-600">|</span>
                  <span className="text-zinc-400">EDGE_CLUSTER // GLOBAL_V8</span>
                </div>

                {/* Interactive Mode Toggle: HUMAN vs AGENT */}
                <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-md border border-zinc-800">
                  <button
                    onClick={() => setRadarMode('human')}
                    className={`px-3 py-1 rounded text-[11px] font-mono transition-all flex items-center gap-1.5 ${
                      radarMode === 'human'
                        ? 'bg-zinc-800 text-white font-bold'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    <span>{radarMode === 'human' ? '●' : '○'}</span>
                    <span>HUMAN</span>
                  </button>
                  <button
                    onClick={() => setRadarMode('agent')}
                    className={`px-3 py-1 rounded text-[11px] font-mono transition-all flex items-center gap-1.5 ${
                      radarMode === 'agent'
                        ? 'bg-[#fde047] text-black font-bold'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    <span>{radarMode === 'agent' ? '●' : '○'}</span>
                    <span>MACHINE / AGENT</span>
                  </button>
                </div>
              </div>

              {/* Radar Viewport Body */}
              <div className="p-6 sm:p-12 relative min-h-[360px] sm:min-h-[440px] flex flex-col justify-between radar-grid">
                {/* Crosshair guidelines */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="w-full h-px border-t border-dashed border-zinc-800/80" />
                  <div className="absolute h-full w-px border-l border-dashed border-zinc-800/80" />
                </div>

                {/* Subtle sweeping radar line */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className="w-64 h-64 sm:w-96 sm:h-96 rounded-full border border-zinc-700" />
                  <div className="w-40 h-40 sm:w-60 sm:h-60 rounded-full border border-zinc-800" />
                  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-zinc-800" />
                </div>

                {/* Top Corner Telemetry Badges */}
                <div className="flex justify-between items-start relative z-10 text-[11px] font-mono">
                  <div className="space-y-1">
                    <div className="text-zinc-500 tracking-wider">[RUNTIME SPEC]</div>
                    <div className="text-zinc-300">V8 ISOLATES • ZERO COLD START</div>
                    <div className="text-zinc-500">SCHEMAS: STRICT JSON_SCHEMA_2020</div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="text-zinc-500 tracking-wider">[SAFETY HARNESS]</div>
                    <div className="text-emerald-400">
                      {radarMode === 'human' ? 'HUMAN_APPROVAL: GATED' : 'AUTONOMOUS: CONSTRAINED_DAG'}
                    </div>
                    <div className="text-zinc-500">EVAL_LATENCY: 14.2ms</div>
                  </div>
                </div>

                {/* CENTRAL FOCAL TARGET BOX (Matches screenshot focal target!) */}
                <div className="relative z-10 flex flex-col items-center justify-center my-8 sm:my-10">
                  <div className="relative">
                    {/* Focal Coordinates Label */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-400 whitespace-nowrap">
                      POS {radarPingCount}, 316
                    </div>

                    {/* Central Highlighted Target Box */}
                    <div
                      onClick={handleManualPing}
                      className="cursor-pointer group relative w-28 h-28 sm:w-36 sm:h-36 rounded-lg bg-gradient-to-br from-amber-400/25 to-yellow-500/10 border-2 border-dashed border-amber-400/80 flex flex-col items-center justify-center p-3 shadow-[0_0_40px_rgba(251,191,36,0.15)] hover:border-amber-300 transition-all"
                    >
                      {/* Terminal Icon Inside Target */}
                      <div className="w-10 h-10 rounded-md bg-zinc-950/80 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-1 group-hover:scale-110 transition-transform">
                        {radarMode === 'agent' ? <Cpu size={20} /> : <Terminal size={20} />}
                      </div>
                      <span className="text-[10px] font-mono text-amber-300/90 font-bold uppercase tracking-wider">
                        {radarMode === 'agent' ? 'AGENT_CORE' : 'HUMAN_SUPER'}
                      </span>
                      <span className="text-[9px] font-mono text-zinc-400">
                        {isPinging ? 'PINGING...' : 'CLICK TO PULSE'}
                      </span>

                      {/* Corner Target Markers */}
                      <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-amber-400" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-amber-400" />
                      <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-amber-400" />
                      <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-amber-400" />
                    </div>

                    {/* Attached Callout Label (Exact Infisical style: ▲ [DIS90LTR3H 1CM5GG]) */}
                    <div className="absolute top-1/2 left-full ml-4 -translate-y-1/2 hidden md:block">
                      <div className="px-3 py-2 rounded bg-zinc-900 border border-zinc-700 text-left whitespace-nowrap shadow-lg">
                        <div className="text-[10px] font-mono text-rose-400 font-bold flex items-center gap-1">
                          <span>▲</span> [DIS90LTR3H 1CM5GG]
                        </div>
                        <div className="text-[9px] font-mono text-zinc-400">
                          [BASTUFT-LL BTL // ROUTE_STABLE]
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Telemetry Ticker */}
                <div className="border-t border-zinc-800/80 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-zinc-400 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-600">STATE:</span>
                    <span className="text-zinc-200 font-semibold">
                      {radarMode === 'agent'
                        ? 'AUTONOMOUS TOOL GRAPH ACTIVE'
                        : 'MANUAL SUPERVISORY MODE'}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-[11px]">
                    <span>INVENTORIED 03 NODES</span>
                    <span>•</span>
                    <span className="text-emerald-400">0 ERRORS REPORTED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            SECTION 01: [01 // DIRECTIVES] - ARCHITECTURAL PRINCIPLES
            ─────────────────────────────────────────────────────────── */}
        <section id="directives" className="px-4 sm:px-8 md:px-12 py-16 border-b border-zinc-200">
          {/* Section Header */}
          <div className="space-y-2 mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <span>[01 // DIRECTIVES]</span>
              <span className="h-px w-8 bg-zinc-300" />
              <span>CORE PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              Architectural Principles for Autonomous Systems
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-2xl">
              Building AI that operates reliably in mission-critical environments requires treating
              prompts as strict typed compilers and agent loops as deterministic state machines.
            </p>
          </div>

          {/* Bento Grid: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group p-6 rounded-xl border border-zinc-200/90 bg-white hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-950 mb-4 group-hover:bg-[#fde047] group-hover:text-black transition-colors">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  Directive 01
                </div>
                <h3 className="text-lg font-bold text-zinc-950 mb-2">
                  Deterministic Agent Runtimes
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Eliminating stochastic flakiness in production. Designing typed schema barriers,
                  constrained decoding, self-evaluating execution trees, and fallback harnesses that
                  guarantee output compliance with zero hallucination leaks.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5 text-[10px] font-mono text-zinc-500">
                <span className="px-2 py-0.5 rounded bg-zinc-100">JSON Schema</span>
                <span className="px-2 py-0.5 rounded bg-zinc-100">AST Validation</span>
                <span className="px-2 py-0.5 rounded bg-zinc-100">Eval Loops</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group p-6 rounded-xl border border-zinc-200/90 bg-white hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-950 mb-4 group-hover:bg-[#fde047] group-hover:text-black transition-colors">
                  <Zap size={20} />
                </div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  Directive 02
                </div>
                <h3 className="text-lg font-bold text-zinc-950 mb-2">
                  Edge & Low-Latency Execution
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Placing inference routing, caching, and state verification as close to users as
                  physically possible. Cloudflare Workers, V8 isolates, distributed key-value storage,
                  and streaming token transformers with sub-50ms execution budgets.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5 text-[10px] font-mono text-zinc-500">
                <span className="px-2 py-0.5 rounded bg-zinc-100">V8 Isolates</span>
                <span className="px-2 py-0.5 rounded bg-zinc-100">Cloudflare Workers</span>
                <span className="px-2 py-0.5 rounded bg-zinc-100">&lt;50ms TTFT</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group p-6 rounded-xl border border-zinc-200/90 bg-white hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-950 mb-4 group-hover:bg-[#fde047] group-hover:text-black transition-colors">
                  <Cpu size={20} />
                </div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  Directive 03
                </div>
                <h3 className="text-lg font-bold text-zinc-950 mb-2">
                  Forward Deployed Velocity
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Embedding directly at the frontier of complex operational environments. Rapid
                  zero-to-one prototyping, diagnosing friction points on the ground, and delivering
                  production-grade systems within days rather than quarters.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5 text-[10px] font-mono text-zinc-500">
                <span className="px-2 py-0.5 rounded bg-zinc-100">Zero to One</span>
                <span className="px-2 py-0.5 rounded bg-zinc-100">Full Lifecycle</span>
                <span className="px-2 py-0.5 rounded bg-zinc-100">Rapid Delivery</span>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            SECTION 02: [02 // RUNTIME] - INTERACTIVE AGENT PIPELINE
            ─────────────────────────────────────────────────────────── */}
        <section id="runtime" className="px-4 sm:px-8 md:px-12 py-16 border-b border-zinc-200 bg-zinc-50/50">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <span>[02 // RUNTIME]</span>
                <span className="h-px w-8 bg-zinc-300" />
                <span>EXECUTION PIPELINE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
                Autonomous Agent Execution Pipeline
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base max-w-2xl">
                Inspect how unstructured user intent is routed, decomposed into parallel tool calls
                over Model Context Protocol (MCP), and verified against formal schemas.
              </p>
            </div>

            {/* Interactive Simulation Trigger Button */}
            <button
              onClick={runSimulatedTrace}
              disabled={isSimulatingTrace}
              className="px-5 py-2.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 disabled:bg-zinc-400 text-white text-xs font-mono flex items-center gap-2 transition-all shadow-xs shrink-0 cursor-pointer"
            >
              {isSimulatingTrace ? (
                <>
                  <RotateCw size={14} className="animate-spin" />
                  <span>RUNNING TRACE...</span>
                </>
              ) : (
                <>
                  <Play size={14} />
                  <span>SIMULATE TRACE</span>
                </>
              )}
            </button>
          </div>

          {/* Interactive Pipeline Visualizer */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
            {[
              {
                index: 0,
                step: '01',
                title: 'Context Ingestion',
                subtitle: 'Prompt Tensors & Embeddings',
                description:
                  'Multi-modal inputs and system instructions are normalized into high-dimensional embeddings and cached in memory.',
                tag: 'Embeddings // pgvector'
              },
              {
                index: 1,
                step: '02',
                title: 'Intent Decomposition',
                subtitle: 'DAG Planner & Router',
                description:
                  'The agent evaluates goals, identifies sub-problems, and synthesizes an execution graph with defined safety constraints.',
                tag: 'Planner // Structured DAG'
              },
              {
                index: 2,
                step: '03',
                title: 'Tool Execution Bus',
                subtitle: 'MCP & Edge Function Calls',
                description:
                  'Dispatches sandboxed operations to external systems over Model Context Protocol with enforced rate limits & timeouts.',
                tag: 'MCP Bus // V8 Isolates'
              },
              {
                index: 3,
                step: '04',
                title: 'Verification & Output',
                subtitle: 'AST Checks & Token Stream',
                description:
                  'Responses pass through strict JSON schema validation and hallucination filters before streaming to client endpoints.',
                tag: 'Verified // 0 Errors'
              }
            ].map(stage => {
              const isActive = activePipelineStep === stage.index;
              return (
                <div
                  key={stage.step}
                  onClick={() => setActivePipelineStep(stage.index)}
                  className={`cursor-pointer p-5 rounded-xl border transition-all ${
                    isActive
                      ? 'bg-white border-zinc-950 shadow-md ring-1 ring-zinc-950'
                      : 'bg-white/80 border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isActive ? 'bg-[#fde047] text-black' : 'bg-zinc-100 text-zinc-600'
                      }`}
                    >
                      STAGE {stage.step}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    )}
                  </div>
                  <h4 className="font-bold text-sm text-zinc-950 mb-1">{stage.title}</h4>
                  <div className="text-[11px] font-mono text-zinc-500 mb-2">{stage.subtitle}</div>
                  <p className="text-xs text-zinc-600 leading-relaxed mb-4">{stage.description}</p>
                  <div className="text-[10px] font-mono text-zinc-400 border-t border-zinc-100 pt-2">
                    {stage.tag}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Live Trace Terminal Output */}
          <div className="rounded-xl bg-zinc-950 border border-zinc-800 p-4 font-mono text-xs text-zinc-300 overflow-hidden shadow-lg">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3 text-[11px] text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>TRACE INSPECTOR CONSOLE</span>
              </div>
              <span>ISOLATE: cf-worker-iad-01</span>
            </div>
            <div className="space-y-1.5 max-h-36 overflow-y-auto">
              {traceLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2 ${
                    log.includes('COMPLETE') || log.includes('verified')
                      ? 'text-emerald-400 font-semibold'
                      : log.includes('START')
                      ? 'text-amber-300'
                      : 'text-zinc-300'
                  }`}
                >
                  <span className="text-zinc-600 select-none">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            SECTION 03: [03 // ARSENAL] - SYSTEMS & TOOLING MATRIX
            ─────────────────────────────────────────────────────────── */}
        <section id="arsenal" className="px-4 sm:px-8 md:px-12 py-16 border-b border-zinc-200">
          <div className="space-y-2 mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <span>[03 // ARSENAL]</span>
              <span className="h-px w-8 bg-zinc-300" />
              <span>STACK & INFRASTRUCTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              Systems & Engineering Arsenal
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-2xl">
              Languages, runtimes, and protocols deployed across client interfaces, edge servers, and
              autonomous model loops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Column 1: Core Systems */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-zinc-950 border-b border-zinc-200 pb-2 flex items-center gap-1.5">
                <Code2 size={16} className="text-zinc-700" />
                <span>CORE SYSTEMS</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-zinc-700">
                <li className="p-2.5 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">Rust</span>
                  <span className="text-[10px] text-zinc-500">Low-level / CLI</span>
                </li>
                <li className="p-2.5 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">TypeScript</span>
                  <span className="text-[10px] text-zinc-500">Edge / Fullstack</span>
                </li>
                <li className="p-2.5 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">Python</span>
                  <span className="text-[10px] text-zinc-500">AI / Pipelines</span>
                </li>
                <li className="p-2.5 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">Dart / Swift</span>
                  <span className="text-[10px] text-zinc-500">Mobile Systems</span>
                </li>
              </ul>
            </div>

            {/* Column 2: AI & Agentic Stack */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-zinc-950 border-b border-zinc-200 pb-2 flex items-center gap-1.5">
                <Sparkles size={16} className="text-zinc-700" />
                <span>AI & AGENTIC STACK</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-zinc-700">
                <li className="p-2.5 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">Model Context Protocol</span>
                  <span className="text-[10px] text-zinc-500">MCP Bus</span>
                </li>
                <li className="p-2.5 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">Structured Outputs</span>
                  <span className="text-[10px] text-zinc-500">JSON Schema</span>
                </li>
                <li className="p-2.5 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">LangGraph / Llama</span>
                  <span className="text-[10px] text-zinc-500">DAG Control</span>
                </li>
                <li className="p-2.5 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">Vector Indexing</span>
                  <span className="text-[10px] text-zinc-500">pgvector / Pinecone</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Edge & Infrastructure */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-zinc-950 border-b border-zinc-200 pb-2 flex items-center gap-1.5">
                <Server size={16} className="text-zinc-700" />
                <span>EDGE & CLOUD INFRA</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-zinc-700">
                <li className="p-2.5 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">Cloudflare Workers</span>
                  <span className="text-[10px] text-zinc-500">Global V8</span>
                </li>
                <li className="p-2.5 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">PostgreSQL / Redis</span>
                  <span className="text-[10px] text-zinc-500">Distributed DB</span>
                </li>
                <li className="p-2.5 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">Docker & Containers</span>
                  <span className="text-[10px] text-zinc-500">Sandboxes</span>
                </li>
                <li className="p-2.5 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">GitHub Actions</span>
                  <span className="text-[10px] text-zinc-500">Automated CI/CD</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Client & Platform */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-zinc-950 border-b border-zinc-200 pb-2 flex items-center gap-1.5">
                <Globe size={16} className="text-zinc-700" />
                <span>CLIENT & PLATFORMS</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-zinc-700">
                <li className="p-2.5 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">Next.js 16</span>
                  <span className="text-[10px] text-zinc-500">Turbopack / SSR</span>
                </li>
                <li className="p-2.5 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">Flutter</span>
                  <span className="text-[10px] text-zinc-500">20k+ MAU Mobile</span>
                </li>
                <li className="p-2.5 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">React 19</span>
                  <span className="text-[10px] text-zinc-500">Interactive UI</span>
                </li>
                <li className="p-2.5 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">Tailwind CSS</span>
                  <span className="text-[10px] text-zinc-500">Design Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            SECTION 04: [04 // FIELD WORK] - PRODUCTION SYSTEMS
            ─────────────────────────────────────────────────────────── */}
        <section id="fieldwork" className="px-4 sm:px-8 md:px-12 py-16 border-b border-zinc-200">
          <div className="space-y-2 mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <span>[04 // FIELD WORK]</span>
              <span className="h-px w-8 bg-zinc-300" />
              <span>PRODUCTION DEPLOYMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              Selected Deployments & Systems Architecture
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-2xl">
              Production systems built from zero to scale, high-throughput developer utilities, and
              agentic workflows operating in the wild.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* System 1: Reve */}
            <div className="group p-6 sm:p-8 rounded-xl border border-zinc-200/90 bg-white hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#fde047] text-black font-bold">
                    FOUNDING ENGINEER // SCALE
                  </span>
                  <a
                    href="https://reve.rsvp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-950 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 mb-2">Reve</h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                  Founding team member driving architecture from zero to 20,000+ active users. Built
                  the cross-platform mobile infrastructure, optimized offline-first SQLite cache,
                  and engineered low-latency event synchronization pipelines across iOS and Android.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-2 text-xs font-mono text-zinc-600">
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Flutter</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">SQLite</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Realtime Sync</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">20k+ MAU</span>
              </div>
            </div>

            {/* System 2: Fork AI */}
            <div className="group p-6 sm:p-8 rounded-xl border border-zinc-200/90 bg-white hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-950 text-white font-bold">
                    AI AGENTIC PLATFORM
                  </span>
                  <span className="text-xs font-mono text-zinc-400">[IN PRODUCTION]</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 mb-2">Fork AI</h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                  Autonomous creator discovery & brand intelligence platform. Engineered structured
                  LLM extraction harnesses, semantic creator embeddings, and automated tax compliance
                  calculation pipelines for enterprise campaigns.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-2 text-xs font-mono text-zinc-600">
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Agent Tooling</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Embeddings</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Tax Logic</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">TypeScript</span>
              </div>
            </div>

            {/* System 3: subway-sim */}
            <div className="group p-6 sm:p-8 rounded-xl border border-zinc-200/90 bg-white hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 font-bold">
                    RUST // SYSTEMS CLI
                  </span>
                  <a
                    href="https://github.com/bhavukar/subway-sim.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-950 transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 mb-2">subway-sim</h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                  System-level network chaos simulator written in Rust. Injects jitter, packet loss,
                  and subterranean cell signal degradation into localhost sockets to verify agent
                  retry loops and mobile state machine recovery under adverse conditions.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-2 text-xs font-mono text-zinc-600">
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Rust</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Sockets</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Chaos Engineering</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">CLI</span>
              </div>
            </div>

            {/* System 4: asset-vibe */}
            <div className="group p-6 sm:p-8 rounded-xl border border-zinc-200/90 bg-white hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 font-bold">
                    RUST // COMPILER PIPELINE
                  </span>
                  <a
                    href="https://github.com/bhavukar/asset-vibe.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-950 transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 mb-2">asset-vibe</h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                  Zero-overhead mobile asset compilation toolchain. Watches design directories to
                  instantly generate 1x, 2x, 3x iOS and Android drawables with strongly typed code
                  references, replacing sluggish node scripts with sub-millisecond Rust execution.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-2 text-xs font-mono text-zinc-600">
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Rust</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Image Processing</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded">Code Generation</span>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            SECTION 05: [05 // TRANSMISSION] - DIRECT CONTACT MODULE
            (Infisical Signature High-Contrast Dark Callout Box)
            ─────────────────────────────────────────────────────────── */}
        <section id="transmission" className="px-4 sm:px-8 md:px-12 py-16">
          <div className="rounded-2xl bg-zinc-950 text-white p-8 sm:p-12 border border-zinc-800 shadow-2xl relative overflow-hidden">
            {/* Background ambient voltage glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#fde047]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-8">
              {/* Header */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>TRANSMISSION CHANNEL OPEN</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                  Initialize Transmission
                </h2>
                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                  Looking for a Forward Deployed Engineer to design deterministic agentic runtimes,
                  ship resilient edge architectures, or lead zero-to-one product engineering? Let's
                  build.
                </p>
              </div>

              {/* Direct One-Click Email Copy Module */}
              <div className="p-4 sm:p-5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    Direct Electronic Mail
                  </div>
                  <div className="text-base sm:text-lg font-mono font-bold text-white select-all">
                    bhavuk.arora03@gmail.com
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono font-semibold text-white transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={14} className="text-[#fde047]" />
                        <span className="text-[#fde047]">COPIED TO CLIPBOARD</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>COPY EMAIL</span>
                      </>
                    )}
                  </button>
                  <a
                    href="mailto:bhavuk.arora03@gmail.com"
                    className="px-4 py-2.5 rounded-lg bg-[#fde047] hover:bg-yellow-300 text-black text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>MAILTO</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Real-time Location & Telemetry Strip */}
              <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-zinc-400">
                <div className="space-y-1">
                  <div className="text-zinc-600">STATION BASE</div>
                  <div className="text-zinc-200 font-semibold">New Delhi, India (IST)</div>
                </div>

                <div className="space-y-1">
                  <div className="text-zinc-600">LIVE CHRONOMETER</div>
                  <div className="text-emerald-400 font-mono font-semibold">
                    {currentTime || '12:00:00'} IST (UTC+5:30)
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-zinc-600">ENGAGEMENT STATUS</div>
                  <div className="text-zinc-200 font-semibold">Open for High-Impact Roles</div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://github.com/bhavukar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  <Github size={16} />
                  <span>github.com/bhavukar</span>
                </a>
                <span className="text-zinc-800">•</span>
                <a
                  href="https://www.linkedin.com/in/bhavuk-arora-4a7263216/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <span className="text-zinc-800">•</span>
                <a
                  href="https://www.instagram.com/nobhavuk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  <Twitter size={16} />
                  <span>@nobhavuk</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────
            MINIMALIST FOOTER
            ─────────────────────────────────────────────────────────── */}
        <footer className="border-t border-zinc-200 px-4 sm:px-8 md:px-12 py-8 bg-zinc-50/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
            <div>© {new Date().getFullYear()} Bhavuk Arora. All rights reserved.</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>GLOBAL EDGE NETWORK OPERATIONAL</span>
            </div>
            <div>
              <span>EDGE RUNTIME: </span>
              <span className="text-zinc-800 font-semibold">CLOUDFLARE WORKERS</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
