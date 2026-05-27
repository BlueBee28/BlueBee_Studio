// ============================================================
// Constants
// ============================================================
const BOOK_SIZES = [
  {value:'A7',label:'A7'},{value:'A6',label:'A6'},{value:'A5',label:'A5'},
  {value:'A4',label:'A4'},{value:'A3',label:'A3'},{value:'B5',label:'B5'},
  {value:'B4',label:'B4'},{value:'F4',label:'F4'},{value:'Novel',label:'Novel'},
  {value:'Custom',label:'Custom'}
];
const BOOK_SIZE_MAP = {A7:{w:74,h:105},A6:{w:105,h:148},A5:{w:148,h:210},A4:{w:210,h:297},A3:{w:297,h:420},B5:{w:176,h:250},B4:{w:250,h:353},F4:{w:210,h:330},Novel:{w:130,h:190}};

// PAPER_ISI_MAP = single source of truth untuk data kertas (nama, tipe, gsm, ketebalan)
const PAPER_ISI_MAP = {
  hvs75:{name:'HVS 75gsm',type:'HVS',gsm:75,thickness:0.1},
  hvs80:{name:'HVS 80gsm',type:'HVS',gsm:80,thickness:0.11},
  hvs100:{name:'HVS 100gsm',type:'HVS',gsm:100,thickness:0.12},
  art120:{name:'Art Paper 120gsm',type:'Art Paper',gsm:120,thickness:0.13},
  art150:{name:'Art Paper 150gsm',type:'Art Paper',gsm:150,thickness:0.142},
  matte120:{name:'Matte Paper 120gsm',type:'Matte',gsm:120,thickness:0.13},
  matte150:{name:'Matte Paper 150gsm',type:'Matte',gsm:150,thickness:0.142},
  carton210:{name:'Art Carton 210gsm',type:'Carton',gsm:210,thickness:0.23},
  carton230:{name:'Art Carton 230gsm',type:'Carton',gsm:230,thickness:0.25},
  carton260:{name:'Art Carton 260gsm',type:'Carton',gsm:260,thickness:0.32},
  carton310:{name:'Art Carton 310gsm',type:'Carton',gsm:310,thickness:0.36},
  carton400:{name:'Art Carton 400gsm',type:'Carton',gsm:400,thickness:0.4},
  bookpaper80:{name:'Bookpaper 80gsm',type:'Bookpaper',gsm:80,thickness:0.14}
};
// Diturunkan dari PAPER_ISI_MAP (tidak duplikat)
const PAPER_ISI_OPTIONS = Object.entries(PAPER_ISI_MAP).map(([k,v])=>({value:k,label:v.name}));

const JILID_OPTIONS = [{value:'soft',label:'Soft Cover'},{value:'hard',label:'Hard Cover'},{value:'spiral',label:'Spiral Kawat'}];

const PRINT_PAPER_OPTIONS = [{value:'A4',label:'A4'},{value:'A3',label:'A3'},{value:'A3+',label:'A3+'},{value:'LongCarton',label:'Long Carton'},{value:'Custom',label:'Custom'}];
const PRINT_PAPER_MAP = {A4:{w:297,h:210},A3:{w:420,h:297},'A3+':{w:480,h:320},LongCarton:{w:640,h:320}};

const BLEED_OPTIONS = [{value:'0',label:'Tanpa Bleed'},{value:'2',label:'2mm'},{value:'3',label:'3mm'},{value:'5',label:'5mm'}];

const PAPER_CUT_MARGIN_OPTIONS = [{value:'0',label:'Tanpa Margin'},{value:'5',label:'5mm'},{value:'10',label:'10mm'},{value:'15',label:'15mm'},{value:'20',label:'20mm'}];

const HARDCOVER_EXTRA = 7;
const SAFE_ZONE = 5;
const SPIRAL_SIZES = [{number:5,maxSpine:5},{number:6,maxSpine:7},{number:7,maxSpine:8},{number:8,maxSpine:9},{number:9,maxSpine:11},{number:10,maxSpine:13},{number:12,maxSpine:16},{number:14,maxSpine:18},{number:16,maxSpine:21},{number:20,maxSpine:30}];
const SPIRAL_PITCH = 8.47;
const SPIRAL_HOLE_SIZE = 4;
const SPIRAL_MARGIN = 10;

const MAX_LEMBARAN = 9999;
const MAX_DIMENSION = 2000;

// ============================================================
// Premium SVG Icons
// ============================================================
// ============================================================
// New Tab Data Constants
// ============================================================
// Laminating options & pricing (per sisi — kalikan ×2 untuk cover depan+belakang)
const LAMINATING_OPTIONS = [{value:'none',label:'Tanpa Laminating'},{value:'glossy',label:'Glossy'},{value:'matte',label:'Matte'},{value:'softtouch',label:'Soft Touch'}];
const LAMINATING_PRICING = {none:0,glossy:15000,matte:18000,softtouch:25000}; // per m² per sisi (×2 untuk double-sided)
const SIGNATURE_OPTIONS = [{value:'4',label:'4 halaman (2 lembar)'},{value:'8',label:'8 halaman (4 lembar)'},{value:'16',label:'16 halaman (8 lembar)'},{value:'32',label:'32 halaman (16 lembar)'}];

// Paper Reference Database
const PAPER_REF_SIZES = [
  {name:'A0',w:841,h:1189,series:'A'},{name:'A1',w:594,h:841,series:'A'},{name:'A2',w:420,h:594,series:'A'},
  {name:'A3',w:297,h:420,series:'A'},{name:'A4',w:210,h:297,series:'A'},{name:'A5',w:148,h:210,series:'A'},
  {name:'A6',w:105,h:148,series:'A'},{name:'A7',w:74,h:105,series:'A'},{name:'A8',w:52,h:74,series:'A'},
  {name:'B0',w:1000,h:1414,series:'B'},{name:'B1',w:707,h:1000,series:'B'},{name:'B2',w:500,h:707,series:'B'},
  {name:'B3',w:353,h:500,series:'B'},{name:'B4',w:250,h:353,series:'B'},{name:'B5',w:176,h:250,series:'B'},
  {name:'B6',w:125,h:176,series:'B'},{name:'F4',w:210,h:330,series:'Lain'},{name:'Folio',w:216,h:330,series:'Lain'},
  {name:'Legal',w:216,h:356,series:'Lain'},{name:'Letter',w:216,h:279,series:'Lain'},{name:'Tabloid',w:279,h:432,series:'Lain'},
  {name:'Long Carton',w:320,h:640,series:'Lain'},{name:'A3+',w:320,h:480,series:'Lain'},
  {name:'Novel',w:130,h:190,series:'Lain'},
  // Seri R (Foto)
  {name:'2R',w:60,h:90,series:'R'},{name:'3R',w:89,h:127,series:'R'},{name:'4R',w:102,h:152,series:'R'},
  {name:'5R',w:127,h:178,series:'R'},{name:'6R',w:152,h:203,series:'R'},{name:'8R',w:203,h:254,series:'R'},
  {name:'10R',w:254,h:305,series:'R'},{name:'12R',w:305,h:381,series:'R'},{name:'14R',w:356,h:432,series:'R'},
  {name:'16R',w:406,h:508,series:'R'},{name:'20R',w:508,h:610,series:'R'},{name:'24R',w:610,h:762,series:'R'},
  {name:'30R',w:762,h:1016,series:'R'}
];
// Diturunkan dari PAPER_ISI_MAP (tidak duplikat)
const PAPER_REF_WEIGHTS = Object.values(PAPER_ISI_MAP).map(v=>({name:v.name,gsm:v.gsm,thickness:v.thickness,type:v.type}));

const ICONS = {
  book: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  portrait: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/></svg>',
  paper: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
  sheets: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>',
  binding: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="2" width="18" height="20" rx="2"/><line x1="9" y1="2" x2="9" y2="22"/></svg>',
  printPaper: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
  landscape: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/></svg>',
  bleed: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="4,3"/></svg>',
  margin: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="10" height="10" rx="1" stroke-dasharray="3,2"/></svg>',
  pcs: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="9" height="9" rx="1.5"/><rect x="13" y="2" width="9" height="9" rx="1.5"/><rect x="2" y="13" width="9" height="9" rx="1.5"/><rect x="13" y="13" width="9" height="9" rx="1.5"/></svg>',
  chacaRel: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M8 5V3"/><path d="M16 5V3"/><line x1="2" y1="10" x2="22" y2="10" stroke-dasharray="3,2"/></svg>',

};

// ============================================================
// Utility
// ============================================================
let renderTimeout = null;
function debouncedRender() { clearTimeout(renderTimeout); renderTimeout = setTimeout(renderAll, 300); }
function fmtNum(n) { return parseFloat(n.toFixed(2)).toString(); }
let currentUnit = 'mm';
function fmtMm(mm) {
  if (currentUnit === 'cm') return fmtNum(mm/10) + 'cm';
  if (currentUnit === 'inch') return fmtNum(mm/25.4) + 'in';
  return fmtNum(mm) + 'mm';
}
function fmtSecondaryUnit(mm) {
  if (currentUnit === 'inch') return fmtNum(mm/10) + 'cm';
  if (currentUnit === 'cm') return fmtNum(mm) + 'mm';
  return fmtNum(mm/10) + 'cm';
}
function fmtDim(mm) { return fmtMm(mm); }
function fmtDimWxH(w, h) { return fmtMm(w) + '×' + fmtMm(h); }
function unitLabel() { return currentUnit === 'inch' ? 'in' : currentUnit; }
function mmToDisplay(mm) {
  if (currentUnit === 'cm') return fmtNum(mm/10);
  if (currentUnit === 'inch') return fmtNum(mm/25.4);
  return fmtNum(mm);
}
function displayToMm(val) {
  if (currentUnit === 'cm') return val * 10;
  if (currentUnit === 'inch') return val * 25.4;
  return val;
}
function toggleUnit() {
  const units = ['mm','cm','inch'];
  const idx = units.indexOf(currentUnit);
  currentUnit = units[(idx+1) % units.length];
  const btns = document.querySelectorAll('.studio-dim-unit-btn');
  btns.forEach(btn => btn.textContent = currentUnit);
  // Update dimension inputs display values
  document.querySelectorAll('.studio-custom-dim').forEach(dim => {
    const inputs = dim.querySelectorAll('input[type="number"]');
    inputs.forEach(inp => {
      const raw = Number(inp.value);
      if (!isNaN(raw) && inp._mmValue !== undefined) {
        inp.value = mmToDisplay(inp._mmValue);
      }
    });
  });
  renderAll(true);
  showToast('Satuan: ' + currentUnit, 'info');
}
function formatWeight(g) { return g>=1000 ? {value:fmtNum(g/1000)+' kg',sub:g.toFixed(1)+' g'} : {value:g.toFixed(1)+' g',sub:fmtNum(g/1000)+' kg'}; }

// [Bug #21] Toast with max limit
const MAX_TOASTS = 3;
function showToast(msg, type='success') {
  const c = document.getElementById('toastContainer');
  // Limit toast count
  while (c.children.length >= MAX_TOASTS) { c.firstChild.remove(); }
  const t = document.createElement('div');
  t.className = 'studio-toast ' + type;
  t.setAttribute('role', 'alert');
  t.textContent = (type==='success'?'✓':type==='warning'?'⚠':'ℹ') + ' ' + msg;
  c.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(8px)'; t.style.transition = 'all 0.3s ease'; }, 2200);
  setTimeout(() => { if (t.parentNode) t.remove(); }, 2600);
}


function copyText(text, silent) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function() {
        if (!silent) showToast('Tersalin!', 'success');
      }).catch(function() { copyTextFallback(text, silent); });
    } else {
      copyTextFallback(text, silent);
    }
  } catch(e) {
    copyTextFallback(text, silent);
  }
}
function copyTextFallback(text, silent) {
  try {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    if (!silent) showToast('Tersalin!', 'success');
  } catch(e2) {
    showToast('Gagal menyalin teks', 'warning');
  }
}

// ============================================================
// State
// ============================================================
let activeTab = 'cover-layout';
let isDark = false;

const coverState = {
  bookSize:'A4', position:'Portrait', customW:210, customH:297,
  paperIsi:'hvs75', lembaran:200, jilid:'spiral',
  printPaper:'A3+', customPrintW:480, customPrintH:320, paperPosition:'Landscape', bleed:'0', margin:'0',
  coverIsi:'carton260'
};
let coverZoom = 0;
let coverSplitView = 'front'; // [Bug #9] Track which half is shown in split mode

const paperCutState = {
  customW:148, customH:210, position:'Portrait', chacaRel:false, jumlahPcs:200,
  printPaper:'A3+', customPrintW:480, customPrintH:320, paperPosition:'Landscape',
  bleed:'0', margin:'0'
};
let paperCutZoom = 0;
let coverExportInfo = [];   // info lines for export
let paperCutExportInfo = []; // info lines for export

// New tab states
const kalkulatorIsiState = {
  jumlahHalaman:20, bookSize:'A4', position:'Portrait', customW:210, customH:297,
  signatureSize:'4', paperIsi:'hvs75'
};
let referensiSearchFilter = '';
let referensiCompareA = 'A4';
let referensiCompareB = 'A3';

// Per-preview interaction state (persists across re-renders)
// zoom: CSS transform scale (1 = auto-fit, >1 = zoomed in)
// autoFitScale: the auto-fit scale factor from renderAll (used for zoom bar → CSS scale conversion)
const _previewState = {
  cover: { zoom: 1, panX: 0, panY: 0, isDragging: false, startX: 0, startY: 0, autoFitScale: 1 },
  papercut: { zoom: 1, panX: 0, panY: 0, isDragging: false, startX: 0, startY: 0, autoFitScale: 1 }
};

// ============================================================
// Tab Switching [A11y #3]
// ============================================================
function handleTabKeydown(e) {
  const tabs = Array.from(document.querySelectorAll('.studio-tab'));
  const idx = tabs.indexOf(e.currentTarget);
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault();
    const next = tabs[(idx + 1) % tabs.length];
    next.focus(); next.click();
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    const prev = tabs[(idx - 1 + tabs.length) % tabs.length];
    prev.focus(); prev.click();
  }
}

