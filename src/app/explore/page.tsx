import { MongoClient } from "mongodb";
import Image from "next/image";

async function getResources() {
  const client = await MongoClient.connect(process.env.MONGODB_URI!);
  const db = client.db("devstack");
  return await db.collection("resources").find().toArray();
}

export default async function ExplorePage() {
  const resources = await getResources();

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Explore Resources</h1>
        <p className="text-slate-500 mb-10">Discover tools crafted by developers for developers.</p>

        {/* গ্রিড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((item: any) => (
            <div key={item._id.toString()} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
              {/* ইমেজ সেকশন */}
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              {/* কার্ডের কন্টেন্ট */}
              <div className="p-6">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">{item.title}</h3>
                <p className="text-slate-600 text-sm mt-2 line-clamp-2">{item.description}</p>
                
                <div className="flex justify-between items-center mt-6">
                  <span className="text-lg font-bold text-slate-900">${item.price}</span>
                  <button className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}