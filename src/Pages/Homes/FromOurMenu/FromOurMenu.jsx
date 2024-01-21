import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import OurMenuCard from "../../../Components/OurMenuCard/OurMenuCard";
import MoreButton from "../../../Components/SeeMoreButton/MoreButton";

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
      <MoreButton text="View Full Menu" />
    </section>
  );
};

export default FromOurMenu;
