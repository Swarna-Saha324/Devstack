export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">About Us</h2>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            Building the Future of <span className="text-indigo-600">Developer Workflow</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            At DevStackHub, we bridge the gap between complex development challenges and elegant, ready-to-use solutions.
          </p>
        </div>

        {/* Mission Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              We believe that developers should spend more time creating and less time configuring. Our platform serves as a curated marketplace of premium resources, guides, and tools designed to accelerate your development lifecycle.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether you are a freelancer, a startup founder, or part of a large engineering team, we provide the building blocks you need to succeed in today's fast-paced digital landscape.
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
            <h4 className="text-2xl font-bold mb-4">Why DevStackHub?</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">✓ Curated high-quality resources</li>
              <li className="flex items-center gap-3">✓ Modern tech stack focus</li>
              <li className="flex items-center gap-3">✓ Community-driven updates</li>
              <li className="flex items-center gap-3">✓ Developer-first design approach</li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-slate-100">
          {[
            { label: "Resources", value: "500+" },
            { label: "Active Devs", value: "10k+" },
            { label: "Countries", value: "45+" },
            { label: "Satisfaction", value: "99%" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm font-bold text-indigo-600 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}