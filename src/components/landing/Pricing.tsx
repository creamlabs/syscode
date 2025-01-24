const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-lg">
            Choose the perfect plan for your system design journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700 hover:border-blue-500 transition-all animate__animated animate__fadeInUp">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
              <div className="text-4xl font-bold text-white mb-4">
                $0<span className="text-lg text-gray-400">/month</span>
              </div>
              <p className="text-gray-400 mb-6">Perfect for getting started</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Basic Components Library
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                5 Diagrams Storage
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Community Support
              </li>
            </ul>
            <button className="w-full py-3 px-4 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors">
              Get Started
            </button>
          </div>

          <div className="bg-neutral-800 rounded-xl p-8 border-2 border-blue-500 transform scale-105 animate__animated animate__fadeInUp">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                Most Popular
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
              <div className="text-4xl font-bold text-white mb-4">
                $19<span className="text-lg text-gray-400">/month</span>
              </div>
              <p className="text-gray-400 mb-6">For serious system designers</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Everything in Free
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Unlimited Diagrams
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Advanced Components
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Priority Support
              </li>
            </ul>
            <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get Pro Access
            </button>
          </div>

          <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700 hover:border-purple-500 transition-all animate__animated animate__fadeInUp">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                Enterprise
              </h3>
              <div className="text-4xl font-bold text-white mb-4">Custom</div>
              <p className="text-gray-400 mb-6">
                For large teams & organizations
              </p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Everything in Pro
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Custom Components
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Dedicated Support
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                SLA & Training
              </li>
            </ul>
            <button className="w-full py-3 px-4 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
