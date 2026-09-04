# BlueBee Studio 2.0

Kalkulator cetak buku berbasis web yang berjalan **100% di browser** — tanpa install, tanpa server, tanpa upload data ke internet. Dirancang untuk percetakan, penerbit, dan pekerja kreatif yang butuh perhitungan layout cetak cepat dan akurat.

> Gratis · Tanpa Install · 100% Berjalan Lokal

---

## Daftar Isi

1. [Deskripsi](#deskripsi)
2. [Fitur & Tools](#fitur--tools)
3. [Struktur File](#struktur-file)
4. [Cara Menjalankan](#cara-menjalankan)
5. [Persyaratan](#persyaratan)
6. [Dependensi Eksternal](#dependensi-eksternal)
7. [Catatan Teknis](#catatan-teknis)
8. [Privasi](#privasi)
9. [Kredit](#kredit)

---

## Deskripsi

BlueBee Studio adalah rangkaian kalkulator cetak untuk percetakan & penerbit — mulai dari layout cover buku, imposi (imposition) potong kertas, perhitungan isi buku, shuffle halaman, sampai estimasi harga cetak. Semua perhitungan dihitung otomatis dalam hitungan detik langsung di browser Anda.

Aplikasi ini dibangun sebagai **satu proyek front-end murni** (HTML + CSS + JavaScript) tanpa framework, tanpa build tools, dan tanpa backend. Karena itu file-nya ringan, mudah dipindahkan, dan bisa dijalankan di mana saja.

---

## Fitur & Tools

| # | Tool | Fungsi |
|---|------|--------|
| 1 | **Cover Layout** | Hitung layout cetak cover buku: tebal punggung (spine), bleed, margin, hingga posisi kertas — lengkap dengan preview visual dan export PNG/PDF |
| 2 | **Paper Cut** | Hitung layout potong & imposi halaman pada kertas print, termasuk jumlah pcs per lembar dan sisa pemakaian kertas |
| 3 | **Perhitungan ISI** | Hitung jumlah tanda (signature) & lembar cetak isi buku secara otomatis dari jumlah halaman |
| 4 | **Shuffle Pages** | Acak urutan halaman PDF untuk layout N-up (booklet collapse) |
| 5 | **Referensi Kertas** | Database ukuran & berat kertas (A-series, HVS, art paper, dll.) |
| 6 | **Hitung Harga** | Kalkulator harga cetak: up x oplah, potong, PPN & diskon |
| 7 | **Convert File** | Ubah gambar menjadi PDF, atau PDF menjadi folder JPG (ZIP) |
| 8 | **PDF Flatten** | Perkecil ukuran file PDF langsung di browser |
| 9 | **QR Generator** | Buat QR code custom & unduh dalam PNG resolusi tinggi |
| 10 | **Preview Lubang** | Hitung posisi & jumlah lubang mata layang untuk banner |

### Fitur Umum

- **Preview visual interaktif** — drag & zoom pada area preview layout
- **Export PNG/PDF** — tersedia di tab Cover Layout & Paper Cut
- **Dark mode** — toggle terang/gelap di pojok kanan atas
- **Pintasan keyboard** — daftar shortcut via tombol "Pintasan"
- **Responsif** — nyaman dipakai di desktop maupun mobile
- **Copy semua hasil** — salin ringkasan perhitungan sekali klik

---

## Struktur File

```
BlueBee_Studio_Separated/
├── index.html    → Struktur halaman (markup semua tab & komponen)
├── style.css     → Seluruh styling (design system, layout, dark mode, responsif)
├── script.js     → Seluruh logika aplikasi (kalkulasi, render, interaksi)
└── README.md     → Dokumentasi ini
```

| File | Ukuran ± | Isi |
|------|----------|-----|
| `index.html` | 411 KB | Markup halaman, meta tag, favicon, pemanggilan CSS & JS |
| `style.css` | 112 KB | 6 blok CSS: design system, komponen, dark mode, media query |
| `script.js` | 425 KB | Library qrcode-generator (embedded) + logika kalkulasi & render semua tab |

> **Catatan:** Ketiga file **wajib berada dalam satu folder yang sama** karena saling terhubung melalui relatif path (`style.css` dan `script.js`).

---

## Cara Menjalankan

### Cara 1 — Buka Langsung (paling mudah)

1. Pastikan `index.html`, `style.css`, dan `script.js` ada di satu folder yang sama.
2. Klik dua kali (double-click) file `index.html`.
3. Aplikasi terbuka di browser default Anda. Selesai.

### Cara 2 — Lewat Local Server (opsional)

Jika ingin menjalankan lewat server lokal (misalnya untuk pengembangan):

```bash
# Masuk ke folder proyek
cd BlueBee_Studio_Separated

# Python 3
python3 -m http.server 8080

# Buka di browser: http://localhost:8080
```

Atau dengan ekstensi **Live Server** di VS Code: klik kanan `index.html` → *Open with Live Server*.

---
### Cara 3 — Buka Dengan Link (deploy)

https://bluebee28.github.io/BlueBee_Studio

## Persyaratan

- **Browser modern**: Chrome, Edge, Firefox, atau Safari versi terbaru (disarankan Chrome/Edge).
- **JavaScript aktif** — seluruh aplikasi berjalan dengan JavaScript.
- **Koneksi internet (opsional)** — hanya diperlukan untuk:
  - Export PDF (memuat library jsPDF dari CDN),
  - Memuat font Google Fonts (Inter).
  
  Tanpa internet, semua kalkulator & fitur perhitungan **tetap berfungsi normal**.

---

## Dependensi Eksternal

| Dependensi | Versi | Sumber | Fungsi |
|------------|-------|--------|--------|
| jsPDF | 2.5.1 | CDN cdnjs | Export hasil layout ke PDF |
| Inter (Google Fonts) | — | fonts.googleapis.com | Tipografi aplikasi |
| qrcode-generator | 1.4.4 | Embedded di `script.js` (MIT) | QR Generator — berfungsi offline |

Tidak ada framework (React/Vue/dll.), tidak ada build tools, tidak ada package manager. Cukup 3 file.

---

## Catatan Teknis

- **Arsitektur**: vanilla JavaScript murni. Semua state dikelola di memori browser, render dilakukan manual per-tab.
- **Urutan eksekusi `script.js`**:
  1. Library `qrcode-generator` (mendefinisikan global `qrcode`),
  2. Script aplikasi utama (kalkulasi & render),
  3. Script aplikasi bagian kedua (inisialisasi & fitur tambahan).
- **Jangan gunakan `type="module"`** pada pemanggilan `script.js` — banyak fungsi dipanggil langsung dari atribut HTML (mis. `onclick="switchTab('...')"`) sehingga harus tetap global.
- **Session**: status tab aktif disimpan sementara di `sessionStorage`, sehingga refresh tidak mengembalikan Anda ke halaman depan.
- Mengedit tampilan? Ubah `style.css`. Mengedit logika/perhitungan? Ubah `script.js`. Menambah/menghapus elemen? Ubah `index.html`.

---

## Privasi

**Seluruh perhitungan, file, dan data yang Anda masukkan diproses 100% di perangkat Anda sendiri.**

- Tidak ada data yang dikirim ke server mana pun.
- Tidak ada tracking, cookie iklan, atau analitik.
- File PDF/gambar yang di-proses tidak pernah meninggalkan browser Anda.

Aman digunakan untuk data percetakan yang bersifat rahasia.

---

## Kredit

- **Dibuat oleh**: BlueBee Studio
- **Library**: qrcode-generator 1.4.4 (MIT License), jsPDF 2.5.1 (MIT License)
- **Font**: Inter oleh Google Fonts

BlueBee Studio gratis dan selalu akan gratis. Jika tools ini membantu pekerjaan Anda, dukungan donasi (QRIS tersedia di dalam aplikasi) sangat berarti untuk pengembangan berkelanjutan.
