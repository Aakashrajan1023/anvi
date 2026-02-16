import React from "react";
import SplitText from "./SplitText";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Droplets, Gauge, Phone } from "lucide-react";
// src/components/ImageSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";

// Modules
import { Autoplay } from "swiper/modules";
import BlurText from "./BlurText";

const Banner = ({ handleClick }) => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero_bg.mp4" type="video/mp4" />
      </video> */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        speed={1200}
        loop
        className="w-full h-full"
      >
        <SwiperSlide>
          <img
            src="/images/hero_test.jpeg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <div className="absolute inset-0 bg-linear-to-t 
                from-black/40 to-black/20"></div>

          {/* Dark Overlay */}
          {/* <div className="absolute inset-0 bg-black/40 z-10"></div> */}

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <div className="mb-3 md:mb-5">
              <div className="flex justify-center">
                <BlurText
                  text="Your Trusted "
                  delay={70}
                  animateBy="words"
                  direction="top"
                  className="text-3xl md:text-5xl font-bold "
                />
              </div>

              <div className="mt-2 md:mt-4 flex justify-center gap-2 flex-wrap">
                <SplitText
                  text="Construction Materials Partner"
                  delay={40}
                  animateBy="words"
                  direction="top"
                  className="text-3xl md:text-5xl font-bold text-[#125997]"
                />
              </div>

              <div className="mt-4 flex justify-center">
                <p className=" text-white font-bold text-md">
                  Supplying high-quality raw materials for residential,
                  commercial, and industrial projects.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3 md:gap-10 mt-8">
              <div className="">
                <button
                  onClick={handleClick}
                  className="   cursor-pointer bg-[#0D47A1]  text-white px-6 py-3 rounded-lg font-semibold  hover:scale-105 hover:shadow-2xl transition-all ease-in"
                >
                  Get a free Quote
                </button>
              </div>

              <Link to="/products">
                <button className="relative overflow-hidden px-6 py-3 rounded-lg  border border-[#F2B715] bg-[#FFF9E6] text-[#263238] group  cursor-pointer ">
                  <span
                    className="absolute inset-0 bg-[#F2B715] scale-x-0 group-hover:scale-x-100 
                     transform origin-left transition-transform duration-300"
                  ></span>

                  <span className="relative flex gap-3 items-center group-hover:text-[#0D47A1] font-semibold transition-colors duration-300">
                    Explore
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0D47A1]" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/images/hero_2.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-linear-to-t 
                from-black/40 to-black/20"></div>
          {/* Dark Overlay */}
          {/* <div className="absolute inset-0 bg-black/40 z-10"></div> */}

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
            {/* <h1 className="text-2xl md:text-5xl font-bold">Take Control </h1>
        <p className="mt-2 md:mt-4 text-2xl md:text-5xl font-bold">
          of your <span className="text-[#00BCFF]">Water Usage</span>
        </p> */}

            <div className="mb-3 md:mb-5">
              <div className="flex justify-center">
                <BlurText
                  text="Trusted Supplier of  "
                  delay={70}
                  animateBy="words"
                  direction="top"
                  className="text-3xl md:text-5xl font-bold "
                />
              </div>

              <div className="mt-2 md:mt-4 flex justify-center gap-2 flex-wrap">
                <SplitText
                  text="Quality Construction Raw Materials"
                  delay={70}
                  animateBy="words"
                  direction="top"
                  className="text-3xl md:text-5xl font-bold text-[#125997]"
                />
              </div>

              <div className="mt-4 flex justify-center">
                <p className=" text-white font-bold text-md">
                  "Strong Foundations Begin With the Right Materials."
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-10 mt-8">
              <div className="">
                <button
                  onClick={handleClick}
                  className="   cursor-pointer bg-[#0D47A1]  text-white px-6 py-3 rounded-lg font-semibold  hover:scale-105 hover:shadow-2xl transition-all ease-in"
                >
                  Get a free Quote
                </button>
              </div>

              <div>
                <button className="relative overflow-hidden px-6 py-3 rounded-lg  border border-[#F2B715] bg-[#FFF9E6] text-[#263238] group  cursor-pointer ">
                  <span
                    className="absolute inset-0 bg-[#F2B715] scale-x-0 group-hover:scale-x-100 
                               transform origin-left transition-transform duration-300"
                  ></span>

                  <span className="relative flex gap-3 items-center group-hover:text-[#0D47A1] font-semibold transition-colors duration-300">
                    Explore
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0D47A1]" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
