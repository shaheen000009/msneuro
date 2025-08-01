export default function EEGTools() {
  const tools = [
    { 
      name: "EEGLab Processor", 
      desc: "Advanced MATLAB-based processing", 
      link: "https://eeglab.org/", 
      color: "bg-red-600", 
      icon: "🔬" 
    },
    { 
      name: "MNE-Python", 
      desc: "Python toolkit for MEG/EEG analysis", 
      link: "https://mne.tools/", 
      color: "bg-blue-600", 
      icon: "🐍" 
    },
    { 
      name: "FieldTrip", 
      desc: "MATLAB software for EEG/MEG analysis", 
      link: "https://www.fieldtriptoolbox.org/", 
      color: "bg-green-600", 
      icon: "⚡" 
    },
    { 
      name: "BrainVision Analyzer", 
      desc: "Professional EEG analysis software", 
      link: "#brainvision", 
      color: "bg-purple-600", 
      icon: "👁️" 
    },
    { 
      name: "OpenViBE", 
      desc: "Real-time neurotechnology platform", 
      link: "http://openvibe.inria.fr/", 
      color: "bg-orange-600", 
      icon: "🎮" 
    },
    { 
      name: "BESA Research", 
      desc: "Source analysis and connectivity", 
      link: "#besa", 
      color: "bg-pink-600", 
      icon: "🧠" 
    }
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-800 rounded-3xl p-12 shadow-2xl">
      <h2 className="text-4xl font-bold text-center text-yellow-300 mb-12 animate-pulse">
        🛠️ Professional EEG Processing Tools 🛠️
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
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
  );
}
