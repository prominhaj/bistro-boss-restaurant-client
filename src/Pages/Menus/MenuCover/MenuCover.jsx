import React from 'react';

const MenuCover = ({img, title, description}) => {
    return (
        <section className="bg-cover bg-fixed mb-[40px] sm:mb-[60px] py-[50px] md:py-[100px] lg:py-[150px] px-5" style={{backgroundImage: `url(${img})`}}>
            <div className="container mx-auto bg-neutral-900 bg-opacity-60 py-[50px] sm:py-[100px] px-5 lg:px-40">
                <h2 className="text-center text-white text-[30px] sm:text-[45px] font-semibold font-['Cinzel']">{title}</h2>
                <p className="text-center text-white text-sm sm:text-base font-semibold font-['Inter'] leading-relaxed">{description}</p>
            </div>
        </section>
    );
};

export default MenuCover;