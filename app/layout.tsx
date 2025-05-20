import './globals.css';
import WebVitalsClient from "./components/WebVitalsClient";

export const metadata = {
  title: "Muhammad Zahran Albara – Portofolio",
  description:
    "Website pribadi Muhammad Zahran Albara, Mahasiswa Teknik Informatika ITB Semester 6.",
  openGraph: {
    title: "Muhammad Zahran Albara",
    description: "Portofolio, skills, dan profil lengkap.",
    url: "https://zahranalbara.vercel.app",
    siteName: "Zahran Albara Personal Website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Zahran Albara",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://zahranalbara.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="font-sans">
        <WebVitalsClient />
        {children}
      </body>
    </html>
  );
}