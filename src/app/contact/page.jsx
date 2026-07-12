export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFEBE8] to-[#D7F7E1] py-20 px-4">
      <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-black text-slate-900 mb-6">Let's Connect</h1>
          <p className="text-lg text-slate-700 mb-8">
            Have questions or want to collaborate? We'd love to hear from you. 
            Fill out the form and our team will get back to you shortly.
          </p>
          <div className="space-y-4">
            <p className="font-bold text-slate-800">📧 support@devstackhub.com</p>
            <p className="font-bold text-slate-800">📍 Dhaka, Bangladesh</p>
          </div>
        </div>

        <form className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white">
          <div className="space-y-5">
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border border-white focus:ring-2 focus:ring-indigo-400 outline-none" />
            <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl border border-white focus:ring-2 focus:ring-indigo-400 outline-none" />
            <textarea placeholder="Your Message" className="w-full p-4 rounded-xl border border-white h-32 focus:ring-2 focus:ring-indigo-400 outline-none"></textarea>
            <button className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-4 rounded-xl transition shadow-lg">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}