export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 animate-pulse">
      {/* Animated Header */}
      <header className="container mx-auto px-6 py-16 relative overflow-hidden">
        {/* Floating EEG Wave Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="flex space-x-2 animate-bounce">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className={`w-2 bg-yellow-400 animate-pulse`}
                style={{
                  height: `${Math.random() * 60 + 20}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="text-center relative z-10">
          <h1 className="text-7xl font-bold text-white mb-4 animate-bounce">
            🧠 MS<span className="text-yellow-400 animate-pulse">Neuro</span> ⚡
          </h1>
          <p className="text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto animate-fade-in">
            🔬 Interactive Neuroscience Hub with Real-Time EEG Data Processing & Brain Visualization 🌈
          </p>
          <div className="flex justify-center space-x-6 animate-pulse">
            <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full hover:scale-110 transform transition duration-300 shadow-2xl">
              🚀 Explore Brain Data
            </button>
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full hover:scale-110 transform transition duration-300 shadow-2xl">
              🎯 Process EEG Signals
            </button>
          </div>
        </div>
      </header>

      {/* Animated EEG Data Visualization */}
      <section className="container mx-auto px-6 mb-16">
        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-8 animate-pulse">
            🔥 Live EEG Data Visualization 🔥
          </h2>
          <div className="grid grid-cols-4 gap-4 mb-6">
            {['Alpha', 'Beta', 'Gamma', 'Theta'].map((wave, index) => (
              <div key={wave} className="text-center">
                <h3 className="text-cyan-300 font-bold mb-2">{wave} Waves</h3>
                <div className="bg-black rounded-lg p-4 h-24 flex items-end justify-center space-x-1">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 bg-gradient-to-t ${
                        index === 0 ? 'from-red-500 to-orange-500' :
                        index === 1 ? 'from-blue-500 to-cyan-500' :
                        index === 2 ? 'from-green-500 to-emerald-500' :
                        'from-purple-500 to-pink-500'
                      } animate-pulse rounded-t`}
                      style={{
                        height: `${Math.random() * 60 + 20}px`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Topic Cards */}
      <main className="container mx-auto px-6 pb-16">
        <section className="mb-16">
          <h2 className="text-5xl font-bold text-center text-white mb-12 animate-bounce">
            🌟 Explore Neuroscience Universe 🌟
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Enhanced Neuroscience Card */}
            <div className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-3xl shadow-2xl p-8 hover:scale-105 transform transition duration-500 hover:rotate-2">
              <div className="text-white mb-4 text-6xl animate-spin">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">🔬 Neuroscience Lab</h3>
              <p className="text-pink-100 mb-6 text-lg">
                🌈 Dive deep into brain anatomy, neural networks, and cutting-edge research!
              </p>
              <ul className="text-pink-200 space-y-2 mb-6">
                <li>🎯 • Brain anatomy visualization</li>
                <li>⚡ • Neural signal analysis</li>
                <li>🧬 • Synaptic transmission</li>
                <li>🔥 • Neuroplasticity studies</li>
              </ul>
              <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-bold hover:bg-pink-100 transition shadow-lg">
                🚀 Explore Now
              </button>
            </div>

            {/* Enhanced BCI Card */}
            <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-3xl shadow-2xl p-8 hover:scale-105 transform transition duration-500 hover:-rotate-2">
              <div className="text-white mb-4 text-6xl animate-pulse">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">🎮 Brain-Computer Interface</h3>
              <p className="text-blue-100 mb-6 text-lg">
                🌊 Control devices with your thoughts! Explore futuristic BCI technology.
              </p>
              <ul className="text-blue-200 space-y-2 mb-6">
                <li>🎪 • Mind-controlled games</li>
                <li>🔮 • Thought-to-text systems</li>
                <li>🎭 • Neural prosthetics</li>
                <li>🌈 • Real-time brain decoding</li>
              </ul>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition shadow-lg">
                🎯 Try BCI Demo
              </button>
            </div>

            {/* Enhanced EEG Processing Card */}
            <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-3xl shadow-2xl p-8 hover:scale-105 transform transition duration-500 hover:rotate-2">
              <div className="text-white mb-4 text-6xl animate-bounce">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">⚡ EEG Data Processing</h3>
              <p className="text-purple-100 mb-6 text-lg">
                🔥 Advanced tools for EEG analysis, filtering, and brain state detection!
              </p>
              <ul className="text-purple-200 space-y-2 mb-6">
                <li>🎨 • Interactive data filtering</li>
                <li>🎵 • Spectral analysis tools</li>
                <li>🎪 • Artifact removal wizard</li>
                <li>🌟 • Machine learning features</li>
              </ul>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-purple-100 transition shadow-lg">
                🛠️ Launch Tools
              </button>
            </div>
          </div>
        </section>

        {/* Interactive EEG Processing Pipeline */}
        <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-3xl shadow-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-12 text-center animate-pulse">
            🎛️ Interactive EEG Processing Pipeline 🎛️
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Data Import", desc: "Load & verify EEG files", color: "from-red-500 to-pink-500", icon: "📁", tool: "EEG Loader" },
              { step: 2, title: "Signal Filtering", desc: "Remove noise & artifacts", color: "from-blue-500 to-cyan-500", icon: "🔧", tool: "Filter Designer" },
              { step: 3, title: "Feature Extraction", desc: "Extract meaningful patterns", color: "from-green-500 to-emerald-500", icon: "🎯", tool: "Feature Analyzer" },
              { step: 4, title: "Classification", desc: "AI-powered analysis", color: "from-purple-500 to-indigo-500", icon: "🤖", tool: "AI Classifier" }
            ].map((item, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`bg-gradient-to-br ${item.color} rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transform transition duration-500 shadow-2xl`}>
                  <span className="text-4xl animate-bounce">{item.icon}</span>
                </div>
                <h4 className="font-bold text-xl text-white mb-3">{item.title}</h4>
                <p className="text-gray-300 mb-4">{item.desc}</p>
                <a 
                  href={`#${item.tool.toLowerCase().replace(' ', '-')}`}
                  className={`inline-block bg-gradient-to-r ${item.color} text-white px-6 py-2 rounded-full font-semibold hover:scale-110 transform transition duration-300 shadow-lg`}
                >
                  🚀 Open {item.tool}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* EEG Processing Tools Section */}
        <section className="bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-800 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-yellow-300 mb-12 animate-pulse">
            🛠️ Professional EEG Processing Tools 🛠️
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "EEGLab Processor", desc: "Advanced MATLAB-based processing", link: "https://eeglab.org/", color: "bg-red-600", icon: "🔬" },
              { name: "MNE-Python", desc: "Python toolkit for MEG/EEG analysis", link: "https://mne.tools/", color: "bg-blue-600", icon: "🐍" },
              { name: "FieldTrip", desc: "MATLAB software for EEG/MEG analysis", link: "https://www.fieldtriptoolbox.org/", color: "bg-green-600", icon: "⚡" },
              { name: "BrainVision Analyzer", desc: "Professional EEG analysis software", link: "#brainvision", color: "bg-purple-600", icon: "👁️" },
              { name: "OpenViBE", desc: "Real-time neurotechnology platform", link: "http://openvibe.inria.fr/", color: "bg-orange-600", icon: "🎮" },
              { name: "BESA Research", desc: "Source analysis and connectivity", link: "#besa", color: "bg-pink-600", icon: "🧠" }
            ].map((tool, index) => (
              <a
                key={index}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${tool.color} rounded-2xl p-6 text-white hover:scale-110 transform transition duration-500 shadow-2xl cursor-pointer group`}
              >
                <div className="text-4xl mb-4 group-hover:animate-spin">{tool.icon}</div>
                <h3 className="text-xl font-bold mb-3">{tool.name}</h3>
                <p className="text-gray-200 mb-4">{tool.desc}</p>
                <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                  🚀 Launch Tool →
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Animated Brain Visualization */}
        <section className="mt-16 bg-gradient-to-r from-black via-gray-900 to-black rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-cyan-400 mb-8 animate-pulse">
            🌈 Real-Time Brain Activity Monitor 🌈
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="w-2 bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"
                style={{
                  height: `${Math.random() * 100 + 20}px`,
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: `${Math.random() * 2 + 1}s`
                }}
              ></div>
            ))}
          </div>
          <p className="text-cyan-300 text-xl">
            🎯 Live visualization of neural activity patterns across different brain regions
          </p>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6 animate-pulse">
            🧠 MSNeuro 🌟
          </h3>
          <p className="text-cyan-400 mb-8 text-xl">
            🚀 Revolutionizing neuroscience through interactive technology and colorful visualization! 🌈
          </p>
          <div className="flex justify-center space-x-8">
            <a href="#research" className="text-pink-400 hover:text-pink-300 transition text-lg">🔬 Research</a>
            <a href="#tutorials" className="text-blue-400 hover:text-blue-300 transition text-lg">📚 Tutorials</a>
            <a href="#tools" className="text-green-400 hover:text-green-300 transition text-lg">🛠️ Tools</a>
            <a href="#contact" className="text-purple-400 hover:text-purple-300 transition text-lg">📧 Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
