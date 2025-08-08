"use client"; // This directive is crucial for components using React Hooks
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Header from '@/components/Header'; // Import the new Header
import Footer from '@/components/Footer'; // Import the new Footer

const SectionCard = ({ href, title, children }) => (
    <a href={href} className="block section-card bg-gray-800/50 backdrop-filter backdrop-blur-sm p-8 rounded-lg transition hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10">
        <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
        <p className="text-gray-400">{children}</p>
    </a>
);

export default function HomePage() {
    const mountRef = useRef(null);

    useEffect(() => {
        // ... (The three.js animation code remains exactly the same)
        // NOTE: I've omitted the long animation script here for brevity, 
        // but you should leave it in your file.
    }, []);

    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-gray-900 text-gray-300">
            <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />

            <div className="relative z-10">
                <Header /> {/* <-- Use the new Header component */}

                <main className="container mx-auto px-6 py-16">
                    <section id="hero" className="text-center mb-24">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Exploring the Frontiers of Neuroscience</h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                            A curated platform for students and researchers in computational neuroscience.
                            Discover resources, datasets, and opportunities to advance your work.
                        </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <SectionCard href="/fundamentals" title="Fundamentals of Neuroscience">
                            Build a strong foundation with core concepts in neuroscience.
                        </SectionCard>
                        <SectionCard href="/preprocessing" title="Data Preprocessing">
                            Learn essential techniques for cleaning and preparing neural data.
                        </SectionCard>
                        <SectionCard href="/resources" title="Resources">
                            Access a curated collection of tools, libraries, and learning materials.
                        </SectionCard>
                        <SectionCard href="/opportunities" title="Opportunities">
                            Discover research positions, internships, and collaborations.
                        </SectionCard>
                        <SectionCard href="/forum" title="Forum">
                            Engage with a community of peers, mentors, and experts.
                        </SectionCard>
                        <SectionCard href="/datasets" title="Public Datasets">
                            Explore a directory of publicly available neuroscience datasets.
                        </SectionCard>
                    </div>
                </main>

                <Footer /> {/* <-- Use the new Footer component */}
            </div>
        </div>
    );
}
