import React from "react";
import { CircleCheckBig } from "lucide-react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";

const About = () => {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-10 max-w-7xl mx-5 md:mx-15 my-15 ">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="self-center "
        >
          <div className="flex justify-center  md:hidden">
            <BlurText
              text="About"
              delay={70}
              animateBy="words"
              direction="top"
              className="text-5xl font-bold  text-center mb-5 text-[#0D47A1]"
            />
          </div>
          <img
            src="/images/abt.avif"
            alt=""
            className="w-full rounded-lg hover:shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className=" hidden  md:block">
            <BlurText
              text="About"
              delay={70}
              animateBy="words"
              direction="top"
              className="text-5xl font-bold  text-center mb-5 text-[#0D47A1]"
            />
          </div>

          <div className="mt-5 space-y-3 ">
            <p className="text-gray-900 font-medium text-lg text-justify">
              We are a trusted supplier of construction raw materials, committed
              to delivering high-quality building materials that form the
              backbone of strong and long-lasting structures.
            </p>

            <p className="text-gray-900 font-medium text-lg text-justify">
              With years of experience in the construction supply industry, we
              specialize in providing cement, sand, bricks, steel rods,
              aggregates, and other essential materials to contractors,
              builders, developers, and individual customers.
            </p>

            <p className="text-gray-900 font-medium text-lg text-justify">
              We understand that construction timelines are critical. That’s why
              we ensure on-time delivery, consistent quality, and transparent
              business practices—helping our clients complete projects without
              delays or compromises.
            </p>

            <div className="mt-5 space-y-3 flex flex-col items-center md:flex-row md:items-start gap-3">
              <div className=" group flex gap-2">
                <CircleCheckBig className="text-[#edb928] group-hover:text-[#0D47A1]" />
                <p className="font-bold text-md text-[#0D47A1] group-hover:text-[#edb928] group-hover:cursor-pointer transition-all">
                  Quality materials
                </p>
              </div>
              <div className=" group flex gap-2">
                <CircleCheckBig className="text-[#edb928] group-hover:text-[#0D47A1]" />
                <p className="font-bold text-md text-[#0D47A1] group-hover:text-[#edb928] group-hover:cursor-pointer transition-all">
                  Reliable supply
                </p>
              </div>
              <div className=" group flex gap-2">
                <CircleCheckBig className="text-[#edb928] group-hover:text-[#0D47A1]" />
                <p className="font-bold text-md text-[#0D47A1] group-hover:text-[#edb928] group-hover:cursor-pointer transition-all">
                  Honest pricing
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 max-w-7xl mx-5 md:mx-20 my-15">
        <motion.div
         initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
         className="order-2 md:order-1">
          <div className=" hidden  md:block">
            <BlurText
              text="Who Are We"
              delay={70}
              animateBy="words"
              direction="top"
              className="text-5xl font-bold  text-center mb-5 text-[#0D47A1]"
            />
          </div>

          <div className="mt-5 space-y-3 ">
            <p className="text-gray-900 font-medium text-lg text-justify">
              We are a reliable and experienced construction raw materials
              supplier, dedicated to supporting strong, safe, and long-lasting
              construction projects.
            </p>

            <p className="text-gray-900 font-medium text-lg text-justify">
              With extensive industry expertise, we supply high-quality cement,
              sand, bricks, steel rods, aggregates, and essential building
              materials to contractors, builders, developers, and individual
              customers. Every product we deliver is carefully sourced to meet
              industry standards and project requirements.
            </p>

            <p className="text-gray-900 font-medium text-lg text-justify">
              We understand that time, quality, and cost are critical in
              construction. That’s why we focus on on-time delivery, consistent
              material quality, and transparent business practices, ensuring
              smooth project execution without delays or compromises.
            </p>

            <div className="mt-5 space-y-3 flex flex-col items-center md:flex-row md:items-start gap-3">
              <div className=" group flex gap-2">
                <CircleCheckBig className="text-[#edb928] group-hover:text-[#0D47A1]" />
                <p className="font-bold text-md text-[#0D47A1] group-hover:text-[#edb928] group-hover:cursor-pointer transition-all">
                  Quality materials
                </p>
              </div>
              <div className=" group flex gap-2">
                <CircleCheckBig className="text-[#edb928] group-hover:text-[#0D47A1]" />
                <p className="font-bold text-md text-[#0D47A1] group-hover:text-[#edb928] group-hover:cursor-pointer transition-all">
                  Timely Delivery
                </p>
              </div>
              <div className=" group flex gap-2">
                <CircleCheckBig className="text-[#edb928] group-hover:text-[#0D47A1]" />
                <p className="font-bold text-md text-[#0D47A1] group-hover:text-[#edb928] group-hover:cursor-pointer transition-all">
                  Trusted Service
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
         initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        className="self-center order-1 md:order-2">
          <div className="flex justify-center  md:hidden">
            <BlurText
              text="Who Are We"
              delay={70}
              animateBy="words"
              direction="top"
              className="text-5xl font-bold  text-center mb-5 text-[#0D47A1]"
            />
          </div>
          <img
            src="/images/abt_2.avif"
            alt=""
            className="w-full rounded-lg hover:shadow-2xl"
          />
        </motion.div>
      </section>
    </>
  );
};

export default About;
