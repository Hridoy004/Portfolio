import { FaEnvelope, FaUserCircle } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-[#111111] text-white py-24 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          <p className="text-lg text-gray-300 mb-4">Contact Me</p>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight uppercase">
            Let's Talk About Your Project
          </h2>

          <p className="text-gray-400 mt-8 text-lg leading-8 max-w-lg">
            Let's embark on a creative journey together by shaping a visual
            narrative of your brand in the crowded digital space.
          </p>

          <div className="mt-12 space-y-6">
            {/* Phone Card */}
            <div className="flex items-center gap-5 border border-gray-700 rounded-full px-5 py-3 w-fit hover:border-white transition">
              <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-2xl">
                <FaUserCircle />
              </div>

              <div>
                <p className="text-gray-400 uppercase text-sm">Book a Call</p>

                <p className="text-xl font-semibold">+880 1700-000000</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-center gap-5 border border-gray-700 rounded-full px-5 py-3 w-fit hover:border-white transition">
              <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-xl">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-gray-400 uppercase text-sm">
                  Prefer Email Communication
                </p>

                <p className="text-xl font-semibold">hello@example.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-[#0a0a0a] rounded-3xl p-8 md:p-12">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border border-gray-800 rounded-xl px-5 py-4 outline-none focus:border-white"
            />

            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent border border-gray-800 rounded-xl px-5 py-4 outline-none focus:border-white"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border border-gray-800 rounded-xl px-5 py-4 outline-none focus:border-white"
            />

            <textarea
              rows="6"
              placeholder="Message"
              className="w-full bg-transparent border border-gray-800 rounded-xl px-5 py-4 outline-none resize-none focus:border-white"
            />

            <button className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
