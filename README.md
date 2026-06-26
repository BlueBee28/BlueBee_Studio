# BlueBee Studio

Alat bantu profesional untuk perhitungan cetak buku — meliputi **Cover Layout Calculator**, **Paper Cut Imposition**, **Perhitungan ISI**, dan **Referensi Kertas**, lengkap dengan preview visual, ekspor PNG/PDF, dark mode, dan aksesibilitas penuh.

---

## Struktur Menu & Fitur Lengkap

Aplikasi terdiri dari **4 tab utama** yang dapat diakses melalui ikon di header:

---

### 1. Cover Layout (Tab 1)

Kalkulator layout cetak cover buku — menentukan posisi, ukuran, dan jarak setiap sisi cover di atas kertas cetak.

**Panel Kiri — Input:**

| Bagian | Field | Keterangan |
|--------|-------|------------|
| **Ukuran & Posisi** | Ukuran Buku | Pilihan: A7, A6, A5, A4, A3, B5, B4, F4, Novel, Custom |
| | Posisi Cover | Portrait / Landscape |
| | Custom W × H | Muncul jika Ukuran Buku = Custom |
| **Kertas Isi & Jilid** | Kertas Isi | HVS 75/80/100gsm, Art Paper 120/150gsm, Matte 120/150gsm, Art Carton 210/230/260/310/400gsm, Bookpaper 80gsm |
| | Jumlah Lembaran | Input angka (1–9.999) |
| | Jenis Jilid | Soft Cover / Hard Cover / Spiral Kawat |
| | Kertas Cover | Filter otomatis: Art Paper & Art Carton saja |
| **Kertas Print** | Kertas Print | A4, A3, A3+, Long Carton, Custom |
| | Posisi Kertas | Auto / Landscape / Portrait |
| | Bleed Area | Tanpa Bleed / 2mm / 3mm / 5mm |
| | Margin Kertas | Tanpa Margin / 5mm / 10mm / 15mm / 20mm |

**Panel Kanan — Hasil & Preview:**

| Kartu Hasil | Isi |
|-------------|-----|
| Tebal Punggung | Ketebalan spine dalam mm + satuan sekunder |
| Spiral Number | Nomor spiral (hanya jika jilid = Spiral Kawat) |
| Ukuran Cover | W × H cover tanpa bleed (hanya Spiral) |
| Total Bentang | Lebar total cover (depan + punggung + belakang) |
| Estimasi Berat | Berat total buku + detail isi/cover |
| Bentang + Bleed | Total bentang ditambah area bleed |

**Fitur Preview Cover:**
- Preview SVG real-time dengan zoom & pan (mouse wheel + drag)
- Tombol zoom: Fit, 25%, 50%, 75%, 100%
- Split view: **Cover Depan** / **Cover Belakang** (muncul saat cover melebihi kertas)
- Label dimensi otomatis pada setiap area (cover depan, punggung, cover belakang, hardcover extra)
- Garis bleed, margin, dan safe zone ditampilkan visual
- Warna adaptif terhadap dark mode
- Tombol **Copy Semua Hasil**
- Ekspor **PNG** (Ctrl+E) dan **PDF** (Ctrl+Shift+E)

---

### 2. Paper Cut (Tab 2)

Kalkulasi imposition/pemotongan — menentukan berapa pcs desain yang muat di satu lembar kertas cetak.

**Panel Kiri — Input:**

| Bagian | Field | Keterangan |
|--------|-------|------------|
| **Ukuran & Posisi** | Custom Ukuran Desain | W × H bebas (mm) |
| | Posisi Desain | Portrait / Landscape |
| | Chaca/Rel | Toggle ON/OFF — jika ON, kertas hanya Landscape |
| **Jumlah** | Jumlah Pcs | Total pcs yang ingin dicetak (1–99.999) |
| **Kertas Print** | Kertas Print | A4, A3, A3+, Long Carton, Custom |
| | Posisi Kertas | Auto / Landscape / Portrait |
| | Bleed Area | Tanpa Bleed / 2mm / 3mm / 5mm |
| | Margin Kertas | Tanpa Margin / 5mm / 10mm / 15mm / 20mm |

