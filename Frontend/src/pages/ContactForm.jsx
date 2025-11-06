import React, { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  User,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "support@disabilityschemes.gov.in",
      link: "mailto:support@disabilityschemes.gov.in",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 1800-XXX-XXXX",
      link: "tel:+911800XXXXXX",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "New Delhi, India",
      link: "#",
      color: "text-violet-600",
      bgColor: "bg-violet-50",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon - Fri, 9AM - 6PM",
      link: "#",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
  ];

  const infoCards = [
    {
      title: "Quick Response",
      description:
        "Average response time of 2 hours during business days. We value your time.",
      color: "text-emerald-600",
      borderColor: "border-emerald-500",
    },
    {
      title: "Expert Guidance",
      description:
        "Get personalized assistance with eligibility, applications, and technical support.",
      color: "text-cyan-600",
      borderColor: "border-cyan-500",
    },
    {
      title: "Secure & Private",
      description:
        "Your information is protected with industry-standard security measures.",
      color: "text-rose-600",
      borderColor: "border-rose-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Minimalist with Color Accents */}
      <section className="relative py-24 md:py-32 border-b border-gray-100 overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-cyan-50">
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-emerald-200 to-cyan-200 rounded-full blur-3xl opacity-15 animate-float" />
          <div
            className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full blur-3xl opacity-15 animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/4 w-56 h-56 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full blur-3xl opacity-10 animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          {/* Animated badge with color */}
          <div
            className="inline-block mb-8 opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <div className="group inline-flex items-center gap-2 px-4 py-2 border-2 border-emerald-300 rounded-full hover:border-emerald-600 transition-all duration-300 cursor-default bg-emerald-50">
              <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
              <p className="text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Available Now
              </p>
            </div>
          </div>

          {/* Main heading with gradient */}
          <h1
            className="text-6xl md:text-8xl font-light text-gray-900 mb-6 tracking-tight leading-none opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Get in
            <span className="block font-black bg-gradient-to-r from-emerald-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Have a question? We're here to help. Drop us a message and expect a
            response within{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent font-bold">
              24 hours
            </span>
            .
          </p>

          {/* Scroll indicator */}
          <div
            className="flex justify-center mt-16 opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <div className="flex flex-col items-center gap-2 animate-bounce-slow">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                Scroll
              </span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-600 via-cyan-600 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-20">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8 space-y-8">
              <div>
                <h2 className="text-sm font-bold text-gray-400 mb-8 uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className="group block hover-lift"
                        style={{
                          animation: "fadeInLeft 0.6s ease-out forwards",
                          animationDelay: `${0.1 + index * 0.1}s`,
                          opacity: 0,
                        }}
                      >
                        <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                          <div
                            className={`p-3 rounded-lg ${info.bgColor} flex-shrink-0`}
                          >
                            <Icon className={`w-5 h-5 ${info.color}`} />
                          </div>
                          <div>
                            <h3
                              className={`text-xs font-bold mb-1.5 uppercase tracking-wide ${info.color}`}
                            >
                              {info.title}
                            </h3>
                            <p className="text-base text-gray-900 leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
                              {info.content}
                            </p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Divider line with gradient */}
              <div className="relative pt-8">
                <div className="w-full h-[2px] bg-gradient-to-r from-emerald-200 via-cyan-200 to-transparent" />
              </div>

              {/* Additional info with color accent */}
              <div className="space-y-4 p-4 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-lg border border-emerald-200">
                <p className="text-sm text-gray-600 leading-relaxed">
                  For urgent matters, call our helpline for immediate
                  assistance.
                </p>
                <div className="flex items-center gap-2 text-sm text-emerald-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Average 2-hour response time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form - Right Side */}
          <div className="lg:col-span-2">
            {/* Success Message with color */}
            {isSubmitted && (
              <div className="mb-8 overflow-hidden animate-slideDown">
                <div className="relative p-5 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-lg overflow-hidden shadow-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">
                        Message sent successfully!
                      </p>
                      <p className="text-sm text-white/80">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 bg-white/20">
                    <div className="h-full bg-white animate-progress" />
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Name */}
              <div className="group relative">
                <label className="block text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>Full Name</span>
                  <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 focus:border-emerald-600 outline-none text-gray-900 text-lg transition-all duration-300 placeholder:text-gray-300"
                    placeholder="John Doe"
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-emerald-600 to-cyan-600 transition-all duration-300 ${
                      focusedField === "name" ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              </div>

              {/* Email & Phone Grid */}
              <div className="grid md:grid-cols-2 gap-10">
                <div className="group relative">
                  <label className="block text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span>Email Address</span>
                    <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 focus:border-cyan-600 outline-none text-gray-900 text-lg transition-all duration-300 placeholder:text-gray-300"
                      placeholder="your@email.com"
                    />
                    <div
                      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-600 to-blue-600 transition-all duration-300 ${
                        focusedField === "email" ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                </div>

                <div className="group relative">
                  <label className="block text-sm font-bold text-gray-900 mb-4">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 focus:border-violet-600 outline-none text-gray-900 text-lg transition-all duration-300 placeholder:text-gray-300"
                      placeholder="+91 XXXXX XXXXX"
                    />
                    <div
                      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-300 ${
                        focusedField === "phone" ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="group relative">
                <label className="block text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>Subject</span>
                  <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 focus:border-rose-600 outline-none text-gray-900 text-lg transition-all duration-300 placeholder:text-gray-300"
                    placeholder="How can we help?"
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-rose-600 to-pink-600 transition-all duration-300 ${
                      focusedField === "subject" ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="group relative">
                <label className="block text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>Message</span>
                  <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows="5"
                    className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 focus:border-emerald-600 outline-none text-gray-900 text-lg resize-none transition-all duration-300 placeholder:text-gray-300"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-emerald-600 via-cyan-600 to-violet-600 transition-all duration-300 ${
                      focusedField === "message" ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              </div>

              {/* Submit Button with gradient */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-sm font-bold tracking-wide uppercase hover:shadow-lg hover:shadow-cyan-600/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden rounded-lg"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />

                  <span className="relative z-10">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>

                  {!isSubmitting && (
                    <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  )}

                  {isSubmitting && (
                    <div className="relative z-10 w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Info Section with colored borders */}
      <section className="border-t border-gray-100 bg-gradient-to-br from-gray-50 via-emerald-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-3 gap-12">
            {infoCards.map((item, index) => (
              <div
                key={index}
                className="group hover-lift"
                style={{
                  animation: "fadeInUp 0.6s ease-out forwards",
                  animationDelay: `${0.1 + index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div
                  className={`relative border-l-4 ${item.borderColor} pl-6 py-4 hover:pl-8 transition-all duration-300`}
                >
                  <h3
                    className={`text-sm font-bold mb-3 uppercase tracking-wide flex items-center gap-2 ${item.color}`}
                  >
                    {item.title}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
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

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }

        .animate-progress {
          animation: progress 5s linear forwards;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce 3s ease-in-out infinite;
        }

        .hover-lift {
          transition: transform 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
