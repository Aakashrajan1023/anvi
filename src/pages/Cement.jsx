import React from 'react'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import {motion} from "framer-motion"
import BlurText from '@/components/BlurText'

const Cement = () => {
  return (
    <>
    <Navbar/>
    <Banner/>

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

            {/* <div className="mt-5 space-y-3 flex flex-col items-center md:flex-row md:items-start gap-3">
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
            </div> */}
          </div>
        </motion.div>
      </section>
    <Footer/>
    </>
  )
}

export default Cement