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
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-slate-600 line-clamp-2">{item.description}</p>
            <p className="mt-4 font-semibold text-indigo-600">${item.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}