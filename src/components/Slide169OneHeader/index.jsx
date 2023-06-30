import React from "react";

import { Button, Img, Line, List, Text } from "components";

const Slide169OneHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-12 items-center justify-start ml-[87px] mt-auto w-auto">
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
              {props?.aiders}
            </Text>
          </div>
          <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
            <div className="bg-white-A700_01 border border-gray-900 border-solid flex flex-col items-start justify-start sm:px-5 px-8 py-[7px] rounded-[25px] w-auto">
              <div className="flex flex-row gap-[72px] h-9 md:h-auto items-center justify-start w-[291px]">
                <Text
                  className="text-gray-500 text-sm tracking-[0.07px] w-auto"
                  size="txtUbuntuMedium14"
                >
                  {props?.searchforanythiOne}
                </Text>
                <Img
                  className="h-9 w-9"
                  src="images/img_search.svg"
                  alt="search"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
              <List
                className="sm:flex-col flex-row md:gap-10 gap-16 grid grid-cols-3 w-[57%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-3 items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuMedium16"
                  >
                    {props?.home}
                  </Text>
                  <Line className="bg-blue_gray-800 h-[5px] rounded-sm w-full" />
                </div>
                <div className="flex flex-col gap-3 items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuMedium16"
                  >
                    {props?.nfts}
                  </Text>
                  <Line className="bg-blue_gray-800 h-[5px] rounded-sm w-full" />
                </div>
                <div className="flex flex-col gap-3 items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuMedium16"
                  >
                    {props?.trades}
                  </Text>
                  <Line className="bg-blue_gray-800 h-[5px] rounded-sm w-full" />
                </div>
              </List>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-16 grid grid-cols-2 w-[35%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuMedium16"
                  >
                    {props?.aboutus}
                  </Text>
                  <Line className="bg-blue_gray-800 h-[5px] rounded-sm w-full" />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuMedium16"
                  >
                    {props?.faqs}
                  </Text>
                  <Line className="bg-blue_gray-800 h-[5px] rounded-sm w-full" />
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-center justify-center mb-[37px] ml-[-13px] mr-[87px] mt-auto w-auto z-[1]">
          <Button className="border-2 border-blue_gray-800 border-solid flex h-14 items-center justify-center p-4 rounded-[20px] w-14">
            <Img
              className="h-6"
              src="images/img_ggprofile.svg"
              alt="ggprofile"
            />
          </Button>
          <Button className="border-2 border-blue_gray-800 border-solid cursor-pointer font-bold font-ubuntu min-w-[214px] py-[17px] rounded-[28px] text-blue_gray-800 text-center text-lg tracking-[0.09px]">
            {props?.connectWallet}
          </Button>
        </div>
      </div>
    </>
  );
};

Slide169OneHeader.defaultProps = {
  aiders: "aiders",
  searchforanythiOne: "Search for anything here",
  home: "Home",
  nfts: "NFTs",
  trades: "Trades",
  aboutus: "About Us",
  faqs: "FAQs",
  connectWallet: "Connect Wallet",
};

export default Slide169OneHeader;
