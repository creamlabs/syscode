const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[70vh] bg-neutral-900 flex items-center"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Design System Architecture
              <span className="text-blue-500">Visually</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Drag, drop, and connect components to create professional system
              design diagrams. Practice real-world architecture problems with
              our interactive canvas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 animate__animated animate__pulse animate__infinite">
                Start Designing Now
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-neutral-700"></div>
                <div className="w-8 h-8 rounded-full bg-neutral-600"></div>
                <div className="w-8 h-8 rounded-full bg-neutral-500"></div>
              </div>
              <p className="text-gray-400">Join 1000+ developers</p>
            </div>
          </div>
          <div className="relative animate__animated animate__fadeInRight">
            <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700 shadow-2xl">
              <div className="bg-neutral-900 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-blue-500/20 p-3 rounded-lg text-center">
                    <div className="text-blue-400 text-sm">API Gateway</div>
                  </div>
                  <div className="bg-purple-500/20 p-3 rounded-lg text-center">
                    <div className="text-purple-400 text-sm">Load Balancer</div>
                  </div>
                  <div className="bg-green-500/20 p-3 rounded-lg text-center">
                    <div className="text-green-400 text-sm">Database</div>
                  </div>
                </div>
                <div className="mt-3 flex justify-center">
                  <div className="w-1/2 h-1 bg-blue-500/20 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="text-center text-gray-400 text-sm">
                Drag and drop components to design your system
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