function switchTab(tab) {
  activeTab = tab;
  if (tab !== 'cover-layout') coverSplitView = 'front';
  document.querySelectorAll('.studio-tab').forEach(t => {
    const isActive = t.dataset.tab === tab;
    t.classList.toggle('active', isActive);
    t.setAttribute('aria-selected', isActive ? 'true' : 'false');
    t.setAttribute('tabindex', isActive ? '0' : '-1');
  });
  document.querySelectorAll('.studio-tab').forEach(tab => {
    tab.removeEventListener('keydown', handleTabKeydown);
    tab.addEventListener('keydown', handleTabKeydown);
  });
  // Show/hide all tab panels
  const allPanels = ['cover-layout-studio','paper-cut-studio','kalkulator-isi-studio','referensi-kertas-studio'];
  allPanels.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', id !== tab + '-studio');
  });

  // Update header based on active tab
  const tabInfo = {
    'cover-layout': {title:'Cover Layout', subtitle:'Hitung layout cetak cover buku', icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="7" height="18" rx="1.5"/><line x1="11" y1="3" x2="13" y2="3"/><line x1="11" y1="21" x2="13" y2="21"/><rect x="15" y="3" width="7" height="18" rx="1.5"/></svg>'},
    'paper-cut': {title:'Paper Cut', subtitle:'Hitung layout potong & imposisi halaman', icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="9" height="9" rx="1.5"/><rect x="13" y="2" width="9" height="9" rx="1.5"/><rect x="2" y="13" width="9" height="9" rx="1.5"/><rect x="13" y="13" width="9" height="9" rx="1.5"/></svg>'},
    'kalkulator-isi': {title:'Kalkulator Isi', subtitle:'Hitung jumlah tanda & lembar cetak isi buku', icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>'},
    'referensi-kertas': {title:'Referensi Kertas', subtitle:'Database ukuran & berat kertas', icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>'}
  };
  const info = tabInfo[tab] || tabInfo['cover-layout'];
  document.getElementById('headerTitle').textContent = info.title;
  document.getElementById('headerSubtitle').textContent = info.subtitle;
  document.title = info.title + ' — BlueBee Studio';
  document.getElementById('headerIcon').innerHTML = info.icon;

  renderAll();
}

function toggleTheme() {
  const btn = document.getElementById('themeBtn');
  const rect = btn.getBoundingClientRect();
  const ox = rect.left + rect.width / 2;
  const oy = rect.top + rect.height / 2;

  const willBeDark = !isDark;
  const pxX = (ox / window.innerWidth * 100).toFixed(2) + '%';
  const pxY = (oy / window.innerHeight * 100).toFixed(2) + '%';

  // Calculate max radius to cover viewport from button position
  const maxR = Math.sqrt(
    Math.pow(Math.max(ox, window.innerWidth - ox), 2) +
    Math.pow(Math.max(oy, window.innerHeight - oy), 2)
  );

  // Apply new theme immediately (hidden behind old theme overlay)
  isDark = willBeDark;
  document.documentElement.classList.toggle('dark', isDark);
  localStorage.setItem('studio-theme', isDark ? 'dark' : 'light');
  updateThemeIcon();
  // Re-render SVG previews immediately with updated theme colors
  renderAll();

  // Old theme overlay — clipped to circle that will shrink
  const bg = document.createElement('div');
  bg.className = 'studio-circle-bg';
  bg.style.clipPath = 'circle(' + maxR + 'px at ' + pxX + ' ' + pxY + ')';
  bg.style.background = willBeDark ? '#f0f2f8' : '#0a0e1a';
  document.body.appendChild(bg);

  // Glow ring at the boundary edge
  const ring = document.createElement('div');
  ring.className = 'studio-circle-ring';
  const initSize = maxR * 2;
  ring.style.width = initSize + 'px';
  ring.style.height = initSize + 'px';
  ring.style.left = ox + 'px';
  ring.style.top = oy + 'px';
  ring.style.transform = 'translate(-50%, -50%)';
  ring.style.opacity = '0';
  document.body.appendChild(ring);

  const duration = 400;
  const start = performance.now();

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animate(now) {
    const t = Math.min((now - start) / duration, 1);
    const ease = easeInOutCubic(t);

    // Shrink circle — old theme area gets smaller
    const radius = maxR * (1 - ease);
    bg.style.clipPath = 'circle(' + radius.toFixed(1) + 'px at ' + pxX + ' ' + pxY + ')';

    // Ring follows the shrinking edge
    const ringSize = radius * 2;
    ring.style.width = Math.max(0, ringSize).toFixed(1) + 'px';
    ring.style.height = Math.max(0, ringSize).toFixed(1) + 'px';

    // Ring opacity: quick fade in → hold → fade out at end
    if (t < 0.05) {
      ring.style.opacity = (t / 0.05).toFixed(3);
    } else if (t < 0.7) {
      ring.style.opacity = '1';
    } else {
      ring.style.opacity = (1 - (t - 0.7) / 0.3).toFixed(3);
    }

    if (t < 1) {
      requestAnimationFrame(animate);
    } else {
      bg.remove();
      ring.remove();
    }
  }

  requestAnimationFrame(animate);
}

function updateThemeIcon() {
  document.getElementById('themeBtn').innerHTML = isDark
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

// ============================================================
// Dropdown helper [A11y #1, #2]
// ============================================================
function closeAllDropdowns() { document.querySelectorAll('.studio-dropdown-menu').forEach(m => m.remove()); document.querySelectorAll('.studio-dropdown-arrow.open').forEach(a => a.classList.remove('open')); }
document.addEventListener('click', closeAllDropdowns);

// [A11y #2] Keyboard handler for dropdown menus
function handleDropdownKeydown(e, menu, trigger, options, value, onChange) {
  const items = menu.querySelectorAll('.studio-dropdown-item');
  if (!items.length) return;
  const focused = menu.querySelector('.studio-dropdown-item:focus');
  let idx = Array.from(items).indexOf(focused);

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    idx = idx < items.length - 1 ? idx + 1 : 0;
    items[idx].focus();
    trigger.setAttribute('aria-activedescendant', items[idx].id);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    idx = idx > 0 ? idx - 1 : items.length - 1;
    items[idx].focus();
    trigger.setAttribute('aria-activedescendant', items[idx].id);
  } else if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    if (focused) focused.click();
  } else if (e.key === 'Escape') {
    e.preventDefault();
    menu.remove();
    trigger.querySelector('.studio-dropdown-arrow').classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-activedescendant', '');
    trigger.focus();
  }
}

function createDropdown(containerId, label, options, value, onChange, iconSvg) {
  const container = document.getElementById(containerId);
  const group = document.createElement('div');
  group.className = 'studio-form-group';

  const triggerId = 'dd_' + Math.random().toString(36).substr(2,8);
  const lbl = document.createElement('label');
  lbl.className = 'studio-form-label';
  lbl.htmlFor = triggerId;
  if (iconSvg) { const span = document.createElement('span'); span.className = 'studio-form-icon'; span.innerHTML = iconSvg; lbl.appendChild(span); }
  lbl.appendChild(document.createTextNode(label));
  group.appendChild(lbl);

  const wrapper = document.createElement('div');
  wrapper.className = 'studio-dropdown-wrapper';

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.id = triggerId;
  trigger.className = 'studio-dropdown-trigger';
  // [A11y #1] ARIA attributes
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-activedescendant', '');
  const selected = options.find(o => o.value === value);
  trigger.innerHTML = `<span>${selected ? selected.label : 'Pilih...'}</span><svg class="studio-dropdown-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const existingMenu = wrapper.querySelector('.studio-dropdown-menu');
    if (existingMenu) {
      existingMenu.remove();
      trigger.querySelector('.studio-dropdown-arrow').classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
      return;
    }
    closeAllDropdowns();
    const menu = document.createElement('div');
    menu.className = 'studio-dropdown-menu';
    // [A11y #1] ARIA on menu
    menu.setAttribute('role', 'listbox');
    menu.setAttribute('aria-label', label);
    options.forEach((opt, i) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.id = triggerId + '_opt' + i;
      item.className = 'studio-dropdown-item' + (opt.value === value ? ' active' : '');
      item.textContent = opt.label;
      item.setAttribute('role', 'option');
      item.setAttribute('aria-selected', opt.value === value ? 'true' : 'false');
      if (i === 0) item.setAttribute('tabindex', '0'); else item.setAttribute('tabindex', '-1');
      item.addEventListener('click', (ev) => {
        ev.stopPropagation();
        onChange(opt.value);
        menu.remove();
        trigger.querySelector('.studio-dropdown-arrow').classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.setAttribute('aria-activedescendant', '');
        renderAll();
      });
      menu.appendChild(item);
    });
    wrapper.appendChild(menu);
    trigger.querySelector('.studio-dropdown-arrow').classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
    // Focus first item & update aria-activedescendant
    const firstItem = menu.querySelector('.studio-dropdown-item');
    if (firstItem) {
      firstItem.focus();
      trigger.setAttribute('aria-activedescendant', firstItem.id);
    }
    // [A11y #2] Keyboard navigation
    menu.addEventListener('keydown', (e) => handleDropdownKeydown(e, menu, trigger, options, value, onChange));
  });
  // [A11y #2] Open dropdown with keyboard
  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      trigger.click();
    }
  });

  wrapper.appendChild(trigger);
  group.appendChild(wrapper);
  container.appendChild(group);
}

// [Bug #8, #17] Input validation with min/max
function createNumberInput(containerId, label, value, onChange, min=0, iconSvg, max=undefined, step=1) {
  const container = document.getElementById(containerId);
  const group = document.createElement('div');
  group.className = 'studio-form-group';

  const inputId = 'num_' + Math.random().toString(36).substr(2,8);
  const lbl = document.createElement('label');
  lbl.className = 'studio-form-label';
  lbl.htmlFor = inputId;
  if (iconSvg) { const span = document.createElement('span'); span.className = 'studio-form-icon'; span.innerHTML = iconSvg; lbl.appendChild(span); }
  lbl.appendChild(document.createTextNode(label));
  group.appendChild(lbl);

  const spinner = document.createElement('div');
  spinner.className = 'studio-number-spinner';

  const minusBtn = document.createElement('button');
  minusBtn.className = 'studio-spinner-btn';
  minusBtn.type = 'button';
  minusBtn.textContent = '−';

  const input = document.createElement('input');
  input.id = inputId;
  input.type = 'number';
  input.className = 'studio-number-input';
  input.value = value;
  input.min = min;
  input.step = step;
  if (max !== undefined) input.max = max;

  const plusBtn = document.createElement('button');
  plusBtn.className = 'studio-spinner-btn';
  plusBtn.type = 'button';
  plusBtn.textContent = '+';

  const errorDiv = document.createElement('div');
  errorDiv.className = 'studio-input-error-msg';
  errorDiv.style.display = 'none';

  let isStepping = false; // flag to prevent duplicate applyValue from change event

  function applyValue() {
    if (isStepping) return; // spinner already handled the update
    let raw = Number(input.value);
    let invalid = false;
    let errorMsg = '';
    if (input.value.trim() === '' || isNaN(raw)) {
      invalid = true;
      errorMsg = 'Wajib diisi angka';
      raw = min;
    } else if (raw < min) {
      invalid = true;
      errorMsg = 'Minimum ' + min;
      raw = min;
    } else if (max !== undefined && raw > max) {
      invalid = true;
      errorMsg = 'Maximum ' + max;
      raw = max;
    }
    if (invalid) {
      input.classList.add('invalid');
      errorDiv.textContent = errorMsg;
      errorDiv.style.display = 'block';
    } else {
      input.classList.remove('invalid');
      errorDiv.style.display = 'none';
    }
    input.value = raw;
    onChange(raw);
    renderAll(true); // skip left panel to preserve spinner DOM
  }

  function stepDown() {
    let v = Number(input.value);
    if (isNaN(v)) v = min;
    v = Math.max(min, v - step);
    input.value = v;
    input.classList.remove('invalid');
    errorDiv.style.display = 'none';
    onChange(v);
    renderAll(true); // skip left panel to preserve spinner DOM
  }
  function stepUp() {
    let v = Number(input.value);
    if (isNaN(v)) v = min;
    v = v + step;
    if (max !== undefined) v = Math.min(max, v);
    input.value = v;
    input.classList.remove('invalid');
    errorDiv.style.display = 'none';
    onChange(v);
    renderAll(true); // skip left panel to preserve spinner DOM
  }

  // Long-press support for continuous increment/decrement
  function addLongPress(btnEl, actionFn) {
    let pressTimer = null;
    let pressInterval = null;
    const startPress = (e) => {
      e.preventDefault();
      isStepping = true;
      actionFn();
      pressTimer = setTimeout(() => {
        pressInterval = setInterval(actionFn, 80);
      }, 400);
    };
    const endPress = () => {
      clearTimeout(pressTimer);
      clearInterval(pressInterval);
      pressTimer = null;
      pressInterval = null;
      // Reset stepping flag after a short delay to allow change event to fire and be ignored
      setTimeout(() => { isStepping = false; }, 100);
    };
    btnEl.addEventListener('mousedown', startPress);
    btnEl.addEventListener('mouseup', endPress);
    btnEl.addEventListener('mouseleave', endPress);
    btnEl.addEventListener('touchstart', startPress, {passive: false});
    btnEl.addEventListener('touchend', endPress);
    btnEl.addEventListener('touchcancel', endPress);
  }

  addLongPress(minusBtn, stepDown);
  addLongPress(plusBtn, stepUp);

  // Only apply on Enter key or blur (change event)
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); applyValue(); input.blur(); }
  });
  input.addEventListener('change', applyValue);

  spinner.appendChild(minusBtn);
  spinner.appendChild(input);
  spinner.appendChild(plusBtn);
  group.appendChild(spinner);
  group.appendChild(errorDiv);
  container.appendChild(group);
}

// [Bug #8] Dimension input validation
function createDimensionInput(containerId, label, w, h, onChangeW, onChangeH, iconSvg) {
  const container = document.getElementById(containerId);
  const group = document.createElement('div');
  group.className = 'studio-form-group';

  if (label) {
    const lbl = document.createElement('label');
    lbl.className = 'studio-form-label';
    if (iconSvg) { const span = document.createElement('span'); span.className = 'studio-form-icon'; span.innerHTML = iconSvg; lbl.appendChild(span); }
    lbl.appendChild(document.createTextNode(label));
    group.appendChild(lbl);
  }

  const dim = document.createElement('div');
  dim.className = 'studio-custom-dim';

  function makeApply(inputEl, onChangeFn) {
    return function() {
      let raw = Number(inputEl.value);
      let invalid = false;
      let errorMsg = '';
      if (inputEl.value.trim() === '' || isNaN(raw)) {
        invalid = true; errorMsg = 'Wajib diisi angka'; raw = 1;
      } else if (raw < 1) {
        invalid = true; errorMsg = 'Minimum 1'; raw = 1;
      } else if (raw > MAX_DIMENSION) {
        invalid = true; errorMsg = 'Maximum ' + MAX_DIMENSION; raw = MAX_DIMENSION;
      }
      // Show/hide error on the dimension wrapper
      const dimWrapper = inputEl.closest('.studio-custom-dim');
      let errEl = dimWrapper ? dimWrapper.querySelector('.studio-input-error-msg') : null;
      if (invalid) {
        inputEl.classList.add('invalid');
        if (dimWrapper) dimWrapper.classList.add('invalid');
        if (!errEl) { errEl = document.createElement('div'); errEl.className = 'studio-input-error-msg'; dimWrapper.parentNode.insertBefore(errEl, dimWrapper.nextSibling); }
        errEl.textContent = errorMsg; errEl.style.display = 'block';
      } else {
        inputEl.classList.remove('invalid');
        if (dimWrapper) dimWrapper.classList.remove('invalid');
        if (errEl) errEl.style.display = 'none';
      }
      inputEl.value = raw;
      onChangeFn(raw);
      renderAll(true); // skip left panel to preserve input DOM
    };
  }

  const fieldW = document.createElement('div');
  fieldW.className = 'studio-custom-dim-field';
  const dimIdW = 'dimW_' + Math.random().toString(36).substr(2,6);
  const lblW = document.createElement('label');
  lblW.className = 'studio-form-label-sm';
  lblW.htmlFor = dimIdW;
  lblW.textContent = 'Lebar';
  const inputW = document.createElement('input');
  inputW.id = dimIdW;
  inputW.type = 'number'; inputW.className = 'studio-number-input sm'; inputW.value = mmToDisplay(w); inputW.min = 0.01; inputW.max = MAX_DIMENSION; inputW.step = 'any'; inputW._mmValue = w;
  const applyW = makeApply(inputW, (v) => { const mmVal = displayToMm(v); inputW._mmValue = mmVal; onChangeW(mmVal); });
  inputW.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); applyW(); inputW.blur(); } });
  inputW.addEventListener('change', applyW);
  fieldW.appendChild(lblW); fieldW.appendChild(inputW);

  const sep = document.createElement('span');
  sep.className = 'studio-dim-separator';
  sep.textContent = '×';

  const fieldH = document.createElement('div');
  fieldH.className = 'studio-custom-dim-field';
  const dimIdH = 'dimH_' + Math.random().toString(36).substr(2,6);
  const lblH = document.createElement('label');
  lblH.className = 'studio-form-label-sm';
  lblH.htmlFor = dimIdH;
  lblH.textContent = 'Tinggi';
  const inputH = document.createElement('input');
  inputH.id = dimIdH;
  inputH.type = 'number'; inputH.className = 'studio-number-input sm'; inputH.value = mmToDisplay(h); inputH.min = 0.01; inputH.max = MAX_DIMENSION; inputH.step = 'any'; inputH._mmValue = h;
  const applyH = makeApply(inputH, (v) => { const mmVal = displayToMm(v); inputH._mmValue = mmVal; onChangeH(mmVal); });
  inputH.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); applyH(); inputH.blur(); } });
  inputH.addEventListener('change', applyH);
  fieldH.appendChild(lblH); fieldH.appendChild(inputH);

  const unit = document.createElement('button');
  unit.type = 'button';
  unit.className = 'studio-dim-unit-btn';
  unit.title = 'Ganti satuan';
  unit.setAttribute('aria-label', 'Ganti satuan mm/cm/inch');
  unit.textContent = currentUnit;
  unit.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleUnit();
  });

  dim.appendChild(fieldW); dim.appendChild(sep); dim.appendChild(fieldH); dim.appendChild(unit);
  group.appendChild(dim);
  container.appendChild(group);
}

function createSectionTitle(containerId, text) {
  const container = document.getElementById(containerId);
  const div = document.createElement('div');
  div.className = 'studio-section-title';
  div.textContent = text;
  container.appendChild(div);
}

function createToggle(containerId, label, checked, onChange, iconSvg, hintText) {
  const container = document.getElementById(containerId);
  const group = document.createElement('div');
  group.className = 'studio-toggle-group';

  const cbId = 'toggle_' + Math.random().toString(36).substr(2,8);
  const lbl = document.createElement('label');
  lbl.className = 'studio-toggle-label';
  lbl.htmlFor = cbId;
  if (iconSvg) { const span = document.createElement('span'); span.className = 'studio-form-icon'; span.innerHTML = iconSvg; lbl.appendChild(span); }
  lbl.appendChild(document.createTextNode(label));
  group.appendChild(lbl);

  const row = document.createElement('div');
  row.className = 'studio-toggle-row';

  const text = document.createElement('span');
  text.className = 'studio-toggle-text' + (checked ? '' : ' off');
  text.textContent = checked ? 'ON' : 'OFF';
  row.appendChild(text);

  const switchWrap = document.createElement('label');
  switchWrap.className = 'studio-toggle-switch';
  switchWrap.style.cursor = 'pointer';

  const input = document.createElement('input');
  input.id = cbId;
  input.type = 'checkbox';
  input.checked = checked;
  input.setAttribute('role', 'switch');
  input.setAttribute('aria-checked', checked ? 'true' : 'false');

  const slider = document.createElement('span');
  slider.className = 'studio-toggle-slider';

  switchWrap.appendChild(input);
  switchWrap.appendChild(slider);
  row.appendChild(switchWrap);

  input.addEventListener('change', () => {
    const newVal = input.checked;
    text.textContent = newVal ? 'ON' : 'OFF';
    text.className = 'studio-toggle-text' + (newVal ? '' : ' off');
    input.setAttribute('aria-checked', newVal ? 'true' : 'false');
    onChange(newVal);
    renderAll();
  });

  group.appendChild(row);

  if (hintText) {
    const hint = document.createElement('div');
    hint.className = 'studio-toggle-hint';
    hint.textContent = hintText;
    group.appendChild(hint);
  }

  container.appendChild(group);
}

// ============================================================
// Cover Layout Calculations
// ============================================================
function getBookDim(s) {
  if (s.bookSize === 'Custom') return {w:s.customW, h:s.customH};
  const base = BOOK_SIZE_MAP[s.bookSize];
  if (!base) return {w:148,h:210};
  return s.position === 'Landscape' ? {w:base.h, h:base.w} : {w:base.w, h:base.h};
}

function getPrintPaperDim(s) {
  if (s.printPaper === 'Custom') return {w:s.customPrintW, h:s.customPrintH};
  const base = PRINT_PAPER_MAP[s.printPaper];
  if (!base) return {w:297,h:210};
  return s.paperPosition === 'Landscape' ? {w:base.w, h:base.h} : {w:base.h, h:base.w};
}

function calcSpineThickness(lembaran, paperIsi) {
  const info = PAPER_ISI_MAP[paperIsi];
  return info ? lembaran * info.thickness : 0;
}

function calcTotalBentang(w, jilid, spine) {
  const hc = jilid === 'hard' ? HARDCOVER_EXTRA : 0;
  return w + hc + spine + hc + w;
}

// [Bug #1] Fixed: removed *2 from isiW calculation
// [Bug #2] Fixed: use cover paper GSM from coverIsi state (e.g. Art Carton) instead of hardcoded 260
function calcWeight(lembaran, paperIsi, w, h, jilid, coverIsi) {
  const info = PAPER_ISI_MAP[paperIsi];
  if (!info) return 0;
  const isiW = (w*h*info.gsm*lembaran)/1000000;
  // Use cover paper GSM from state if available, otherwise fallback to 260gsm
  const coverInfo = coverIsi ? PAPER_ISI_MAP[coverIsi] : null;
  const coverGsm = coverInfo ? coverInfo.gsm : 260;
  const spine = calcSpineThickness(lembaran, paperIsi);
  const bentang = calcTotalBentang(w, jilid, spine);
  const coverW = (bentang*h*coverGsm)/1000000;
  return isiW + coverW;
}

// Spiral: returns {number, outOfRange}
function getSpiralInfo(spine) {
  for (const s of SPIRAL_SIZES) { if (spine <= s.maxSpine) return {number:s.number, outOfRange:false}; }
  return {number:null, outOfRange:true};
}
// [Bug #16] Guard for very small book heights
function getSpiralHoleCount(h) {
  const usable = h - 2*SPIRAL_MARGIN;
  if (usable <= 0) return 0;
  return Math.max(2, Math.floor(usable/SPIRAL_PITCH)+1);
}

function determineDisplayMode(totalBentang, h, ppW, ppH, jilid, bleed, margin) {
  const m = margin || 0;
  if (jilid === 'spiral') return 'spiral';
  if (totalBentang + bleed*2 <= ppW - m*2 && h + bleed*2 <= ppH - m*2) return 'full';
  return 'split';
}

// [Bug #18] Fixed tie-breaking logic
function autoCoverPaperPos(totalBentang, w, h, bleed, pp, jilid, margin) {
  const m = margin || 0;
  const hc = jilid === 'hard' ? HARDCOVER_EXTRA : 0;
  // 1) Check if full spread fits
  const fullW = totalBentang + bleed*2, fullH = h + bleed*2;
  const fitL_full = fullW <= pp.w - m*2 && fullH <= pp.h - m*2;
  const fitP_full = fullW <= pp.h - m*2 && fullH <= pp.w - m*2;
  if (fitL_full && !fitP_full) return 'Landscape';
  if (fitP_full && !fitL_full) return 'Portrait';
  if (fitL_full && fitP_full) {
    // Both fit — prefer orientation with more remaining area
    const remainL = (pp.w - m*2 - fullW) * (pp.h - m*2 - fullH);
    const remainP = (pp.h - m*2 - fullW) * (pp.w - m*2 - fullH);
    return remainL >= remainP ? 'Landscape' : 'Portrait';
  }
  // 2) Full spread doesn't fit — check split layout
  const spine = totalBentang - w*2 - hc*2;
  const splitW = w + spine + hc + bleed*2, splitH = h + bleed*2;
  const fitL_split = splitW <= pp.w - m*2 && splitH <= pp.h - m*2;
  const fitP_split = splitW <= pp.h - m*2 && splitH <= pp.w - m*2;
  if (fitL_split && !fitP_split) return 'Landscape';
  if (fitP_split && !fitL_split) return 'Portrait';
  if (fitL_split && fitP_split) {
    const remainL = (pp.w - m*2 - splitW) * (pp.h - m*2 - splitH);
    const remainP = (pp.h - m*2 - splitW) * (pp.w - m*2 - splitH);
    return remainL >= remainP ? 'Landscape' : 'Portrait';
  }
  // 3) Neither fits — default to Landscape
  return 'Landscape';
}

// ============================================================
// Paper Cut Calculations
// ============================================================
function getPageDim(s) {
  return s.position === 'Landscape' ? {w:s.customH, h:s.customW} : {w:s.customW, h:s.customH};
}

function getPaperCutPrintDim(s) {
  if (s.printPaper === 'Custom') return {w:s.customPrintW, h:s.customPrintH};
  const base = PRINT_PAPER_MAP[s.printPaper];
  if (!base) return {w:480,h:320};
  return s.paperPosition === 'Landscape' ? {w:base.w, h:base.h} : {w:base.h, h:base.w};
}

function getMarginValue(s) { return Number(s.margin)||0; }

function calcCutLayout(pageDim, ppDim, bleed, margin, totalPcs) {
  const pageW = pageDim.w + bleed*2, pageH = pageDim.h + bleed*2;
  const usableW = ppDim.w - margin*2, usableH = ppDim.h - margin*2;
  const cols = Math.max(0, Math.floor(usableW/pageW));
  const rows = Math.max(0, Math.floor(usableH/pageH));
  const totalPerPage = cols*rows;
  const totalSheets = totalPerPage > 0 ? Math.ceil(totalPcs/totalPerPage) : 0;
  const usedW = cols*pageW, usedH = rows*pageH;
  const offsetX = (ppDim.w - usedW)/2, offsetY = (ppDim.h - usedH)/2;
  const totalArea = ppDim.w*ppDim.h, usedArea = usedW*usedH;
  const wasteArea = Math.max(0, totalArea - usedArea);
  const utilization = totalArea > 0 ? (usedArea/totalArea)*100 : 0;
  return {cols,rows,totalPerPage,pageW,pageH,margin,bleed,totalSheets,wasteArea,totalArea,utilization,offsetX,offsetY};
}

function calcFitForOrientation(pageDim, ppBase, bleed, margin, orientation) {
  const ppW = orientation==='Landscape' ? ppBase.w : ppBase.h;
  const ppH = orientation==='Landscape' ? ppBase.h : ppBase.w;
  const pageW = pageDim.w + bleed*2, pageH = pageDim.h + bleed*2;
  const usableW = ppW - margin*2, usableH = ppH - margin*2;
  const cols = Math.max(0, Math.floor(usableW/pageW));
  const rows = Math.max(0, Math.floor(usableH/pageH));
  return cols*rows;
}

function autoPaperCutPos(pageDim, ppBase, bleed, margin) {
  const lF = calcFitForOrientation(pageDim, ppBase, bleed, margin, 'Landscape');
  const pF = calcFitForOrientation(pageDim, ppBase, bleed, margin, 'Portrait');
  return lF >= pF ? 'Landscape' : 'Portrait';
}

// ============================================================
// Render Cover Layout Studio
// ============================================================
let coverAlertShown = false;
let paperCutAlertShown = false;

// Helper: cleanup preview AbortController before re-render to prevent memory leak
function cleanupPreviewListeners() {
  ['coverPreviewBody','paperCutPreviewBody'].forEach(id => {
    const el = document.getElementById(id);
    if (el && el._abortCtrl) { el._abortCtrl.abort(); el._abortCtrl = null; }
  });
}

function renderCoverLayout(skipLeftPanel=false) {
  cleanupPreviewListeners();
  const s = coverState;
  const bookDim = getBookDim(s);
  const ppBase = s.printPaper === 'Custom' ? {w:s.customPrintW, h:s.customPrintH} : (PRINT_PAPER_MAP[s.printPaper]||{w:297,h:210});

  const spine = calcSpineThickness(s.lembaran, s.paperIsi);
  const totalBentang = calcTotalBentang(bookDim.w, s.jilid, spine);
  const bleed = Number(s.bleed);
  const margin = Number(s.margin)||0;
  const autoPos = autoCoverPaperPos(totalBentang, bookDim.w, bookDim.h, bleed, ppBase, s.jilid, margin);
  // [Bug #6] Auto-update position (dropdown is now labeled as Auto)
  if (s.paperPosition !== autoPos) { s.paperPosition = autoPos; }
  const ppDim = getPrintPaperDim(s);
  const displayMode = determineDisplayMode(totalBentang, bookDim.h, ppDim.w, ppDim.h, s.jilid, bleed, margin);
  // [Bug #1, #2] Fixed weight calculation — pass coverIsi for accurate cover GSM
  const weight = calcWeight(s.lembaran, s.paperIsi, bookDim.w, bookDim.h, s.jilid, s.coverIsi);
  const spiralInfo = getSpiralInfo(spine);
  const holeCount = getSpiralHoleCount(bookDim.h);
  const neededW = displayMode==='spiral' ? bookDim.w+bleed*2 : totalBentang+bleed*2;
  const neededH = bookDim.h+bleed*2;
  const fitsOnPaper = (neededW <= ppDim.w - margin*2) && (neededH <= ppDim.h - margin*2);

  // [Bug #13] Consistent formatting in toast
  if (!fitsOnPaper && !coverAlertShown) {
    coverAlertShown = true;
    showToast(`Ukuran buku (${fmtMm(neededW)} x ${fmtMm(neededH)}) melebihi Kertas Print ${s.printPaper} (${fmtMm(ppDim.w)} x ${fmtMm(ppDim.h)})!`, 'warning');
  }
  if (fitsOnPaper) { coverAlertShown = false; }

  // Left panel — only rebuild when structural changes happen (dropdowns, tab switch)
  if (!skipLeftPanel) {
    const left = document.getElementById('coverLeftPanel');
    left.innerHTML = '';

    createSectionTitle('coverLeftPanel', 'Ukuran & Posisi');
    createDropdown('coverLeftPanel', 'Ukuran Buku', BOOK_SIZES, s.bookSize, v=>{coverState.bookSize=v;}, ICONS.book);
    createDropdown('coverLeftPanel', 'Posisi Cover', [{value:'Portrait',label:'Portrait'},{value:'Landscape',label:'Landscape'}], s.position, v=>{coverState.position=v;}, ICONS.portrait);
    if (s.bookSize === 'Custom') {
      createDimensionInput('coverLeftPanel', '', s.customW, s.customH, v=>{coverState.customW=v;}, v=>{coverState.customH=v;});
    }

    createSectionTitle('coverLeftPanel', 'Kertas Isi & Jilid');
    createDropdown('coverLeftPanel', 'Kertas Isi', PAPER_ISI_OPTIONS, s.paperIsi, v=>{coverState.paperIsi=v;}, ICONS.paper);
    createNumberInput('coverLeftPanel', 'Jumlah Lembaran', s.lembaran, v=>{coverState.lembaran=v;}, 1, ICONS.sheets, MAX_LEMBARAN);
    createDropdown('coverLeftPanel', 'Jenis Jilid', JILID_OPTIONS, s.jilid, v=>{coverState.jilid=v;}, ICONS.binding);
    /* Kertas Cover dropdown removed — default carton260 used */

    createSectionTitle('coverLeftPanel', 'Kertas Print');
    createDropdown('coverLeftPanel', 'Kertas Print', PRINT_PAPER_OPTIONS, s.printPaper, v=>{coverState.printPaper=v;}, ICONS.printPaper);
    if (s.printPaper === 'Custom') {
      createDimensionInput('coverLeftPanel', '', s.customPrintW, s.customPrintH, v=>{coverState.customPrintW=v;}, v=>{coverState.customPrintH=v;});
    }
    createDropdown('coverLeftPanel', 'Posisi Kertas (Auto)', [{value:'Landscape',label:'Landscape'},{value:'Portrait',label:'Portrait'}], s.paperPosition, v=>{coverState.paperPosition=v;}, ICONS.landscape);
    createDropdown('coverLeftPanel', 'Bleed Area', BLEED_OPTIONS, s.bleed, v=>{coverState.bleed=v;}, ICONS.bleed);
    createDropdown('coverLeftPanel', 'Margin Kertas', PAPER_CUT_MARGIN_OPTIONS, s.margin, v=>{coverState.margin=v;}, ICONS.margin);
  }

  // Right panel
  const right = document.getElementById('coverRightPanel');
  right.innerHTML = '';

  // [Bug #4] Result cards conditional on displayMode
  let spiralCardHtml = '';
  if (s.jilid === 'spiral') {
    if (spiralInfo.outOfRange) {
      spiralCardHtml = `
      <div class="studio-result-card card-warning studio-result-card-anim">
        <div class="studio-result-card-top"><span class="studio-result-label">Spiral Number</span></div>
        <div class="studio-result-value" style="font-size:14px;">Di Luar Ukuran</div>
        <div class="studio-result-sub">Tebal punggung ${fmtMm(spine)} melebihi max ${fmtMm(SPIRAL_SIZES[SPIRAL_SIZES.length-1].maxSpine)}</div>
        <div class="studio-result-bar"></div>
      </div>`;
    } else {
      spiralCardHtml = `
      <div class="studio-result-card card-violet studio-result-card-anim">
        <div class="studio-result-card-top"><span class="studio-result-label">Spiral Number</span></div>
        <div class="studio-result-value">#${spiralInfo.number}</div>
        <div class="studio-result-sub">Max ${fmtMm(SPIRAL_SIZES.find(x=>x.number===spiralInfo.number)?.maxSpine||0)}</div>
        <div class="studio-result-bar"></div>
      </div>`;
    }
  }

  // [Bug #14] formatWeight called once
  const fw = formatWeight(weight);

  // Show appropriate cards based on displayMode
  const showBentangCards = (displayMode === 'full' || displayMode === 'split');

  let cardsHtml = '<div class="studio-result-cards">';
  cardsHtml += `<div class="studio-result-card card-blue studio-result-card-anim" onclick="copyText('${fmtMm(spine)}');">
    <div class="studio-result-card-top"><span class="studio-result-label">Tebal Punggung</span></div>
    <div class="studio-result-value">${fmtMm(spine)}</div>
    <div class="studio-result-sub">${fmtSecondaryUnit(spine)}</div>
    <div class="studio-result-bar"></div>
  </div>`;
  cardsHtml += spiralCardHtml;
  if (s.jilid === 'spiral') {
    cardsHtml += `<div class="studio-result-card card-rose studio-result-card-anim" onclick="copyText('${fmtMm(bookDim.w)} x ${fmtMm(bookDim.h)}');">
      <div class="studio-result-card-top"><span class="studio-result-label">Ukuran Cover</span></div>
      <div class="studio-result-value" style="font-size:18px">${fmtMm(bookDim.w)} x ${fmtMm(bookDim.h)}</div>
      <div class="studio-result-sub">Tanpa Bleed</div>
      <div class="studio-result-bar"></div>
    </div>`;
  }
  if (showBentangCards) {
    cardsHtml += `<div class="studio-result-card card-sky studio-result-card-anim" onclick="copyText('${fmtMm(totalBentang)}');">
      <div class="studio-result-card-top"><span class="studio-result-label">Total Bentang</span></div>
      <div class="studio-result-value">${fmtMm(totalBentang)}</div>
      <div class="studio-result-sub">${fmtSecondaryUnit(totalBentang)}</div>
      <div class="studio-result-bar"></div>
    </div>`;
  }
  cardsHtml += `<div class="studio-result-card card-amber studio-result-card-anim" onclick="copyText('${fw.value}');">
    <div class="studio-result-card-top"><span class="studio-result-label">Estimasi Berat</span></div>
    <div class="studio-result-value">${fw.value}</div>
    <div class="studio-result-sub">${fw.sub}</div>
    <div class="studio-result-bar"></div>
  </div>`;
  if (showBentangCards) {
    cardsHtml += `<div class="studio-result-card card-emerald studio-result-card-anim" onclick="copyText('${fmtMm(totalBentang+bleed*2)}');">
      <div class="studio-result-card-top"><span class="studio-result-label">Bentang + Bleed</span></div>
      <div class="studio-result-value">${fmtMm(totalBentang+bleed*2)}</div>
      <div class="studio-result-sub">${fmtSecondaryUnit(totalBentang+bleed*2)}</div>
      <div class="studio-result-bar"></div>
    </div>`;
  }
  // For spiral, show cover dimensions
  if (displayMode === 'spiral') {
    cardsHtml += `<div class="studio-result-card card-sky studio-result-card-anim" onclick="copyText('${fmtMm(bookDim.w+bleed*2)} x ${fmtMm(bookDim.h+bleed*2)}');">
      <div class="studio-result-card-top"><span class="studio-result-label">Ukuran Cetak</span></div>
      <div class="studio-result-value" style="font-size:18px">${fmtMm(bookDim.w+bleed*2)} x ${fmtMm(bookDim.h+bleed*2)}</div>
      <div class="studio-result-sub">Cover + Bleed</div>
      <div class="studio-result-bar"></div>
    </div>`;
  }
  cardsHtml += '</div>';
  right.innerHTML = cardsHtml;

  // Copy All button — Feature 4
  const coverCopyText = [];
  coverCopyText.push(`Tebal Punggung: ${fmtMm(spine)} (${fmtSecondaryUnit(spine)})`);
  if (showBentangCards) coverCopyText.push(`Total Bentang: ${fmtMm(totalBentang)} (${fmtSecondaryUnit(totalBentang)})`);
  coverCopyText.push(`Estimasi Berat: ${fw.value} (${fw.sub})`);
  if (showBentangCards) coverCopyText.push(`Bentang + Bleed: ${fmtMm(totalBentang+bleed*2)} (${fmtSecondaryUnit(totalBentang+bleed*2)})`);
  if (displayMode === 'spiral') coverCopyText.push(`Ukuran Cetak: ${fmtMm(bookDim.w+bleed*2)} x ${fmtMm(bookDim.h+bleed*2)}`);
  if (s.jilid === 'spiral' && !spiralInfo.outOfRange) coverCopyText.push(`Spiral Number: #${spiralInfo.number}`);
  if (s.jilid === 'spiral') coverCopyText.push(`Ukuran Cover: ${fmtMm(bookDim.w)} x ${fmtMm(bookDim.h)}`);

  // Build export info lines
  coverExportInfo = [];
  coverExportInfo.push(`Book Size: ${fmtDimWxH(bookDim.w,bookDim.h)} (${s.bookSize} ${s.position})`);
  coverExportInfo.push(`Jilid: ${s.jilid==='soft'?'Soft Cover':s.jilid==='hard'?'Hard Cover':'Spiral Kawat'}`);
  coverExportInfo.push(`Tebal Punggung: ${fmtMm(spine)}`);
  if (showBentangCards) coverExportInfo.push(`Total Bentang: ${fmtMm(totalBentang)}`);
  if (showBentangCards && Number(bleed)>0) coverExportInfo.push(`Bentang + Bleed: ${fmtMm(totalBentang+bleed*2)}`);
  coverExportInfo.push(`Estimasi Berat: ${fw.value}`);
  if (displayMode === 'spiral') coverExportInfo.push(`Ukuran Cetak: ${fmtMm(bookDim.w+bleed*2)} x ${fmtMm(bookDim.h+bleed*2)}`);
  if (s.jilid === 'spiral' && !spiralInfo.outOfRange) coverExportInfo.push(`Spiral Number: #${spiralInfo.number}`);
  if (s.jilid === 'spiral') coverExportInfo.push(`Ukuran Cover: ${fmtMm(bookDim.w)} x ${fmtMm(bookDim.h)}`);
  coverExportInfo.push(`Print Paper: ${fmtDimWxH(ppDim.w,ppDim.h)} (${s.printPaper} ${s.paperPosition})`);
  if (Number(bleed)>0) coverExportInfo.push(`Bleed: ${bleed}mm`);
  if (Number(margin)>0) coverExportInfo.push(`Margin: ${margin}mm`);

  right.innerHTML += `<button class="studio-copy-all-btn" data-copy="${coverCopyText.join('&#10;').replace(/"/g,'&quot;')}" onclick="copyText(this.dataset.copy.replace(/&#10;/g,'\\n'))"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy Semua Hasil</button><div class="studio-copy-all-spacer"></div>`;

  // Preview — always render at auto-fit scale; zoom/pan handled by CSS transform
  const scale = Math.min(540/ppDim.w, 380/ppDim.h, 2);
  _previewState.cover.autoFitScale = scale;

  const svgW = ppDim.w*scale, svgH = ppDim.h*scale;
  const w = bookDim.w, h = bookDim.h;
  const hcSpace = s.jilid==='hard' ? HARDCOVER_EXTRA : 0;

  // [Bug #9] Split mode: determine which half to show
  const showFront = coverSplitView !== 'back';
  const showBack = coverSplitView === 'back';

  let offset = {x:0,y:0};
  if (displayMode==='full') { offset = {x:(svgW-totalBentang*scale)/2, y:(svgH-h*scale)/2}; }
  else if (displayMode==='split') {
    if (showBack) {
      // Show back cover half: back cover + hc + spine + hc
      const backHalfW = w + hcSpace*2 + spine;
      offset = {x:(svgW-backHalfW*scale)/2, y:(svgH-h*scale)/2};
    } else {
      // Front cover half: spine + hc + cover depan
      const frontHalfW = w + spine + hcSpace;
      offset = {x:(svgW-frontHalfW*scale)/2, y:(svgH-h*scale)/2};
    }
  }
  else { offset = {x:(svgW-w*scale)/2, y:(svgH-h*scale)/2}; }

  // [Bug #7] All SVG colors adapt to dark mode
  const padX = 20;
  const _bg = isDark ? '#1a1f35' : '#f3f4fa';
  const _paper = isDark ? '#ffffff' : '#faf8f5';
  const _paperS = isDark ? '#5a6080' : '#c9c2b8';
  const _grid = isDark ? '#3a3f5a' : '#e7e3de';
  const _label = isDark ? '#94a3b8' : '#475569';
  const _txt = isDark ? '#c7d2fe' : '#1e3a5f';
  const _txtS = isDark ? '#a5b4fc' : '#3b5f8f';
  const _coverBack = isDark ? '#2563eb' : '#93c5fd';
  const _coverFront = isDark ? '#3b82f6' : '#60a5fa';
  const _coverStroke = isDark ? '#60a5fa' : '#3b82f6';
  const _spine = isDark ? '#1d4ed8' : '#3b82f6';
  const _spineS = isDark ? '#3b82f6' : '#1d4ed8';
  const _hcSpace = isDark ? '#2a3a6f' : '#bfdbfe';
  const _bleedS = isDark ? '#c4707e' : '#e88fa0';
  const _safeS = isDark ? '#2dd4bf' : '#5eead4';
  const _spiralLine = isDark ? '#94a3b8' : '#6b7280';
  const _spiralHole = isDark ? '#64748b' : '#6b7280';
  const _spiralHoleS = isDark ? '#475569' : '#4b5563';
  const _marginS = isDark ? '#8b5cf6' : '#a78bfa';
  const _bleedFill = isDark ? 'rgba(244,163,177,0.3)' : 'rgba(244,163,177,0.18)';
  const _safeFill = isDark ? 'rgba(110,231,183,0.22)' : 'rgba(110,231,183,0.1)';
  const _marginFill = isDark ? 'rgba(196,181,253,0.15)' : 'rgba(196,181,253,0.1)';
  const _bleedLegend = isDark ? 'rgba(244,163,177,0.5)' : 'rgba(244,163,177,0.4)';
  const _safeLegend = isDark ? 'rgba(94,234,212,0.5)' : 'rgba(94,234,212,0.4)';
  const _marginLegend = isDark ? 'rgba(167,139,250,0.5)' : 'rgba(167,139,250,0.4)';

  let svgContent = `<rect x="${-padX}" y="-20" width="${svgW+padX*2}" height="${svgH+40}" fill="${_bg}"/>`;
  svgContent += `<rect x="0" y="0" width="${svgW}" height="${svgH}" fill="${_paper}" rx="4" stroke="${_paperS}" stroke-width="1"/>`;
  // Margin area visualization
  if (margin > 0) svgContent += `<rect x="${margin*scale}" y="${margin*scale}" width="${(ppDim.w-margin*2)*scale}" height="${(ppDim.h-margin*2)*scale}" fill="${_marginFill}" stroke="${_marginS}" stroke-width="0.8" stroke-dasharray="5,3"/>`;
  [0.25,0.5,0.75].forEach(pct => {
    svgContent += `<line x1="${svgW*pct}" y1="0" x2="${svgW*pct}" y2="${svgH}" stroke="${_grid}" stroke-width="0.4" stroke-dasharray="6,4"/>`;
    svgContent += `<line x1="0" y1="${svgH*pct}" x2="${svgW}" y2="${svgH*pct}" stroke="${_grid}" stroke-width="0.4" stroke-dasharray="6,4"/>`;
  });

  const x0 = offset.x, y0 = offset.y;
  const bw = w*scale, bh = h*scale, sw = spine*scale, hcw = hcSpace*scale;

  // [Bug #11] Scale guard for cover text labels
  const showText = scale >= 0.3;

  if (displayMode === 'full') {
    if (bleed>0) svgContent += `<rect x="${x0-bleed*scale}" y="${y0-bleed*scale}" width="${(totalBentang+bleed*2)*scale}" height="${(h+bleed*2)*scale}" fill="${_bleedFill}" stroke="${_bleedS}" stroke-width="1" stroke-dasharray="5,3"/>`;
    if (totalBentang > SAFE_ZONE*2 && h > SAFE_ZONE*2) svgContent += `<rect x="${x0+SAFE_ZONE*scale}" y="${y0+SAFE_ZONE*scale}" width="${(totalBentang-SAFE_ZONE*2)*scale}" height="${(h-SAFE_ZONE*2)*scale}" fill="${_safeFill}" stroke="${_safeS}" stroke-width="0.5" stroke-dasharray="3,3"/>`;
    svgContent += `<rect x="${x0}" y="${y0}" width="${bw}" height="${bh}" fill="${_coverBack}" stroke="${_coverStroke}" stroke-width="1" rx="2"/>`;
    if (showText) {
      svgContent += `<text x="${x0+bw/2}" y="${y0+bh/2}" text-anchor="middle" font-size="${11*Math.min(scale,1.5)}" fill="${_txt}" font-weight="600">Cover Belakang</text>`;
      svgContent += `<text x="${x0+bw/2}" y="${y0+bh/2+14*Math.min(scale,1.5)}" text-anchor="middle" font-size="${9*Math.min(scale,1.5)}" fill="${_txtS}">${fmtDimWxH(w,h)}</text>`;
    }
    if (hcSpace>0) svgContent += `<rect x="${x0+bw}" y="${y0}" width="${hcw}" height="${bh}" fill="${_hcSpace}" stroke="${_coverStroke}" stroke-width="0.5" stroke-dasharray="2,2"/>`;
    svgContent += `<rect x="${x0+bw+hcw}" y="${y0}" width="${sw}" height="${bh}" fill="${_spine}" stroke="${_spineS}" stroke-width="1"/>`;
    if (showText) {
      svgContent += `<text x="${x0+bw+hcw+sw/2}" y="${y0+bh/2}" text-anchor="middle" font-size="${9*Math.min(scale,1.5)}" fill="#fff" font-weight="600" transform="rotate(-90,${x0+bw+hcw+sw/2},${y0+bh/2})">Punggung ${fmtMm(spine)}</text>`;
    }
    if (hcSpace>0) svgContent += `<rect x="${x0+bw+hcw+sw}" y="${y0}" width="${hcw}" height="${bh}" fill="${_hcSpace}" stroke="${_coverStroke}" stroke-width="0.5" stroke-dasharray="2,2"/>`;
    svgContent += `<rect x="${x0+bw+hcw+sw+hcw}" y="${y0}" width="${bw}" height="${bh}" fill="${_coverFront}" stroke="${_coverStroke}" stroke-width="1" rx="2"/>`;
    if (showText) {
      svgContent += `<text x="${x0+bw+hcw+sw+hcw+bw/2}" y="${y0+bh/2}" text-anchor="middle" font-size="${11*Math.min(scale,1.5)}" fill="${_txt}" font-weight="600">Cover Depan</text>`;
      svgContent += `<text x="${x0+bw+hcw+sw+hcw+bw/2}" y="${y0+bh/2+14*Math.min(scale,1.5)}" text-anchor="middle" font-size="${9*Math.min(scale,1.5)}" fill="${_txtS}">${fmtDimWxH(w,h)}</text>`;
    }
  } else if (displayMode === 'split') {
    // [Bug #9] Show both halves with toggle tabs
    if (showBack) {
      // Back cover half: back cover + hc + spine + hc
      const backHalfW = w + hcSpace*2 + spine;
      if (bleed>0) svgContent += `<rect x="${x0-bleed*scale}" y="${y0-bleed*scale}" width="${(backHalfW+bleed*2)*scale}" height="${(h+bleed*2)*scale}" fill="${_bleedFill}" stroke="${_bleedS}" stroke-width="1" stroke-dasharray="5,3"/>`;
      svgContent += `<rect x="${x0}" y="${y0}" width="${bw}" height="${bh}" fill="${_coverBack}" stroke="${_coverStroke}" stroke-width="1" rx="2"/>`;
      if (showText) {
        svgContent += `<text x="${x0+bw/2}" y="${y0+bh/2}" text-anchor="middle" font-size="${11*Math.min(scale,1.5)}" fill="${_txt}" font-weight="600">Cover Belakang</text>`;
        svgContent += `<text x="${x0+bw/2}" y="${y0+bh/2+14*Math.min(scale,1.5)}" text-anchor="middle" font-size="${9*Math.min(scale,1.5)}" fill="${_txtS}">${fmtDimWxH(w,h)}</text>`;
      }
      if (hcSpace>0) svgContent += `<rect x="${x0+bw}" y="${y0}" width="${hcw}" height="${bh}" fill="${_hcSpace}" stroke="${_coverStroke}" stroke-width="0.5" stroke-dasharray="2,2"/>`;
      svgContent += `<rect x="${x0+bw+hcw}" y="${y0}" width="${sw}" height="${bh}" fill="${_spine}" stroke="${_spineS}" stroke-width="1"/>`;
      if (showText) {
        svgContent += `<text x="${x0+bw+hcw+sw/2}" y="${y0+bh/2}" text-anchor="middle" font-size="${9*Math.min(scale,1.5)}" fill="#fff" font-weight="600" transform="rotate(-90,${x0+bw+hcw+sw/2},${y0+bh/2})">Punggung ${fmtMm(spine)}</text>`;
      }
      if (hcSpace>0) svgContent += `<rect x="${x0+bw+hcw+sw}" y="${y0}" width="${hcw}" height="${bh}" fill="${_hcSpace}" stroke="${_coverStroke}" stroke-width="0.5" stroke-dasharray="2,2"/>`;
    } else {
      // Front cover half: spine + hc + cover depan
      if (bleed>0) svgContent += `<rect x="${x0-bleed*scale}" y="${y0-bleed*scale}" width="${(w+spine+hcSpace+bleed*2)*scale}" height="${(h+bleed*2)*scale}" fill="${_bleedFill}" stroke="${_bleedS}" stroke-width="1" stroke-dasharray="5,3"/>`;
      if (w+spine+hcSpace > SAFE_ZONE*2 && h > SAFE_ZONE*2) svgContent += `<rect x="${x0+SAFE_ZONE*scale}" y="${y0+SAFE_ZONE*scale}" width="${(w+spine+hcSpace-SAFE_ZONE*2)*scale}" height="${(h-SAFE_ZONE*2)*scale}" fill="${_safeFill}" stroke="${_safeS}" stroke-width="0.5" stroke-dasharray="3,3"/>`;
      svgContent += `<rect x="${x0}" y="${y0}" width="${sw}" height="${bh}" fill="${_spine}" stroke="${_spineS}" stroke-width="1"/>`;
      if (showText) {
        svgContent += `<text x="${x0+sw/2}" y="${y0+bh/2}" text-anchor="middle" font-size="${9*Math.min(scale,1.5)}" fill="#fff" font-weight="600" transform="rotate(-90,${x0+sw/2},${y0+bh/2})">Punggung ${fmtMm(spine)}</text>`;
      }
      if (hcSpace>0) svgContent += `<rect x="${x0+sw}" y="${y0}" width="${hcw}" height="${bh}" fill="${_hcSpace}" stroke="${_coverStroke}" stroke-width="0.5" stroke-dasharray="2,2"/>`;
      svgContent += `<rect x="${x0+sw+hcw}" y="${y0}" width="${bw}" height="${bh}" fill="${_coverFront}" stroke="${_coverStroke}" stroke-width="1" rx="2"/>`;
      if (showText) {
        svgContent += `<text x="${x0+sw+hcw+bw/2}" y="${y0+bh/2}" text-anchor="middle" font-size="${11*Math.min(scale,1.5)}" fill="${_txt}" font-weight="600">Cover Depan</text>`;
        svgContent += `<text x="${x0+sw+hcw+bw/2}" y="${y0+bh/2+14*Math.min(scale,1.5)}" text-anchor="middle" font-size="${9*Math.min(scale,1.5)}" fill="${_txtS}">${fmtDimWxH(w,h)}</text>`;
      }
    }
  } else if (displayMode === 'spiral') {
    if (bleed>0) svgContent += `<rect x="${x0-bleed*scale}" y="${y0-bleed*scale}" width="${(w+bleed*2)*scale}" height="${(h+bleed*2)*scale}" fill="${_bleedFill}" stroke="${_bleedS}" stroke-width="1" stroke-dasharray="5,3"/>`;
    if (w > SAFE_ZONE*2 && h > SAFE_ZONE*2) svgContent += `<rect x="${x0+SAFE_ZONE*scale}" y="${y0+SAFE_ZONE*scale}" width="${(w-SAFE_ZONE*2)*scale}" height="${(h-SAFE_ZONE*2)*scale}" fill="${_safeFill}" stroke="${_safeS}" stroke-width="0.5" stroke-dasharray="3,3"/>`;
    svgContent += `<rect x="${x0}" y="${y0}" width="${bw}" height="${bh}" fill="${_coverFront}" stroke="${_coverStroke}" stroke-width="1" rx="2"/>`;
    svgContent += `<line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y0+bh}" stroke="${_spiralLine}" stroke-width="2"/>`;
    if (showText) {
      svgContent += `<text x="${x0+bw/2}" y="${y0+bh/2}" text-anchor="middle" font-size="${11*Math.min(scale,1.5)}" fill="${_txt}" font-weight="600">Cover Depan</text>`;
      svgContent += `<text x="${x0+bw/2}" y="${y0+bh/2+14*Math.min(scale,1.5)}" text-anchor="middle" font-size="${9*Math.min(scale,1.5)}" fill="${_txtS}">${fmtDimWxH(w,h)}</text>`;
    }
    // [Bug #16] Spiral holes with guard for small book heights
    const usableH2 = Math.max(0, h - 2*SPIRAL_MARGIN);
    if (holeCount > 1 && usableH2 > 0) {
      for (let i=0; i<holeCount; i++) {
        const hy = SPIRAL_MARGIN + (usableH2/(holeCount-1))*i;
        svgContent += `<circle cx="${x0}" cy="${hy*scale+offset.y}" r="${SPIRAL_HOLE_SIZE/2*scale}" fill="${_spiralHole}" stroke="${_spiralHoleS}" stroke-width="0.5"/>`;
      }
    }
  }

  // Dimension label
  const yBottom = offset.y + h*scale + (bleed>0?bleed*scale:0) + 14;
  if (displayMode==='full') svgContent += `<text x="${offset.x+totalBentang*scale/2}" y="${yBottom}" text-anchor="middle" font-size="10" fill="${_label}" font-weight="600">${fmtMm(totalBentang)} (${fmtSecondaryUnit(totalBentang)})</text>`;
  else if (displayMode==='split') {
    if (showBack) {
      const backHalfW = w + hcSpace*2 + spine;
      svgContent += `<text x="${offset.x+backHalfW*scale/2}" y="${yBottom}" text-anchor="middle" font-size="10" fill="${_label}" font-weight="600">${fmtMm(backHalfW)} (Cover Belakang)</text>`;
    } else {
      svgContent += `<text x="${offset.x+(w+spine+hcSpace)*scale/2}" y="${yBottom}" text-anchor="middle" font-size="10" fill="${_label}" font-weight="600">${fmtMm(w+spine+hcSpace)} (Cover Depan)</text>`;
    }
  }
  else svgContent += `<text x="${offset.x+w*scale/2}" y="${yBottom}" text-anchor="middle" font-size="10" fill="${_label}" font-weight="600">${fmtDim(w)}</text>`;

  // ── Overlap Warning: area that exceeds print paper ──
  if (!fitsOnPaper) {
    const usableW = ppDim.w - margin*2, usableH = ppDim.h - margin*2;
    const contentW = neededW, contentH = neededH;
    const cx0 = margin*scale, cy0 = margin*scale; // start of usable area in SVG coords
    // Right overflow
    if (contentW > usableW) {
      const overX = cx0 + usableW*scale;
      const overW = Math.min((contentW - usableW)*scale, svgW - overX);
      if (overW > 0) svgContent += `<rect class="studio-overlap-area" x="${overX}" y="${cy0}" width="${overW}" height="${usableH*scale}" fill="rgba(239,68,68,0.45)" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,3"/>`;
    }
    // Bottom overflow
    if (contentH > usableH) {
      const overY = cy0 + usableH*scale;
      const overH = Math.min((contentH - usableH)*scale, svgH - overY);
      if (overH > 0) svgContent += `<rect class="studio-overlap-area" x="${cx0}" y="${overY}" width="${usableW*scale}" height="${overH}" fill="rgba(239,68,68,0.45)" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,3"/>`;
    }
    // Corner overflow (both)
    if (contentW > usableW && contentH > usableH) {
      const overX = cx0 + usableW*scale;
      const overY = cy0 + usableH*scale;
      const overW = Math.min((contentW - usableW)*scale, svgW - overX);
      const overH = Math.min((contentH - usableH)*scale, svgH - overY);
      if (overW > 0 && overH > 0) svgContent += `<rect class="studio-overlap-area" x="${overX}" y="${overY}" width="${overW}" height="${overH}" fill="rgba(239,68,68,0.55)" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,3"/>`;
    }
  }

  const modeLabel = displayMode==='full'?'Full Spread':displayMode==='split'?'Split':'Spiral';
  const zoomBtns = [{l:'Fit',v:0},{l:'25%',v:0.25},{l:'50%',v:0.5},{l:'75%',v:0.75},{l:'100%',v:1}];
  let splitTabsHtml = '';
  if (displayMode === 'split') {
    splitTabsHtml = `<div class="studio-split-tabs">
      <button class="studio-split-tab ${coverSplitView!=='back'?'active':''}" onclick="coverSplitView='front';renderAll(true)">Cover Depan</button>
      <button class="studio-split-tab ${coverSplitView==='back'?'active':''}" onclick="coverSplitView='back';renderAll(true)">Cover Belakang</button>
    </div>`;
  }

  // [A11y #4] SVG accessibility — apply zoom/pan transform immediately to avoid flash-to-fit
  const _cst = _previewState.cover;
  const _csvgStyle = `display:block;max-width:100%;height:auto;font-family:'Poppins',sans-serif;transform:translate(${_cst.panX}px,${_cst.panY}px) scale(${_cst.zoom});transform-origin:center center`;
  right.innerHTML += `
    ${splitTabsHtml}
    <div class="studio-preview-container">
      <div class="studio-preview-header"><span class="studio-preview-title">Layout Preview — ${modeLabel}</span></div>
      <div class="studio-preview-body" id="coverPreviewBody" style="padding:24px"><svg width="${svgW+padX*2}" height="${svgH+40}" viewBox="${-padX} -20 ${svgW+padX*2} ${svgH+40}" role="img" aria-label="Preview layout cetak cover mode ${modeLabel}" style="${_csvgStyle}"><title>Cover Layout Preview - ${modeLabel}</title>${svgContent}</svg></div>
      <div class="studio-zoom-bar">
        <div class="studio-zoom-buttons">${zoomBtns.map(z=>`<button class="studio-zoom-btn${coverZoom===z.v?' active':''}" onclick="coverZoom=${z.v};_previewState.cover.zoom=${z.v===0?1:z.v/(_previewState.cover.autoFitScale||1)};_previewState.cover.panX=0;_previewState.cover.panY=0;renderAll(true)">${z.l}</button>`).join('')}</div>
        <div style="display:flex;gap:6px">
        <button class="studio-export-badge png-badge" onclick="exportPng('coverPreviewBody','cover-layout.png',coverExportInfo)" title="Export PNG"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>PNG</button>
        <button class="studio-export-badge pdf-badge" onclick="exportPdf('coverPreviewBody','cover-layout.pdf',coverExportInfo)" title="Export PDF"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>PDF</button>
        </div>
      </div>
    </div>`;

  // Info cards
  let infoHtml = '<div style="margin-top:16px">';
  // [Bug #9] Info about split requiring 2 prints
  if (displayMode === 'split') {
    infoHtml += `<div class="studio-info-card studio-info-warning studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Split Mode — 2x Cetak</span></div><div class="studio-info-card-body">
      <div class="studio-info-row"><span class="studio-info-row-label">Status</span><span class="studio-info-row-value" style="color:#f59e0b">Full spread tidak muat — perlu 2 kali cetak</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Cetak 1</span><span class="studio-info-row-value">Cover Depan (Punggung + Cover Depan)</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Cetak 2</span><span class="studio-info-row-value">Cover Belakang (Cover Belakang + Punggung)</span></div></div></div>`;
  }
  if (s.jilid==='hard') {
    infoHtml += `<div class="studio-info-card studio-info-warning studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Hard Cover Info</span></div><div class="studio-info-card-body">
      <div class="studio-info-row"><span class="studio-info-row-label">Extra Space (Nyentrik)</span><span class="studio-info-row-value">${HARDCOVER_EXTRA}mm × 2</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Space Per Side</span><span class="studio-info-row-value">${HARDCOVER_EXTRA}mm</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Total Extra in Bentang</span><span class="studio-info-row-value">${HARDCOVER_EXTRA*2}mm</span></div></div></div>`;
  }
  if (s.jilid==='spiral') {
    if (spiralInfo.outOfRange) {
      infoHtml += `<div class="studio-info-card studio-info-warning studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Spiral — Di Luar Ukuran</span></div><div class="studio-info-card-body">
        <div class="studio-info-row"><span class="studio-info-row-label">Spiral Number</span><span class="studio-info-row-value" style="color:#dc2626">Di Luar Ukuran</span></div>
        <div class="studio-info-row"><span class="studio-info-row-label">Tebal Punggung</span><span class="studio-info-row-value" style="color:#dc2626">${fmtMm(spine)}</span></div>
        <div class="studio-info-row"><span class="studio-info-row-label">Max Ukuran Tabel</span><span class="studio-info-row-value">${SPIRAL_SIZES[SPIRAL_SIZES.length-1].maxSpine}mm (#${SPIRAL_SIZES[SPIRAL_SIZES.length-1].number})</span></div>
        <div class="studio-info-row"><span class="studio-info-row-label">Margin from Edge</span><span class="studio-info-row-value">${SPIRAL_MARGIN}mm</span></div></div></div>`;
    } else {
      infoHtml += `<div class="studio-info-card studio-info-info studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Binding Info</span></div><div class="studio-info-card-body">
        <div class="studio-info-row"><span class="studio-info-row-label">Spiral Number</span><span class="studio-info-row-value">#${spiralInfo.number}</span></div>
        <div class="studio-info-row"><span class="studio-info-row-label">Max Spine</span><span class="studio-info-row-value">${SPIRAL_SIZES.find(x=>x.number===spiralInfo.number)?.maxSpine||0}mm</span></div>
        <div class="studio-info-row"><span class="studio-info-row-label">Margin from Edge</span><span class="studio-info-row-value">${SPIRAL_MARGIN}mm</span></div></div></div>`;
    }
    infoHtml += `<div class="studio-info-card studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Spiral Size Table</span></div><div class="studio-info-card-body"><table class="studio-table"><thead><tr><th>Number</th><th>Max Spine (mm)</th></tr></thead><tbody>`;
    SPIRAL_SIZES.forEach(s2 => {
      const isActive = !spiralInfo.outOfRange && s2.number === spiralInfo.number;
      const isExceeded = spiralInfo.outOfRange && s2.number === SPIRAL_SIZES[SPIRAL_SIZES.length-1].number;
      infoHtml += `<tr class="${isActive?'active-row':''}" style="${isExceeded?'background:rgba(239,68,68,0.08);':''}"><td>#${s2.number}</td><td>${s2.maxSpine}${isExceeded?' ← melebihi':''}</td></tr>`;
    });
    infoHtml += `</tbody></table></div></div>`;
  }

  infoHtml += `<div class="studio-info-card studio-info-card-anim ${fitsOnPaper?'studio-info-success':'studio-info-warning'}"><div class="studio-info-card-header"><span class="studio-info-card-title">Print Paper Info</span></div><div class="studio-info-card-body">
    <div class="studio-info-row"><span class="studio-info-row-label">Paper Size</span><span class="studio-info-row-value">${fmtDimWxH(ppDim.w,ppDim.h)}</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Needed Size</span><span class="studio-info-row-value">${fmtMm(neededW)}×${fmtMm(neededH)}</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Fits on Paper</span><span class="studio-info-row-value" style="color:${fitsOnPaper?'#10b981':'#f59e0b'}">${fitsOnPaper?'✓ Yes':'✗ No — consider larger paper'}</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Margin</span><span class="studio-info-row-value">${margin}mm</span></div></div></div>`;

  infoHtml += `<div class="studio-info-card studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Info Warna</span></div><div class="studio-info-card-body"><div class="studio-legend">
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_paper};border:1px solid ${_paperS}"></span><span class="studio-legend-label">Kertas Print</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_coverBack}"></span><span class="studio-legend-label">Cover Belakang</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_coverFront}"></span><span class="studio-legend-label">Cover Depan</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_spine}"></span><span class="studio-legend-label">Punggung/Spine</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_hcSpace}"></span><span class="studio-legend-label">Hard Cover Space</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_bleedLegend}"></span><span class="studio-legend-label">Bleed Area</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_safeLegend}"></span><span class="studio-legend-label">Safe Zone</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_spiralHole}"></span><span class="studio-legend-label">Spiral Holes</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_marginLegend}"></span><span class="studio-legend-label">Margin</span></div>
  </div>
  </div></div>`;
  infoHtml += `<div class="studio-shortcut-bar">
    <span class="studio-shortcut-item">⌨ <b>Ctrl+Shift+R</b> Reset</span>
    <span class="studio-shortcut-item">⌨ <b>Ctrl+D</b> Dark Mode</span>
    <span class="studio-shortcut-item">⌨ <b>Ctrl+E</b> PNG</span>
    <span class="studio-shortcut-item">⌨ <b>Ctrl+Shift+E</b> PDF</span>
  </div>`;
  infoHtml += '</div>';
  right.innerHTML += infoHtml;

  // Setup preview interaction after render
  // Setup preview interaction — use requestAnimationFrame for immediate but safe setup
  requestAnimationFrame(() => {
    setupPreviewInteraction('coverPreviewBody', 'cover');
  });
}

// ============================================================
// Render Paper Cut Studio
// ============================================================
function renderPaperCut(skipLeftPanel=false) {
  cleanupPreviewListeners();
  const s = paperCutState;
  const pageDim = getPageDim(s);
  const ppBase = s.printPaper === 'Custom' ? {w:s.customPrintW, h:s.customPrintH} : (PRINT_PAPER_MAP[s.printPaper]||{w:480,h:320});
  const bleed = Number(s.bleed);
  const margin = getMarginValue(s);
  const totalPcs = s.jumlahPcs;

  const autoPos = autoPaperCutPos(pageDim, ppBase, bleed, margin);
  if (s.chacaRel) { s.paperPosition = 'Landscape'; }
  else if (s.paperPosition !== autoPos) { s.paperPosition = autoPos; }
  const ppDim = getPaperCutPrintDim(s);
  const cut = calcCutLayout(pageDim, ppDim, bleed, margin, totalPcs);

  // Left panel — only rebuild when structural changes happen
  if (!skipLeftPanel) {
    const left = document.getElementById('paperCutLeftPanel');
    left.innerHTML = '';

    createSectionTitle('paperCutLeftPanel', 'Ukuran & Posisi');
    createDimensionInput('paperCutLeftPanel', 'Custom Ukuran Desain', s.customW, s.customH, v=>{paperCutState.customW=v;}, v=>{paperCutState.customH=v;}, ICONS.book);
    createDropdown('paperCutLeftPanel', 'Posisi Desain', [{value:'Portrait',label:'Portrait'},{value:'Landscape',label:'Landscape'}], s.position, v=>{paperCutState.position=v;}, ICONS.portrait);
    createToggle('paperCutLeftPanel', 'Chaca/Rel', s.chacaRel, v=>{paperCutState.chacaRel=v; if(v) paperCutState.paperPosition='Landscape';}, ICONS.chacaRel, 'Jika ON, Posisi Kertas hanya Landscape');

    createSectionTitle('paperCutLeftPanel', 'Jumlah');
    createNumberInput('paperCutLeftPanel', 'Jumlah Pcs', s.jumlahPcs, v=>{paperCutState.jumlahPcs=v;}, 1, ICONS.pcs, 99999);

    createSectionTitle('paperCutLeftPanel', 'Kertas Print');
    createDropdown('paperCutLeftPanel', 'Kertas Print', PRINT_PAPER_OPTIONS, s.printPaper, v=>{paperCutState.printPaper=v;}, ICONS.printPaper);
    if (s.printPaper === 'Custom') {
      createDimensionInput('paperCutLeftPanel', '', s.customPrintW, s.customPrintH, v=>{paperCutState.customPrintW=v;}, v=>{paperCutState.customPrintH=v;});
    }
    const paperPosOptions = s.chacaRel ? [{value:'Landscape',label:'Landscape'}] : [{value:'Landscape',label:'Landscape'},{value:'Portrait',label:'Portrait'}];
    createDropdown('paperCutLeftPanel', s.chacaRel ? 'Posisi Kertas (Landscape Only)' : 'Posisi Kertas (Auto)', paperPosOptions, s.paperPosition, v=>{paperCutState.paperPosition=v;}, ICONS.landscape);
    // [Bug #12] Use BLEED_OPTIONS constant instead of inline duplicate
    createDropdown('paperCutLeftPanel', 'Bleed Area', BLEED_OPTIONS, s.bleed, v=>{paperCutState.bleed=v;}, ICONS.bleed);
    createDropdown('paperCutLeftPanel', 'Margin Kertas', PAPER_CUT_MARGIN_OPTIONS, s.margin, v=>{paperCutState.margin=v;}, ICONS.margin);
  }

  // Right panel
  const right = document.getElementById('paperCutRightPanel');
  right.innerHTML = '';

  const fitsOnPaper = cut.totalPerPage > 0;
  const sisaPcs = cut.totalSheets * cut.totalPerPage - totalPcs;

  // Alert when page exceeds print paper
  if (!fitsOnPaper && !paperCutAlertShown) {
    paperCutAlertShown = true;
    const pgW = pageDim.w + bleed*2, pgH = pageDim.h + bleed*2;
    showToast(`Ukuran halaman (${fmtMm(pgW)} x ${fmtMm(pgH)}) melebihi Kertas Print ${s.printPaper} (${fmtMm(ppDim.w)} x ${fmtMm(ppDim.h)})!`, 'warning');
  }
  if (fitsOnPaper) { paperCutAlertShown = false; }

  let cardsHtml = `<div class="studio-result-cards">
    <div class="studio-result-card card-blue studio-result-card-anim" onclick="copyText('${cut.totalPerPage} pcs');">
      <div class="studio-result-card-top"><span class="studio-result-label">Pcs Per Lembar</span></div>
      <div class="studio-result-value">${cut.totalPerPage} pcs</div>
      <div class="studio-result-sub">${cut.cols}×${cut.rows} grid</div>
      <div class="studio-result-bar"></div>
    </div>
    <div class="studio-result-card card-sky studio-result-card-anim" onclick="copyText('${cut.totalSheets} lbr');">
      <div class="studio-result-card-top"><span class="studio-result-label">Total Lembar Cetak</span></div>
      <div class="studio-result-value">${cut.totalSheets} lbr</div>
      <div class="studio-result-sub">${totalPcs} pcs ÷ ${cut.totalPerPage}/lbr</div>
      <div class="studio-result-bar"></div>
    </div>
    <div class="studio-result-card card-rose studio-result-card-anim" onclick="copyText('${totalPcs} pcs');">
      <div class="studio-result-card-top"><span class="studio-result-label">Total Pcs</span></div>
      <div class="studio-result-value">${totalPcs} pcs</div>
      <div class="studio-result-sub">Jumlah yang dicetak</div>
      <div class="studio-result-bar"></div>
    </div>
    <div class="studio-result-card ${cut.utilization>=70?'card-emerald':'card-amber'} studio-result-card-anim" onclick="copyText('${cut.utilization.toFixed(1)}%');">
      <div class="studio-result-card-top"><span class="studio-result-label">Efisiensi Kertas</span></div>
      <div class="studio-result-value">${cut.utilization.toFixed(1)}%</div>
      <div class="studio-result-sub">Sisa: ${cut.wasteArea.toFixed(0)}mm²</div>
      <div class="studio-result-bar"></div>
    </div>
    ${sisaPcs>0 ? `<div class="studio-result-card card-violet studio-result-card-anim">
      <div class="studio-result-card-top"><span class="studio-result-label">Sisa Slot Kosong</span></div>
      <div class="studio-result-value">${sisaPcs} pcs</div>
      <div class="studio-result-sub">Bisa diisi pcs lain</div>
      <div class="studio-result-bar"></div>
    </div>` : ''}
  </div>`;
  right.innerHTML = cardsHtml;

  // Copy All button — Feature 4
  const paperCopyText = [];
  paperCopyText.push(`Pcs Per Lembar: ${cut.totalPerPage} pcs (${cut.cols}×${cut.rows} grid)`);
  paperCopyText.push(`Total Lembar Cetak: ${cut.totalSheets} lbr`);
  paperCopyText.push(`Total Pcs: ${totalPcs} pcs`);
  paperCopyText.push(`Efisiensi Kertas: ${cut.utilization.toFixed(1)}%`);
  if (sisaPcs > 0) paperCopyText.push(`Sisa Slot Kosong: ${sisaPcs} pcs`);

  // Build export info lines
  paperCutExportInfo = [];
  paperCutExportInfo.push(`Ukuran Halaman: ${fmtDimWxH(pageDim.w,pageDim.h)} (${s.position})`);
  if (Number(bleed)>0) paperCutExportInfo.push(`Halaman + Bleed: ${fmtDimWxH(pageDim.w+bleed*2,pageDim.h+bleed*2)}`);
  paperCutExportInfo.push(`Pcs Per Lembar: ${cut.totalPerPage} pcs (${cut.cols}×${cut.rows} grid)`);
  paperCutExportInfo.push(`Total Lembar Cetak: ${cut.totalSheets} lbr`);
  paperCutExportInfo.push(`Total Pcs: ${totalPcs}`);
  paperCutExportInfo.push(`Efisiensi Kertas: ${cut.utilization.toFixed(1)}%`);
  if (sisaPcs > 0) paperCutExportInfo.push(`Sisa Slot Kosong: ${sisaPcs} pcs`);
  paperCutExportInfo.push(`Print Paper: ${fmtDimWxH(ppDim.w,ppDim.h)} (${s.printPaper} ${s.paperPosition})`);
  if (Number(bleed)>0) paperCutExportInfo.push(`Bleed: ${bleed}mm`);
  if (Number(margin)>0) paperCutExportInfo.push(`Margin: ${margin}mm`);

  right.innerHTML += `<button class="studio-copy-all-btn" data-copy="${paperCopyText.join('&#10;').replace(/"/g,'&quot;')}" onclick="copyText(this.dataset.copy.replace(/&#10;/g,'\\n'))"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy Semua Hasil</button><div class="studio-copy-all-spacer"></div>`;

  // Preview SVG — always render at auto-fit scale; zoom/pan handled by CSS transform
  const ppW = ppDim.w, ppH = ppDim.h;
  const scale = Math.min(540/ppW, 380/ppH, 2);
  _previewState.papercut.autoFitScale = scale;
  const svgW = ppW*scale, svgH = ppH*scale;

  // [Bug #7] All SVG colors adapt to dark mode
  const padX = 20;
  const _bg = isDark ? '#1a1f35' : '#f3f4fa';
  const _paper = isDark ? '#ffffff' : '#faf8f5';
  const _paperS = isDark ? '#5a6080' : '#c9c2b8';
  const _grid = isDark ? '#3a3f5a' : '#e7e3de';
  const _label = isDark ? '#94a3b8' : '#475569';
  const _txt = isDark ? '#c7d2fe' : '#1e3a5f';
  const _txtS = isDark ? '#a5b4fc' : '#3b5f8f';
  const _pageOdd = isDark ? '#3b82f6' : '#60a5fa';
  const _pageEven = isDark ? '#2563eb' : '#93c5fd';
  const _pageStroke = isDark ? '#60a5fa' : '#3b82f6';
  const _bleedS = isDark ? '#c4707e' : '#e88fa0';
  const _marginS = isDark ? '#8b5cf6' : '#a78bfa';
  const _topLabel = isDark ? '#818cf8' : '#6366f1';
  const _bleedFill = isDark ? 'rgba(244,163,177,0.3)' : 'rgba(244,163,177,0.18)';
  const _marginFill = isDark ? 'rgba(196,181,253,0.15)' : 'rgba(196,181,253,0.1)';
  const _bleedLegend = isDark ? 'rgba(244,163,177,0.5)' : 'rgba(244,163,177,0.4)';
  const _marginLegend = isDark ? 'rgba(167,139,250,0.5)' : 'rgba(167,139,250,0.4)';

  let svgContent = `<rect x="${-padX}" y="-20" width="${svgW+padX*2}" height="${svgH+40}" fill="${_bg}"/>`;
  svgContent += `<rect x="0" y="0" width="${svgW}" height="${svgH}" fill="${_paper}" rx="4" stroke="${_paperS}" stroke-width="1"/>`;
  [0.25,0.5,0.75].forEach(pct => {
    svgContent += `<line x1="${svgW*pct}" y1="0" x2="${svgW*pct}" y2="${svgH}" stroke="${_grid}" stroke-width="0.4" stroke-dasharray="6,4"/>`;
    svgContent += `<line x1="0" y1="${svgH*pct}" x2="${svgW}" y2="${svgH*pct}" stroke="${_grid}" stroke-width="0.4" stroke-dasharray="6,4"/>`;
  });

  // Margin area
  if (margin > 0) svgContent += `<rect x="${margin*scale}" y="${margin*scale}" width="${(ppW-margin*2)*scale}" height="${(ppH-margin*2)*scale}" fill="${_marginFill}" stroke="${_marginS}" stroke-width="0.8" stroke-dasharray="5,3"/>`;

  // Pages
  for (let r=0; r<cut.rows; r++) {
    for (let c=0; c<cut.cols; c++) {
      const x = (cut.offsetX + c*cut.pageW)*scale;
      const y = (cut.offsetY + r*cut.pageH)*scale;
      const pw = cut.pageW*scale, ph = cut.pageH*scale;
      const pageIdx = r*cut.cols+c+1;

      if (bleed>0) svgContent += `<rect x="${x}" y="${y}" width="${pw}" height="${ph}" fill="${_bleedFill}" stroke="${_bleedS}" stroke-width="0.5" stroke-dasharray="4,2"/>`;

      const innerX = x+bleed*scale, innerY = y+bleed*scale;
      const innerW = pageDim.w*scale, innerH = pageDim.h*scale;
      const isEven = (r+c)%2===0;

      svgContent += `<rect x="${innerX}" y="${innerY}" width="${innerW}" height="${innerH}" fill="${isEven?_pageOdd:_pageEven}" stroke="${_pageStroke}" stroke-width="1" rx="2"/>`;
      if (scale>=0.3) {
        svgContent += `<text x="${innerX+innerW/2}" y="${innerY+innerH/2}" text-anchor="middle" font-size="${Math.min(11*scale,14)}" fill="${_txt}" font-weight="600">Pcs ${pageIdx}</text>`;
        svgContent += `<text x="${innerX+innerW/2}" y="${innerY+innerH/2+14*Math.min(scale,1.2)}" text-anchor="middle" font-size="${Math.min(9*scale,11)}" fill="${_txtS}">${fmtDimWxH(pageDim.w,pageDim.h)}</text>`;
      }
    }
  }

  // Labels
  svgContent += `<text x="${svgW/2}" y="${svgH+14}" text-anchor="middle" font-size="10" fill="${_label}" font-weight="600">${fmtDimWxH(ppW,ppH)}</text>`;
  if (cut.totalPerPage>0) svgContent += `<text x="${svgW/2}" y="14" text-anchor="middle" font-size="10" fill="${_topLabel}" font-weight="600">${cut.cols}×${cut.rows} = ${cut.totalPerPage} pcs/lembar</text>`;

  // ── Overlap Warning: area that exceeds print paper ──
  if (!fitsOnPaper) {
    const pgW = pageDim.w + bleed*2, pgH = pageDim.h + bleed*2;
    const usableW = ppW - margin*2, usableH = ppH - margin*2;
    const cx0 = margin*scale, cy0 = margin*scale;
    if (pgW > usableW) {
      const overX = cx0 + usableW*scale;
      const overW = Math.min((pgW - usableW)*scale, svgW - overX);
      if (overW > 0) svgContent += `<rect class="studio-overlap-area" x="${overX}" y="${cy0}" width="${overW}" height="${usableH*scale}" fill="rgba(239,68,68,0.45)" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,3"/>`;
    }
    if (pgH > usableH) {
      const overY = cy0 + usableH*scale;
      const overH = Math.min((pgH - usableH)*scale, svgH - overY);
      if (overH > 0) svgContent += `<rect class="studio-overlap-area" x="${cx0}" y="${overY}" width="${usableW*scale}" height="${overH}" fill="rgba(239,68,68,0.45)" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,3"/>`;
    }
    if (pgW > usableW && pgH > usableH) {
      const overX = cx0 + usableW*scale;
      const overY = cy0 + usableH*scale;
      const overW = Math.min((pgW - usableW)*scale, svgW - overX);
      const overH = Math.min((pgH - usableH)*scale, svgH - overY);
      if (overW > 0 && overH > 0) svgContent += `<rect class="studio-overlap-area" x="${overX}" y="${overY}" width="${overW}" height="${overH}" fill="rgba(239,68,68,0.55)" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,3"/>`;
    }
  }

  const zoomBtns = [{l:'Fit',v:0},{l:'25%',v:0.25},{l:'50%',v:0.5},{l:'75%',v:0.75},{l:'100%',v:1}];

  // Apply zoom/pan transform immediately to avoid flash-to-fit
  const _pst = _previewState.papercut;
  const _psvgStyle = `display:block;max-width:100%;height:auto;font-family:'Poppins',sans-serif;transform:translate(${_pst.panX}px,${_pst.panY}px) scale(${_pst.zoom});transform-origin:center center`;
  right.innerHTML += `
    <div class="studio-preview-container">
      <div class="studio-preview-header"><span class="studio-preview-title">Layout Potong — ${cut.cols}×${cut.rows} Grid</span></div>
      <div class="studio-preview-body" id="paperCutPreviewBody" style="padding:24px"><svg width="${svgW+padX*2}" height="${svgH+40}" viewBox="${-padX} -20 ${svgW+padX*2} ${svgH+40}" role="img" aria-label="Preview layout potong kertas ${cut.cols}×${cut.rows}" style="${_psvgStyle}"><title>Paper Cut Layout Preview - ${cut.cols}×${cut.rows}</title>${svgContent}</svg></div>
      <div class="studio-zoom-bar">
        <div class="studio-zoom-buttons">${zoomBtns.map(z=>`<button class="studio-zoom-btn${paperCutZoom===z.v?' active':''}" onclick="paperCutZoom=${z.v};_previewState.papercut.zoom=${z.v===0?1:z.v/(_previewState.papercut.autoFitScale||1)};_previewState.papercut.panX=0;_previewState.papercut.panY=0;renderAll(true)">${z.l}</button>`).join('')}</div>
        <div style="display:flex;gap:6px">
        <button class="studio-export-badge png-badge" onclick="exportPng('paperCutPreviewBody','paper-cut-layout.png',paperCutExportInfo)" title="Export PNG"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>PNG</button>
        <button class="studio-export-badge pdf-badge" onclick="exportPdf('paperCutPreviewBody','paper-cut-layout.pdf',paperCutExportInfo)" title="Export PDF"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>PDF</button>
        </div>
      </div>
    </div>`;

  // Info cards
  let infoHtml = '<div style="margin-top:16px">';
  if (!fitsOnPaper) {
    infoHtml += `<div class="studio-info-card studio-info-warning studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Peringatan</span></div><div class="studio-info-card-body">
      <div class="studio-info-row"><span class="studio-info-row-label">Status</span><span class="studio-info-row-value" style="color:#f59e0b">Halaman tidak muat di kertas print</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Ukuran Halaman</span><span class="studio-info-row-value">${fmtDimWxH(pageDim.w+bleed*2,pageDim.h+bleed*2)}</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Kertas Print</span><span class="studio-info-row-value">${fmtDimWxH(ppW,ppH)}</span></div></div></div>`;
  }

  infoHtml += `<div class="studio-info-card studio-info-card-anim ${fitsOnPaper?'studio-info-success':'studio-info-warning'}"><div class="studio-info-card-header"><span class="studio-info-card-title">Info Potong Kertas</span></div><div class="studio-info-card-body">
    <div class="studio-info-row"><span class="studio-info-row-label">Kertas Print</span><span class="studio-info-row-value">${fmtDimWxH(ppW,ppH)}</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Ukuran Halaman</span><span class="studio-info-row-value">${fmtDimWxH(pageDim.w,pageDim.h)}</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Halaman + Bleed</span><span class="studio-info-row-value">${fmtDimWxH(pageDim.w+bleed*2,pageDim.h+bleed*2)}</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Grid</span><span class="studio-info-row-value">${cut.cols}×${cut.rows} = ${cut.totalPerPage} pcs/lembar</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Total Lembar Cetak</span><span class="studio-info-row-value">${cut.totalSheets} lembar</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Efisiensi</span><span class="studio-info-row-value" style="color:${cut.utilization>=70?'#10b981':'#f59e0b'}">${cut.utilization.toFixed(1)}%</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Margin</span><span class="studio-info-row-value">${margin}mm</span></div></div></div>`;

  // Tips Bleed vs Margin
  const bleedVal = Number(bleed)||0;
  const tipIcon = isDark
    ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
  const tipBorderColor = isDark ? '#92400e' : '#f59e0b';
  infoHtml += `<div class="studio-info-card studio-info-card-anim" style="border-color:${tipBorderColor};border-left:4px solid ${tipBorderColor}"><div class="studio-info-card-header"><span class="studio-info-card-icon">${tipIcon}</span><span class="studio-info-card-title">Tips Bleed & Margin</span></div><div class="studio-info-card-body" style="font-size:12px;line-height:1.8">
    <div style="margin-bottom:8px"><b style="color:${isDark?'#fcd34d':'#b45309'}">Cetak jumlah banyak (Pcs besar):</b> Gunakan <b>Bleed Area</b> agar hasil potong presisi — area bleed mencegah munculnya garis putih di tepi akibat pergeseran saat potong.${bleedVal===0?` <span style="color:#ef4444;font-weight:600">Bleed saat ini 0mm — disarankan min. 3mm.</span>`:''}</div>
    <div><b style="color:${isDark?'#6ee7b7':'#047857'}">Cetak sedikit (beberapa lembar):</b> Cukup gunakan <b>Area Margin</b> sebagai batas aman — tanpa bleed, kertas lebih hemat dan proses lebih simpel.${margin===0?` <span style="color:#ef4444;font-weight:600">Margin saat ini 0mm — disarankan min. 3mm.</span>`:''}</div>
  </div></div>`;

  infoHtml += `<div class="studio-info-card studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Info Warna</span></div><div class="studio-info-card-body"><div class="studio-legend">
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_paper};border:1px solid ${_paperS}"></span><span class="studio-legend-label">Kertas Print</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_pageOdd}"></span><span class="studio-legend-label">Halaman (Ganjil)</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_pageEven}"></span><span class="studio-legend-label">Halaman (Genap)</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_bleedLegend}"></span><span class="studio-legend-label">Bleed Area</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_marginLegend}"></span><span class="studio-legend-label">Margin</span></div>
  </div>
  </div></div>`;
  infoHtml += `<div class="studio-shortcut-bar">
    <span class="studio-shortcut-item">⌨ <b>Ctrl+Shift+R</b> Reset</span>
    <span class="studio-shortcut-item">⌨ <b>Ctrl+D</b> Dark Mode</span>
    <span class="studio-shortcut-item">⌨ <b>Ctrl+E</b> PNG</span>
    <span class="studio-shortcut-item">⌨ <b>Ctrl+Shift+E</b> PDF</span>
  </div>`;
  infoHtml += '</div>';
  right.innerHTML += infoHtml;

  // Setup preview interaction — use requestAnimationFrame for immediate but safe setup
  requestAnimationFrame(() => {
    setupPreviewInteraction('paperCutPreviewBody', 'papercut');
  });
}

// ============================================================
// Shared: render SVG element to an off-screen canvas (8x HD)
// Resolves CSS vars, clones SVG, draws image + info footer.
// Calls `callback(canvas, { origW, origH, infoH, svgUrl })` on success.
// ============================================================
function renderSvgToCanvas(elementId, infoLines, callback) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const svg = el.querySelector('svg');
  if (!svg) return;

  // [Bug #7] Replace CSS var() references with actual computed values
  const computedStyle = getComputedStyle(document.documentElement);
  const previewBg = computedStyle.getPropertyValue('--studio-preview-bg').trim() || '#f3f4fa';

  // Ultra HD Export — render SVG at 8x native resolution for crisp output
  const HD_SCALE = 8;
  const origW = svg.width.baseVal.value;
  const origH = svg.height.baseVal.value;

  // Calculate info footer height at 1x scale
  const INFO_PAD = 18;
  const INFO_LINE_H = 20;
  const INFO_TITLE_H = 28;
  const infoH = infoLines.length > 0 ? INFO_PAD + INFO_TITLE_H + infoLines.length * INFO_LINE_H + INFO_PAD : 0;

  const clonedSvg = svg.cloneNode(true);
  clonedSvg.style.transform = ''; // Remove zoom/pan transform for export
  clonedSvg.style.transformOrigin = '';
  clonedSvg.setAttribute('width', origW * HD_SCALE);
  clonedSvg.setAttribute('height', origH * HD_SCALE);
  let svgData = new XMLSerializer().serializeToString(clonedSvg);
  svgData = svgData.replace(/var\(--studio-preview-bg\s*,\s*[^)]+\)/g, previewBg);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = origW * HD_SCALE;
  canvas.height = (origH + infoH) * HD_SCALE;
  const img = new Image();
  // [Bug Fix] Use UTF-8 safe encoding for SVG that may contain non-ASCII chars
  const svgBlob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});
  const svgUrl = URL.createObjectURL(svgBlob);
  img.onload = function() {
    // White background
    ctx.fillStyle = isDark ? '#1a1f35' : '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Draw SVG image at top
    ctx.drawImage(img, 0, 0, origW * HD_SCALE, origH * HD_SCALE);

    // Draw info footer
    if (infoLines.length > 0) {
      const fy = origH * HD_SCALE;
      // Info background
      ctx.fillStyle = isDark ? '#141829' : '#f5f6fa';
      ctx.fillRect(0, fy, canvas.width, infoH * HD_SCALE);
      // Separator line
      ctx.strokeStyle = isDark ? '#3a3f55' : '#d0d5e0';
      ctx.lineWidth = 2 * HD_SCALE;
      ctx.beginPath();
      ctx.moveTo(0, fy);
      ctx.lineTo(canvas.width, fy);
      ctx.stroke();
      // Title
      const titleSize = 13 * HD_SCALE;
      ctx.font = `800 ${titleSize}px Poppins, Arial, sans-serif`;
      ctx.fillStyle = isDark ? '#818cf8' : '#6366f1';
      ctx.fillText('LAYOUT INFO', 20 * HD_SCALE, fy + (INFO_PAD + INFO_TITLE_H - 6) * HD_SCALE);
      // Info lines
      const lineSize = 12 * HD_SCALE;
      ctx.font = `500 ${lineSize}px Poppins, Arial, sans-serif`;
      ctx.fillStyle = isDark ? '#c4c9e0' : '#3a3f55';
      infoLines.forEach((line, i) => {
        ctx.fillText(line, 20 * HD_SCALE, fy + (INFO_PAD + INFO_TITLE_H + (i + 1) * INFO_LINE_H - 4) * HD_SCALE);
      });
    }

    callback(canvas, { origW, origH, infoH, svgUrl });
  };
  img.onerror = function() { URL.revokeObjectURL(svgUrl); showToast('Export failed — try again', 'warning'); };
  img.src = svgUrl;
}

