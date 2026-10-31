import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-800 mt-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h2 className="text-xl font-bold text-white">
                        Vedant<span className="text-[#6A38C2]">Careers</span>
                    </h2>
                    <p className="text-sm text-gray-400 mt-1">Connecting talent with top opportunities worldwide.</p>
                </div>
                <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} VedantCareers. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;