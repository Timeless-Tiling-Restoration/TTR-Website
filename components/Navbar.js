"use client";

import { useState } from "react";
import Image from 'next/image'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-secondary shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
                {/* Logo + Title */}
                <div className="flex items-center">
                    <Image
                        src="/images/logo-nobg.png"
                        width={35}
                        height={35}
                        alt="Banner of Timeless Tile Restoration"
                    />
                    <div className="ml-3">
                        <h4 className="text-xl sm:text-2xl font-bold tracking-wide leading-7">
                            Timeless Tile Restoration
                        </h4>
                        <p className="text-xs">Restoring & Revitalising Vintage Tiles</p>
                    </div>
                </div>

                {/* Desktop nav + phone */}
                <div className="hidden lg:flex lg:items-center lg:space-x-8">
                    <nav className="flex items-center space-x-6">
                        <a href="#" className="text-base font-medium hover:text-primary whitespace-nowrap">
                            About Us
                        </a>
                        <a href="#" className="text-base font-medium hover:text-primary whitespace-nowrap">
                            Our Service
                        </a>
                        <a href="#" className="text-base font-medium hover:text-primary whitespace-nowrap">
                            Our Work
                        </a>
                        <a href="#" className="text-base font-medium hover:text-primary whitespace-nowrap">
                            Contact Us
                        </a>
                    </nav>
                    <a
                        href="tel:0411669974"
                        className="btn btn-primary flex items-center space-x-1"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0  0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106 c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542 -1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928 .38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0  2.25 4.5v2.25Z"
                            />
                        </svg>
                        <span>0411 669 974</span>
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 8h16M4 16h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="lg:hidden bg-secondary px-4 pb-5 space-y-4">
                    <nav className="flex flex-col space-y-3">
                        <a href="#" className="text-base font-medium hover:text-primary">
                            About Us
                        </a>
                        <a href="#" className="text-base font-medium hover:text-primary">
                            Our Service
                        </a>
                        <a href="#" className="text-base font-medium hover:text-primary">
                            Our Work
                        </a>
                        <a href="#" className="text-base font-medium hover:text-primary">
                            Contact Us
                        </a>
                    </nav>
                    <a
                        href="tel:0411111111"
                        className="btn btn-primary flex items-center justify-center space-x-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0  0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106 c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542 -1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928 .38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0  2.25 4.5v2.25Z"
                            />
                        </svg>
                        <span>0411 111 111</span>
                    </a>
                </div>
            )}
        </header>
    );
}
