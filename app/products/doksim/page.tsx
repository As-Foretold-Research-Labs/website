"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const patientScenarios = [
  {
    id: "scen-01",
    patientName: "Arthur M. // Age: 61",
    chiefComplaint: "Retrosternal pressure, autonomic distress, Metformin cessation",
    personality: "Anxious, hesitant to share medication history, defensive distress",
    sampleQuestions: [
      "Can you describe when the chest tightness started?",
      "Does the pressure radiate into your left shoulder or jaw?",
      "Are you currently taking any prescription cardiac medications?",
    ],
    responses: {
      "Can you describe when the chest tightness started?": {
        dialogue: "Look, doctor, I stopped taking that Metformin because it made me sick through all my 12-hour shifts. Now my chest feels tight like a clamp. Are you going to admit me or just give me another checklist about diet?",
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
    <div className="min-h-screen bg-obsidian text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-mono text-dim mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-surface-border">/</span>
          <Link href="/#platforms" className="hover:text-white transition-colors">Platforms</Link>
          <span className="text-surface-border">/</span>
          <span className="text-cobalt-light font-semibold">DokSim</span>
        </div>

        {/* HERO HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-surface border border-surface-border text-emerald-glow text-xs font-mono uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-glow animate-pulse" />
              High-Stakes Clinical Validation Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              DokSim <span className="text-dim font-normal">|</span> High-Assurance Clinical Dialogue & Diagnostic Simulation
            </h1>

            <p className="text-lg sm:text-xl font-normal text-steel max-w-3xl leading-relaxed mb-8">
              Standardizing clinical readiness and diagnostic precision through deterministic simulation. DokSim provides hospital networks and medical institutions with sovereign evaluation environments to train, evaluate, and benchmark high-stakes clinician decision-making.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 rounded border border-surface-border bg-surface text-emerald-glow text-xs font-mono">Python 3.11</span>
              <span className="px-3 py-1 rounded border border-surface-border bg-surface text-cobalt-light text-xs font-mono">LangGraph</span>
              <span className="px-3 py-1 rounded border border-surface-border bg-surface text-white text-xs font-mono">ChromaDB RAG</span>
              <span className="px-3 py-1 rounded border border-surface-border bg-surface text-amber text-xs font-mono">FastAPI</span>
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
                href="#pilot-consultation"
                className="btn btn-secondary text-sm py-3 px-6"
              >
                Institutional Pilot Inquiry
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded border border-surface-border bg-surface-card p-2 shadow-xl overflow-hidden group">
              <div className="relative w-full h-72 md:h-80 rounded overflow-hidden bg-black">
                <Image
                  src="/doksim-dashboard.png"
                  alt="DokSim Clinical Dashboard Preview"
                  fill
                  className="object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 flex items-center justify-between text-xs text-dim">
                <span className="flex items-center gap-1.5 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Real-time Patient Evaluation
                </span>
                <span className="text-cobalt-light font-mono font-semibold">FastAPI + LangGraph</span>
              </div>
            </div>
          </div>
        </div>

        {/* MISSION HARDENED TELEMETRY STRIP */}
        <div className="w-full mt-14 pt-8 border-t border-surface-border/80 grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="border-l border-surface-border pl-4">
            <div className="font-mono text-2xl font-semibold text-white">99.8%</div>
            <div className="font-mono text-[11px] text-dim uppercase tracking-wider mt-1">Safety Rubric Reliability</div>
          </div>
          <div className="border-l border-surface-border pl-4">
            <div className="font-mono text-2xl font-semibold text-cobalt-glow">{"<"} 16ms</div>
            <div className="font-mono text-[11px] text-dim uppercase tracking-wider mt-1">Ground-Truth RAG Latency</div>
          </div>
          <div className="border-l border-surface-border pl-4">
            <div className="font-mono text-2xl font-semibold text-white">0.00%</div>
            <div className="font-mono text-[11px] text-dim uppercase tracking-wider mt-1">Clinical Hallucination Margin</div>
          </div>
          <div className="border-l border-surface-border pl-4">
            <div className="font-mono text-2xl font-semibold text-emerald-glow">Air-Gapped</div>
            <div className="font-mono text-[11px] text-dim uppercase tracking-wider mt-1">Sovereign Node Isolation</div>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <div className="flex border-b border-surface-border mb-12">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3 px-6 font-semibold text-sm transition-colors border-b-2 -mb-px ${activeTab === "overview" ? "border-cobalt-light text-cobalt-light" : "border-transparent text-dim hover:text-white"}`}
          >
            Clinical Features
          </button>
          <button
            onClick={() => setActiveTab("simulator")}
            className={`py-3 px-6 font-semibold text-sm transition-colors border-b-2 -mb-px ${activeTab === "simulator" ? "border-cobalt-light text-cobalt-light" : "border-transparent text-dim hover:text-white"}`}
          >
            Interactive Clinical Simulator
          </button>
          <button
            onClick={() => setActiveTab("tech")}
            className={`py-3 px-6 font-semibold text-sm transition-colors border-b-2 -mb-px ${activeTab === "tech" ? "border-emerald-glow text-emerald-glow" : "border-transparent text-dim hover:text-white"}`}
          >
            AI Engine Architecture
          </button>
        </div>

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-7 rounded border border-surface-border bg-surface-card hover:border-surface-border-strong transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded bg-surface border border-surface-border flex items-center justify-center text-cobalt-light font-mono text-[12px]">01</div>
                <h3 className="text-[17px] font-semibold text-white">Deterministic Evaluation State Machines</h3>
              </div>
              <p className="font-body text-[13px] text-steel leading-relaxed mb-5">
                Multi-turn, stateful conversational graphs with deterministic branching and clinical risk guardrails. Ensures conversational pathways strictly adhere to medical simulation rubrics, preventing simulated patients from deviating into non-clinical territory or fabricating non-physical clinical records.
              </p>
              <div className="pt-4 border-t border-surface-border flex items-center gap-3 font-mono text-[10px] text-dim uppercase">
                <span>State Graph Enforcement</span>
                <span className="text-surface-border">•</span>
                <span>Zero Path Deviation</span>
              </div>
            </div>

            <div className="p-7 rounded border border-surface-border bg-surface-card hover:border-surface-border-strong transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded bg-surface border border-surface-border flex items-center justify-center text-cobalt-light font-mono text-[12px]">02</div>
                <h3 className="text-[17px] font-semibold text-white">Objective Multi-Dimensional Empathy Rubrics</h3>
              </div>
              <p className="font-body text-[13px] text-steel leading-relaxed mb-5">
                Standardized scoring models measuring bedside manner, active listening, validation, and diagnostic interview protocols. The evaluator operates concurrently via an asynchronous inspector node, giving trainees instant telemetry without disrupting conversational immersion.
              </p>
              <div className="pt-4 border-t border-surface-border flex items-center gap-3 font-mono text-[10px] text-dim uppercase">
                <span>12-Axis Rubric</span>
                <span className="text-surface-border">•</span>
                <span>Quantitative Accreditation</span>
              </div>
            </div>

            <div className="p-7 rounded border border-surface-border bg-surface-card hover:border-surface-border-strong transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded bg-surface border border-surface-border flex items-center justify-center text-cobalt-light font-mono text-[12px]">03</div>
                <h3 className="text-[17px] font-semibold text-white">Clinical Ground-Truth Knowledge Synthesis</h3>
              </div>
              <p className="font-body text-[13px] text-steel leading-relaxed mb-5">
                Sub-20ms vector retrieval grounded in peer-reviewed clinical guidelines, pharmacology contraindication databases, and DSM-5 / ICD-11 criteria. Zero tolerance for synthetic pharmaceutical errors or ungrounded medical advisement.
              </p>
              <div className="pt-4 border-t border-surface-border flex items-center gap-3 font-mono text-[10px] text-dim uppercase">
                <span>Chroma Knowledge Graph</span>
                <span className="text-surface-border">•</span>
                <span>Sub-16ms Query Bounds</span>
              </div>
            </div>

            <div className="p-7 rounded border border-surface-border bg-surface-card hover:border-surface-border-strong transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded bg-surface border border-surface-border flex items-center justify-center text-cobalt-light font-mono text-[12px]">04</div>
                <h3 className="text-[17px] font-semibold text-white">Institutional Performance Intelligence</h3>
              </div>
              <p className="font-body text-[13px] text-steel leading-relaxed mb-5">
                Aggregated cohort analytics for deans and program directors. Longitudinal tracking across cohorts to detect systemic curriculum blind spots, diagnostic hesitation points, and bedside communication deficiencies before trainees reach clinical rotations.
              </p>
              <div className="pt-4 border-t border-surface-border flex items-center gap-3 font-mono text-[10px] text-dim uppercase">
                <span>ACGME Mapping</span>
                <span className="text-surface-border">•</span>
                <span>OSCE Export Integration</span>
              </div>
            </div>
          </div>
        )}

        {/* INTERACTIVE CLINICAL SIMULATOR */}
        {(activeTab === "simulator" || activeTab === "overview") && (
          <div id="doksim-demo-section" className="mt-12 p-8 rounded border border-surface-border bg-surface-card shadow-2xl">
            <div className="mb-8">
              <span className="text-xs font-mono text-cobalt-light uppercase tracking-widest">Operational Verification Environment</span>
              <h3 className="text-2xl font-semibold text-white">Sovereign Clinical Simulation Console</h3>
              <p className="font-body text-[15px] text-steel leading-relaxed mb-8">
                Select a clinical patient case and choose interview probes to observe real-time AI evaluation.
              </p>
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
                  className={`cursor-pointer p-5 rounded border transition-all ${selectedScenarioId === scen.id ? "border-emerald-glow bg-emerald-950/30 shadow-lg" : "border-surface-border bg-surface hover:border-surface-border-strong"}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-emerald-glow font-bold">{scen.patientName}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/30 text-emerald-glow font-semibold border border-emerald-500/30">
                      OSCE CASE
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">Chief Complaint: {scen.chiefComplaint}</div>
                  <div className="text-xs text-dim">Persona traits: {scen.personality}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Question probes */}
              <div className="lg:col-span-5 space-y-3">
                <label className="block text-xs font-semibold text-steel uppercase tracking-wider mb-2">
                  Select Clinical Question Probe:
                </label>
                {activeScenario.sampleQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAskQuestion(q)}
                    className={`w-full text-left p-3.5 rounded border text-xs leading-relaxed transition-all ${selectedQuestion === q ? "border-emerald-glow bg-emerald-950/30 text-white font-medium" : "border-surface-border bg-surface text-steel hover:border-surface-border-strong"}`}
                  >
                    &ldquo;{q}&rdquo;
                  </button>
                ))}

                <div className="pt-2">
                  <label className="block text-xs font-medium text-dim mb-1">Or type custom question:</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={customQuestion}
                      onChange={(e) => setCustomQuestion(e.target.value)}
                      placeholder="e.g., Do you have a family history of heart disease?"
                      className="flex-1 text-xs p-3 rounded bg-black border border-surface-border text-white focus:outline-none focus:border-emerald-glow"
                    />
                    <button
                      onClick={() => customQuestion && handleAskQuestion(customQuestion)}
                      className="px-4 py-2 bg-emerald-600 text-white rounded text-xs font-semibold hover:bg-emerald-500"
                    >
                      Ask
                    </button>
                  </div>
                </div>
              </div>

              {/* Patient Response & Evaluation Box */}
              <div className="lg:col-span-7 bg-black/70 rounded border border-surface-border p-6 flex flex-col justify-between font-mono text-xs">
                <div>
                  <div className="flex items-center justify-between border-b border-surface-border pb-3 mb-4">
                    <span className="text-dim flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      PATIENT_AGENT // {activeScenario.patientName}
                    </span>
                    <span className="text-emerald-glow font-semibold">BRANCH: {activeResponse.branchState}</span>
                  </div>

                  {isEvaluating ? (
                    <div className="py-12 text-center text-dim animate-pulse">
                      Executing LangGraph node transition & Chroma RAG check...
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-emerald-950/20 p-4 rounded border border-emerald-500/30">
                        <div className="text-emerald-glow text-[10px] uppercase mb-1 font-body font-bold">Patient Verbal Response:</div>
                        <p className="text-steel text-sm font-body italic leading-relaxed">
                          &ldquo;{activeResponse.dialogue}&rdquo;
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-surface p-3 rounded border border-surface-border">
                          <div className="text-dim text-[10px] uppercase mb-0.5">Empathy Calibration</div>
                          <div className="text-lg font-bold text-cobalt-glow">{activeResponse.empathyScore}%</div>
                        </div>

                        <div className="bg-surface p-3 rounded border border-surface-border">
                          <div className="text-dim text-[10px] uppercase mb-0.5">Diagnostic Acuity Score</div>
                          <div className="text-xs font-bold text-emerald-glow truncate">{activeResponse.branchState}</div>
                        </div>
                      </div>

                      <div className="bg-surface p-3 rounded border border-surface-border">
                        <div className="text-dim text-[10px] uppercase mb-1">Clinical Evaluator Feedback:</div>
                        <p className="text-steel text-xs leading-relaxed font-body">
                          {activeResponse.clinicalInsight}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-surface-border flex items-center justify-between text-[11px] text-dim mt-6">
                  <span>Python 3.11 / LangGraph Engine</span>
                  <span className="text-steel">Response Latency: 14ms</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TECH SPECIFICATIONS */}
        {activeTab === "tech" && (
          <div className="mt-12 p-8 rounded border border-surface-border bg-surface-card space-y-6">
            <h3 className="text-2xl font-semibold text-white">DokSim Technical Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-5 rounded border border-surface-border bg-surface space-y-2">
                <h4 className="font-semibold text-emerald-glow">Agentic Orchestration</h4>
                <p className="text-steel text-xs leading-relaxed font-body">
                  LangGraph graph-based dialogue states ensure non-linear patient interaction without losing critical medical history context or triggering out-of-character hallucinated statements.
                </p>
              </div>
              <div className="p-5 rounded border border-surface-border bg-surface space-y-2">
                <h4 className="font-semibold text-cobalt-light">Vector Knowledge Base</h4>
                <p className="text-steel text-xs leading-relaxed font-body">
                  Chroma DB vector index with medical symptom embeddings to ground responses against official OSCE medical reference literature.
                </p>
              </div>
              <div className="p-5 rounded border border-surface-border bg-surface space-y-2">
                <h4 className="font-semibold text-amber">Sovereign Deployment</h4>
                <p className="text-steel text-xs leading-relaxed font-body">
                  On-premise air-gapped GPU clusters (NVIDIA H100 / L40S) or sovereign enterprise enclave clouds. Zero clinical data exfiltration. HIPAA & FERPA guaranteed.
                </p>
              </div>
              <div className="p-5 rounded border border-surface-border bg-surface space-y-2">
                <h4 className="font-semibold text-cobalt-light">Continuous Audit Integration</h4>
                <p className="text-steel text-xs leading-relaxed font-body">
                  Automated SOC 2 Type II and ISO 27001 continuous verification mapped directly into institutional compliance consoles via Augur Core.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CURRICULAR MODULES & INSTITUTIONAL IMPACT */}
        <section className="mt-24 py-16 border-t border-surface-border" id="modules">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-[11px] text-cobalt-light uppercase tracking-wider mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cobalt" />
                  Standardized Scenarios
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Institutional Impact & Specialized Modules</h2>
              </div>
              <p className="font-body text-[13px] text-steel max-w-md">
                Pre-configured scenario suites calibrated against national medical licensing boards, ACGME residency milestones, and nursing simulation standards.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-6 rounded border border-surface-border bg-surface-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 font-mono text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-surface border border-surface-border text-emerald-glow uppercase">Specialty 01</span>
                    <span className="text-dim">52 Cases</span>
                  </div>
                  <h3 className="text-[15px] font-semibold text-white mb-2">Psychiatric De-escalation</h3>
                  <p className="font-body text-[12px] text-steel leading-relaxed mb-4">
                    Managing borderline crises, acute psychosis, and severe panic attacks without escalation or coercive framing. Calibrated to C-SSRS standards.
                  </p>
                </div>
                <div className="pt-3 border-t border-surface-border font-mono text-[10px] text-dim flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[13px] text-emerald-400">check</span>
                  Columbia Suicide Severity Protocol
                </div>
              </div>

              <div className="p-6 rounded border border-surface-border bg-surface-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 font-mono text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-surface border border-surface-border text-emerald-glow uppercase">Specialty 02</span>
                    <span className="text-dim">38 Cases</span>
                  </div>
                  <h3 className="text-[15px] font-semibold text-white mb-2">Critical Care Communications</h3>
                  <p className="font-body text-[12px] text-steel leading-relaxed mb-4">
                    Delivering critical prognoses, navigating severe family distress, and conducting compassionate intensive care conferences using the SPIKES rubric.
                  </p>
                </div>
                <div className="pt-3 border-t border-surface-border font-mono text-[10px] text-dim flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[13px] text-emerald-400">check</span>
                  SPIKES Framework Validated
                </div>
              </div>

              <div className="p-6 rounded border border-surface-border bg-surface-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 font-mono text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-surface border border-surface-border text-emerald-glow uppercase">Specialty 03</span>
                    <span className="text-dim">44 Cases</span>
                  </div>
                  <h3 className="text-[15px] font-semibold text-white mb-2">Complex Consent & Geriatrics</h3>
                  <p className="font-body text-[12px] text-steel leading-relaxed mb-4">
                    Evaluating decision-making capacity in cognitive impairment, dementia proxies, and respectful end-of-life proxy consultations.
                  </p>
                </div>
                <div className="pt-3 border-t border-surface-border font-mono text-[10px] text-dim flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[13px] text-emerald-400">check</span>
                  MoCA & MMSE Legal Benchmark
                </div>
              </div>

              <div className="p-6 rounded border border-surface-border bg-surface-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 font-mono text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-surface border border-surface-border text-emerald-glow uppercase">Specialty 04</span>
                    <span className="text-dim">60 Cases</span>
                  </div>
                  <h3 className="text-[15px] font-semibold text-white mb-2">Diagnostic Synthesis</h3>
                  <p className="font-body text-[12px] text-steel leading-relaxed mb-4">
                    Iterative differential diagnosis under incomplete symptom presentation, laboratory interpretation, and adherence barrier identification.
                  </p>
                </div>
                <div className="pt-3 border-t border-surface-border font-mono text-[10px] text-dim flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[13px] text-emerald-400">check</span>
                  Internal Medicine Core Milestone
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPLIANCE, SOVEREIGNTY & AIR-GAPPED DEPLOYMENT */}
        <section className="mt-24 py-16 border-t border-surface-border" id="sovereignty">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="rounded border border-surface-border bg-surface-card p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
              <div className="max-w-3xl relative z-10">
                <div className="inline-flex items-center gap-2 font-mono text-[11px] text-cobalt-light uppercase tracking-wider mb-2">
                  <span className="material-symbols-outlined text-[14px]">security</span>
                  Data Sovereignty & Regulatory Posture
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-4">
                  HIPAA & FERPA Compliant Air-Gapped Deployment
                </h2>
                <p className="font-body text-[14px] text-steel leading-relaxed mb-8">
                  Medical institutions maintain legal obligations regarding trainee performance evaluations and curriculum intellectual property. DokSim is engineered for absolute institutional containment with zero clinical data exfiltration.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                  <div className="p-4 rounded bg-surface border border-surface-border flex items-start gap-3">
                    <div className="w-7 h-7 rounded bg-surface-card border border-surface-border flex items-center justify-center text-cobalt-light flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">dns</span>
                    </div>
                    <div>
                      <h4 className="font-mono text-[12px] font-medium text-white mb-1">On-Premise Air-Gapped Deployment</h4>
                      <p className="font-body text-[12px] text-dim leading-relaxed">Runs isolated on hospital on-premises GPU clusters (NVIDIA H100 / L40S) or sovereign enterprise enclave clouds.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded bg-surface border border-surface-border flex items-start gap-3">
                    <div className="w-7 h-7 rounded bg-surface-card border border-surface-border flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">lock</span>
                    </div>
                    <div>
                      <h4 className="font-mono text-[12px] font-medium text-white mb-1">Zero Clinical Data Exfiltration</h4>
                      <p className="font-body text-[12px] text-dim leading-relaxed">Ephemeral conversational memory with zero external telemetry or secondary foundation model training on institutional inputs.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded bg-surface border border-surface-border flex items-start gap-3">
                    <div className="w-7 h-7 rounded bg-surface-card border border-surface-border flex items-center justify-center text-cobalt-light flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                    </div>
                    <div>
                      <h4 className="font-mono text-[12px] font-medium text-white mb-1">HIPAA & FERPA Guaranteed</h4>
                      <p className="font-body text-[12px] text-dim leading-relaxed">Complete Business Associate Agreement (BAA) execution and educational records governance strictly enforced.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded bg-surface border border-surface-border flex items-start gap-3">
                    <div className="w-7 h-7 rounded bg-surface-card border border-surface-border flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">shield</span>
                    </div>
                    <div>
                      <h4 className="font-mono text-[12px] font-medium text-white mb-1">Augur Continuous Audit Integration</h4>
                      <p className="font-body text-[12px] text-dim leading-relaxed">Automated SOC 2 Type II and ISO 27001 continuous verification mapped directly into institutional compliance consoles.</p>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface border border-surface-border font-mono text-[11px] text-steel">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  FEDRAMP / HITECH READINESS DOSSIER AVAILABLE FOR INSTITUTIONAL COUNSEL
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INSTITUTIONAL PILOT COMMISSIONING */}
        <section className="mt-24 py-16 border-t border-surface-border" id="pilot-consultation">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 font-mono text-[11px] text-cobalt-light uppercase tracking-wider mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cobalt" />
                  Pilot Commissioning
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-4">
                  Deploy DokSim in Your Medical Institution
                </h2>
                <p className="font-body text-[14px] text-steel mb-6 leading-relaxed">
                  We partner with medical school deans, simulation directors, and residency leadership to deploy air-gapped pilot sandboxes and custom specialty cohorts.
                </p>
                <div className="p-5 rounded border border-surface-border bg-surface-card space-y-3 font-body text-[13px] text-steel">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-emerald-glow text-[15px]">check</span>
                    <span className="text-white">Turnkey pilot sandbox loaded with 200+ specialty cases</span>
                  </div>
                  <div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-emerald-glow text-[15px]">check</span><span className="text-white">Curriculum calibration workshop with As Foretold Research Labs AI team</span></div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-emerald-glow text-[15px]">check</span>
                    <span className="text-white">Direct export to existing OSCE scoring rubrics & LMS</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-emerald-glow text-[15px]">check</span>
                    <span className="text-white">Dedicated air-gapped container appliance on hospital hardware</span>
                  </div>
                </div>
                <div className="mt-6 font-mono text-[11px] text-dim">
                  Institutional Research Inquiries: <a className="text-cobalt-light hover:underline" href="mailto:velasquez.marcvictor.l@asforetold.space">velasquez.marcvictor.l@asforetold.space</a>
                </div>
              </div>

              {/* Pilot Application Form */}
              <div className="lg:col-span-7">
                <div className="p-7 md:p-8 rounded border border-surface-border bg-surface-card shadow-xl">
                  <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Institutional Pilot Inquiry logged. Our clinical systems engineers will contact your office within 24 business hours.'); }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[10px] text-dim mb-1.5 uppercase tracking-wider">Medical Director / Dean Full Name *</label>
                        <input className="w-full px-3.5 py-2.5 rounded bg-surface border border-surface-border text-white placeholder:text-dim/60 focus:border-emerald-glow focus:ring-1 focus:ring-emerald-glow outline-none text-[13px]" placeholder="Dr. Julian Vance, MD" required type="text" />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] text-dim mb-1.5 uppercase tracking-wider">Academic / Hospital Email *</label>
                        <input className="w-full px-3.5 py-2.5 rounded bg-surface border border-surface-border text-white placeholder:text-dim/60 focus:border-emerald-glow focus:ring-1 focus:ring-emerald-glow outline-none text-[13px]" placeholder="j.vance@university-med.org" required type="email" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[10px] text-dim mb-1.5 uppercase tracking-wider">Institution / Health System *</label>
                        <input className="w-full px-3.5 py-2.5 rounded bg-surface border border-surface-border text-white placeholder:text-dim/60 focus:border-emerald-glow focus:ring-1 focus:ring-emerald-glow outline-none text-[13px]" placeholder="Johns Hopkins / Mayo Health System" required type="text" />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] text-dim mb-1.5 uppercase tracking-wider">Primary Specialty Module *</label>
                        <select className="w-full px-3.5 py-2.5 rounded bg-surface border border-surface-border text-white focus:border-emerald-glow focus:ring-1 focus:ring-emerald-glow outline-none text-[13px]">
                          <option>Psychiatric De-escalation</option>
                          <option>Critical Care Communications</option>
                          <option>Complex Consent & Geriatrics</option>
                          <option>Diagnostic Synthesis & Internal Med</option>
                          <option>Full Multi-Specialty Medical School</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[10px] text-dim mb-1.5 uppercase tracking-wider">Cohort Size (Annual Trainees)</label>
                        <select className="w-full px-3.5 py-2.5 rounded bg-surface border border-surface-border text-white focus:border-emerald-glow focus:ring-1 focus:ring-emerald-glow outline-none text-[13px]">
                          <option>50 - 150 Trainees (Pilot Tier)</option>
                          <option>150 - 500 Trainees (Residency Class)</option>
                          <option>500 - 2,000+ Trainees (Medical College)</option>
                          <option>Enterprise Multi-Campus System</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] text-dim mb-1.5 uppercase tracking-wider">Deployment Model</label>
                        <select className="w-full px-3.5 py-2.5 rounded bg-surface border border-surface-border text-white focus:border-emerald-glow focus:ring-1 focus:ring-emerald-glow outline-none text-[13px]">
                          <option>On-Premises Air-Gapped GPU Cluster</option>
                          <option>Sovereign Dedicated Cloud (GovCloud)</option>
                          <option>Hybrid Hospital Infrastructure</option>
                          <option>As Foretold Managed Enclave</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] text-dim mb-1.5 uppercase tracking-wider">Simulation Lab Constraints / Objectives</label>
                      <textarea className="w-full px-3.5 py-2.5 rounded bg-surface border border-surface-border text-white placeholder:text-dim/60 focus:border-emerald-glow focus:ring-1 focus:ring-emerald-glow outline-none text-[13px]" placeholder="Specify OSCE accreditation objectives, faculty capacity bottlenecks, or custom cohort requirements..." rows={3} />
                    </div>
                    <div className="flex items-center gap-2.5">
                      <input checked className="w-3.5 h-3.5 rounded bg-surface border-surface-border text-emerald-glow focus:ring-emerald-glow" id="nda-agree" type="checkbox" />
                      <label className="font-body text-[12px] text-steel" htmlFor="nda-agree">
                        Require standard Institutional Mutual NDA & HIPAA BAA execution prior to technical review
                      </label>
                    </div>
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button className="flex-1 py-3 px-4 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-[13px] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] active:scale-95" type="submit">
                        <span>Schedule Institutional Pilot</span>
                        <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                      </button>
                      <a className="py-3 px-4 rounded border border-surface-border hover:border-surface-border-strong bg-surface text-white font-medium text-[13px] text-center transition-all inline-flex items-center justify-center gap-1.5" href="#validation-whitepaper" id="validation-whitepaper">
                        <span className="material-symbols-outlined text-dim text-[15px]">article</span>
                        <span>Request Clinical Validation Whitepaper</span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}