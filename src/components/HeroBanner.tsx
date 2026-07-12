"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center bg-gradient-to-br from-[#FFEBE8] to-[#D7F7E1] px-4">
      <div className="container mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-black text-slate-900 mb-6"
        >
          Build Faster with <span className="text-indigo-700">DevStack Hub</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto"
        >
          The ultimate marketplace for developers to share and discover high-quality code snippets and templates.
        </motion.p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/explore" className="bg-indigo-700 text-white px-8 py-4 rounded-full font-bold shadow-lg">
            Start Exploring
          </Link>
        </motion.div>
      </div>
    </section>
  );
}