export type TimelineMoment = {
  kicker: string;
  title: string;
  body: string;
};

export type GalleryPhoto = {
  id: string;
  /** Isi dengan path foto, misal "/photos/foto-1.jpg". Kosongkan untuk memakai ilustrasi placeholder. */
  src?: string;
  alt: string;
  caption: string;
  /** Varian ilustrasi placeholder, 1 sampai 6. */
  art: 1 | 2 | 3 | 4 | 5 | 6;
};

export type SiteConfig = {
  recipient: {
    fullName: string;
    nickname: string;
    age: number;
    birthdayLabel: string;
    birthdayISO: string;
    birthdayTimeZone: string;
  };
  sender: {
    name: string;
    nickname: string;
  };
  ui: {
    skipToContent: string;
    countdownUnits: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
    countdownSrTemplate: string;
  };
  music: {
    /** Path lagu di folder public/audio, atau null kalau tanpa lagu. */
    src: string | null;
    play: string;
    pause: string;
    error: string;
  };
  opening: {
    eyebrow: string;
    title: string;
    fullName: string;
    subtitle: string;
    button: string;
    note: string;
    stampTop: string;
    stampBottom: string;
    envelopeTo: string;
    countdownLabel: string;
    countdownNote: string;
    countdownDone: string;
    countdownAfter: string;
  };
  hero: {
    kicker: string;
    titleBefore: string;
    name: string;
    handLine: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    illustrationCaption: string;
    illustrationAlt: string;
    scrollCue: string;
    floatingNote: string;
  };
  timeline: {
    kicker: string;
    title: string;
    handNote: string;
    moments: TimelineMoment[];
    closingNote: string;
  };
  gallery: {
    kicker: string;
    title: string;
    handNote: string;
    placeholderNotice: string;
    placeholderTag: string;
    empty: string;
    openLabel: string;
    photos: GalleryPhoto[];
    lightbox: {
      close: string;
      previous: string;
      next: string;
      counterSeparator: string;
    };
  };
  letter: {
    kicker: string;
    title: string;
    handNote: string;
    salutation: string;
    paragraphs: string[];
    signature: string;
    postscript: string;
    skip: string;
    typingLabel: string;
    doneLabel: string;
  };
  finale: {
    kicker: string;
    title: string;
    handNote: string;
    body: string;
    button: string;
    buttonNote: string;
    relightButton: string;
    doneTitle: string;
    doneBody: string;
    statusLabel: string;
    statusValue: string;
    statusNote: string;
    doneHand: string;
    topButton: string;
    cakeLabel: string;
    cakeLitLabel: string;
    cakeOutLabel: string;
  };
  footer: {
    line: string;
    date: string;
    note: string;
    top: string;
  };
};

