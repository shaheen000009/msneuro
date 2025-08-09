import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ResourceCard = ({ title, children, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block bg-gray-800/50 p-6 rounded-lg transition hover:bg-gray-800/80">
        <h4 className="text-xl font-bold text-cyan-400 mb-2">{title}</h4>
        <p className="text-gray-400">{children}</p>
    </a>
);

export default function ResourcesPage() {
    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-gray-900 text-gray-300 min-h-screen">
            <Header />
            <main className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Curated Resources</h2>
                        <p className="text-lg text-gray-400">A collection of essential tools, libraries, and learning materials.</p>
                    </div>
                    {/* ... (rest of the page content is the same) */}
                </div>
            </main>
            <Footer />
        </div>
    );
}
