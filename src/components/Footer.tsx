export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      {/* এখানে grid-cols-1 যোগ করা হয়েছে যাতে মোবাইলে ১ কলামে থাকে */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
        
        {/* ব্র্যান্ড সেকশন */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white text-2xl font-black mb-4">DevStackHub</h2>
          <p className="text-sm leading-relaxed max-w-xs">
            Empowering developers with premium resources and modern tools to build the future of the web.
          </p>
        </div>

        {/* লিঙ্কস */}
        <div>
          <h4 className="text-white font-bold mb-6">Product</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="/explore" className="hover:text-indigo-400 transition">Explore Tools</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Pricing</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Changelog</a></li>
          </ul>
        </div>

        {/* সাপোর্ট */}
        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="/contact" className="hover:text-indigo-400 transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Documentation</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* কন্টাক্ট ও নিউজলেটার */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-white font-bold mb-6">Connect</h4>
          <p className="text-sm mb-4">Follow us for updates.</p>
          <div className="flex gap-4">
             <a href="#" className="hover:text-indigo-400 transition">Twitter</a>
             <a href="#" className="hover:text-indigo-400 transition">GitHub</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
        <p>© {new Date().getFullYear()} DevStackHub. All rights reserved.</p>
      </div>
    </footer>
  );
}