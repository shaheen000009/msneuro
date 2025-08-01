export default function Header() {
  return (
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
  );
}
