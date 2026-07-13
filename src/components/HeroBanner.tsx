"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-50 overflow-hidden">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-[#FFEBE8] rounded-full blur-[120px] opacity-70"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#D7F7E1] rounded-full blur-[120px] opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        {/* ছোট ব্যাজ */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-indigo-700 bg-indigo-50 rounded-full border border-indigo-100"
        >
          🚀 The Future of Dev Resources
        </motion.div>

        {/* মেইন হেডিং */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight"
        >
          Build Faster with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">
            DevStack Hub
          </span>
        </motion.h1>

        {/* সাব-টাইটেল */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Discover curated, high-quality code snippets, templates, and digital assets. 
          Stop reinventing the wheel and start shipping products.
        </motion.p>

        {/* বাটন */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/explore" className="block bg-slate-900 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-slate-200 transition">
              Explore Marketplace
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/about" className="block bg-white text-slate-900 px-8 py-4 rounded-xl font-bold border border-slate-200 hover:border-slate-300 transition">
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}