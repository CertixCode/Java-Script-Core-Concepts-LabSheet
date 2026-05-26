function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatOutput(value) {
  if (value && typeof value === "object") {
    return JSON.stringify(value, null, 2);
  }

  return String(value);
}

function createQuestionCard(question, index) {
  const output = question.output();

  return `
		<article id="${question.id}" class="question-card rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5 shadow-glow backdrop-blur-xl sm:p-6">
			<div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
				<div class="max-w-3xl">
					<div class="flex flex-wrap items-center gap-3">
						<span class="question-pill">Question ${index + 1}</span>
						<h3 class="text-2xl font-bold text-white">${escapeHtml(question.title)}</h3>
					</div>
					<p class="mt-3 text-base leading-7 text-slate-300">${escapeHtml(question.question)}</p>
					<p class="mt-2 text-sm leading-6 text-cyan-100/80">${escapeHtml(question.explanation)}</p>
				</div>
				<div class="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
					<div class="font-semibold uppercase tracking-[0.18em] text-cyan-200/80">Live output</div>
					<div class="mt-1 font-mono text-xs text-cyan-50/80">${escapeHtml(output.label)}</div>
				</div>
			</div>

			<div class="mt-5 grid gap-4 xl:grid-cols-2">
				<section>
					<div class="section-heading">Answer Code</div>
					<pre class="code-block mt-3"><code>${escapeHtml(question.code)}</code></pre>
				</section>

				<section>
					<div class="section-heading">Output</div>
					<div class="output-panel mt-3">
						<div class="output-label">Result</div>
						<pre class="output-text">${escapeHtml(formatOutput(output.value))}</pre>
					</div>
				</section>
			</div>
		</article>
	`;
}

function createNavItem(question, index) {
  return `
		<a href="#${question.id}" class="nav-item group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white">
			<span class="flex items-center gap-3">
				<span class="nav-index">${String(index + 1).padStart(2, "0")}</span>
        <span>
          <span class="block text-[0.68rem] uppercase tracking-[0.18em] text-cyan-200/70">${escapeHtml(
            question.section,
          )}</span>
          <span class="block text-sm font-medium text-slate-100">${escapeHtml(question.title)}</span>
        </span>
			</span>
			<span class="text-slate-400 transition group-hover:text-cyan-200">↗</span>
		</a>
	`;
}

function groupQuestionsBySection(questions) {
  const sections = [];

  for (const question of questions) {
    const existingSection = sections.find(
      (section) => section.name === question.section,
    );

    if (existingSection) {
      existingSection.questions.push(question);
    } else {
      sections.push({
        name: question.section,
        questions: [question],
      });
    }
  }

  return sections;
}

function createSectionBlock(section, sectionIndex, startQuestionIndex) {
  const cards = section.questions
    .map((question, index) =>
      createQuestionCard(question, startQuestionIndex + index),
    )
    .join("");

  return `
    <section class="section-block space-y-5" data-section="${escapeHtml(section.name)}">
      <div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur-xl">
        <div class="flex items-center justify-between gap-4">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/80">Section ${sectionIndex + 1}</p>
            <h3 class="mt-1 text-2xl font-bold text-white">${escapeHtml(section.name)}</h3>
          </div>
          <span class="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">${section.questions.length} questions</span>
        </div>
      </div>

      <div class="space-y-5">${cards}</div>
    </section>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const questions = window.labSheetData ?? [];
  const questionBoard = document.getElementById("questionBoard");
  const questionNav = document.getElementById("questionNav");

  if (!questionBoard || !questionNav) {
    return;
  }

  const sections = groupQuestionsBySection(questions);

  questionBoard.innerHTML = sections
    .map((section, sectionIndex) => {
      const startQuestionIndex = sections
        .slice(0, sectionIndex)
        .reduce(
          (count, currentSection) => count + currentSection.questions.length,
          0,
        );

      return createSectionBlock(section, sectionIndex, startQuestionIndex);
    })
    .join("");
  questionNav.innerHTML = questions
    .map((question, index) => createNavItem(question, index))
    .join("");

  const questionCount = document.getElementById("questionCount");
  const functionCount = document.getElementById("functionCount");
  const outputCount = document.getElementById("outputCount");

  if (questionCount) {
    questionCount.textContent = String(questions.length);
  }

  if (functionCount) {
    functionCount.textContent = String(questions.length);
  }

  if (outputCount) {
    outputCount.textContent = String(questions.length);
  }
});