// ============================================================
// Export PNG [Bug #7] — resolve CSS vars before export
// ============================================================
function exportPng(elementId, filename, infoLines=[]) {
  renderSvgToCanvas(elementId, infoLines, function(canvas, { svgUrl }) {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
    URL.revokeObjectURL(svgUrl);
    showToast('PNG Ultra HD exported!');
  });
}

// ============================================================
// Render Kalkulator Isi Buku Studio
// ============================================================
function renderKalkulatorIsi(skipLeftPanel=false) {
  const s = kalkulatorIsiState;
  const sigSize = Number(s.signatureSize) || 16;
  const totalPages = s.jumlahHalaman;
  const pagesPerSignature = sigSize; // sigSize = pages per signature
  const signaturesNeeded = Math.ceil(totalPages / pagesPerSignature);
  const effectiveTotalPages = signaturesNeeded * pagesPerSignature;
  const blankPages = effectiveTotalPages - totalPages;
  const isiInfo = PAPER_ISI_MAP[s.paperIsi] || {gsm:80,thickness:0.11};
  const sheetsPerSignature = sigSize / 2; // each sheet = 2 pages
  const totalSheets = signaturesNeeded * sheetsPerSignature;
  const totalLembaran = totalSheets;
  const bookDim = s.bookSize === 'Custom' ? {w:s.customW, h:s.customH} : (function() {
    const base = BOOK_SIZE_MAP[s.bookSize];
    return base ? (s.position === 'Landscape' ? {w:base.h,h:base.w} : {w:base.w,h:base.h}) : {w:210,h:297};
  })();
  const isiWeight = (bookDim.w * bookDim.h * isiInfo.gsm * totalLembaran) / 1000000;

  if (!skipLeftPanel) {
    const left = document.getElementById('kalkulatorIsiLeftPanel');
    left.innerHTML = '';
    createSectionTitle('kalkulatorIsiLeftPanel', 'Ukuran Buku');
    createDropdown('kalkulatorIsiLeftPanel', 'Ukuran Buku', BOOK_SIZES, s.bookSize, v=>{kalkulatorIsiState.bookSize=v;}, ICONS.book);
    createDropdown('kalkulatorIsiLeftPanel', 'Posisi', [{value:'Portrait',label:'Portrait'},{value:'Landscape',label:'Landscape'}], s.position, v=>{kalkulatorIsiState.position=v;}, ICONS.portrait);
    if (s.bookSize === 'Custom') {
      createDimensionInput('kalkulatorIsiLeftPanel', '', s.customW, s.customH, v=>{kalkulatorIsiState.customW=v;}, v=>{kalkulatorIsiState.customH=v;});
    }
    createSectionTitle('kalkulatorIsiLeftPanel', 'Halaman & Tanda');
    createNumberInput('kalkulatorIsiLeftPanel', 'Jumlah Halaman', s.jumlahHalaman, v=>{kalkulatorIsiState.jumlahHalaman=v;}, 1, ICONS.sheets, 99999);
    createDropdown('kalkulatorIsiLeftPanel', 'Ukuran Tanda (Signature)', SIGNATURE_OPTIONS, s.signatureSize, v=>{kalkulatorIsiState.signatureSize=v;}, ICONS.binding);
    createSectionTitle('kalkulatorIsiLeftPanel', 'Kertas Isi');
    createDropdown('kalkulatorIsiLeftPanel', 'Jenis Kertas', PAPER_ISI_OPTIONS, s.paperIsi, v=>{kalkulatorIsiState.paperIsi=v;}, ICONS.paper);
  }

  const right = document.getElementById('kalkulatorIsiRightPanel');
  right.innerHTML = '';
  let cardsHtml = '<div class="studio-result-cards">';
  cardsHtml += `<div class="studio-result-card card-blue studio-result-card-anim" onclick="copyText('${totalLembaran} lembaran');">
    <div class="studio-result-card-top"><span class="studio-result-label">Total Lembaran</span></div>
    <div class="studio-result-value">${totalLembaran}</div>
    <div class="studio-result-sub">${totalSheets} lembar cetak</div><div class="studio-result-bar"></div></div>`;
  cardsHtml += `<div class="studio-result-card card-violet studio-result-card-anim" onclick="copyText('${signaturesNeeded} tanda');">
    <div class="studio-result-card-top"><span class="studio-result-label">Jumlah Tanda</span></div>
    <div class="studio-result-value">${signaturesNeeded}</div>
    <div class="studio-result-sub">${sigSize} hal/tanda</div><div class="studio-result-bar"></div></div>`;
  cardsHtml += `<div class="studio-result-card card-sky studio-result-card-anim" onclick="copyText('${effectiveTotalPages} hal');">
    <div class="studio-result-card-top"><span class="studio-result-label">Total Hal. Efektif</span></div>
    <div class="studio-result-value">${effectiveTotalPages}</div>
    <div class="studio-result-sub">Termasuk blank page</div><div class="studio-result-bar"></div></div>`;
  if (blankPages > 0) {
    cardsHtml += `<div class="studio-result-card card-amber studio-result-card-anim" onclick="copyText('${blankPages} hal');">
      <div class="studio-result-card-top"><span class="studio-result-label">Blank Pages</span></div>
      <div class="studio-result-value">${blankPages}</div>
      <div class="studio-result-sub">Perlu ditambah agar genap</div><div class="studio-result-bar"></div></div>`;
  }
  cardsHtml += `<div class="studio-result-card card-emerald studio-result-card-anim" onclick="copyText('${formatWeight(isiWeight).value}');">
    <div class="studio-result-card-top"><span class="studio-result-label">Estimasi Berat Isi</span></div>
    <div class="studio-result-value">${formatWeight(isiWeight).value}</div>
    <div class="studio-result-sub">${isiInfo.gsm}gsm × ${totalLembaran} lbr</div><div class="studio-result-bar"></div></div>`;
  cardsHtml += '</div>';
  right.innerHTML = cardsHtml;

  // Signature layout visualization
  let infoHtml = '<div style="margin-top:16px">';
  infoHtml += `<div class="studio-info-card studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Layout Tanda (Signature)</span></div><div class="studio-info-card-body">
    <div class="studio-sig-grid">`;
  for (let sig = 0; sig < signaturesNeeded; sig++) {
    const startPage = sig * sigSize + 1;
    const endPage = Math.min((sig + 1) * sigSize, totalPages);
    const isLast = sig === signaturesNeeded - 1;
    const sigBlank = isLast ? blankPages : 0;
    infoHtml += `<div class="studio-sig-block filled" title="Tanda ${sig+1}: Hal ${startPage}-${endPage}${sigBlank > 0 ? ` (+${sigBlank} blank)` : ''}">Tanda ${sig+1}<br/><span style="font-size:9px;font-weight:500">Hal ${startPage}-${endPage}</span></div>`;
    if (sigBlank > 0) {
      infoHtml += `<div class="studio-sig-block blank" title="${sigBlank} blank pages">+${sigBlank} blank</div>`;
    }
  }
  infoHtml += `</div></div></div>`;

  // Detailed table
  infoHtml += `<div class="studio-info-card studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Detail Per Tanda</span></div><div class="studio-info-card-body">
    <table class="studio-table"><thead><tr><th>Tanda</th><th>Halaman</th><th>Lembar</th><th>Status</th></tr></thead><tbody>`;
  for (let sig = 0; sig < signaturesNeeded; sig++) {
    const startPage = sig * sigSize + 1;
    const endPage = Math.min((sig + 1) * sigSize, totalPages);
    const sigBlank = sig === signaturesNeeded - 1 ? blankPages : 0;
    const sigSheets = sigSize / 2;
    const status = sigBlank > 0 ? `+${sigBlank} blank` : 'Penuh';
    infoHtml += `<tr><td>${sig+1}</td><td>${startPage}–${endPage}${sigBlank>0?` (+${sigBlank})`:''}</td><td>${sigSheets}</td><td style="color:${sigBlank>0?'#f59e0b':'#10b981'}">${status}</td></tr>`;
  }
  infoHtml += `</tbody></table></div></div>`;

  // Tips
  infoHtml += `<div class="studio-info-card studio-info-info studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Tips Signature</span></div><div class="studio-info-card-body">
    <div class="studio-info-row"><span class="studio-info-row-label">Ukuran Tanda</span><span class="studio-info-row-value">${sigSize} halaman = ${sigSize/2} lembar per tanda</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Umum Digunakan</span><span class="studio-info-row-value">16 halaman (8 lembar) — standar offset</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Digital Print</span><span class="studio-info-row-value">4 atau 8 halaman — lebih fleksibel</span></div>
    ${blankPages > 0 ? `<div class="studio-info-row"><span class="studio-info-row-label">Solusi Blank Page</span><span class="studio-info-row-value" style="color:#f59e0b">Tambahkan ${blankPages} halaman agar genap per tanda</span></div>` : ''}
  </div></div>`;
  infoHtml += '</div>';
  right.innerHTML += infoHtml;
}