**Panel Kanan — Hasil & Preview:**

| Kartu Hasil | Isi |
|-------------|-----|
| Pcs Per Lembar | Jumlah pcs per lembar + grid (kolom × baris) |
| Total Lembar Cetak | Total lembar yang dibutuhkan |
| Total Pcs | Jumlah pcs yang dicetak |
| Efisiensi Kertas | Persentase penggunaan kertas + sisa luas waste |
| Sisa Slot Kosong | Jumlah slot kosong yang bisa diisi (hanya jika ada) |

**Fitur Preview Paper Cut:**
- Preview SVG grid imposition real-time
- Setiap pcs diberi label nomor dan ukuran
- Area bleed ditampilkan (garis putus-putus merah muda)
- Area margin ditampilkan (garis putus-putus ungu)
- Area overlap (melebihi kertas) ditandai merah
- Zoom & pan (mouse wheel + drag)
- Tombol zoom: Fit, 25%, 50%, 75%, 100%
- Warna adaptif terhadap dark mode
- Tombol **Copy Semua Hasil**
- Ekspor **PNG** (Ctrl+E) dan **PDF** (Ctrl+Shift+E)

---

### 3. Perhitungan ISI (Tab 3)

Kalkulator lengkap untuk menghitung kebutuhan cetak isi buku — lembaran, lembar cetak, imposition, dan tebal punggung.

**Panel Kiri — Input:**

| Bagian | Field | Keterangan |
|--------|-------|------------|
| **Ukuran Buku** | Ukuran Buku | A7–A3, B5, B4, F4, Novel, Custom |
| | Posisi | Portrait / Landscape |
| | Custom W × H | Muncul jika Custom |
| **Halaman** | Jumlah Halaman | Input angka (1–99.999) |
| **Cetak** | 2 Sisi (On/Off) | ON = 1 lembar 2 halaman, OFF = 1 lembar 1 halaman |
| **Kertas Isi** | Kertas Isi | Sama seperti Cover Layout (semua jenis kertas) |
| | Jilid | Soft Cover / Hard Cover / Spiral Kawat |
| **Kertas Print** | Kertas Print | A4, A3, A3+, Long Carton, Custom |
| | Posisi Kertas | Auto / Landscape / Portrait |
| | Bleed Area | Tanpa Bleed / 2mm / 3mm / 5mm |
| | Margin Kertas | Tanpa Margin / 5mm / 10mm / 15mm / 20mm |

**Panel Kanan — Hasil:**

| Kartu Hasil | Isi |
|-------------|-----|
| Total Lembaran | Jumlah lembar isi buku |
| Total Halaman | Halaman total (termasuk blank jika ada pembulatan) |
| Blank Kosongan | Jumlah halaman kosong + konversi ke lembar 1/2 sisi (hanya jika ada) |
| Hal/Lembar Cetak | Kapasitas halaman per lembar cetak (grid × sisi) |
| Lembar Cetak | Total lembar cetak yang dibutuhkan |
| Tebal Punggung | Ketebalan spine isi + kertas yang dipakai |
| Spiral Number | Nomor spiral kawat (hanya jika jilid = Spiral) |

**Info Cards Tambahan:**

| Info Card | Isi |
|-----------|-----|
| Layout Imposisi | Ukuran buku + bleed, kertas print, area cetak, grid, posisi kertas (auto/manual), efisiensi |
| Orientasi Sub-Optimal | Warning + tombol auto-fix jika orientasi manual kurang efisien |
| Min. Bleed 2mm | Info penting soal bleed minimum dan rekomendasi margin |
| Detail Per Lembar Cetak | Tabel: nomor lembar, rentang halaman, sisi, status (penuh/blank) |
| Layout Tidak Muat | Info jika ukuran buku melebihi kertas cetak (alternatif solusi) |

---

### 4. Referensi Kertas (Tab 4)

Pusat referensi lengkap untuk ukuran kertas standar, berat ketebalan, dan perbandingan visual antar ukuran kertas.

**Fitur:**

