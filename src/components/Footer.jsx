import React from "react";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const solution = [
    "Cement",
    "Steels",
    "Surface Finishing",
    "Plumbing",
    "Electrical",
  ];
  const company = ["About us", "Careers", "Blog", "Press"];

  return (
    <footer className="bg-[#0D47A1] py-20 text-white">
      <div className="conatiner md:mx-20 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 px-10 my-10">
          <div>
            <NavLink to="/">
              <div className="w-25 h-10">
                <img src="/images/logo.jpeg" className="w-full " alt="logo" />
              </div>
            </NavLink>

            <p className=" mt-10 text-justify">
              Empowering construction projects with reliable materials for a
              stronger future.
            </p>

            <div className="mt-10">
              <ul>
                <li className="flex gap-2 mt-3 items-cente hover:text-[#edb928] cursor-pointer">
                  <MapPin className="w-6 h-6" /> India
                </li>
                <li className="flex gap-2 mt-3 items-center hover:text-[#edb928] cursor-pointer">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:">Info@gamil.com</a>
                </li>
                <li className="flex gap-2 mt-3 items-center hover:text-[#edb928] cursor-pointer">
                  <Phone className="w-4 h-4" />
                  <a href="tel:">+91 9876543210</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="">
            <h4 className="inline-block mb-7 font-bold border-b-2   border-[#edb928]" >
              Products
            </h4>

            <ul className="space-y-3 ">
              {solution.map((item, index) => (                  
                  <li key={index} className=" hover:text-[#edb928] cursor-pointer">{item}</li>                
              ))}
            </ul>
          </div>

          <div>
            <h4 className="inline-block mb-7 border-b-2 font-bold border-[#edb928]">
              Company
            </h4>

            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index} className="hover:text-[#edb928] cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="inline-block mb-7 border-b-2 font-bold  border-[#edb928]">
              Follow us
            </h4>

            <div className="flex gap-4">
              <div className="w-10 h-10 flex justify-center items-center bg-gray-800 hover:bg-[#edb928] rounded-full transition-all cursor-pointer">
                <FaLinkedinIn className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 flex justify-center items-center bg-gray-800 hover:bg-[#edb928] rounded-full transition-all cursor-pointer">
                <FaXTwitter className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        <hr className="text-gray-700" />

        <div className="flex flex-col md:flex-row gap-5 justify-between items-center mt-10 text-gray-400">
          <div>
            <p>© 2026 Anvi Groups. All rights reserved.</p>
          </div>
          <div className="flex gap-5 items-center">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
