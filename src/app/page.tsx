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
        if (typeof window === 'undefined' || !mountRef.current) {
            return;
        }
        const mount = mountRef.current;
        if (mount.childElementCount > 0) {
            return;
        }

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 1, 10000);
        camera.position.z = 1000;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.setClearColor(0x000000, 0);
        mount.appendChild(renderer.domElement);

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
        (geometry as any).velocities = velocities;
        const material = new THREE.PointsMaterial({
            color: 0x4488ff,
            size: 3,
            transparent: true,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true,
        });
        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        const lineGeometry = new THREE.BufferGeometry();
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.1 });
        const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(lines);

        let mouseX = 0;
        let mouseY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const onDocumentMouseMove = (event) => {
            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
        };
        document.addEventListener('mousemove', onDocumentMouseMove, false);

        const onWindowResize = () => {
            if (!mountRef.current) return;
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener('resize', onWindowResize, false);

        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            camera.position.x += (mouseX - camera.position.x) * 0.0005;
            camera.position.y += (-mouseY - camera.position.y) * 0.0005;
            camera.lookAt(scene.position);

            const particlePositions = (particles.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
            const particleVelocities = (particles.geometry as any).velocities;
            for (let i = 0; i < particleCount; i++) {
                particlePositions[i * 3] += particleVelocities[i].x;
                particlePositions[i * 3 + 1] += particleVelocities[i].y;
                particlePositions[i * 3 + 2] += particleVelocities[i].z;
                if (particlePositions[i * 3 + 1] < -1000 || particlePositions[i * 3 + 1] > 1000) particleVelocities[i].y = -particleVelocities[i].y;
                if (particlePositions[i * 3] < -1000 || particlePositions[i * 3] > 1000) particleVelocities[i].x = -particleVelocities[i].x;
                if (particlePositions[i * 3 + 2] < -1000 || particlePositions[i * 3 + 2] > 1000) particleVelocities[i].z = -particleVelocities[i].z;
            }
            (particles.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
            
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
            (lines.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', onWindowResize);
            document.removeEventListener('mousemove', onDocumentMouseMove);
            if (mount) {
                mount.innerHTML = '';
            }
        };
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
