import React from 'react';
import PageBanner from '../Components/HomePage/PageBanner'; 
import OurStory from '../Components/About/OurStory';        
import OurValue from '../Components/About/OurValue';        
import WhyChoseUs from '../Components/About/WhyChoseUs';    
import MeetOurTeam from '../Components/About/MeetOurTeam';  


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
