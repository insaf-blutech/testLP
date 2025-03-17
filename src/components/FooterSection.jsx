
import React from "react";
import { Phone, Twitter, Facebook, Youtube } from "lucide-react";

const FooterSection = () => {
    return (
        <footer className="bg-white sm:text-center md:text-left">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-[45%_1fr_1fr_1fr] gap-x-8 gap-y-8">
                    {/* Logo and Description Section (30%) */}
                    <div className="max-w-[70%]">
                        <div className="text-5xl font-bold text-teal-500 mb-4">LOGO</div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Experience The Convenience Of Recovery Delivered. Your Trusted
                            Source For Online Medication Delivery. We Bring The Pharmacy To
                            Your Doorstep, Ensuring Fast, Discreet, And Reliable Service.
                            Whether You're Managing A Chronic Condition Or Need A One Time
                            Prescription Filled, We Make The Process Simple And Hassle-Free
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-teal-500 font-medium mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-teal-500">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-teal-500">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-teal-500">
                                    Owners
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-teal-500">
                                    Tenants
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-teal-500">
                                    Properties
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Other Links Section */}
                    <div>
                        <h3 className="text-teal-500 font-medium mb-4">Other Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-teal-500">
                                    Online Medications
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-teal-500">
                                    Download App
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-teal-500">
                                    Start Treatment
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-teal-500">
                                    Online Urgent Care
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-teal-500">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact and Social Media Section */}
                    <div>
                        <h3 className="text-teal-500 font-medium mb-4">Contact</h3>
                        <div className="flex items-center mb-6">
                            <Phone size={16} className="text-gray-600 mr-2" />
                            <span className="text-gray-600">1-866-757-9868</span>
                        </div>

                        <h3 className="text-teal-500 font-medium mb-4">Social Media</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-teal-500">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-teal-500">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-teal-500">
                                <Youtube size={20} />
                            </a>
                        </div>
                        <div className="mt-8 text-xs text-gray-500">
                            Designed And Developed By Ropstam
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
