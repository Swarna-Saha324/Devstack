"use client";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client"; // আপনার অথgetClient
import { toast } from "react-toastify";

export default function ResourceCard({ item }: { item: any }) {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleViewDetails = () => {
    // ১. লগইন চেক
    if (!session) {
      toast.error("Please login to view details!");
      router.push("/login");
      return;
    }

    // ২. লগইন থাকলে আইডির মাধ্যমে ডিটেইল পেজে নেভিগেট করা
    router.push(`/items/${item._id}`);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
      {/* ইমেজ সেকশন */}
      <div className="h-48 w-full overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>

      <div className="p-6">
        <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{item.category}</span>
        <h3 className="text-xl font-bold text-slate-900 mt-2">{item.title}</h3>
        <p className="text-slate-600 text-sm mt-2 line-clamp-2">{item.description}</p>
        
        <div className="flex justify-between items-center mt-6">
          <span className="text-lg font-bold text-slate-900">${item.price}</span>
          
          {/* এখানে onClick যোগ করা হয়েছে */}
          <button 
            onClick={handleViewDetails} 
            className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition cursor-pointer"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}