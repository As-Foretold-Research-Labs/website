"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const patientScenarios = [
  {
    id: "scen-01",
    patientName: "Eleanor Vance (Age 64)",
    chiefComplaint: "Acute Chest Tightness & Dyspnea",
    personality: "Anxious, hesitant to share medication history",
    sampleQuestions: [
      "Can you describe when the chest tightness started?",
      "Does the pressure radiate into your left shoulder or jaw?",
      "Are you currently taking any prescription cardiac medications?",
    ],
    responses: {
      "Can you describe when the chest tightness started?": {
        dialogue: "It started about 2 hours ago while I was gardening. At first I thought it was just heartburn, but then I felt winded...",
        empathyScore: 94,
        clinicalInsight: "Good open-ended inquiry. Patient revealed onset context and respiratory involvement.",
        branchState: "Symptom Onset Explored",
      },
      "Does the pressure radiate into your left shoulder or jaw?": {
        dialogue: "Yes! Now that you mention it, my left arm feels heavy and tingly. Should I be worried Doctor?",
        empathyScore: 91,
        clinicalInsight: "Crucial rule-out question for Acute Coronary Syndrome (ACS). Triage flag raised.",
        branchState: "ACS Symptom Positive",
      },
      "Are you currently taking any prescription cardiac medications?": {
        dialogue: "I was prescribed something last year... Lisinopril I think, but I stopped taking it two weeks ago because of the cough...",
        empathyScore: 88,
        clinicalInsight: "Patient adherence gap identified. Non-compliance with antihypertensives noted.",
        branchState: "Medication Adherence Gap",
      },
    },
  },
  {
    id: "scen-02",
    patientName: "Marcus Brody (Age 42)",
    chiefComplaint: "Severe Epigastric Pain & Nausea",
    personality: "Stoic, minimizes symptoms, high stress job",
    sampleQuestions: [
      "How would you rate your pain on a scale of 1 to 10 right now?",
      "Have you noticed any changes in stool color or dark tarry stools?",
      "How many cups of coffee or alcoholic drinks do you have daily?",
    ],
    responses: {
      "How would you rate your pain on a scale of 1 to 10 right now?": {
        dialogue: "It's maybe a 7... but I have a high pain tolerance. It gets sharp right after I eat or drink espresso.",
        empathyScore: 89,
        clinicalInsight: "Postprandial exacerbation noted. Suspect peptic ulcer disease or gastritis.",
        branchState: "Pain Intensity Assessed",
      },
      "Have you noticed any changes in stool color or dark tarry stools?": {
        dialogue: "Actually... yes, yesterday morning it looked almost black. I thought it was from iron supplements.",
        empathyScore: 96,
        clinicalInsight: "Critical upper GI bleeding signal (Melena). Immediate Hgb evaluation indicated.",
        branchState: "GI Bleed Risk Detected",
      },
      "How many cups of coffee or alcoholic drinks do you have daily?": {
        dialogue: "I drink about 4 cups of black coffee during work shifts and a glass of scotch to wind down at night.",
        empathyScore: 85,
        clinicalInsight: "Identified mucosal irritants contributing to potential gastric ulceration.",
        branchState: "Lifestyle Factors Identified",
      },
    },
  },
];

