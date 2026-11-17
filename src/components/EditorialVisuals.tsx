"use client";

import React, { useState } from "react";

export function Chapter01CoverVisual() {
  return (
    <div className="my-8 border border-[#DCD5C9] bg-[#F5F1E8] p-6 sm:p-10">
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8">
        {/* Left Panel: Deterministic Calculator Engine */}
        <div className="flex-1 border border-[#D4CDC0] bg-[#FBF9F5] p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[#E5DFD3] pb-3 mb-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6E685F]">
                INSTRUMENT I · DETERMINISTIC (1972)
              </span>
              <span className="font-mono text-[11px] text-[#2C4A3E] font-medium">
                f(x) = y
              </span>
            </div>
            <h4 className="font-serif text-lg text-[#181715] mb-2">
              The Pocket Calculator
            </h4>
            <p className="text-xs leading-relaxed text-[#5A554E] mb-6">
              Fixed logic gates. Every input maps to a single repeatable result. Zero ambiguity, zero comprehension of why the problem matters.
            </p>
          </div>

          <svg
            viewBox="0 0 320 120"
            className="w-full h-auto border border-[#EAE4D8] bg-[#F7F4EC] p-3"
            role="img"
            aria-label="Deterministic calculator schematic"
          >
            <rect
              x="14"
              y="32"
              width="78"
              height="56"
              fill="#FBF9F5"
              stroke="#181715"
              strokeWidth="1.2"
            />
            <text x="53" y="55" textAnchor="middle" className="fill-[#6E685F] text-[9px] font-mono">
              INPUT
            </text>
            <text x="53" y="72" textAnchor="middle" className="fill-[#181715] text-[11px] font-mono font-semibold">
              347 × 89
            </text>

            <line x1="92" y1="60" x2="124" y2="60" stroke="#181715" strokeWidth="1.2" />
            <polygon points="124,60 118,56 118,64" fill="#181715" />

            <rect
              x="126"
              y="24"
              width="72"
              height="72"
              fill="#EFEAE0"
              stroke="#181715"
              strokeWidth="1.2"
            />
            <text x="162" y="54" textAnchor="middle" className="fill-[#181715] text-[9px] font-mono">
              ALU LOGIC
            </text>
            <text x="162" y="70" textAnchor="middle" className="fill-[#6E685F] text-[8px] font-mono">
              EXACT RULE
            </text>

            <line x1="198" y1="60" x2="230" y2="60" stroke="#181715" strokeWidth="1.2" />
            <polygon points="230,60 224,56 224,64" fill="#181715" />

            <rect
              x="232"
              y="32"
              width="74"
              height="56"
              fill="#FBF9F5"
              stroke="#2C4A3E"
              strokeWidth="1.5"
            />
            <text x="269" y="55" textAnchor="middle" className="fill-[#6E685F] text-[9px] font-mono">
              OUTPUT
            </text>
            <text x="269" y="72" textAnchor="middle" className="fill-[#2C4A3E] text-[11px] font-mono font-semibold">
              30,883
            </text>
          </svg>
        </div>

        {/* Center Divider */}
        <div className="flex lg:flex-col items-center justify-center gap-2 py-1">
          <div className="h-px w-12 lg:w-px lg:h-full bg-[#D4CDC0]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#9E3B24] px-2 py-1 border border-[#D4CDC0] bg-[#FBF9F5]">
            VS
          </span>
          <div className="h-px w-12 lg:w-px lg:h-full bg-[#D4CDC0]" />
        </div>

        {/* Right Panel: Probabilistic Generative Engine */}
        <div className="flex-1 border border-[#D4CDC0] bg-[#FBF9F5] p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[#E5DFD3] pb-3 mb-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#9E3B24]">
                INSTRUMENT II · PROBABILISTIC (2026)
              </span>
              <span className="font-mono text-[11px] text-[#9E3B24] font-medium">
                P(y | x)
              </span>
            </div>
            <h4 className="font-serif text-lg text-[#181715] mb-2">
              Generative AI System
            </h4>
            <p className="text-xs leading-relaxed text-[#5A554E] mb-6">
              High-dimensional pattern synthesis. Capable of open-ended reasoning, code, and prose—yet fluent enough to mask subtle errors without human verification.
            </p>
          </div>

          <svg
            viewBox="0 0 320 120"
            className="w-full h-auto border border-[#EAE4D8] bg-[#F7F4EC] p-3"
            role="img"
            aria-label="Probabilistic generative AI schematic"
          >
            <rect
              x="12"
              y="32"
              width="72"
              height="56"
              fill="#FBF9F5"
              stroke="#181715"
              strokeWidth="1.2"
            />
            <text x="48" y="54" textAnchor="middle" className="fill-[#6E685F] text-[9px] font-mono">
              PROMPT
            </text>
            <text x="48" y="70" textAnchor="middle" className="fill-[#181715] text-[9px] font-mono">
              Open Intent
            </text>

            <line x1="84" y1="60" x2="112" y2="60" stroke="#181715" strokeWidth="1.2" />

            <circle
              cx="148"
              cy="60"
              r="34"
              fill="#EFEAE0"
              stroke="#9E3B24"
              strokeWidth="1.2"
              strokeDasharray="3 2"
            />
            <text x="148" y="56" textAnchor="middle" className="fill-[#181715] text-[8.5px] font-mono">
              LATENT SPACE
            </text>
            <text x="148" y="69" textAnchor="middle" className="fill-[#9E3B24] text-[8px] font-mono">
              Token Sampling
            </text>

            {/* Branching paths */}
            <line x1="182" y1="46" x2="218" y2="28" stroke="#2C4A3E" strokeWidth="1.2" />
            <line x1="182" y1="60" x2="218" y2="60" stroke="#181715" strokeWidth="1.2" />
            <line x1="182" y1="74" x2="218" y2="92" stroke="#9E3B24" strokeWidth="1.2" />

            <rect x="220" y="14" width="88" height="24" fill="#FBF9F5" stroke="#2C4A3E" strokeWidth="1.1" />
            <text x="264" y="29" textAnchor="middle" className="fill-[#2C4A3E] text-[8.5px] font-mono">
              Valid Insight
            </text>

            <rect x="220" y="48" width="88" height="24" fill="#FBF9F5" stroke="#181715" strokeWidth="1.1" />
            <text x="264" y="63" textAnchor="middle" className="fill-[#181715] text-[8.5px] font-mono">
              Working Draft
            </text>

            <rect x="220" y="82" width="88" height="24" fill="#FBF9F5" stroke="#9E3B24" strokeWidth="1.1" />
            <text x="264" y="97" textAnchor="middle" className="fill-[#9E3B24] text-[8.5px] font-mono">
              Plausible Flaw
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function VisualCalculatorVsAI() {
  const rows = [
    {
      dimension: "Underlying Operation",
      calculator: "Performs defined, deterministic mathematical calculations",
      ai: "Generates responses and content from learned statistical patterns",
    },
    {
      dimension: "Output Consistency",
      calculator: "Deterministic for the same input and precision settings",
      ai: "Probabilistic; responses and reasoning paths can vary across runs",
    },
    {
      dimension: "Failure Mode",
      calculator: "Errors almost always trace back to human input or wrong formula",
      ai: "Can produce fluent, confident, yet factually incorrect hallucinations",
    },
    {
      dimension: "Task Domain",
      calculator: "Requires an explicit, well-formed numerical expression",
      ai: "Assists with open-ended synthesis, code, language, and exploration",
    },
    {
      dimension: "What Remains Human",
      calculator: "Framing the mathematical problem and interpreting physical units",
      ai: "Defining goals, auditing logic, verifying truth, and owning outcomes",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b-2 border-[#181715] bg-[#EFEAE0]">
            <th className="py-3.5 px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#5A554E] w-1/4">
              Dimension
            </th>
            <th className="py-3.5 px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#2C4A3E] w-[37.5%]">
              Pocket Calculator
            </th>
            <th className="py-3.5 px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9E3B24] w-[37.5%]">
              Generative AI
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#DED8CE] bg-[#FBF9F5]">
          {rows.map((r, i) => (
            <tr key={i} className="hover:bg-[#F5F1E8] transition-colors">
              <td className="py-3.5 px-4 font-medium text-[#181715] align-top">
                {r.dimension}
              </td>
              <td className="py-3.5 px-4 text-[#3D3A35] align-top leading-relaxed">
                {r.calculator}
              </td>
              <td className="py-3.5 px-4 text-[#3D3A35] align-top leading-relaxed">
                {r.ai}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function VisualWhoDoesWhatBetter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="border border-[#D4CDC0] bg-[#FBF9F5] p-5">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#2C4A3E] mb-2">
          01 · HUMAN REASONING
        </div>
        <h5 className="font-serif text-lg text-[#181715] mb-3 border-b border-[#E5DFD3] pb-2">
          Where Humans Excel
        </h5>
        <ul className="space-y-2.5 text-xs sm:text-sm text-[#3D3A35] leading-relaxed">
          <li>• Defining what problem is actually worth solving</li>
          <li>• Grounding decisions in physical, social, and ethical reality</li>
          <li>• Causal reasoning from small samples or novel edge cases</li>
          <li>• Bearing moral and professional accountability for consequences</li>
        </ul>
      </div>

      <div className="border-2 border-[#181715] bg-[#F3EFE6] p-5">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9E3B24] mb-2">
          02 · THE SYMBIOTIC ZONE
        </div>
        <h5 className="font-serif text-lg text-[#181715] mb-3 border-b border-[#D4CDC0] pb-2">
          Human + AI Together
        </h5>
        <ul className="space-y-2.5 text-xs sm:text-sm text-[#181715] font-medium leading-relaxed">
          <li>• Human frames hypothesis → AI explores counterexamples</li>
          <li>• AI drafts boilerplate → Human architects system invariants</li>
          <li>• AI synthesises 50 papers → Human audits methodology</li>
          <li>• Rapid iteration paired with deliberate human verification</li>
        </ul>
      </div>

      <div className="border border-[#D4CDC0] bg-[#FBF9F5] p-5">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#6E685F] mb-2">
          03 · MACHINE SCALE
        </div>
        <h5 className="font-serif text-lg text-[#181715] mb-3 border-b border-[#E5DFD3] pb-2">
          Where AI Excels
        </h5>
        <ul className="space-y-2.5 text-xs sm:text-sm text-[#3D3A35] leading-relaxed">
          <li>• High-speed pattern retrieval across vast corpora</li>
          <li>• Translating between formal syntax, languages, and formats</li>
          <li>• Generating initial scaffolding and test permutations</li>
          <li>• Tireless, on-demand explanation at any hour</li>
        </ul>
      </div>
    </div>
  );
}

export function VisualTwoPathsLearning() {
  const [selectedPath, setSelectedPath] = useState<"both" | "pathA" | "pathB">("both");

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DED8CE] pb-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6E685F]">
          WORKFLOW COMPARISON · INTERACTIVE VIEW
        </span>
        <div className="flex gap-1.5">
          {[
            { id: "both", label: "Compare Both" },
            { id: "pathA", label: "Path A: Bypass" },
            { id: "pathB", label: "Path B: Augmentation" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedPath(tab.id as "both" | "pathA" | "pathB")}
              className={`px-2.5 py-1 font-mono text-[11px] border transition-colors ${
                selectedPath === tab.id
                  ? "border-[#181715] bg-[#181715] text-[#FBF9F5]"
                  : "border-[#D4CDC0] bg-[#FBF9F5] text-[#5A554E] hover:border-[#181715]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {(selectedPath === "both" || selectedPath === "pathA") && (
        <div className="border border-[#D9B8B0] bg-[#FBF6F4] p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#9E3B24] font-semibold">
                PATH A · THE SHORTCUT LOOP (COGNITIVE BYPASS)
              </span>
              <p className="text-xs text-[#5A554E] mt-0.5">
                Optimises exclusively for finishing today&apos;s assignment; leaves underlying capability unchanged.
              </p>
            </div>
            <span className="font-mono text-[11px] px-2 py-0.5 bg-[#F2E2DE] text-[#9E3B24] border border-[#D9B8B0]">
              Skill Retention: Low
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { step: "01", title: "Problem", desc: "Encounter sorting or logic task" },
              { step: "02", title: "Ask AI", desc: "Paste prompt verbatim" },
              { step: "03", title: "Copy Answer", desc: "Skip reading invariants" },
              { step: "04", title: "Complete Task", desc: "Fails when requirements shift" },
            ].map((node, idx) => (
              <div key={idx} className="border border-[#E2C7C0] bg-[#FBF9F5] p-3 relative">
                <div className="font-mono text-[10px] text-[#9E3B24] mb-1">
                  STEP {node.step}
                </div>
                <div className="font-serif text-sm font-medium text-[#181715]">
                  {node.title}
                </div>
                <div className="text-[11px] text-[#605C56] mt-1 leading-snug">
                  {node.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {(selectedPath === "both" || selectedPath === "pathB") && (
        <div className="border border-[#B7C9C1] bg-[#F4F8F6] p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#2C4A3E] font-semibold">
                PATH B · THE HUMAN-AI AUGMENTATION LOOP
              </span>
              <p className="text-xs text-[#5A554E] mt-0.5">
                Uses AI as a Socratic partner and verifier; compounds independent problem-solving skill.
              </p>
            </div>
            <span className="font-mono text-[11px] px-2 py-0.5 bg-[#E0ECE6] text-[#2C4A3E] border border-[#B7C9C1]">
              Skill Retention: High
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {[
              { step: "01", title: "Problem", desc: "Frame constraints & first attempt" },
              { step: "02", title: "Ask AI", desc: "Query concept or edge case" },
              { step: "03", title: "Understand", desc: "Trace complexity & why it works" },
              { step: "04", title: "Verify", desc: "Audit logic & boundary inputs" },
              { step: "05", title: "Experiment", desc: "Modify constraints & test" },
              { step: "06", title: "Solve Solo", desc: "Build durable mental model" },
            ].map((node, idx) => (
              <div key={idx} className="border border-[#C5D6CE] bg-[#FBF9F5] p-3">
                <div className="font-mono text-[10px] text-[#2C4A3E] mb-1">
                  STEP {node.step}
                </div>
                <div className="font-serif text-sm font-medium text-[#181715]">
                  {node.title}
                </div>
                <div className="text-[11px] text-[#605C56] mt-1 leading-snug">
                  {node.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function VisualTimeDistributionChart() {
  const [detectionRate, setDetectionRate] = useState<number>(80);
  const baselineAiError = 15; // 15% baseline error rate in illustrative example
  const residualError = ((baselineAiError / 100) * (1 - detectionRate / 100) * 100).toFixed(1);
  const effectiveAccuracy = (100 - parseFloat(residualError)).toFixed(1);

  return (
    <div className="space-y-8">
      {/* Stacked Bar Comparison */}
      <div className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#5A554E]">
          <span>HYPOTHETICAL PROGRAMMING TASK (SCALE: 0 – 90 MINUTES)</span>
          <span className="text-[#2C4A3E] font-semibold">
            NET TIME SAVED: 25 MIN (27.78%)
          </span>
        </div>

        {/* Bar 1: Without AI */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs sm:text-sm font-medium text-[#181715]">
            <span>Without AI Assistance</span>
            <span className="font-mono">90 min total</span>
          </div>
          <div className="w-full h-11 bg-[#EAE4D8] border border-[#181715] flex overflow-hidden">
            <div
              style={{ width: "66.67%" }}
              className="bg-[#2C4A3E] text-[#FBF9F5] flex items-center justify-center text-xs font-mono border-r border-[#FBF9F5]"
              title="Initial coding: 60 min"
            >
              Coding: 60m
            </div>
            <div
              style={{ width: "22.22%" }}
              className="bg-[#7D6B57] text-[#FBF9F5] flex items-center justify-center text-xs font-mono border-r border-[#FBF9F5]"
              title="Debugging: 20 min"
            >
              Debug: 20m
            </div>
            <div
              style={{ width: "11.11%" }}
              className="bg-[#9E3B24] text-[#FBF9F5] flex items-center justify-center text-[11px] font-mono"
              title="Verification: 10 min"
            >
              10m
            </div>
          </div>
        </div>

        {/* Bar 2: With AI */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs sm:text-sm font-medium text-[#181715]">
            <span>With AI Assistance</span>
            <span className="font-mono">65 min total (−27.78%)</span>
          </div>
          <div className="w-full h-11 bg-[#EAE4D8] border border-[#181715] flex overflow-hidden">
            <div
              style={{ width: "27.78%" }}
              className="bg-[#2C4A3E] text-[#FBF9F5] flex items-center justify-center text-xs font-mono border-r border-[#FBF9F5]"
              title="Initial coding: 25 min"
            >
              Coding: 25m
            </div>
            <div
              style={{ width: "22.22%" }}
              className="bg-[#7D6B57] text-[#FBF9F5] flex items-center justify-center text-xs font-mono border-r border-[#FBF9F5]"
              title="Debugging: 20 min"
            >
              Debug: 20m
            </div>
            <div
              style={{ width: "22.22%" }}
              className="bg-[#9E3B24] text-[#FBF9F5] flex items-center justify-center text-xs font-mono border-r border-[#181715]"
              title="Verification: 20 min (Doubled)"
            >
              Verify: 20m (×2)
            </div>
            <div
              style={{ width: "27.78%" }}
              className="bg-[#F5F1E8] text-[#2C4A3E] flex items-center justify-center text-[11px] font-mono"
            >
              Saved: 25m
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-5 pt-1 text-xs font-mono text-[#5A554E]">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#2C4A3E] inline-block" /> Initial Coding
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#7D6B57] inline-block" /> Debugging
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#9E3B24] inline-block" /> Verification & Audit
          </span>
        </div>
      </div>

      {/* Interactive Verification Explorer */}
      <div className="border-t border-[#D4CDC0] pt-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#181715] font-semibold">
            INTERACTIVE EXPLORER · WHY HUMAN VERIFICATION SKILL (p_detect) MATTERS
          </span>
          <span className="font-mono text-xs text-[#9E3B24]">
            E_collab = e_AI (0.15) × (1 − {(detectionRate / 100).toFixed(2)})
          </span>
        </div>
        <p className="text-xs text-[#5A554E] mb-4">
          Adjust the human reviewer&apos;s error-detection rate (<strong>p_detect</strong>) below to see how domain competence shapes final collaborative accuracy when unverified AI output has a 15% error rate:
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-[#FBF9F5] border border-[#D4CDC0] p-4">
          <div className="flex-1">
            <label
              htmlFor="p-detect-slider"
              className="block font-mono text-xs text-[#181715] mb-2"
            >
              Human Error-Detection Probability (p_detect):{" "}
              <strong>{detectionRate}%</strong>
            </label>
            <input
              id="p-detect-slider"
              type="range"
              min={0}
              max={95}
              step={5}
              value={detectionRate}
              onChange={(e) => setDetectionRate(Number(e.target.value))}
              className="w-full accent-[#9E3B24] cursor-pointer"
            />
            <div className="flex justify-between font-mono text-[10px] text-[#6E685F] mt-1">
              <span>0% (Blind Copy-Paste)</span>
              <span>50% (Casual Skim)</span>
              <span>95% (Rigorous Domain Audit)</span>
            </div>
          </div>

          <div className="flex gap-3 sm:border-l sm:border-[#DED8CE] sm:pl-4">
            <div className="p-2.5 bg-[#F4EFE6] border border-[#D4CDC0] min-w-[110px] text-center">
              <div className="font-mono text-[10px] text-[#6E685F] uppercase">
                Residual Error
              </div>
              <div className="font-mono text-lg font-semibold text-[#9E3B24]">
                {residualError}%
              </div>
            </div>
            <div className="p-2.5 bg-[#F4EFE6] border border-[#D4CDC0] min-w-[110px] text-center">
              <div className="font-mono text-[10px] text-[#6E685F] uppercase">
                Final Accuracy
              </div>
              <div className="font-mono text-lg font-semibold text-[#2C4A3E]">
                {effectiveAccuracy}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VisualFourScenarios() {
  const cards = [
    {
      code: "SCENARIO A · EDUCATION",
      persona: "The Student",
      aiRole:
        "Explains difficult concepts from multiple angles, generates practice problems, and spots where a proof went wrong.",
      humanRole:
        "Must still wrestle with problems on blank paper to form durable neural pathways and independent intuition.",
      caveat: "Understanding an explanation is not the same as being able to solve the next problem alone.",
    },
    {
      code: "SCENARIO B · SOFTWARE",
      persona: "The Developer",
      aiRole:
        "Scaffolds boilerplate, drafts unit tests, explains unfamiliar APIs, and speeds up initial prototyping.",
      humanRole:
        "Must own system architecture, state invariants, edge-case correctness, and security boundaries.",
      caveat: "Generated code that passes happy-path tests can still harbour subtle concurrency or security flaws.",
    },
    {
      code: "SCENARIO C · SCIENCE",
      persona: "The Researcher",
      aiRole:
        "Synthesises literature across fields, cleans datasets, and helps structure exploratory analysis scripts.",
      humanRole:
        "Must design valid experimental methodology, verify primary sources, and exercise critical scepticism.",
      caveat: "A fluent summary cannot replace reading the underlying experimental design and limitations.",
    },
    {
      code: "SCENARIO D · AGRICULTURE",
      persona: "The Small Farmer",
      aiRole:
        "Translates vetted crop-disease diagnostics, soil advisories, and weather forecasts into local dialects via voice or text.",
      humanRole:
        "Applies local field observation, community experience, and seasonal judgement to real soil conditions.",
      caveat: "Subject to rural connectivity, hardware costs, dialect accuracy, and high stakes if unverified advice fails.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cards.map((c, idx) => (
        <div
          key={idx}
          className="border border-[#D4CDC0] bg-[#FBF9F5] p-5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between border-b border-[#E5DFD3] pb-2.5 mb-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#9E3B24]">
                {c.code}
              </span>
              <span className="font-mono text-[10px] text-[#6E685F]">
                0{idx + 1} / 04
              </span>
            </div>
            <h5 className="font-serif text-xl text-[#181715] mb-3">{c.persona}</h5>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="p-2.5 bg-[#F4F8F6] border-l-2 border-[#2C4A3E]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#2C4A3E] block mb-0.5">
                  Where AI Assists
                </span>
                <p className="text-[#2D2B28] leading-relaxed">{c.aiRole}</p>
              </div>

              <div className="p-2.5 bg-[#F5F1E8] border-l-2 border-[#181715]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#181715] block mb-0.5">
                  What Remains Human
                </span>
                <p className="text-[#2D2B28] leading-relaxed">{c.humanRole}</p>
              </div>
            </div>
          </div>

          <p className="mt-3 pt-2.5 border-t border-[#EAE4D8] font-mono text-[11px] text-[#6E685F]">
            Reality Check: {c.caveat}
          </p>
        </div>
      ))}
    </div>
  );
}

export function VisualDependenceCycle() {
  const steps = [
    {
      num: "01",
      title: "Immediate Convenience",
      desc: "AI delivers a fast, polished answer under deadline pressure.",
    },
    {
      num: "02",
      title: "Repeated Reliance",
      desc: "Defaulting to prompts before attempting to frame the problem solo.",
    },
    {
      num: "03",
      title: "Less Independent Practice",
      desc: "Skipping the productive struggle that builds deep mental models.",
    },
    {
      num: "04",
      title: "Reduced Confidence",
      desc: "Feeling hesitant to tackle unfamiliar tasks without an AI tab open.",
    },
    {
      num: "05",
      title: "Deeper Dependence",
      desc: "Outsourcing even basic judgement calls back to the model.",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className="border border-[#D4CDC0] bg-[#FBF9F5] p-3.5 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-[#9E3B24] mb-1.5">
                <span>STAGE {s.num}</span>
                <span>{idx < 4 ? "→" : "↺"}</span>
              </div>
              <div className="font-serif text-base font-medium text-[#181715] mb-1.5">
                {s.title}
              </div>
              <p className="text-xs text-[#5A554E] leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border border-[#2C4A3E] bg-[#F4F8F6] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2C4A3E] font-semibold block">
            HOW TO BREAK THE LOOP · DELIBERATE FRICTION
          </span>
          <p className="text-xs sm:text-sm text-[#181715] mt-0.5">
            Attempt the problem for 10 minutes first → Ask AI for explanations rather than finished code → Verify every claim → Re-implement from memory.
          </p>
        </div>
        <span className="font-mono text-[11px] px-2.5 py-1 bg-[#2C4A3E] text-[#FBF9F5] shrink-0">
          Augmentation Restored
        </span>
      </div>
    </div>
  );
}

export function RenderEditorialVisual({
  visualId,
  figureNumber,
  title,
  caption,
  disclaimer,
}: {
  visualId:
    | "calculator-vs-ai"
    | "who-does-what-better"
    | "two-paths-learning"
    | "time-distribution-chart"
    | "four-real-world-scenarios"
    | "dependence-cycle";
  figureNumber: string;
  title: string;
  caption: string;
  disclaimer?: string;
}) {
  return (
    <figure className="my-12 border border-[#D4CDC0] bg-[#F5F1E8] p-5 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#DED8CE] pb-3.5 mb-6">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#9E3B24] block mb-1">
            {figureNumber}
          </span>
          <h4 className="font-serif text-xl sm:text-2xl text-[#181715]">{title}</h4>
        </div>
        {disclaimer && (
          <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[#D4CDC0] bg-[#FBF9F5] text-[#6E685F]">
            Illustrative / Conceptual
          </span>
        )}
      </div>

      <div>
        {visualId === "calculator-vs-ai" && <VisualCalculatorVsAI />}
        {visualId === "who-does-what-better" && <VisualWhoDoesWhatBetter />}
        {visualId === "two-paths-learning" && <VisualTwoPathsLearning />}
        {visualId === "time-distribution-chart" && <VisualTimeDistributionChart />}
        {visualId === "four-real-world-scenarios" && <VisualFourScenarios />}
        {visualId === "dependence-cycle" && <VisualDependenceCycle />}
      </div>

      <figcaption className="mt-6 pt-4 border-t border-[#DED8CE] text-xs sm:text-sm text-[#5A554E] leading-relaxed">
        <strong className="font-mono text-[11px] uppercase tracking-wider text-[#181715] mr-2">
          Caption:
        </strong>
        {caption}
        {disclaimer && (
          <span className="block mt-1.5 font-mono text-[11px] text-[#7A7369]">
            * Note: {disclaimer}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
