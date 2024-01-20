import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import OurMenuCard from "../../../Components/OurMenuCard/OurMenuCard";

const FromOurMenu = () => {

  return (
    <section className="container mx-auto px-5 pt-8 pb-12">
      <SectionTitle
        subHading={"Check it out"}
        hading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-2 gap-6 py-12">
        <OurMenuCard></OurMenuCard>
        <OurMenuCard></OurMenuCard>
        <OurMenuCard></OurMenuCard>
        <OurMenuCard></OurMenuCard>
        <OurMenuCard></OurMenuCard>
        <OurMenuCard></OurMenuCard>
      </div>
      <div className="text-center">
        <button className="btn bg-transparent border-b-4 border-x-0 border-t-0 px-6 hover:text-white focus:bg-black focus:text-white transition-all duration-400 text-center text-gray-800 min-h-[3.5rem] sm:text-xl font-medium font-['Inter'] uppercase">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default FromOurMenu;
