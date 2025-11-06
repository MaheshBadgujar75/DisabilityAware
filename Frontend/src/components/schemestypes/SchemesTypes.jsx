// DisabilitySchemes.jsx
import React, { useState, useCallback, memo } from "react";
import {
  FileText,
  Banknote,
  GraduationCap,
  Briefcase,
  Home,
  Heart,
} from "lucide-react";

const SCHEMES_DATA = [
  {
    id: 1,
    icon: FileText,
    title: "UDID Card",
    subtitle: "Unique Disability ID",
    color: "from-cyan-500 to-teal-600",
    bgColor: "bg-cyan-50",
    description:
      "A single document proof of disability that provides easy access to various government schemes and benefits.",
    coverage: "Pan-India",
    eligibility: [
      "Persons with disabilities",
      "40% or more disability",
      "Valid disability certificate",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    id: 2,
    icon: Banknote,
    title: "Disability Pension",
    subtitle: "Financial Assistance",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    description:
      "Monthly financial support for persons with disabilities to meet basic living expenses and healthcare needs.",
    coverage: "State-specific",
    eligibility: [
      "40% or more disability",
      "Below poverty line",
      "Age criteria varies",
    ],
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "Scholarship Schemes",
    subtitle: "Education Support",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
    description:
      "Educational scholarships for students with disabilities from pre-matric to post-matric levels.",
    coverage: "Central & State",
    eligibility: [
      "Students with disabilities",
      "40% or more disability",
      "Enrolled in recognized institutions",
    ],
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Employment Schemes",
    subtitle: "Job Opportunities",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    description:
      "Reservation in government jobs and skill development programs for persons with disabilities.",
    coverage: "Central & State",
    eligibility: [
      "Persons with disabilities",
      "4% reservation in govt jobs",
      "Valid disability certificate",
    ],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
  },
  {
    id: 5,
    icon: Home,
    title: "Housing Schemes",
    subtitle: "Accessible Homes",
    color: "from-rose-500 to-rose-600",
    bgColor: "bg-rose-50",
    description:
      "Financial assistance and priority allocation for accessible housing for persons with disabilities.",
    coverage: "State-specific",
    eligibility: [
      "Persons with disabilities",
      "Below poverty line",
      "First-time home seekers",
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    id: 6,
    icon: Heart,
    title: "Healthcare Schemes",
    subtitle: "Medical Support",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    description:
      "Free healthcare services, assistive devices, and medical treatment for persons with disabilities.",
    coverage: "Central & State",
    eligibility: [
      "Persons with disabilities",
      "Valid disability certificate",
      "Income criteria varies",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
];

const SchemeCard = memo(({ scheme, isSelected, onToggle }) => {
  const Icon = scheme.icon;

  return (
    <article
      onClick={onToggle}
      className={`cursor-pointer transition-all duration-300 ${
        isSelected ? "scale-105 z-20" : "hover:scale-102 z-10"
      } relative`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      <div
        className={`bg-white rounded-2xl shadow-lg overflow-hidden h-full ${
          isSelected ? "ring-4 ring-offset-2 ring-slate-400" : ""
        }`}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={scheme.image}
            alt={`${scheme.title} illustration`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${scheme.color} opacity-80`}
          ></div>
          <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
            <div className="flex items-center justify-between">
              <Icon className="w-10 h-10" strokeWidth={2} />
              <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                {scheme.coverage}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold">{scheme.title}</h3>
              <p className="text-sm opacity-90 mt-1">{scheme.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-black mb-4 leading-relaxed">
            {scheme.description}
          </p>

          <div
            className={`transition-all duration-300 overflow-hidden ${
              isSelected ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-4 border-t border-slate-200">
              <h4 className="text-sm font-semibold text-slate-700 mb-2">
                Key Eligibility:
              </h4>
              <ul className="flex flex-wrap gap-2">
                {scheme.eligibility.map((item, idx) => (
                  <li
                    key={idx}
                    className={`${scheme.bgColor} text-slate-700 text-sm px-3 py-1 rounded-full`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button className="mt-4 text-sm text-slate-500 hover:text-slate-700 transition-colors">
            {isSelected
              ? "← Click to collapse"
              : "Click to view eligibility criteria →"}
          </button>
        </div>
      </div>
    </article>
  );
});

SchemeCard.displayName = "SchemeCard";

const DisabilitySchemes = memo(() => {
  const [selectedScheme, setSelectedScheme] = useState(null);

  const handleToggle = useCallback((schemeId) => {
    setSelectedScheme((prev) => (prev === schemeId ? null : schemeId));
  }, []);

  return (
    <div className="relative z-10 min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-4">
            Government Disability Schemes
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Explore various government schemes and benefits available for
            persons with disabilities across India to support education,
            employment, healthcare, and independent living.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {SCHEMES_DATA.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              scheme={scheme}
              isSelected={selectedScheme === scheme.id}
              onToggle={() => handleToggle(scheme.id)}
            />
          ))}
        </section>

        <footer className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-teal-900 mb-3">
            Empowering Through Support
          </h2>
          <p className="text-black max-w-3xl mx-auto">
            The Government of India provides numerous schemes to support persons
            with disabilities in achieving independence, education, employment,
            and improved quality of life. Visit official portals for detailed
            information and application procedures.
          </p>
        </footer>
      </div>
    </div>
  );
});

DisabilitySchemes.displayName = "DisabilitySchemes";

export default DisabilitySchemes;
