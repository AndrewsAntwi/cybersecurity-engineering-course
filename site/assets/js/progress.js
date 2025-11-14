// key prefix to avoid collisions
const LMS_KEY = 'lms_progress_v1';

// list your module slugs (must match nav names or page identifiers)
const MODULES = [
  "foundations",
  "sec-env",
  "web-sec",
  "hardening",
  "cloud",
  "siem",
  "detection",
  "devsecops",
  "capstone"
];

// initialize storage if not present
function loadProgress() {
  const raw = localStorage.getItem(LMS_KEY);
  if (!raw) {
    const init = MODULES.reduce((acc, m) => (acc[m]=false, acc), {});
    localStorage.setItem(LMS_KEY, JSON.stringify(init));
    return init;
  }
  try { return JSON.parse(raw); } catch(e) { localStorage.removeItem(LMS_KEY); return loadProgress(); }
}

function saveProgress(obj) { localStorage.setItem(LMS_KEY, JSON.stringify(obj)); }

// Mark module complete (call from page)
function markComplete(moduleSlug) {
  const data = loadProgress();
  data[moduleSlug] = true;
  saveProgress(data);
  updateUI();
}

// Mark module incomplete
function markIncomplete(moduleSlug) {
  const data = loadProgress();
  data[moduleSlug] = false;
  saveProgress(data);
  updateUI();
}

// compute progress and update header
function updateUI(){
  const data = loadProgress();
  const completed = MODULES.filter(m => data[m]).length;
  const percent = Math.round((completed / MODULES.length) * 100);
  const fill = document.getElementById('lmsProgressFill');
  const text = document.getElementById('lmsProgressText');
  if(fill) fill.style.width = percent + '%';
  if(text) text.innerText = percent + '%';
  // optional: add a small badge in header
}

// call on page load
document.addEventListener('DOMContentLoaded', () => {
  updateUI();
  // optional: add mark-complete button behavior
  const mc = document.getElementById('markCompleteBtn');
  if(mc) mc.addEventListener('click', () => {
    const slug = mc.getAttribute('data-module');
    markComplete(slug);
    mc.innerText = 'Completed ✓';
    mc.classList.add('badge');
  });
});
