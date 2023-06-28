import React from "react";

import { Img, Text } from "components";

const SignupinOverlayPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu sm:gap-10 md:gap-10 gap-[68px] items-center justify-start mx-auto p-[191px] md:px-10 sm:px-5 w-full">
        <Img
          className="h-[307px] w-[306px]"
          src="images/img_onboardingamico.svg"
          alt="onboardingamico"
        />
        <Text
          className="capitalize mb-[41px] text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-800 tracking-[0.24px]"
          size="txtUbuntuMedium48"
        >
          Welcome on board
        </Text>
      </div>
    </>
  );
};

export default SignupinOverlayPage;
