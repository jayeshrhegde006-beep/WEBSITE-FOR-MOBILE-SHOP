import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Smartphone, Zap, Search, ShoppingCart, User, Wrench } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import pb from '@/lib/pocketbaseClient';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const Header = () => {
    const { currentUser, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        if (isAuthenticated && currentUser) {
            fetchCartCount();
        } else {
            setCartCount(0);
        }
    }, [isAuthenticated, currentUser]);

    const fetchCartCount = async () => {
        try {
            const items = await pb.collection('cart_items').getFullList({
                filter: `userId = "${currentUser.id}"`,
                $autoCancel: false,
            });
            setCartCount(items.length);
        } catch (error) {
            console.error('Error fetching cart count:', error);
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-yellow-500/20 shadow-lg">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <Smartphone className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition-transform" />
                            <Zap className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Alfa Cell Point
                            </h1>
                            <p className="text-xs text-yellow-500">Mobile & Service</p>
                        </div>
                    </Link>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-md">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search phones, accessories, repair services..."
                                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        {/* Book Repair Button */}
                        <Button
                            onClick={() => navigate('/')}
                            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-all"
                        >
                            <Wrench className="w-4 h-4" />
                            Book Repair
                        </Button>

                        {/* Cart */}
                        <Link to="/cart" className="relative p-2 hover:bg-slate-800 rounded-lg transition-colors">
                            <ShoppingCart className="w-6 h-6 text-gray-300 hover:text-yellow-500 transition-colors" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-yellow-500 text-slate-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {/* User Menu */}
                        {isAuthenticated ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="p-1 hover:bg-slate-800 rounded-lg transition-colors">
                                        <Avatar className="w-8 h-8">
                                            <AvatarFallback className="bg-yellow-500 text-slate-900 font-semibold">
                                                {currentUser?.name?.[0]?.toUpperCase() || currentUser?.email?.[0]?.toUpperCase() || 'U'}
                                            </AvatarFallback>
                                        </Avatar>
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-48 bg-slate-800 border-slate-700 text-white">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator className="bg-slate-700" />
                                    <DropdownMenuItem onClick={() => navigate('/my-bookings')} className="cursor-pointer hover:bg-slate-700">
                                        My Bookings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => navigate('/cart')} className="cursor-pointer hover:bg-slate-700">
                                        My Cart
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator className="bg-slate-700" />
                                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer hover:bg-slate-700 text-red-400">
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link to="/login" className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                                <User className="w-6 h-6 text-gray-300 hover:text-yellow-500 transition-colors" />
                            </Link>
                        )}
                    </div>
                </div>

                {/* Mobile Search */}
                <div className="md:hidden mt-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
