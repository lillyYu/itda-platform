import React from 'react';
import ContactUs from 'pages/landing/ContactUs';
import MainBanner from 'pages/landing/MainBanner';
import OurBusiness from 'pages/landing/OurBusiness';
import OurTeam from 'pages/landing/OurTeam';
import OurWork from 'pages/landing/OurWork';

const Landing = ({ sections }) => {
  return (
    <>
      <MainBanner sections={sections} />
      <OurBusiness sections={sections} />
      <OurWork sections={sections} />
      <OurTeam sections={sections} />
      <ContactUs sections={sections} />
    </>
  );
};

export default Landing;
