"use client"; // This directive is crucial for components using React Hooks
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Header from '@/components/Header'; // Import the new Header
import Footer from '@/components/Footer'; // Import the new Footer

// TypeScript interface for SectionCard props
interface SectionCardProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ href, title, children }) => (
    <a 
        href={href} 
        className="block section-card bg-gray-800/50 backdrop-filter backdrop-blur-sm p-8 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 hover:bg-gray-700/50"
    >
        <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
        <p className="text-gray-400">{children}</p>
    </a>
);

export default function HomePage() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        mountRef.current.appendChild(renderer.domElement);

        // Create neural network visualization
        const particles = new THREE.Group();
        const connections = new THREE.Group();
        scene.add(particles);
        scene.add(connections);

        // Create neurons (particles)
        const neuronCount = 100;
        const neurons: THREE.Vector3[] = [];
        
        for (let i = 0; i < neuronCount; i++) {
            const geometry = new THREE.SphereGeometry(0.05, 8, 8);
            const material = new THREE.MeshBasicMaterial({ 
                color: new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.8, 0.6),
                transparent: true,
                opacity: 0.8
            });
            
            const neuron = new THREE.Mesh(geometry, material);
            neuron.position.set(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 20
            );
            
            neurons.push(neuron.position.clone());
            particles.add(neuron);
        }

        // Create connections between nearby neurons
        for (let i = 0; i < neuronCount; i++) {
            for (let j = i + 1; j < neuronCount; j++) {
                const distance = neurons[i].distanceTo(neurons[j]);
                if (distance < 5 && Math.random() < 0.1) {
                    const geometry = new THREE.BufferGeometry().setFromPoints([neurons[i], neurons[j]]);
                    const material = new THREE.LineBasicMaterial({ 
                        color: 0x00ffff,
                        transparent: true,
                        opacity: 0.3
                    });
                    const line = new THREE.Line(geometry, material);
                    connections.add(line);
                }
            }
        }

        // Position camera
        camera.position.z = 15;
        camera.position.y = 5;

        // Animation variables
        let animationId: number;
        const clock = new THREE.Clock();

        // Animation loop
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            
            const elapsedTime = clock.getElapsedTime();
            
            // Rotate the entire neural network
            particles.rotation.y = elapsedTime * 0.1;
            connections.rotation.y = elapsedTime * 0.1;
            
            // Animate individual neurons
            particles.children.forEach((neuron, index) => {
                if (neuron instanceof THREE.Mesh) {
                    neuron.position.y += Math.sin(elapsedTime * 2 + index * 0.1) * 0.01;
                    
                    // Pulse effect
                    const scale = 1 + Math.sin(elapsedTime * 3 + index * 0.2) * 0.2;
                    neuron.scale.setScalar(scale);
                }
            });
            
            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
            
            // Dispose of geometries and materials
            scene.traverse((object) => {
                if (object instanceof THREE.Mesh) {
                    object.geometry.dispose();
                    if (object.material instanceof THREE.Material) {
                        object.material.dispose();
                    }
                }
            });
        };
    }, []);

    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-gray-900 text-gray-300 min-h-screen">
            <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />

            <div className="relative z-10">
                <Header />

                <main className="container mx-auto px-6 py-16">
                    <section id="hero" className="text-center mb-24">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            Exploring the Frontiers of <span className="text-cyan-400">Neuroscience</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            A curated platform for students and researchers in computational neuroscience.
                            Discover resources, datasets, and opportunities to advance your work.
                        </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <SectionCard href="/fundamentals" title="🧠 Fundamentals of Neuroscience">
                            Build a strong foundation with core concepts in neuroscience and neural computation.
                        </SectionCard>
                        <SectionCard href="/preprocessing" title="⚡ Data Preprocessing">
                            Learn essential techniques for cleaning and preparing neural data for analysis.
                        </SectionCard>
                        <SectionCard href="/resources" title="📚 Resources">
                            Access a curated collection of tools, libraries, and learning materials.
                        </SectionCard>
                        <SectionCard href="/opportunities" title="🎯 Opportunities">
                            Discover research positions, internships, and collaboration opportunities.
                        </SectionCard>
                        <SectionCard href="/forum" title="💬 Forum">
                            Engage with a community of peers, mentors, and neuroscience experts.
                        </SectionCard>
                        <SectionCard href="/datasets" title="📊 Public Datasets">
                            Explore a comprehensive directory of publicly available neuroscience datasets.
                        </SectionCard>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
}
