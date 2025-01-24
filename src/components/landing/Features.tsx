const Features = () => {
  return (
    <section id="features" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features for System Design
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to create and practice system architecture
            diagrams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 hover:border-blue-500 transition-all animate__animated animate__fadeInUp">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Drag & Drop Interface
            </h3>
            <p className="text-gray-400">
              Intuitive drag and drop functionality with React Flow for creating
              system diagrams effortlessly.
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 hover:border-purple-500 transition-all animate__animated animate__fadeInUp">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-500"
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
            <h3 className="text-xl font-semibold text-white mb-2">
              Component Library
            </h3>
            <p className="text-gray-400">
              Extensive collection of pre-built system design components and
              architectural patterns.
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 hover:border-green-500 transition-all animate__animated animate__fadeInUp">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Real-time Validation
            </h3>
            <p className="text-gray-400">
              Instant feedback on your system design with best practices and
              optimization suggestions.
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 hover:border-red-500 transition-all animate__animated animate__fadeInUp">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Practice Questions
            </h3>
            <p className="text-gray-400">
              Curated collection of system design interview questions from top
              tech companies.
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 hover:border-yellow-500 transition-all animate__animated animate__fadeInUp">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Export & Share
            </h3>
            <p className="text-gray-400">
              Export your diagrams in multiple formats and share them with your
              team instantly.
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 hover:border-indigo-500 transition-all animate__animated animate__fadeInUp">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Dark Mode</h3>
            <p className="text-gray-400">
              Comfortable viewing experience with dark mode support for long
              design sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
