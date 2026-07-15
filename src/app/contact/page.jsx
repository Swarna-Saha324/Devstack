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

    
<div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white text-center">
  <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us an Email</h2>
  <p className="text-slate-600 mb-8">
    Click the button below to open your email client and send us a message directly.
  </p>
  <a 
    href="mailto:support@devstackhub.com?subject=Inquiry from DevStackHub"
    className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-4 px-10 rounded-xl transition shadow-lg"
  >
    Open Email App
  </a>
</div>
      </div>
    </div>
  );
}