import React from "react";
import { cn } from "@/lib/utils"; // Adjust the import based on your project structure
import { SmileIcon } from "lucide-react";
import { SimpleIcon } from "../lib/IconUtils"; // Adjust the import based on your project structure
import { siFacebook, siX, siInstagram, siLinkedin } from "simple-icons/icons";

function Footer() {
    return (
        <footer className="bg-secondary py-10 text-gray-500">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between">
                    {/* Company Info */}
                    <div className="mb-6 w-full md:mb-0 md:w-1/3">
                        <h5 className="mb-4 text-lg font-bold">Company</h5>
                        <p className="pr-4 text-gray-400">
                            We are a graphics and web development company,
                            dedicated to creating beautiful and functional
                            digital experiences.
                        </p>
                    </div>
                    {/* Navigation Links */}
                    <div className="mb-6 w-full md:mb-0 md:w-1/3">
                        <h5 className="mb-4 text-lg font-bold">Quick Links</h5>
                        <ul className="grid grid-flow-row grid-cols-2 gap-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="transition-colors duration-300 hover:text-primary"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition-colors duration-300 hover:text-primary"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition-colors duration-300 hover:text-primary"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition-colors duration-300 hover:text-primary"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Social Media */}
                    <div className="flex w-full flex-col rounded-xl bg-white p-4 md:w-1/3">
                        <h5 className="mb-4 text-lg font-bold">Follow Us</h5>
                        <div className="flex justify-between">
                            <nav className="flex flex-row space-x-4">
                                <a href="#" className={cn("group")}>
                                    <SimpleIcon
                                        icon={siFacebook}
                                        className="h-6 w-6 transition-colors duration-300 group-hover:fill-primary"
                                    />
                                </a>
                                <a href="#" className={cn("group")}>
                                    <SimpleIcon
                                        icon={siX}
                                        className="h-6 w-6 transition-colors duration-300 group-hover:fill-primary"
                                    />
                                </a>
                                <a href="#" className={cn("group")}>
                                    <SimpleIcon
                                        icon={siInstagram}
                                        className="h-6 w-6 transition-colors duration-300 group-hover:fill-primary"
                                    />
                                </a>
                                <a href="#" className={cn("group")}>
                                    <SimpleIcon
                                        icon={siLinkedin}
                                        className="h-6 w-6 transition-colors duration-300 group-hover:fill-primary"
                                    />
                                </a>
                            </nav>
                            <SmileIcon className="animate-bounce" />
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-gray-500">
                    &copy; 2024 <span className="font- font-bold">eiktec</span>.
                    All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