export default function DokSimProductPage() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(patientScenarios[0].id);
  const [selectedQuestion, setSelectedQuestion] = useState(patientScenarios[0].sampleQuestions[0]);
  const [customQuestion, setCustomQuestion] = useState("");
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "simulator" | "tech">("overview");

  const activeScenario = patientScenarios.find((s) => s.id === selectedScenarioId) || patientScenarios[0];
  const activeResponse = activeScenario.responses[selectedQuestion as keyof typeof activeScenario.responses] || {
    dialogue: "I'm not quite sure how to answer that doctor...",
    empathyScore: 80,
    clinicalInsight: "Evaluating trainee inquiry structure.",
    branchState: "Standard Probe",
  };

  const handleAskQuestion = (q: string) => {
    setSelectedQuestion(q);
    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#0c0d10] text-zinc-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/#products" className="hover:text-white transition-colors">Products</Link>
          <span>/</span>
          <span className="text-[#ff7722] font-semibold">DokSim</span>
        </div>

        {/* HERO HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#181a20] border border-zinc-800 text-[#ff7722] text-xs font-mono uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff6000] animate-pulse" />
              Clinical Training & Patient Simulation
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              DokSim
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Advanced patient communication simulator powered by Python 3.11, LangGraph agentic state machines, and Chroma vector stores. Allows medical students and residents to conduct virtual patient interviews with real-time empathy rubrics and diagnostic evaluation.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 rounded-md bg-zinc-900 text-emerald-400 border border-zinc-800 text-xs font-mono">
                Python 3.11
              </span>
              <span className="px-3 py-1 rounded-md bg-zinc-900 text-[#ff7722] border border-zinc-800 text-xs font-mono">
                LangGraph
              </span>
              <span className="px-3 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs font-mono">
                Chroma DB RAG
              </span>
              <span className="px-3 py-1 rounded-md bg-zinc-900 text-amber-400 border border-zinc-800 text-xs font-mono">
                FastAPI
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setActiveTab("simulator");
                  const el = document.getElementById("doksim-demo-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn btn-primary text-sm py-3 px-6"
              >
                Launch Patient Simulator
              </button>
              <Link
                href="/contact"
                className="btn btn-secondary text-sm py-3 px-6"
              >
                Institutional Pilot Inquiry
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-zinc-800 bg-[#14161b] p-2 shadow-xl overflow-hidden group">
              <div className="relative w-full h-72 md:h-80 rounded-lg overflow-hidden bg-black">
                <Image
                  src="/doksim-dashboard.png"
                  alt="DokSim Clinical Dashboard Preview"
                  fill
                  className="object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1.5 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Real-time Patient Evaluation
                </span>
                <span className="text-[#ff7722] font-mono font-semibold">FastAPI + LangGraph</span>
              </div>
            </div>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <div className="flex border-b border-zinc-800 mb-12">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3 px-6 font-semibold text-sm transition-colors border-b-2 -mb-px ${
              activeTab === "overview"
                ? "border-[#ff6000] text-[#ff7722]"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Clinical Features
          </button>
          <button
            onClick={() => setActiveTab("simulator")}
            className={`py-3 px-6 font-semibold text-sm transition-colors border-b-2 -mb-px ${
              activeTab === "simulator"
                ? "border-[#ff6000] text-[#ff7722]"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Interactive Clinical Simulator
          </button>
          <button
            onClick={() => setActiveTab("tech")}
            className={`py-3 px-6 font-semibold text-sm transition-colors border-b-2 -mb-px ${
              activeTab === "tech"
                ? "border-emerald-400 text-emerald-400"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            AI Engine Architecture
          </button>
        </div>

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-in fade-in duration-300">
            <div className="p-6 rounded-2xl border border-white/10 bg-slate-900/50">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Safe Branching Dialogue</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                LangGraph agentic state machines maintain safe patient boundaries while dynamically responding to emotional cues, body language probes, and clinical line-of-questioning.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-slate-900/50">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Real-Time Evaluation Rubrics</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Calculates instant feedback on clinical rapport, diagnostic specificity, empathy scores, and protocol adherence following standard OSCE medical guidelines.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-slate-900/50">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Medical Vector Retrieval</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Integrates Chroma DB vector search across peer-reviewed clinical knowledge bases, ensuring patient personas output grounded medical facts without hallucinations.
              </p>
            </div>
          </div>
        )}

        {/* INTERACTIVE CLINICAL SIMULATOR */}
        {(activeTab === "simulator" || activeTab === "overview") && (
          <div id="doksim-demo-section" className="mt-12 p-8 rounded-3xl border border-emerald-500/30 bg-slate-900/70 shadow-2xl">
            <div className="mb-8">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Interactive Simulation</span>
              <h3 className="text-2xl font-bold text-white">DokSim Virtual Patient Interview</h3>
              <p className="text-slate-400 text-sm mt-1">Select a clinical patient case and choose interview probes to observe real-time AI evaluation.</p>
            </div>

            {/* Scenario Selection Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {patientScenarios.map((scen) => (
                <div
                  key={scen.id}
                  onClick={() => {
                    setSelectedScenarioId(scen.id);
                    setSelectedQuestion(scen.sampleQuestions[0]);
                  }}
                  className={`cursor-pointer p-5 rounded-2xl border transition-all ${
                    selectedScenarioId === scen.id
                      ? "border-emerald-500 bg-emerald-500/10 shadow-lg"
                      : "border-white/10 bg-slate-800/40 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-emerald-400 font-bold">{scen.patientName}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                      OSCE CASE
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">Chief Complaint: {scen.chiefComplaint}</div>
                  <div className="text-xs text-slate-400">Persona traits: {scen.personality}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Question probes */}
              <div className="lg:col-span-5 space-y-3">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Select Clinical Question Probe:
                </label>
                {activeScenario.sampleQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAskQuestion(q)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs leading-relaxed transition-all ${
                      selectedQuestion === q
                        ? "border-emerald-500 bg-emerald-500/20 text-white font-medium"
                        : "border-white/10 bg-slate-800/50 text-slate-300 hover:border-white/20"
                    }`}
                  >
                    &ldquo;{q}&rdquo;
                  </button>
                ))}

                <div className="pt-2">
                  <label className="block text-xs font-medium text-slate-400 mb-1">Or type custom question:</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={customQuestion}
                      onChange={(e) => setCustomQuestion(e.target.value)}
                      placeholder="e.g., Do you have a family history of heart disease?"
                      className="flex-1 text-xs p-3 rounded-lg bg-black/40 border border-white/10 text-slate-200 focus:outline-none focus:border-emerald-500"
                    />
                    <button
                      onClick={() => customQuestion && handleAskQuestion(customQuestion)}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-500"
                    >
                      Ask
                    </button>
                  </div>
                </div>
              </div>

              {/* Patient Response & Evaluation Box */}
              <div className="lg:col-span-7 bg-black/70 rounded-2xl border border-white/10 p-6 flex flex-col justify-between font-mono text-xs">
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <span className="text-slate-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      PATIENT_AGENT // {activeScenario.patientName}
                    </span>
                    <span className="text-emerald-400 font-semibold">BRANCH: {activeResponse.branchState}</span>
                  </div>

                  {isEvaluating ? (
                    <div className="py-12 text-center text-slate-400 animate-pulse">
                      Executing LangGraph node transition & Chroma RAG check...
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-emerald-950/20 p-4 rounded-xl border border-emerald-500/30">
                        <div className="text-emerald-400 text-[10px] uppercase mb-1 font-sans font-bold">Patient Verbal Response:</div>
                        <p className="text-slate-100 text-sm font-sans italic leading-relaxed">
                          &ldquo;{activeResponse.dialogue}&rdquo;
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                          <div className="text-slate-500 text-[10px] uppercase mb-0.5">Empathy & Rapport Score:</div>
                          <div className="text-lg font-bold text-emerald-400">{activeResponse.empathyScore} / 100</div>
                        </div>

                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                          <div className="text-slate-500 text-[10px] uppercase mb-0.5">Diagnostic Signal:</div>
                          <div className="text-xs font-bold text-indigo-300 truncate">{activeResponse.branchState}</div>
                        </div>
                      </div>

                      <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                        <div className="text-slate-500 text-[10px] uppercase mb-1">Clinical Evaluator Feedback:</div>
                        <p className="text-slate-300 text-xs leading-relaxed font-sans">
                          {activeResponse.clinicalInsight}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500 mt-6">
                  <span>Python 3.11 / LangGraph Engine</span>
                  <span className="text-slate-400">Response Latency: 32ms</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TECH SPECIFICATIONS */}
        {activeTab === "tech" && (
          <div className="mt-12 p-8 rounded-3xl border border-white/10 bg-slate-900/50 space-y-6">
            <h3 className="text-2xl font-bold text-white">DokSim Technical Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <h4 className="font-semibold text-emerald-400">Agentic Orchestration</h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  LangGraph graph-based dialogue states ensure non-linear patient interaction without losing critical medical history context or triggering out-of-character hallucinated statements.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <h4 className="font-semibold text-indigo-400">Vector Knowledge Base</h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Chroma DB vector index with medical symptom embeddings to ground responses against official OSCE medical reference literature.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
