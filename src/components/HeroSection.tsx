import React from "react";
import Partners from "./Partners";
import { partnersTwo } from "../data/partnersData";
const HeroSection: React.FC = () => {
  return (
    <>
      <section className="relative text-center md:py-32 px-5 md:px-20">
        {/* Left Side Decorative Icon */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 md:translate-x-10 z-0 hidden md:block">
          <img
            src="/assets/hero-left.svg"
            alt="Left decorative image"
            className="w-56 md:w-56"
          />
        </div>

        {/* Right Side Decorative Icon */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 md:-translate-x-10 z-0 hidden md:block">
          <img
            src="/assets/hero-right.svg"
            alt="Right decorative image"
            className="w-56 md:w-56"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-white">
          <div className="hero-text-area max-w-xl mx-auto pt-8">
            <h1 className="text-3xl md:text-5xl font-medium leading-tight mb-2">
              From Concept to Code
            </h1>
            <h2 className="text-2xl md:text-4xl text-[#e63434] my-3 font-semibold">
              We Make IT Happen
            </h2>
            <p className="text-lg md:text-xl mb-6 text-gray-300">
              We Help Brands And B2B Enterprises Build Amazing Websites That
              Convert Their Visitors Into Paying Customers.
            </p>
          </div>

          {/* Call-to-Action Button */}
          <button className="bg-[#e01010] text-white font-bold py-3 px-6 rounded-full shadow-sm hover:shadow-[#e41010] hover:scale-105 transition-transform flex items-center justify-center mx-auto cursor-pointer mt-2">
            <i className="fas fa-phone mr-2"></i> Let's have a call
          </button>

          {/* Scroll Indicator */}
          <div
            className="scroll-indicator mx-auto mt-10 cursor-pointer"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <div className="mouse w-8 h-12 border-2 border-white rounded-full mx-auto relative">
              <div className="w-2 h-4 bg-white rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
            </div>
            <div className="line w-[2px] h-10 bg-white mx-auto mt-2"></div>
          </div>
        </div>
      </section>
      <div className="hero-partners md:pb-6">
        <Partners partners={partnersTwo} />
      </div>
    </>
  );
};

export default HeroSection;
