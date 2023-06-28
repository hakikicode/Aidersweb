import React from "react";

import { Button, Img, Line, List, Text } from "components";
import LandingPageHeader from "components/LandingPageHeader";
import Slide169OneHeader from "components/Slide169OneHeader";

const Slide169OnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu items-start justify-start mx-auto p-[51px] md:px-10 sm:px-5 w-full">
        <Slide169OneHeader className="bg-white-A700_01 flex mt-[65px] p-[9px] md:px-5 relative w-4/5 md:w-full" />
        <LandingPageHeader className="bg-white-A700_01 flex md:flex-col flex-row md:gap-10 gap-[244px] items-center justify-start mt-16 p-[26px] md:px-5 w-4/5 md:w-full" />
        <div className="flex flex-col items-end mb-[84px] mt-[205px] md:px-10 sm:px-5 px-[126px] w-4/5 md:w-full">
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full">
            <Img
              className="h-[200px] w-[200px]"
              src="images/img_frame574.svg"
              alt="frame574"
            />
            <Text
              className="md:text-5xl text-8xl text-blue_gray-800 uppercase w-auto"
              size="txtUbuntuBold96"
            >
              aiders
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide169OnePage;
