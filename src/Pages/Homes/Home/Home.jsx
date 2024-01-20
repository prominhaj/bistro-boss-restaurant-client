import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import OrderOnline from '../OrderOnline/OrderOnline';
import BistroBossSection from '../BistroBossSection/BistroBossSection';

const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <OrderOnline></OrderOnline>
            <BistroBossSection></BistroBossSection>
        </div>
    );
};

export default Home;