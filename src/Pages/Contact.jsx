import React from "react";
import SendMessage from "../components/contact/SendMessage";
import FindUs from "../components/contact/FindUs";
import PageBanner from "../Components/HomePage/PageBanner";

const Contact = () => {
  return (
    <div className="contact">
      <PageBanner
        title="About Us"
        breadcrumb="Home / Contact Us"
        image="/image/contact-banner.jpg"
      />
      <SendMessage />
      <FindUs />
    </div>
  );
};

export default Contact;
