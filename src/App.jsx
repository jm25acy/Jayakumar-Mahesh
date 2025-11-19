import { useForm, ValidationError } from '@formspree/react';

function App() {
  const [state, handleSubmit] = useForm("mrbjlogk"); // ← REPLACE xabc1234 with your Formspree ID

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <h1 className="text-5xl font-bold text-green-600 mb-6">Thank You!</h1>
          <p className="text-xl text-gray-700">Your message has been sent successfully. I'll reply within 24 hours ⚡</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
              SHREERAM<span className="bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 bg-clip-text text-transparent">DESIGNS</span>
            </h1>
            <p className="text-2xl md:text-4xl font-light text-gray-700 mb-8">
              Crafting timeless identities & digital experiences
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Branding • Web Design • UI/UX • Logo Design • Visual Identity
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-8">Start Your Project</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 transition"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 transition"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 transition resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-5 bg-black text-white font-bold text-lg rounded-xl hover:bg-gray-800 transition disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center py-12 text-gray-500">
        © 2025 Shreeram Designs • Made with 🔥 on macOS
      </div>
    </div>
  );
}

export default App;