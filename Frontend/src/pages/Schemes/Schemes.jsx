import { useEffect, useState } from "react";
import axios from "axios";
import { Search, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Schemes = () => {
  const [schemes, setSchemes] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const limit = 6;
  const API_BASE = "http://localhost:8000/api/schemes";

  const fetchSchemes = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(API_BASE, {
        params: { q: query, page, limit },
      });

      if (res.data.success) {
        setSchemes(res.data.data.items || []);
        setTotal(res.data.data.total || 0);
      } else {
        setError("Failed to fetch schemes");
      }
    } catch (err) {
      setError("Error fetching data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchemes();
  }, [query, page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></div>
              <span className="text-teal-600 text-xs font-medium tracking-wide">
                GOVERNMENT SUPPORT PROGRAMS
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4 tracking-tight">
              Disability Schemes & Benefits
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
              Explore various government schemes, financial aids, and support
              programs available for people with disabilities.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-10 max-w-2xl">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative flex items-center bg-white backdrop-blur-sm rounded-2xl shadow-2xl px-6 py-4 border border-slate-200">
                <Search className="text-teal-600 w-5 h-5 flex-shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search by scheme or keyword..."
                  className="ml-4 w-full outline-none text-slate-700 placeholder:text-slate-400 bg-transparent text-base"
                />
                {query && (
                  <button
                    onClick={() => {
                      setQuery("");
                      setPage(1);
                    }}
                    className="ml-2 text-teal-600 hover:text-teal-700 text-sm font-medium"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-12">
        {!loading && !error && schemes.length > 0 && (
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-slate-600">
              Showing{" "}
              <span className="font-semibold text-teal-600">
                {schemes.length}
              </span>{" "}
              of <span className="font-semibold text-teal-600">{total}</span>{" "}
              results
            </p>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-32">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <Loader2 className="w-12 h-12 text-teal-600 animate-spin" />
                <div className="absolute inset-0 blur-xl bg-teal-600 opacity-20 animate-pulse"></div>
              </div>
              <p className="text-slate-600 font-medium">Loading schemes...</p>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex justify-center py-16">
            <div className="bg-white border border-red-200 rounded-2xl px-8 py-6 max-w-md text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-red-200">
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
              <p className="text-red-600 font-semibold mb-1">
                Unable to Load Data
              </p>
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && schemes.length === 0 && (
          <div className="flex justify-center py-16">
            <div className="bg-white border border-slate-200 rounded-2xl px-8 py-12 max-w-md text-center shadow-sm">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200">
                <Search className="w-8 h-8 text-teal-600" />
              </div>
              <p className="text-slate-900 font-semibold mb-2">
                No Schemes Found
              </p>
              <p className="text-slate-600 text-sm">
                Try adjusting your search terms or clear filters
              </p>
            </div>
          </div>
        )}

        {/* Scheme Cards */}
        {!loading && !error && schemes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schemes.map((scheme) => (
              <div
                key={scheme.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden h-48 bg-white border-b border-slate-200 flex items-center justify-center">
                  <span className="text-5xl opacity-60">
                    🏛️
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                    {scheme.title_en}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {scheme.description_en || "No description available."}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                    <button
                      onClick={() => navigate(`/schemes/${scheme.id}`)}
                      className="text-teal-600 text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      View Details
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                    {scheme.applicable_disability_ids && (
                      <span className="text-xs text-slate-500">
                        Applies to: {scheme.applicable_disability_ids}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 gap-2">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm"
            >
              Previous
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNum = index + 1;
                if (
                  pageNum === 1 ||
                  pageNum === totalPages ||
                  (pageNum >= page - 1 && pageNum <= page + 1)
                ) {
                  return (
                    <button
                      key={index}
                      onClick={() => setPage(pageNum)}
                      className={`min-w-[40px] px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 ${
                        page === pageNum
                          ? "bg-white text-teal-600 border border-teal-300 shadow-lg shadow-teal-200"
                          : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                } else if (pageNum === page - 2 || pageNum === page + 2) {
                  return (
                    <span key={index} className="px-2 py-2 text-slate-400">
                      ...
                    </span>
                  );
                }
                return null;
              })}
            </div>

            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schemes;
