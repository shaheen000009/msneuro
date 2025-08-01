export default function TopicCards() {
  const topics = [
    {
      title: "🔬 Neuroscience Lab",
      icon: "🧠",
      gradient: "from-pink-500 via-red-500 to-yellow-500",
      description: "🌈 Dive deep into brain anatomy, neural networks, and cutting-edge research!",
      features: [
        "🎯 • Brain anatomy visualization",
        "⚡ • Neural signal analysis", 
        "🧬 • Synaptic transmission",
        "🔥 • Neuroplasticity studies"
      ],
      buttonText: "🚀 Explore Now",
      buttonColor: "text-pink-600",
      textColor: "text-pink-100",
      listColor: "text-pink-200",
      rotation: "hover:rotate-2"
    },
    {
      title: "🎮 Brain-Computer Interface",
      icon: "🤖", 
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      description: "🌊 Control devices with your thoughts! Explore futuristic BCI technology.",
      features: [
        "🎪 • Mind-controlled games",
        "🔮 • Thought-to-text systems",
        "🎭 • Neural prosthetics", 
        "🌈 • Real-time brain decoding"
      ],
      buttonText: "🎯 Try BCI Demo",
      buttonColor: "text-blue-600",
      textColor: "text-blue-100",
      listColor: "text-blue-200",
      rotation: "hover:-rotate-2"
    },
    {
      title: "⚡ EEG Data Processing",
      icon: "📊",
      gradient: "from-purple-500 via-indigo-500 to-blue-500", 
      description: "🔥 Advanced tools for EEG analysis, filtering, and brain state detection!",
      features: [
        "🎨 • Interactive data filtering",
        "🎵 • Spectral analysis tools",
        "🎪 • Artifact removal wizard",
        "🌟 • Machine learning features"
      ],
      buttonText: "🛠️ Launch Tools",
      buttonColor: "text-purple-600",
      textColor: "text-purple-100", 
      listColor: "text-purple-200",
      rotation: "hover:rotate-2"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-5xl font-bold text-center text-white mb-12 animate-bounce">
        🌟 Explore Neuroscience Universe 🌟
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {topics.map((topic, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-br ${topic.gradient} rounded-3xl shadow-2xl p-8 hover:scale-105 transform transition duration-500 ${topic.rotation}`}
          >
            <div className="text-white mb-4 text-6xl animate-spin">{topic.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-4">{topic.title}</h3>
            <p className={`${topic.textColor} mb-6 text-lg`}>
              {topic.description}
            </p>
            <ul className={`${topic.listColor} space-y-2 mb-6`}>
              {topic.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className={`bg-white ${topic.buttonColor} px-6 py-3 rounded-full font-bold hover:bg-${topic.buttonColor.split('-')[1]}-100 transition shadow-lg`}>
              {topic.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
