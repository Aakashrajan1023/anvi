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

const Banner = () => {
  const slider = [
    {
      title: "Premium Cement Supply for ",
      subtitle: " Stronger Foundations",
      desc: "Delivering high-quality cement solutions for residential, commercial, and infrastructure projects with guaranteed strength, durability, and reliability.",
      img: "/images/hero_test.jpeg",
      path_1: "/contact",
      path_2: "/products/cement",
    },
     {
      title: "Premium Paints for Perfect Finishes",
      subtitle: "Color Your World with Confidence",
      desc: "Color Your World with Confidence",
      img: "/images/hero_2.png",
      path_1: "/contact",
      path_2: "/products/paint",
    },
     {
      title: "Strength You Can Build On",
      subtitle: "Forging the Future with Quality Steel",
      desc: "Supplying premium-grade steel products engineered for durability, structural integrity, and long-lasting performance in every project.",
      img: "/images/hero_3.png",
      path_1: "/contact",
      path_2: "/products/steel",
    },
     {
      title: "Strong Foundations Start with Quality Aggregates",
      subtitle: "Building Better Infrastructure, From the Ground Up",
      desc: "Delivering durable construction aggregates that enhance structural integrity and long-term performance.",
      img: "/images/hero_4.png",
      path_1: "/contact",
      path_2: "/products/aggregates",
    },
     {
      title: "Strong Bricks. Solid Foundations.",
      subtitle: "Building the Future, Block by Block",
      desc: "Supplying high-quality bricks and concrete blocks designed for durability, structural strength, and long-lasting construction performance.",
      img: "/images/hero_5.png",
      path_1: "/contact",
      path_2: "/products/bricks",
    },
     {
      title: "Smart Electrical & Plumbing Solutions",
      subtitle: "Powering and Connecting Every Structure",
      desc: "Supplying reliable electrical and plumbing materials designed for safety, efficiency, and long-lasting performance in every project.",
      img: "/images/hero_6.png",
      path_1: "/contact",
      path_2: "/products/electrical",
    },
     {
      title: "Essential Hardware for Every Build",
      subtitle: "Built with Precision. Backed by Quality.",
      desc: "Supplying high-quality hardware and construction consumables designed for durability, efficiency, and dependable performance on every project.",
      img: "/images/hero_7.png",
      path_1: "/contact",
      path_2: "/products/hardware",
    },
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        speed={1200}
        loop
        className="w-full h-full"
      >
        {slider.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={item.img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div
              className="absolute inset-0 bg-linear-to-t 
                from-black/40 to-black/20"
            ></div>

            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
              <div className="mb-3 md:mb-5">
                <div className="flex justify-center">
                  <BlurText
                    text={item.title}
                    delay={70}
                    animateBy="words"
                    direction="top"
                    className="text-3xl md:text-5xl font-bold "
                  />
                </div>

                <div className="mt-2 md:mt-4 flex justify-center gap-2 flex-wrap">
                  <SplitText
                    text={item.subtitle}
                    delay={40}
                    animateBy="words"
                    direction="top"
                    className="text-3xl md:text-5xl font-bold text-[#125997]"
                  />
                </div>

                <div className="mt-4 flex justify-center">
                  <p className=" text-white font-bold text-md">{item.desc}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3 md:gap-10 mt-8">
                <Link to={item.path_1}>
                  <button className="   cursor-pointer bg-[#0D47A1]  text-white px-6 py-3 rounded-lg font-semibold  hover:scale-105 hover:shadow-2xl transition-all ease-in">
                    Get a free Quote
                  </button>
                </Link>

                <Link to={item.path_2}>
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
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
