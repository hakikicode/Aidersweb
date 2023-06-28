import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const AboutUsPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <header className="bg-white-A700_01 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-1 md:flex-col flex-row gap-12 items-center justify-start mb-[11px] ml-24 md:ml-[0] md:mt-0 mt-10 w-auto md:w-full">
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
                <Button
                  className="common-pointer bg-transparent cursor-pointer font-medium min-w-[45px] py-0.5 text-base text-center text-gray-900 tracking-[0.08px]"
                  onClick={() => navigate("/homepage")}
                >
                  Home
                </Button>
                <Button
                  className="common-pointer bg-transparent cursor-pointer font-medium min-w-[37px] py-0.5 text-base text-center text-gray-900 tracking-[0.08px]"
                  onClick={() => navigate("/nftsmarketpage")}
                >
                  NFTs
                </Button>
                <Button
                  className="common-pointer bg-transparent cursor-pointer font-medium min-w-[51px] py-0.5 text-base text-center text-gray-900 tracking-[0.08px]"
                  onClick={() => navigate("/tradingpage")}
                >
                  Trades
                </Button>
                <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuMedium16"
                  >
                    About Us
                  </Text>
                  <Line className="bg-blue_gray-800 h-[5px] rounded-sm w-full" />
                </div>
                <Button
                  className="common-pointer bg-transparent cursor-pointer font-medium min-w-[39px] py-0.5 text-base text-center text-gray-900 tracking-[0.08px]"
                  onClick={() => navigate("/faqspage")}
                >
                  FAQs
                </Button>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-start mb-[46px] md:ml-[0] ml-[175px] mr-24 md:mt-0 mt-[77px] w-auto">
            <Button className="border-2 border-blue_gray-800 border-solid flex h-14 items-center justify-center p-4 rounded-[20px] w-14">
              <Img
                className="h-6"
                src="images/img_ggprofile.svg"
                alt="ggprofile"
              />
            </Button>
            <Button className="border-2 border-blue_gray-800 border-solid cursor-pointer font-bold min-w-[214px] py-[17px] rounded-[28px] text-blue_gray-800 text-center text-lg tracking-[0.09px]">
              Connect Wallet
            </Button>
          </div>
        </header>
        <div className="flex flex-col gap-7 items-start justify-start max-w-[968px] mt-36 mx-auto md:px-5 w-full">
          <Text
            className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800 tracking-[0.16px] w-auto"
            size="txtUbuntuMedium32"
          >
            About Us
          </Text>
          <Text
            className="capitalize leading-[24.00px] text-gray-900 text-lg tracking-[0.09px]"
            size="txtUbuntuRegular18Gray900"
          >
            <>
              Aiders platform offers a unique reward system using NFTs, where
              users can earn rewards by completing various tasks such as
              affiliate marketing, surveys, quizzes, feedback, and more. These
              rewards can be in the form of health services, e-commerce
              services, travel services, discounts on popular products,
              humanitarian aid, gift cards, and even crypto assets. Users will
              have two wallets - an inbuilt wallet and a crypto wallet - to
              manage their rewards.
              <br />
              <br />
              In addition to redeeming NFTs, users can also convert crypto to
              cash, redeem gift cards, and enjoy other features that we plan to
              implement on the app.
              <br />
              <br />
              Advertisers and content creators, also known as publishers, can
              join our platform and offer their services. Publishers can receive
              job offers from advertisers and other companies through a bidding
              system.
              <br />
              <br />
              We also have a focus on charity and donations for blockchain and
              other projects. Users can contribute towards causes, raise funds
              for health disasters, emergencies, and more.
              <br />
              <br />
              By referring and onboarding more people to the platform, users can
              become ambassadors and earn additional rewards and incentives.
              <br />
              <br />
              Our app is designed to be used for payments of goods and services,
              as well as sending and receiving funds between internal users and
              external accounts such as worldwide banks or crypto platforms. We
              also aim to bring merchants and service providers on board to
              accept
            </>
          </Text>
        </div>
        <Footer className="bg-white-A700 flex items-center justify-center mt-52 md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutUsPagePage;
