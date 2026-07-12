import { auth } from "@/lib/auth"; // আপনার কনফিগারেশন ফাইল
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { headers } from "next/headers"; // এটা জরুরি
import { redirect } from "next/navigation";

export default async function ItemDetailsPage({ params }: { params: { id: string } }) {
  // better-auth এর সেশন পাওয়ার সঠিক পদ্ধতি
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  // ডাটাবেজ থেকে আইটেম ফেচ করা
  const { id } = await params;
  const client = await clientPromise;
  const db = client.db("devstack");
  const item = await db.collection("resources").findOne({ _id: new ObjectId(id) });

  if (!item) {
    return <div className="text-center py-20 text-red-600 font-bold">Item not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFEBE8] to-[#D7F7E1] py-16 px-4">
      <div className="container mx-auto max-w-4xl bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white/50">
        
        {/* Header Section */}
        <div className="mb-8">
          <span className="px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm uppercase tracking-wider">
            {item.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">{item.title}</h1>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg text-slate-700 mb-10">
          <p className="leading-relaxed">{item.description}</p>
        </div>

        {/* Price & Action */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-6 bg-white/50 rounded-2xl border border-white">
          <div className="text-3xl font-black text-indigo-700">
            ${item.price}
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg w-full md:w-auto">
            Get Access Now
          </button>
        </div>
      </div>
    </div>
  );
}