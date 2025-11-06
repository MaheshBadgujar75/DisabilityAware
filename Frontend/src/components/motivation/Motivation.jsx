import React, { useState } from "react";
import { Heart, Users, Accessibility, Globe } from "lucide-react";

export default function InformativeSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const infoCards = [
    {
      icon: Accessibility,
      title: "Understanding Disabilities",
      description:
        "Disabilities can be physical, sensory, intellectual, or mental. Spreading awareness helps create an inclusive and respectful society for everyone.",
      accentColor: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50",
      shadowColor: "shadow-indigo-200",
    },
    {
      icon: Users,
      title: "Empowering Individuals",
      description:
        "Empowerment through education, employment, and accessibility ensures equal opportunities and participation in every aspect of life.",
      accentColor: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      shadowColor: "shadow-emerald-200",
    },
    {
      icon: Heart,
      title: "Inclusive Communities",
      description:
        "Inclusive environments foster empathy, collaboration, and understanding — bridging gaps between people of all abilities.",
      accentColor: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50",
      shadowColor: "shadow-pink-200",
    },
    {
      icon: Globe,
      title: "Government Initiatives",
      description:
        "Various government schemes support people with disabilities through financial aid, education, and healthcare programs.",
      accentColor: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      shadowColor: "shadow-blue-200",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-block mb-4">
          <p className="text-sm font-semibold text-teal-400 tracking-widest uppercase">
            Our Mission
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-teal-900 mb-5">
          Building an Inclusive Future
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Learn how awareness, empathy, and accessibility can transform lives
          and create a world where everyone thrives equally.
        </p>
      </div>

      {/* Cards Grid - Modern Bento Style */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {infoCards.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`group relative h-full min-h-80 rounded-3xl p-8 cursor-pointer transition-all duration-500 
              ${
                hoveredIndex === index
                  ? `shadow-2xl ${card.shadowColor} -translate-y-3 scale-105`
                  : "shadow-lg hover:shadow-xl"
              }
              bg-gradient-to-br ${card.bgGradient}
              border border-white/40 backdrop-blur-sm
            `}
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7)), linear-gradient(135deg, var(--card-start), var(--card-end))`,
            }}
          >
            {/* Glassmorphism border effect */}
            <div
              className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                bg-gradient-to-br ${card.accentColor}`}
              style={{ padding: "1px" }}
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.bgGradient}`}
              ></div>
            </div>

            {/* Card Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Icon */}
              <div
                className={`w-16 h-16 mb-6 flex items-center justify-center rounded-2xl 
                  bg-gradient-to-br ${card.accentColor} text-white
                  group-hover:shadow-lg transition-all duration-500
                  group-hover:scale-110 group-hover:rotate-3
                `}
              >
                <card.icon size={32} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-900 
                transition-colors duration-300 line-clamp-2"
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-700 text-sm leading-relaxed flex-grow group-hover:text-gray-800 
                transition-colors duration-300"
              >
                {card.description}
              </p>
            </div>

            {/* Subtle gradient overlay on hover */}
            <div
              className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none
                bg-gradient-to-t from-indigo-600 to-transparent`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
