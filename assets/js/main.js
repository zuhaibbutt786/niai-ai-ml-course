// Reading progress bar
window.addEventListener("scroll", () => {
  const fill = document.querySelector(".progress-fill");
  if (!fill) return;
  const h = document.documentElement;
  const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  fill.style.width = scrolled + "%";
});

// MCQ self-check
document.addEventListener("click", (e) => {
  const opt = e.target.closest(".mcq-opt");
  if (!opt) return;
  const block = opt.closest(".mcq");
  block.querySelectorAll(".mcq-opt").forEach((o) => o.classList.remove("correct", "wrong"));
  if (opt.dataset.correct === "true") {
    opt.classList.add("correct");
  } else {
    opt.classList.add("wrong");
    const correctEl = block.querySelector('[data-correct="true"]');
    if (correctEl) correctEl.classList.add("correct");
  }
});

// Slide Mode
(function () {
  let slides = [];
  let current = 0;

  function buildControls() {
    if (document.querySelector(".slide-controls")) return;
    const controls = document.createElement("div");
    controls.className = "slide-controls";
    controls.innerHTML =
      '<button class="slide-prev" aria-label="Previous">&larr; Prev</button>' +
      '<span class="slide-pos"></span>' +
      '<button class="slide-next" aria-label="Next">Next &rarr;</button>';
    document.body.appendChild(controls);

    const exitBtn = document.createElement("button");
    exitBtn.className = "slide-exit";
    exitBtn.textContent = "✕ Exit Slides";
    document.body.appendChild(exitBtn);

    controls.querySelector(".slide-prev").addEventListener("click", () => goTo(current - 1));
    controls.querySelector(".slide-next").addEventListener("click", () => goTo(current + 1));
    exitBtn.addEventListener("click", exitSlideMode);
  }

  function goTo(i) {
    if (!slides.length) return;
    slides[current].classList.remove("active-slide");
    current = Math.max(0, Math.min(slides.length - 1, i));
    slides[current].classList.add("active-slide");
    const pos = document.querySelector(".slide-pos");
    if (pos) pos.textContent = current + 1 + " / " + slides.length;
    document.querySelector(".day-section.active-slide")?.scrollTo(0, 0);
  }

  function enterSlideMode() {
    slides = Array.from(document.querySelectorAll("main.wrap > section.day-section"));
    if (!slides.length) return;
    document.body.classList.add("slide-mode");
    buildControls();
    current = 0;
    slides.forEach((s) => s.classList.remove("active-slide"));
    slides[0].classList.add("active-slide");
    const pos = document.querySelector(".slide-pos");
    if (pos) pos.textContent = "1 / " + slides.length;
  }

  function exitSlideMode() {
    document.body.classList.remove("slide-mode");
  }

  document.addEventListener("click", (e) => {
    if (e.target.id === "slideModeToggle") {
      if (document.body.classList.contains("slide-mode")) exitSlideMode();
      else enterSlideMode();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!document.body.classList.contains("slide-mode")) return;
    if (e.key === "ArrowRight" || e.key === "PageDown") goTo(current + 1);
    if (e.key === "ArrowLeft" || e.key === "PageUp") goTo(current - 1);
    if (e.key === "Escape") exitSlideMode();
  });
})();
