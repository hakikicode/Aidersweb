import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";

import { CloseSVG } from "../../assets/images";

const NFTsMarketpagePage = () => {
  const [componentsixvalue, setComponentsixvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="bg-white-A700_01 flex flex-col items-center justify-end p-[9px] w-full">
            <div className="flex flex-col justify-start max-w-[1248px] mt-[31px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-12 items-end justify-between w-full">
                <div className="flex md:flex-1 flex-row gap-2 items-center justify-start md:mt-0 mt-[13px] w-[18%] md:w-full">
                  <Img
                    className="h-[74px] w-[74px]"
                    src="images/img_frame434.svg"
                    alt="frame434"
                  />
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-800 uppercase"
                    size="txtUbuntuBold36"
                  >
                    aiders
                  </Text>
                </div>
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between mb-[5px] w-4/5 md:w-full">
                  <Input
                    name="componentSix"
                    placeholder="Search for anything here"
                    value={componentsixvalue}
                    onChange={(e) => setComponentsixvalue(e)}
                    className="font-medium font-sofiasans p-0 placeholder:text-gray-600 sm:px-5 text-[17px] text-gray-600 text-left tracking-[0.09px] w-full"
                    wrapClassName="bg-white-A700_87 border border-gray-900_87 border-solid flex mb-8 px-[22px] py-[7px] rounded-[25px] md:w-full"
                    suffix={
                      componentsixvalue?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer h-9 ml-[35px] my-auto"
                          onClick={() => setComponentsixvalue("")}
                          fillColor="#6d6d6d"
                          height={36}
                          width={36}
                          viewBox="0 0 36 36"
                        />
                      ) : (
                        <Img
                          className="cursor-pointer h-9 ml-[35px] my-auto"
                          src="images/img_search.svg"
                          alt="search"
                        />
                      )
                    }
                  ></Input>
                  <Button className="border-2 border-blue_gray-800 border-solid cursor-pointer font-bold font-ubuntu min-w-[246px] md:mt-0 mt-[18px] py-[21px] rounded-[32px] text-blue_gray-800 text-center text-lg tracking-[0.09px]">
                    Connect Wallet
                  </Button>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-20 items-center justify-center md:ml-[0] ml-[261px] mt-[3px] w-auto sm:w-full">
                <Text
                  className="text-base text-gray-900 tracking-[0.08px] w-auto"
                  size="txtUbuntuMedium16"
                >
                  Home
                </Text>
                <Text
                  className="text-base text-gray-900 tracking-[0.08px] w-auto"
                  size="txtUbuntuMedium16"
                >
                  NFTs
                </Text>
                <Text
                  className="text-base text-gray-900 tracking-[0.08px] w-auto"
                  size="txtUbuntuMedium16"
                >
                  Rewards
                </Text>
                <Text
                  className="text-base text-gray-900 tracking-[0.08px] w-auto"
                  size="txtUbuntuMedium16"
                >
                  About Us
                </Text>
                <a
                  href="javascript:"
                  className="text-base text-gray-900 tracking-[0.08px] w-auto"
                >
                  <Text size="txtUbuntuMedium16">FAQs</Text>
                </a>
              </div>
              <Line className="bg-blue_gray-800 h-[5px] md:ml-[0] ml-[239px] mr-[919px] mt-3 rounded-sm w-[8%]" />
            </div>
          </div>
        </div>
        <Text
          className="capitalize md:ml-[0] ml-[133px] mt-[119px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.16px]"
          size="txtUbuntuMedium32"
        >
          NFTs Listings
        </Text>
        <div className="flex flex-col items-center mt-[1230px] w-full">
          <Footer className="bg-white-A700 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default NFTsMarketpagePage;
