# DESIGN.md

## Design Read

Website kado ulang tahun untuk Syifa "Ade Cipa", dibuka kemungkinan besar dari HP. Bahasa visualnya scrapbook baby blue yang hangat, seperti amplop dan kertas kenangan yang ditempel di meja, bukan landing page produk.

Dial: **ENERGY 2 / RHYTHM 3 / MOTION 3**.

- ENERGY 2: ceria dan playful, tapi tidak berteriak. Fokus tetap pada nama, surat, dan kue.
- RHYTHM 3: tiap bagian punya komposisi berbeda, dari amplop, hero terbelah, timeline zig-zag, galeri miring, surat, sampai panggung gelap di akhir.
- MOTION 3: animasi masuk, partikel, typewriter, dan confetti dipakai untuk membangun urutan emosi. Semua dimatikan atau dipersingkat saat `prefers-reduced-motion` aktif.

## Identitas

Ide utamanya: kejutan ini terasa seperti kiriman fisik yang datang lewat internet. Motif yang diulang: amplop, selotip, stempel pos, kertas bergaris, sudut miring, dan tulisan tangan.

Ilustrasi dibuat sendiri sebagai SVG: dua burung, cangkir, kue, jendela malam, dan bunga kecil. Tidak ada aset stok atau karakter 3D generik. Semua elemen ini terhubung langsung ke cerita, bukan dekorasi tempelan.

## Palet

| Token | Hex | Peran dan alasan |
| --- | --- | --- |
| `paper` | `#e9f5ff` | Latar baby blue muda, sesuai brief dan terasa ringan di HP. |
| `paper-deep` | `#d5ebff` | Satu tingkat lebih dalam untuk bidang dan bayangan kertas. |
| `cream` | `#fffbf2` | Kertas surat dan kartu foto, memberi kontras hangat dengan biru. |
| `ink` | `#17384c` | Teks utama dan garis sticker, biru navy agar tidak terasa generik hitam. |
| `ink-soft` | `#486579` | Teks sekunder, rasio kontras 5.0:1 sampai 6.0:1 di atas latar terang. |
| `butter` | `#ffc857` | Satu aksen utama: stempel, sorotan, lilin, dan tombol kunci. |
| `blush` | `#f3a6a0` | Hanya untuk doodle hati dan aksen kecil, bukan teks. |
| `sky` | `#8ccbf4` | Garis putus-putus, cincin dekoratif, dan aksen biru yang lebih terang. |
| `night` | `#102a3a` | Latar bagian kue agar momen tiup lilin terasa seperti panggung. |

Aturan pemakaian: biru adalah keluarga warna utama, cream dan navy adalah netral, butter adalah aksen. Blush tidak dipakai untuk teks karena kontrasnya rendah.

## Tipografi

- **Fraunces** untuk judul. Serif hangat dan sedikit editorial, cocok untuk nuansa surat dan kenangan, bukan tipografi SaaS.
- **Plus Jakarta Sans** untuk teks isi. Bentuknya ramah, mudah dibaca di layar kecil, dan mendukung bahasa Indonesia dengan baik.
- **Caveat** untuk catatan tangan, stempel, dan label kecil. Memberi kesan ditulis langsung, bukan template.

Tidak ada monospace besar atau label uppercase dengan tracking lebar.

## Ritme per Bagian

1. **Pembuka**: amplop di tengah, countdown, satu tombol besar. Fokus tunggal sebelum masuk.
2. **Hero**: teks di kiri, ilustrasi burung di kanan. Di HP menumpuk dengan ilustrasi tetap menjadi fokus kedua.
3. **Timeline**: garis putus-putus vertikal, kartu bergantian kiri dan kanan di desktop.
4. **Galeri**: grid dua kolom di HP, tiga kolom di desktop, kartu dimiringkan seperti foto tempelan.
5. **Surat**: kertas cream bergaris, typewriter, tombol lewati, tanda tangan tangan.
6. **Finale**: latar navy, kue bercahaya, tombol tiup lilin, lalu confetti dan status tunangan.
7. **Footer**: penutup pendek dan tautan balik ke atas.

## Gerak

- Partikel melayang di hero: mengisi ruang kosong dan membuat halaman terasa hidup tanpa mengganggu bacaan.
- Reveal saat scroll: mengarahkan mata ke satu momen per layar.
- Typewriter: meniru surat yang sedang ditulis, dengan tombol lewati agar tidak memaksa menunggu.
- Confetti: hanya muncul sekali di momen tiup lilin, sebagai puncak cerita.
- Lilin berkedip dan asap: menandai perubahan state, bukan hiasan yang terus-menerus.

`prefers-reduced-motion` mematikan partikel dan confetti, mempercepat transisi, serta menampilkan surat dan finale secara langsung.

## Aturan Visual

- Bayangan memakai offset keras seperti sticker kertas, bukan bayangan lembut yang membuat semua elemen melayang.
- Radius bervariasi: kartu 24px, sticker 14px, selotip 2px, tombol bulat hanya untuk kontrol musik.
- Tidak ada glassmorphism, gradient ungu-biru, grid latar, atau ikon Lucide.
- Glow hanya dipakai di lilin kue.
- Warna aksen dipakai hemat: butter untuk momen penting, blush untuk hati kecil.

## Suara Copy

Santai, receh, dan hangat. Pakai "wkwk", "peluuuuk adeee", dan "woopyuuu" secukupnya. Hindari metafora puitis berlebihan, kata-kata marketing, dan kalimat yang terdengar seperti template.

## Konten yang Masih Placeholder

- Foto di `gallery.photos` masih ilustrasi dengan label "slot foto" yang terlihat.
- Timeline dan surat adalah draft yang diminta di brief. Ganti dengan cerita dan tulisan asli sebelum dikirim.
- Musik masih `null`, jadi tombol putar disembunyikan sampai file audio diisi.

Semua konten tersebut bisa diganti dari `src/data/config.ts`.
