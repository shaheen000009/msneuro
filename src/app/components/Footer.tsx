export default function Footer() {
  return (
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
  );
}