// ============================================================
// Render Referensi Kertas Studio
// ============================================================
function renderReferensiKertas() {
  const panel = document.getElementById('referensiKertasPanel');
  let html = '';

  // Search
  html += `<div class="studio-full-panel"><div class="studio-full-panel-title">Ukuran Kertas Standar</div>
    <div class="studio-search-wrapper">
      <span class="studio-search-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
      <input type="text" class="studio-search-input" placeholder="Cari ukuran kertas..." value="${referensiSearchFilter}" oninput="referensiSearchFilter=this.value;renderReferensiKertas()"/>
    </div>`;

  // Filter tabs
  const series = ['Semua','A','B','R','Lain'];
  html += `<div style="display:flex;gap:4px;margin-bottom:16px">`;
  series.forEach(s => {
    const isActive = (referensiSearchFilter === '' && s === 'Semua') || referensiSearchFilter === s;
    html += `<button class="studio-split-tab${isActive?' active':''}" onclick="referensiSearchFilter='${s==='Semua'?'':s}';renderReferensiKertas()">${s}</button>`;
  });
  html += `</div>`;

  // Paper size table
  const SERIES_TABS = ['A','B','R','Lain'];
  const filtered = PAPER_REF_SIZES.filter(p => {
    if (!referensiSearchFilter) return true;
    const lower = referensiSearchFilter.toLowerCase();
    // If filter matches a series tab, filter by series only (not by name)
    if (SERIES_TABS.some(s => s.toLowerCase() === lower)) {
      return p.series.toLowerCase() === lower;
    }
    // Otherwise search by name or series
    return p.name.toLowerCase().includes(lower) || p.series.toLowerCase().includes(lower);
  });
  html += `<div style="overflow-x:auto"><table class="studio-table"><thead><tr><th>Nama</th><th>Lebar (mm)</th><th>Tinggi (mm)</th><th>Lebar (cm)</th><th>Tinggi (cm)</th></tr></thead><tbody>`;
  filtered.forEach(p => {
    html += `<tr><td style="font-weight:700">${p.name}</td><td>${p.w}</td><td>${p.h}</td><td>${fmtNum(p.w/10)}</td><td>${fmtNum(p.h/10)}</td></tr>`;
  });
  html += `</tbody></table></div></div>`;

  // Paper weight table
  html += `<div class="studio-full-panel"><div class="studio-full-panel-title">Berat & Ketebalan Kertas</div>
    <div style="overflow-x:auto"><table class="studio-table"><thead><tr><th>Nama</th><th>GSM</th><th>Ketebalan (mm/lembar)</th><th>Tebal per Rim (mm)</th></tr></thead><tbody>`;
  PAPER_REF_WEIGHTS.forEach(p => {
    html += `<tr><td style="font-weight:700">${p.name}</td><td>${p.gsm}</td><td>${p.thickness}</td><td>${fmtNum(p.thickness*500)}</td></tr>`;
  });
  html += `</tbody></table></div></div>`;

  // Comparison overlay
  html += `<div class="studio-full-panel"><div class="studio-full-panel-title">Perbandingan Ukuran</div>
    <div style="display:flex;gap:10px;margin-bottom:16px">
      <select class="studio-number-input" style="flex:1" onchange="referensiCompareA=this.value;renderReferensiKertas()">`;
  PAPER_REF_SIZES.forEach(p => {
    html += `<option value="${p.name}"${p.name===referensiCompareA?' selected':''}>${p.name}</option>`;
  });
  html += `</select><span style="align-self:center;font-weight:800;color:var(--studio-text-secondary)">vs</span>
    <select class="studio-number-input" style="flex:1" onchange="referensiCompareB=this.value;renderReferensiKertas()">`;
  PAPER_REF_SIZES.forEach(p => {
    html += `<option value="${p.name}"${p.name===referensiCompareB?' selected':''}>${p.name}</option>`;
  });
  html += `</select></div>`;

  const paperA = PAPER_REF_SIZES.find(p => p.name === referensiCompareA) || PAPER_REF_SIZES[4];
  const paperB = PAPER_REF_SIZES.find(p => p.name === referensiCompareB) || PAPER_REF_SIZES[3];
  const maxW = Math.max(paperA.w, paperB.w);
  const maxH = Math.max(paperA.h, paperB.h);
  const scale = Math.min(400/maxW, 250/maxH, 1);
  const svgWA = paperA.w*scale, svgHA = paperA.h*scale;
  const svgWB = paperB.w*scale, svgHB = paperB.h*scale;
  const totalSvgW = maxW*scale + 60, totalSvgH = maxH*scale + 40;
  const _bg = isDark ? '#1a1f35' : '#f3f4fa';
  const _pA = isDark ? 'rgba(96,165,250,0.35)' : 'rgba(96,165,250,0.3)';
  const _pB = isDark ? 'rgba(251,146,60,0.35)' : 'rgba(251,146,60,0.3)';
  const _sA = isDark ? '#60a5fa' : '#3b82f6';
  const _sB = isDark ? '#fb923c' : '#ea580c';
  const _label = isDark ? '#94a3b8' : '#475569';

  html += `<div style="display:flex;justify-content:center"><svg width="${totalSvgW}" height="${totalSvgH}" viewBox="0 0 ${totalSvgW} ${totalSvgH}" style="font-family:'Poppins',sans-serif">
    <rect width="${totalSvgW}" height="${totalSvgH}" fill="${_bg}" rx="8"/>
    <rect x="${(totalSvgW-svgWA)/2}" y="${(totalSvgH-svgHA)/2}" width="${svgWA}" height="${svgHA}" fill="${_pA}" stroke="${_sA}" stroke-width="2" rx="4"/>
    <rect x="${(totalSvgW-svgWB)/2}" y="${(totalSvgH-svgHB)/2}" width="${svgWB}" height="${svgHB}" fill="${_pB}" stroke="${_sB}" stroke-width="2" rx="4"/>
    <text x="${totalSvgW/2}" y="${totalSvgH-6}" text-anchor="middle" font-size="11" fill="${_label}" font-weight="600">${paperA.name} (${paperA.w}×${paperA.h}mm) vs ${paperB.name} (${paperB.w}×${paperB.h}mm)</text>
  </svg></div>`;

  // Comparison details
  html += `<div style="margin-top:12px">
    <div class="studio-info-row"><span class="studio-info-row-label">${paperA.name}</span><span class="studio-info-row-value">${paperA.w}×${paperA.h}mm = ${fmtNum(paperA.w*paperA.h/100)}cm²</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">${paperB.name}</span><span class="studio-info-row-value">${paperB.w}×${paperB.h}mm = ${fmtNum(paperB.w*paperB.h/100)}cm²</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Selisih Area</span><span class="studio-info-row-value">${fmtNum(Math.abs(paperA.w*paperA.h - paperB.w*paperB.h)/100)}cm² (${paperA.w*paperA.h > paperB.w*paperB.h ? paperA.name + ' lebih besar' : paperB.name + ' lebih besar'})</span></div>
  </div></div>`;

  panel.innerHTML = html;
}

