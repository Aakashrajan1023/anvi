import React from "react";
import {
  Building2,
  Hammer,
  Shovel,
  Paintbrush,
  Wrench,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import {motion} from "framer-motion"

export default function ProductCard() {
  return (
    <section className=" py-20 grid place-content-center">
      <div className="max-w-7xl mx-5 md:mx-20 px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-[#edb928] font-medium mb-3">
            — Our Products
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-blue-900">Products That Fit</span> <br />
            <span className="text-[#edb928]">Your Needs</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <motion.div 
         initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <ServiceCard
            image="/images/cement.jpg"
            icon={<Building2 size={28} />}
            title="Cement"
            desc="Cement provides the essential strength and bonding required for safe and durable construction. Ideal for concrete works, masonry, and structural applications."
            path= "/products/cement"
          />

          <ServiceCard
            image="/images/steel.jpg"
            icon={<Hammer size={28} />}
            title="Steel & Reinforcement Materials"
            desc="Steel & Reinforcement Materials form the core strength of reinforced concrete structures, offering high load-bearing capacity, flexibility, and reliability for all types of construction."
            path= "/products/steel"
          />

          <ServiceCard
            image="/images/paints.jpg"
            icon={<Paintbrush size={28} />}
            title="Paints"
            desc="Paints provide the perfect finishing layer for construction, enhancing surface appearance, durability, and long-term protection for residential and commercial buildings."
            path= "/products/paint"
          />

           <ServiceCard
            image="/images/paints.jpg"
            icon={<Shovel size={28} />}
            title="Aggregates"
            desc="Construction aggregates form the foundation of strong and stable structures, providing essential support, durability, and load-bearing strength for residential and commercial construction projects."
            path= "/products/aggregates"          
          />

           <ServiceCard
            image="/images/paints.jpg"
            icon={< Wrench size={28} />}
            title="Electrical & Plumbing"
            desc="Quality electrical and plumbing materials including wires, cables, switches, pipes, and fittings. Ensuring safe installations and reliable performance for residential and commercial construction projects."
            path= "/products/electrical"
          />

           <ServiceCard
            image="/images/paints.jpg"
            icon={<Zap size={28} />}
            title="Bricks & Blocks"
            desc="High-strength bricks and concrete blocks designed for durable walls, structural stability, and long-lasting performance in residential and commercial construction projects."
            path= "/products/bricks"
          />

           <ServiceCard
            image="/images/paints.jpg"
            icon={<Wrench size={28} />}
            title="Hardware & Consumables"
            desc="Reliable hardware and essential consumables including fasteners, adhesives, sealants, and tools supporting efficient construction work and ensuring durable, high quality project execution."
            path= "/products/hardware"
          />

        </motion.div>

      </div>
    </section>
  );
}



/* Reusable Card */
function ServiceCard({ image, icon, title, desc, path }) {
  return (
    <div
      className="bg-white group rounded-3xl overflow-hidden shadow-md 
      hover:shadow-xl transition duration-300 relative 
      h-full flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-blue-900/80 to-transparent"></div>
      </div>

      {/* Floating Icon */}
      <div className="absolute top-44 left-8">
        <div className="bg-blue-900 text-white p-5 rounded-full shadow-lg border-4 border-white group-hover:border-yellow-400">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 pb-8 px-8 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-blue-900 mb-4">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {desc}
        </p>

        {/* Button pushed to bottom */}
        <Link to={path} className="mt-auto flex gap-1 items-center text-blue-900 font-bold hover:ml-3 transition-all duration-300 cursor-pointer">
          <p className="text-sm">View All</p>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Animated Borders */}
      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
      <span className="absolute left-0 top-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
      <span className="absolute left-0 bottom-0 h-0 w-0.5 bg-yellow-400 transition-all duration-300 group-hover:h-full"></span>
      <span className="absolute right-0 bottom-0 h-0 w-0.5 bg-yellow-400 transition-all duration-300 group-hover:h-full"></span>
    </div>
  );
}
