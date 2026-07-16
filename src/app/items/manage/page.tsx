"use client";
import { useEffect, useState } from "react";
import { deleteResource } from "@/app/actions/itemActions";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function ManageItemsPage() {
  const { data: session } = authClient.useSession();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/resources")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: string) => {
    const userRole = (session?.user as any)?.role;
    if (userRole !== "admin") {
      toast.error("You are not authorized!");
      return;
    }

    if (!confirm("Are you sure you want to delete this?")) return;

    try {
      await deleteResource(id, userRole);
      setItems(items.filter((item: any) => item._id !== id));
      toast.success("Item deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete item.");
    }
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if ((session?.user as any)?.role !== "admin") {
    return <div className="text-center py-20 text-red-600 font-bold">Access Denied: Only Admins can manage items.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFEBE8] to-[#D7F7E1] py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold mb-8 text-slate-800">Manage Resources (Admin Panel)</h1>
        <div className="overflow-x-auto bg-white/80 backdrop-blur rounded-xl shadow-lg border border-white p-2 md:p-6">
          <table className="w-full text-left text-sm md:text-base">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="p-2 md:p-4">Title</th>
                <th className="p-2 md:p-4">Category</th>
                <th className="p-2 md:p-4">Price</th>
                <th className="p-2 md:p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item: any) => (
                <tr key={item._id} className="border-b border-slate-100 hover:bg-white/50">
                  <td className="p-2 md:p-4 font-medium truncate max-w-[100px] md:max-w-none">{item.title}</td>
                  <td className="p-2 md:p-4 whitespace-nowrap">{item.category}</td>
                  <td className="p-2 md:p-4">${item.price}</td>
                  <td className="p-2 md:p-4 text-center">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition text-xs md:text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}