// ============================================================
// Render All
// ============================================================
function renderAll(skipLeftPanel=false) {
  if (activeTab === 'cover-layout') renderCoverLayout(skipLeftPanel);
  else if (activeTab === 'paper-cut') renderPaperCut(skipLeftPanel);
  else if (activeTab === 'kalkulator-isi') renderKalkulatorIsi(skipLeftPanel);
  else if (activeTab === 'referensi-kertas') renderReferensiKertas();
  saveState();
}

// ============================================================
// Export PDF — Feature 5
// ============================================================
function exportPdf(elementId, filename, infoLines=[]) {
  renderSvgToCanvas(elementId, infoLines, function(canvas, { origW, origH, infoH, svgUrl }) {
    const imgData = canvas.toDataURL('image/png', 1.0);
    const { jsPDF } = window.jspdf;
    // Full A4 page — scale image+info to fill A4 with proper aspect ratio
    const A4_W = 210, A4_H = 297;
    const totalH = origH + infoH;
    const imgAspect = origW / totalH;
    const a4Aspect = A4_W / A4_H;
    let pdfW, pdfH, drawW, drawH, drawX, drawY;
    if (imgAspect > a4Aspect) {
      // Landscape content — use A4 landscape
      pdfW = A4_H; pdfH = A4_W;
      drawH = pdfH; drawW = pdfH * imgAspect;
      if (drawW > pdfW) { drawW = pdfW; drawH = pdfW / imgAspect; }
      drawX = (pdfW - drawW) / 2; drawY = (pdfH - drawH) / 2;
    } else {
      // Portrait content — use A4 portrait
      pdfW = A4_W; pdfH = A4_H;
      drawW = pdfW; drawH = pdfW / imgAspect;
      if (drawH > pdfH) { drawH = pdfH; drawW = pdfH * imgAspect; }
      drawX = (pdfW - drawW) / 2; drawY = (pdfH - drawH) / 2;
    }
    const pdf = new jsPDF({ orientation: imgAspect > a4Aspect ? 'landscape' : 'portrait', unit: 'mm', format: 'a4' });
    pdf.addImage(imgData, 'PNG', drawX, drawY, drawW, drawH);
    pdf.save(filename);
    URL.revokeObjectURL(svgUrl);
    showToast('PDF Ultra HD exported (Full A4)!');
  });
}

