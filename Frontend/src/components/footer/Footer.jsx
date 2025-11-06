import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowRight,
  Users,
  Lightbulb,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Find Support", href: "/disabilities" },
    { label: "Government Schemes", href: "/schemes" },
    { label: "Community Resources", href: "/resources" },
    { label: "Get Help", href: "/contact" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: import.meta.env.VITE_SUPPORT_EMAIL,
      href: `mailto:${import.meta.env.VITE_SUPPORT_EMAIL}`,
    },
    {
      icon: Phone,
      label: `${import.meta.env.VITE_SUPPORT_PHONE}`,
      href: `tel:${import.meta.env.VITE_SUPPORT_PHONE}`,
    },
    {
      icon: MapPin,
      label: import.meta.env.VITE_LOCATION_TEXT,
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: import.meta.env.VITE_FACEBOOK_LINK,
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: import.meta.env.VITE_TWITTER_LINK,
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: import.meta.env.VITE_INSTAGRAM_LINK,
    },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Accessibility Statement", href: "#" },
    { label: "Terms of Use", href: "#" },
  ];

  const resources = [
    { icon: Heart, label: "Mental Health Support", href: "#" },
    { icon: Users, label: "Peer Community", href: "#" },
    { icon: Lightbulb, label: "Awareness Hub", href: "#" },
  ];

  return (
    <footer
      className="relative overflow-hidden bg-gray-950 text-black"
      style={{
        backgroundImage: `url('/FooterImage.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Enhanced Dark Overlay - Ensures 7:1+ Contrast Ratio */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/80 pointer-events-none"></div>

      {/* Gradient Lights (Adjusted for Dark Overlay) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-black text-white tracking-tight drop-shadow-lg">
                DisabilityAware
              </h2>
              <p className="text-xs text-teal-200 font-medium tracking-widest mt-1 drop-shadow">
                EMPOWERING LIVES, BUILDING INCLUSIVE SOCIETY
              </p>
            </div>
          </div>
          <p className="text-base text-gray-100 leading-relaxed max-w-2xl font-light drop-shadow">
            Supporting individuals with disabilities through comprehensive
            resources, government schemes, and community connection. Your
            accessibility journey starts here.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Quick Resources */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-black text-white mb-8 uppercase tracking-[0.2em] drop-shadow">
              Quick Resources
            </h3>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  className="flex items-center gap-3 text-gray-200 hover:text-teal-300 transition-all duration-500 group/link"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-600/30 border border-teal-400/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-teal-500/40 hover:to-emerald-400/40 transition-all duration-500">
                    <resource.icon size={18} className="text-teal-200" />
                  </div>
                  <span className="text-sm font-medium text-gray-200 group-hover/link:text-teal-300 transition-colors duration-300">
                    {resource.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-black text-white mb-8 uppercase tracking-[0.2em] drop-shadow">
              Navigate
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-200 hover:text-teal-300 transition-all duration-300 flex items-center gap-3 group/nav"
                  >
                    <span className="w-0.5 h-4 bg-gradient-to-b from-teal-300 to-transparent opacity-0 group-hover/nav:opacity-100 transition-opacity"></span>
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-emerald-300 group-hover/nav:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-black text-white mb-8 uppercase tracking-[0.2em] drop-shadow">
              Reach Our Team
            </h3>
            <ul className="space-y-5">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-start gap-4 group/contact"
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal-600/30 border border-teal-400/50 flex items-center justify-center flex-shrink-0 group-hover/contact:bg-teal-500/50 transition-all duration-300">
                      <item.icon size={18} className="text-teal-200" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-300 font-medium mb-1">
                        {index === 0
                          ? "Email Support"
                          : index === 1
                          ? "Emergency Helpline"
                          : "Service Coverage"}
                      </p>
                      <p className="text-sm text-gray-100 group-hover/contact:text-teal-300 transition-colors duration-300">
                        {item.label}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter
          <div className="md:col-span-3">
            <h3 className="text-xs font-black text-white mb-6 uppercase tracking-[0.2em] drop-shadow">
              Stay Connected
            </h3>
            <p className="text-xs text-gray-200 mb-6 leading-relaxed">
              Subscribe for disability rights updates, scheme information, and
              community stories.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 text-sm rounded-lg bg-white/15 backdrop-blur-md border border-teal-400/40 text-white placeholder-gray-300 focus:outline-none focus:border-teal-300 focus:bg-white/25 transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-teal-500/40"
              >
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
          </div> */}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent mb-12"></div>

        {/* Social Links */}
        <div className="mb-12">
          <h3 className="text-xs font-black text-white mb-6 uppercase tracking-[0.2em] drop-shadow">
            Connect With Us
          </h3>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-11 h-11 rounded-lg bg-white/15 backdrop-blur-md border border-teal-400/50 flex items-center justify-center text-teal-200 hover:text-white hover:bg-gradient-to-br hover:from-teal-500/60 hover:to-emerald-500/60 hover:border-teal-300/80 transition-all duration-500"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="text-xs text-gray-300 font-light tracking-wide drop-shadow">
            © {new Date().getFullYear()} DisabilityAware. Committed to an
            inclusive tomorrow.
          </p>

          <div className="flex gap-6 flex-wrap">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-xs text-gray-300 hover:text-teal-300 transition-colors duration-300 font-light tracking-wide relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-teal-400 to-emerald-300 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
