import React from "react";

import { Button, Img, Line, List, Text } from "components";
import LandingPageHeader from "components/LandingPageHeader";
import Slide169OneHeader from "components/Slide169OneHeader";

const Slide169OnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu sm:gap-10 md:gap-10 gap-16 items-start justify-center mx-auto p-[51px] md:px-10 sm:px-5 w-full">
        <Slide169OneHeader className="bg-white-A700_01 flex mt-[65px] p-[9px] md:px-5 relative w-4/5 md:w-full" />
        <LandingPageHeader className="bg-white-A700_01 flex md:flex-col flex-row md:gap-10 gap-[230px] items-center justify-start mb-[489px] p-[26px] md:px-5 w-4/5 md:w-full" />
      </div>
    </>
  );
};

export default Slide169OnePage;
