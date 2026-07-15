import React from "react";
export function HowItWorks() {
  const steps = [
    { title: "Browse", desc: "Explore our collection of premium dev tools." },
    { title: "Select", desc: "Choose the tool that fits your project needs." },
    { title: "Get Access", desc: "Unlock features and boost your workflow." }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFEBE8] to-[#D7F7E1] ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
