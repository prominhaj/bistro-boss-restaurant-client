import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import OrderOnline from '../OrderOnline/OrderOnline';
import BistroBossSection from '../BistroBossSection/BistroBossSection';
import FromOurMenu from '../FromOurMenu/FromOurMenu';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';

const Home = () => {
    return (
        <>
            <BannerSection />
            <OrderOnline />
            <BistroBossSection />
            <FromOurMenu />
            <CallUs />
            <ChefRecommends />
        </>
    );
};

export default Home;