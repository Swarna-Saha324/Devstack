"use client"; // যেহেতু স্টেট ব্যবহার করছি, তাই এটি ক্লায়েন্ট কম্পোনেন্ট
import { useState, useEffect } from "react";
import ResourceCard from "@/components/ResourceCard";

export default function ExplorePage() {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("low-to-high");

  // ডাটা ফেচ করা
  useEffect(() => {
    fetch("/api/resources")
      .then((res) => res.json())
      .then((data) => setResources(data));
  }, []);

  // সার্চ, ফিল্টার এবং সর্টিং লজিক
  const processedResources = resources
    .filter((item: any) => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === "All" || item.category === category;
      return matchesSearch && matchesCategory;
    })
    .sort((a: any, b: any) => {
      return sortOrder === "low-to-high" ? a.price - b.price : b.price - a.price;
    });

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto">
        {/* সার্চ এবং কন্ট্রোল বার */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <input 
            type="text" 
            placeholder="Search resources..." 
            className="flex-1 px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select className="px-4 py-3 rounded-xl border border-slate-200 outline-none" onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All Categories</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="AI">AI</option>
          </select>
          <select className="px-4 py-3 rounded-xl border border-slate-200 outline-none" onChange={(e) => setSortOrder(e.target.value)}>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>

        {/* গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processedResources.map((item: any) => (
            <ResourceCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}