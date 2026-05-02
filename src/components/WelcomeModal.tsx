"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, LogIn, Compass, X, Gamepad2 } from "lucide-react";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative w-full max-w-lg glass-panel rounded-2xl overflow-hidden border border-[var(--color-neon-cyan)]/30 glow-cyan bg-cyber-panel p-1"
          >
            {/* Header / Top Bar */}
            <div className="flex justify-between items-center p-4 border-b border-[var(--color-neon-cyan)]/20">
              <div className="flex items-center gap-2 text-[var(--color-neon-cyan)]">
                <Gamepad2 size={20} />
                <span className="font-mono text-sm tracking-widest text-glow">ALFAGAMING</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[var(--color-cyber-muted)] hover:text-[var(--color-neon-magenta)] transition-colors"
                aria-label="Close dialog"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 text-center">
              <h2 id="modal-title" className="font-mono text-3xl font-bold mb-2 text-white text-glow">
                Halo, Gamer!
              </h2>
              <p className="text-[var(--color-cyber-muted)] mb-8 max-w-sm mx-auto">
                Selamat datang di NeonNexus by alfagaming. Platform tempat kamu bisa main game seru dan berkumpul dengan komunitas!
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                <a
                  href="https://t.ly/reg.alfa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 w-full py-4 bg-[var(--color-neon-cyan)] text-[#05050A] font-bold rounded-lg hover:bg-white transition-all overflow-hidden"
                  aria-label="Join NeonNexus"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
                  <UserPlus className="relative z-10" size={20} />
                  <span className="relative z-10 font-sans font-semibold tracking-wide">Daftar Sekarang (Join)</span>
                </a>

                <a
                  href="https://t.ly/alfa-sukses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3 bg-transparent border border-[var(--color-neon-magenta)] text-[var(--color-neon-magenta)] hover:bg-[var(--color-neon-magenta)]/10 font-semibold rounded-lg transition-all glow-magenta text-glow-magenta"
                  aria-label="Login to NeonNexus"
                >
                  <LogIn size={20} />
                  <span className="font-sans font-semibold tracking-wide">Masuk Akun (Login)</span>
                </a>

                <a
                  href="https://t.ly/alfa.vip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3 text-[var(--color-cyber-muted)] hover:text-white transition-colors"
                  aria-label="Explore NeonNexus"
                >
                  <Compass size={18} />
                  <span className="font-sans text-sm underline decoration-dashed underline-offset-4 tracking-wide">Mulai Penjelajahan</span>
                </a>
              </div>
            </div>
            
            {/* Decorative bottom edge */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[var(--color-neon-cyan)] to-transparent opacity-50"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
