import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const AboutUsPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700_01 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col gap-7 items-center justify-start max-w-[968px] mt-36 mx-auto md:px-5 w-full">
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
