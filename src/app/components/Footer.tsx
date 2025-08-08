import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-transparent mt-20">
            <div className="container mx-auto px-6 py-8 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} MSNeuro. All Rights Reserved.</p>
                <p className="text-sm mt-2">Designed to be a hub for the computational neuroscience community.</p>
            </div>
        </footer>
    );
};

export default Footer;
