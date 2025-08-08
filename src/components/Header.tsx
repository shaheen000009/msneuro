// File: src/components/Header.tsx
"use client"; // <-- Add this directive because this component uses state

import React from 'react';

// This is a placeholder for the Next.js Link component.
// In your actual app, you would use `import Link from 'next/link';`
const Link = ({ href, children, className, onClick }) => (
    <a href={href} className={className} onClick={onClick}>
        {children}
    </a>
);

const Header = () => {
    // A simple state for the mobile menu
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                        <Link href="/">MSNeuro</Link>
                    </div>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/fundamentals" className="text-gray-300 hover:text-white transition">Fundamentals</Link>
                        <Link href="/preprocessing" className="text-gray-300 hover:text-white transition">Data Preprocessing</Link>
                        <Link href="/resources" className="text-gray-300 hover:text-white transition">Resources</Link>
                        <Link href="/opportunities" className="text-gray-300 hover:text-white transition">Opportunities</Link>
                        <Link href="/forum" className="text-gray-300 hover:text-white transition">Forum</Link>
                        <Link href="/datasets" className="text-gray-300 hover:text-white transition">Public Datasets</Link>
                    </nav>
                    {/* Mobile Menu Button */}
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
                    <Link href="/fundamentals" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-6 text-sm text-gray-300 hover:bg-gray-800">Fundamentals</Link>
                    <Link href="/preprocessing" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-6 text-sm text-gray-300 hover:bg-gray-800">Data Preprocessing</Link>
                    <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-6 text-sm text-gray-300 hover:bg-gray-800">Resources</Link>
                    <Link href="/opportunities" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-6 text-sm text-gray-300 hover:bg-gray-800">Opportunities</Link>
                    <Link href="/forum" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-6 text-sm text-gray-300 hover:bg-gray-800">Forum</Link>
                    <Link href="/datasets" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-6 text-sm text-gray-300 hover:bg-gray-800">Public Datasets</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
