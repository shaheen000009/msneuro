import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Main component for the homepage
export default function HomePage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mountRef = useRef(null);

    // --- Three.js Background Animation ---
    useEffect(() => {
        // Ensure this code runs only on the client side
        if (typeof window === 'undefined' || !mountRef.current) {
            return;
        }

        const mount = mountRef.current;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 1, 10000);
        camera.position.z = 1000;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.setClearColor(0x000000, 0);
        mount.appendChild(renderer.domElement);

        // Particles setup
        const particleCount = 200;
        const positions = new Float32Array(particleCount * 3);
        const velocities = [];
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = Math.random() * 2000 - 1000;
            positions[i * 3 + 1] = Math.random() * 2000 - 1000;
            positions[i * 3 + 2] = Math.random() * 2000 - 1000;
            velocities.push({
                x: (Math.random() - 0.5) * 0.5,
                y: (Math.random() - 0.5) * 0.5,
                z: (Math.random() - 0.5) * 0.5,
            });
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.velocities = velocities;
        const material = new THREE.PointsMaterial({
            color: 0x4488ff,
            size: 3,
            transparent: true,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true,
        });
        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Lines setup
        const lineGeometry = new THREE.BufferGeometry();
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.1 });
        const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(lines);

        // Mouse tracking
        let mouseX = 0;
        let mouseY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const onDocumentMouseMove = (event) => {
            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
        };
        document.addEventListener('mousemove', onDocumentMouseMove, false);

        // Resize handler
        const onWindowResize = () => {
            if (!mountRef.current) return;
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener('resize', onWindowResize, false);

        // Animation loop
        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            camera.position.x += (mouseX - camera.position.x) * 0.0005;
            camera.position.y += (-mouseY - camera.position.y) * 0.0005;
            camera.lookAt(scene.position);

            const particlePositions = particles.geometry.attributes.position.array;
            const particleVelocities = particles.geometry.velocities;
            for (let i = 0; i < particleCount; i++) {
                particlePositions[i * 3] += particleVelocities[i].x;
                particlePositions[i * 3 + 1] += particleVelocities[i].y;
                particlePositions[i * 3 + 2] += particleVelocities[i].z;
                if (particlePositions[i * 3 + 1] < -1000 || particlePositions[i * 3 + 1] > 1000) particleVelocities[i].y = -particleVelocities[i].y;
                if (particlePositions[i * 3] < -1000 || particlePositions[i * 3] > 1000) particleVelocities[i].x = -particleVelocities[i].x;
                if (particlePositions[i * 3 + 2] < -1000 || particlePositions[i * 3 + 2] > 1000) particleVelocities[i].z = -particleVelocities[i].z;
            }
            particles.geometry.attributes.position.needsUpdate = true;
            
            const linePositions = [];
            const maxDistance = 150;
            for (let i = 0; i < particleCount; i++) {
                for (let j = i + 1; j < particleCount; j++) {
                    const dx = particlePositions[i * 3] - particlePositions[j * 3];
                    const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
                    const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
                    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    if (distance < maxDistance) {
                        linePositions.push(particlePositions[i * 3], particlePositions[i * 3 + 1], particlePositions[i * 3 + 2]);
                        linePositions.push(particlePositions[j * 3], particlePositions[j * 3 + 1], particlePositions[j * 3 + 2]);
                    }
                }
            }
            lines.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
            lines.geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        };
        animate();

        // Cleanup function
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', onWindowResize);
            document.removeEventListener('mousemove', onDocumentMouseMove);
            if (mount) {
                mount.removeChild(renderer.domElement);
            }
        };
    }, []);

    // Smooth scroll handler
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        if(mobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    };

    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-gray-900 text-gray-300">
            <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />

            <div className="relative z-10">
                {/* Navigation Bar */}
                <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
                    <div className="container mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold text-white">
                                <a href="#" onClick={(e) => handleScroll(e, 'hero')}>MSNeuro</a>
                            </div>
                            <nav className="hidden md:flex items-center space-x-6">
                                <a href="#fundamentals" onClick={(e) => handleScroll(e, 'fundamentals')} className="text-gray-300 hover:text-white transition">Fundamentals</a>
                                <a href="#preprocessing" onClick={(e) => handleScroll(e, 'preprocessing')} className="text-gray-300 hover:text-white transition">Data Preprocessing</a>
                                <a href="#resources" onClick={(e) => handleScroll(e, 'resources')} className="text-gray-300 hover:text-white transition">Resources</a>
                                <a href="#opportunities" onClick={(e) => handleScroll(e, 'opportunities')} className="text-gray-300 hover:text-white transition">Opportunities</a>
                                <a href="#forum" onClick={(e) => handleScroll(e, 'forum')} className="text-gray-300 hover:text-white transition">Forum</a>
                                <a href="#datasets" onClick={(e) => handleScroll(e, 'datasets')} className="text-gray-300 hover:text-white transition">Public Datasets</a>
                            </nav>
                            <div className="md:hidden">
                                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                         <div className="md:hidden">
                            <a href="#fundamentals" onClick={(e) => handleScroll(e, 'fundamentals')} className="block py-2 px-6 text-sm text-gray-300 hover:bg-gray-800">Fundamentals</a>
                            <a href="#preprocessing" onClick={(e) => handleScroll(e, 'preprocessing')} className="block py-2 px-6 text-sm text-gray-300 hover:bg-gray-800">Data Preprocessing</a>
                            <a href="#resources" onClick={(e) => handleScroll(e, 'resources')} className="block py-2 px-6 text-sm text-gray-300 hover:bg-gray-800">Resources</a>
                            <a href="#opportunities" onClick={(e) => handleScroll(e, 'opportunities')} className="block py-2 px-6 text-sm text-gray-300 hover:bg-gray-800">Opportunities</a>
                            <a href="#forum" onClick={(e) => handleScroll(e, 'forum')} className="block py-2 px-6 text-sm text-gray-300 hover:bg-gray-800">Forum</a>
                            <a href="#datasets" onClick={(e) => handleScroll(e, 'datasets')} className="block py-2 px-6 text-sm text-gray-300 hover:bg-gray-800">Public Datasets</a>
                        </div>
                    )}
                </header>

                {/* Main Content */}
                <main className="container mx-auto px-6 py-16">
                    {/* Hero Section */}
                    <section id="hero" className="text-center mb-24">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Exploring the Frontiers of Neuroscience</h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                            A curated platform for students and researchers in computational neuroscience.
                            Discover resources, datasets, and opportunities to advance your work.
                        </p>
                    </section>

                    {/* Grid Layout for Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Section Card Component (could be abstracted) */}
                        <div id="fundamentals" className="section-card bg-gray-800/50 backdrop-filter backdrop-blur-sm p-8 rounded-lg transition hover:transform hover:-translate-y-1 hover:shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-3">Fundamentals of Neuroscience</h2>
                            <p className="text-gray-400">Build a strong foundation with core concepts in neuroscience. Understand the principles that govern the nervous system and behavior.</p>
                        </div>
                        <div id="preprocessing" className="section-card bg-gray-800/50 backdrop-filter backdrop-blur-sm p-8 rounded-lg transition hover:transform hover:-translate-y-1 hover:shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-3">Data Preprocessing</h2>
                            <p className="text-gray-400">Learn essential techniques for cleaning and preparing neural data. From raw signals to analysis-ready datasets, master the workflow.</p>
                        </div>
                        <div id="resources" className="section-card bg-gray-800/50 backdrop-filter backdrop-blur-sm p-8 rounded-lg transition hover:transform hover:-translate-y-1 hover:shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-3">Resources</h2>
                            <p className="text-gray-400">Access a curated collection of tools, libraries, and learning materials. Find everything you need to support your research and projects.</p>
                        </div>
                        <div id="opportunities" className="section-card bg-gray-800/50 backdrop-filter backdrop-blur-sm p-8 rounded-lg transition hover:transform hover:-translate-y-1 hover:shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-3">Opportunities</h2>
                            <p className="text-gray-400">Discover research positions, internships, and collaborations. Stay updated on the latest openings in academia and industry.</p>
                        </div>
                        <div id="forum" className="section-card bg-gray-800/50 backdrop-filter backdrop-blur-sm p-8 rounded-lg transition hover:transform hover:-translate-y-1 hover:shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-3">Forum</h2>
                            <p className="text-gray-400">Engage with a community of peers, mentors, and experts. Ask questions, share insights, and collaborate on new ideas.</p>
                        </div>
                        <div id="datasets" className="section-card bg-gray-800/50 backdrop-filter backdrop-blur-sm p-8 rounded-lg transition hover:transform hover:-translate-y-1 hover:shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-3">Public Datasets</h2>
                            <p className="text-gray-400">Explore a directory of publicly available neuroscience datasets. Find the perfect data to test your hypotheses and build models.</p>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-transparent mt-20">
                    <div className="container mx-auto px-6 py-8 text-center text-gray-500">
                        <p>&copy; {new Date().getFullYear()} MSNeuro. All Rights Reserved.</p>
                        <p className="text-sm mt-2">Designed to be a hub for the computational neuroscience community.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
