import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row gap-12 items-center justify-start mb-[26px] ml-24 md:ml-[0] md:mt-0 mt-10 w-auto md:w-full">
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <Img
              className="h-[74px] w-[74px]"
              src="images/img_frame434.svg"
              alt="frame434"
            />
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-800 uppercase w-auto"
              size="txtUbuntuBold36"
            >
              aiders
            </Text>
          </div>
          <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
            <div className="bg-white-A700_01 border border-gray-900 border-solid flex flex-col items-start justify-start sm:px-5 px-8 py-[7px] rounded-[25px] w-auto">
              <div className="flex flex-row gap-[72px] h-9 md:h-auto items-center justify-start w-[291px]">
                <Text
                  className="text-gray-500 text-sm tracking-[0.07px] w-auto"
                  size="txtUbuntuMedium14"
                >
                  Search for anything here
                </Text>
                <Img
                  className="h-9 w-9"
                  src="images/img_search.svg"
                  alt="search"
                />
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-16 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-gray-900 tracking-[0.08px] w-auto"
                  size="txtUbuntuMedium16"
                >
                  Home
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-gray-900 tracking-[0.08px] w-auto"
                  size="txtUbuntuMedium16"
                >
                  NFTs
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-gray-900 tracking-[0.08px] w-auto"
                  size="txtUbuntuMedium16"
                >
                  Trades
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-gray-900 tracking-[0.08px] w-auto"
                  size="txtUbuntuMedium16"
                >
                  About Us
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-gray-900 tracking-[0.08px] w-auto"
                  size="txtUbuntuMedium16"
                >
                  FAQs
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col flex-row gap-6 items-center justify-start mb-[46px] md:ml-[0] ml-[196px] mr-24 md:mt-0 mt-[77px] w-auto">
          <Button className="border-2 border-blue_gray-800 border-solid flex h-14 items-center justify-center p-4 rounded-[20px] w-14">
            <Img
              className="h-6"
              src="images/img_ggprofile.svg"
              alt="ggprofile"
            />
          </Button>
          <Button className="border-2 border-blue_gray-800 border-solid cursor-pointer font-bold font-ubuntu min-w-[214px] py-[17px] rounded-[28px] text-blue_gray-800 text-center text-lg tracking-[0.09px]">
            Connect Wallet
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
