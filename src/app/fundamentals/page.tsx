import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const InfoCard = ({ title, children }) => (
    <div className="bg-gray-800/50 backdrop-filter backdrop-blur-sm p-6 rounded-lg">
        <h3 className="text-xl font-bold text-cyan-400 mb-3">{title}</h3>
        <p className="text-gray-400">{children}</p>
    </div>
);

export default function FundamentalsPage() {
    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-gray-900 text-gray-300 min-h-screen">
            <Header />
            <main className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Fundamentals of Neuroscience</h2>
                        <p className="text-lg text-gray-400">The scientific study of the nervous system.</p>
                    </div>
                    {/* ... (rest of the page content is the same) */}
                </div>
            </main>
            <Footer />
        </div>
    );
}
