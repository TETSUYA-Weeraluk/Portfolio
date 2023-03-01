import React from "react";
import ContentHeader from "../../../components/AppFood/ContentHeader";
import HeaderAppFood from "../../../components/AppFood/HeaderAppFood";
import SubContentHeader from "../../../components/AppFood/SubContentHeader";
import NavAppFood from "../../../components/AppFood/NavAppFood";
import Menu from "../../../components/AppFood/Menu";
import Cart from "../../../components/AppFood/Cart";
import Order from "../../../components/AppFood/Order";
import FooterAppFood from "../../../components/AppFood/FooterAppFood";

const AppFoodPage = () => {
 
  return (
    <div className="w-full text-sm sm:text-base lg:text-lg">
      <NavAppFood />
        <header>
          <HeaderAppFood />
        </header>

      <div className="max-w-7xl mx-auto p-4">
        <Cart />
        <Order />
        <main>
            <ContentHeader />
            <SubContentHeader />
            <Menu />
        </main>
      </div>

      <footer>
        <FooterAppFood />
      </footer>
    </div>
  );
};

export default AppFoodPage;
