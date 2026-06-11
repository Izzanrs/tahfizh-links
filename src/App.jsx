import React, { useState } from 'react';
import { BookOpen, Calendar, FileText, Phone, Share2, MessageCircle, Link as LinkIcon } from 'lucide-react';

export default function App() {
  const [showShareToast, setShowShareToast] = useState(false);

  // --- BAGIAN INI ADALAH "DATABASE" ANDA ---
  // Ubah teks dan link di dalam tanda kutip ini kapan saja.
  const schoolData = {
    name: "SDIT Tahfizh Sabilul Qur'an",
    tagline: "Pusat Informasi & Layanan Program Tahfizh",
    year: new Date().getFullYear(),
    contactWA: "https://wa.me/6281234567890", 
  };

  const links = [
    { id: 1, title: "Setoran Hafalan Online (Hafalanku)", url: "https://hafalanku.com", icon: <FileText className="w-5 h-5" />, isHighlight: true },
    { id: 2, title: "Jadwal Ujian Tasmi' & Kenaikan Jilid", url: "https://docs.google.com/", icon: <Calendar className="w-5 h-5" />, isHighlight: false },
    { id: 3, title: "Laporan Perkembangan (Mutaba'ah)", url: "https://docs.google.com/", icon: <BookOpen className="w-5 h-5" />, isHighlight: false },
    { id: 4, title: "Materi Panduan Tajwid Dasar", url: "https://drive.google.com/", icon: <LinkIcon className="w-5 h-5" />, isHighlight: false }
  ];
  // ------------------------------------------

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-emerald-800 py-12 px-4 font-sans selection:bg-emerald-300">
      <div className="max-w-md mx-auto flex flex-col items-center relative">
        <div className="w-full flex justify-end mb-4 relative z-10">
          <button onClick={handleShare} className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white shadow-lg">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        
        {showShareToast && (
          <div className="absolute top-0 right-14 bg-white text-emerald-800 px-4 py-2 rounded-lg shadow-xl text-sm font-bold z-20">
            Tautan disalin!
          </div>
        )}

        <div className="w-full bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl shadow-2xl flex flex-col items-center">
          <div className="w-24 h-24 bg-white rounded-full border-4 border-emerald-300 shadow-inner flex items-center justify-center">
            <BookOpen className="w-12 h-12 text-emerald-700" />
          </div>
          <h1 className="mt-5 text-2xl font-extrabold text-white text-center">{schoolData.name}</h1>
          <p className="mt-2 text-center text-emerald-100 text-sm font-medium">{schoolData.tagline}</p>
        </div>

        <div className="w-full mt-8 space-y-4">
          {links.map((link) => (
            <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer"
              className={`group relative flex items-center justify-center w-full p-4 rounded-2xl shadow-lg transition-all ${link.isHighlight ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white' : 'bg-white text-gray-800'}`}>
              <div className={`absolute left-5 ${link.isHighlight ? 'text-white' : 'text-emerald-600'}`}>{link.icon}</div>
              <span className="font-bold text-center z-10 text-[15px] px-10">{link.title}</span>
            </a>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 bg-white/5 py-4 px-8 rounded-full border border-white/10">
          <a href={schoolData.contactWA} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-white gap-1">
            <MessageCircle className="w-6 h-6" />
            <span className="text-[10px] uppercase font-bold">WA Admin</span>
          </a>
          <a href="tel:+6281234567890" className="flex flex-col items-center text-white gap-1">
            <Phone className="w-6 h-6" />
            <span className="text-[10px] uppercase font-bold">Telepon</span>
          </a>
        </div>
        
        <p className="mt-8 text-white/40 text-xs font-bold text-center">© {schoolData.year} {schoolData.name}</p>
      </div>
    </div>
  );
}
