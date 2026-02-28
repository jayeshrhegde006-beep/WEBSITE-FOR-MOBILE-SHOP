import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Mail, MapPin, Phone, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-yellow-500/20 mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Smartphone className="w-8 h-8 text-yellow-500" />
                            <div>
                                <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Alfa Cell Point
                                </h3>
                                <p className="text-xs text-yellow-500">Mobile & Service</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                            Your trusted destination for premium mobile phones, expert repairs, and quality accessories.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-green-600 rounded-lg transition-colors">
                                <MessageCircle className="w-5 h-5 text-gray-300" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-pink-600 rounded-lg transition-colors">
                                <Instagram className="w-5 h-5 text-gray-300" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors">
                                <Facebook className="w-5 h-5 text-gray-300" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-blue-400 rounded-lg transition-colors">
                                <Twitter className="w-5 h-5 text-gray-300" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                                    Shop Phones
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                                    Repair Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-lg">Policies</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                                    Repair Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                                    Return Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                                    Warranty Information
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <Phone className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-400 text-sm">+91 98765 43210</p>
                                    <p className="text-gray-400 text-sm">+91 98765 43211</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-400 text-sm">info@alfacellpoint.com</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-400 text-sm">
                                    123 Mobile Street, Tech Plaza,<br />
                                    Mumbai, Maharashtra 400001
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 mt-8 pt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Alfa Cell Point Mobile and Service. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
