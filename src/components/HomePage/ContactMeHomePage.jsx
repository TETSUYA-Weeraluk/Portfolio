import React from "react";

import ListContactMe from "./ContactMe/ListContactMe";
import ProfileMe from "./ContactMe/ProfileMe";
import { TopicHomepage } from "./TopicHomePage";

const ContactMeHomePage = () => {
  return (
    <div className="max-w-7xl text-[#C4FFDD]">
      <TopicHomepage title="Contact Me" />
      <div className="flex items-center justify-center">
        <ProfileMe />
        <ListContactMe />
      </div>
    </div>
  );
};

export default ContactMeHomePage;
