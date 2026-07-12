export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFEBE8] to-[#D7F7E1] py-20 px-4">
      <div className="container mx-auto max-w-4xl bg-white/40 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-white/50">
        <h1 className="text-5xl font-black text-slate-900 mb-8">About DevStack Hub</h1>
        <p className="text-xl text-slate-700 leading-relaxed mb-6">
          DevStack Hub is a premium marketplace designed specifically for modern developers. 
          We bridge the gap between creators and builders by providing a curated platform 
          for high-quality digital resources.
        </p>
        <p className="text-lg text-slate-600">
          Our mission is to foster a community where innovation meets accessibility, 
          empowering developers to build faster and smarter.
        </p>
      </div>
    </div>
  );
}