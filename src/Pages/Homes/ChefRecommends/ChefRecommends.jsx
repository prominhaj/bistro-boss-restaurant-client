import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ProductCard from '../../../Components/ProductCard/ProductCard';

const ChefRecommends = () => {
    return (
        <section className="container mx-auto px-5 py-10">
            <SectionTitle subHading={"Should Try"} hading={"CHEF RECOMMENDS"} />
            <div className="py-10 grid md:grid-cols-3 gap-6">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    );
};

export default ChefRecommends;