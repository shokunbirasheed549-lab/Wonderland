import React from "react";
import "../service.css"; // Double-check if this file path is correct relative to Pages/

// Fixed casing to 'Components' with a capital C
// IMPORTANT: Verify these files exist in your project directories!
import RequestQuote from "../Components/Service/RequestQuote";
import ServiceProcess from "../Components/Service/ServiceProcess";
import ServiceCategory from "../Components/Service/ServiceCategory";
import PageBanner from "../Components/HomePage/PageBanner";

const Services = () => {
  return (
    <div>
      <PageBanner
        title="Our Services"
        breadcrumb="Home / Services"
        image="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1600&q=80"
      />
      <ServiceCategory />
      <ServiceProcess />
      <RequestQuote />
    </div>
  );
};

export default Services;
