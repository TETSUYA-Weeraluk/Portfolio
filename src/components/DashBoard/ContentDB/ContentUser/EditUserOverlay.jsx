import React from "react";

const EditUserOverlay = () => {
  return (
    <div>
      <div className="w-full h-full fixed bg-black/70 z-30"></div>
      <div className="fixed z-40 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="bg-white text-black relative ">
          <h2 className="text-3xl text-center">Edit profile</h2>
          <div className="p-4">
            <div className="flex items-center gap-10">
              <p>Username</p>
              <input className=" bg-transparent" type="text" value="tetsuya" />
            </div>
            <p>Name</p>
            <p>Lastname</p>
            <p>Email</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserOverlay;
