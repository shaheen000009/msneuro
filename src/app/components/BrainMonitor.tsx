export default function BrainMonitor() {
  return (
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
  );
}
