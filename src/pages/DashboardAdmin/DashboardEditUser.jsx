import React from "react";

import EditUser from "../../components/DashBoard/EditUser";

const DashboardEditUser = () => {
  return (
    <div className="bg-[#131313] w-full h-screen text-center text-white p-4">
        <h2 className="text-3xl font-bold">Edit Profile</h2>
        <main>
            <EditUser />
        </main>
    </div>
  );
};

export default DashboardEditUser;
