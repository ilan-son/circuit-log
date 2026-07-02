const grid = document.getElementById('logGrid');
const emptyState = document.getElementById('emptyState');
const filterCount = document.getElementById('filterCount');
const difficultyBar = document.getElementById('difficultyBar');
const disciplineBar = document.getElementById('disciplineBar');

let activeDifficulty = 'all';
let activeDiscipline = 'all';

function cardHTML(exp){
  return `
  <a class="log-card difficulty-${exp.difficulty}" href="experiment.html?id=${exp.number}">
    <div class="log-head">
      <div>
        <div class="log-no">Log No. ${exp.number} · ${disciplineLabels[exp.discipline] || exp.discipline}</div>
        <div class="log-title">${exp.title}</div>
      </div>
      <span class="badge badge-${exp.difficulty}">${exp.difficulty}</span>
    </div>
    <div class="log-body">
      <p class="desc">${exp.description}</p>
      <div class="meta-row">
        <span>⏱ ${exp.duration}</span>
        <span>🎬 ${exp.filmed}</span>
      </div>
      <div class="materials">
        <div class="materials-label">Materials</div>
        <ul>${exp.materials.map(m => `<li>${m}</li>`).join('')}</ul>
      </div>
      ${exp.safety ? `<div class="safety-note">⚠ ${exp.safety}</div>` : ''}
      <div class="card-cta">Watch the full experiment <span class="arrow">→</span></div>
    </div>
  </a>`;
}

function render(){
  const filtered = experiments.filter(exp =>
    (activeDifficulty === 'all' || exp.difficulty === activeDifficulty) &&
    (activeDiscipline === 'all' || exp.discipline === activeDiscipline)
  );

  grid.innerHTML = filtered.map(cardHTML).join('');
  emptyState.hidden = filtered.length > 0;
  grid.hidden = filtered.length === 0;

  const parts = [];
  parts.push(activeDifficulty === 'all' ? 'All difficulties' : activeDifficulty[0].toUpperCase() + activeDifficulty.slice(1));
  parts.push(activeDiscipline === 'all' ? 'all fields' : disciplineLabels[activeDiscipline]);
  filterCount.textContent = `Showing ${filtered.length} of ${experiments.length} experiments — ${parts.join(', ')}`;
}

difficultyBar.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if(!btn) return;
  difficultyBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeDifficulty = btn.dataset.difficulty;
  render();
});

disciplineBar.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if(!btn) return;
  disciplineBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeDiscipline = btn.dataset.discipline;
  render();
});

render();

// mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));
