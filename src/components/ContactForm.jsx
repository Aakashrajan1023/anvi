import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import {motion} from "framer-motion"

const ContactForm = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10 flex justify-center items-center">
      <div className="max-w-7xl mx-5 md:mx-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1E4E]">
            Need Reliable Construction Materials?
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#edb928] mt-2">
            Let's Talk!
          </h3>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT - FORM */}
          <motion.div 
           initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6">
            {/* Name Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  placeholder="Ex. John"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#edb928]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Last Name *
                </label>
                <input
                  type="text"
                  placeholder="Ex. Doe"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#edb928]"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#edb928]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#edb928]"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Your Message *
              </label>
              <textarea
                rows="6"
                placeholder="Enter here.."
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#edb928]"
              ></textarea>
            </div>

            {/* Button */}
          <button 
         
          className="relative overflow-hidden hidden md:block px-8 py-4 rounded-4xl bg-[#0D47A1] text-white group hover:scale-105 cursor-pointer transition-all">
            <span
              className="absolute inset-0 bg-[#F2B715] scale-x-0 group-hover:scale-x-100 
               transform origin-left transition-transform duration-300"
            ></span>

            <span className="relative group-hover:text-[#0D47A1] font-semibold transition-colors duration-300">
             Send Message
            </span>
          </button>
            
          </motion.div>

          {/* RIGHT - CONTACT INFO */}
          <motion.div 
           initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#0B1E4E] text-white rounded-3xl p-10 space-y-10 shadow-lg">
            {/* Address */}
            <div>
              <h4 className="text-2xl font-bold mb-3">Address</h4>
              <p className="text-gray-300">
                2464 Royal Ln. Mesa,
                <br />
                New Jersey 45463
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-2xl font-bold mb-3">Contact</h4>
              <p className="text-gray-300">Phone : +(000) 000-0000</p>
              <p className="text-gray-300">Email : example@gmail.com</p>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-2xl font-bold mb-4">Stay Connected</h4>
              <div className="flex gap-4">
                {[
                  FaFacebookF,
                  FaInstagram,
                  FaYoutube,
                ].map((Icon, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden w-12 h-12 flex items-center justify-center bg-[#edb928] rounded-full  cursor-pointer transition"
                  >
                    <Icon  className="z-1 group-hover:text-[#edb928]"/>
                    <span
                      className="absolute inset-0 bg-blue-900 scale-x-0 group-hover:scale-x-100 
                        transform origin-left transition-transform duration-300 z-0"
                    ></span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
