## 1. ROLE
Kamu adalah Senior Frontend Engineer dan Creative Developer yang ahli di React, TypeScript, Tailwind CSS, dan Framer Motion. Kamu juga paham UI/UX untuk pengalaman emosional (website kado personal). Prioritas utama:
(1) animasi halus dan berkesan, (2) performa ringan di HP, (3) kode TypeScript yang rapi dan type-safe, (4) tampilan lucu, imut, dan romantis yang tidak norak.

## 2. TASK
Bangun website ulang tahun interaktif satu halaman (single page) sebagai kado untuk pasangan, lengkap dengan animasi yang keren.
Hasil akhir: project React + TypeScript yang siap dijalankan (npm run dev) dan siap di-deploy.

Stack wajib:
- React + TypeScript (strict mode), dibuat dengan Vite
- Tailwind CSS untuk seluruh styling
- Framer Motion untuk seluruh animasi

Section yang dibuat, berurutan:
1. Layar pembuka: countdown atau tombol "Buka Kejutan"
2. Hero dengan partikel melayang dan ucapan selamat ulang tahun
3. Timeline kenangan (animasi muncul saat di-scroll)
4. Galeri foto (hover/tap effect dan lightbox)
5. Surat cinta dengan efek mengetik (typewriter)
6. Penutup: kue ulang tahun, tiup lilin, lalu confetti

## 3. CONTEXT
- Penerima: Syifa Sukma Hayati, panggilan sayang "ade cipa"
- Pengirim: Noval, menyebut dirinya "amas" / "mas opang"
- Ulang tahun: 13 Maret 2027, usia yang dirayakan 24 tahun
- Kejutan utama: pada hari ini status ade berubah menjadi tunangan amas
- Tema warna: baby blue; gaya visual lucu dan imut
- Gaya bahasa teks: santai, humor receh, romantis manis, emoji sedikit; ungkapan khas "wkwk", "peluuuuk adeee", "woopyuuu"; hindari puitis berlebihan dan klise
- Foto: [jumlah dan lokasi file foto]
- Lagu latar: [judul / file audio, atau tanpa lagu]
- Momen timeline: [3-6 momen penting beserta tanggal]
- Isi surat: [minta dibuatkan draft]
- Perangkat utama penerima: [HP Android / iPhone / laptop]
- Deploy: [Vercel]

## 4. REASONING
Website ini kejutan personal yang harus terasa tulus dan hangat, bukan template generik. Animasi dipakai untuk membangun emosi secara bertahap, dari penasaran, lalu senang, lalu terharu, lalu momen kejutan di akhir. Karena kemungkinan besar dibuka lewat HP, animasi harus lancar dan tidak berat.

## 5. STOP CONDITIONS
Tugas selesai jika:
- Semua 6 section berfungsi dan animasinya berjalan mulus
- Tidak ada error TypeScript (tanpa `any` yang tidak perlu) dan tidak ada warning di console
- Responsif di layar HP (mobile-first), tablet, dan desktop
- Mendukung `prefers-reduced-motion`
- Semua teks, foto, dan lagu mudah diganti lewat satu file data/konfigurasi
- Ada instruksi singkat menjalankan dan men-deploy project

## 6. OUTPUT
1. Ringkasan struktur folder project
2. Kode lengkap tiap file (komponen, hooks, data, konfigurasi Tailwind), dalam blok kode terpisah per file
3. Perintah instalasi dependency dan cara menjalankan project
4. Panduan singkat mengganti foto, teks, dan lagu
5. Tips deploy dalam 3-4 langkah
Gunakan bahasa Indonesia untuk penjelasan dan komentar kode seperlunya.