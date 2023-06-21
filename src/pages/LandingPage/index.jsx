import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";

import { CloseSVG } from "../../assets/images";

const LandingPagePage = () => {
  const [componentsixvalue, setComponentsixvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700_01 flex flex-col items-center justify-end p-6 sm:px-5 w-full">
            <div className="flex flex-col justify-start max-w-[1248px] mt-4 mx-auto md:px-5 w-full">
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
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-20 items-center justify-center md:ml-[0] ml-[261px] mt-[5px] w-auto sm:w-full">
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
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[77px] items-start justify-start max-w-[1248px] mt-[88px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-14 w-[39%] md:w-full">
              <Text
                className="capitalize leading-[67.00px] md:text-5xl text-[64px] text-blue_gray-800 tracking-[0.32px] w-full"
                size="txtUbuntuMedium64"
              >
                the ultimate crypto royal reward system{" "}
              </Text>
              <Text
                className="capitalize mt-[37px] text-blue_gray-800 text-xl tracking-[-0.80px]"
                size="txtUbuntuBold20"
              >
                this will revolutionize the way you earn rewards!{" "}
              </Text>
              <Text
                className="leading-[24.00px] mt-[35px] text-base text-blue_gray-800 tracking-[0.08px] w-[93%] sm:w-full"
                size="txtUbuntuRegular16"
              >
                Get ready to be thrilled as you perform tasks like affiliate
                marketing, surveys, quizzes, questionnaires, and more to unlock
                a world of exciting benefits.
              </Text>
              <Button className="border-2 border-blue_gray-800 border-solid cursor-pointer font-bold mt-[120px] py-[21px] rounded-[32px] text-blue_gray-800 text-center text-lg tracking-[0.09px] w-[233px]">
                Get Started Now
              </Button>
            </div>
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[196px] justify-start w-[56%] md:w-full">
              <div className="md:h-80 h-[505px] md:ml-[0] ml-[19px] relative w-[98%] md:w-full">
                <div className="md:h-80 h-[505px] m-auto w-full">
                  <div className="absolute bottom-[0] md:h-80 h-[420px] right-[0] w-3/4 sm:w-full">
                    <div className="absolute border-[3px] border-blue_gray-800 border-solid h-80 left-[0] rounded-[50px] top-[0] w-80"></div>
                    <Img
                      className="absolute bottom-[0] h-[259px] object-cover right-[0] rounded-br-[50px] w-3/4"
                      src="images/img_unsplashzjelluommau.png"
                      alt="unsplashzjelluo"
                    />
                  </div>
                  <Img
                    className="absolute h-[259px] left-[0] object-cover rounded-tl-[50px] top-[0] w-[59%]"
                    src="images/img_unsplash2vd8lihdnw.png"
                    alt="unsplash2vd8lih"
                  />
                </div>
                <div className="absolute bg-blue_gray-800 h-[151px] inset-[0] justify-center m-auto rounded-[20px] shadow-bs w-[151px]"></div>
              </div>
              <Text
                className="text-lg text-yellow-A400 tracking-[0.09px] uppercase"
                size="txtUbuntuMedium18"
              >
                About Aiders
              </Text>
            </div>
          </div>
          <Text
            className="leading-[25.00px] mt-8 text-center text-gray-900 text-xl tracking-[0.10px] w-[69%] sm:w-full"
            size="txtUbuntuRegular20"
          >
            <>
              With Aiders, you&#39;ll be rewarded with health services,
              e-commerce perks, travel discounts, humanitarian aids, gift cards,
              and even crypto assets! Our innovative NFT-based system ensures
              that every effort you make is recognized and rewarded. Join the
              Aiders community today and start earning like never before.
              Don&#39;t miss out on this incredible reward system that will
              change the game. Get your rewards now with Aiders!
            </>
          </Text>
          <a
            href="javascript:"
            className="mt-[38px] text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl tracking-[0.12px]"
          >
            <Text size="txtUbuntuBold24">LEARN MORE</Text>
          </a>
          <Button className="border-2 border-blue_gray-800 border-solid cursor-pointer font-bold mt-[117px] py-[21px] rounded-[32px] text-blue_gray-800 text-center text-lg tracking-[0.09px] w-[233px]">
            Download App
          </Button>
          <Footer className="bg-white-A700 flex items-center justify-center mt-[200px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
