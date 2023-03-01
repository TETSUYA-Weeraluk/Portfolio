import React from "react";

const AboutMeEducation = () => {
  return (
    <>
      <h1 className="font-bold text-3xl border-[#C4FFDD]">Education</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 p-2">
        <div className="flex flex-col gap-2 md:border-r p-2 text-sm text-[#dddddd] border-b  md:border-b-transparent">
          <p>
            COMPUTER SCIENCE, BACHELOR OF INFORMATION TECHNOLOGY AND INNOVATION.
            Innovation.
          </p>
          <p>Bangkok University.</p>
          <p>Pathum thani, Thailand</p>
          <p>2017-2021</p>
        </div>
        <div className="flex flex-col gap-1 p-2 text-[#dddddd]">
          <p>MATHEMATICS & ENGLISH PROGRAM</p>
          <p>Phuketwittayalai school,</p>
          <p>Phuket, Thailand</p>
          <p>2012 - 2017</p>
        </div>
      </div>
    </>
  );
};

export default AboutMeEducation;