export const siteConfig: SiteConfig = {
  recipient: {
    fullName: "Syifa Sukma Hayati",
    nickname: "Ade Cipa",
    age: 24,
    birthdayLabel: "13 Maret 2027",
    birthdayISO: "2027-03-13T00:00:00+07:00",
    birthdayTimeZone: "Asia/Jakarta",
  },
  sender: {
    name: "Noval",
    nickname: "amas",
  },
  ui: {
    skipToContent: "Lewati ke isi",
    countdownUnits: {
      days: "hari",
      hours: "jam",
      minutes: "menit",
      seconds: "detik",
    },
    countdownSrTemplate: "Hitung mundur ke {date}: {days} hari lagi.",
  },
  music: {
    src: null,
    play: "Putar musik",
    pause: "Jeda musik",
    error: "Lagu belum bisa diputar.",
  },
  opening: {
    eyebrow: "psst, ada kiriman buat",
    title: "Ade Cipa",
    fullName: "Syifa Sukma Hayati",
    subtitle: "Amplop kecil ini dititipin amas lewat internet. Isinya bukan tagihan, tenang. wkwk",
    button: "Buka kejutan",
    note: "Buka pelan-pelan ya. Nggak usah buru-buru.",
    stampTop: "POS KILAT",
    stampBottom: "KHUSUS ADE",
    envelopeTo: "untuk ade cipa",
    countdownLabel: "Menuju hari H",
    countdownNote: "Kalau kebuka lebih awal, ya nggak apa-apa. Amas juga nggak sabar.",
    countdownDone: "Hari ini hari H. Buka kejutannya sekarang.",
    countdownAfter: "Hari H sudah lewat, tapi kejutannya tetap boleh dibuka. wkwk",
  },
  hero: {
    kicker: "13 Maret 2027",
    titleBefore: "Selamat ulang tahun,",
    name: "Ade Cipa",
    handLine: "24 tahun, dan satu status baru.",
    body: "Hari ini ade ulang tahun. Sekalian, ada kejutan yang amas simpan rapat-rapat: mulai hari ini, ade resmi jadi tunangan amas. Serius. Bukan typo. wkwk.",
    primaryCta: "Baca surat amas",
    secondaryCta: "Tiup lilinnya",
    illustrationCaption: "amas + ade, 2027",
    illustrationAlt:
      "Ilustrasi dua burung kecil berwarna biru duduk berdampingan di atas dahan, mewakili amas dan ade.",
    scrollCue: "gulir pelan-pelan",
    floatingNote: "peluuuuk adee",
  },
  /** DRAFT: ganti momen dan tanggalnya dengan cerita yang sebenarnya. */
  timeline: {
    kicker: "Cerita kita",
    title: "Versi singkatnya",
    handNote: "pelan-pelan bacanya ya",
    moments: [
      {
        kicker: "Bab 01",
        title: "Pertama ngobrol",
        body: "Awalnya cuma chat biasa. Eh, kok lanjut terus sampai lupa waktu. wkwk.",
      },
      {
        kicker: "Bab 02",
        title: "Makin dekat",
        body: "Dari cerita receh jadi tempat pulang paling enak. Kalau capek, ya tinggal peluuuuk adee.",
      },
      {
        kicker: "Bab 03",
        title: "Saling milih",
        body: "Nggak ada drama besar. Cuma dua orang yang sama-sama yakin dan nggak mau ke mana-mana.",
      },
      {
        kicker: "Bab 04",
        title: "Hari ini",
        body: "13 Maret: ade ulang tahun ke-24, dan statusnya resmi berubah jadi tunangan amas. Woopyuuu!",
      },
    ],
    closingNote: "Masih ada banyak bab yang belum ditulis. Kita isi bareng-bareng ya.",
  },
  gallery: {
    kicker: "Kotak kenangan",
    title: "Foto-foto kita",
    handNote: "tap buat lihat lebih besar",
    placeholderNotice:
      "Slot foto masih kosong. Taruh foto kalian di public/photos, lalu isi src di src/data/config.ts.",
    placeholderTag: "slot foto",
    empty: "Kotak kenangan masih kosong. Nanti diisi ya, pelan-pelan.",
    openLabel: "buka foto",
    photos: [
      {
        id: "foto-1",
        alt: "Slot foto 1, masih berupa ilustrasi dua cangkir di atas meja.",
        caption: "Peluuuuk paling enak",
        art: 1,
      },
      {
        id: "foto-2",
        alt: "Slot foto 2, masih berupa ilustrasi dua burung di jalan setapak.",
        caption: "Jalan sore, nggak jelas mau ke mana",
        art: 2,
      },
      {
        id: "foto-3",
        alt: "Slot foto 3, masih berupa ilustrasi kue ulang tahun kecil.",
        caption: "Makan manis, rebutan yang terakhir",
        art: 3,
      },
      {
        id: "foto-4",
        alt: "Slot foto 4, masih berupa ilustrasi jendela dan bulan di malam hari.",
        caption: "Ngobrol sampai lupa waktu",
        art: 4,
      },
      {
        id: "foto-5",
        alt: "Slot foto 5, masih berupa ilustrasi buket bunga kecil.",
        caption: "Selalu ada bunga kecil",
        art: 5,
      },
      {
        id: "foto-6",
        alt: "Slot foto 6, masih berupa ilustrasi sepasang burung di dahan.",
        caption: "Kita, versi paling bahagia",
        art: 6,
      },
    ],
    lightbox: {
      close: "Tutup foto",
      previous: "Foto sebelumnya",
      next: "Foto berikutnya",
      counterSeparator: "dari",
    },
  },
  /** DRAFT: silakan tulis ulang dengan gaya amas sendiri. */
  letter: {
    kicker: "Surat",
    title: "Buat ade, dari amas",
    handNote: "baca sampai habis ya, please",
    salutation: "Untuk ade cipa,",
    paragraphs: [
      "Selamat ulang tahun, sayang. 24 tahun! Rasanya baru kemarin kita ngobrol receh soal hal nggak penting. Sekarang amas malah nulis surat kayak orang jaman dulu. wkwk.",
      "Ade itu orang yang kalau dipeluk, peluknya lama banget sampai amas bingung mau lepas atau nambah satu lagi. Kalau ade ketawa, amas ikut senang walau kadang nggak paham konteksnya. Kalau ade capek, amas cuma pengin bilang: peluuuuk adeee. Banyak.",
      "Hari ini ada satu kejutan yang amas simpan lama. Mulai sekarang, ade bukan cuma pacar amas. Ade juga tunangan amas. Serius, ini bukan typo. wkwk.",
      "Amas pengin masa depan yang pelan-pelan. Yang isinya makan bareng, debat kecil soal mau makan apa, dan peluk yang nggak dihitung. Nggak harus mewah, yang penting ada ade.",
      "Makasih ya udah bertahan, udah sabar, dan udah jadi ade cipa yang amas kenal. Amas nggak janji bakal sempurna. Tapi amas janji bakal terus milih ade, tiap hari, bahkan pas kita lagi sama-sama bingung.",
      "Selamat ulang tahun, tunangan amas. Woopyuuu! Semoga tahun ini penuh hal baik, dan semoga kita selalu punya alasan buat ketawa.",
    ],
    signature: "amas (mas opang)",
    postscript: "P.S. Kalau habis baca masih senyum-senyum sendiri, berarti berhasil. wkwk.",
    skip: "Langsung baca semua",
    typingLabel: "Surat sedang diketik.",
    doneLabel: "Surat selesai.",
  },
  finale: {
    kicker: "Terakhir",
    title: "Tiup lilinnya",
    handNote: "buat satu permintaan, jangan bilang-bilang",
    body: "Lilinnya masih nyala. Tekan tombolnya, terus bayangin amas ikut tiup dari sini.",
    button: "Tiup lilin",
    buttonNote: "nggak perlu mic, cukup pencet. wkwk",
    relightButton: "Nyalain lagi",
    doneTitle: "Yeay, selamat ulang tahun!",
    doneBody:
      "Selamat ulang tahun, tunangan amas. Semoga tahun ini baik-baik aja, dan semoga kita selalu ketemu alasan buat ketawa. Peluuuuk paling lama.",
    statusLabel: "Status terbaru",
    statusValue: "pacar jadi tunangan",
    statusNote: "Resmi, wkwk.",
    doneHand: "woopyuuu!",
    topButton: "Balik ke atas",
    cakeLabel: "24",
    cakeLitLabel: "Kue ulang tahun dua tingkat dengan lima lilin yang menyala.",
    cakeOutLabel: "Kue ulang tahun dua tingkat dengan lilin yang sudah padam.",
  },
  footer: {
    line: "Dibuat pakai peluuuuk, buat ade cipa.",
    date: "13.03.2027",
    note: "sampai ketemu di hari H. woopyuuu!",
    top: "Balik ke atas",
  },
};
