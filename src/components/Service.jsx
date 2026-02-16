import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Hammer,
  Shovel,
  Paintbrush,
  Wrench,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function Service() {
  const products = [
    {
      title: "Premium Cements",
      desc: "High-strength and durable cement solutions for long-lasting construction projects.",
      icon: <Building2 size={32} />,
    },
    {
      title: "Quality Steels",
      desc: "Reliable structural and reinforcement steel materials ensuring maximum stability.",
      icon: <Hammer size={32} />,
    },
    {
      title: "Aggregates",
      desc: "High-quality aggregates including sand, gravel, and crushed stone for strong, durable, and stable construction foundations.",
      icon: <Shovel size={32} />,
    },
    {
      title: "Paints",
      desc: "High-quality interior and exterior paints for durable and vibrant finishes.",
      icon: <Paintbrush size={32} />,
    },
    {
      title: "Electrical & Plumbing",
      desc: "Reliable electrical and plumbing materials for safe power supply and efficient water management in residential and commercial construction.",
      icon: <Wrench size={32} />,
    },
    {
      title: "Bricks & Blocks",
      desc: "Strong and durable bricks and concrete blocks designed for stable structures, superior load-bearing strength, and long-lasting construction performance.",
      icon: <Zap size={32} />,
    },
    {
      title: "Hardware & Consumables",
      desc: "Essential construction hardware and daily-use consumables, including fasteners, tools, adhesives, and safety supplies, ensuring smooth execution and reliable project performance.",
      icon: <Wrench size={32} />,
    },
  ];

  return (
    <section className="py-20 bg-[#f5f7fa] grid place-content-center">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b2c6b] mt-3">
            Supplying Quality Materials{" "}
          </h2>
          <h2 className="text-[#F2B715] text-3xl md:text-5xl font-bold mt-3">
            For Stronger Constructions
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-transparent hover:border-[#F2B715]"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#0b2c6b] text-[#F2B715] mb-6 transition-all duration-300 group-hover:bg-[#F2B715] group-hover:text-white">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0b2c6b] mb-3 group-hover:text-[#F2B715] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-16">
          <Link to= "/products">
            <button className="relative overflow-hidden hidden md:block px-6 py-3 rounded-lg bg-[#0D47A1] text-white group hover:scale-105 cursor-pointer transition-all">
              <span
                className="absolute inset-0 bg-[#F2B715] scale-x-0 group-hover:scale-x-100 
               transform origin-left transition-transform duration-300"
              ></span>

              <span className="relative group-hover:text-[#0D47A1] font-semibold transition-colors duration-300 flex gap-3 items-center">
                View Products <ArrowRight size={16} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
