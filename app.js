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
const PRINT_PAPER_MAP = {A4:{w:297,h:210},A3:{w:420,h:297},'A3+':{w:480,h:320},LongCarton:{w:640,h:320}}; // NOTE: LongCarton stored as landscape w x h; PAPER_REF_SIZES uses portrait w x h

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

// [NEW] Global options untuk inline dropdown di Perbandingan Ukuran (Referensi Kertas).
// Perlu di-expose ke global scope karena dipanggil dari inline onclick.
// Format: [{value, label}, ...] sesuai kontrak openDropdownMenuAt.
const __PAPER_REF_OPTIONS__ = PAPER_REF_SIZES.map(p => ({value: p.name, label: p.name + ' (' + p.w + '×' + p.h + 'mm)'}));

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
  twoSides: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><line x1="12" y1="2" x2="12" y2="22" stroke-dasharray="2,2"/></svg>',
  jilid: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><circle cx="9" cy="11" r="0.5" fill="currentColor"/><circle cx="9" cy="14" r="0.5" fill="currentColor"/><circle cx="9" cy="17" r="0.5" fill="currentColor"/></svg>',

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
    // Deliberate fallback: navigator.clipboard.writeText (above) may fail in non-HTTPS / older browsers
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
  printPaper:'A3+', customPrintW:480, customPrintH:320, paperPosition:'Landscape', paperPositionAuto:true, bleed:'0', margin:'0',
  coverIsi:'carton260'
};
let coverZoom = 0;
let coverSplitView = 'front'; // [Bug #9] Track which half is shown in split mode

const paperCutState = {
  customW:148, customH:210, position:'Portrait', chacaRel:false, jumlahPcs:200,
  printPaper:'A3+', customPrintW:480, customPrintH:320, paperPosition:'Landscape', paperPositionAuto:true,
  bleed:'0', margin:'0'
};
let paperCutZoom = 0;
let coverExportInfo = [];   // info lines for export
let paperCutExportInfo = []; // info lines for export

