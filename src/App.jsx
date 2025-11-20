import { useForm, ValidationError } from '@formspree/react';

function App() {
  const [state, handleSubmit] = useForm("mrbjlogk");

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <h1 className="text-5xl font-bold text-green-600 mb-6">Thank You!</h1>
          <p className="text-xl text-gray-700">Your message has been sent. I'll reply within 24 hours ⚡</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-gray-900">
      {/* LOGO HEADER - THIS IS WHAT WAS MISSING */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <img 
          src="/logo.png" 
          alt="Shreeram Designs Logo" 
          className="mx-auto w-80 md:w-96 lg:w-[600px] object-contain drop-shadow-2xl"
        />
        <p className="text-2xl md:text-3xl mt-8 text-gray-700 font-medium">
          Premium Multi-Color Embroidery Factory
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 -mt-24 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Start Your Project</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="text" name="name" placeholder="Your Name" required className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 transition" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input type="email" name="email" placeholder="Your Email" required className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 transition" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea name="message" rows="6" placeholder="Tell me about your project..." required className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 transition resize-none" />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting} className="w-full py-5 bg-black text-white font-bold text-lg rounded-xl hover:bg-gray-800 transition disabled:opacity-50">
            {state.submitting ? "Sending..." : "Send Message →"}
          </button>
        </form>
      </div>

      <div className="text-center py-16 text-gray-600">
        © 2025 Shreeram Designs • Made with 🔥 on macOS
      </div>
    </div>
  );
}

export default App;