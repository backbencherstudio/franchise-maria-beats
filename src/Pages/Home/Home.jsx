import React from "react";
import About from '../../Components/Home/About'
import Banner from '../../Components/Home/Banner'
import ChooseUs from '../../Components/Home/ChooseUs'
import FeatureOpportunities from '../../Components/Home/FeatureOpportunities'
import TestimonialsSection from "../../Components/TestimonialSection";
import StatisticsSection from "../../Components/StatisticsSection";
import FranchiseSection from "../../Components/FranchiseSection";
import ContactSection from "../../Components/ContactSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeatureOpportunities />
      <About />
      <ChooseUs />
      <FranchiseSection />
      <ContactSection />
      <StatisticsSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home
