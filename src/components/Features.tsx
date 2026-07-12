// src/components/FeaturesSection.tsx
"use client";
import { motion } from "framer-motion";

export function FeaturesSection({ items }: { items: any[] }) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
        {items.map((item: any) => (
          <motion.div 
            key={item._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm"
          >
             <div className="h-48 w-full overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-slate-600 line-clamp-2">{item.description}</p>
        <div className="flex justify-between items-center mt-6">
          <span className="text-lg font-bold text-slate-900">${item.price}</span>
          <button className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition">
            View Details
          </button>
        </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}