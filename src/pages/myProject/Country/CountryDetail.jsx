import React from "react";
import { useSelector } from "react-redux";
import CountryDetailContent from "../../../components/Country/CountryDetailContent";
import { DarkModeText } from "../../../components/Country/DarkModeCss";
import HeaderCountry from "../../../components/Country/HeaderCountry";


const CountryDetail = () => {
  const isDarkMode = useSelector(state=>state.country.isDarkMode)
  return (
    <div className={isDarkMode ? DarkModeText : ""}>
      <header>
        <HeaderCountry />
      </header>
      <main>
        <CountryDetailContent />
      </main>
    </div>
  );
};

export default CountryDetail;
