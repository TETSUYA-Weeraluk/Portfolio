import React from "react";
import HeaderDB from "./HeaderDB/HeaderDB";

const DashBoardHomePage = () => {
  // const loader = async () => {
  //   const user = await getUser();
  //   if (!user) {
  //     return redirect("/login");
  //   }
  //   return null;
  // };
  return (
    <div>
      <header>
        <HeaderDB />
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default DashBoardHomePage;
