"use client";
import Button from "@/components/shared/Button";
import { addItem } from "@/app/actions/itemActions";

export default function AddItemPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-xl mx-auto bg-gradient-to-br from-[#FFEBE8] to-[#D7F7E1]  p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Add New Resource</h2>
        <p className="text-slate-500 mb-8">Fill in the details to share your tool with the community.</p>
        
        <form action={addItem} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Resource Title</label>
            <input name="title" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-100 outline-none transition" placeholder="e.g. Awesome UI Kit" />
          </div>

          {/* Image URL (নতুন) */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Image URL</label>
            <input name="image" type="url" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-100 outline-none transition" placeholder="https://example.com/image.jpg" />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Description</label>
            <textarea name="description" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-100 outline-none h-32 resize-none" placeholder="What does this resource do?" />
          </div>

          {/* Category & Price */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Category</label>
              <select name="category" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-100 outline-none">
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="AI">AI</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Price ($)</label>
              <input type="number" name="price" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-100 outline-none" placeholder="0.00" />
            </div>
          </div>

          <div className="pt-4">
            <Button type="submit" variant="primary">Publish Resource</Button>
          </div>
        </form>
      </div>
    </div>
  );
}