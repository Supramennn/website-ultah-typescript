# Kejutan buat Ade Cipa

Website ulang tahun satu halaman untuk Syifa "Ade Cipa" dari Noval "amas". Isinya amplop pembuka, countdown, hero, timeline, galeri foto dengan lightbox, surat dengan efek mengetik, dan kue dengan tombol tiup lilin plus confetti.

Dibuat dengan React 19, TypeScript strict, Vite, Tailwind CSS v4, dan Framer Motion.

## Jalankan di lokal

Butuh Node.js 20.19+ atau 22.12+.

```bash
npm install
npm run dev
```

Buka URL yang muncul di terminal, biasanya `http://localhost:5173`.

Perintah lain:

```bash
npm run build     # cek TypeScript lalu build ke folder dist
npm run preview   # lihat hasil build secara lokal
```

## Ganti semua teks, foto, dan lagu

Hampir semua konten ada di satu file:

```text
src/data/config.ts
```

Yang bisa diubah di sana:

- `recipient`: nama lengkap, panggilan, usia, label ulang tahun, dan tanggal ISO untuk countdown.
- `sender`: nama dan panggilan pengirim.
- `ui`: label kecil seperti "Lewati ke isi" dan satuan countdown.
- `opening`: teks layar pembuka, tombol, stempel amplop, dan countdown.
- `hero`: judul, paragraf pembuka, label tombol, dan caption ilustrasi.
- `timeline`: judul dan daftar momen. Saat ini isinya draft, silakan ganti dengan cerita yang sebenarnya.
- `gallery`: caption, alt text, dan daftar foto.
- `letter`: sapaan, paragraf surat, tanda tangan, dan P.S. Isinya draft yang dibuat untuk proyek ini, bukan tulisan asli dari pemberi.
- `finale`: teks kue, tombol tiup lilin, pesan setelah lilin padam, dan status kejutan.
- `footer`: teks penutup.
- `music`: path lagu. Biarkan `null` kalau tidak ingin ada musik.

Tanggal countdown memakai `birthdayISO`. Contoh yang dipakai sekarang:

```ts
birthdayISO: "2027-03-13T00:00:00+07:00"
```

`birthdayTimeZone` dipakai untuk menentukan kapan label "hari ini" muncul. Nilai sekarang `Asia/Jakarta` supaya perayaan tetap mengikuti WIB walaupun dibuka dari zona waktu lain. Sesuaikan keduanya kalau lokasi perayaannya berbeda.

## Ganti foto

1. Taruh file foto di `public/photos/`.
2. Buka `src/data/config.ts`, lalu isi `src` pada foto yang ingin diganti:

```ts
{
  id: "foto-1",
  src: "/photos/ade-dan-amas-1.jpg",
  alt: "Ade Cipa dan amas di pantai saat sore hari.",
  caption: "Peluuuuk paling enak",
  art: 1,
}
```

3. `alt` wajib diisi dengan deskripsi foto. `caption` tampil di kartu dan lightbox.

Selama `src` kosong atau file gagal dimuat, galeri menampilkan ilustrasi placeholder dengan label "slot foto". Penggantian foto tidak perlu menyentuh komponen.

Ukuran yang disarankan: rasio 4:5, lebar 800 sampai 1200 px, format JPG atau WebP. File besar akan membuat halaman lambat di HP.

## Ganti lagu

1. Taruh file audio di `public/audio/`.
2. Isi path-nya di `src/data/config.ts`:

```ts
music: {
  src: "/audio/lagu-kita.mp3",
  play: "Putar musik",
  pause: "Jeda musik",
  error: "Lagu belum bisa diputar.",
}
```

Tombol musik hanya muncul kalau `src` sudah diisi. Musik tidak autoplay karena browser memblokir audio sebelum ada interaksi. Pengunjung harus menekan tombol putar.

Gunakan file MP3 atau M4A yang ukurannya wajar, misalnya di bawah 5 MB, supaya tidak membebani koneksi HP.

## Ganti bagian yang masih draft

Beberapa isi sengaja dibuat sebagai draft karena detail aslinya belum diberikan:

- Timeline di `timeline.moments`: momen dan tanggalnya masih umum. Ganti dengan cerita yang benar.
- Surat di `letter.paragraphs`: draft yang bisa dipakai, tapi sebaiknya ditulis ulang dengan gaya amas sendiri.
- Foto di `gallery.photos`: semua masih placeholder sampai file foto dimasukkan.
- Lagu di `music.src`: masih `null`, jadi belum ada musik.
- Tanggal dan usia mengikuti brief: 13 Maret 2027 dan 24 tahun.

Bagian yang masih placeholder diberi label yang terlihat, bukan disamarkan sebagai konten final.

## Deploy ke Vercel

1. Push project ini ke GitHub, GitLab, atau Bitbucket.
2. Buka [vercel.com/new](https://vercel.com/new), lalu import repository-nya.
3. Vercel biasanya mendeteksi Vite. Pastikan:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Klik Deploy. Setelah selesai, bagikan URL yang diberikan Vercel.

Alternatif lewat terminal:

```bash
npx vercel
npx vercel --prod
```

Tidak ada environment variable yang diperlukan.

## Catatan aksesibilitas dan performa

- Semua tombol dan link bisa dicapai dengan keyboard. Lightbox bisa ditutup dengan `Escape`, panah kiri dan kanan untuk pindah foto.
- Fokus keyboard memakai outline yang terlihat.
- Ada link "Lewati ke isi" untuk pengguna keyboard.
- `prefers-reduced-motion` dihormati: animasi masuk, transisi, partikel, kedip lilin, dan typewriter berhenti atau tampil langsung.
- Galeri memakai `loading="lazy"` untuk foto.
- Teks surat tetap tersedia untuk pembaca layar walaupun efek mengetik sedang berjalan.
- Palet dan ukuran teks sudah dicek kontrasnya sampai WCAG AA.

## Struktur singkat

```text
DESIGN.md             arah visual, palet, tipografi, dan alasan keputusan
public/
  photos/             tempat foto
  audio/              tempat lagu
src/
  components/         bagian-bagian halaman dan ilustrasi SVG
  data/config.ts      semua konten
  hooks/              countdown, typewriter, confetti, scroll lock, reduced motion
  App.tsx             urutan section dan state pembuka
  index.css           token warna, font, tekstur, dan animasi CSS
```

Halaman memakai ilustrasi SVG buatan sendiri, bukan aset stok. Font diambil dari Google Fonts: Fraunces untuk judul, Plus Jakarta Sans untuk teks, dan Caveat untuk aksen tulisan tangan.
