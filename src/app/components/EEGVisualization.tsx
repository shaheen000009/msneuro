export default function EEGVisualization() {
  return (
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
  );
}
