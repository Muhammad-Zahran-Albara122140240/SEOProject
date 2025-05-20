import Image from "next/image";
import Script from "next/script";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <Script
        type="application/ld+json"
        id="person-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Muhammad Zahran Albara",
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Institut Teknologi Bandung"
            },
            sameAs: [],
            url: "https://zahranalbara.vercel.app",
            jobTitle: "Mahasiswa Teknik Informatika",
            knowsAbout: [
              "Next.js", "TypeScript", "PHP", "Laravel",
              "Godot", "Kotlin", "Go", "Tailwind", "ReactJS"
            ]
          }),
        }}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl font-bold leading-tight mb-2">Muhammad Zahran Albara</h1>
            <p className="text-blue-100 text-xl mb-1">NIM: 122140240</p>
            <p className="text-blue-100 text-lg">Teknik Informatika, Semester 6</p>
            
            <div className="mt-8 flex space-x-4">
              <a href="#" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300">
                Portfolio
              </a>
              <a href="#" className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-700 transition-colors duration-300">
                Kontak
              </a>
            </div>
          </div>
          
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
              <Image
                src="/profile.jpg"
                alt="Foto Muhammad Zahran Albara"
                width={256}
                height={256}
                className="rounded-full z-10 relative border-4 border-white shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 inline-block pb-2 border-b-4 border-blue-500">Tentang Saya</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Saya adalah mahasiswa semester 6 yang tertarik pada pengembangan web dan aplikasi,
            baik frontend maupun backend. Saya aktif mengeksplorasi teknologi modern untuk meningkatkan
            keterampilan dan pengetahuan saya dalam bidang teknologi informasi. Dengan semangat belajar yang tinggi,
            saya terus mengembangkan diri untuk menjadi seorang developer yang handal.
          </p>
          
          <div className="mt-8 flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 inline-block pb-2 border-b-4 border-blue-500">Skill</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Next.js", "TypeScript", "PHP", "Laravel",
              "Godot", "Kotlin", "Golang", "Tailwind", "ReactJS"
            ].map((skill) => (
              <div key={skill} className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <p className="font-semibold text-lg text-gray-800">{skill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 inline-block pb-2 border-b-4 border-blue-500">Projek</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/LILU.png"
                  alt="Thumbnail LILU"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">LILU</h3>
                <p className="text-gray-600 mb-4">Sebuah game 3D horror yang dikembangkan menggunakan Godot 4.3.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Gdscript</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Blender</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/Gehenna.png"
                  alt="Thumbnail Gehenna"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Gehenna</h3>
                <p className="text-gray-600 mb-4">Sebuah Game 2D Action Platformer yang dikembangkan menggunakan bahasa Python dan Library Pygame.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="mb-2">© 2025 Muhammad Zahran Albara</p>
          <p className="text-gray-400 text-sm">Teknik Informatika - Institut Teknologi Sumatera</p>
        </div>
      </footer>
    </main>
  );
}