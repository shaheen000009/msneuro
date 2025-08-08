import React from 'react';

// The main page component
export default function ForumPage() {
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
            <main className="container mx-auto px-6 py-16 flex-grow flex items-center">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Community Forum</h2>
                    <p className="text-lg text-gray-400 mb-8">Our community forum is coming soon! A place to ask questions, share insights, and collaborate with peers.</p>
                    <div className="bg-gray-800/50 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4">Stay Tuned!</h3>
                        <p className="text-gray-300">We are working hard to bring you a dedicated space for discussion. In the meantime, check out other great communities like NeuroStars.</p>
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
