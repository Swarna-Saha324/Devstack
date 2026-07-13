import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#FFEBE8] to-[#D7F7E1] px-4">
      <div className="text-center bg-white/70 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-white/50 max-w-lg w-full">
        
       
        <h1 className="text-9xl font-black text-indigo-600 mb-4">404</h1>
        
      
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h2>
        <p className="text-slate-600 mb-8">
          Sorry, the page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>


        <Link 
          href="/" 
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}