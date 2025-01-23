const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about the platform
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-neutral-900 rounded-lg border border-neutral-700 animate__animated animate__fadeInUp">
            <button className="faq-button w-full flex justify-between items-center p-6 focus:outline-none">
              <span className="text-lg font-semibold text-white">
                How does the drag and drop interface work?
              </span>
              <svg
                className="faq-icon w-6 h-6 text-gray-400 transform transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div className="faq-answer hidden p-6 pt-0 text-gray-400">
              Simply drag components from the left sidebar onto the canvas.
              Connect them by clicking and dragging between connection points.
              The interface automatically aligns and organizes your components
              for clean architecture diagrams.
            </div>
          </div>

          <div className="bg-neutral-900 rounded-lg border border-neutral-700 animate__animated animate__fadeInUp">
            <button className="faq-button w-full flex justify-between items-center p-6 focus:outline-none">
              <span className="text-lg font-semibold text-white">
                Can I save and share my diagrams?
              </span>
              <svg
                className="faq-icon w-6 h-6 text-gray-400 transform transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div className="faq-answer hidden p-6 pt-0 text-gray-400">
              Yes! All diagrams are automatically saved to your account. You can
              export them as PNG, SVG, or share directly with a link. Pro users
              get additional collaboration features and unlimited storage.
            </div>
          </div>

          <div className="bg-neutral-900 rounded-lg border border-neutral-700 animate__animated animate__fadeInUp">
            <button className="faq-button w-full flex justify-between items-center p-6 focus:outline-none">
              <span className="text-lg font-semibold text-white">
                Are the practice questions updated regularly?
              </span>
              <svg
                className="faq-icon w-6 h-6 text-gray-400 transform transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div className="faq-answer hidden p-6 pt-0 text-gray-400">
              Yes, we add new system design questions weekly based on real
              interview experiences. Our team researches and validates questions
              from top tech companies to keep content current.
            </div>
          </div>

          <div className="bg-neutral-900 rounded-lg border border-neutral-700 animate__animated animate__fadeInUp">
            <button className="faq-button w-full flex justify-between items-center p-6 focus:outline-none">
              <span className="text-lg font-semibold text-white">
                Do you offer team subscriptions?
              </span>
              <svg
                className="faq-icon w-6 h-6 text-gray-400 transform transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div className="faq-answer hidden p-6 pt-0 text-gray-400">
              Yes, we offer team and enterprise plans with custom pricing. These
              include additional features like SSO, admin dashboard, and
              dedicated support. Contact our sales team for details.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
