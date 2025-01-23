const Demo = () => {
  return (
    <section id="demoCanvas" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interactive Demo Canvas
          </h2>
          <p className="text-gray-400 text-lg">
            Try our simplified demo version right here
          </p>
        </div>

        <div className="bg-neutral-800 rounded-xl border border-neutral-700 p-6 shadow-2xl animate__animated animate__fadeInUp">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Try Full Version
            </button>
          </div>

          <div className="grid grid-cols-12 gap-4 min-h-[400px]">
            <div className="col-span-3 bg-neutral-900 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-4">Components</h3>
              <div className="space-y-3">
                <div className="bg-blue-500/20 p-3 rounded-lg cursor-move hover:bg-blue-500/30 transition-colors">
                  <div className="text-blue-400 text-sm">API Gateway</div>
                </div>
                <div className="bg-green-500/20 p-3 rounded-lg cursor-move hover:bg-green-500/30 transition-colors">
                  <div className="text-green-400 text-sm">Database</div>
                </div>
                <div className="bg-purple-500/20 p-3 rounded-lg cursor-move hover:bg-purple-500/30 transition-colors">
                  <div className="text-purple-400 text-sm">Load Balancer</div>
                </div>
                <div className="bg-yellow-500/20 p-3 rounded-lg cursor-move hover:bg-yellow-500/30 transition-colors">
                  <div className="text-yellow-400 text-sm">Cache</div>
                </div>
                <div className="bg-red-500/20 p-3 rounded-lg cursor-move hover:bg-red-500/30 transition-colors">
                  <div className="text-red-400 text-sm">Message Queue</div>
                </div>
              </div>
            </div>

            <div className="col-span-9 bg-neutral-900 rounded-lg p-4 border-2 border-dashed border-neutral-700">
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 mx-auto text-neutral-700 mb-4"
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
                  <p className="text-neutral-500">
                    Drag and drop components here to start designing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors">
                Reset Canvas
              </button>
              <button className="px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors">
                Undo
              </button>
            </div>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Save Design
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Ready to create your full system design?
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 animate__animated animate__pulse animate__infinite">
            Start Building Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Demo;
