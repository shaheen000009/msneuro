import React from 'react';

const OpportunityListing = ({ title, institution, location, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block bg-gray-800/50 p-6 rounded-lg transition hover:bg-gray-800/80">
        <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
        <p className="text-cyan-400 font-semibold">{institution}</p>
        <p className="text-gray-400 text-sm">{location}</p>
    </a>
);

// The main page component
export default function OpportunitiesPage() {
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
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Opportunities</h2>
                        <p className="text-lg text-gray-400">Find research positions, internships, and collaborations in neuroscience.</p>
                    </div>

                    <div className="space-y-10">
                        {/* Section: Postdocs */}
                        <section>
                            <h3 className="text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">Postdoctoral Positions</h3>
                            <div className="space-y-4">
                                <OpportunityListing title="Postdoc in Systems Neuroscience" institution="Stanford University" location="Palo Alto, CA" link="#" />
                                <OpportunityListing title="Postdoc in Computational Psychiatry" institution="Max Planck Institute" location="Berlin, Germany" link="#" />
                            </div>
                        </section>
                        
                        {/* Section: PhD */}
                        <section>
                            <h3 className="text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">PhD Programs</h3>
                            <div className="space-y-4">
                               <OpportunityListing title="PhD in Neural Computation" institution="Carnegie Mellon University" location="Pittsburgh, PA" link="#" />
                            </div>
                        </section>
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
