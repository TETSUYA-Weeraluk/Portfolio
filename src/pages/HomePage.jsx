import React, { useEffect } from "react";
import AboutMe from "../components/HomePage/AboutMe";
import HeroHomePage from "../components/HomePage/HeroHomePage";
import NavbarHomePage from "../components/HomePage/NavbarHomePage";
import Portfolio from "../components/HomePage/Portfolio";
import { useDispatch } from "react-redux";
import { fetchDataPortfolio } from "../store/HomeStore/HomePageSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchDataPortfolio());
  }, []);

  return (
    <div className="bg-[#113A5D] text-[#F9F9F9] mx-auto">
      <header className="">
        <NavbarHomePage />
      </header>
      <main>
        <HeroHomePage />
        <AboutMe />
        <Portfolio />
      </main>
    </div>
  );
};

export default HomePage;