// ============================================================
// Reset All — Feature 1
// ============================================================
function resetAll() {
  Object.assign(coverState, {
    bookSize:'A4', position:'Portrait', customW:210, customH:297,
    paperIsi:'hvs75', lembaran:200, jilid:'spiral',
    printPaper:'A3+', customPrintW:480, customPrintH:320, paperPosition:'Landscape', bleed:'0', margin:'0',
    coverIsi:'carton260'
  });
  Object.assign(paperCutState, {
    customW:148, customH:210, position:'Portrait', chacaRel:false, jumlahPcs:200,
    printPaper:'A3+', customPrintW:480, customPrintH:320, paperPosition:'Landscape',
    bleed:'0', margin:'0'
  });
  Object.assign(kalkulatorIsiState, {
    jumlahHalaman:20, bookSize:'A4', position:'Portrait', customW:210, customH:297,
    signatureSize:'4', paperIsi:'hvs75'
  });
  referensiSearchFilter = '';
  coverZoom = 0;
  paperCutZoom = 0;
  _previewState.cover.zoom = 1; _previewState.cover.panX = 0; _previewState.cover.panY = 0;
  _previewState.papercut.zoom = 1; _previewState.papercut.panX = 0; _previewState.papercut.panY = 0;
  coverSplitView = 'front';
  localStorage.removeItem('studio-cover-state');
  localStorage.removeItem('studio-papercut-state');
  localStorage.removeItem('studio-cover-zoom');
  localStorage.removeItem('studio-papercut-zoom');
  localStorage.removeItem('studio-preview-state');
  localStorage.removeItem('studio-cover-splitView');
  localStorage.removeItem('studio-active-tab');
  localStorage.removeItem('studio-kalkulator-isi-state');
  currentUnit = 'mm';
  document.querySelectorAll('.studio-dim-unit-btn').forEach(btn => btn.textContent = 'mm');
  renderAll();
  showToast('Direset ke default');
}

