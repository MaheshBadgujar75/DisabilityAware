import React, { useState, useEffect } from "react";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Lightbulb,
  ArrowRight,
  BookOpen,
  Handshake,
  RefreshCw,
  Shield,
} from "lucide-react";

const AboutUs = () => {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.dataset.section]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    document.querySelectorAll("[data-section]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Inclusivity",
      description: "Equal access for everyone",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "#059669",
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "Support through information",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "#0891b2",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Technology for accessibility",
      color: "text-violet-600",
      bgColor: "bg-violet-50",
      borderColor: "#7c3aed",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Quality information delivery",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "#e11d48",
    },
  ];

  const services = [
    {
      icon: BookOpen,
      title: "Comprehensive Information",
      description: "Curated database of all schemes",
      borderColor: "border-emerald-500",
      hoverBg: "hover:bg-emerald-50",
      accentColor: "text-emerald-600",
    },
    {
      icon: Handshake,
      title: "Guidance & Support",
      description: "Step-by-step navigation help",
      borderColor: "border-blue-500",
      hoverBg: "hover:bg-blue-50",
      accentColor: "text-blue-600",
    },
    {
      icon: RefreshCw,
      title: "Regular Updates",
      description: "Latest scheme modifications",
      borderColor: "border-purple-500",
      hoverBg: "hover:bg-purple-50",
      accentColor: "text-purple-600",
    },
    {
      icon: Shield,
      title: "Comprehensive Portal",
      description: "All services in one platform",
      borderColor: "border-pink-500",
      hoverBg: "hover:bg-pink-50",
      accentColor: "text-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Minimal Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="absolute inset-0 opacity-8">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full blur-3xl opacity-15" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full blur-3xl opacity-15" />
        <div className="absolute top-1/2 left-1/4 w-56 h-56 bg-gradient-to-br from-violet-400 to-purple-400 rounded-full blur-3xl opacity-12" />
        <div className="absolute bottom-32 right-1/3 w-52 h-52 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-12" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 leading-tight opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            Transform
            <br />
            <span className="font-black bg-gradient-to-r from-emerald-600 via-cyan-500 via-violet-600 to-rose-600 bg-clip-text text-transparent animate-gradient">
              Lives
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto font-light opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Empowering people through accessible disability schemes and support
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-white text-sm font-semibold uppercase tracking-wider rounded-lg hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300">
              Explore
            </button>
            <button className="px-8 py-3 border-2 border-emerald-500 text-emerald-600 text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-emerald-50 hover:border-emerald-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Vision - With Scroll Reveal */}
      <section
        className="py-24 px-6 bg-gradient-to-b from-gray-50 via-white to-blue-50"
        data-section="mission"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Mission */}
          <div className="group">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-xl group-hover:shadow-lg transition-all">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <span
                className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent transition-all duration-1000 ${
                  visibleSections.mission
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  animation: visibleSections.mission
                    ? "fadeInUp 0.8s ease-out forwards"
                    : "none",
                }}
              >
                Mission
              </span>
            </div>

            <h2
              className={`text-4xl md:text-5xl font-light mb-6 leading-tight transition-all duration-1000 ${
                visibleSections.mission
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                animation: visibleSections.mission
                  ? "fadeInUp 0.8s ease-out forwards"
                  : "none",
                animationDelay: "0.1s",
                animationFillMode: "forwards",
              }}
            >
              Simplifying
              <span className="block font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Access
              </span>
            </h2>

            <p
              className={`text-lg text-gray-700 font-light leading-relaxed border-l-4 border-emerald-500 pl-6 transition-all duration-1000 ${
                visibleSections.mission
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
              style={{
                animation: visibleSections.mission
                  ? "fadeInLeft 0.8s ease-out forwards"
                  : "none",
                animationDelay: "0.2s",
                animationFillMode: "forwards",
              }}
            >
              Creating a comprehensive platform that eliminates barriers and
              ensures every eligible person can access government disability
              schemes with ease.
            </p>
          </div>

          {/* Vision */}
          <div className="group">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl group-hover:shadow-lg transition-all">
                <Eye className="w-6 h-6 text-rose-600" />
              </div>
              <span
                className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent transition-all duration-1000 ${
                  visibleSections.mission
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  animation: visibleSections.mission
                    ? "fadeInUp 0.8s ease-out forwards"
                    : "none",
                  animationDelay: "0.05s",
                  animationFillMode: "forwards",
                }}
              >
                Vision
              </span>
            </div>

            <h2
              className={`text-4xl md:text-5xl font-light mb-6 leading-tight transition-all duration-1000 ${
                visibleSections.mission
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                animation: visibleSections.mission
                  ? "fadeInUp 0.8s ease-out forwards"
                  : "none",
                animationDelay: "0.15s",
                animationFillMode: "forwards",
              }}
            >
              Building an
              <span className="block font-black bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Inclusive Future
              </span>
            </h2>

            <p
              className={`text-lg text-gray-700 font-light leading-relaxed border-l-4 border-rose-500 pl-6 transition-all duration-1000 ${
                visibleSections.mission
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
              style={{
                animation: visibleSections.mission
                  ? "fadeInRight 0.8s ease-out forwards"
                  : "none",
                animationDelay: "0.25s",
                animationFillMode: "forwards",
              }}
            >
              A world where every person with disability has seamless access to
              opportunities, rights, and benefits without barriers.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values - With Stagger Reveal */}
      <section className="py-24 px-6 bg-white" data-section="values">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span
              className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-600 to-rose-600 bg-clip-text text-transparent block transition-all duration-1000 ${
                visibleSections.values
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                animation: visibleSections.values
                  ? "fadeInUp 0.8s ease-out forwards"
                  : "none",
              }}
            >
              Core Values
            </span>
            <h2
              className={`text-5xl md:text-6xl font-light mt-4 transition-all duration-1000 ${
                visibleSections.values
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                animation: visibleSections.values
                  ? "fadeInUp 0.8s ease-out forwards"
                  : "none",
                animationDelay: "0.1s",
                animationFillMode: "forwards",
              }}
            >
              What <span className="font-black text-gray-900">Drives</span> Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`group p-8 border-t-4 rounded-xl bg-white hover:shadow-xl transition-all duration-300 transform ${
                    visibleSections.values
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  style={{
                    borderTopColor: value.borderColor,
                    animation: visibleSections.values
                      ? "fadeInUp 0.8s ease-out forwards"
                      : "none",
                    animationDelay: `${0.2 + index * 0.1}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${value.bgColor}`}
                  >
                    <Icon className={`w-7 h-7 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services - With Stagger Reveal */}
      <section
        className="py-24 px-6 bg-gradient-to-b from-gray-50 via-purple-50 to-pink-50"
        data-section="services"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span
              className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block transition-all duration-1000 ${
                visibleSections.services
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                animation: visibleSections.services
                  ? "fadeInUp 0.8s ease-out forwards"
                  : "none",
              }}
            >
              Services
            </span>
            <h2
              className={`text-5xl md:text-6xl font-light mt-4 transition-all duration-1000 ${
                visibleSections.services
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                animation: visibleSections.services
                  ? "fadeInUp 0.8s ease-out forwards"
                  : "none",
                animationDelay: "0.1s",
                animationFillMode: "forwards",
              }}
            >
              What We <span className="font-black text-gray-900">Offer</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`p-8 bg-white border-2 ${service.borderColor} ${
                    service.hoverBg
                  } rounded-xl transition-all duration-300 group hover:shadow-xl transform ${
                    visibleSections.services
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  style={{
                    animation: visibleSections.services
                      ? "fadeInUp 0.8s ease-out forwards"
                      : "none",
                    animationDelay: `${0.1 + index * 0.1}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div
                    className={`p-3 w-fit rounded-lg ${service.hoverBg} group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-6 h-6 ${service.accentColor}`} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 relative overflow-hidden bg-white"
        data-section="cta"
      >
        {/* Gradient Orbs - Subtle with White Background */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full blur-3xl opacity-10" />

        {/* Light Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2
            className={`text-5xl md:text-6xl font-light mb-6 leading-tight transition-all duration-1000 text-gray-900 ${
              visibleSections.cta
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            style={{
              animation: visibleSections.cta
                ? "fadeInUp 0.8s ease-out forwards"
                : "none",
            }}
          >
            Ready to Get
            <span className="block font-black mt-2 bg-gradient-to-r from-emerald-600 via-cyan-600 via-violet-600 to-rose-600 bg-clip-text text-transparent">
              Started Today?
            </span>
          </h2>

          <p
            className={`text-lg text-gray-600 mb-12 font-light max-w-2xl mx-auto transition-all duration-1000 ${
              visibleSections.cta
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              animation: visibleSections.cta
                ? "fadeInUp 0.8s ease-out forwards"
                : "none",
              animationDelay: "0.1s",
              animationFillMode: "forwards",
            }}
          >
            Join thousands transforming their lives through our comprehensive
            platform
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
              visibleSections.cta
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              animation: visibleSections.cta
                ? "fadeInUp 0.8s ease-out forwards"
                : "none",
              animationDelay: "0.2s",
              animationFillMode: "forwards",
            }}
          >
            {/* Primary CTA Button */}
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 text-white text-sm font-semibold uppercase tracking-wider rounded-lg hover:shadow-2xl hover:shadow-cyan-600/40 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Explore Schemes
            </button>

            {/* Secondary CTA Button */}
            <button className="px-8 py-4 border-2 border-rose-600 text-rose-600 text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-rose-600 hover:text-white transition-all duration-300 active:scale-95">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 8s ease infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
