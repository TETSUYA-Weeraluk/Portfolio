import React from "react";
import { Link } from "react-router-dom";

const HeroRight = () => {
  return (
    <div>
      <h2 className="font-bold text-lg">HI THERE !!!</h2>
      <h1 className="font-bold text-xl text-[#C4FFDD]">
        My name's Weeraluk Sopapan
      </h1>
      <h3>
        Nickname : Tee, I graduated from Bangkok University. Computer Science,
        Bachelor of Information Technology and Innovation.
      </h3>
      <br></br>
      <h3>
        Currently, I don't have work experience. I'm interested in Front-end
        Developer position and use Javascript framework : ReactJS , CSS
        Framework : Tailwind , Bootstrap
      </h3>

      <div className="mt-4">
        <Link to='project' smooth="true" className="px-4 py-2 font-bold rounded-md bg-[#113A5D] hover:bg-white hover:text-[#062743]">
          My project
        </Link>
      </div>
    </div>
  );
};

export default HeroRight;
