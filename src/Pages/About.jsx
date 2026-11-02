import React from 'react';
import PageBanner from '../Components/HomePage/PageBanner'; // Fixed path and uncommented
import OurStory from '../Components/About/OurStory';        // Fixed to capital Components
import OurValue from '../Components/About/OurValue';        // Fixed to capital Components
import WhyChoseUs from '../Components/About/WhyChoseUs';    // Fixed to capital Components
import MeetOurTeam from '../Components/About/MeetOurTeam';  // Fixed to capital Components

const About = () => {
  return (
    <div className="grid-reveal-banner">
      <PageBanner 
        title="About us" 
        breadcrumb="Home / About us" 
        image="images/Chef%2011.jpg" 
      />
      <OurStory />
      <OurValue />
      <WhyChoseUs />
      <MeetOurTeam />
    </div>
  );
};

export default About;
