export function Newsletter() {
  return (
    <section className="py-20 bg-indigo-700 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-8 opacity-90">Get the latest developer tools and resources delivered to your inbox.</p>
        <div className="max-w-md mx-auto flex gap-2">
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg text-slate-900" />
          <button className="px-6 py-3 bg-white text-indigo-700 font-bold rounded-lg hover:bg-slate-100 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}