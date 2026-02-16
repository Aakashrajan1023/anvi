import React from "react";
import {  Cpu, Users, Clock, Trophy,  DollarSign } from "lucide-react";


import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gray-100 py-20 grid place-content-center">
      <div className="max-w-7xl mx-5 md:mx-20 px-6">
        {/* Top Heading */}
        <div className=" text-center mb-14 flex-wrap gap-6">
          <div>
            <p className="text-[#edb928] font-medium mb-3 text-center">
              — Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-blue-900">Building Trust,</span> <br />
              <span className="text-[#edb928]">Delivering Excellence</span>
            </h2>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="images/why.jpg"
              alt="Construction Team"
              className="w-full h-full object-cover"
            />

            {/* Play Button Overlay */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg cursor-pointer hover:scale-110 transition duration-300">
                <Play className="text-blue-900" size={28} />
              </div>
            </div> */}
          </motion.div>

          {/* Right Content Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-blue-900 text-white rounded-3xl p-8 md:p-10 shadow-xl relative"
          >
            {/* Left Orange Border Accent */}
            <div className="absolute left-0 top-0 h-full w-2 bg-[#edb928] rounded-l-3xl"></div>

            <div className="space-y-8">
              {/* Item 1 */}
              <Feature
                icon={<Cpu size={30} />}
                title="Verified Quality Materials"
                desc="We supply only tested and certified construction materials that meet industry standards, ensuring durability, strength, and long-term reliability for every project."
              />

              <hr className="border-blue-800" />

              {/* Item 2 */}
              <Feature
                icon={<Users size={30} />}
                title="Expert Team"
                desc="Our experienced support team provides expert guidance, order assistance, and prompt customer service—from enquiry to final delivery."
              />

              <hr className="border-blue-800" />

              {/* Item 3 */}
              <Feature
                icon={<Clock size={30} />}
                title="On-Time Delivery"
                desc="We understand the importance of timelines in construction. Our efficient logistics ensure on-time delivery with proper handling, keeping your project on schedule."
              />

              <hr className="border-blue-800" />

              {/* Item 4 */}
              <Feature
                icon={<DollarSign size={30} />}
                title="Affordable & Transparent Pricing"
                desc="We follow honest pricing with no hidden charges. Our competitive rates make high-quality construction materials accessible for both bulk and retail buyers."
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Feature Component */
function Feature({ icon, title, desc }) {
  return (
    <div className="flex gap-5 items-start">
      <div className="bg-blue-800 p-4 rounded-xl text-orange-400">{icon}</div>

      <div>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
