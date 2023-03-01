import React from "react";
import { useSelector } from "react-redux";
import CountryList from "../../../components/Country/CountryList";
import { DarkModeText } from "../../../components/Country/DarkModeCss";
import HeaderCountry from "../../../components/Country/HeaderCountry";

const Country = () => {
  const isDarkMode = useSelector((state) => state.country.isDarkMode);

  return (
    <div className={`${isDarkMode ? DarkModeText : ""} mx-auto`}>
      <header>
        <HeaderCountry />
      </header>
      <main>
        <CountryList />
      </main>
    </div>
  );
};

export default Country;