// ============================================================
// Save / Load State — Feature 7
// ============================================================
function saveState() {
  try {
    localStorage.setItem('studio-cover-state', JSON.stringify(coverState));
    localStorage.setItem('studio-papercut-state', JSON.stringify(paperCutState));
    localStorage.setItem('studio-cover-zoom', coverZoom);
    localStorage.setItem('studio-papercut-zoom', paperCutZoom);
    localStorage.setItem('studio-cover-splitView', coverSplitView);
    localStorage.setItem('studio-active-tab', activeTab);
    localStorage.setItem('studio-unit', currentUnit);
    localStorage.setItem('studio-kalkulator-isi-state', JSON.stringify(kalkulatorIsiState));
    // Clean up old localStorage keys from removed features
    localStorage.removeItem('studio-harga-cetak-state');
    localStorage.removeItem('studio-batch-items');
    localStorage.removeItem('studio-history');
    // Persist actual zoom/pan state so it survives page reload
    localStorage.setItem('studio-preview-state', JSON.stringify({
      cover: { zoom: _previewState.cover.zoom, panX: _previewState.cover.panX, panY: _previewState.cover.panY },
      papercut: { zoom: _previewState.papercut.zoom, panX: _previewState.papercut.panX, panY: _previewState.papercut.panY }
    }));
  } catch(e) { console.warn('BlueBee Studio: gagal menyimpan state', e); }
}
function loadState() {
  try {
    const cs = localStorage.getItem('studio-cover-state');
    if (cs) Object.assign(coverState, JSON.parse(cs));
    const ps = localStorage.getItem('studio-papercut-state');
    if (ps) Object.assign(paperCutState, JSON.parse(ps));
    const cz = localStorage.getItem('studio-cover-zoom');
    if (cz !== null) coverZoom = Number(cz);
    const pz = localStorage.getItem('studio-papercut-zoom');
    if (pz !== null) paperCutZoom = Number(pz);
    const sv = localStorage.getItem('studio-cover-splitView');
    if (sv) coverSplitView = sv;
    const at = localStorage.getItem('studio-active-tab');
    if (at) activeTab = at;
    const un = localStorage.getItem('studio-unit');
    if (un && ['mm','cm','inch'].includes(un)) currentUnit = un;
    const kis = localStorage.getItem('studio-kalkulator-isi-state');
    if (kis) Object.assign(kalkulatorIsiState, JSON.parse(kis));
    // Clean up old keys
    localStorage.removeItem('studio-harga-cetak-state');
    localStorage.removeItem('studio-batch-items');
    localStorage.removeItem('studio-history');
    // Restore actual zoom/pan state
    const pps = localStorage.getItem('studio-preview-state');
    if (pps) {
      try {
        const parsed = JSON.parse(pps);
        if (parsed.cover) {
          _previewState.cover.zoom = parsed.cover.zoom || 1;
          _previewState.cover.panX = parsed.cover.panX || 0;
          _previewState.cover.panY = parsed.cover.panY || 0;
        }
        if (parsed.papercut) {
          _previewState.papercut.zoom = parsed.papercut.zoom || 1;
          _previewState.papercut.panX = parsed.papercut.panX || 0;
          _previewState.papercut.panY = parsed.papercut.panY || 0;
        }
      } catch(e2) { console.warn('BlueBee Studio: gagal memuat preview state', e2); }
    }
  } catch(e) { console.warn('BlueBee Studio: gagal memuat state', e); }
}

