export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container  mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Trusted by Developers</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto ">
          <div className="p-8 border bg-gradient-to-br from-[#FFEBE8] to-[#D7F7E1]  border-slate-100 rounded-3xl shadow-sm">
            <p className="text-slate-600 mb-4">"DevStackHub saved me hours of development time. Highly recommended!"</p>
            <h4 className="font-bold">- Jane Doe, Senior Engineer</h4>
          </div>
          <div className="p-8 border bg-gradient-to-br from-[#FFEBE8] to-[#D7F7E1]  border-slate-100 rounded-3xl shadow-sm">
            <p className="text-slate-600 mb-4">"The quality of the resources is top-notch and very easy to integrate."</p>
            <h4 className="font-bold">- John Smith, Fullstack Dev</h4>
          </div>
        </div>
      </div>
    </section>
  );
}