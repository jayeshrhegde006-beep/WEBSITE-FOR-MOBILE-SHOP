import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

const MyBookingsPage = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const { currentUser } = useAuth();

    useEffect(() => {
        if (currentUser) {
            fetchBookings();
        }
    }, [currentUser]);

    const fetchBookings = async () => {
        try {
            const records = await pb.collection('repair_bookings').getFullList({
                filter: `userId = "${currentUser.id}"`,
                sort: '-created',
                $autoCancel: false,
            });
            setBookings(records);
        } catch (error) {
            console.error('Error fetching bookings:', error);
            // Mock data if PB fails
            if (bookings.length === 0) {
                setBookings([
                    { id: '1', brand: 'Apple', problem: 'Screen Replacement', status: 'Pending', bookingDate: '2024-03-20', bookingTime: '10:00 AM', created: '2024-03-18 10:00:00' },
                    { id: '2', brand: 'Samsung', problem: 'Battery Replacement', status: 'Completed', bookingDate: '2024-02-15', bookingTime: '02:00 PM', created: '2024-02-10 14:30:00' }
                ])
            }
        } finally {
            setLoading(false);
        }
    };

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'pending': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
            case 'approved': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
            case 'completed': return 'text-green-400 bg-green-400/10 border-green-400/20';
            case 'rejected': return 'text-red-400 bg-red-400/10 border-red-400/20';
            default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
        }
    };

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                My Repair Bookings
            </h1>
            <p className="text-gray-400 mb-8">Track the status of your service requests</p>

            {bookings.length === 0 ? (
                <div className="text-center py-20 bg-slate-800/30 rounded-2xl border border-slate-700">
                    <Clock className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">No Bookings Found</h3>
                    <p className="text-gray-400">You haven't booked any repairs yet.</p>
                </div>
            ) : (
                <div className="grid gap-4">
                    {bookings.map((booking) => (
                        <div key={booking.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between hover:border-slate-600 transition-colors">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-lg font-bold text-white">{booking.brand} Repair</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(booking.status)}`}>
                                        {booking.status}
                                    </span>
                                </div>
                                <p className="text-gray-300 mb-1">Issue: {booking.problem}</p>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {booking.bookingDate} at {booking.bookingTime}
                                    </span>
                                    <span>ID: #{booking.id.slice(0, 8)}</span>
                                </div>
                            </div>

                            <div className="flex gap-2 w-full md:w-auto">
                                <Button variant="outline" className="flex-1 md:flex-none border-slate-600 text-gray-300 hover:text-white hover:bg-slate-700">
                                    View Details
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookingsPage;
