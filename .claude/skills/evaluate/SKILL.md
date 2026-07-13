---
name: evaluate
description: Get an unbiased, critical evaluation of written copy or narrative — score it, compare drafts blindly, and flag overstated or indefensible claims. Use when the user wants honest feedback on writing (portfolio project descriptions, taglines, positioning, marketing copy), wants to choose between versions, or wants to check that claims would survive a skeptical reader. Spawns a fresh, independent evaluator so the verdict isn't anchored to this conversation.
---

# Evaluate

Produce an honest, critical evaluation of one or more pieces of writing. The output is a clear verdict, a scored breakdown, specific strengths/weaknesses, a hard look at whether the claims are defensible, and concrete line-level fixes.

The value of this skill is **independence**. The evaluation must be done by a fresh subagent that does not know which draft is the current one, which is "new," or who wrote any of it. Do not evaluate the copy yourself in the main thread — anchoring is exactly what this skill exists to avoid.

## Steps

### 1. Gather the candidates
- Pull the content to evaluate from the skill arguments, a referenced file, or the recent conversation (e.g. "evaluate the two PhoneBelt write-ups").
- If there is one piece, this is a single-piece evaluation (keep / revise / cut). If there are two or more, it's a blind comparison.

### 2. Gather the context that changes the judgment
You need: the **audience**, the **goal**, the **medium**, and any **length budget**. For a portfolio that's usually: "recruiters/founders skimming a personal portfolio in under a minute; goal is to look like a strong product thinker." If this context isn't established and it would materially change the evaluation, ask the user one or two quick questions before spawning the agent. Otherwise infer it and state your assumption.

### 3. Neutralize bias before handing off
- Relabel the candidates neutrally: **Version A, Version B, …**. Randomize or vary the order; do not put the "current" or "preferred" one first by default.
- **Strip every authorship and status cue.** The evaluator must not be told which version is live, which is proposed/new, or who authored either. Remove framing words like "current," "my rewrite," "improved," "draft 2."
- Paste the **full text** of each candidate into the agent prompt — subagents share none of this conversation's context, so the prompt must be self-contained.

### 4. Spawn the independent evaluator
Use the Agent tool (`subagent_type: claude`) with a self-contained prompt containing: the context from step 2, the full neutralized candidates from step 3, and the rubric below. Instruct it to be direct and critical, to flatter nothing, and that its final message is the entire deliverable.

If the candidates make factual or quantitative claims and accuracy matters, give the evaluator web tools and tell it to sanity-check the most load-bearing claims rather than assume them.

### 5. Relay and offer to act
Relay the evaluation faithfully (it ran in a subagent; the user can't see it). Lead with the verdict. Then offer to apply the recommended changes to the source.

## The rubric to give the evaluator

Ask for, in this order:

1. **Verdict up front** — which version is stronger for this audience and goal (or, for a single piece, keep / revise / cut), and a confidence level. A valid conclusion is "merge them," "neither is ideal," or "the shorter one despite less detail."
2. **Scored comparison, 1–10 each, with a one-line justification per score.** Default dimensions (rename/adapt to the content type):
   - Hook / first 5 seconds
   - Clarity of the message
   - Credibility & specificity
   - Demonstrates the intended quality (e.g. product thinking, taste, rigor — name it for the context)
   - Concision / skimmability
   - Memorability / differentiation
3. **2–3 biggest strengths and 2–3 biggest weaknesses of EACH candidate**, specifically (quote the lines).
4. **Factual & credibility risks** — any claim that sounds off, any number that invites skepticism, anything overstated, unsourced, or rhetorically slippery that a sharp reader could attack. Call out the single most attackable line. This section is mandatory even when the writing is strong.
5. **Concrete recommendations** — pick / merge / cut, with the **exact lines to change** quoted and suggested replacements. If two drafts each have an asset the other lacks, say what to port.

Tone: direct, critical, no hedging, no flattery. The final message must be self-contained and well-organized.

## Notes
- This skill lives in this project. To use it across all your projects, move `.claude/skills/evaluate/` to `~/.claude/skills/evaluate/`.
- For pure factual verification (not editorial quality), use deep research instead — this skill checks claim *defensibility* as one dimension, not exhaustive fact-finding.
