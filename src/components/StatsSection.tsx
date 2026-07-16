export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#FFEBE8] to-[#D7F7E1] border-y border-slate-200">
      <div className="container mx-auto px-4">
        {/* এখানে শিরোনাম যোগ করা হয়েছে */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
            Our Growing Impact
          </h2>
          <p className="text-slate-600">
            Trusted by developers worldwide to build better products faster.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-black text-indigo-700 mb-2">50+</h3>
            <p className="text-slate-800 font-bold">Available Tools</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-indigo-700 mb-2">200+</h3>
            <p className="text-slate-800 font-bold">Code Snippets</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-indigo-700 mb-2">10k+</h3>
            <p className="text-slate-800 font-bold">Developers Joined</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-indigo-700 mb-2">99%</h3>
            <p className="text-slate-800 font-bold">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}