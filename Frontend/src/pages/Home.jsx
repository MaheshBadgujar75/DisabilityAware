import React, { useState, useEffect, Children } from "react";
import { ArrowRight, Heart, Users, Globe, Sparkles } from "lucide-react";
import DisabilityTypes from "../components/disabilitytypes/DisabilityTypes";
import DisabilitySchemes from "../components/schemestypes/SchemesTypes";
import Motivation from "../components/motivation/Motivation";

export default function DisabilityHome() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    { icon: Users, title: "Community", desc: "Connect with thousands" },
    { icon: Heart, title: "Support", desc: "Resources & guidance" },
    { icon: Globe, title: "Advocacy", desc: "Creating change together" },
  ];

  return (
    <div className="min-h-screen text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with subtle overlay */}
        <div className="absolute inset-0">
          <img
            src="/HomeImage.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-white/30" />
        </div>

        {/* Main content - positioned at right bottom */}
        <div className="relative z-20 container mx-auto px-6 py-20 min-h-screen flex flex-col justify-end items-end">
          <div className="max-w-2xl text-right mb-12">
            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-teal-600">EMPOWERING</span>
              <br />
              <span className="text-slate-900 drop-shadow-2xl">EVERY JOURNEY</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed drop-shadow-lg">
              Connecting, Supporting, and Advocating for a{" "}
              <span className="text-teal-600 font-semibold">
                Barrier-Free World
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-end">
              <button className="group px-8 py-4 bg-teal-600 hover:bg-teal-700 rounded-full font-semibold text-lg text-white transition-all duration-300">
                <span className="flex items-center gap-2 justify-center">
                  EXPLORE RESOURCES
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-teal-600 text-teal-600 hover:bg-teal-50 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="group p-5 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200 hover:border-teal-300 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <item.icon className="w-8 h-8 text-teal-600 mb-3 group-hover:scale-110 transition-transform ml-auto" />
                  <h3 className="text-lg font-bold mb-1 text-teal-700">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DisabilityTypes />
      <DisabilitySchemes />
      <Motivation />
    </div>
  );
}
