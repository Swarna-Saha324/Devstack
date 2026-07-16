export default function QuickLinks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Documentation", desc: "Read our guides" },
            { title: "Browse Tools", desc: "Latest marketplace" },
            { title: "Submit Tool", desc: "Add your work" },
            { title: "Support", desc: "Get in touch" },
          ].map((item, index) => (
            <div key={index} className="p-6 border border-slate-200 rounded-xl text-center bg-gradient-to-br from-[#FFEBE8] to-[#D7F7E1] hover:shadow-xl transition cursor-pointer">
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}