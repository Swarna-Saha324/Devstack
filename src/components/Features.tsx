"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { toast } from "react-toastify";


function ResourceCard({ item }: { item: any }) {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleViewDetails = () => {
    if (!session) {
      toast.error("Please login to view details!");
      router.push("/login");
      return;
    }
    router.push(`/items/${item._id}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 bg-gradient-to-br from-[#FFEBE8] to-[#D7F7E1]  rounded-3xl border border-slate-100 shadow-sm"
    >
      <div className="h-48 w-full overflow-hidden rounded-xl mb-4">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
      <p className="text-slate-600 line-clamp-2">{item.description}</p>
      <div className="flex justify-between items-center mt-6">
        <span className="text-lg font-bold text-slate-900">${item.price}</span>
        <button onClick={handleViewDetails} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition">
          View Details
        </button>
      </div>
    </motion.div>
  );
}

export function FeaturesSection({ items }: { items: any[] }) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
        {items.map((item: any) => (
          <ResourceCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
}