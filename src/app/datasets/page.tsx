import React from 'react';

const DatasetCard = ({ title, description, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block bg-gray-800/50 p-6 rounded-lg transition hover:bg-gray-800/80">
        <h4 className="text-xl font-bold text-cyan-400 mb-2">{title}</h4>
        <p className="text-gray-400">{description}</p>
    </a>
);

// The main page component
export default function DatasetsPage() {
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
                    
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Public Datasets</h2>
                        <p className="text-lg text-gray-400">Explore a directory of publicly available neuroscience datasets.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <DatasetCard title="Allen Brain Atlas" link="https://portal.brain-map.org/" description="A suite of tools and data to explore the mouse, human, and non-human primate brain." />
                        <DatasetCard title="CRCNS.org" link="https://crcns.org/data-sets" description="Collaborative Research in Computational Neuroscience data sharing." />
                        <DatasetCard title="Human Connectome Project" link="https://www.humanconnectome.org/" description="Mapping the connections of the human brain with neuroimaging." />
                        <DatasetCard title="OpenNeuro" link="https://openneuro.org/" description="A free and open platform for sharing MRI, MEG, EEG, iEEG, and ECoG data." />
                    </div>
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
