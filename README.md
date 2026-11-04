# 🫘 Kenali Ginjal by Fronstellar

**Atlas interaktif dan laboratorium simulasi fisiologi ginjal serta sistem urinaria**

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-0f766e?style=for-the-badge)](https://kazadarojat.github.io/ginjal/)
[![Platform](https://img.shields.io/badge/Platform-Web-2563eb?style=for-the-badge)](https://kazadarojat.github.io/ginjal/)
[![Type](https://img.shields.io/badge/Type-Edukasi_Medis-7c3aed?style=for-the-badge)](https://github.com/kazadarojat/ginjal)

> **Buka aplikasi:** https://kazadarojat.github.io/ginjal/  
> **Kode sumber:** https://github.com/kazadarojat/ginjal

## Tentang proyek

**Kenali Ginjal** adalah aplikasi web edukatif yang menggabungkan ilustrasi anatomi, visualisasi proses fisiologis, serta simulasi interaktif untuk membantu memahami bagaimana ginjal menghasilkan urin, bagaimana hormon mengaturnya, bagaimana urin disimpan di vesika urinaria, dan bagaimana proses miksi berlangsung.

Alih-alih hanya membaca uraian statis, pengguna dapat mengubah parameter, mengamati perubahan respons model, melacak molekul, serta mempelajari hubungan antarsistem secara bertahap. Aplikasi ditujukan untuk **pembelajaran**, bukan pengambilan keputusan klinis.

## Daftar isi

- [Fitur utama](#fitur-utama)
- [Panduan penggunaan](#panduan-penggunaan)
- [Konsep fisiologi yang dipelajari](#konsep-fisiologi-yang-dipelajari)
- [Cara menjalankan secara lokal](#cara-menjalankan-secara-lokal)
- [Struktur proyek](#struktur-proyek)
- [Deployment GitHub Pages](#deployment-github-pages)
- [Batasan model dan keselamatan](#batasan-model-dan-keselamatan)
- [Kontribusi dan pelaporan masalah](#kontribusi-dan-pelaporan-masalah)
- [Kredit dan lisensi](#kredit-dan-lisensi)

## Fitur utama

| Modul / fitur | Apa yang dapat dipelajari |
| --- | --- |
| **Atlas nefron dan organ urinaria** | Hubungan struktur ginjal, nefron, saluran urinaria, dan perjalanan urin |
| **Tahapan pembentukan urin** | Filtrasi glomerulus, reabsorpsi, sekresi tubular, dan pemekatan urin |
| **Pelacakan molekul dan ion** | Pergerakan air, elektrolit, glukosa, urea, dan zat terkait antar-kompartemen |
| **Pengaruh hormon** | Hubungan ADH, RAAS, dan mediator hormonal dengan pembuluh darah, transport tubular, serta urin akhir |
| **Laboratorium fisiologi terpadu** | Eksperimen perubahan tekanan, aliran, resistensi vaskular, sawar filtrasi, dan segmen tubulus |
| **Faktor produksi urin** | Eksplorasi contoh pengaruh minum air, panas/berkeringat, stres/simpatis, dan dorongan miksi |
| **Produksi dan pengisian vesika** | Animasi perkembangan volume urin terhadap waktu dan sensasi ingin berkemih |
| **Kepekatan dan warna urin** | Visualisasi perubahan warna urin relatif terhadap konsentrasi atau status hidrasi pada model |
| **Simulasi miksi** | Pengosongan vesika, pemicu refleks, serta ilustrasi jalur keluarnya urin dengan pilihan anatomi laki-laki/perempuan |

> **Catatan:** Angka, perubahan warna, dan hubungan antarfaktor pada simulasi adalah representasi pembelajaran yang disederhanakan, bukan nilai diagnostik individual.

### 1. Atlas anatomi dan nefron

Kenali jalur dari darah yang masuk ke ginjal hingga cairan yang menjadi urin. Tampilan nefron membantu menghubungkan proses di glomerulus, tubulus, dan duktus kolektivus dengan fungsi masing-masing struktur. Tampilan organ menempatkan nefron dalam konteks keseluruhan sistem urinaria.

### 2. Pembentukan urin dan pelacakan molekul

Jelajahi urutan konseptual:

1. **Filtrasi glomerulus:** air dan solut kecil memasuki ruang Bowman; sel darah dan sebagian besar protein tetap berada dalam sirkulasi.
2. **Reabsorpsi tubular:** zat yang diperlukan tubuh kembali ke darah.
3. **Sekresi tubular:** zat tertentu berpindah dari darah/interstisium menuju lumen tubulus.
4. **Pengaturan akhir urin:** reabsorpsi air dan elektrolit lebih lanjut menentukan komposisi urin.

Tahapan ini saling tumpang tindih secara fisiologis; urutan pada aplikasi dipakai untuk memudahkan belajar.

### 3. Hormon dan regulasi ginjal

Modul **Pengaruh hormon** menghubungkan sinyal hormonal dengan respons pembuluh darah, fungsi ginjal, dan karakteristik urin. Pokok bahasannya mencakup:

- **ADH (vasopresin):** meningkatkan permeabilitas air pada duktus kolektivus melalui reseptor V2 dan translokasi aquaporin-2, sehingga reabsorpsi air meningkat.
- **RAAS:** renin memulai rangkaian pembentukan angiotensin II; angiotensin II mendukung pemeliharaan tekanan darah dan merangsang pelepasan aldosteron.
- **Aldosteron:** meningkatkan reabsorpsi natrium dan mendukung sekresi kalium pada nefron distal, bergantung pada kondisi fisiologis.
- **Hubungan terintegrasi:** perubahan regulasi hormonal dapat memengaruhi hemodinamika, transport zat, volume, dan kepekatan urin.

Perlu diingat: **RAAS adalah suatu sistem hormonal, bukan satu hormon tunggal.**

### 4. Laboratorium fisiologi terpadu

Gunakan kontrol simulasi untuk mengeksplorasi hubungan sebab-akibat, termasuk:

- tekanan arteri dan resistensi pembuluh pada model;
- karakteristik sawar filtrasi;
- transport di segmen-segmen nefron;
- eksperimen perubahan parameter dan perbandingan hasil;
- respons produksi urin dan proses pengosongan vesika.

Sebagian hasil memakai hubungan relatif atau parameter ilustratif, bukan perhitungan GFR maupun produksi urin yang tervalidasi secara klinis.

### 5. Pengisian vesika, rasa ingin berkemih, dan miksi

Simulasi memperlihatkan akumulasi urin pada **vesika urinaria (kandung kemih)** serta perubahan sensasi berkemih saat volumenya meningkat. Pengguna dapat menjalankan waktu model, mengamati pengisian, dan menjelajahi pengosongan vesika lewat ilustrasi jalur urin.

Secara fisiologis, peregangan dinding vesika mengaktifkan aferen sensorik. Integrasi di medula spinalis sakral, pusat miksi pontin, dan kontrol kortikal menentukan koordinasi kontraksi detrusor serta relaksasi sfingter uretra. Sensasi ingin berkemih **bukan** fungsi dari volume saja; keadaan tubuh dan individu turut memengaruhinya.

Visualisasi mencakup pilihan jalur anatomi **laki-laki dan perempuan**. Nilai volume dan titik kemunculan sensasi dalam aplikasi adalah contoh edukatif, bukan ambang universal.

### 6. Warna dan kepekatan urin

Aplikasi menampilkan perbedaan urin yang lebih pekat dan lebih encer melalui gradasi warna, dari kuning lebih gelap menuju kuning sangat pucat.

**Interpretasi penting:** warna urin bukan alat ukur osmolalitas yang akurat. Makanan, vitamin, obat, pigmen, dan beberapa kondisi medis dapat mengubah warna urin; urin cokelat atau sangat gelap tidak boleh otomatis dianggap sekadar kurang minum.

## Panduan penggunaan

1. Buka **[aplikasi interaktif](https://kazadarojat.github.io/ginjal/)** di browser.
2. Mulai dari tampilan **Nefron** untuk mengenali unit fungsional ginjal, atau **Organ** untuk melihat sistem urinaria.
3. Jalankan animasi proses pembentukan urin dan baca keterangan tiap tahap.
4. Gunakan pelacakan molekul untuk menghubungkan lokasi transport dengan arah perpindahan zat.
5. Buka bagian **Pengaruh hormon** dan ubah parameter yang tersedia untuk mengamati respons model.
6. Coba **Laboratorium fisiologi terpadu** serta preset faktor tubuh untuk mengeksplorasi perubahan hasil.
7. Jalankan waktu simulasi, amati **pengisian vesika**, sensasi ingin berkemih, dan **perubahan warna urin**.
8. Jalankan demonstrasi **miksi** dan bandingkan jalur anatomi yang tersedia.

**Saran belajar:** ubah satu parameter pada satu waktu, catat hasilnya, lalu bandingkan dengan kondisi acuan. Jika perlu, gunakan tombol reset/kembali ke acuan sebelum eksperimen berikutnya.

## Konsep fisiologi yang dipelajari

| Konsep | Ringkasan |
| --- | --- |
| **Filtrasi** | Perpindahan cairan dari kapiler glomerulus ke ruang Bowman melalui sawar filtrasi |
| **Reabsorpsi** | Perpindahan zat dari lumen tubulus kembali ke sirkulasi |
| **Sekresi** | Perpindahan zat menuju lumen tubulus untuk regulasi dan eliminasi |
| **Ekskresi** | Jumlah zat yang keluar bersama urin: secara konseptual = filtrasi − reabsorpsi + sekresi |
| **Hemodinamika renal** | Hubungan tekanan dan resistensi vaskular dengan perfusi dan filtrasi |
| **ADH** | Regulasi reabsorpsi air dan konsentrasi urin |
| **RAAS** | Regulasi tekanan, volume cairan ekstraseluler, dan penanganan natrium |
| **Refleks miksi** | Koordinasi penyimpanan dan pengeluaran urin melalui jalur saraf otonom dan somatik |

## Cara menjalankan secara lokal

Proyek merupakan **aplikasi web statis** menggunakan HTML, CSS, dan JavaScript; tidak memerlukan instalasi paket npm ataupun proses build.

### Prasyarat

- Browser modern (misalnya Chrome, Firefox, atau Edge).
- Python 3 **opsional**, hanya untuk server lokal sederhana.

### Langkah

```bash
git clone https://github.com/kazadarojat/ginjal.git
cd ginjal
python3 -m http.server 8000
```

Buka **http://localhost:8000**.

Di Windows, apabila `python3` tidak dikenali, coba:

```powershell
py -m http.server 8000
```

Hentikan server dengan **Ctrl+C**. Karena proyek statis, perubahan HTML/CSS/JS dapat diperiksa dengan memuat ulang halaman.

## Struktur proyek

```text
ginjal/
├── index.html       # Struktur halaman, konten modul, dan ilustrasi
├── style.css        # Gaya tampilan dan layout responsif
├── app.js           # Interaksi utama, visualisasi, dan kontrol hormon/faktor
├── advanced.js      # Model fisiologi terpadu, simulasi vesika dan miksi
├── fonts/           # Aset font serta informasi lisensinya
├── .nojekyll        # Konfigurasi agar GitHub Pages tidak memproses melalui Jekyll
└── README.md        # Dokumentasi proyek
```

**Arsitektur singkat:** `index.html` memuat `app.js` dan `advanced.js`; keduanya bekerja di sisi browser. Repositori tidak memerlukan backend untuk menjalankan simulasi yang tersedia saat ini.

## Deployment GitHub Pages

Deployment publik menggunakan **GitHub Pages** dan menyajikan berkas statis dari branch `main` pada direktori **`/ (root)`**.

Untuk menyiapkan deployment pada fork:

1. Masuk ke **Settings → Pages** pada repository GitHub.
2. Di **Build and deployment**, pilih **Deploy from a branch**.
3. Pilih branch **`main`** dan folder **`/ (root)`**, lalu simpan.
4. Pastikan ada `index.html` di root.
5. Gunakan URL GitHub Pages yang diberikan GitHub untuk membuka hasilnya.

Perubahan pada branch sumber Pages akan dipublikasikan mengikuti proses deployment GitHub.

## Batasan model dan keselamatan

Aplikasi ini ditujukan untuk **edukasi anatomi dan fisiologi**, bukan perangkat medis.

- Model menggunakan penyederhanaan respons, konstanta, serta hubungan antarvariabel untuk visualisasi.
- Simulasi tidak memodelkan semua mekanisme, termasuk autoregulasi ginjal dan umpan balik sistemik secara penuh.
- Besaran yang ditampilkan tidak selalu dikalibrasi terhadap data klinis manusia.
- Ambang sensasi berkemih, laju produksi urin, dan interpretasi warna urin dapat sangat bervariasi.
- **Jangan gunakan hasil aplikasi untuk diagnosis, pemantauan pasien, penentuan terapi, atau keputusan hidrasi individual.**

Untuk penggunaan akademik, cocokkan penjelasan dengan buku fisiologi dan sumber ilmiah primer atau pedoman yang relevan.

## Kontribusi dan pelaporan masalah

Kontribusi untuk memperbaiki ketepatan fisiologi, pengalaman belajar, aksesibilitas, dan kejelasan ilustrasi sangat diterima.

1. Buka [Issues](https://github.com/kazadarojat/ginjal/issues) untuk melaporkan masalah atau mengusulkan fitur.
2. Jelaskan langkah reproduksi, hasil yang diharapkan, hasil aktual, browser yang digunakan, dan tangkapan layar bila relevan.
3. Untuk kontribusi kode, fork repository, buat branch perubahan, kemudian ajukan **pull request**.
4. Sertakan penjelasan tentang dampak perubahan, terutama bila mengubah rumus, asumsi model, atau isi materi medis.

**Ide pengembangan:** validasi pedagogis dengan pengguna, pengujian lintas perangkat, referensi ilmiah per modul, dan eksperimen fisiologi tambahan.

## Kredit dan lisensi

Dikembangkan sebagai proyek edukasi **Kenali Ginjal by Fronstellar**. Repository dikelola oleh [@kazadarojat](https://github.com/kazadarojat).

Aset font dan ketentuan penggunaannya berada pada folder [`fonts/`](https://github.com/kazadarojat/ginjal/tree/main/fonts).

**Lisensi kode:** belum dinyatakan melalui berkas `LICENSE` di root repository pada saat dokumentasi ini ditulis. Repositori publik **tidak otomatis berarti** kode bebas digunakan ulang dengan lisensi open-source tertentu. Jika ingin membuka penggunaan dan kontribusi dengan ketentuan yang jelas, tambahkan berkas `LICENSE` secara terpisah.

---

<p align="center"><strong>Pelajari alurnya. Ubah parameternya. Pahami fisiologinya.</strong><br><a href="https://kazadarojat.github.io/ginjal/">Jalankan Kenali Ginjal ↗</a></p>