// ============================================================
// Keyboard Shortcuts — Feature 6
// ============================================================
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.metaKey) {
    if ((e.key === 'r' || e.key === 'R') && e.shiftKey) { e.preventDefault(); resetAll(); showToast('Reset berhasil (Ctrl+Shift+R)', 'info'); }
    if (e.key === 'd' || e.key === 'D') { e.preventDefault(); toggleTheme(); showToast('Dark mode toggled (Ctrl+D)', 'info'); }
    if (e.key === 'u' || e.key === 'U') { e.preventDefault(); toggleUnit(); }
    if (e.key === 'e' || e.key === 'E') {
      if (e.shiftKey) {
        e.preventDefault();
        const _info = activeTab === 'cover-layout' ? coverExportInfo : paperCutExportInfo;
        if (activeTab === 'cover-layout') exportPdf('coverPreviewBody','cover-layout.pdf',_info); else exportPdf('paperCutPreviewBody','paper-cut-layout.pdf',_info);
        showToast('Export PDF (Ctrl+Shift+E)', 'info');
      } else {
        e.preventDefault();
        const _info2 = activeTab === 'cover-layout' ? coverExportInfo : paperCutExportInfo;
        if (activeTab === 'cover-layout') exportPng('coverPreviewBody','cover-layout.png',_info2); else exportPng('paperCutPreviewBody','paper-cut-layout.png',_info2);
        showToast('Export PNG (Ctrl+E)', 'info');
      }
    }
  }
  // ? key toggles shortcut help (but not when in an input)
  if (e.key === '?' && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) {
    e.preventDefault();
    toggleShortcutModal();
  }
});

// ============================================================
// Feature 3: Sidebar Toggle (mobile) — curtain handle
// ============================================================
function toggleSidebar() {
  const panels = document.querySelectorAll('.studio-left-panel');
  const existingOverlay = document.querySelector('.studio-sidebar-overlay');
  const handle = document.getElementById('sidebarToggleBtn');
  if (existingOverlay) {
    panels.forEach(p => p.classList.remove('sidebar-open'));
    existingOverlay.remove();
    if (handle) { handle.classList.remove('sidebar-open-handle'); handle.title = 'Buka sidebar'; }
    return;
  }
  // Find the active left panel
  const panelMap = {
    'cover-layout': 'coverLeftPanel',
    'paper-cut': 'paperCutLeftPanel',
    'kalkulator-isi': 'kalkulatorIsiLeftPanel'
  };
  const activePanelId = panelMap[activeTab];
  const activePanel = activePanelId ? document.getElementById(activePanelId) : null;
  if (activePanel) {
    activePanel.classList.add('sidebar-open');
    const overlay = document.createElement('div');
    overlay.className = 'studio-sidebar-overlay';
    overlay.onclick = toggleSidebar;
    document.body.appendChild(overlay);
    if (handle) { handle.classList.add('sidebar-open-handle'); handle.title = 'Tutup sidebar'; }
  }
}

// ============================================================
// Feature 4: Keyboard Shortcuts Modal
// ============================================================
function toggleShortcutModal() {
  const modal = document.getElementById('shortcutModal');
  if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    modal.innerHTML = '';
    return;
  }
  modal.classList.remove('hidden');
  modal.innerHTML = `
    <div class="studio-shortcut-modal-overlay" onclick="toggleShortcutModal()">
      <div class="studio-shortcut-modal" onclick="event.stopPropagation()">
        <div class="studio-shortcut-modal-title">Keyboard Shortcuts</div>
        <div class="studio-shortcut-modal-subtitle">Speed up your workflow</div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Dark Mode</span><span class="studio-shortcut-key">Ctrl + D</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Reset</span><span class="studio-shortcut-key">Ctrl + R</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Export PNG</span><span class="studio-shortcut-key">Ctrl + E</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Export PDF</span><span class="studio-shortcut-key">Ctrl + Shift + E</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Toggle Unit (mm/cm/inch)</span><span class="studio-shortcut-key">Ctrl + U</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Zoom Preview</span><span class="studio-shortcut-key">Scroll</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Pan Preview</span><span class="studio-shortcut-key">Drag</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Shortcut Help</span><span class="studio-shortcut-key">?</span></div>
        <button class="studio-shortcut-modal-close" onclick="toggleShortcutModal()">Close</button>
      </div>
    </div>`;
}

// ============================================================
// Feature 1: Preview Drag & Zoom Interaction
// ============================================================

function applyPreviewTransform(previewBodyId, tabType) {
  const previewBody = document.getElementById(previewBodyId);
  if (!previewBody) return;
  const svg = previewBody.querySelector('svg');
  if (!svg) return;
  const st = _previewState[tabType];
  if (!st) return;
  svg.style.transform = `translate(${st.panX}px, ${st.panY}px) scale(${st.zoom})`;
  svg.style.transformOrigin = 'center center';
}

function setupPreviewInteraction(previewBodyId, tabType) {
  let previewBody = document.getElementById(previewBodyId);
  if (!previewBody) return;
  const svg = previewBody.querySelector('svg');
  if (!svg) return;

  const st = _previewState[tabType];
  if (!st) return;

  // Apply existing transform immediately
  svg.style.transform = `translate(${st.panX}px, ${st.panY}px) scale(${st.zoom})`;
  svg.style.transformOrigin = 'center center';

  // Cleanup old interaction listeners if re-setup
  if (previewBody._abortCtrl) {
    previewBody._abortCtrl.abort();
  }
  const ctrl = new AbortController();
  previewBody._abortCtrl = ctrl;

  // ── Add click hint overlay ──
  let hintEl = previewBody.querySelector('.studio-preview-click-hint');
  if (!hintEl) {
    hintEl = document.createElement('div');
    hintEl.className = 'studio-preview-click-hint';
    hintEl.innerHTML = '<span>Ketuk untuk aktifkan drag & zoom</span>';
    previewBody.appendChild(hintEl);
  }

  // ── Active badge ──
  let badgeEl = previewBody.querySelector('.studio-preview-active-badge');

  // ── Mini Map (declared early so setActive/setInactive can reference) ──
  let minimapEl = previewBody.querySelector('.studio-minimap');
  let minimapViewport = null;
  const MINIMAP_MAX_W = 100, MINIMAP_MAX_H = 70;

  const initMinimap = () => {
    if (minimapEl) minimapEl.remove();
    minimapEl = document.createElement('div');
    minimapEl.className = 'studio-minimap';

    // Clone SVG for minimap thumbnail
    const svgClone = svg.cloneNode(true);
    const mw = MINIMAP_MAX_W, mh = MINIMAP_MAX_H;
    const svgAspect = svg.width.baseVal.value / svg.height.baseVal.value;
    let finalW, finalH;
    if (svgAspect > mw / mh) { finalW = mw; finalH = mw / svgAspect; }
    else { finalH = mh; finalW = mh * svgAspect; }
    svgClone.style.transform = '';
    svgClone.style.width = finalW + 'px';
    svgClone.style.height = finalH + 'px';
    svgClone.style.display = 'block';
    svgClone.removeAttribute('id');

    minimapEl.style.width = finalW + 'px';
    minimapEl.style.height = finalH + 'px';
    minimapEl.appendChild(svgClone);

    minimapViewport = document.createElement('div');
    minimapViewport.className = 'studio-minimap-viewport';
    minimapEl.appendChild(minimapViewport);

    previewBody.appendChild(minimapEl);
  };

  const updateMinimap = () => {
    if (!minimapEl || !minimapViewport) return;
    const zoom = st.zoom;
    if (zoom <= 1.05) {
      minimapEl.style.opacity = '0';
      return;
    }
    const svgW = svg.width.baseVal.value;
    const svgH = svg.height.baseVal.value;
    const mmW = minimapEl.offsetWidth || MINIMAP_MAX_W;
    const mmH = minimapEl.offsetHeight || MINIMAP_MAX_H;

    const bodyRect = previewBody.getBoundingClientRect();
    const visW = bodyRect.width / zoom;
    const visH = bodyRect.height / zoom;
    const centerX = svgW / 2 - st.panX / zoom;
    const centerY = svgH / 2 - st.panY / zoom;

    const scaleMM = mmW / svgW;
    const vpLeft = Math.max(0, (centerX - visW / 2) * scaleMM);
    const vpTop = Math.max(0, (centerY - visH / 2) * scaleMM);
    const vpW = Math.min(mmW - vpLeft, visW * scaleMM);
    const vpH = Math.min(mmH - vpTop, visH * scaleMM);

    minimapViewport.style.left = vpLeft + 'px';
    minimapViewport.style.top = vpTop + 'px';
    minimapViewport.style.width = vpW + 'px';
    minimapViewport.style.height = vpH + 'px';
  };

  initMinimap();

  const setActive = () => {
    previewBody.classList.add('preview-active');
    if (hintEl) hintEl.style.display = 'none';
    if (!badgeEl) {
      badgeEl = document.createElement('div');
      badgeEl.className = 'studio-preview-active-badge';
      badgeEl.textContent = 'Aktif';
      previewBody.appendChild(badgeEl);
    } else {
      badgeEl.style.display = '';
    }
    updateMinimap();
  };

  const setInactive = () => {
    previewBody.classList.remove('preview-active');
    previewBody.classList.remove('dragging');
    st.isDragging = false;
    if (hintEl) hintEl.style.display = '';
    if (badgeEl) badgeEl.style.display = 'none';
    if (minimapEl) minimapEl.style.opacity = '0';
  };

  // ── Click to activate / deactivate ──
  let dragOccurred = false;
  previewBody.addEventListener('click', (e) => {
    if (previewBody.classList.contains('preview-active')) {
      // Only deactivate on a pure click (no meaningful drag happened)
      if (!dragOccurred) setInactive();
      dragOccurred = false;
    } else {
      setActive();
    }
  }, { signal: ctrl.signal });

  // ── Deactivate when clicking outside ──
  document.addEventListener('mousedown', (e) => {
    if (!previewBody.contains(e.target) && previewBody.classList.contains('preview-active')) {
      setInactive();
    }
  }, { signal: ctrl.signal });

  document.addEventListener('touchstart', (e) => {
    if (!previewBody.contains(e.target) && previewBody.classList.contains('preview-active')) {
      setInactive();
    }
  }, { signal: ctrl.signal });

  // Helper: apply transform to SVG
  const applyTransform = () => {
    const svgEl = previewBody.querySelector('svg');
    if (svgEl) {
      svgEl.style.transform = `translate(${st.panX}px, ${st.panY}px) scale(${st.zoom})`;
      svgEl.style.transformOrigin = 'center center';
    }
    updateMinimap();
  };

  // Helper: sync zoom variable (reset zoom bar tracking when user scroll/pinch zooms)
  const syncZoom = () => {
    // When user zooms via scroll/pinch, clear the zoom bar preset
    // so the zoom bar buttons deselect (since the zoom no longer matches any preset)
    if (tabType === 'cover') coverZoom = 0;
    else paperCutZoom = 0;
    updateZoomBarActive(tabType);
  };

  // ── Wheel zoom (desktop) — only when active ──
  previewBody.addEventListener('wheel', (e) => {
    if (!previewBody.classList.contains('preview-active')) return;
    e.preventDefault();
    e.stopPropagation();

    const oldZoom = st.zoom;
    const rawDelta = Math.abs(e.deltaY);
    // deltaMode: 0=pixel (trackpad), 1=line (mouse wheel), 2=page
    const multiplier = e.deltaMode === 1 ? 17 : e.deltaMode === 2 ? 400 : 1;
    const normalizedDelta = Math.max(0.3, rawDelta * multiplier * 0.004);
    const delta = e.deltaY > 0 ? -normalizedDelta : normalizedDelta;
    let newZoom = Math.round((oldZoom + delta) * 100) / 100;
    newZoom = Math.max(0.15, Math.min(5.0, newZoom));

    // Zoom toward cursor position
    const rect = previewBody.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    const scale = newZoom / oldZoom;
    st.panX = mouseX - scale * (mouseX - st.panX);
    st.panY = mouseY - scale * (mouseY - st.panY);
    st.zoom = newZoom;

    syncZoom();
    applyTransform();
  }, { passive: false, signal: ctrl.signal });

  // ── Mouse drag pan (desktop) — only when active ──
  previewBody.addEventListener('mousedown', (e) => {
    if (!previewBody.classList.contains('preview-active')) return;
    if (e.button !== 0) return;
    dragOccurred = false;
    st.isDragging = true;
    st.startX = e.clientX - st.panX;
    st.startY = e.clientY - st.panY;
    previewBody.classList.add('dragging');
    e.preventDefault();
  }, { signal: ctrl.signal });

  const onMouseMove = (e) => {
    if (!st.isDragging) return;
    dragOccurred = true;
    st.panX = e.clientX - st.startX;
    st.panY = e.clientY - st.startY;
    applyTransform();
  };

  const onMouseUp = () => {
    if (st.isDragging) {
      st.isDragging = false;
      previewBody.classList.remove('dragging');
    }
  };

  document.addEventListener('mousemove', onMouseMove, { signal: ctrl.signal });
  document.addEventListener('mouseup', onMouseUp, { signal: ctrl.signal });

  // ── Touch: drag (1 finger) & pinch zoom (2 fingers) — only when active ──
  let lastTouchDist = 0;
  let lastTouchCenter = { x: 0, y: 0 };
  let touchMode = ''; // 'drag' or 'pinch'

  previewBody.addEventListener('touchstart', (e) => {
    if (!previewBody.classList.contains('preview-active')) return;
    if (e.touches.length === 1) {
      // Single finger: drag
      touchMode = 'drag';
      dragOccurred = false;
      st.isDragging = true;
      st.startX = e.touches[0].clientX - st.panX;
      st.startY = e.touches[0].clientY - st.panY;
      previewBody.classList.add('dragging');
    } else if (e.touches.length === 2) {
      // Two fingers: pinch zoom
      touchMode = 'pinch';
      st.isDragging = false;
      previewBody.classList.remove('dragging');
      const dx = e.touches[1].clientX - e.touches[0].clientX;
      const dy = e.touches[1].clientY - e.touches[0].clientY;
      lastTouchDist = Math.sqrt(dx * dx + dy * dy);
      lastTouchCenter = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2
      };
    }
    e.preventDefault();
  }, { passive: false, signal: ctrl.signal });

  previewBody.addEventListener('touchmove', (e) => {
    if (!previewBody.classList.contains('preview-active')) return;
    if (touchMode === 'drag' && e.touches.length === 1) {
      dragOccurred = true;
      st.panX = e.touches[0].clientX - st.startX;
      st.panY = e.touches[0].clientY - st.startY;
      applyTransform();
      e.preventDefault();
    } else if (touchMode === 'pinch' && e.touches.length === 2) {
      const dx = e.touches[1].clientX - e.touches[0].clientX;
      const dy = e.touches[1].clientY - e.touches[0].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const center = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2
      };

      if (lastTouchDist > 0) {
        const oldZoom = st.zoom;
        const pinchScale = dist / lastTouchDist;
        let newZoom = Math.round(oldZoom * pinchScale * 100) / 100;
        newZoom = Math.max(0.15, Math.min(5.0, newZoom));

        // Zoom toward pinch center
        const rect = previewBody.getBoundingClientRect();
        const cx = center.x - rect.left - rect.width / 2;
        const cy = center.y - rect.top - rect.height / 2;

        const scale = newZoom / oldZoom;
        st.panX = cx - scale * (cx - st.panX);
        st.panY = cy - scale * (cy - st.panY);
        st.zoom = newZoom;

        // Also pan with finger movement
        st.panX += center.x - lastTouchCenter.x;
        st.panY += center.y - lastTouchCenter.y;

        syncZoom();
        applyTransform();
      }

      lastTouchDist = dist;
      lastTouchCenter = center;
      e.preventDefault();
    }
  }, { passive: false, signal: ctrl.signal });

  // ── Double-tap guard: track if a pinch gesture just ended ──
  let pinchJustEnded = false;
  let lastTap = 0;

  previewBody.addEventListener('touchend', (e) => {
    if (e.touches.length === 0) {
      touchMode = '';
      st.isDragging = false;
      previewBody.classList.remove('dragging');
      lastTouchDist = 0;
      // Double-tap detection (guarded against pinch release)
      if (!pinchJustEnded) {
        const now = Date.now();
        if (now - lastTap < 300) {
          // Double tap — reset to auto-fit
          st.panX = 0; st.panY = 0; st.zoom = 1;
          if (tabType === 'cover') coverZoom = 0;
          else paperCutZoom = 0;
          applyTransform();
          updateZoomBarActive(tabType);
        }
        lastTap = now;
      } else {
        lastTap = 0;
      }
    } else if (e.touches.length === 1 && touchMode === 'pinch') {
      // Switched from pinch to single finger — start drag from current position
      touchMode = 'drag';
      st.isDragging = true;
      st.startX = e.touches[0].clientX - st.panX;
      st.startY = e.touches[0].clientY - st.panY;
      lastTouchDist = 0;
      // Pinch just ended — set flag to block double-tap detection
      pinchJustEnded = true;
      setTimeout(() => { pinchJustEnded = false; }, 400);
    }
  }, { signal: ctrl.signal });

  // Reset pan & zoom
  previewBody._resetPan = () => {
    st.panX = 0; st.panY = 0; st.zoom = 1;
    if (tabType === 'cover') coverZoom = 0;
    else paperCutZoom = 0;
    const svgEl = previewBody.querySelector('svg');
    if (svgEl) {
      svgEl.style.transform = '';
    }
  };
}

function updateZoomBarActive(tabType) {
  const panelId = tabType === 'cover' ? 'coverRightPanel' : 'paperCutRightPanel';
  const panel = document.getElementById(panelId);
  if (!panel) return;
  const zoomBtns = panel.querySelectorAll('.studio-zoom-btn');
  const st = _previewState[tabType];
  // Check if current CSS transform zoom matches any zoom bar preset
  const currentZoomBarVal = tabType === 'cover' ? coverZoom : paperCutZoom;
  // Compute what CSS zoom should be for current zoom bar value
  // Fit (0) → CSS zoom 1, others → v / autoFitScale
  const autoFitScale = st.autoFitScale || 1;
  const expectedCssZoom = currentZoomBarVal === 0 ? 1 : currentZoomBarVal / autoFitScale;
  const matchesPreset = Math.abs(st.zoom - expectedCssZoom) < 0.02;

  zoomBtns.forEach(btn => {
    const onclick = btn.getAttribute('onclick') || '';
    const match = onclick.match(/=(\d+(?:\.\d+)?)/);
    if (match) {
      const v = parseFloat(match[1]);
      // Only highlight if the preset matches the current zoom
      if (matchesPreset) {
        btn.classList.toggle('active', Math.abs(v - currentZoomBarVal) < 0.01);
      } else {
        btn.classList.remove('active');
      }
    }
  });
}

// ============================================================
// Init [Bug #5] Fix theme icon from localStorage
// ============================================================
(function init() {
  loadState();
  const saved = localStorage.getItem('studio-theme');
  if (saved === 'dark') {
    isDark = true;
    document.documentElement.classList.add('dark');
    // [Bug #5] Update theme toggle icon to sun when dark mode is restored
    updateThemeIcon();
  }
  // Restore active tab from saved state
  const validTabs = ['cover-layout','paper-cut','kalkulator-isi','referensi-kertas'];
  if (activeTab && validTabs.includes(activeTab)) {
    switchTab(activeTab);
  } else {
    renderAll();
  }
})();
