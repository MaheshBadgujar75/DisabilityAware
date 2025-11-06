// DisabilityTypes.jsx
import React, { useState, useCallback, memo } from "react";
import { Eye, Ear, Brain, Accessibility, Heart, Users } from "lucide-react";

const DisabilityTypes = memo(() => {
  const [selectedType, setSelectedType] = useState(null);

  const disabilities = [
    {
      id: 1,
      icon: Eye,
      title: "Visual Impairment",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      description:
        "Includes partial sight, low vision, and blindness affecting daily activities and mobility.",
      stats: "2.2 billion people globally",
      examples: ["Blindness", "Low vision", "Color blindness", "Cataracts"],
      image: "Visual_Impairement_Image.jpg",
    },
    {
      id: 2,
      icon: Ear,
      title: "Hearing Impairment",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      description:
        "Ranges from mild hearing loss to complete deafness, affecting communication and social interaction.",
      stats: "430 million people globally",
      examples: [
        "Deafness",
        "Hard of hearing",
        "Tinnitus",
        "Auditory processing disorder",
      ],
      image: "Hearing_Impairment_Image.jpg",
    },
    {
      id: 3,
      icon: Accessibility,
      title: "Physical Disability",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      description:
        "Affects mobility, dexterity, or stamina, impacting movement and physical tasks.",
      stats: "75 million people need wheelchairs",
      examples: [
        "Paralysis",
        "Amputation",
        "Cerebral palsy",
        "Muscular dystrophy",
      ],
      image: "Physical_Disability_Image.jpg",
    },
    {
      id: 4,
      icon: Brain,
      title: "Intellectual Disability",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      description:
        "Characterized by limitations in intellectual functioning and adaptive behavior.",
      stats: "1-3% of global population",
      examples: [
        "Down syndrome",
        "Autism spectrum",
        "Learning disabilities",
        "Developmental delays",
      ],
      image: "Intellectual_Disability_Image.jpg",
    },
    {
      id: 5,
      icon: Heart,
      title: "Psychosocial Disability",
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50",
      description:
        "Mental health conditions that significantly impact daily life and social functioning.",
      stats: "1 in 8 people globally",
      examples: [
        "Depression",
        "Anxiety disorders",
        "Bipolar disorder",
        "Schizophrenia",
      ],
      image: "Psychosocial_Disability_Image.jpg",
    },
    {
      id: 6,
      icon: Users,
      title: "Multiple Disabilities",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      description:
        "Combination of two or more disabilities requiring comprehensive support systems.",
      stats: "Millions affected worldwide",
      examples: [
        "Deaf-blindness",
        "Complex needs",
        "Multiple impairments",
        "Co-occurring conditions",
      ],
      image: "Multiple_Disabilities_Image.jpg",
    },
  ];

  const handleToggle = useCallback((id) => {
    setSelectedType((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="relative z-10 min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-4">
            Understanding Disability Types
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Disability is diverse and affects people in different ways. Explore
            the main categories to better understand accessibility needs and
            inclusive practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {disabilities.map((disability) => {
            const Icon = disability.icon;
            const isSelected = selectedType === disability.id;

            return (
              <div
                key={disability.id}
                onClick={() => handleToggle(disability.id)}
                className={`cursor-pointer transition-all duration-300 ${
                  isSelected ? "scale-105 z-20" : "hover:scale-102 z-10"
                } relative`}
              >
                <div
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden h-full ${
                    isSelected ? "ring-4 ring-offset-2 ring-slate-400" : ""
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={disability.image}
                      alt={disability.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${disability.color} opacity-80`}
                    ></div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
                      <div className="flex items-center justify-between">
                        <Icon className="w-10 h-10" strokeWidth={2} />
                        <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          {disability.stats}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold">{disability.title}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-black mb-4 leading-relaxed">
                      {disability.description}
                    </p>

                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        isSelected
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pt-4 border-t border-slate-200">
                        <p className="text-sm font-semibold text-slate-700 mb-2">
                          Common Examples:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {disability.examples.map((example, idx) => (
                            <span
                              key={idx}
                              className={`${disability.bgColor} text-slate-700 text-sm px-3 py-1 rounded-full`}
                            >
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button className="mt-4 text-sm text-slate-500 hover:text-slate-700 transition-colors">
                      {isSelected
                        ? "← Click to collapse"
                        : "Click to learn more →"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-teal-900 mb-3">
            Accessibility Changes Everything
          </h3>
          <p className="text-black max-w-3xl mx-auto">
            When we remove barriers and prioritize inclusive design, we unlock
            potential and create pathways for 1 billion+ people to participate
            fully in society.
          </p>
        </div>
      </div>
    </div>
  );
});

DisabilityTypes.displayName = "DisabilityTypes";

export default DisabilityTypes;
