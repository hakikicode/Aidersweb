import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import LandingPageHeader from "components/LandingPageHeader";

const LandingPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <LandingPageHeader className="bg-white-A700_01 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[26px] sm:px-5 w-full" />
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1248px] mt-36 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-24 items-start justify-start w-auto md:w-full">
            <div className="flex flex-col md:gap-10 gap-[120px] items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="capitalize leading-[67.00px] max-w-[482px] md:max-w-full md:text-5xl text-[64px] text-blue_gray-800 tracking-[0.32px]"
                    size="txtUbuntuMedium64"
                  >
                    the ultimate crypto royal reward system{" "}
                  </Text>
                  <Text
                    className="capitalize text-blue_gray-800 text-xl tracking-[-0.80px] w-auto"
                    size="txtUbuntuBold20"
                  >
                    this will revolutionize the way you earn rewards!{" "}
                  </Text>
                </div>
                <Text
                  className="leading-[24.00px] max-w-[444px] md:max-w-full text-base text-blue_gray-800 tracking-[0.08px]"
                  size="txtUbuntuRegular16"
                >
                  Get ready to be thrilled as you perform tasks like affiliate
                  marketing, surveys, quizzes, questionnaires, and more to
                  unlock a world of exciting benefits.
                </Text>
              </div>
              <Button
                className="common-pointer border-2 border-blue_gray-800 border-solid cursor-pointer font-bold py-[17px] rounded-[28px] text-blue_gray-800 text-center text-lg tracking-[0.09px] w-[233px]"
                onClick={() => navigate("/signuppage")}
              >
                Get Started Now
              </Button>
            </div>
            <div className="md:h-80 h-[505px] relative w-[54%] md:w-full">
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
              <div className="absolute bg-blue_gray-800 h-[151px] inset-[0] justify-center m-auto rounded-[20px] shadow-bs1 w-[151px]"></div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start w-auto md:w-full">
            <div className="flex flex-col gap-14 items-center justify-start w-auto md:w-full">
              <div className="flex flex-col gap-8 items-center justify-start w-auto md:w-full">
                <Text
                  className="text-lg text-yellow-A400 tracking-[0.09px] uppercase w-auto"
                  size="txtUbuntuMedium18"
                >
                  About Aiders
                </Text>
                <Text
                  className="leading-[25.00px] max-w-[986px] md:max-w-full text-center text-gray-900 text-xl tracking-[0.10px]"
                  size="txtUbuntuRegular20"
                >
                  <>
                    With Aiders, you&#39;ll be rewarded with health services,
                    e-commerce perks, travel discounts, humanitarian aids, gift
                    cards, and even crypto assets! Our innovative NFT-based
                    system ensures that every effort you make is recognized and
                    rewarded. Join the Aiders community today and start earning
                    like never before. Don&#39;t miss out on this incredible
                    reward system that will change the game. Get your rewards
                    now with Aiders!
                  </>
                </Text>
              </div>
              <a
                href="javascript:"
                className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl tracking-[0.12px] w-auto"
              >
                <Text size="txtUbuntuBold24">LEARN MORE</Text>
              </a>
            </div>
            <Button className="border-2 border-blue_gray-800 border-solid cursor-pointer font-bold py-[17px] rounded-[28px] text-blue_gray-800 text-center text-lg tracking-[0.09px] w-[233px]">
              Download App
            </Button>
          </div>
        </div>
        <Footer className="bg-white-A700 flex items-center justify-center mt-52 md:px-5 w-full" />
      </div>
    </>
  );
};

export default LandingPagePage;
