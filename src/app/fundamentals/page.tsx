import React from 'react';

// Component for an individual content card
const InfoCard = ({ title, children }) => (
    <div className="bg-gray-800/50 backdrop-filter backdrop-blur-sm p-6 rounded-lg">
        <h3 className="text-xl font-bold text-cyan-400 mb-3">{title}</h3>
        <p className="text-gray-400">{children}</p>
    </div>
);

// The main page component
export default function FundamentalsPage() {
    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-gray-900 text-gray-300 min-h-screen">
            {/* You can add the animated background here as well if you want it on every page */}
            
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
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Fundamentals of Neuroscience</h2>
                        <p className="text-lg text-gray-400">The scientific study of the nervous system, from molecules to behavior.</p>
                    </div>

                    {/* Section: The Neuron */}
                    <section className="mb-16">
                        <h3 className="text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">The Neuron: A Building Block</h3>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="text-gray-300 space-y-4">
                                <p>The neuron is the fundamental unit of the brain and nervous system. These specialized cells are responsible for receiving sensory input from the external world, for sending motor commands to our muscles, and for transforming and relaying the electrical signals at every step in between.</p>
                                <ul className="list-disc list-inside space-y-2 pl-2">
                                    <li><span className="font-semibold text-white">Dendrites:</span> Branch-like extensions that receive signals from other neurons.</li>
                                    <li><span className="font-semibold text-white">Soma (Cell Body):</span> The neuron's core, which carries genetic information and provides energy.</li>
                                    <li><span className="font-semibold text-white">Axon:</span> A long tail-like structure that carries signals away from the soma.</li>
                                    <li><span className="font-semibold text-white">Synapse:</span> The tiny gap where information is passed from one neuron to the next.</li>
                                </ul>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <img 
                                    src="https://placehold.co/600x400/1f2937/7dd3fc?text=Diagram+of+a+Neuron" 
                                    alt="Diagram of a Neuron" 
                                    className="rounded-md w-full h-auto"
                                    onError={(e) => e.currentTarget.src = 'https://placehold.co/600x400/1f2937/7dd3fc?text=Image+Not+Found'}
                                />
                                <p className="text-center text-sm text-gray-500 mt-2">A typical structure of a neuron.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section: Neural Communication */}
                     <section className="mb-16">
                        <h3 className="text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">Neural Communication</h3>
                         <div className="grid md:grid-cols-2 gap-8 items-center">
                             <div className="bg-gray-800 p-4 rounded-lg md:order-last">
                                <img 
                                    src="https://placehold.co/600x400/1f2937/7dd3fc?text=Synapse+Diagram" 
                                    alt="Diagram of a Synapse" 
                                    className="rounded-md w-full h-auto"
                                    onError={(e) => e.currentTarget.src = 'https://placehold.co/600x400/1f2937/7dd3fc?text=Image+Not+Found'}
                                />
                                <p className="text-center text-sm text-gray-500 mt-2">Communication across a synapse via neurotransmitters.</p>
                            </div>
                            <div className="text-gray-300 space-y-4">
                                <p>Neurons communicate using a combination of electrical and chemical signals. An electrical impulse, called an <strong className="text-white">Action Potential</strong>, travels down the axon.</p>
                                <p>When the action potential reaches the synapse, it triggers the release of chemical messengers called <strong className="text-white">Neurotransmitters</strong>. These chemicals cross the synaptic gap and bind to the next neuron, either exciting it to fire its own action potential or inhibiting it.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section: The Brain */}
                    <section className="mb-16">
                        <h3 className="text-3xl font-bold text-white mb-6 text-center">A Glimpse Inside the Brain</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <InfoCard title="Cerebrum">
                                The largest part of the brain, responsible for higher functions like thought, language, and voluntary movement. It's divided into two hemispheres and four lobes.
                            </InfoCard>
                            <InfoCard title="Cerebellum">
                                Located at the back of the brain, the cerebellum is crucial for coordinating movement, balance, posture, and motor learning.
                            </InfoCard>
                            <InfoCard title="Brainstem">
                                Connects the cerebrum and cerebellum to the spinal cord. It controls vital autonomic functions like breathing, heart rate, and sleep cycles.
                            </InfoCard>
                        </div>
                    </section>
                    
                     {/* Section: Uses */}
                    <section>
                        <h3 className="text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">Why It Matters</h3>
                        <p className="text-gray-300 mb-4">Understanding the brain is one of the final frontiers of science. Neuroscience has profound implications for medicine, technology, and our understanding of ourselves. It helps us develop treatments for diseases like Alzheimer's and Parkinson's and inspires new technologies like artificial intelligence and brain-computer interfaces (BCIs).</p>
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
