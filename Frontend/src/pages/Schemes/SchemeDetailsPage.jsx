import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Loader2,
  CheckCircle,
  Users,
  FileText,
  Calendar,
  ExternalLink,
  Download,
  Share2,
} from "lucide-react";

const SchemeDetails = ({ schemeId = "1" }) => {
  const [scheme, setScheme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_BASE = "http://localhost:8000/api/schemes";

  useEffect(() => {
    const fetchSchemeDetails = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(`${API_BASE}/${schemeId}`);
        const data = await res.json();

        if (data.success) {
          setScheme(data.data);
        } else {
          setError("Failed to fetch scheme details");
        }
      } catch (err) {
        setError("Error loading scheme details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (schemeId) {
      fetchSchemeDetails();
    }
  }, [schemeId]);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
            <div className="absolute inset-0 blur-xl bg-indigo-600 opacity-20 animate-pulse"></div>
          </div>
          <p className="text-slate-600 font-medium">
            Loading scheme details...
          </p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex justify-center items-center p-4">
        <div className="bg-red-50 border border-red-100 rounded-2xl px-8 py-6 max-w-md text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <p className="text-red-900 font-semibold mb-1">
            Unable to Load Scheme
          </p>
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!scheme) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-10 py-12">
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Schemes</span>
          </button>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Scheme Image */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={scheme.image_url}
                  alt={scheme.title_en}
                  className="w-full h-64 lg:h-80 object-cover"
                  onError={(e) => (e.target.src = "/placeholder.jpg")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
            </div>

            {/* Scheme Header Info */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-400/20 rounded-full px-4 py-1.5 mb-4">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></div>
                <span className="text-indigo-300 text-xs font-medium tracking-wide">
                  GOVERNMENT SCHEME
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                {scheme.title_en}
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {scheme.short_desc_en}
              </p>

              {/* Quick Info Tags */}
              <div className="flex flex-wrap gap-3">
                {scheme.department && (
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                    <FileText className="w-4 h-4 text-indigo-300" />
                    <span className="text-white text-sm font-medium">
                      {scheme.department}
                    </span>
                  </div>
                )}
                {scheme.target_group && (
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                    <Users className="w-4 h-4 text-indigo-300" />
                    <span className="text-white text-sm font-medium">
                      {scheme.target_group}
                    </span>
                  </div>
                )}
                {scheme.launch_date && (
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                    <Calendar className="w-4 h-4 text-indigo-300" />
                    <span className="text-white text-sm font-medium">
                      {new Date(scheme.launch_date).toLocaleDateString(
                        "en-IN",
                        {
                          year: "numeric",
                          month: "long",
                        }
                      )}
                    </span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                {scheme.application_url && (
                  <a
                    href={scheme.application_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40"
                  >
                    Apply Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 border border-white/20">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 border border-white/20">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-indigo-600" />
                </div>
                Overview
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed">
                  {scheme.description_en || scheme.short_desc_en}
                </p>
              </div>
            </div>

            {/* Eligibility Criteria */}
            {scheme.eligibility_criteria &&
              scheme.eligibility_criteria.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    Eligibility Criteria
                  </h2>
                  <div className="space-y-3">
                    {scheme.eligibility_criteria.map((criteria, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100"
                      >
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          {criteria}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {/* Benefits */}
            {scheme.benefits && scheme.benefits.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  Benefits
                </h2>
                <div className="grid gap-4">
                  {scheme.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
                    >
                      <p className="text-slate-700 leading-relaxed font-medium">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Application Process */}
            {scheme.application_process &&
              scheme.application_process.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <FileText className="w-5 h-5 text-purple-600" />
                    </div>
                    How to Apply
                  </h2>
                  <div className="space-y-4">
                    {scheme.application_process.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-slate-700 leading-relaxed">
                            {step}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {/* Required Documents */}
            {scheme.required_documents &&
              scheme.required_documents.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                      <FileText className="w-5 h-5 text-orange-600" />
                    </div>
                    Required Documents
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {scheme.required_documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                        <p className="text-slate-700">{doc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                {scheme.official_website && (
                  <a
                    href={scheme.official_website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors group"
                  >
                    <span className="text-slate-700 font-medium text-sm">
                      Official Website
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
                  </a>
                )}
                {scheme.helpline && (
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <p className="text-xs text-slate-500 mb-1">
                      Helpline Number
                    </p>
                    <p className="text-slate-900 font-semibold">
                      {scheme.helpline}
                    </p>
                  </div>
                )}
                {scheme.email && (
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <p className="text-xs text-slate-500 mb-1">Email Support</p>
                    <p className="text-slate-900 font-medium text-sm break-all">
                      {scheme.email}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Key Information Card */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Key Information
              </h3>
              <div className="space-y-4">
                {scheme.ministry && (
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Ministry</p>
                    <p className="text-slate-900 font-semibold">
                      {scheme.ministry}
                    </p>
                  </div>
                )}
                {scheme.state && (
                  <div>
                    <p className="text-xs text-slate-600 mb-1">State</p>
                    <p className="text-slate-900 font-semibold">
                      {scheme.state}
                    </p>
                  </div>
                )}
                {scheme.scheme_type && (
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Scheme Type</p>
                    <p className="text-slate-900 font-semibold">
                      {scheme.scheme_type}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeDetails;
