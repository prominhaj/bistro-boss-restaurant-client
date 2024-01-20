import React from "react";
import chefServiceImg from "../../../assets/home/chef-service.jpg";

const BistroBossSection = () => {
  return (
    <section className="container mx-auto bg-cover p-[30px] md:p-[50px] lg:p-[80px] xl:p-[100px] mb-[50px]" style={{backgroundImage: `url(${chefServiceImg})`}}>
        <div className="px-[20px] py-[20px] sm:px-[40px] sm:py-[30px] md:px-[80px] md:py-[60px] lg:px-[150px] lg:py-[90px] bg-white">
            <h2 className="text-neutral-900 text-center text-[30px] sm:text-[45px] font-normal font-['Cinzel']">Bistro Boss</h2>
            <p className="text-center text-neutral-900 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
        </div>
    </section>
  );
};

export default BistroBossSection;
