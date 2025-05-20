# 🌐 Muhammad Zahran Albara – Portofolio Pribadi Implementasi SEO dan Pengukuran Kinerja Web

Ini adalah website portofolio pribadi dari **Muhammad Zahran Albara**, mahasiswa **Teknik Informatika** semester 6 di **Institut Teknologi Sumatera**. Website ini menampilkan informasi pribadi, skill, projek, serta mengintegrasikan fitur **SEO** dan **pengukuran performa (Web Vitals)** untuk pengalaman pengguna terbaik.

---

## 🚀 Teknologi yang Digunakan

- [Next.js 15.3.2 (App Router)](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Web Vitals](https://web.dev/vitals/)
- [Schema.org JSON-LD](https://schema.org/)
- [Lucide Icons](https://lucide.dev/)

---

## ✨ Fitur Utama

### ✅ SEO Optimization
- Struktur heading semantik (`h1`, `h2`, dll)
- Meta tag, Open Graph, dan Twitter Card
- `JSON-LD` structured data (`@type: Person`) dari schema.org
- Alt text untuk semua gambar

### 📊 Web Vitals Integration
Mengukur 5 metrik performa real-user:
- `CLS` – Cumulative Layout Shift
- `LCP` – Largest Contentful Paint
- `FID` – First Input Delay
- `FCP` – First Contentful Paint
- `TTFB` – Time to First Byte

### 👨‍💻 Konten
- Profil dan informasi personal
- Daftar skill teknis
- Showcase proyek dengan gambar & deskripsi
- Kontak sosial (GitHub, LinkedIn, Email, Instagram)

---


## 📁 Struktur Direktori Penting

```bash
/app
  ├── page.tsx         # Halaman utama
  ├── layout.tsx       # Layout + metadata SEO
/components
  └── WebVitalsClient.tsx  # Pengukuran performa Web Vitals
public
  ├── profile.jpg
  └── image.jpg        # Gambar project
tailwind.config.js
postcss.config.js
web-vitals.ts
