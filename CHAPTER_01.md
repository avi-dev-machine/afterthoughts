# AFTERTHOUGHTS.

`01 / ARTIFICIAL INTELLIGENCE` · `8 MIN READ · AFTERTHOUGHTS · CHAPTER 01`

# AI Should Be Our Calculator, Not Our Replacement.

*Rethinking the relationship between human intelligence and artificial intelligence — are we using AI to become better at what we do, or simply to avoid doing it ourselves?*

---

## 01. Let's be honest. How do we actually use AI?

Think about the last five times you opened ChatGPT, Claude, or whatever model currently sits pinned in your browser tabs.

If you're anything like me—or most students, developers, and researchers I know—the list probably looks remarkably ordinary:

- You pasted a stubborn mathematical problem or a messy block of error logs.
- You asked it to draft a polite email you didn't feel like phrasing from scratch.
- You asked it to explain a difficult programming or systems concept at 1:00 a.m.
- You generated fifty lines of boilerplate code instead of typing them out by hand.
- You dropped in a thirty-page PDF and asked for the five-bullet version.
- Or maybe, quietly, you asked it to weigh the pros and cons of a decision you were hesitant to make yourself.

None of this feels extraordinary anymore. In the span of a couple of years, querying a large language model has become as reflexive as reaching for a search engine—or a pocket calculator.

And yet, over the past few weeks, I've been sitting with an uncomfortable question about my own tab-switching habits:

> **Are we using AI because it helps us understand things better, or because it saves us from having to understand them at all?**

When pocket calculators first walked into classrooms and engineering offices in the 1970s, they provoked a surprisingly fierce debate. Teachers worried students would forget how numbers worked. Engineers wondered whether intuition for estimation would quietly wither away.

Of course, the calculator didn't destroy mathematics. A calculator performs arithmetic rapidly and reliably, but it has no idea *what* you are calculating or *why* the answer matters. You still have to frame the equation, choose the variables, and recognize when a result of `42,000,000` for the width of a bridge beam means you pressed the wrong button.

Because calculators took care of long division, we didn't stop doing maths—we moved up a floor. We spent less time grinding through arithmetic by hand and more time modelling systems, testing hypotheses, and solving problems that would have been unbearably tedious on paper.

So here is the thought I want to explore in this opening chapter of *Afterthoughts*: **Could artificial intelligence become a calculator for much more complex human tasks—and what happens when we forget the difference between a calculator and a replacement?**

---

## 02. The calculator analogy — where does it actually fit?

It is tempting to wrap the whole conversation up right there: *AI is just a calculator for words and code; relax and keep prompting.*

But if we look closely at how a calculator works versus how modern generative AI works, the analogy fractures in a way that actually matters.

When you type `347 × 89` into a scientific calculator, you are invoking a deterministic circuit. Given the same inputs and settings, it executes a defined mathematical operation and returns `30,883` every single time. It does not guess. It does not try to sound persuasive. If an error occurs, it is almost always because the human entered the wrong number or chose the wrong formula.

Generative AI does something fundamentally different. It does not look up a rulebook of verified truths; it predicts plausible continuations across high-dimensional probability distributions learned from vast corpora of human text and code. That statistical nature is precisely why it can write poetry, refactor a React component, or brainstorm research hypotheses—tasks a calculator could never touch.

It is also why it can look you dead in the eye and invent a nonexistent software library, a flawed mathematical proof, or a fabricated legal citation with the exact same polished, reassuring tone it uses when it is right.

### Figure 01 — Calculator vs. Generative AI: Where the Analogy Holds and Where It Breaks

| Dimension | Pocket Calculator | Generative AI System |
| :--- | :--- | :--- |
| **Core Mechanism** | Executes defined, deterministic mathematical operations | Generates probabilistic outputs from learned statistical patterns |
| **Repeatability** | Deterministic for identical inputs and precision settings | Stochastic; responses can vary across runs and phrasing |
| **Nature of Errors** | Usually human input error or floating-point precision limits | Can produce fluent, plausible, yet factually incorrect hallucinations |
| **Problem Scope** | Requires a well-posed numerical expression | Assists with open-ended, ambiguous reasoning, coding, and writing |
| **Human Requirement** | Must know *which* formula to apply and *what* the units mean | Must frame context, verify correctness, and exercise critical judgement |