| Bagian | Isi |
|--------|-----|
| **Ukuran Kertas Standar** | Tabel lengkap seri A (A0–A10), B (B0–B10), R, dan ukuran lainnya — dengan filter tab (Semua / A / B / R / Lain) dan pencarian real-time |
| **Berat & Ketebalan Kertas** | Tabel semua jenis kertas: nama, GSM, ketebalan per lembar (mm), tebal per rim (500 lembar) |
| **Perbandingan Ukuran** | Layout 3 kolom: pilihan kertas A, preview SVG perbandingan visual, pilihan kertas B — dengan rasio luas, selisih area, dan visualisasi proporsional |

---

## Fitur Global

### Toggle & Navigasi
| Fitur | Keterangan |
|-------|------------|
| **Dark Mode** | Toggle tema gelap/terang — semua preview SVG adaptif |
| **Satuan Toggle** | Ubah satuan tampilan antara mm dan satuan lainnya |
| **Reset Semua** | Kembalikan semua pengaturan ke default |
| **Sidebar Mobile** | Tombol curtain handle untuk buka/tutup panel kiri di mobile |
| **Skip Navigation** | Link aksesibilitas untuk langsung ke konten utama |

### Ekspor
| Format | Shortcut | Keterangan |
|--------|----------|------------|
| **PNG** | `Ctrl+E` | Ekspor preview sebagai gambar PNG (Cover Layout & Paper Cut) |
| **PDF** | `Ctrl+Shift+E` | Ekspor preview + info perhitungan ke PDF (memerlukan jsPDF CDN) |

### Keyboard Shortcuts
| Shortcut | Fungsi |
|----------|--------|
| `Ctrl+Shift+R` | Reset semua pengaturan |
| `Ctrl+Shift+D` | Toggle dark mode |
| `Ctrl+U` | Toggle satuan |
| `Ctrl+E` | Ekspor PNG |
| `Ctrl+Shift+E` | Ekspor PDF |
| `?` | Buka modal bantuan shortcut |
| `Esc` | Tutup modal/dropdown |
| `Tab` / `Shift+Tab` | Navigasi antar elemen (aksesibilitas) |
| `Enter` / `Space` | Pilih item dropdown (aksesibilitas) |

### Aksesibilitas
- ARIA role: `tablist`, `tab`, `tabpanel`, `button`, `dialog`
- `aria-selected`, `aria-controls`, `aria-labelledby`
- Skip navigation link
- Keyboard navigation penuh pada dropdown
- Result cards fokusable (`tabindex="0"`) dengan Enter untuk copy

### Persistensi Data
- Semua pengaturan tersimpan di `localStorage` (per tab, termasuk split view, tema, satuan, dan semua input)

---

## Struktur File

```
BlueBee_Studio/
├── index.html    # Struktur halaman HTML (shell + panel containers)
├── style.css     # Semua styling (CSS variables, layout, komponen, responsive, dark mode)
├── script.js     # Logika aplikasi (kalkulasi, rendering, interaksi, ekspor, aksesibilitas)
└── README.md     # Dokumentasi proyek ini
```

## Teknologi

- **HTML5** — Struktur semantik dengan ARIA
- **CSS3** — Custom properties, Grid, Flexbox, media queries, backdrop-filter, glassmorphism
- **Vanilla JavaScript** — Tanpa framework, murni JS (ES6+)
- **jsPDF** (CDN) — Library ekspor PDF
- **Google Fonts** — Font Poppins (300–900 weight)

## Cara Menjalankan

1. Download atau clone folder ini
2. Buka file `index.html` di browser (Chrome, Firefox, Edge, Safari)
3. Tidak memerlukan server — cukup buka langsung dari file system

> **Catatan:** Fitur ekspor PDF membutuhkan koneksi internet untuk memuat library jsPDF dari CDN (`cdnjs.cloudflare.com`).

## Dukungan Browser

| Browser | Versi Minimum |
|---------|---------------|
| Chrome  | 80+           |
| Firefox | 78+           |
| Edge    | 80+           |
| Safari  | 14+           |

## Lisensi

Proyek ini dibuat untuk keperluan percetakan. Silakan gunakan dan modifikasi sesuai kebutuhan.