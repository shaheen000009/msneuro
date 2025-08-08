import React from 'react';

// The main page component
export default function PreprocessingPage() {
    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-gray-900 text-gray-300 min-h-screen">
            {/* Header */}
            <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-white">
                        <a href="/">MSNeuro</a>
                    </h1>
                    <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                        &larr; Back to Home
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Page Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Data Preprocessing</h2>
                        <p className="text-lg text-gray-400">Transforming raw neural recordings into clean, analyzable data.</p>
                    </div>

                    {/* Section: Introduction */}
                    <section className="mb-16">
                        <h3 className="text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">The Importance of Clean Data</h3>
                        <div className="space-y-4 text-gray-300">
                            <p>Raw electrophysiology and imaging data are often noisy. Preprocessing is a critical first step to remove noise and artifacts, ensuring that subsequent analyses are accurate and reliable. This pipeline can vary significantly depending on the data type (EEG, fMRI, calcium imaging, etc.).</p>
                        </div>
                    </section>
                    
                    {/* Section: Common Steps */}
                    <section className="mb-16">
                         <h3 className="text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">A Typical Pipeline</h3>
                        <div className="space-y-8">
                            {/* Step 1: Filtering */}
                            <div>
                                <h4 className="text-2xl font-semibold text-white mb-3">1. Filtering</h4>
                                <p className="text-gray-400 mb-4">Filters are used to remove noise outside the frequency range of interest. Common types include high-pass filters to remove slow drifts, low-pass filters to remove high-frequency noise, and notch filters to remove power line noise (e.g., 50 or 60 Hz).</p>
                                <div className="bg-gray-800 p-4 rounded-lg">
                                     <img src="https://placehold.co/600x300/1f2937/7dd3fc?text=Signal+Before+and+After+Filtering" alt="Signal Filtering" className="rounded-md w-full h-auto"/>
                                </div>
                            </div>
                            {/* Step 2: Artifact Removal */}
                            <div>
                                <h4 className="text-2xl font-semibold text-white mb-3">2. Artifact Removal</h4>
                                <p className="text-gray-400 mb-4">Artifacts are non-neural signals that contaminate the data, such as eye blinks in EEG or movement artifacts in imaging. Techniques like Independent Component Analysis (ICA) are often used to identify and remove these components.</p>
                            </div>
                            {/* Step 3: Spike Sorting */}
                             <div>
                                <h4 className="text-2xl font-semibold text-white mb-3">3. Spike Sorting (for Electrophysiology)</h4>
                                <p className="text-gray-400 mb-4">For extracellular recordings, spike sorting is the process of identifying action potentials ("spikes") and assigning them to individual neurons. This allows for the study of single-neuron activity.</p>
                                 <div className="bg-gray-800 p-4 rounded-lg">
                                     <img src="https://placehold.co/600x300/1f2937/7dd3fc?text=Spike+Waveforms" alt="Spike Sorting" className="rounded-md w-full h-auto"/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-transparent mt-20">
                <div className="container mx-auto px-6 py-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} MSNeuro. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
