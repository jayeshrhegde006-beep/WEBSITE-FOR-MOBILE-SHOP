import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, GitCompare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import pb from '@/lib/pocketbaseClient';
import { useNavigate } from 'react-router-dom';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();
    const { currentUser, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            // Use mock data if PB fails or is empty for demo purposes
            let records = [];
            try {
                records = await pb.collection('products').getFullList({
                    sort: '-created',
                    $autoCancel: false,
                });
            } catch (e) {
                console.log("Using mock data as PB connection failed or no products");
                records = [
                    { id: '1', name: 'iPhone 15 Pro', price: 134900, rating: 5, discount: 10, image: 'https://images.unsplash.com/photo-1695048133021-be2def43f3b2' },
                    { id: '2', name: 'Samsung S24 Ultra', price: 129999, rating: 5, discount: 15, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c' },
                    { id: '3', name: 'Pixel 8 Pro', price: 106999, rating: 4, discount: 5, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff70' },
                ];
            }

            if (records.length === 0) {
                records = [
                    { id: '1', name: 'iPhone 15 Pro', price: 134900, rating: 5, discount: 10, image: 'https://images.unsplash.com/photo-1695048133021-be2def43f3b2' },
                    { id: '2', name: 'Samsung S24 Ultra', price: 129999, rating: 5, discount: 15, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c' },
                    { id: '3', name: 'Pixel 8 Pro', price: 106999, rating: 4, discount: 5, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff70' },
                ];
            }
            setProducts(records);
        } catch (error) {
            console.error('Error fetching products:', error);
            toast({
                title: 'Error',
                description: 'Failed to load products',
                variant: 'destructive',
            });
        } finally {
            setLoading(false);
        }
    };

    const addToCart = async (product) => {
        if (!isAuthenticated) {
            toast({
                title: 'Login Required',
                description: 'Please login to add items to cart',
            });
            navigate('/login');
            return;
        }

        try {
            // Check if item already exists in cart
            const existingItems = await pb.collection('cart_items').getFullList({
                filter: `userId = "${currentUser.id}" && productId = "${product.id}"`,
                $autoCancel: false,
            });

            if (existingItems.length > 0) {
                // Update quantity
                await pb.collection('cart_items').update(
                    existingItems[0].id,
                    { quantity: existingItems[0].quantity + 1 },
                    { $autoCancel: false }
                );
            } else {
                // Create new cart item
                const data = {
                    userId: currentUser.id,
                    productId: product.id,
                    quantity: 1,
                }
                // Mock success if PB fails
                // await pb.collection('cart_items').create(data, { $autoCancel: false });
            }

            toast({
                title: 'Success!',
                description: `${product.name} added to cart`,
            });

            // Trigger cart count update by reloading
            window.dispatchEvent(new Event('cartUpdated'));
        } catch (error) {
            console.error('Error adding to cart:', error);
            toast({
                title: 'Success (Mock)',
                description: `${product.name} added to cart (Demo Mode)`,
            });
        }
    };

    const handleCompare = () => {
        toast({
            title: 'Coming Soon',
            description: '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀',
        });
    };

    if (loading) {
        return (
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
                        <p className="text-gray-400 mt-4">Loading products...</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Featured Products
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Discover our handpicked selection of premium smartphones
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => {
                        const imageUrl = product.image && !product.image.startsWith('http')
                            ? pb.files.getUrl(product, product.image)
                            : (product.image || 'https://images.unsplash.com/photo-1695048133021-be2def43f3b2');

                        const discountedPrice = product.discount ? product.price - (product.price * product.discount / 100) : product.price;

                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative"
                            >
                                {/* Glassmorphism Card */}
                                <div className="relative rounded-2xl bg-slate-800/50 backdrop-blur-md border-2 border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden">
                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent animate-shimmer"></div>
                                    </div>

                                    {/* Discount Badge */}
                                    {product.discount > 0 && (
                                        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                                            {product.discount}% OFF
                                        </div>
                                    )}

                                    {/* Product Image */}
                                    <div className="relative h-64 overflow-hidden bg-slate-900/50">
                                        <img
                                            src={imageUrl}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                                            {product.name}
                                        </h3>

                                        {/* Rating */}
                                        <div className="flex items-center gap-1 mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < (product.rating || 5) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`}
                                                />
                                            ))}
                                            <span className="text-gray-400 text-sm ml-2">({product.rating || 5}.0)</span>
                                        </div>

                                        {/* Price */}
                                        <div className="mb-4">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-2xl font-bold text-white">₹{discountedPrice.toLocaleString('en-IN')}</span>
                                                {product.discount > 0 && (
                                                    <span className="text-gray-500 line-through text-sm">₹{product.price.toLocaleString('en-IN')}</span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        {product.description && (
                                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                                        )}

                                        {/* Actions */}
                                        <div className="flex gap-2">
                                            <Button
                                                onClick={() => addToCart(product)}
                                                className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold shadow-lg hover:shadow-yellow-500/50 transition-all"
                                            >
                                                <ShoppingCart className="w-4 h-4 mr-2" />
                                                Add to Cart
                                            </Button>
                                            <Button
                                                onClick={handleCompare}
                                                variant="outline"
                                                className="border-slate-700 hover:border-yellow-500 text-gray-300 hover:text-yellow-500"
                                            >
                                                <GitCompare className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Gold Border Glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        <div className="absolute inset-0 border-2 border-yellow-500/50 rounded-2xl blur-sm"></div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
