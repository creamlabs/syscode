const Tutorials = () => {
  return (
    <section id="tutorials" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Learn System Design
          </h2>
          <p className="text-gray-400 text-lg">
            Step-by-step tutorials to master system architecture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-neutral-900 rounded-xl overflow-hidden group hover:shadow-xl transition-all animate__animated animate__fadeInUp">
            <div className="bg-blue-500/10 p-6 aspect-video flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Getting Started with System Design
              </h3>
              <p className="text-gray-400 mb-4">
                Learn the basics of system design and how to use our platform
                effectively.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">20 min</span>
                <button className="text-blue-500 hover:text-blue-400">
                  Watch Now →
                </button>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-xl overflow-hidden group hover:shadow-xl transition-all animate__animated animate__fadeInUp">
            <div className="bg-purple-500/10 p-6 aspect-video flex items-center justify-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Advanced Component Patterns
              </h3>
              <p className="text-gray-400 mb-4">
                Deep dive into common architectural patterns and when to use
                them.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">35 min</span>
                <button className="text-purple-500 hover:text-purple-400">
                  Watch Now →
                </button>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-xl overflow-hidden group hover:shadow-xl transition-all animate__animated animate__fadeInUp">
            <div className="bg-green-500/10 p-6 aspect-video flex items-center justify-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Scaling Your Architecture
              </h3>
              <p className="text-gray-400 mb-4">
                Learn how to design systems that scale to millions of users.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">45 min</span>
                <button className="text-green-500 hover:text-green-400">
                  Watch Now →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-all transform hover:scale-105">
            View All Tutorials
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
