import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { currentUser } = useAuth();
    const { toast } = useToast();

    useEffect(() => {
        if (currentUser) {
            fetchCart();
        }
    }, [currentUser]);

    const fetchCart = async () => {
        try {
            const items = await pb.collection('cart_items').getFullList({
                filter: `userId = "${currentUser.id}"`,
                expand: 'productId',
                $autoCancel: false,
            });
            setCartItems(items);
        } catch (error) {
            console.error('Error fetching cart:', error);
            // Mock data for demo if DB is empty/fails
            if (cartItems.length === 0) {
                setCartItems([
                    { id: '1', quantity: 1, expand: { productId: { name: 'iPhone 15 Pro', price: 134900, image: 'https://images.unsplash.com/photo-1695048133021-be2def43f3b2' } } },
                    { id: '2', quantity: 2, expand: { productId: { name: 'USB-C Cable', price: 1999, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c' } } }
                ])
            }
        } finally {
            setLoading(false);
        }
    };

    const removeFromCart = async (itemId) => {
        try {
            await pb.collection('cart_items').delete(itemId);
            setCartItems(cartItems.filter(item => item.id !== itemId));
            toast({
                title: 'Item Removed',
                description: 'Item removed from your cart.',
            });
            window.dispatchEvent(new Event('cartUpdated'));
        } catch (error) {
            // Mock delete
            setCartItems(cartItems.filter(item => item.id !== itemId));
            toast({ title: 'Item Removed (Mock)', description: 'Item removed' });
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = item.expand?.productId?.price || 0;
            return total + price * item.quantity;
        }, 0);
    };

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <ShoppingBag className="w-16 h-16 text-slate-700 mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">Your Cart is Empty</h2>
                <p className="text-gray-400 mb-6">Looks like you haven't added any items yet.</p>
                <Link to="/">
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold">
                        Start Shopping
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Your Shopping Cart
            </h1>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items List */}
                <div className="lg:col-span-2 space-y-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 flex gap-4 items-center">
                            <div className="w-24 h-24 bg-slate-900 rounded-lg overflow-hidden flex-shrink-0">
                                <img
                                    src={item.expand?.productId?.image || 'https://via.placeholder.com/150'}
                                    alt={item.expand?.productId?.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-white">{item.expand?.productId?.name}</h3>
                                <p className="text-yellow-500 font-semibold">₹{item.expand?.productId?.price?.toLocaleString('en-IN')}</p>
                                <div className="flex items-center gap-4 mt-2">
                                    <span className="text-gray-400 text-sm">Qty: {item.quantity}</span>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                            >
                                <Trash2 className="w-5 h-5" />
                            </Button>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 sticky top-24">
                        <h3 className="text-xl font-bold text-white mb-4">Order Summary</h3>
                        <div className="space-y-2 mb-4 text-sm">
                            <div className="flex justify-between text-gray-400">
                                <span>Subtotal</span>
                                <span>₹{calculateTotal().toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Shipping</span>
                                <span className="text-green-400">Free</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Tax (18% GST)</span>
                                <span>₹{(calculateTotal() * 0.18).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                            </div>
                        </div>
                        <div className="border-t border-slate-700 pt-4 mb-6">
                            <div className="flex justify-between text-white font-bold text-lg">
                                <span>Total</span>
                                <span className="text-yellow-500">
                                    ₹{(calculateTotal() * 1.18).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                </span>
                            </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-3">
                            Proceed to Checkout
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
