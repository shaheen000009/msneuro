import React from 'react';

const ResourceCard = ({ title, children, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block bg-gray-800/50 p-6 rounded-lg transition hover:bg-gray-800/80">
        <h4 className="text-xl font-bold text-cyan-400 mb-2">{title}</h4>
        <p className="text-gray-400">{children}</p>
    </a>
);

// The main page component
export default function ResourcesPage() {
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
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Curated Resources</h2>
                        <p className="text-lg text-gray-400">A collection of essential tools, libraries, and learning materials.</p>
                    </div>

                    {/* Section: Software & Libraries */}
                    <section className="mb-12">
                        <h3 className="text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">Software & Libraries</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <ResourceCard title="MNE-Python" link="https://mne.tools/">Process, analyze, and visualize MEG, EEG, sEEG, ECoG, and fNIRS data.</ResourceCard>
                            <ResourceCard title="SpikeInterface" link="https://spikeinterface.readthedocs.io/">A unified framework for spike sorting.</ResourceCard>
                            <ResourceCard title="AllenSDK" link="https://allensdk.readthedocs.io/">Access and work with data from the Allen Institute for Brain Science.</ResourceCard>
                            <ResourceCard title="DeepLabCut" link="https://github.com/DeepLabCut/DeepLabCut">Markerless pose estimation for animal behavior analysis.</ResourceCard>
                        </div>
                    </section>

                    {/* Section: Online Courses */}
                    <section>
                        <h3 className="text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">Online Courses & Textbooks</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <ResourceCard title="Neuromatch Academy" link="https://neuromatch.io/">Intensive, project-based courses in computational neuroscience.</ResourceCard>
                            <ResourceCard title="Principles of Neural Science" link="#">The classic textbook by Kandel, Schwartz, Jessell, Siegelbaum, and Hudspeth.</ResourceCard>
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
