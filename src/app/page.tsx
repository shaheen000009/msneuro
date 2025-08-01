export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            MS<span className="text-blue-600">Neuro</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Your comprehensive resource for Neuroscience, Brain-Computer Interfaces, 
            and EEG Data Processing techniques
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-16">
        
        {/* Core Topics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Explore Key Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Neuroscience Card */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Neuroscience Fundamentals</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guides covering brain anatomy, neural networks, 
                synaptic transmission, and cognitive neuroscience principles.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Brain anatomy & physiology</li>
                <li>• Neural signal processing</li>
                <li>• Cognitive functions</li>
                <li>• Neuroplasticity research</li>
              </ul>
            </div>

            {/* BCI Card */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brain-Computer Interface</h3>
              <p className="text-gray-600 mb-4">
                Explore BCI technologies, applications, and implementation strategies 
                for direct brain-to-device communication systems.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• BCI system architecture</li>
                <li>• Signal acquisition methods</li>
                <li>• Real-time applications</li>
                <li>• Machine learning integration</li>
              </ul>
            </div>

            {/* EEG Processing Card */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">EEG Data Processing</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step guides for EEG data preprocessing, analysis, 
                and interpretation using modern computational tools.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Data acquisition & quality</li>
                <li>• Artifact removal techniques</li>
                <li>• Frequency domain analysis</li>
                <li>• Statistical interpretation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EEG Processing Steps */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            EEG Data Preprocessing Pipeline
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Data Import</h4>
              <p className="text-sm text-gray-600">Load raw EEG files and verify channels</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Filtering</h4>
              <p className="text-sm text-gray-600">Apply bandpass filters to remove noise</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Artifact Removal</h4>
              <p className="text-sm text-gray-600">Remove eye blinks and muscle artifacts</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Analysis Ready</h4>
              <p className="text-sm text-gray-600">Clean data ready for analysis</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">MSNeuro</h3>
          <p className="text-gray-400">Advancing neuroscience through technology and education</p>
        </div>
      </footer>
    </div>
  )
}
