import React from "react";
import TestimonialsSection from "../../Components/TestimonialSection";
import StatisticsSection from "../../Components/StatisticsSection";
import FranchiseSection from "../../Components/FranchiseSection";
import ContactSection from "../../Components/ContactSection";

const Home = () => {
  return (
    <div>
      <FranchiseSection />
      <ContactSection />
      <StatisticsSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
