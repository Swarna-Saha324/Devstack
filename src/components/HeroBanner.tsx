"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  // আপনি এখানে আপনার কাঙ্ক্ষিত ইমেজের পাথটি বসিয়ে দেবেন
  const bgImageUrl = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop";

  return (
    <section 
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* ব্যাকগ্রাউন্ড ইমেজ এবং ওভারলে */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        {/* এটি হলো অস্বচ্ছতা কমানোর জন্য মূল কালো ওভারলে (Opacity Layer) */}
        <div className="absolute inset-0 bg-black opacity-75"></div> {/* opacity-75 মানে ২৫% ভিজিবল */}
      </div>

      {/* আগের রঙিন ব্লার এলিমেন্টগুলো চাইলে রাখতে পারেন, অথবা মুছে ফেলতে পারেন */}
      {/* আমি এগুলো সামান্য অস্বচ্ছ রেখেছি ইমেজের সাথে মিশিয়ে দেওয়ার জন্য */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
        <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-[#FFEBE8] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#D7F7E1] rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
      
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          // টেক্সট স্পষ্টভাবে পড়ার জন্য ব্যাকগ্রাউন্ড এবং বর্ডার কালার গাঢ় করেছি
          className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-indigo-200 bg-indigo-900/60 rounded-full border border-indigo-800 backdrop-blur-sm"
        >
          🚀 The Future of Dev Resources
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // হেডিং সাদা বা হালকা রঙে পরিবর্তন করেছি
          className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
        >
          Build Faster with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
            DevStack Hub
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          // প্যারাগ্রাফ টেক্সট সাদা বা হালকা গ্রে রঙে পরিবর্তন করেছি
          className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Discover curated, high-quality code snippets, templates, and digital assets. 
          Stop reinventing the wheel and start shipping products.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {/* বাটন স্টাইল আপডেট করেছি */}
            <Link href="/explore" className="block bg-emerald-500 text-slate-950 px-8 py-4 rounded-xl font-bold shadow-2xl shadow-emerald-950/50 transition hover:bg-emerald-400">
              Explore Marketplace
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {/* সেকেন্ডারি বাটন স্টাইল আপডেট করেছি */}
            <Link href="/about" className="block bg-white/10 text-white backdrop-blur-sm px-8 py-4 rounded-xl font-bold border border-white/20 hover:bg-white/20 transition">
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}