// New tab states
const kalkulatorIsiState = {
  jumlahHalaman:20, bookSize:'A4', position:'Portrait', customW:210, customH:297,
  duaSisi:true,
  printPaper:'A3+', customPrintW:480, customPrintH:320, paperPosition:'Landscape', paperPositionAuto:true,
  bleed:'0', margin:'0',
  // [NEW] Untuk kartu Tebal Punggung & Spiral Number di mode ISI
  paperIsi:'hvs75',     // default HVS 75gsm
  jilid:'spiral'        // 'soft' | 'hard' | 'spiral' — default Spiral Kawat
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
    'kalkulator-isi': {title:'Perhitungan ISI', subtitle:'Hitung jumlah tanda & lembar cetak isi buku', icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>'},
    'referensi-kertas': {title:'Referensi Kertas', subtitle:'Database ukuran & berat kertas', icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>'}
  };
  const info = tabInfo[tab] || tabInfo['cover-layout'];
  document.getElementById('headerTitle').textContent = info.title;
  document.getElementById('headerSubtitle').textContent = info.subtitle;
  document.title = info.title + ' — BlueBee Studio';
  document.getElementById('headerIcon').innerHTML = info.icon;

  // [Bug fix] Hide sidebar toggle on tabs without a left panel (e.g. Referensi)
  const sidebarBtn = document.getElementById('sidebarToggleBtn');
  if (sidebarBtn) {
    if (tab === 'referensi-kertas') {
      sidebarBtn.style.display = 'none';
      // Close sidebar if currently open
      const panels = document.querySelectorAll('.studio-left-panel');
      panels.forEach(p => p.classList.remove('sidebar-open'));
      const overlay = document.querySelector('.studio-sidebar-overlay');
      if (overlay) overlay.remove();
      sidebarBtn.classList.remove('sidebar-open-handle');
    } else {
      sidebarBtn.style.display = '';
    }
  }

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

// [NEW] Reusable helper: open a dropdown menu anchored to any trigger element.
// Pakai logic yang sama dengan createDropdown (termasuk flash-fix di pojok kiri atas),
// tapi tidak perlu attach ke container — cocok untuk button inline di template literal.
//
// options: [{value, label}, ...]
// currentValue: nilai yang sedang aktif (untuk highlight 'active')
// onChange: callback(value) — dipanggil saat user pilih item
// ariaLabel: optional, untuk a11y
function openDropdownMenuAt(trigger, options, currentValue, onChange, ariaLabel) {
  // Toggle close jika menu yang terbuka milik trigger ini
  const existingMenu = document.querySelector('.studio-dropdown-menu');
  if (existingMenu && existingMenu._trigger === trigger) {
    trigger.setAttribute('aria-expanded', 'false');
    existingMenu.classList.add('closing');
    const target = existingMenu;
    setTimeout(() => { if (target.parentNode) target.remove(); }, 180);
    return;
  }
  closeAllDropdowns();
  const menu = document.createElement('div');
  menu.className = 'studio-dropdown-menu';
  menu._trigger = trigger;
  menu.setAttribute('role', 'listbox');
  if (ariaLabel) menu.setAttribute('aria-label', ariaLabel);
  options.forEach((opt, i) => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'studio-dropdown-item' + (opt.value === currentValue ? ' active' : '');
    item.textContent = opt.label;
    item.setAttribute('role', 'option');
    item.setAttribute('aria-selected', opt.value === currentValue ? 'true' : 'false');
    item.addEventListener('click', (ev) => {
      ev.stopPropagation();
      onChange(opt.value);
      menu.remove();
      trigger.setAttribute('aria-expanded', 'false');
      renderAll();
    });
    menu.appendChild(item);
  });
  // [Flash fix] Sama dengan createDropdown — disable animation, posisi off-screen,
  // write final coords, reflow, baru enable animation.
  document.body.appendChild(menu);
  const triggerRect = trigger.getBoundingClientRect();
  const triggerWidth = triggerRect.width;
  const viewportH = window.innerHeight;
  const viewportW = window.innerWidth;
  menu.style.animation = 'none';
  menu.style.visibility = 'hidden';
  menu.style.left = '-9999px';
  menu.style.top = '0';
  menu.style.width = triggerWidth + 'px';
  menu.style.minWidth = '';
  const menuH = menu.offsetHeight;
  let top = triggerRect.bottom + 6;
  if (top + menuH > viewportH - 10) top = triggerRect.top - menuH - 6;
  let left = triggerRect.left;
  if (left + triggerWidth > viewportW - 10) left = viewportW - triggerWidth - 10;
  menu.style.top = top + 'px';
  menu.style.left = Math.max(10, left) + 'px';
  menu.style.visibility = '';
  void menu.offsetWidth;
  menu.style.animation = '';
  trigger.setAttribute('aria-expanded', 'true');
  // Focus first item
  const firstItem = menu.querySelector('.studio-dropdown-item');
  if (firstItem) firstItem.focus();
  return menu;
}

function closeAllDropdowns() {
  document.querySelectorAll('.studio-dropdown-menu').forEach(m => {
    // Reset aria-expanded on the trigger that opened this menu
    if (m._trigger) {
      m._trigger.setAttribute('aria-expanded', 'false');
      m._trigger.setAttribute('aria-activedescendant', '');
      const arrow = m._trigger.querySelector('.studio-dropdown-arrow');
      if (arrow) arrow.classList.remove('open');
    }
    // Premium close animation: fade-out then remove
    if (!m.classList.contains('closing')) {
      m.classList.add('closing');
      const target = m;
      setTimeout(() => { if (target.parentNode) target.remove(); }, 180);
    }
  });
  // Fallback: ensure any orphan arrows are cleared
  document.querySelectorAll('.studio-dropdown-arrow.open').forEach(a => a.classList.remove('open'));
}
window.addEventListener('resize', closeAllDropdowns);

// [A11y] Keyboard accessibility for result cards - delegated
document.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('studio-result-card')) {
    e.preventDefault(); e.target.click();
  }
});
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

  const triggerId = 'dd_' + Math.random().toString(36).slice(2,10);
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
    const existingMenu = document.querySelector('.studio-dropdown-menu');
    // [Bug fix] Only toggle-close if the open menu belongs to THIS trigger.
    // Otherwise, close all and open this one (previously: clicking a different
    // dropdown required two clicks).
    if (existingMenu && existingMenu._trigger === trigger) {
      // Premium close: animate then remove
      trigger.setAttribute('aria-expanded', 'false');
      trigger.setAttribute('aria-activedescendant', '');
      trigger.querySelector('.studio-dropdown-arrow').classList.remove('open');
      existingMenu.classList.add('closing');
      const target = existingMenu;
      setTimeout(() => { if (target.parentNode) target.remove(); }, 180);
      return;
    }
    closeAllDropdowns();
    const menu = document.createElement('div');
    menu.className = 'studio-dropdown-menu';
    menu._trigger = trigger; // track owner for toggle logic
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
    // Append to body to avoid clipping by scrollable parents
    document.body.appendChild(menu);
    const triggerRect = trigger.getBoundingClientRect();
    const triggerWidth = triggerRect.width;
    const viewportH = window.innerHeight;
    const viewportW = window.innerWidth;
    // Measure menu height after appending (width must be set first so the
    // height reflects the wrapped layout, not the unbounded shrink-to-fit).
    //
    // [BUG FIX] Prevent flash at top-left corner:
    // The menu has `animation: dropdown-in` defined in CSS, which starts
    // running the moment the element is appended to the DOM. During the
    // measurement phase we set `left:0; top:0` and toggle `visibility`, but
    // the animation still progresses and the element briefly paints at the
    // top-left of the viewport before its final position is applied.
    //
    // Fix: disable animation during measurement, then re-enable it AFTER
    // the final coordinates are written. Also position the element off-screen
    // (left:-9999px) while measuring so no paint occurs in the visible area.
    menu.style.animation = 'none';
    menu.style.visibility = 'hidden';
    menu.style.left = '-9999px';
    menu.style.top = '0';
    // Set the menu width to match the trigger width exactly. Previously the
    // menu used `width: auto` (shrink-to-fit) with `min-width: triggerWidth`,
    // but because the items have `width: 100%` the shrink-to-fit resolved
    // against the containing block (the viewport for fixed elements), making
    // the menu span almost the entire viewport. Pinning width to the trigger
    // keeps the menu aligned with the sidebar; long labels are truncated with
    // ellipsis via the CSS on `.studio-dropdown-item`.
    menu.style.width = triggerWidth + 'px';
    menu.style.minWidth = '';
    const menuH = menu.offsetHeight;
    // Position below trigger; flip above if no room
    let top = triggerRect.bottom + 6;
    if (top + menuH > viewportH - 10) {
      top = triggerRect.top - menuH - 6;
    }
    let left = triggerRect.left;
    if (left + triggerWidth > viewportW - 10) {
      left = viewportW - triggerWidth - 10;
    }
    // [BUG FIX] Write final coordinates FIRST, then un-hide and re-enable
    // animation in a single reflow. This guarantees the element never paints
    // at the placeholder position.
    menu.style.top = top + 'px';
    menu.style.left = Math.max(10, left) + 'px';
    menu.style.visibility = '';
    // Force a reflow so the browser commits the new position before the
    // animation is re-enabled; otherwise some engines batch the style change
    // and still run the animation from the off-screen position.
    void menu.offsetWidth;
    menu.style.animation = '';
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

  const inputId = 'num_' + Math.random().toString(36).slice(2,10);
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
  // [Fix] Validate initial value (e.g. corrupted localStorage)
  applyValue();
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
  const dimIdW = 'dimW_' + Math.random().toString(36).slice(2,8);
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
  const dimIdH = 'dimH_' + Math.random().toString(36).slice(2,8);
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

  const cbId = 'toggle_' + Math.random().toString(36).slice(2,10);
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
  // [Bug #6 fixed] Only auto-update when user hasn't manually overridden (paperPositionAuto !== false)
  if (s.paperPositionAuto !== false) { s.paperPosition = autoPos; }
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
    createDropdown('coverLeftPanel', 'Kertas Cover', PAPER_ISI_OPTIONS.filter(p => { const info = PAPER_ISI_MAP[p.value]; return info && (info.type === 'Carton' || info.type === 'Art Paper'); }), s.coverIsi, v=>{coverState.coverIsi=v;}, ICONS.paper);

    createSectionTitle('coverLeftPanel', 'Kertas Print');
    createDropdown('coverLeftPanel', 'Kertas Print', PRINT_PAPER_OPTIONS, s.printPaper, v=>{coverState.printPaper=v;}, ICONS.printPaper);
    if (s.printPaper === 'Custom') {
      createDimensionInput('coverLeftPanel', '', s.customPrintW, s.customPrintH, v=>{coverState.customPrintW=v;}, v=>{coverState.customPrintH=v;});
    }
    createDropdown('coverLeftPanel', 'Posisi Kertas', [{value:'Auto',label:'Auto'},{value:'Landscape',label:'Landscape'},{value:'Portrait',label:'Portrait'}], (s.paperPositionAuto!==false?'Auto':s.paperPosition), v=>{ if(v==='Auto'){coverState.paperPositionAuto=true;} else {coverState.paperPositionAuto=false; coverState.paperPosition=v;} }, ICONS.landscape);
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
  cardsHtml += `<div class="studio-result-card card-blue studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${fmtMm(spine)}');">
    <div class="studio-result-card-top"><span class="studio-result-label">Tebal Punggung</span></div>
    <div class="studio-result-value">${fmtMm(spine)}</div>
    <div class="studio-result-sub">${fmtSecondaryUnit(spine)}</div>
    <div class="studio-result-bar"></div>
  </div>`;
  cardsHtml += spiralCardHtml;
  if (s.jilid === 'spiral') {
    cardsHtml += `<div class="studio-result-card card-rose studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${fmtMm(bookDim.w)} x ${fmtMm(bookDim.h)}');">
      <div class="studio-result-card-top"><span class="studio-result-label">Ukuran Cover</span></div>
      <div class="studio-result-value" style="font-size:18px">${fmtMm(bookDim.w)} x ${fmtMm(bookDim.h)}</div>
      <div class="studio-result-sub">Tanpa Bleed</div>
      <div class="studio-result-bar"></div>
    </div>`;
  }
  if (showBentangCards) {
    cardsHtml += `<div class="studio-result-card card-sky studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${fmtMm(totalBentang)}');">
      <div class="studio-result-card-top"><span class="studio-result-label">Total Bentang</span></div>
      <div class="studio-result-value">${fmtMm(totalBentang)}</div>
      <div class="studio-result-sub">${fmtSecondaryUnit(totalBentang)}</div>
      <div class="studio-result-bar"></div>
    </div>`;
  }
  cardsHtml += `<div class="studio-result-card card-amber studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${fw.value}');">
    <div class="studio-result-card-top"><span class="studio-result-label">Estimasi Berat</span></div>
    <div class="studio-result-value">${fw.value}</div>
    <div class="studio-result-sub">${fw.sub}</div>
    <div class="studio-result-bar"></div>
  </div>`;
  if (showBentangCards) {
    cardsHtml += `<div class="studio-result-card card-emerald studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${fmtMm(totalBentang+bleed*2)}');">
      <div class="studio-result-card-top"><span class="studio-result-label">Bentang + Bleed</span></div>
      <div class="studio-result-value">${fmtMm(totalBentang+bleed*2)}</div>
      <div class="studio-result-sub">${fmtSecondaryUnit(totalBentang+bleed*2)}</div>
      <div class="studio-result-bar"></div>
    </div>`;
  }
  // For spiral, show cover dimensions
  if (displayMode === 'spiral') {
    cardsHtml += `<div class="studio-result-card card-sky studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${fmtMm(bookDim.w+bleed*2)} x ${fmtMm(bookDim.h+bleed*2)}');">
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

  right.innerHTML += `<button class="studio-copy-all-btn" data-copy="${coverCopyText.join('&#10;').replace(/"/g,'&quot;')}" onclick="copyText(this.dataset.copy)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy Semua Hasil</button><div class="studio-copy-all-spacer"></div>`;

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
    <span class="studio-shortcut-item">⌨ <b>Ctrl+Shift+D</b> Dark Mode</span>
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
  else if (s.paperPositionAuto !== false) { s.paperPosition = autoPos; }
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
    const paperPosOptions = s.chacaRel ? [{value:'Landscape',label:'Landscape'}] : [{value:'Auto',label:'Auto'},{value:'Landscape',label:'Landscape'},{value:'Portrait',label:'Portrait'}];
    createDropdown('paperCutLeftPanel', s.chacaRel ? 'Posisi Kertas (Landscape Only)' : 'Posisi Kertas', paperPosOptions, (s.chacaRel?'Landscape':(s.paperPositionAuto!==false?'Auto':s.paperPosition)), v=>{ if(v==='Auto'){paperCutState.paperPositionAuto=true;} else {paperCutState.paperPositionAuto=false; paperCutState.paperPosition=v;} }, ICONS.landscape);
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
    <div class="studio-result-card card-blue studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${cut.totalPerPage} pcs');">
      <div class="studio-result-card-top"><span class="studio-result-label">Pcs Per Lembar</span></div>
      <div class="studio-result-value">${cut.totalPerPage} pcs</div>
      <div class="studio-result-sub">${cut.cols}×${cut.rows} grid</div>
      <div class="studio-result-bar"></div>
    </div>
    <div class="studio-result-card card-sky studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${cut.totalSheets} lbr');">
      <div class="studio-result-card-top"><span class="studio-result-label">Total Lembar Cetak</span></div>
      <div class="studio-result-value">${cut.totalSheets} lbr</div>
      <div class="studio-result-sub">${totalPcs} pcs ÷ ${cut.totalPerPage}/lbr</div>
      <div class="studio-result-bar"></div>
    </div>
    <div class="studio-result-card card-rose studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${totalPcs} pcs');">
      <div class="studio-result-card-top"><span class="studio-result-label">Total Pcs</span></div>
      <div class="studio-result-value">${totalPcs} pcs</div>
      <div class="studio-result-sub">Jumlah yang dicetak</div>
      <div class="studio-result-bar"></div>
    </div>
    <div class="studio-result-card ${cut.utilization>=70?'card-emerald':'card-amber'} studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${cut.utilization.toFixed(1)}%');">
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

  right.innerHTML += `<button class="studio-copy-all-btn" data-copy="${paperCopyText.join('&#10;').replace(/"/g,'&quot;')}" onclick="copyText(this.dataset.copy)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy Semua Hasil</button><div class="studio-copy-all-spacer"></div>`;

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
    <span class="studio-shortcut-item">⌨ <b>Ctrl+Shift+D</b> Dark Mode</span>
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
// Render Perhitungan ISI Buku Studio
// ============================================================
function renderKalkulatorIsi(skipLeftPanel=false) {
  const s = kalkulatorIsiState;
  const totalPages = Number(s.jumlahHalaman) || 0;
  const pagesPerSheet = s.duaSisi ? 2 : 1;
  const totalLembaran = totalPages > 0 ? Math.ceil(totalPages / pagesPerSheet) : 0;
  // NOTE: effectiveTotalPages & blankPages are computed later (after pagesPerPrintSheet)

  // Book dimension (with position orientation)
  const bookDim = s.bookSize === 'Custom' ? {w:Number(s.customW)||210, h:Number(s.customH)||297} : (function() {
    const base = BOOK_SIZE_MAP[s.bookSize];
    return base ? (s.position === 'Landscape' ? {w:base.h,h:base.w} : {w:base.w,h:base.h}) : {w:210,h:297};
  })();

  // Print paper layout (imposition)
  // Bleed & margin follow Cut Studio convention:
  //   - pageW/pageH include per-page bleed (bookDim + 2*bleed), used for layout & visualization
  //   - imposition usable area = ppDim - 2*margin (bleed is INSIDE margin, not added on top)
  const bleed = Number(s.bleed) || 0;
  const margin = Number(s.margin) || 0;
  const pageW = bookDim.w + bleed * 2;
  const pageH = bookDim.h + bleed * 2;
  const ppBase = s.printPaper === 'Custom' ? {w:Number(s.customPrintW)||480, h:Number(s.customPrintH)||320} : (PRINT_PAPER_MAP[s.printPaper] || {w:480,h:320});

  // Auto-pick paper orientation that yields the most pages per side
  // (tie-breaker: higher utilization, then Landscape as final fallback)
  function fitFor(orient) {
    const w = orient === 'Landscape' ? ppBase.w : ppBase.h;
    const h = orient === 'Landscape' ? ppBase.h : ppBase.w;
    const uW = Math.max(0, w - margin * 2);
    const uH = Math.max(0, h - margin * 2);
    const c = pageW > 0 ? Math.max(0, Math.floor(uW / pageW)) : 0;
    const r = pageH > 0 ? Math.max(0, Math.floor(uH / pageH)) : 0;
    const slots = c * r;
    const used = c * pageW * r * pageH;
    const total = w * h;
    const util = total > 0 ? (used / total) * 100 : 0;
    return {cols:c, rows:r, slots, util};
  }
  const fitL = fitFor('Landscape');
  const fitP = fitFor('Portrait');
  const autoPos = (fitP.slots > fitL.slots) ? 'Portrait'
                : (fitL.slots > fitP.slots) ? 'Landscape'
                : (fitP.util > fitL.util) ? 'Portrait'
                : 'Landscape';
  if (s.paperPositionAuto !== false) { s.paperPosition = autoPos; }

  const ppDim = s.paperPosition === 'Landscape' ? {w:ppBase.w, h:ppBase.h} : {w:ppBase.h, h:ppBase.w};
  // Usable area for grid = paper minus margin on both sides (bleed sits inside this)
  const usableW = Math.max(0, ppDim.w - margin * 2);
  const usableH = Math.max(0, ppDim.h - margin * 2);
  const cols = pageW > 0 ? Math.max(0, Math.floor(usableW / pageW)) : 0;
  const rows = pageH > 0 ? Math.max(0, Math.floor(usableH / pageH)) : 0;
  const pagesPerSide = cols * rows;
  const pagesPerPrintSheet = pagesPerSide * pagesPerSheet;
  const printSheetsNeeded = pagesPerPrintSheet > 0 ? Math.ceil(totalPages / pagesPerPrintSheet) : 0;
  // Effective total = rounded up to fill complete lembar cetak (covers 2-sisi rounding implicitly)
  const effectiveTotalPages = printSheetsNeeded * pagesPerPrintSheet;
  const blankPages = Math.max(0, effectiveTotalPages - totalPages);
  // Blank equivalents in lembar units (alternative ways to fill the blank slots)
  const blankLembar2Sisi = Math.ceil(blankPages / 2);  // each lembar 2-sisi holds 2 hal
  const blankLembar1Sisi = blankPages;                 // each lembar 1-sisi holds 1 hal
  const usedW = cols * pageW, usedH = rows * pageH;
  const totalArea = ppDim.w * ppDim.h;
  const usedArea = usedW * usedH;
  const utilization = totalArea > 0 ? (usedArea / totalArea) * 100 : 0;
  const wasteArea = Math.max(0, totalArea - usedArea);

  // [NEW] Tebal Punggung & Spiral Number — pakai totalLembaran sebagai jumlah lembar isi
  // Mengikuti konvensi mode COVER (calcSpineThickness & getSpiralInfo)
  const isiSpine       = calcSpineThickness(totalLembaran, s.paperIsi);
  const isiSpineInfo   = PAPER_ISI_MAP[s.paperIsi] || {name:'-'};
  const isiSpiralInfo  = (s.jilid === 'spiral') ? getSpiralInfo(isiSpine) : {number:null, outOfRange:true};

  // Left panel — rebuild only on structural change
  if (!skipLeftPanel) {
    const left = document.getElementById('kalkulatorIsiLeftPanel');
    left.innerHTML = '';

    createSectionTitle('kalkulatorIsiLeftPanel', 'Ukuran Buku');
    createDropdown('kalkulatorIsiLeftPanel', 'Ukuran Buku', BOOK_SIZES, s.bookSize, v=>{kalkulatorIsiState.bookSize=v;}, ICONS.book);
    createDropdown('kalkulatorIsiLeftPanel', 'Posisi', [{value:'Portrait',label:'Portrait'},{value:'Landscape',label:'Landscape'}], s.position, v=>{kalkulatorIsiState.position=v;}, ICONS.portrait);
    if (s.bookSize === 'Custom') {
      createDimensionInput('kalkulatorIsiLeftPanel', '', s.customW, s.customH, v=>{kalkulatorIsiState.customW=v;}, v=>{kalkulatorIsiState.customH=v;});
    }

    createSectionTitle('kalkulatorIsiLeftPanel', 'Halaman');
    createNumberInput('kalkulatorIsiLeftPanel', 'Jumlah Halaman', s.jumlahHalaman, v=>{kalkulatorIsiState.jumlahHalaman=v;}, 1, ICONS.sheets, 99999);

    createSectionTitle('kalkulatorIsiLeftPanel', 'Cetak');
    createToggle('kalkulatorIsiLeftPanel', '2 Sisi (On/Off)', !!s.duaSisi, v=>{kalkulatorIsiState.duaSisi=v;}, ICONS.twoSides, 'ON = 1 lembar untuk 2 halaman, OFF = 1 lembar untuk 1 halaman');

    // [NEW] Kertas Isi & Jilid — dipakai untuk kartu Tebal Punggung & Spiral Number
    createSectionTitle('kalkulatorIsiLeftPanel', 'Kertas Isi');
    createDropdown('kalkulatorIsiLeftPanel', 'Kertas Isi', PAPER_ISI_OPTIONS, s.paperIsi, v=>{kalkulatorIsiState.paperIsi=v;}, ICONS.paper);
    createDropdown('kalkulatorIsiLeftPanel', 'Jilid', JILID_OPTIONS, s.jilid, v=>{kalkulatorIsiState.jilid=v;}, ICONS.jilid);

    createSectionTitle('kalkulatorIsiLeftPanel', 'Kertas Print');
    createDropdown('kalkulatorIsiLeftPanel', 'Kertas Print', PRINT_PAPER_OPTIONS, s.printPaper, v=>{kalkulatorIsiState.printPaper=v;}, ICONS.printPaper);
    if (s.printPaper === 'Custom') {
      createDimensionInput('kalkulatorIsiLeftPanel', '', s.customPrintW, s.customPrintH, v=>{kalkulatorIsiState.customPrintW=v;}, v=>{kalkulatorIsiState.customPrintH=v;});
    }
    createDropdown('kalkulatorIsiLeftPanel', 'Posisi Kertas', [{value:'Auto',label:'Auto'},{value:'Landscape',label:'Landscape'},{value:'Portrait',label:'Portrait'}], (s.paperPositionAuto!==false?'Auto':s.paperPosition), v=>{ if(v==='Auto'){kalkulatorIsiState.paperPositionAuto=true;} else {kalkulatorIsiState.paperPositionAuto=false; kalkulatorIsiState.paperPosition=v;} }, ICONS.landscape);
    createDropdown('kalkulatorIsiLeftPanel', 'Bleed Area', BLEED_OPTIONS, s.bleed, v=>{kalkulatorIsiState.bleed=v;}, ICONS.bleed);
    createDropdown('kalkulatorIsiLeftPanel', 'Margin Kertas', PAPER_CUT_MARGIN_OPTIONS, s.margin, v=>{kalkulatorIsiState.margin=v;}, ICONS.margin);
  }

  // Right panel — result cards
  const right = document.getElementById('kalkulatorIsiRightPanel');
  right.innerHTML = '';
  let cardsHtml = '<div class="studio-result-cards">';

  // 1) Total Lembaran
  cardsHtml += `<div class="studio-result-card card-blue studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${totalLembaran} lembaran');">
    <div class="studio-result-card-top"><span class="studio-result-label">Total Lembaran</span></div>
    <div class="studio-result-value">${totalLembaran}</div>
    <div class="studio-result-sub">${pagesPerSheet} hal/lembar</div><div class="studio-result-bar"></div></div>`;

  // 2) Total Halaman
  // [BUG FIX] Saat layout tidak muat (pagesPerPrintSheet = 0), effectiveTotalPages = 0
  // yang membingungkan user karena menginput mis. 20 halaman tapi kartu tampil 0.
  // Tampilkan totalPages (input) saat layout tidak muat; tampilkan effectiveTotalPages
  // (sudah dibulatkan ke lembar cetak) saat layout muat.
  const totalHalamanDisplay = (pagesPerPrintSheet > 0) ? effectiveTotalPages : totalPages;
  const totalHalamanSub = (pagesPerPrintSheet > 0)
    ? (effectiveTotalPages > totalPages ? `${effectiveTotalPages - totalPages} blank` : 'Halaman')
    : 'Tidak termasik lembar cetak';
  cardsHtml += `<div class="studio-result-card card-sky studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${totalHalamanDisplay} hal');">
    <div class="studio-result-card-top"><span class="studio-result-label">Total Halaman</span></div>
    <div class="studio-result-value">${totalHalamanDisplay}</div>
    <div class="studio-result-sub">${totalHalamanSub}</div><div class="studio-result-bar"></div></div>`;

  // (opsional) Blank Kosongan — tetap di antara Total Halaman dan Hal/Lembar Cetak
  if (blankPages > 0) {
    cardsHtml += `<div class="studio-result-card card-amber studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${blankPages} hal = ${blankLembar2Sisi} lembar 2 sisi atau ${blankLembar1Sisi} lembar 1 sisi');">
      <div class="studio-result-card-top"><span class="studio-result-label">Blank Kosongan</span></div>
      <div class="studio-result-value">${blankPages}</div>
      <div class="studio-result-sub">${blankLembar2Sisi} lembar 2 sisi atau ${blankLembar1Sisi} lembar 1 sisi</div><div class="studio-result-bar"></div></div>`;
  }

  // 3) Hal/Lembar Cetak  &  4) Lembar Cetak
  if (pagesPerPrintSheet > 0) {
    cardsHtml += `<div class="studio-result-card card-violet studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${pagesPerPrintSheet} hal');">
      <div class="studio-result-card-top"><span class="studio-result-label">Hal/Lembar Cetak</span></div>
      <div class="studio-result-value">${pagesPerPrintSheet}</div>
      <div class="studio-result-sub">${cols}×${rows}${s.duaSisi?' × 2 sisi':''}</div><div class="studio-result-bar"></div></div>`;
    cardsHtml += `<div class="studio-result-card card-emerald studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${printSheetsNeeded} lbr');">
      <div class="studio-result-card-top"><span class="studio-result-label">Lembar Cetak</span></div>
      <div class="studio-result-value">${printSheetsNeeded}</div>
      <div class="studio-result-sub">${s.printPaper} per lembar</div><div class="studio-result-bar"></div></div>`;
  }

  // 5) Tebal Punggung — [NEW] mengikuti mode COVER
  if (totalLembaran > 0) {
    cardsHtml += `<div class="studio-result-card card-blue studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${fmtMm(isiSpine)}');">
      <div class="studio-result-card-top"><span class="studio-result-label">Tebal Punggung</span></div>
      <div class="studio-result-value">${fmtMm(isiSpine)}</div>
      <div class="studio-result-sub">${isiSpineInfo.name} · ${fmtSecondaryUnit(isiSpine)}</div><div class="studio-result-bar"></div></div>`;
  }

  // 6) Spiral Number — [NEW] hanya tampil jika jilid = spiral
  if (s.jilid === 'spiral') {
    if (isiSpiralInfo.outOfRange) {
      cardsHtml += `<div class="studio-result-card card-warning studio-result-card-anim" role="button" tabindex="0" onclick="copyText('Spiral: Di Luar Ukuran');">
        <div class="studio-result-card-top"><span class="studio-result-label">Spiral Number</span></div>
        <div class="studio-result-value" style="font-size:14px;">Di Luar Ukuran</div>
        <div class="studio-result-sub">Tebal punggung ${fmtMm(isiSpine)} melebihi max ${fmtMm(SPIRAL_SIZES[SPIRAL_SIZES.length-1].maxSpine)}</div><div class="studio-result-bar"></div></div>`;
    } else {
      const maxSpineForNum = SPIRAL_SIZES.find(x=>x.number===isiSpiralInfo.number)?.maxSpine || 0;
      cardsHtml += `<div class="studio-result-card card-violet studio-result-card-anim" role="button" tabindex="0" onclick="copyText('Spiral #${isiSpiralInfo.number}');">
        <div class="studio-result-card-top"><span class="studio-result-label">Spiral Number</span></div>
        <div class="studio-result-value">#${isiSpiralInfo.number}</div>
        <div class="studio-result-sub">Max ${fmtMm(maxSpineForNum)}</div><div class="studio-result-bar"></div></div>`;
    }
  }
  cardsHtml += '</div>';
  right.innerHTML = cardsHtml;

  // Info cards
  let infoHtml = '<div style="margin-top:16px">';

  // Imposition layout card
  if (pagesPerPrintSheet > 0) {
    // [BUG FIX] Label dinamis: tunjukkan mode Auto/Manual sebenarnya
    const posisiModeLabel = s.paperPositionAuto !== false ? 'Posisi Kertas (Auto)' : 'Posisi Kertas (Manual)';

    // [BUG FIX] Hitung orientasi terbaik & apakah pilihan user sub-optimal
    const bestOrient = (fitL.slots > fitP.slots) ? 'Landscape'
                     : (fitP.slots > fitL.slots) ? 'Portrait'
                     : (fitL.util >= fitP.util) ? 'Landscape' : 'Portrait';
    const bestSlots = Math.max(fitL.slots, fitP.slots);
    const currentSlots = s.paperPosition === 'Landscape' ? fitL.slots : fitP.slots;
    const isSuboptimal = (s.paperPositionAuto === false) && (bestSlots > currentSlots);

    infoHtml += `<div class="studio-info-card studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Layout Imposisi (per sisi)</span></div><div class="studio-info-card-body">
      <div class="studio-info-row"><span class="studio-info-row-label">Ukuran Buku + Bleed</span><span class="studio-info-row-value">${fmtMm(pageW)} × ${fmtMm(pageH)} (${fmtMm(bookDim.w)}+${fmtMm(bleed)}×2)</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Kertas Print</span><span class="studio-info-row-value">${s.printPaper} — ${fmtMm(ppDim.w)} × ${fmtMm(ppDim.h)}</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Area Cetak</span><span class="studio-info-row-value">${fmtMm(usableW)} × ${fmtMm(usableH)} (margin ${fmtMm(margin)}×2, bleed di dalam)</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Grid</span><span class="studio-info-row-value">floor(${fmtMm(usableW)} ÷ ${fmtMm(pageW)}) = ${cols} kolom × ${rows} baris = ${pagesPerSide} slot/sisi</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">${posisiModeLabel}</span><span class="studio-info-row-value">${s.paperPosition} — Landscape: ${fitL.cols}×${fitL.rows}=${fitL.slots} slot, Portrait: ${fitP.cols}×${fitP.rows}=${fitP.slots} slot</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Efisiensi Kertas</span><span class="studio-info-row-value">${utilization.toFixed(1)}% (sisa ${fmtNum(wasteArea)} mm²)</span></div>
    </div></div>`;

    // [NEW] Warning card: orientasi manual sub-optimal
    // Tampil saat user pilih Portrait/Landscape manual, padahal orientasi lain memberi slot lebih banyak.
    // Memberi tombol "Gunakan Auto" untuk switch ke orientasi terbaik dalam 1 klik.
    if (isSuboptimal) {
      const subIcon = isDark
        ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
        : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
      const subBorder = isDark ? '#92400e' : '#f59e0b';
      const subAccent = isDark ? '#fcd34d' : '#b45309';
      const subBtnBg = isDark ? '#92400e' : '#f59e0b';
      const subBtnText = '#fff';
      const potentialSheets = Math.ceil(totalPages / (bestSlots * pagesPerSheet));
      const savedSheets = printSheetsNeeded - potentialSheets;
      infoHtml += `<div class="studio-info-card studio-info-card-anim" style="border-color:${subBorder};border-left:4px solid ${subBorder}"><div class="studio-info-card-header"><span class="studio-info-card-icon">${subIcon}</span><span class="studio-info-card-title">Orientasi Sub-Optimal</span></div><div class="studio-info-card-body" style="font-size:12px;line-height:1.8">
        <div style="margin-bottom:8px">Posisi kertas <b style="color:${subAccent}">${s.paperPosition}</b> hanya muat <b>${currentSlots} slot/sisi</b>. Beralih ke <b style="color:${subAccent}">${bestOrient}</b> memuat <b>${bestSlots} slot/sisi</b> (${bestSlots > currentSlots ? `${(bestSlots/currentSlots).toFixed(1)}× lebih banyak` : 'lebih efisien'}).${savedSheets > 0 ? ` Hemat <b style="color:#10b981">${savedSheets} lembar cetak</b> (${printSheetsNeeded} → ${potentialSheets}).` : ''}</div>
        <button type="button" onclick="kalkulatorIsiState.paperPositionAuto=true; kalkulatorIsiState.paperPosition='${bestOrient}'; renderAll();" style="background:${subBtnBg};color:${subBtnText};border:none;padding:8px 14px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:6px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Gunakan ${bestOrient} (Auto) — ${bestSlots} slot
        </button>
      </div></div>`;
    }

    // Min. Bleed 2mm — info card (match Tips Bleed & Margin style)
    const minBleedIcon = isDark
      ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
      : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    const minBleedBorder = isDark ? '#92400e' : '#f59e0b';
    infoHtml += `<div class="studio-info-card studio-info-card-anim" style="border-color:${minBleedBorder};border-left:4px solid ${minBleedBorder}"><div class="studio-info-card-header"><span class="studio-info-card-icon">${minBleedIcon}</span><span class="studio-info-card-title">Min. Bleed 2mm</span></div><div class="studio-info-card-body" style="font-size:12px;line-height:1.8">
      <div style="margin-bottom:8px"><b style="color:${isDark?'#fcd34d':'#b45309'}">Wajib minimal bleed 2mm</b> untuk semua ukuran — mencegah <i>white edge</i> akibat pergeseran saat potong.${bleed>0&&bleed<2?` <span style="color:#ef4444;font-weight:600">Bleed saat ini ${bleed}mm — kurang dari 2mm!</span>`:''}${bleed===0?` <span style="color:#ef4444;font-weight:600">Bleed saat ini 0mm — wajib set min. 2mm.</span>`:''}</div>
      <div><b style="color:${isDark?'#6ee7b7':'#047857'}">Rekomendasi Margin 5–10mm</b> agar mesin cutter punya ruang aman dan kertas tidak terpotong miring.</div>
    </div></div>`;

    // Detail per lembar cetak
    infoHtml += `<div class="studio-info-card studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Detail Per Lembar Cetak</span></div><div class="studio-info-card-body">
      <table class="studio-table"><thead><tr><th>Lembar</th><th>Halaman</th><th>Sisi</th><th>Status</th></tr></thead><tbody>`;
    for (let sh = 0; sh < printSheetsNeeded; sh++) {
      const startPage = sh * pagesPerPrintSheet + 1;
      const endPage = Math.min((sh + 1) * pagesPerPrintSheet, totalPages);
      const isLast = sh === printSheetsNeeded - 1;
      const shBlank = isLast ? blankPages : 0;
      const status = shBlank > 0 ? `+${shBlank} blank` : 'Penuh';
      infoHtml += `<tr><td>${sh+1}</td><td>${startPage}–${endPage}${shBlank>0?` (+${shBlank})`:''}</td><td>${s.duaSisi?'2 sisi':'1 sisi'}</td><td style="color:${shBlank>0?'#f59e0b':'#10b981'}">${status}</td></tr>`;
    }
    infoHtml += `</tbody></table></div></div>`;
  } else {
    infoHtml += `<div class="studio-info-card studio-info-info studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Layout Tidak Muat</span></div><div class="studio-info-card-body">
      <div class="studio-info-row"><span class="studio-info-row-label">Ukuran Buku + Bleed</span><span class="studio-info-row-value">${fmtMm(pageW)} × ${fmtMm(pageH)}</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Kertas Print</span><span class="studio-info-row-value">${s.printPaper} — ${fmtMm(ppDim.w)} × ${fmtMm(ppDim.h)}</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Area Cetak</span><span class="studio-info-row-value">${fmtMm(usableW)} × ${fmtMm(usableH)} (margin ${fmtMm(margin)}×2)</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Status</span><span class="studio-info-row-value" style="color:#f59e0b">Halaman buku melebihi area cetak. Pilih kertas lebih besar, kurangi bleed, atau kurangi margin.</span></div>
    </div></div>`;
  }

  // Tips
  infoHtml += `<div class="studio-info-card studio-info-info studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Tips Perhitungan</span></div><div class="studio-info-card-body">
    <div class="studio-info-row"><span class="studio-info-row-label">Mode Cetak</span><span class="studio-info-row-value">${s.duaSisi?'2 Sisi (Duplex) — 1 lembar = 2 halaman':'1 Sisi — 1 lembar = 1 halaman'}</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Total Lembaran</span><span class="studio-info-row-value">${totalPages} hal ÷ ${pagesPerSheet} = ${totalLembaran} lembar</span></div>
    ${pagesPerPrintSheet > 0 ? `<div class="studio-info-row"><span class="studio-info-row-label">Total Lembar Cetak</span><span class="studio-info-row-value">${totalPages} hal ÷ ${pagesPerPrintSheet}/lbr = ${printSheetsNeeded} lembar ${s.printPaper}</span></div>` : ''}
    ${blankPages > 0 ? `<div class="studio-info-row"><span class="studio-info-row-label">Solusi Blank Page</span><span class="studio-info-row-value" style="color:#f59e0b">${blankPages} hal kosong = ${blankLembar2Sisi} lembar 2 sisi atau ${blankLembar1Sisi} lembar 1 sisi</span></div>` : ''}
  </div></div>`;
  infoHtml += '</div>';
  right.innerHTML += infoHtml;
}

// ============================================================
// Render Referensi Kertas Studio
// ============================================================
function renderReferensiKertas() {
  const panel = document.getElementById('referensiKertasPanel');
  // [Bug fix] Capture search input focus & caret before re-render so we can restore it.
  // Previously: panel.innerHTML = html destroyed the input, forcing user to click again after every keystroke.
  const prevSearchInput = panel.querySelector('.studio-search-input');
  const hadFocus = prevSearchInput && document.activeElement === prevSearchInput;
  const caretStart = prevSearchInput ? prevSearchInput.selectionStart : null;
  const caretEnd = prevSearchInput ? prevSearchInput.selectionEnd : null;
  let html = '';

  // Search
  // [BUG FIX] Escape user input sebelum interpolate ke HTML attribute.
  // Sebelumnya: value="${referensiSearchFilter}" raw — user input `"` atau
  // `"><img onerror=...>` bisa memutus atribut HTML / menyuntik markup (XSS).
  // Meskipun self-XSS, state persist di localStorage → bisa menyebar via share.
  function escapeHtmlAttr(str) {
    return String(str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/'/g,'&#39;');
  }
  const escapedSearch = escapeHtmlAttr(referensiSearchFilter);
  html += `<div class="studio-full-panel"><div class="studio-full-panel-title">Ukuran Kertas Standar</div>
    <div class="studio-search-wrapper">
      <span class="studio-search-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
      <input type="text" class="studio-search-input" placeholder="Cari ukuran kertas..." value="${escapedSearch}" oninput="referensiSearchFilter=this.value;renderReferensiKertas()"/>
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

  // Comparison overlay — [NEW] 3 kolom horizontal: Buttons | Preview | Keterangan
  const paperA = PAPER_REF_SIZES.find(p => p.name === referensiCompareA) || PAPER_REF_SIZES[4];
  const paperB = PAPER_REF_SIZES.find(p => p.name === referensiCompareB) || PAPER_REF_SIZES[3];
  const areaA = paperA.w * paperA.h;
  const areaB = paperB.w * paperB.h;
  const selisihArea = Math.abs(areaA - areaB) / 100;
  const paperLebihBesar = areaA > areaB ? paperA.name : (areaB > areaA ? paperB.name : null);
  const rasioStr = (areaA > 0 && areaB > 0)
    ? (areaA > areaB
        ? `${paperA.name} ${fmtNum(areaA/areaB)}× ${paperB.name}`
        : `${paperB.name} ${fmtNum(areaB/areaA)}× ${paperA.name}`)
    : '';

  // ============================================================
  // PERBANDINGAN UKURAN — Premium Balanced Redesign
  // ============================================================
  // Layout: 3-kolom seimbang via CSS Grid (1fr 1.25fr 1fr)
  // Visual: card-based, subtle gradients, layered shadows, consistent rhythm
  // SVG: nested rectangles (larger behind, smaller in front), proper aspect ratio
  // ============================================================

  // --- Color tokens (premium palette) ---
  const _cmp = {
    bg:         isDark ? '#0f1428' : '#fafbfd',
    cardBg:     isDark ? '#161b30' : '#ffffff',
    cardBorder: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.06)',
    trackBg:    isDark ? 'rgba(255,255,255,0.03)' : 'rgba(15,23,42,0.025)',
    textSec:    isDark ? '#94a3b8' : '#64748b',
    A: {
      solid:    isDark ? '#60a5fa' : '#3b82f6',
      soft:     isDark ? 'rgba(96,165,250,0.12)' : 'rgba(59,130,246,0.08)',
      softer:   isDark ? 'rgba(96,165,250,0.06)' : 'rgba(59,130,246,0.04)',
      fill:     isDark ? 'rgba(96,165,250,0.28)' : 'rgba(59,130,246,0.22)',
      gradient: isDark ? 'linear-gradient(135deg, rgba(96,165,250,0.18), rgba(96,165,250,0.04))'
                       : 'linear-gradient(135deg, rgba(59,130,246,0.10), rgba(59,130,246,0.02))'
    },
    B: {
      solid:    isDark ? '#fb923c' : '#ea580c',
      soft:     isDark ? 'rgba(251,146,60,0.12)' : 'rgba(234,88,12,0.08)',
      softer:   isDark ? 'rgba(251,146,60,0.06)' : 'rgba(234,88,12,0.04)',
      fill:     isDark ? 'rgba(251,146,60,0.28)' : 'rgba(234,88,12,0.22)',
      gradient: isDark ? 'linear-gradient(135deg, rgba(251,146,60,0.18), rgba(251,146,60,0.04))'
                       : 'linear-gradient(135deg, rgba(234,88,12,0.10), rgba(234,88,12,0.02))'
    },
    G: {
      solid:    isDark ? '#34d399' : '#10b981',
      soft:     isDark ? 'rgba(52,211,153,0.12)' : 'rgba(16,185,129,0.08)',
      gradient: isDark ? 'linear-gradient(135deg, rgba(52,211,153,0.15), rgba(52,211,153,0.04))'
                       : 'linear-gradient(135deg, rgba(16,185,129,0.10), rgba(16,185,129,0.02))'
    }
  };

  html += `<div class="studio-full-panel studio-cmp-panel" style="background:${_cmp.bg};border:1px solid ${_cmp.cardBorder};border-radius:20px;padding:24px;box-shadow:${isDark?'none':'0 1px 3px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.04)'}">`;

  // Header dengan title + subtitle
  html += `<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:8px">
    <div>
      <div style="font-size:18px;font-weight:800;color:var(--studio-text);letter-spacing:-0.2px">Perbandingan Ukuran</div>
      <div style="font-size:12px;color:${_cmp.textSec};margin-top:2px">Pilih dua ukuran kertas untuk membandingkan luas area</div>
    </div>
    ${rasioStr ? `<div style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:${_cmp.G.soft};border:1px solid ${_cmp.G.soft};border-radius:999px;font-size:12px;font-weight:700;color:${_cmp.G.solid}">⚡ ${rasioStr}</div>` : ''}
  </div>`;

  // === GRID 3-KOLOM SEIMBANG ===
  html += `<div class="studio-cmp-grid" style="display:grid;grid-template-columns:1fr 1.25fr 1fr;gap:20px;align-items:stretch">`;

  // ---------------- KOLOM 1: SELECTOR ----------------
  // Dua button premium dengan VS di tengah
  html += `<div style="display:flex;flex-direction:column;gap:12px;justify-content:center;align-items:stretch">`;
  // Button A
  html += `<button type="button" id="refCompareBtnA" aria-haspopup="listbox" aria-expanded="false"
    onclick="event.stopPropagation(); openDropdownMenuAt(this, __PAPER_REF_OPTIONS__, referensiCompareA, v=>{referensiCompareA=v;}, 'Pilih kertas A')"
    style="background:${_cmp.cardBg};background-image:${_cmp.A.gradient};border:1.5px solid ${_cmp.A.solid};color:var(--studio-text);padding:18px 20px;border-radius:14px;cursor:pointer;display:flex;align-items:center;gap:14px;transition:all 0.2s ease;font-family:inherit;box-shadow:0 1px 2px rgba(0,0,0,0.04);width:100%;text-align:left">
    <div style="flex:0 0 auto;width:44px;height:44px;border-radius:10px;background:${_cmp.A.soft};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:${_cmp.A.solid};letter-spacing:-0.5px">${paperA.name}</div>
    <div style="flex:1;min-width:0">
      <div style="font-size:11px;font-weight:600;color:${_cmp.A.solid};text-transform:uppercase;letter-spacing:0.6px">Kertas A</div>
      <div style="font-size:18px;font-weight:800;color:var(--studio-text);line-height:1.2;margin-top:2px">${paperA.name}</div>
      <div style="font-size:11px;color:${_cmp.textSec};margin-top:2px">${paperA.w}×${paperA.h}mm</div>
    </div>
    <div style="flex:0 0 auto;color:${_cmp.A.solid};opacity:0.6;font-size:10px">▼</div>
  </button>`;
  // VS divider
  html += `<div style="display:flex;align-items:center;justify-content:center;gap:10px;padding:2px 0">
    <div style="flex:1;height:1px;background:${_cmp.cardBorder}"></div>
    <div style="font-size:11px;font-weight:800;color:${_cmp.textSec};letter-spacing:2px;padding:4px 14px;background:${_cmp.trackBg};border:1px solid ${_cmp.cardBorder};border-radius:999px">VS</div>
    <div style="flex:1;height:1px;background:${_cmp.cardBorder}"></div>
  </div>`;
  // Button B
  html += `<button type="button" id="refCompareBtnB" aria-haspopup="listbox" aria-expanded="false"
    onclick="event.stopPropagation(); openDropdownMenuAt(this, __PAPER_REF_OPTIONS__, referensiCompareB, v=>{referensiCompareB=v;}, 'Pilih kertas B')"
    style="background:${_cmp.cardBg};background-image:${_cmp.B.gradient};border:1.5px solid ${_cmp.B.solid};color:var(--studio-text);padding:18px 20px;border-radius:14px;cursor:pointer;display:flex;align-items:center;gap:14px;transition:all 0.2s ease;font-family:inherit;box-shadow:0 1px 2px rgba(0,0,0,0.04);width:100%;text-align:left">
    <div style="flex:0 0 auto;width:44px;height:44px;border-radius:10px;background:${_cmp.B.soft};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:${_cmp.B.solid};letter-spacing:-0.5px">${paperB.name}</div>
    <div style="flex:1;min-width:0">
      <div style="font-size:11px;font-weight:600;color:${_cmp.B.solid};text-transform:uppercase;letter-spacing:0.6px">Kertas B</div>
      <div style="font-size:18px;font-weight:800;color:var(--studio-text);line-height:1.2;margin-top:2px">${paperB.name}</div>
      <div style="font-size:11px;color:${_cmp.textSec};margin-top:2px">${paperB.w}×${paperB.h}mm</div>
    </div>
    <div style="flex:0 0 auto;color:${_cmp.B.solid};opacity:0.6;font-size:10px">▼</div>
  </button>`;
  html += `</div>`;

  // ---------------- KOLOM 2: PREVIEW SVG ----------------
  // Premium canvas: nested rectangles dengan grid background
  // Logic: kertas yang LEBIH BESAR digambar duluan (di belakang), lebih kecil di depan
  const bigPaper   = areaA >= areaB ? paperA : paperB;
  const smallPaper = areaA >= areaB ? paperB : paperA;
  const bigColor   = areaA >= areaB ? _cmp.A : _cmp.B;
  const smallColor = areaA >= areaB ? _cmp.B : _cmp.A;

  const canvasW = 420, canvasH = 320, pad = 36;
  const maxDim  = Math.max(bigPaper.w, bigPaper.h);
  const scale   = Math.min((canvasW - pad*2) / bigPaper.w, (canvasH - pad*2) / bigPaper.h);
  const bigW    = bigPaper.w * scale;
  const bigH    = bigPaper.h * scale;
  const smW     = smallPaper.w * scale;
  const smH     = smallPaper.h * scale;
  const bigX    = (canvasW - bigW) / 2;
  const bigY    = (canvasH - bigH) / 2;
  const smX     = (canvasW - smW) / 2;
  const smY     = (canvasH - smH) / 2;

  html += `<div style="background:${_cmp.cardBg};border:1px solid ${_cmp.cardBorder};border-radius:14px;padding:16px;display:flex;flex-direction:column;align-items:stretch;box-shadow:0 1px 2px rgba(0,0,0,0.04)">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;padding:0 4px">
      <span style="font-size:11px;font-weight:700;color:${_cmp.textSec};text-transform:uppercase;letter-spacing:0.6px">Preview</span>
      <div style="display:flex;gap:10px;font-size:10px;color:${_cmp.textSec}">
        <span style="display:inline-flex;align-items:center;gap:4px"><span style="width:8px;height:8px;border-radius:2px;background:${_cmp.A.solid}"></span>${paperA.name}</span>
        <span style="display:inline-flex;align-items:center;gap:4px"><span style="width:8px;height:8px;border-radius:2px;background:${_cmp.B.solid}"></span>${paperB.name}</span>
      </div>
    </div>
    <svg width="100%" viewBox="0 0 ${canvasW} ${canvasH}" style="font-family:'Poppins',sans-serif;height:auto;display:block;border-radius:8px;background:${_cmp.trackBg}">
      <!-- Grid background (subtle dotted) -->
      <defs>
        <pattern id="cmpGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.7" fill="${isDark?'rgba(255,255,255,0.05)':'rgba(15,23,42,0.05)'}"/>
        </pattern>
      </defs>
      <rect width="${canvasW}" height="${canvasH}" fill="url(#cmpGrid)"/>
      <!-- Larger rectangle (behind) -->
      <rect x="${bigX}" y="${bigY}" width="${bigW}" height="${bigH}" fill="${bigColor.fill}" stroke="${bigColor.solid}" stroke-width="2" rx="4"/>
      <!-- Smaller rectangle (in front, overlapping centered) -->
      <rect x="${smX}" y="${smY}" width="${smW}" height="${smH}" fill="${smallColor.fill}" stroke="${smallColor.solid}" stroke-width="2" rx="4"/>
      <!-- Labels: positioned at top-right of each rect, with connector dot -->
      <g>
        <circle cx="${bigX + bigW - 10}" cy="${bigY + 12}" r="3" fill="${bigColor.solid}"/>
        <text x="${bigX + bigW - 16}" y="${bigY + 16}" text-anchor="end" font-size="13" fill="${bigColor.solid}" font-weight="800">${bigPaper.name}</text>
      </g>
      <g>
        <circle cx="${smX + smW - 10}" cy="${smY + 12}" r="3" fill="${smallColor.solid}"/>
        <text x="${smX + smW - 16}" y="${smY + 16}" text-anchor="end" font-size="13" fill="${smallColor.solid}" font-weight="800">${smallPaper.name}</text>
      </g>
      <!-- Dimension labels: subtle text at bottom of each rect -->
      <text x="${bigX + bigW/2}" y="${bigY + bigH + 14}" text-anchor="middle" font-size="9" fill="${_cmp.textSec}" font-weight="500">${bigPaper.w}×${bigPaper.h}mm</text>
      <text x="${smX + smW/2}" y="${smY + smH - 6}" text-anchor="middle" font-size="9" fill="${smallColor.solid}" font-weight="600" opacity="0.8">${smallPaper.w}×${smallPaper.h}mm</text>
    </svg>
  </div>`;

  // ---------------- KOLOM 3: STATS / KETERANGAN ----------------
  html += `<div style="display:flex;flex-direction:column;gap:10px;justify-content:center">`;
  // Card A
  html += `<div style="background:${_cmp.cardBg};background-image:${_cmp.A.gradient};border:1px solid ${_cmp.A.soft};border-radius:12px;padding:14px 16px;display:flex;align-items:center;gap:12px;box-shadow:0 1px 2px rgba(0,0,0,0.03)">
    <div style="flex:0 0 auto;width:36px;height:36px;border-radius:8px;background:${_cmp.A.soft};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:${_cmp.A.solid}">${paperA.name}</div>
    <div style="flex:1;min-width:0">
      <div style="font-size:10px;font-weight:600;color:${_cmp.A.solid};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:2px">Kertas A</div>
      <div style="font-size:13px;color:var(--studio-text);font-weight:600;line-height:1.3">${paperA.w}×${paperA.h}mm</div>
    </div>
    <div style="text-align:right">
      <div style="font-size:18px;font-weight:800;color:${_cmp.A.solid};line-height:1">${fmtNum(areaA/100)}</div>
      <div style="font-size:10px;color:${_cmp.textSec};font-weight:600;margin-top:2px">cm²</div>
    </div>
  </div>`;
  // Card B
  html += `<div style="background:${_cmp.cardBg};background-image:${_cmp.B.gradient};border:1px solid ${_cmp.B.soft};border-radius:12px;padding:14px 16px;display:flex;align-items:center;gap:12px;box-shadow:0 1px 2px rgba(0,0,0,0.03)">
    <div style="flex:0 0 auto;width:36px;height:36px;border-radius:8px;background:${_cmp.B.soft};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:${_cmp.B.solid}">${paperB.name}</div>
    <div style="flex:1;min-width:0">
      <div style="font-size:10px;font-weight:600;color:${_cmp.B.solid};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:2px">Kertas B</div>
      <div style="font-size:13px;color:var(--studio-text);font-weight:600;line-height:1.3">${paperB.w}×${paperB.h}mm</div>
    </div>
    <div style="text-align:right">
      <div style="font-size:18px;font-weight:800;color:${_cmp.B.solid};line-height:1">${fmtNum(areaB/100)}</div>
      <div style="font-size:10px;color:${_cmp.textSec};font-weight:600;margin-top:2px">cm²</div>
    </div>
  </div>`;
  // Selisih Card (highlighted)
  html += `<div style="background:${_cmp.cardBg};background-image:${_cmp.G.gradient};border:1.5px solid ${_cmp.G.soft};border-radius:12px;padding:16px;box-shadow:0 2px 8px ${_cmp.G.soft};margin-top:2px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
      <span style="font-size:10px;font-weight:700;color:${_cmp.G.solid};text-transform:uppercase;letter-spacing:0.6px">Selisih Area</span>
      ${paperLebihBesar ? `<span style="font-size:10px;font-weight:700;color:${_cmp.G.solid};padding:2px 8px;background:${_cmp.G.soft};border-radius:999px">${paperLebihBesar} lebih besar</span>` : ''}
    </div>
    <div style="display:flex;align-items:baseline;gap:4px">
      <span style="font-size:28px;font-weight:800;color:${_cmp.G.solid};line-height:1">${fmtNum(selisihArea)}</span>
      <span style="font-size:13px;font-weight:700;color:${_cmp.G.solid};opacity:0.8">cm²</span>
    </div>
    ${rasioStr ? `<div style="font-size:11px;color:${_cmp.textSec};margin-top:6px;font-weight:500">${rasioStr}</div>` : ''}
  </div>`;
  html += `</div>`; // end kolom 3

  html += `</div>`; // end grid
  html += `</div>`; // end panel

  panel.innerHTML = html;
  // [Bug fix] Restore focus & caret to search input so user can keep typing
  if (hadFocus) {
    const newSearchInput = panel.querySelector('.studio-search-input');
    if (newSearchInput) {
      newSearchInput.focus();
      if (caretStart !== null && caretEnd !== null) {
        try { newSearchInput.setSelectionRange(caretStart, caretEnd); } catch(e) {}
      }
    }
  }
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
  // [Fix] Guard against jsPDF not loaded (CDN failure / ad blocker)
  if (!window.jspdf) {
    showToast('Library jsPDF belum dimuat — cek koneksi internet', 'warning');
    return;
  }
  try {
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
  } catch(e) {
    showToast('Gagal export PDF: ' + (e.message || 'Unknown error'), 'warning');
    console.error('BlueBee Studio: exportPdf error', e);
  }
}

// ============================================================
// Reset All — Feature 1
// ============================================================
function resetAll() {
  Object.assign(coverState, {
    bookSize:'A4', position:'Portrait', customW:210, customH:297,
    paperIsi:'hvs75', lembaran:200, jilid:'spiral',
    printPaper:'A3+', customPrintW:480, customPrintH:320, paperPosition:'Landscape', paperPositionAuto:true, bleed:'0', margin:'0',
    coverIsi:'carton260'
  });
  Object.assign(paperCutState, {
    customW:148, customH:210, position:'Portrait', chacaRel:false, jumlahPcs:200,
    printPaper:'A3+', customPrintW:480, customPrintH:320, paperPosition:'Landscape', paperPositionAuto:true,
    bleed:'0', margin:'0'
  });
  Object.assign(kalkulatorIsiState, {
    jumlahHalaman:20, bookSize:'A4', position:'Portrait', customW:210, customH:297,
    duaSisi:true,
    printPaper:'A3+', customPrintW:480, customPrintH:320, paperPosition:'Landscape', paperPositionAuto:true,
    bleed:'0', margin:'0',
    // [BUG FIX] Reset paperIsi & jilid juga — sebelumnya tidak di-reset,
    // sehingga pilihan user sebelumnya tetap dipertahankan setelah reset.
    paperIsi:'hvs75', jilid:'spiral'
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
  localStorage.removeItem('studio-referensi-filter');
  localStorage.removeItem('studio-referensi-compare-a');
  localStorage.removeItem('studio-referensi-compare-b');
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
    localStorage.setItem('studio-referensi-filter', referensiSearchFilter);
    localStorage.setItem('studio-referensi-compare-a', referensiCompareA);
    localStorage.setItem('studio-referensi-compare-b', referensiCompareB);
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
    if (cs) {
      const parsed = JSON.parse(cs);
      // [BUG FIX] Validasi coverIsi — dropdown "Kertas Cover" hanya menampilkan
      // opsi tipe Carton/Art Paper. Jika localStorage lama berisi coverIsi yang
      // tidak valid (mis. 'hvs75' tipe HVS), reset ke default 'carton260'
      // supaya trigger menampilkan label yang benar, bukan "Pilih..." kosong.
      const validCoverIsi = ['carton210','carton230','carton260','carton310','carton400','art120','art150','matte120','matte150'];
      if (parsed.coverIsi && !validCoverIsi.includes(parsed.coverIsi)) delete parsed.coverIsi;
      Object.assign(coverState, parsed);
    }
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
    if (kis) {
      const parsed = JSON.parse(kis);
      // Migrate away from old signature model (no longer used)
      delete parsed.signatureSize;
      // [BUG FIX] Jangan hapus paperIsi — itu field baru yang valid untuk
      // kartu Tebal Punggung & Spiral Number di mode ISI. Sebelumnya hapus
      // karena dianggap legacy, sehingga pilihan user hilang setiap refresh.
      // Tetap validasi: jika value tidak ada di PAPER_ISI_MAP, hapus (fallback ke default).
      if (parsed.paperIsi && !PAPER_ISI_MAP[parsed.paperIsi]) delete parsed.paperIsi;
      // Validasi jilid: hanya 'soft' | 'hard' | 'spiral'
      if (parsed.jilid && !['soft','hard','spiral'].includes(parsed.jilid)) delete parsed.jilid;
      Object.assign(kalkulatorIsiState, parsed);
    }
    const rf = localStorage.getItem('studio-referensi-filter');
    if (rf !== null) referensiSearchFilter = rf;
    const rca = localStorage.getItem('studio-referensi-compare-a');
    if (rca) referensiCompareA = rca;
    const rcb = localStorage.getItem('studio-referensi-compare-b');
    if (rcb) referensiCompareB = rcb;
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
    if ((e.key === 'd' || e.key === 'D') && e.shiftKey) { e.preventDefault(); toggleTheme(); showToast('Dark mode toggled (Ctrl+Shift+D)', 'info'); }
    if (e.key === 'u' || e.key === 'U') { e.preventDefault(); toggleUnit(); }
    if (e.key === 'e' || e.key === 'E') {
      // [Bug fix] Export only valid in tabs that have a preview SVG (cover-layout, paper-cut)
      const exportTab = (activeTab === 'cover-layout' || activeTab === 'paper-cut');
      if (!exportTab) {
        e.preventDefault();
        showToast('Export PNG/PDF hanya tersedia di tab Cover Layout & Paper Cut', 'warning');
        return;
      }
      if (e.shiftKey) {
        e.preventDefault();
        const _info = activeTab === 'cover-layout' ? coverExportInfo : paperCutExportInfo;
        const _el = activeTab === 'cover-layout' ? 'coverPreviewBody' : 'paperCutPreviewBody';
        const _fn = activeTab === 'cover-layout' ? 'cover-layout.pdf' : 'paper-cut-layout.pdf';
        if (document.getElementById(_el)) { exportPdf(_el, _fn, _info); showToast('Export PDF (Ctrl+Shift+E)', 'info'); }
        else { showToast('Preview belum siap — coba lagi', 'warning'); }
      } else {
        e.preventDefault();
        const _info2 = activeTab === 'cover-layout' ? coverExportInfo : paperCutExportInfo;
        const _el2 = activeTab === 'cover-layout' ? 'coverPreviewBody' : 'paperCutPreviewBody';
        const _fn2 = activeTab === 'cover-layout' ? 'cover-layout.png' : 'paper-cut-layout.png';
        if (document.getElementById(_el2)) { exportPng(_el2, _fn2, _info2); showToast('Export PNG (Ctrl+E)', 'info'); }
        else { showToast('Preview belum siap — coba lagi', 'warning'); }
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
    document.removeEventListener('keydown', window._shortcutEscHandler);
    document.removeEventListener('keydown', window._shortcutTrapHandler);
    return;
  }
  modal.classList.remove('hidden');
  modal.innerHTML = `
    <div class="studio-shortcut-modal-overlay" id="shortcutOverlay">
      <div class="studio-shortcut-modal" onclick="event.stopPropagation()" role="dialog" aria-modal="true" aria-label="Keyboard Shortcuts">
        <div class="studio-shortcut-modal-title">Keyboard Shortcuts</div>
        <div class="studio-shortcut-modal-subtitle">Speed up your workflow</div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Dark Mode</span><span class="studio-shortcut-key">Ctrl + Shift + D</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Reset</span><span class="studio-shortcut-key">Ctrl + Shift + R</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Export PNG</span><span class="studio-shortcut-key">Ctrl + E</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Export PDF</span><span class="studio-shortcut-key">Ctrl + Shift + E</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Toggle Unit (mm/cm/inch)</span><span class="studio-shortcut-key">Ctrl + U</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Zoom Preview</span><span class="studio-shortcut-key">Scroll</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Pan Preview</span><span class="studio-shortcut-key">Drag</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Shortcut Help</span><span class="studio-shortcut-key">?</span></div>
        <button class="studio-shortcut-modal-close" onclick="toggleShortcutModal()">Close</button>
      </div>
    </div>`;
  // Close on overlay click
  document.getElementById('shortcutOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'shortcutOverlay') toggleShortcutModal();
  });
  // [A11y] Escape key handler
  function _escHandler(e) {
    if (e.key === 'Escape') toggleShortcutModal();
  }
  window._shortcutEscHandler = _escHandler;
  document.addEventListener('keydown', _escHandler);
  // [A11y] Focus trap
  function _trapHandler(e) {
    if (e.key !== 'Tab') return;
    const dialog = modal.querySelector('.studio-shortcut-modal');
    if (!dialog) return;
    const focusable = Array.from(dialog.querySelectorAll('button, [tabindex]:not([tabindex="-1"])'));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }
  window._shortcutTrapHandler = _trapHandler;
  document.addEventListener('keydown', _trapHandler);
  // Focus close button by default
  const closeBtn = modal.querySelector('.studio-shortcut-modal-close');
  if (closeBtn) closeBtn.focus();
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
