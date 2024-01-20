import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import OrderOnline from '../OrderOnline/OrderOnline';
import BistroBossSection from '../BistroBossSection/BistroBossSection';
import FromOurMenu from '../FromOurMenu/FromOurMenu';
import CallUs from '../CallUs/CallUs';

const Home = () => {
    return (
        <div>
            <BannerSection />
            <OrderOnline />
            <BistroBossSection />
            <FromOurMenu />
            <CallUs />
        </div>
    );
};

export default Home;