import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import FlashSaleSection from '@/components/FlashSaleSection';
import ServicesOverview from '@/components/ServicesOverview';
import RepairBookingPanel from '@/components/RepairBookingPanel';

const HomePage = () => {
    return (
        <div className="flex flex-col gap-10">
            <HeroSection />
            <ServicesOverview />
            <FlashSaleSection />
            <div id="products">
                <FeaturedProducts />
            </div>
            <div id="repair">
                <RepairBookingPanel />
            </div>
        </div>
    );
};

export default HomePage;
