export default function ProcessingPipeline() {
  const pipelineSteps = [
    { 
      step: 1, 
      title: "Data Import", 
      desc: "Load & verify EEG files", 
      color: "from-red-500 to-pink-500", 
      icon: "📁", 
      tool: "EEG Loader" 
    },
    { 
      step: 2, 
      title: "Signal Filtering", 
      desc: "Remove noise & artifacts", 
      color: "from-blue-500 to-cyan-500", 
      icon: "🔧", 
      tool: "Filter Designer" 
    },
    { 
      step: 3, 
      title: "Feature Extraction", 
      desc: "Extract meaningful patterns", 
      color: "from-green-500 to-emerald-500", 
      icon: "🎯", 
      tool: "Feature Analyzer" 
    },
    { 
      step: 4, 
      title: "Classification", 
      desc: "AI-powered analysis", 
      color: "from-purple-500 to-indigo-500", 
      icon: "🤖", 
      tool: "AI Classifier" 
    }
  ];

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-3xl shadow-2xl p-12 mb-16">
      <h2 className="text-4xl font-bold text-yellow-400 mb-12 text-center animate-pulse">
        🎛️ Interactive EEG Processing Pipeline 🎛️
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        {pipelineSteps.map((item, index) => (
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
  );
}
