import React from "react";
import ButtonBack from "../../components/DashBoard/Edit/ButtonBack";

import EditUser from "../../components/DashBoard/EditUser";

const DashboardEditUser = () => {
  return (
    <div className="bg-[#131313] w-full h-screen text-center text-white p-4">
        <div className="max-w-xl mx-auto mt-5"> 
        <ButtonBack/>
         <h2 className="text-3xl font-bold">Edit Profile</h2></div>
        <main>
            <EditUser />
        </main>
    </div>
  );
};

export default DashboardEditUser;