This distinction isn't new, even if the models are. More than sixty years ago, before anyone had heard of transformers or token windows, a handful of computing pioneers were already drawing a sharp line between **replacing** human thought and **amplifying** it.

In 1945, [Vannevar Bush](https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/) imagined the *Memex*—not as an autonomous brain that would think on our behalf, but as an "intimate supplement" to human memory that would free people from mechanical archival work so they could focus on associative reasoning. Fifteen years later, in 1960, [J. C. R. Licklider](https://doi.org/10.1109/THFE2.1960.4503259) published *Man-Computer Symbiosis*, arguing that the most productive future lay in close partnership: humans would set goals, formulate hypotheses, and evaluate outcomes, while computing machines handled the routinizable work preparing the way for insights.

And in 1962, [Douglas Engelbart](https://www.dougengelbart.org/pubs/augment-3906.html)—the engineer who later gave us the computer mouse, hypertext, and windowed interfaces—wrote *Augmenting Human Intellect: A Conceptual Framework*. Engelbart wasn't trying to build an artificial human. He wanted to increase the capability of a human to approach a complex problem, gain comprehension to suit their particular needs, and derive solutions that neither human nor machine could reach alone.

> *"What if we stopped treating AI as an oracle that hands us finished answers, and started treating it the way Engelbart imagined: as an instrument that expands the scale of problems we dare to tackle?"*

---

## 03. The difference between getting an answer and understanding it

To see why the distinction between *getting an output* and *building capability* matters so much, let's step out of theory and look at a scenario that happens in computer science departments every single night.

Imagine an engineering student sitting down with an assignment: implement a sorting algorithm to order a dataset of custom records, analyse its performance, and handle edge cases.

The student opens an AI assistant, types a two-sentence prompt, and four seconds later has a clean, syntactically valid implementation of Merge Sort or Quicksort sitting in their editor. The tests pass. The homework is submitted. Task completed.

Or is it?

Take away the prompt window for five minutes and ask that same student five straightforward questions:

1. **Can you explain *why* the algorithm partitions or merges the array the way it does?**
2. **Can you identify its time complexity—why Quicksort averages `O(n log n)` but degrades to `O(n²)` on already-sorted inputs with a naive pivot?**
3. **Can you modify the comparator when the sorting criteria suddenly require stable ordering across two composite keys?**
4. **Can you spot a subtle off-by-one boundary bug when the array length is zero or one?**
5. **Can you recognise when a future problem in production is actually a sorting and partitioning problem in disguise?**

Completing a task and developing the ability to perform that task look identical on a submission portal, but they leave completely different footprints in a person's mind.

Cognitive scientists have a name for what happens when we delegate mental effort to an external device: **cognitive offloading**. As researchers [Evan Risko and Sam Gilbert (2016)](https://doi.org/10.1016/j.tics.2016.07.002) explain in *Trends in Cognitive Sciences*, offloading isn't inherently bad—writing a grocery list on paper or setting a calendar reminder frees up working memory for more important thoughts. Similarly, [Betsy Sparrow, Jenny Liu, and Daniel Wegner (2011)](https://doi.org/10.1126/science.1207745) demonstrated in *Science* (the famous "Google Effect" study) that when people know information is easily retrievable online, they remember *where* to find it rather than the information itself.

The trouble starts when we offload not just *storage*, but the *synthesis and struggle* that create understanding in the first place. In programming, mathematics, and engineering, friction isn't always a flaw in the workflow; often, friction is the exact mechanism through which intuition is built.

### Figure 02 — Two Ways of Using AI: The Bypass Path vs. The Augmentation Loop

```
PATH A — THE BYPASS LOOP (Task Completion Without Capability)
[ Problem ] ──► [ Ask AI ] ──► [ Copy Answer ] ──► [ Task Submitted ]
                                                          │
                                       (Fragile: breaks when context changes)

PATH B — THE AUGMENTATION LOOP (Engelbart-Style Human-AI Collaboration)
[ Problem ] ──► [ Attempt & Frame ] ──► [ Query AI for Intuition / Edge Cases ]
                     ▲                                    │
                     │                                    ▼
       [ Solve & Extend Solo ] ◄── [ Experiment ] ◄── [ Verify & Critique ]
```

In **Path A**, the human acts as a clipboard courier between the problem statement and the language model. The code compiles today, but the student is no more capable tomorrow than they were yesterday.

In **Path B**, the human stays in the driver's seat. AI is used to interrogate the concept—*"Why did my recursive base case fail here?"*, *"Show me a counterexample where greedy choice breaks"*—followed by verification, experimentation, and independent implementation. Both paths use the exact same technology. Only one of them makes the person sharper.

---

## 04. Let's put some numbers into the conversation

Whenever people debate AI productivity, the conversation tends to swing between two extremes: either *"AI makes everyone 10x faster overnight"* or *"AI code is completely unusable."*

Let's slow down and put some simple, transparent mathematics on the table.

Imagine a software developer working on a moderately complex feature—say, writing a data transformation module with edge-case validation. Let's compare a **hypothetical, illustrative example** of completing this task without AI versus with an AI coding assistant:

### Table 01 — Hypothetical Developer Task Breakdown (Illustrative Example)

| Workflow Stage | Without AI ($T_{\text{human}}$) | With AI Assistance ($T_{\text{AI}}$) | Change |
| :--- | ---: | ---: | ---: |
| **1. Initial coding ($T_{\text{code}}$)** | 60 min | 25 min | −35 min |
| **2. Debugging ($T_{\text{debug}}$)** | 20 min | 20 min | 0 min |
| **3. Verification & review ($T_{\text{verify}}$)** | 10 min | 20 min | +10 min |
| **Total Completion Time ($T_{\text{total}}$)** | **90 min** | **65 min** | **−25 min** |

*(Note: These figures are an illustrative hypothetical scenario designed to examine workflow trade-offs, not experimental measurements.)*

### 1. Time Efficiency and the Verification Shift

If we define total task time as the sum of initial drafting, debugging, and verification:

$$T_{\text{total}} = T_{\text{code}} + T_{\text{debug}} + T_{\text{verify}}$$

Then the relative time saved ($\eta_{\text{time}}$) when using AI assistance is:

$$\eta_{\text{time}} = \frac{T_{\text{human}} - T_{\text{AI}}}{T_{\text{human}}} \times 100$$

Substituting our illustrative numbers:

$$\eta_{\text{time}} = \frac{90 - 65}{90} \times 100 = \frac{25}{90} \times 100 \approx 27.78\%$$

Saving **27.78%** of total time is genuinely meaningful—and it aligns remarkably well with real empirical findings, such as the controlled study by [Sida Peng et al. (2023)](https://arxiv.org/abs/2302.06590) which found that developers using GitHub Copilot completed an HTTP server task significantly faster than the control group, or [Erik Brynjolfsson, Danielle Li, and Lindsey Raymond (2023)](https://doi.org/10.3386/w31161), who documented substantial productivity gains from generative AI in customer support workflows.

But look closer at *where* the minutes went in our table:

- **Initial coding dropped by more than half** (from $60\text{ min}$ to $25\text{ min}$).
- **Debugging stayed flat** ($20\text{ min}$).
- **Verification time doubled** (from $10\text{ min}$ to $20\text{ min}$).

Why does verification double? Because when you write code yourself, you build a mental model of its invariants line by line as you type. When an AI generates eighty lines of code in three seconds, you are suddenly doing code review on a stranger's pull request—a stranger who writes very clean variable names even when their boundary logic is subtly broken.

### 2. Accuracy and the Mathematics of Verification

Speed means very little if we ignore correctness. In its simplest form, task accuracy Across $N_{\text{total}}$ outputs is:

$$\text{Accuracy} = \frac{N_{\text{correct}}}{N_{\text{total}}} \times 100$$

Now let's think about how human knowledge and AI output interact during verification. Suppose an AI model tackling a non-trivial technical task has an unverified baseline error probability of $e_{\text{AI}} \in [0, 1]$, and the human reviewing that output catches and fixes an AI mistake with detection probability $p_{\text{detect}} \in [0, 1]$.

Assuming the human doesn't introduce new errors during review, the residual error rate of the human-AI collaboration ($E_{\text{collab}}$) is:

$$E_{\text{collab}} = e_{\text{AI}} \times (1 - p_{\text{detect}})$$

Let's walk through a quick numerical example using this relationship:

- Suppose on a tricky data-parsing task of $100$ cases, the raw AI output is right $85$ times and subtly wrong $15$ times ($e_{\text{AI}} = 0.15$, or **85% standalone AI accuracy**).
- **Scenario A (The Calculator Mindset — High Domain Understanding):** The engineer understands the domain deeply and actively audits the generated code, catching $80\%$ of the model's mistakes ($p_{\text{detect}} = 0.80$).
  $$E_{\text{collab}} = 0.15 \times (1 - 0.80) = 0.03 \quad \Longrightarrow \quad \text{Final Accuracy} = 97\%$$
- **Scenario B (The Replacement Mindset — Passive Copying):** The user treats AI as a replacement for understanding, skims the output because it "looks right," and catches only $10\%$ of mistakes ($p_{\text{detect}} = 0.10$).
  $$E_{\text{collab}} = 0.15 \times (1 - 0.10) = 0.135 \quad \Longrightarrow \quad \text{Final Accuracy} = 86.5\%$$

Look at what that simple equation tells us: **as $p_{\text{detect}}$ approaches zero—which is exactly what happens when we stop learning the underlying subject—our ceiling is permanently capped by the raw reliability of the model.** Conversely, the stronger your own foundational knowledge ($p_{\text{detect}} \to 1$), the more powerful an imperfect AI tool becomes in your hands.

---

## 05. Where AI genuinely makes us more capable

When we keep that verification loop intact, AI stops being a crutch and starts acting like a genuine cognitive lever. We don't need science-fiction scenarios to see this; it is already happening across wildly different corners of everyday work.

### A. The Student
Used lazily, AI writes the essay and robs the student of the point of the assignment. Used thoughtfully, it becomes the most patient tutor a student could ask for—one that never gets tired of explaining eigenvalues three different ways at midnight, generating custom practice problems, or pointing out *where* a proof went off the rails without giving away the final line. The breakthrough comes when the student closes the chat window and works the next problem on blank paper.

### B. The Developer
Most software engineers didn't fall in love with programming because they enjoyed writing repetitive CRUD serializers, regex boilerplate, or configuration files. By letting AI draft the scaffolding, explore unfamiliar documentation, and generate unit test permutations, a developer can spend more mental bandwidth where human judgement is irreplaceable: system architecture, data invariants, failure modes, and security boundaries.

### C. The Researcher
Modern scientific literature grows faster than any human can read. For a researcher, AI can help triage papers across adjacent fields, clean messy datasets, write simulation scripts, and stress-test an initial hypothesis. Yet as [Fabrizio Dell'Acqua et al. (2023)](https://www.hbs.edu/faculty/Pages/item.aspx?num=64700) showed in their study of knowledge workers navigating what they call the **"jagged technological frontier,"** AI excels inside its boundary of competence but fails unpredictably just outside it. Deciding which experimental methodology is valid—and what a result actually means—still belongs firmly to the researcher.

### D. The Small Farmer
It is easy for technology essays to stay trapped inside laptops and university libraries, so let's step outside. Imagine a smallholder farmer trying to diagnose an unfamiliar fungal blight on a tomato crop or interpret shifting monsoon advisories. Historically, specialized agronomic research stayed locked inside English-language journals or overburdened extension offices. Today, voice-first, local-language AI assistants (such as initiatives explored by organizations like [Digital Green](https://www.digitalgreen.org/)) are beginning to translate vetted agricultural bulletins into conversational dialects.

At the same time, we have to be realistic here. An AI assistant in agriculture faces real-world constraints that Silicon Valley demos rarely mention: patchy rural 3G connectivity, regional dialect nuances, device costs, and—most critically—the fact that a hallucinated pesticide dosage or planting window isn't a minor typo you can patch in a Git commit; it can jeopardize a family's season. Here, more than anywhere, AI works best when grounded in verified local extension data and paired with human community expertise.

---

## 06. The part we don't talk about enough

### When convenience becomes dependence

There is a quieter side to this story that deserves honest attention.

In 2011, Nobel laureate [Daniel Kahneman](https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow) popularized the distinction between **System 1** (fast, automatic, intuitive, and effort-avoidant thinking) and **System 2** (slow, deliberate, analytical, and effortful thinking). System 2 is capable of rigorous verification, logic checks, and critical scepticism—but it is also inherently lazy. Whenever System 1 sees something coherent, fluent, and familiar, it whispers to System 2: *"No need to wake up; this looks completely fine."*

Large language models are, by design, machines that produce extraordinarily fluent, confident prose. Even when an LLM is completely wrong—a phenomenon extensively catalogued in surveys of AI hallucination such as [Ziwei Ji et al. (2023)](https://doi.org/10.1145/3571730) in *ACM Computing Surveys*—its syntax remains impeccable.

In human factors engineering, this triggers a well-documented vulnerability called **automation bias**: our tendency to over-trust automated recommendations and ignore contradictory evidence simply because the machine said so. As [Raja Parasuraman and Dietrich Manzey (2010)](https://doi.org/10.1177/0018720810376055) showed across aviation, medicine, and process control, highly reliable—or highly confident—automation regularly lulls even trained professionals into complacency errors.

More recently, a 2025 study by researchers at [Microsoft Research and Carnegie Mellon University (Lee et al., 2025)](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/) examining knowledge workers' day-to-day use of generative AI found a striking pattern: higher confidence in AI was associated with *less* critical thinking effort, whereas workers with higher confidence in their *own* domain expertise engaged in more active verification and critique.

### Figure 05 — The Dependence Cycle (A Potential Behavioural Pattern)

```
   ┌───────────────────► [ 1. Immediate Convenience ] ───────────────────┐
   │                     (AI solves the problem fast)                    │
   │                                                                     ▼
[ 5. Deeper Reliance ]                                     [ 2. Repeated Offloading ]
(Defaulting to AI even                                     (Skipping the mental struggle
 for basic judgements)                                      and verification step)
   ▲                                                                     │
   │                                                                     ▼
   └────────── [ 4. Reduced Self-Confidence ] ◄─── [ 3. Less Independent Practice ]
               (Doubting own ability to solve       (Underlying skill atrophies
                problems without a prompt)           from lack of deliberate use)
```

*(Note: This diagram illustrates a potential behavioural feedback loop when verification is bypassed, not an inevitable outcome of using AI.)*

Look at that cycle honestly. None of us wake up intending to become less capable. It happens in tiny, rational increments—five minutes saved before a deadline here, a skipped proof there—until one day the internet goes down or a problem falls slightly outside the model's training distribution, and we realise our own problem-solving muscles feel uncomfortably rusty.

So here is the question worth asking ourselves every week:

> **If AI makes our work easier every day, are we becoming better at our work—or are we simply becoming better at asking AI to do it?**

---

## 07. So, should AI replace us?

None of this is a romantic plea to do everything by hand.

Some tasks *should* be automated. There is no noble virtue in manually formatting five hundred rows of a CSV file, transcribing meeting audio word by word, or hunting for a missing semicolon for three hours when a tool can surface it in a second. Forcing humans to act like slow, error-prone scripts is a waste of human life.

Even [Alan Turing (1950)](https://doi.org/10.1093/mind/LIX.236.433), in his foundational paper *Computing Machinery and Intelligence*, recognized that machines would steadily take over formal, rule-bound operations once thought to require human clerks—which is why the word *computer* itself shifted from a job description for a person doing arithmetic to the machine on your desk.

The mistake isn't automating repetitive execution. The mistake is confusing repetitive execution with the deeper human responsibilities that surround any meaningful work:

- **Understanding context** that never made it into the prompt window.
- **Setting goals** and deciding which problems are actually worth solving.
- **Making value judgements** when efficiency conflicts with fairness, safety, or ethics.
- **Taking responsibility**—because an AI model cannot be held accountable when a bridge fails, a diagnosis is missed, or a production database is wiped.
- **Evaluating outcomes** with genuine scepticism rather than rubber-stamping plausible output.

The goal of technology is not to keep humans artificially busy in every mechanical operation. The goal of technology is to make humans more capable, more perceptive, and more responsible for what they build.

---

## 08. One last thought

Let's come back to the humble pocket calculator one last time.

When calculators became ubiquitous, they took away the need to spend afternoons multiplying four-digit decimals by hand. They did *not* take away the need to understand what multiplication means, how compound interest behaves, or why an equation models reality. In fact, by making calculation cheap, they raised the bar for mathematical thinking.

Generative AI is far stranger, more fluent, and more unpredictable than a calculator will ever be. It can draft, summarise, code, and converse. Because it speaks our language so convincingly, it constantly tempts us to hand over the steering wheel instead of using it as an engine.

Whether AI becomes a crutch that dulls our thinking or a lever that expands our reach isn't written into the weights of the model. It is decided in the quiet moment right after the response finishes streaming on your screen—in whether you hit `Ctrl+C` and move on, or lean forward, question how it works, verify the logic, and build something you couldn't have built alone.

Perhaps the real achievement of AI won't be that it can do everything we once did. Perhaps it will be that we can finally spend more time doing things we couldn't do before.

Which leaves me with one question I'd love to hear your thoughts on:

**Are we building AI to make ourselves unnecessary, or to discover what we're capable of becoming with a little help?**

---

### Author's Note

*I'm an engineering student fascinated by how artificial intelligence, software, and human cognition intersect. **AFTERTHOUGHTS.** is my personal notebook for exploring the questions behind the technology we build and use every day—not as a lecture or an academic paper, just one thought explored properly at a time.*

---

### References & Further Reading

1. **Bush, V. (1945).** *As We May Think.* The Atlantic Monthly, 176(1), 101–108. [Read at The Atlantic](https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/)
2. **Turing, A. M. (1950).** *Computing Machinery and Intelligence.* Mind, LIX(236), 433–460. [DOI: 10.1093/mind/LIX.236.433](https://doi.org/10.1093/mind/LIX.236.433)
3. **Licklider, J. C. R. (1960).** *Man-Computer Symbiosis.* IRE Transactions on Human Factors in Electronics, HFE-1, 4–11. [DOI: 10.1109/THFE2.1960.4503259](https://doi.org/10.1109/THFE2.1960.4503259)
4. **Engelbart, D. C. (1962).** *Augmenting Human Intellect: A Conceptual Framework.* SRI Summary Report AFOSR-3223. [Read at Doug Engelbart Institute](https://www.dougengelbart.org/pubs/augment-3906.html)
5. **Parasuraman, R., & Manzey, D. H. (2010).** *Complacency and Bias in Human Use of Automation: An Attentive Integration.* Human Factors, 52(3), 381–410. [DOI: 10.1177/0018720810376055](https://doi.org/10.1177/0018720810376055)
6. **Sparrow, B., Liu, J., & Wegner, D. M. (2011).** *Google Effects on Memory: Cognitive Consequences of Having Information at Our Fingertips.* Science, 333(6043), 776–778. [DOI: 10.1126/science.1207745](https://doi.org/10.1126/science.1207745)
7. **Kahneman, D. (2011).** *Thinking, Fast and Slow.* Farrar, Straus and Giroux. [Publisher Overview](https://us.macmillan.com/books/9780374533557/thinkingfastandslow)
8. **Risko, E. F., & Gilbert, S. J. (2016).** *Cognitive Offloading.* Trends in Cognitive Sciences, 20(9), 676–688. [DOI: 10.1016/j.tics.2016.07.002](https://doi.org/10.1016/j.tics.2016.07.002)
9. **Ji, Z., Lee, N., Frieske, R., et al. (2023).** *Survey of Hallucination in Natural Language Generation.* ACM Computing Surveys, 55(12), 1–38. [DOI: 10.1145/3571730](https://doi.org/10.1145/3571730)
10. **Peng, S., Kalliamvakou, E., Cihon, P., & Demirer, M. (2023).** *The Impact of AI on Developer Productivity: Evidence from GitHub Copilot.* arXiv preprint arXiv:2302.06590. [arXiv:2302.06590](https://arxiv.org/abs/2302.06590)
11. **Brynjolfsson, E., Li, D., & Raymond, L. R. (2023).** *Generative AI at Work.* NBER Working Paper No. 31161 (Subsequently published in The Quarterly Journal of Economics, 2025). [DOI: 10.3386/w31161](https://doi.org/10.3386/w31161)
12. **Dell'Acqua, F., McFowland, E., Mollick, E. R., et al. (2023).** *Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of AI on Knowledge Worker Productivity and Quality.* Harvard Business School Technology & Operations Mgt. Unit Working Paper No. 24-013. [HBS Working Paper](https://www.hbs.edu/faculty/Pages/item.aspx?num=64700)
13. **Lee, H.-P., Sarkar, A., Tankelevitch, L., et al. (2025).** *The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort and Confidence Effects From a Survey of Knowledge Workers.* Proceedings of the CHI Conference on Human Factors in Computing Systems. [Microsoft Research](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/)

---

`#Afterthoughts` `#ArtificialIntelligence` `#HumanAICollaboration` `#IntelligenceAugmentation` `#SoftwareEngineering` `#CognitiveScience` `#FutureOfWork` `#TechEditorial`
