"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WelcomeModal from "@/components/WelcomeModal";
import { Gamepad2, Users, Trophy, Zap, ChevronDown } from "lucide-react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [randomBars, setRandomBars] = useState<{ height: number; delay: number }[]>([]);

  useEffect(() => {
    setIsMounted(true);
    // Menghasilkan nilai acak hanya di sisi klien setelah render pertama
    setRandomBars(
      [...Array(6)].map((_, i) => ({
        height: Math.random() * 100,
        delay: i * 0.15,
      }))
    );
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8 text-[var(--color-neon-cyan)]" />,
      title: "Komunitas Super Aktif",
      desc: "Temukan teman mabar sefrekuensi. Ribuan gamer alfagaming siap menyambutmu untuk bertualang bersama."
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-[var(--color-neon-magenta)]" />,
      title: "Koleksi Game Premium",
      desc: "Akses eksklusif ke berbagai game berkualitas tinggi dengan grafis memukau dan gameplay futuristik."
    },
    {
      icon: <Trophy className="w-8 h-8 text-[var(--color-neon-cyan)]" />,
      title: "Turnamen & Hadiah",
      desc: "Ikuti berbagai turnamen esports bergengsi setiap bulan dan menangkan hadiah jutaan rupiah."
    },
    {
      icon: <Zap className="w-8 h-8 text-[var(--color-neon-magenta)]" />,
      title: "Server Anti-Lag",
      desc: "Pengalaman bermain super mulus dengan server ping rendah yang dioptimalkan untuk performa tertinggi."
    }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col bg-cyber-bg">
      <WelcomeModal />
      
      {/* Background Effects */}
      <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--color-neon-cyan)]/5 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[var(--color-neon-magenta)]/5 blur-[150px] pointer-events-none" />
      <div className="fixed inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10">
        <div className="z-10 container mx-auto px-6 text-center max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-neon-cyan)]/30 bg-[var(--color-neon-cyan)]/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-neon-cyan)] animate-pulse"></span>
            <span className="text-xs font-mono text-[var(--color-neon-cyan)] tracking-widest uppercase">Platform Gaming Terbaik • alfagaming</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter"
          >
            <span className="text-white text-glow">NEON</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-cyan)] to-[var(--color-neon-purple)]">NEXUS</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-[var(--color-cyber-muted)] mb-12 max-w-2xl mx-auto leading-relaxed font-sans"
          >
            Rasakan pengalaman bermain game futuristik terbaik bersama <strong className="text-[var(--color-neon-cyan)] font-normal">NeonNexus</strong> by <span className="text-white">alfagaming</span>. Temukan game favoritmu, kumpulkan teman-temanmu, dan nikmati keseruan bermain tanpa batas!
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="https://t.ly/reg.alfa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[var(--color-neon-cyan)] text-[#05050A] font-sans font-bold tracking-wide hover:bg-white transition-all duration-300 glow-cyan rounded-lg text-lg"
            >
              Mulai Bermain Sekarang
            </a>
            
            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[var(--color-cyber-muted)]/30 text-white font-sans tracking-wide hover:border-[var(--color-neon-magenta)] hover:text-[var(--color-neon-magenta)] transition-all duration-300 rounded-lg text-lg flex items-center justify-center gap-2"
            >
              Kenapa Pilih Kami? <ChevronDown size={20} />
            </a>
          </motion.div>
        </div>

        {/* Decorative Cyberpunk Elements (Client-side Math.random) */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
          {isMounted && randomBars.map((bar, i) => (
            <div key={i} className="w-1 h-12 bg-[var(--color-cyber-muted)]/20 rounded-full overflow-hidden">
              <div 
                className="w-full bg-[var(--color-neon-cyan)] rounded-full animate-pulse" 
                style={{ height: `${bar.height}%`, animationDelay: `${bar.delay}s` }}
              ></div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative z-10 bg-[var(--color-cyber-panel)]/50 border-t border-[var(--color-neon-cyan)]/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-mono text-3xl md:text-5xl font-bold text-white mb-4">
              Kenapa Bermain di <span className="text-[var(--color-neon-cyan)] text-glow">NeonNexus</span>?
            </h2>
            <p className="text-[var(--color-cyber-muted)] max-w-2xl mx-auto font-sans text-lg">
              Kami tidak sekadar menyediakan tempat bermain. Bersama alfagaming, kami membangun rumah terbaik untuk para gamer sejati.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-2xl flex flex-col items-start hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="mb-6 p-4 bg-black/40 rounded-xl border border-white/5">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-sans">{feat.title}</h3>
                <p className="text-[var(--color-cyber-muted)] font-sans leading-relaxed text-sm">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a
              href="https://t.ly/reg.alfa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-[var(--color-neon-magenta)] text-[var(--color-neon-magenta)] hover:bg-[var(--color-neon-magenta)] hover:text-white font-sans font-bold tracking-wide rounded-full transition-all duration-300 glow-magenta"
            >
              Bergabung Bersama alfagaming Sekarang!
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-[var(--color-cyber-muted)] font-mono border-t border-white/5 bg-black/20">
        <p>&copy; {new Date().getFullYear()} NeonNexus by alfagaming. All rights reserved.</p>
      </footer>
    </main>
  );
}
