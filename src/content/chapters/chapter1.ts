import { ChapterDocument } from "@/types/chapter";

export const chapter1: ChapterDocument = {
  chapterNumber: 1,
  chapterCode: "01",
  slug: "chapter1",
  routePath: "/afterthoughts/chapter1",
  category: "ARTIFICIAL INTELLIGENCE",
  title: "AI Should Be Our Calculator, Not Our Replacement.",
  subtitle:
    "Rethinking the relationship between human intelligence and artificial intelligence — are we using AI to become better at what we do, or simply to avoid doing it ourselves?",
  editorialSummary:
    "A thought about what happens when our tools become intelligent enough to think alongside us. Starting from the pocket calculator analogy, we examine intelligence augmentation, the mathematics of verification, cognitive offloading, and how to keep human judgement in the driver's seat.",
  publishedAt: "November 2026",
  readingTime: "8 MIN READ",
  wordCount: 2240,
  status: "published",
  coverCaption:
    "FIG. 00 — From deterministic arithmetic to probabilistic synthesis: where a tool ends and human judgement begins.",
  blocks: [
    {
      type: "heading",
      number: "01",
      id: "how-we-actually-use-ai",
      text: "Let's be honest. How do we actually use AI?",
      subtitle: "An ordinary Tuesday in twenty open browser tabs.",
    },
    {
      type: "paragraph",
      dropcap: true,
      text: "Think about the last five times you opened ChatGPT, Claude, or whatever language model currently sits pinned in your browser tabs. If you are anything like me—or most engineering students, developers, and researchers I know—the list probably looks remarkably ordinary.",
    },
    {
      type: "list",
      intro: "In just the past week, you or someone sitting next to you probably:",
      items: [
        {
          title: "Pasted a stubborn mathematical problem",
          body: "or a messy stack trace to get an immediate solution before a deadline.",
        },
        {
          title: "Drafted an email or formal reply",
          body: "that felt slightly too tedious to phrase from scratch.",
        },
        {
          title: "Asked for an intuitive explanation",
          body: "of a difficult programming or systems concept at 1:00 a.m. when the textbook felt impenetrable.",
        },
        {
          title: "Generated fifty lines of code",
          body: "instead of writing the boilerplate and edge-case handlers by hand.",
        },
        {
          title: "Summarised an entire thirty-page document",
          body: "into five bullet points before a meeting.",
        },
        {
          title: "Weighed a decision",
          body: "you were quietly unsure about making on your own.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "None of this feels extraordinary anymore. In a remarkably short span of time, prompting an AI model has become as reflexive as reaching for a search engine—or reaching for a pocket calculator.",
    },
    {
      type: "highlight",
      label: "THE CENTRAL QUESTION",
      text: "Are we using AI because it helps us understand things better, or because it saves us from having to understand them at all?",
    },
    {
      type: "paragraph",
      text: "When electronic pocket calculators first began appearing in classrooms and engineering desks in the 1970s, they sparked a surprisingly fierce argument. Educators worried that students would lose their grasp of numbers. Senior engineers wondered whether a generation raised on silicon buttons would lose the gut instinct that tells you when a bridge calculation is off by an order of magnitude.",
    },
    {
      type: "paragraph",
      text: "Of course, the calculator did not ruin mathematics. A calculator executes arithmetic rapidly and reliably, but it has no idea what you are calculating or why the result matters. You still have to set up the equation, understand what the variables represent in the physical world, and recognise when an answer makes no sense.",
    },
    {
      type: "paragraph",
      text: "Because calculators absorbed the mechanical drudgery of long division and trigonometric tables, we did not stop doing mathematics—we moved up a floor. We spent less time acting like human adding machines and more time modelling complex systems, testing hypotheses, and tackling problems that would have been unbearably slow on paper. Could artificial intelligence play a similar role for much broader human work?",
    },

    {
      type: "heading",
      number: "02",
      id: "the-calculator-analogy",
      text: "The calculator analogy — where does it actually fit?",
      subtitle: "Why deterministic arithmetic and probabilistic generation play by different rules.",
    },
    {
      type: "paragraph",
      text: "I have been thinking about the calculator comparison a lot lately, because it is both the best metaphor we have for AI and the easiest one to misuse. It is comforting to tell ourselves, 'Relax, AI is just a calculator for words and code.' But if we look under the hood, there is a crucial fracture in the analogy.",
    },
    {
      type: "paragraph",
      text: "When you punch 347 × 89 into a calculator, you trigger a deterministic logical circuit. Given the same inputs and precision settings, it performs a strictly defined mathematical operation and returns 30,883 every single time. It does not improvise. It does not try to sound confident when a battery is low. If the number on the screen is wrong for your problem, it is almost certainly because you typed the wrong input or applied the wrong formula.",
    },
    {
      type: "paragraph",
      text: "Generative AI does something fundamentally different. Instead of executing a fixed algebraic rule, a large language model predicts plausible continuations across high-dimensional probability distributions learned from vast collections of human text and code. That statistical nature is what makes it magical: it can help untangle an ambiguous design doc, suggest an architectural pattern, or translate between programming paradigms—open-ended tasks a pocket calculator cannot even represent.",
    },
    {
      type: "paragraph",
      text: "Yet that exact same mechanism means generative AI can produce outputs that are syntactically flawless, tonally authoritative, and completely wrong.",
    },
    {
      type: "visual",
      visualId: "calculator-vs-ai",
      figureNumber: "FIGURE 01",
      title: "The Pocket Calculator vs. Generative AI",
      caption:
        "A structural comparison between deterministic computation and probabilistic generation. While both extend human capability, generative AI shifts the human burden from input precision to output verification.",
    },
    {
      type: "paragraph",
      text: "Long before modern language models existed, a few computing pioneers saw this tension coming and tried to name what the healthy version of the relationship should look like. In 1945, Vannevar Bush wrote his landmark essay 'As We May Think' in The Atlantic, envisioning the Memex not as a machine that would replace human reasoning, but as an intimate supplement to memory that would free people from mechanical indexing so they could focus on associative thought [1].",
    },
    {
      type: "paragraph",
      text: "Fifteen years later, in 1960, J. C. R. Licklider published 'Man-Computer Symbiosis' [3]. Licklider argued that in a true partnership between humans and computers, humans would set the goals, formulate the hypotheses, determine the criteria, and perform the evaluations—while computing machines handled the routinizable work that prepares the way for insights and decisions.",
    },
    {
      type: "paragraph",
      text: "And in 1962, Douglas Engelbart published 'Augmenting Human Intellect: A Conceptual Framework' at the Stanford Research Institute [4]. Engelbart was not interested in building artificial replacements for people. His goal was intelligence augmentation (IA): increasing the capability of a person to approach a complex problem situation, gain comprehension to suit their needs, and derive better solutions faster.",
    },
    {
      type: "visual",
      visualId: "who-does-what-better",
      figureNumber: "FIGURE 02",
      title: "Who Does What Better? Mapping the Symbiosis",
      caption:
        "Inspired by Licklider (1960) and Engelbart (1962): separating distinct human strengths and machine strengths reveals why the collaborative middle zone outperforms either working in isolation.",
    },
    {
      type: "pullquote",
      quote:
        "What if we stopped treating AI as a machine that simply hands us finished answers, and started treating it as an instrument that expands the scale of problems we are willing to tackle?",
      attribution: "Afterthoughts · Chapter 01",
    },

    {
      type: "heading",
      number: "03",
      id: "getting-an-answer-vs-understanding",
      text: "The difference between getting an answer and understanding it",
      subtitle: "A sorting algorithm, four seconds of generation, and five uncomfortable questions.",
    },
    {
      type: "paragraph",
      text: "Here is where the philosophy meets everyday reality. Let's look at a simple programming example that plays out in university labs and bedrooms every single evening.",
    },
    {
      type: "paragraph",
      text: "Imagine a student is learning data structures and needs to write a sorting algorithm—say, Merge Sort or Quicksort—to order a collection of records. They ask an AI assistant. Four seconds later, the model outputs thirty lines of clean, well-commented code. The student copies it into their editor, runs the test suite, sees green checkmarks, and closes the laptop. The task is finished.",
    },
    {
      type: "paragraph",
      text: "But there is another side to this. Suppose we close the AI tab and ask that student five practical questions about the code bearing their name:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        {
          title: "Can they explain how the algorithm works?",
          body: "Why does the recursive step actually guarantee a sorted result when the sub-arrays merge back together?",
        },
        {
          title: "Can they identify its time and space complexity?",
          body: "Why does Quicksort run in O(n log n) on average, yet degrade to O(n²) on already-sorted data if the pivot is chosen naively?",
        },
        {
          title: "Can they modify it for a slightly different requirement?",
          body: "What changes if the sort must preserve stability across composite keys or run in-place under strict memory constraints?",
        },
        {
          title: "Can they find a subtle bug?",
          body: "If an off-by-one error hides in the partition boundary for duplicate elements, do they know where to look?",
        },
        {
          title: "Can they solve a similar problem independently?",
          body: "When an unfamiliar divide-and-conquer problem shows up in an interview or a real codebase next month, do they recognise the pattern?",
        },
      ],
    },
    {
      type: "paragraph",
      text: "There is a vast gulf between completing a task and developing the ability to perform it. On a project tracker or a homework submission portal, the two look identical. Inside a person's head, they could not be more different.",
    },
    {
      type: "paragraph",
      text: "Cognitive scientists call the habit of transferring mental work onto external tools cognitive offloading. In a widely cited review in Trends in Cognitive Sciences, Evan Risko and Sam Gilbert (2016) point out that cognitive offloading is a natural, often brilliant human strategy [8]. Writing down appointments or using a diagram frees up limited working memory. Earlier, Betsy Sparrow, Jenny Liu, and Daniel Wegner (2011) showed in Science—in what became known as the 'Google Effect'—that when people know facts are constantly accessible online, they exhibit lower recall of the information itself and enhanced recall of where to look it up [6].",
    },
    {
      type: "paragraph",
      text: "Offloading the lookup of a syntax rule or a standard library method is harmless; even seasoned engineers look up regex flags. The danger appears when we offload the mental struggle that builds mental models in the first place. When you outsource every rough draft and every debugging puzzle, you do not just save twenty minutes—you skip the exact cognitive reps that turn a novice into someone with intuition.",
    },
    {
      type: "visual",
      visualId: "two-paths-learning",
      figureNumber: "FIGURE 03",
      title: "Two Ways of Using AI: The Bypass Path vs. The Augmentation Loop",
      caption:
        "Both workflows begin with the same problem and use the same AI model. Path A optimises exclusively for immediate output; Path B uses AI explanations and counterexamples to build durable independent capability.",
    },

    {
      type: "heading",
      number: "04",
      id: "numbers-in-the-conversation",
      text: "Let's put some numbers into the conversation",
      subtitle: "Speed, accuracy, and where the saved minutes actually migrate.",
    },
    {
      type: "paragraph",
      text: "Conversations about AI productivity are often heavy on adjectives and light on arithmetic. Let's look at this a little differently by walking through three simple mathematical lenses: task time distribution, output accuracy, and the probability of catching errors in human-AI collaboration.",
    },
    {
      type: "paragraph",
      text: "Imagine a software developer completing a self-contained programming task—for instance, building and validating a data-processing endpoint. Below is a hypothetical, illustrative breakdown comparing how long each stage might take without AI versus with AI assistance:",
    },
    {
      type: "visual",
      visualId: "time-distribution-chart",
      figureNumber: "FIGURE 04",
      title: "Where Does the Time Actually Go? Task Completion Breakdown",
      caption:
        "Comparison of initial coding, debugging, and verification time across human-only (90 min) and AI-assisted (65 min) workflows. Notice that while initial drafting shrinks dramatically, verification effort doubles.",
      disclaimer:
        "Illustrative hypothetical data constructed to demonstrate workflow redistribution, not experimental lab measurements.",
    },
    {
      type: "math",
      label: "CONCEPT 01 · TIME EFFICIENCY & WORKFLOW SHIFT",
      title: "Relative Time Saved and the Verification Tax",
      formulaLatex: "\\eta_{\\text{time}} = \\frac{T_{\\text{human}} - T_{\\text{AI}}}{T_{\\text{human}}} \\times 100",
      formulaDisplay: "Time Saved (%) = [ (T_human − T_AI) / T_human ] × 100",
      isHypothetical: true,
      variables: [
        {
          symbol: "T_human",
          meaning:
            "Total completion time without AI = T_code (60m) + T_debug (20m) + T_verify (10m) = 90 min",
        },
        {
          symbol: "T_AI",
          meaning:
            "Total completion time with AI = T_code (25m) + T_debug (20m) + T_verify (20m) = 65 min",
        },
        {
          symbol: "η_time",
          meaning: "Percentage reduction in end-to-end completion time",
        },
      ],
      walkthrough: [
        "1. Compute total unassisted time: T_human = 60 + 20 + 10 = 90 minutes.",
        "2. Compute total AI-assisted time: T_AI = 25 + 20 + 20 = 65 minutes.",
        "3. Calculate relative time saved: ((90 − 65) / 90) × 100 = (25 / 90) × 100 = 27.78%.",
      ],
      conclusion:
        "A 27.78% net time reduction is substantial, but look closely at the internal redistribution: 35 minutes saved during initial coding did not simply vanish into free time—10 extra minutes moved directly into verification.",
    },
    {
      type: "paragraph",
      text: "This raises a much more interesting question than raw typing speed: did the developer become effortlessly faster, or did the cognitive work shift from authoring code to auditing code? Auditing code you did not write yourself requires intense concentration, because generated code looks clean on the surface even when an edge case is mishandled.",
    },
    {
      type: "paragraph",
      text: "Real-world empirical studies echo this nuance. In a controlled experiment by Sida Peng et al. (2023), developers with access to GitHub Copilot completed an HTTP server benchmark 55.8% faster than the control group [10]. Similarly, Erik Brynjolfsson, Danielle Li, and Lindsey Raymond (2023) studied over 5,000 customer support agents and found an average productivity increase of 14%—with the largest gains among newer workers [11]. Yet as Fabrizio Dell'Acqua et al. (2023) demonstrated in their Harvard Business School field experiment with 758 consultants, AI creates a 'jagged technological frontier': on tasks inside the model's capability boundary, workers improved speed and quality significantly, whereas on deceptive tasks just outside that boundary, workers using AI were 19 percentage points less likely to produce correct solutions than those working without AI [12].",
    },
    {
      type: "paragraph",
      text: "That brings us to our second and third mathematical concepts: accuracy and how human verification combines with AI generation.",
    },
    {
      type: "math",
      label: "CONCEPT 02 & 03 · ACCURACY & HUMAN-AI COMPLEMENTARITY",
      title: "Output Accuracy and Residual Collaboration Error",
      formulaLatex:
        "\\text{Accuracy} = \\frac{N_{\\text{correct}}}{N_{\\text{total}}} \\times 100 \\quad \\text{and} \\quad E_{\\text{collab}} = e_{\\text{AI}} \\times (1 - p_{\\text{detect}})",
      formulaDisplay:
        "Accuracy = (Correct Outputs / Total Outputs) × 100   |   E_collab = e_AI × (1 − p_detect)",
      isHypothetical: true,
      variables: [
        {
          symbol: "N_correct / N_total",
          meaning: "Proportion of generated or completed outputs that meet correctness criteria",
        },
        {
          symbol: "e_AI",
          meaning:
            "Baseline probability (0 to 1) that the AI produces a plausible but flawed output on a given task",
        },
        {
          symbol: "p_detect",
          meaning:
            "Probability (0 to 1) that the human reviewer detects and corrects an AI error during verification",
        },
        {
          symbol: "E_collab",
          meaning: "Final residual error rate after human-AI collaboration",
        },
      ],
      walkthrough: [
        "Suppose across N_total = 100 subtle technical items, a human working alone gets 88 right (88% accuracy), while unverified AI output gets 85 right (85% accuracy, so e_AI = 0.15).",
        "Case A — Passive Replacement (Low Understanding, p_detect = 0.10): The user barely checks the AI's work. Residual error E_collab = 0.15 × (1 − 0.10) = 0.135 (13.5% error, or 86.5% accuracy—worse than the human alone!).",
        "Case B — Active Augmentation (Calculator Mindset, p_detect = 0.80): A knowledgeable human verifies the AI's output and catches 80% of its mistakes. Residual error E_collab = 0.15 × (1 − 0.80) = 0.03 (3.0% error, or 97.0% accuracy—better than either human or AI alone).",
      ],
      conclusion:
        "Human-AI complementarity is not automatic. An AI assistant only beats human-only accuracy when p_detect stays high—which requires the human to maintain deep independent domain knowledge.",
    },

    {
      type: "heading",
      number: "05",
      id: "where-ai-makes-us-more-capable",
      text: "Where AI genuinely makes us more capable",
      subtitle: "Four people, four real contexts, and the line between assistance and abdication.",
    },
    {
      type: "paragraph",
      text: "When we keep our verification capability sharp, AI stops acting like a replacement and starts working like the intellectual amplifier Engelbart hoped for. Let's step out of equations and look at four everyday scenarios where this balance plays out.",
    },
    {
      type: "visual",
      visualId: "four-real-world-scenarios",
      figureNumber: "FIGURE 05",
      title: "Four People. Four Different Possibilities.",
      caption:
        "Across education, software engineering, scientific research, and smallholder agriculture, AI creates the greatest value when it removes friction around access and boilerplate while leaving core judgement with the person.",
    },
    {
      type: "subheading",
      text: "A. The Student — A Tutor That Never Gets Tired at Midnight",
    },
    {
      type: "paragraph",
      text: "In a lecture hall of two hundred people, a student who gets stuck on step three of a linear algebra proof rarely stops the professor three times in a row. An AI assistant can re-explain that concept using geometric intuition, generate five graduated practice questions, and check where the student's scratch work went wrong. The key is what happens next: the student still has to close the assistant and solve the sixth problem alone. AI explains the map; the student still has to walk the terrain.",
    },
    {
      type: "subheading",
      text: "B. The Developer — Trading Boilerplate for Architecture",
    },
    {
      type: "paragraph",
      text: "For a developer, AI is phenomenal at reducing activation energy. It can scaffold repetitive data models, translate a legacy script, suggest unit test cases for boundary values, and help explore an unfamiliar library's API in minutes rather than hours. Freed from mechanical ceremony, the developer can invest more energy in the things that actually break systems in production: architecture, state invariants, concurrency guarantees, and security.",
    },
    {
      type: "subheading",
      text: "C. The Researcher — Navigating a Flood of Literature",
    },
    {
      type: "paragraph",
      text: "Scientists and researchers face an overwhelming volume of published papers every month. AI tools can help search across disciplines, organise scattered notes, write data-cleaning pipelines, and surface potential counterarguments. Yet research fundamentally depends on methodological rigour, source verification, and critical judgement. An AI can summarise ten papers in thirty seconds, but it cannot tell you whether the sample size in paper four invalidates its conclusion unless you know how to interrogate the methodology.",
    },
    {
      type: "subheading",
      text: "D. The Small Farmer — Specialised Knowledge in Local Languages",
    },
    {
      type: "paragraph",
      text: "Technology writing too often assumes everyone works behind a dual-monitor setup. Consider a small farmer trying to identify an early crop disease, interpret localised weather patterns, or check soil treatment guidelines. Much of the world's agricultural research is locked in dense technical PDFs written in English. An AI assistant conversing via voice or text in a regional language can bridge that gap—translating vetted agronomic advisories into practical steps when an extension officer isn't nearby.",
    },
    {
      type: "paragraph",
      text: "At the same time, we have to be grounded about the realities here. Rural connectivity can be intermittent, voice models still struggle with local dialects, smartphone hardware and data plans cost real money, and reliability is critical: a hallucinated advice about pesticide concentration or irrigation timing carries real economic consequences for a household. Here, AI is most helpful when strictly anchored to verified agricultural databases rather than open-ended improvisation.",
    },

    {
      type: "heading",
      number: "06",
      id: "when-convenience-becomes-dependence",
      text: "The part we don't talk about enough: When convenience becomes dependence",
      subtitle: "Automation bias, fluent hallucinations, and the quiet erosion of confidence.",
    },
    {
      type: "paragraph",
      text: "If the upside of human-AI collaboration is so clear, why does it so often slide into passive copying? Because human brains are wired to conserve energy whenever a tool looks trustworthy.",
    },
    {
      type: "paragraph",
      text: "In 'Thinking, Fast and Slow' (2011), psychologist Daniel Kahneman described the interplay between System 1—our fast, automatic, intuitive thinking—and System 2—our slow, effortful, analytical verification system [7]. System 2 is what catches subtle bugs and logical fallacies, but engaging it takes real mental effort. When we are tired or rushed, and an AI model presents an answer in crisp, well-structured paragraphs, System 1 sees fluency and mistakes it for accuracy.",
    },
    {
      type: "paragraph",
      text: "Human factors researchers Raja Parasuraman and Dietrich Manzey (2010) studied this phenomenon across cockpit automation and clinical decision support, calling it automation bias: the tendency to use automated cues as a heuristic replacement for vigilant information seeking and processing [5]. When combine automation bias with AI hallucinations—where models generate plausible but unfaithful or fabricated statements, as catalogued extensively by Ziwei Ji et al. (2023) in ACM Computing Surveys [9]—we get a subtle trap.",
    },
    {
      type: "paragraph",
      text: "A 2025 study by researchers at Microsoft Research and Carnegie Mellon University (Lee et al., 2025) surveyed knowledge workers on how generative AI affected their critical thinking [13]. Their findings deserve careful reflection: workers who expressed higher confidence in AI reported engaging in less critical thinking effort, whereas workers with strong confidence in their own domain skills remained far more likely to verify, critique, and refine AI outputs.",
    },
    {
      type: "visual",
      visualId: "dependence-cycle",
      figureNumber: "FIGURE 06",
      title: "The Dependence Cycle: How Convenience Can Erode Capability",
      caption:
        "A potential behavioural feedback loop. When immediate convenience repeatedly bypasses verification and independent practice, domain confidence weakens—making future reliance feel even more necessary.",
      disclaimer:
        "Conceptual behavioural pattern illustrating the risk of unverified offloading, not an inevitable outcome of AI adoption.",
    },
    {
      type: "highlight",
      label: "A QUESTION WORTH SITTING WITH",
      text: "If AI makes our work easier every day, are we becoming better at our work, or simply becoming better at asking AI to do it?",
    },
    {
      type: "paragraph",
      text: "To be clear, using AI does not automatically damage human intelligence. Just as calculators did not make engineers forget physics, AI does not force anyone to stop thinking. The risk is behavioural: when a tool makes skipping the hard part effortless, we have to choose—deliberately—which mental muscles we refuse to let atrophy.",
    },

    {
      type: "heading",
      number: "07",
      id: "so-should-ai-replace-us",
      text: "So, should AI replace us?",
      subtitle: "Separating repetitive execution from human responsibility.",
    },
    {
      type: "paragraph",
      text: "When we pull all of these threads together, the answer is neither techno-utopian hype nor defensive rejection.",
    },
    {
      type: "paragraph",
      text: "Some tasks absolutely should be automated. There is very little human dignity in manually copying data between spreadsheets, formatting citation brackets for four hours, or writing the fiftieth identical boilerplate class when reliable automation can handle it in seconds. Back in 1950, when Alan Turing opened his famous paper with the question 'Can machines think?' [2], 'computers' were still rooms full of human clerks performing tedious arithmetic by hand. Nobody today wishes we went back to calculating ballistic or actuarial tables with pencil and paper.",
    },
    {
      type: "paragraph",
      text: "The mistake is confusing repetitive task execution with the broader human capabilities that give work its meaning and reliability:",
    },
    {
      type: "list",
      items: [
        {
          title: "Understanding unspoken context",
          body: "and recognising the human constraints, history, and real-world messiness that never fit cleanly into a prompt.",
        },
        {
          title: "Setting goals",
          body: "and deciding which problems are actually worth solving in the first place.",
        },
        {
          title: "Making value judgements",
          body: "when speed, fairness, safety, and long-term maintainability pull in opposite directions.",
        },
        {
          title: "Taking responsibility",
          body: "because a probabilistic model cannot stand behind a medical decision, an engineering sign-off, or a public commitment.",
        },
        {
          title: "Evaluating outcomes",
          body: "with the domain mastery required to tell a brilliant insight apart from a polished hallucination.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "The goal of building better tools is not to preserve human involvement in every mechanical keystroke out of nostalgia. The goal is to make technology genuinely useful to people—so that human judgement operates at a higher level of leverage, clarity, and ambition.",
    },

    {
      type: "heading",
      number: "08",
      id: "one-last-thought",
      text: "One last thought",
      subtitle: "Returning to the calculator.",
    },
    {
      type: "paragraph",
      text: "A pocket calculator made arithmetic faster. It did not eliminate the need to understand mathematics; if anything, by making calculation cheap, it made mathematical reasoning, estimation, and problem formulation even more valuable.",
    },
    {
      type: "paragraph",
      text: "Artificial intelligence is a far more complex, unpredictable, and conversational instrument than a calculator. It can draft, explain, translate, and synthesise across almost any field we touch. Because it is so capable, it offers us two very different bargains every time we open a new tab: we can use it to avoid the effort of understanding, or we can use it to push past the limits of what we could figure out alone.",
    },
  ],
  closingReflection: {
    quote:
      "Perhaps the real achievement of AI won't be that it can do everything we once did. Perhaps it will be that we can finally spend more time doing things we couldn't do before.",
    finalQuestion:
      "Are we building AI to make ourselves unnecessary, or to discover what we're capable of becoming with a little help?",
  },
  authorNote:
    "Written as Chapter 01 of AFTERTHOUGHTS. I'm an engineering student exploring how artificial intelligence, computing systems, and human cognition shape one another—not from an ivory tower, but as someone building with these tools and questioning where they might take us.",
  hashtags: [
    "#Afterthoughts",
    "#ArtificialIntelligence",
    "#IntelligenceAugmentation",
    "#HumanAICollaboration",
    "#SoftwareEngineering",
    "#CognitiveScience",
    "#FutureOfThinking",
  ],
  references: [
    {
      id: 1,
      authors: "Bush, V.",
      year: "1945",
      title: "As We May Think",
      publication: "The Atlantic Monthly, 176(1), 101–108",
      url: "https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/",
    },
    {
      id: 2,
      authors: "Turing, A. M.",
      year: "1950",
      title: "Computing Machinery and Intelligence",
      publication: "Mind, LIX(236), 433–460",
      url: "https://doi.org/10.1093/mind/LIX.236.433",
      doi: "10.1093/mind/LIX.236.433",
    },
    {
      id: 3,
      authors: "Licklider, J. C. R.",
      year: "1960",
      title: "Man-Computer Symbiosis",
      publication: "IRE Transactions on Human Factors in Electronics, HFE-1, 4–11",
      url: "https://doi.org/10.1109/THFE2.1960.4503259",
      doi: "10.1109/THFE2.1960.4503259",
    },
    {
      id: 4,
      authors: "Engelbart, D. C.",
      year: "1962",
      title: "Augmenting Human Intellect: A Conceptual Framework",
      publication: "SRI Summary Report AFOSR-3223, Stanford Research Institute",
      url: "https://www.dougengelbart.org/pubs/augment-3906.html",
    },
    {
      id: 5,
      authors: "Parasuraman, R., & Manzey, D. H.",
      year: "2010",
      title: "Complacency and Bias in Human Use of Automation: An Attentive Integration",
      publication: "Human Factors, 52(3), 381–410",
      url: "https://doi.org/10.1177/0018720810376055",
      doi: "10.1177/0018720810376055",
    },
    {
      id: 6,
      authors: "Sparrow, B., Liu, J., & Wegner, D. M.",
      year: "2011",
      title: "Google Effects on Memory: Cognitive Consequences of Having Information at Our Fingertips",
      publication: "Science, 333(6043), 776–778",
      url: "https://doi.org/10.1126/science.1207745",
      doi: "10.1126/science.1207745",
    },
    {
      id: 7,
      authors: "Kahneman, D.",
      year: "2011",
      title: "Thinking, Fast and Slow",
      publication: "Farrar, Straus and Giroux, New York",
      url: "https://us.macmillan.com/books/9780374533557/thinkingfastandslow",
    },
    {
      id: 8,
      authors: "Risko, E. F., & Gilbert, S. J.",
      year: "2016",
      title: "Cognitive Offloading",
      publication: "Trends in Cognitive Sciences, 20(9), 676–688",
      url: "https://doi.org/10.1016/j.tics.2016.07.002",
      doi: "10.1016/j.tics.2016.07.002",
    },
    {
      id: 9,
      authors: "Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y. J., Madotto, A., & Fung, P.",
      year: "2023",
      title: "Survey of Hallucination in Natural Language Generation",
      publication: "ACM Computing Surveys, 55(12), Article 248, 1–38",
      url: "https://doi.org/10.1145/3571730",
      doi: "10.1145/3571730",
    },
    {
      id: 10,
      authors: "Peng, S., Kalliamvakou, E., Cihon, P., & Demirer, M.",
      year: "2023",
      title: "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot",
      publication: "arXiv preprint arXiv:2302.06590",
      url: "https://arxiv.org/abs/2302.06590",
    },
    {
      id: 11,
      authors: "Brynjolfsson, E., Li, D., & Raymond, L. R.",
      year: "2023",
      title: "Generative AI at Work",
      publication: "NBER Working Paper No. 31161 / The Quarterly Journal of Economics (2025)",
      url: "https://doi.org/10.3386/w31161",
      doi: "10.3386/w31161",
    },
    {
      id: 12,
      authors: "Dell'Acqua, F., McFowland, E., Mollick, E. R., Lifshitz-Assaf, H., Kellogg, K., Rajendran, S., Krayer, L., Candelon, F., & Lakhani, K. R.",
      year: "2023",
      title:
        "Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of AI on Knowledge Worker Productivity and Quality",
      publication: "Harvard Business School Technology & Operations Mgt. Unit Working Paper No. 24-013",
      url: "https://www.hbs.edu/faculty/Pages/item.aspx?num=64700",
    },
    {
      id: 13,
      authors: "Lee, H.-P., Sarkar, A., Tankelevitch, L., Drosos, I., Rintel, S., Banks, R., & Wilson, N.",
      year: "2025",
      title:
        "The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort and Confidence Effects From a Survey of Knowledge Workers",
      publication: "CHI Conference on Human Factors in Computing Systems (Microsoft Research & CMU)",
      url: "https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/",
    },
  ],
};
