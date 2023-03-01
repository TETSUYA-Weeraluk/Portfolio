import React from "react";
import ContentProject from "../components/ProjectPage/ContentProject";
import FooterProject from "../components/ProjectPage/FooterProject";
import HeaderProjectPage from "../components/ProjectPage/HeaderProjectPage";

const Project = () => {
  return (
    <div className=" text-white w-full">
        <header>
          <HeaderProjectPage />
        </header>
        <main >
          <ContentProject />
        </main>
        <footer className=" absolute bottom-0 w-full">
          <FooterProject/>
        </footer>
      </div>
  );
};

export default Project;
