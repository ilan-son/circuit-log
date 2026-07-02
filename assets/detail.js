const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const exp = experiments.find(e => e.number === id);
const root = document.getElementById('detailRoot');

// mobile nav toggle (shared across pages)
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if(navToggle && navLinks){
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}

if(!exp){
  root.innerHTML = `
    <section class="detail-section">
      <div class="wrap" style="text-align:center;">
        <div class="detail-section-label" style="justify-content:center;">Not found</div>
        <h2>This experiment doesn't exist yet</h2>
        <p class="detail-lead-text" style="margin:0 auto 28px;">The link may be out of date, or the experiment hasn't been published.</p>
        <a href="index.html#experiments" class="btn btn-outline-navy">← Back to all experiments</a>
      </div>
    </section>`;
  document.title = "Not found — The Circuit Log";
} else {
  document.title = `${exp.title} — The Circuit Log`;
  renderDetail(exp);
}

function videoBlock(exp){
  if(exp.videoId){
    return `<iframe src="https://www.youtube.com/embed/${exp.videoId}" title="${exp.title}" loading="lazy" allowfullscreen></iframe>`;
  }
  return `<div class="detail-video-placeholder">VIDEO COMING SOON<br>The full YouTube tutorial will play here</div>`;
}

function hotspotImageHTML(lm){
  const img = lm.image
    ? `<img src="${lm.image}" alt="Annotated photo of the experiment setup">`
    : `<div class="hotspot-placeholder">ADD A PHOTO OF YOUR SETUP HERE<br>Numbered points below will sit on top of it</div>`;
  const dots = lm.hotspots.map((h, i) => `<button type="button" class="hotspot" style="left:${h.x}%; top:${h.y}%;" data-hotspot="${i}" aria-label="${h.title}">${i + 1}</button>`).join('');
  return `<div class="hotspot-image-wrap">${img}${dots}</div>`;
}

function hotspotListHTML(lm){
  return `<div class="hotspot-list">${lm.hotspots.map((h, i) =>
    `<button type="button" class="hotspot-list-item" data-hotspot="${i}"><span class="num">${i + 1}</span>${h.title}</button>`
  ).join('')}</div>`;
}

function safetyDetailHTML(lm){
  const col = (title, items, cls) => `
      <div class="safety-col ${cls || ''}">
        <h5>${title}</h5>
        <ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>`;
  return `<div class="safety-columns">
      ${col('Before you start', lm.precautions)}
      ${col('Possible risks', lm.dangers)}
      ${col('If something goes wrong', lm.emergency, 'emergency')}
    </div>`;
}

function sourcingTableHTML(lm){
  const rows = lm.sourcing.map(s => `<tr><td>${s.item}</td><td>${s.where}</td></tr>`).join('');
  return `<table class="sourcing-table">
      <thead><tr><th>Material</th><th>Where to find it</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function pagerHTML(exp){
  const idx = experiments.findIndex(e => e.number === exp.number);
  const prev = experiments[idx - 1];
  const next = experiments[idx + 1];
  const prevLink = prev
    ? `<a class="pager-link prev" href="experiment.html?id=${prev.number}"><div class="pager-dir">← Previous</div><div class="pager-title">${prev.title}</div></a>`
    : `<div></div>`;
  const nextLink = next
    ? `<a class="pager-link next" href="experiment.html?id=${next.number}"><div class="pager-dir">Next →</div><div class="pager-title">${next.title}</div></a>`
    : `<div></div>`;
  return `<div class="detail-pager">${prevLink}${nextLink}</div>`;
}

function renderDetail(exp){
  const lm = exp.learnMore;
  const difficultyLabel = exp.difficulty[0].toUpperCase() + exp.difficulty.slice(1);

  root.innerHTML = `
    <section class="detail-hero">
      <div class="wrap">
        <div class="detail-meta-badges">
          <span class="detail-badge detail-badge-${exp.difficulty}">${difficultyLabel}</span>
          <span class="detail-badge" style="color:#D6DED9;">${disciplineLabels[exp.discipline] || exp.discipline}</span>
          <span class="detail-badge" style="color:#D6DED9;">Log No. ${exp.number}</span>
        </div>
        <h1>${exp.title}</h1>
        <p class="lede">${exp.description}</p>
        <div class="detail-meta-row">
          <span>⏱ ${exp.duration}</span>
          <span>🎬 Filmed ${exp.filmed}</span>
        </div>
      </div>
    </section>

    <nav class="detail-jump-wrap" aria-label="Sections in this experiment">
      <div class="wrap" style="padding:0 28px;">
        <div class="detail-jump" style="padding:16px 0;">
          <a href="#watch">Watch</a>
          <a href="#science">The science</a>
          <a href="#safety">Safety</a>
          <a href="#materials">Materials</a>
        </div>
      </div>
    </nav>

    <section class="detail-section" id="watch">
      <div class="wrap">
        <div class="detail-section-label">Tutorial</div>
        <h2>Watch the full walkthrough</h2>
        <div class="detail-video-frame">${videoBlock(exp)}</div>
      </div>
    </section>

    <section class="detail-section alt" id="science">
      <div class="wrap">
        <div class="detail-section-label">Deep dive</div>
        <h2>What's actually happening</h2>
        <p class="detail-lead-text">${lm.analysisIntro}</p>
        <div class="detail-analysis-grid">
          <div>
            ${hotspotImageHTML(lm)}
          </div>
          <div>
            <div class="hotspot-detail-panel" id="hotspotDetail">
              <span class="hotspot-hint">Select a numbered point to see the science behind that part of the experiment.</span>
            </div>
            ${hotspotListHTML(lm)}
          </div>
        </div>
      </div>
    </section>

    <section class="detail-section" id="safety">
      <div class="wrap">
        <div class="detail-section-label">Read this first</div>
        <h2>Safety</h2>
        ${safetyDetailHTML(lm)}
      </div>
    </section>

    <section class="detail-section alt" id="materials">
      <div class="wrap">
        <div class="detail-section-label">What you'll need</div>
        <h2>Materials &amp; where to find them</h2>
        ${sourcingTableHTML(lm)}
      </div>
    </section>

    <section class="detail-section">
      <div class="wrap">
        ${pagerHTML(exp)}
        <div style="text-align:center; margin-top:32px;">
          <a href="index.html#experiments" class="btn btn-outline-navy">← Back to all experiments</a>
        </div>
      </div>
    </section>
  `;

  function selectHotspot(index){
    const hotspot = lm.hotspots[index];
    document.querySelectorAll('.hotspot').forEach(h => h.classList.toggle('selected', Number(h.dataset.hotspot) === index));
    document.querySelectorAll('.hotspot-list-item').forEach(h => h.classList.toggle('selected', Number(h.dataset.hotspot) === index));
    document.getElementById('hotspotDetail').innerHTML = `<strong>${hotspot.title}</strong><p>${hotspot.text}</p>`;
  }

  root.addEventListener('click', (e) => {
    const el = e.target.closest('.hotspot, .hotspot-list-item');
    if(el) selectHotspot(Number(el.dataset.hotspot));
  });
}
