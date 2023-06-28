import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const TradingPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <header className="bg-white-A700_01 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-1 md:flex-col flex-row gap-12 items-center justify-start mb-[9px] ml-24 md:ml-[0] md:mt-0 mt-10 w-auto md:w-full">
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
                <div className="flex flex-col gap-3 items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuMedium16"
                  >
                    Trades
                  </Text>
                  <Line className="bg-blue_gray-800 h-[5px] rounded-sm w-full" />
                </div>
                <Button
                  className="common-pointer bg-transparent cursor-pointer font-medium min-w-[69px] py-0.5 text-base text-center text-gray-900 tracking-[0.08px]"
                  onClick={() => navigate("/aboutuspage")}
                >
                  About Us
                </Button>
                <Button
                  className="common-pointer bg-transparent cursor-pointer font-medium min-w-[39px] py-0.5 text-base text-center text-gray-900 tracking-[0.08px]"
                  onClick={() => navigate("/faqspage")}
                >
                  FAQs
                </Button>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-start mb-[46px] md:ml-[0] ml-[157px] mr-24 md:mt-0 mt-[77px] w-auto">
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
        <div className="flex flex-col gap-6 items-start justify-start max-w-[1222px] mt-36 mx-auto md:px-5 w-full">
          <Text
            className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800 tracking-[0.16px] w-auto"
            size="txtUbuntuMedium32"
          >
            Aiders Market
          </Text>
          <div className="bg-white-A700 flex flex-col gap-6 items-end justify-start rounded-[20px] w-auto md:w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 gap-[260px] items-start justify-between w-auto md:w-full">
              <Text
                className="capitalize text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[0.12px] w-auto"
                size="txtUbuntuMedium24"
              >
                All Trades
              </Text>
              <Text
                className="capitalize text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[0.12px] w-auto"
                size="txtUbuntuMedium24"
              >
                Currencies
              </Text>
              <Text
                className="capitalize text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[0.12px] w-auto"
                size="txtUbuntuMedium24"
              >
                Gift Cards
              </Text>
              <Text
                className="capitalize text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[0.12px] w-auto"
                size="txtUbuntuMedium24"
              >
                Rewards
              </Text>
            </div>
            <div className="flex flex-row md:gap-10 gap-[148px] items-start justify-between w-auto md:w-full">
              <Text
                className="capitalize text-base text-blue_gray-800 tracking-[0.08px] w-auto"
                size="txtUbuntuRegular16"
              >
                Symbols
              </Text>
              <Text
                className="capitalize text-base text-gray-400 tracking-[0.08px] w-auto"
                size="txtUbuntuRegular16Gray400"
              >
                Bid
              </Text>
              <Text
                className="capitalize text-base text-gray-400 tracking-[0.08px] w-auto"
                size="txtUbuntuRegular16Gray400"
              >
                Ask
              </Text>
              <Text
                className="capitalize text-base text-gray-400 tracking-[0.08px] w-auto"
                size="txtUbuntuRegular16Gray400"
              >
                %chg
              </Text>
              <Text
                className="capitalize text-base text-gray-400 tracking-[0.08px] w-auto"
                size="txtUbuntuRegular16Gray400"
              >
                Change
              </Text>
              <Text
                className="capitalize text-base text-gray-400 tracking-[0.08px] w-auto"
                size="txtUbuntuRegular16Gray400"
              >
                High
              </Text>
              <Text
                className="capitalize text-base text-gray-400 tracking-[0.08px] w-auto"
                size="txtUbuntuRegular16Gray400"
              >
                Low
              </Text>
            </div>
          </div>
        </div>
        <List
          className="flex flex-col gap-6 items-start max-w-[1222px] mt-8 mx-auto md:px-5 w-full"
          orientation="vertical"
        >
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_image1.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    USDT
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    U S Dollar Tether
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_image1_40x40.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    WBTC
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    wrapped Bitcoin
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_image1_1.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    USDC
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    U S Dollar Coin
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_image1_2.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    DAI
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    Dai
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_image1_3.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    LINK
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    ChainLink
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_image1_4.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    TUSD
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    True U S Dollar
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_image1_5.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    FRAX
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    Frax
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_image1_6.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    AAVE
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    Aave
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_image1_7.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    SNX
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    Synthetix
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-[18%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-10 md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                      src="images/img_image1_40x38.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    CRV
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    Curve DAO
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_image1_8.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    FXS
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    Frax Share
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_image1_9.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    ANKR
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    Ankr Network
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-10">
                  <div className="flex flex-col items-center justify-start w-10 md:w-full">
                    <Img
                      className="h-[39px] md:h-auto rounded-[50%] w-10"
                      src="images/img_image1_39x40.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    ABBC
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    ABBC coin
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-10">
                  <div className="flex flex-col items-center justify-start w-10 md:w-full">
                    <Img
                      className="h-[39px] md:h-auto rounded-[50%] w-10"
                      src="images/img_image1_10.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    YFI
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    yearn.finance
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_image1_11.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    BIFI
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    Beefy.finance
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-[19%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[38px] md:h-auto rounded-[50%] w-full"
                      src="images/img_image1_38x40.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    MIM
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    Magic Internet Money
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_image1_12.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    ANT
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    Aiders Token Network
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_image1_13.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    FAME
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    Fantom makeer
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_image1_14.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    FTG
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    FantomGO
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-green-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20GreenA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col h-10 items-center justify-start w-10">
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_image1_15.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    TREEB
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    Retreeb
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-[19%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[38px] md:h-auto rounded-[50%] w-full"
                      src="images/img_image1_16.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    BAND
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    Band protocol
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
          <div className="border border-green-A100 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-[19%]">
                  <div className="flex flex-col items-center justify-end p-[3px] w-full">
                    <Img
                      className="h-7 md:h-auto object-cover rounded-[20px] w-[56%]"
                      src="images/img_image1_28x19.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[165px]">
                  <Text
                    className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                    size="txtUbuntuBold20Gray900"
                  >
                    KP3R
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    Keep3rV1
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-28 items-center justify-between w-auto md:w-full">
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.567
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray900"
                >
                  202.245
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.7%
                </Text>
                <Text
                  className="capitalize text-red-A700 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20RedA700"
                >
                  0.747
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.27
                </Text>
                <Text
                  className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuRegular20"
                >
                  202.02
                </Text>
              </div>
            </div>
          </div>
        </List>
        <footer className="bg-white-A700 flex items-center justify-center mt-52 md:px-5 w-full">
          <div className="flex flex-col gap-[54px] items-start justify-start mx-auto my-12 w-auto">
            <div className="flex flex-col gap-10 items-end justify-start w-auto md:w-full">
              <Line className="bg-gray-700_3f h-px w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 gap-[284px] items-start justify-between w-auto md:w-full">
                <div className="flex flex-row gap-2 items-center justify-start w-[18%] md:w-full">
                  <Img
                    className="h-[74px] w-[74px]"
                    src="images/img_frame434.svg"
                    alt="frame434_One"
                  />
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-800 uppercase"
                    size="txtUbuntuBold36"
                  >
                    aiders
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[100px] items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-[17px] text-gray-900 tracking-[0.09px] w-auto"
                      size="txtUbuntuMedium17"
                    >
                      Services
                    </Text>
                    <ul className="flex flex-col gap-2 items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-500 text-sm tracking-[0.04px]"
                        >
                          <Text size="txtUbuntuRegular14">NFTs</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-500 text-sm tracking-[0.04px]"
                        >
                          <Text size="txtUbuntuRegular14">Rewards</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-500 text-sm tracking-[0.04px]"
                        >
                          <Text size="txtUbuntuRegular14">Tasks</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-500 text-sm tracking-[0.04px]"
                        >
                          <Text size="txtUbuntuRegular14">Converters</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-500 text-sm tracking-[0.04px]"
                        >
                          <Text size="txtUbuntuRegular14">Bid Market</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-[17px] text-center text-gray-900 tracking-[0.09px] w-auto"
                      size="txtUbuntuMedium17"
                    >
                      About us
                    </Text>
                    <ul className="flex flex-col gap-2 items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-center text-gray-500 text-sm tracking-[0.04px]"
                        >
                          <Text size="txtUbuntuRegular14">About</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-center text-gray-500 text-sm tracking-[0.04px]"
                        >
                          <Text size="txtUbuntuRegular14">Branding</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-center text-gray-500 text-sm tracking-[0.04px]"
                        >
                          <Text size="txtUbuntuRegular14">Newsroom</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-center text-gray-500 text-sm tracking-[0.04px]"
                        >
                          <Text size="txtUbuntuRegular14">Partnerships</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-center text-gray-500 text-sm tracking-[0.04px]"
                        >
                          <Text size="txtUbuntuRegular14">Charity</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-[17px] text-gray-900 tracking-[0.09px] w-auto"
                      size="txtUbuntuMedium17"
                    >
                      Help and support
                    </Text>
                    <ul className="flex flex-col gap-2 items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-500 text-sm tracking-[0.04px]"
                        >
                          <Text size="txtUbuntuRegular14">Help center</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-500 text-sm tracking-[0.04px]"
                        >
                          <Text size="txtUbuntuRegular14">Contact us</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-500 text-sm tracking-[0.04px]"
                        >
                          <Text size="txtUbuntuRegular14">Privacy & Terms</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-500 text-sm tracking-[0.04px]"
                        >
                          <Text size="txtUbuntuRegular14">
                            Safety information
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-500 text-sm tracking-[0.04px]"
                        >
                          <Text size="txtUbuntuRegular14">Sitemap</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-[17px] text-gray-900 tracking-[0.09px] w-auto"
                      size="txtUbuntuMedium17"
                    >
                      Community
                    </Text>
                    <ul className="flex flex-col gap-2 items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-500 text-sm tracking-[0.04px]"
                        >
                          <Text size="txtUbuntuRegular14">Advertisers</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-500 text-sm tracking-[0.04px]"
                        >
                          <Text size="txtUbuntuRegular14">
                            Content Creators
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-gray-500 text-sm tracking-[0.04px]"
                        >
                          <Text size="txtUbuntuRegular14">Publishers</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 items-end justify-start w-auto md:w-full">
              <Line className="bg-gray-700_3f h-px w-full" />
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[758px] items-center justify-between w-auto md:w-full">
                <div className="flex flex-row gap-[54px] items-start justify-start w-auto">
                  <Text
                    className="text-gray-900 text-sm tracking-[0.04px] w-auto"
                    size="txtUbuntuRegular14Gray900"
                  >
                    @copyright 2023
                  </Text>
                  <div className="flex flex-row font-sofiasans gap-6 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-sm tracking-[0.04px] w-auto"
                      size="txtSofiaSansRegular14"
                    >
                      Help
                    </Text>
                    <a
                      href="javascript:"
                      className="text-gray-900 text-sm tracking-[0.04px] w-auto"
                    >
                      <Text size="txtSofiaSansRegular14">Privacy</Text>
                    </a>
                    <Text
                      className="text-gray-900 text-sm tracking-[0.04px] w-auto"
                      size="txtSofiaSansRegular14"
                    >
                      Terms
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-end justify-center w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_plus_white_a700_01.svg"
                    alt="plus"
                  />
                  <div className="flex flex-col h-5 items-end justify-start w-5">
                    <Img
                      className="h-3.5"
                      src="images/img_twitter_gray_500.svg"
                      alt="twitter"
                    />
                  </div>
                  <Img
                    className="h-5 md:h-auto object-cover w-5"
                    src="images/img_socialmedialogo_gray_500.png"
                    alt="socialmedialogo"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TradingPagePage;
