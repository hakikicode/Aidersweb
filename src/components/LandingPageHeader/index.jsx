import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const LandingPageHeader = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-12 items-center justify-start md:ml-[0] ml-[70px] md:mt-0 mt-3.5 w-auto md:w-full">
          <div className="flex flex-row gap-2 items-center justify-start w-[27%] md:w-full">
            <Img
              className="h-[74px] w-[74px]"
              src="images/img_frame434.svg"
              alt="frame434"
            />
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-800 uppercase"
              size="txtUbuntuBold36"
            >
              {props?.aiders}
            </Text>
          </div>
          <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
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
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[72px] items-center justify-center w-auto sm:w-full">
              <Text
                className="text-base text-gray-900 tracking-[0.08px] w-auto"
                size="txtUbuntuMedium16"
              >
                {props?.home}
              </Text>
              <Text
                className="text-base text-gray-900 tracking-[0.08px] w-auto"
                size="txtUbuntuMedium16"
              >
                {props?.nfts}
              </Text>
              <Text
                className="text-base text-gray-900 tracking-[0.08px] w-auto"
                size="txtUbuntuMedium16"
              >
                {props?.trades}
              </Text>
              <Text
                className="text-base text-gray-900 tracking-[0.08px] w-auto"
                size="txtUbuntuMedium16"
              >
                {props?.aboutus}
              </Text>
              <Text
                className="common-pointer text-base text-gray-900 tracking-[0.08px] w-auto"
                size="txtUbuntuMedium16"
                onClick={() => navigate("/faqspage")}
              >
                {props?.faqs}
              </Text>
            </div>
          </div>
        </div>
        <Button
          className="common-pointer border-2 border-blue_gray-800 border-solid cursor-pointer font-bold font-ubuntu min-w-[214px] mr-[70px] py-[17px] rounded-[28px] text-blue_gray-800 text-center text-lg tracking-[0.09px]"
          onClick={props?.onClick}
        >
          {props?.connectWallet}
        </Button>
      </div>
    </>
  );
};

LandingPageHeader.defaultProps = {
  aiders: "aiders",
  searchforanythiOne: "Search for anything here",
  home: "Home",
  nfts: "NFTs",
  trades: "Trades",
  aboutus: "About Us",
  faqs: "FAQs",
  connectWallet: "Connect Wallet",
};

export default LandingPageHeader;
