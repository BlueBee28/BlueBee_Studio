# BlueBee Studio

Kalkulator layout percetakan untuk menghitung cover buku, potong kertas, isi buku, dan referensi ukuran kertas. Dibangun sebagai single-page application tanpa framework, murni vanilla JavaScript.

---

## Struktur Folder

```
BlueBee_Studio/
├── index.html      # HTML utama (shell + markup)
├── style.css       # Seluruh styling (light & dark theme)
├── app.js          # Seluruh logika aplikasi
└── README.md
```

---

## Cara Menjalankan

1. Download dan extract folder `BlueBee_Studio`
2. Buka file `index.html` di browser (Chrome, Firefox, Edge, Safari)
3. Tidak memerlukan server — cukup buka langsung dari file system

> **Catatan:** Pastikan koneksi internet aktif untuk memuat font Google Fonts (Poppins) dan library jsPDF dari CDN.

---

## Fitur Utama

### 4 Tab Utama

| Tab | Fungsi |
|-----|--------|
| **Cover Layout** | Menghitung layout cetak cover buku — ketebalan punggung, mode tampilan full/split/spiral, estimasi berat, dan biaya laminating |
| **Paper Cut** | Menghitung layout imposisi & potong kertas — berapa potong muat di satu lembar cetak, dengan kontrol bleed & margin |
| **Kalkulator Isi** | Menghitung tanda & lembar cetak isi buku berdasarkan jumlah halaman, ukuran tanda (4/8/16/32), dan jenis kertas |
| **Referensi Kertas** | Database ukuran kertas (Seri A, B, R, Lain-lain) dan berat kertas (HVS, Art Paper, Matte, Carton, Bookpaper) dengan fitur perbandingan |

### Fitur Pendukung

| Fitur | Keterangan |
|-------|------------|
| **Dark Mode** | Transisi animasi circle-reveal dari tombol toggle. Tersimpan di localStorage |
| **Satuan** | Toggle mm / cm / inch langsung dari input dimensi |
| **Zoom & Pan** | Scroll-to-zoom dan drag-to-pan pada area preview |
| **Export PNG** | Ekspor preview sebagai gambar PNG |
| **Export PDF** | Ekspor preview sebagai dokumen PDF (via jsPDF) |
| **Copy to Clipboard** | Klik result card untuk menyalin nilai |
| **Reset All** | Kembalikan semua input ke default |
| **Input Validation** | Min/max bounds dengan pesan error inline; tombol spinner long-press |
| **Toast Notification** | Notifikasi maks 3 sekaligus, auto-dismiss |
| **Mobile Sidebar** | Sidebar overlay untuk layar ≤1024px |
| **Keyboard Shortcuts** | Modal pintasan keyboard |

---

## Keyboard Shortcuts

| Shortcut | Aksi |
|----------|------|
| `Ctrl + D` | Toggle Dark / Light Mode |
| `Ctrl + Shift + R` | Reset Semua Input |
| `Ctrl + E` | Export PNG |
| `Ctrl + Shift + E` | Export PDF |
| `Ctrl + U` | Toggle Satuan (mm/cm/inch) |
| `?` | Buka Keyboard Shortcuts Modal |
| Scroll | Zoom Preview |
| Drag | Pan Preview |
| Arrow Left/Right | Navigasi tab (saat tab fokus) |
| Arrow Up/Down | Navigasi dropdown menu |

---

## Data Referensi

### Ukuran Buku

A7, A6, A5, A4, A3, B5, B4, F4, Novel, Custom

### Ukuran Kertas Cetak

A4, A3, A3+, Long Carton, Custom

### Jenis Kertas Isi

| Nama | Tipe | GSM | Ketebalan (mm) |
|------|------|-----|-----------------|
| HVS 75gsm | HVS | 75 | 0.10 |
| HVS 80gsm | HVS | 80 | 0.11 |
| HVS 100gsm | HVS | 100 | 0.12 |
| Art Paper 120gsm | Art Paper | 120 | 0.13 |
| Art Paper 150gsm | Art Paper | 150 | 0.142 |
| Matte Paper 120gsm | Matte | 120 | 0.13 |
| Matte Paper 150gsm | Matte | 150 | 0.142 |
| Art Carton 210gsm | Carton | 210 | 0.23 |
| Art Carton 230gsm | Carton | 230 | 0.25 |
| Art Carton 260gsm | Carton | 260 | 0.32 |
| Art Carton 310gsm | Carton | 310 | 0.36 |
| Art Carton 400gsm | Carton | 400 | 0.40 |
| Bookpaper 80gsm | Bookpaper | 80 | 0.14 |

### Jenis Jilid

Soft Cover, Hard Cover, Spiral Kawat

### Ukuran Spiral

Nomor 5, 6, 7, 8, 9, 10, 12, 14, 16, 20

### Harga Laminating (per m² per sisi)

| Jenis | Harga |
|-------|-------|
| Glossy | Rp 15.000 |
| Matte | Rp 18.000 |
| Soft Touch | Rp 25.000 |

> Untuk cover depan + belakang, kalikan harga ×2 (double-sided).

---

## Tech Stack

| Komponen | Teknologi |
|-----------|-----------|
| Font | Google Fonts — Poppins (300–900) |
| PDF Library | jsPDF 2.5.1 (CDN) |
| Ikon | Inline SVG (Feather-style) |
| CSS | Custom Properties (`--studio-*`), dual light/dark theme, glassmorphism |
| JavaScript | Vanilla ES6+, DOM-only rendering |
| Responsif | 3 breakpoint: default (2-kolom), ≤1024px (sidebar overlay), ≤640px (compact mobile) |
| Aksesibilitas | ARIA tab pattern, `role="listbox"` dropdown, `role="switch"` toggle, skip-nav, focus-visible |

---

## Arsitektur

- **Zero-build** — tidak memerlukan npm, bundler, atau build step
- **Zero-dependency** — semua UI di-generate secara dinamis via DOM manipulation
- **State management** — plain JS objects (`coverState`, `paperCutState`, `kalkulatorIsiState`)
- **Rendering** — fungsi `renderAll()` sebagai central render, dipanggil setiap perubahan state
- **Preview** — SVG inline yang di-generate secara programatis dengan warna theme-aware
- **Persistensi** — tema dan state tersimpan di `localStorage`

---

## Lisensi

Created By **BlueBee**
