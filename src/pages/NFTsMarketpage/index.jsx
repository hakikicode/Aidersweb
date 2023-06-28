import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import NFTsMarketPageColumnThirtySeven from "components/NFTsMarketPageColumnThirtySeven";
import NFTsMarketPageColumnone from "components/NFTsMarketPageColumnone";
import NFTsMarketPageColumnrectangle131 from "components/NFTsMarketPageColumnrectangle131";

const NFTsMarketpagePage = () => {
  const navigate = useNavigate();

  const nfTsMarketPageColumnrectangle131PropList = [
    {},
    { tokensnft: "PepeRock" },
    { tokensnft: "Tokens NFT" },
    { tokensnft: "BlackRock" },
    { tokensnft: "Pasta Alpha" },
    { tokensnft: "The Phantom" },
    { tokensnft: "Mutant Ape" },
    { tokensnft: "Milady Maker" },
    { tokensnft: "Other Coder" },
    { tokensnft: "Stack Legends" },
    { tokensnft: "The Beacon" },
    { tokensnft: "Famacy Siri" },
  ];

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
                <div className="flex flex-col gap-3 items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuMedium16"
                  >
                    NFTs
                  </Text>
                  <Line className="bg-blue_gray-800 h-[5px] rounded-sm w-full" />
                </div>
                <Button
                  className="common-pointer bg-transparent cursor-pointer font-medium min-w-[51px] py-0.5 text-base text-center text-gray-900 tracking-[0.08px]"
                  onClick={() => navigate("/tradingpage")}
                >
                  Trades
                </Button>
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
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-start mb-[46px] md:ml-[0] ml-[143px] mr-24 md:mt-0 mt-[77px] w-auto">
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
        <div className="flex flex-col md:gap-10 gap-16 items-start justify-start max-w-[1239px] mt-36 mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
            <Text
              className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800 tracking-[0.16px] w-auto"
              size="txtUbuntuMedium32"
            >
              NFTs Listings
            </Text>
            <div className="flex flex-col items-end justify-start w-auto md:w-full">
              <div className="gap-24 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {nfTsMarketPageColumnrectangle131PropList.map(
                  (props, index) => (
                    <React.Fragment
                      key={`NFTsMarketPageColumnrectangle131${index}`}
                    >
                      <NFTsMarketPageColumnrectangle131
                        className="bg-indigo-900 flex flex-1 flex-col gap-4 items-center justify-start p-6 sm:px-5 rounded-[50px] w-full"
                        {...props}
                      />
                    </React.Fragment>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
              <Text
                className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                size="txtUbuntuBold20Gray900"
              >
                Categories
              </Text>
              <div className="flex md:flex-col flex-row gap-10 items-start justify-start w-auto md:w-full">
                <List
                  className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 grid-cols-3 w-[35%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                      src="images/img_ellipse10.png"
                      alt="ellipseTen"
                    />
                    <Text
                      className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                      size="txtUbuntuRegular16Gray900"
                    >
                      Artwork
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                      src="images/img_ellipse10.png"
                      alt="ellipseTen"
                    />
                    <Text
                      className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                      size="txtUbuntuRegular16Gray900"
                    >
                      Real world asssets
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                      src="images/img_ellipse10.png"
                      alt="ellipseTen"
                    />
                    <Text
                      className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                      size="txtUbuntuRegular16Gray900"
                    >
                      Video games
                    </Text>
                  </div>
                </List>
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                    src="images/img_ellipse10.png"
                    alt="ellipseTen"
                  />
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    collectible items
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-10 grid grid-cols-2 w-[21%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                      src="images/img_ellipse10.png"
                      alt="ellipseTen"
                    />
                    <Text
                      className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                      size="txtUbuntuRegular16Gray900"
                    >
                      memes
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                      src="images/img_ellipse10.png"
                      alt="ellipseTen"
                    />
                    <Text
                      className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                      size="txtUbuntuRegular16Gray900"
                    >
                      virtual fashion
                    </Text>
                  </div>
                </List>
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                    src="images/img_ellipse10.png"
                    alt="ellipseTen_One"
                  />
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    music and media
                  </Text>
                </div>
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                    src="images/img_ellipse10.png"
                    alt="ellipseTen_Two"
                  />
                  <Text
                    className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuRegular16Gray900"
                  >
                    Best short moment
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
            <Text
              className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
              size="txtUbuntuBold20Gray900"
            >
              Collections
            </Text>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {new Array(9).fill({}).map((props, index) => (
                  <React.Fragment
                    key={`NFTsMarketPageColumnThirtySeven${index}`}
                  >
                    <NFTsMarketPageColumnThirtySeven
                      className="bg-yellow-A400 flex flex-1 flex-col gap-6 items-center justify-start pb-[39px] rounded-[20px] w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-start justify-start max-w-[1240px] mt-16 mx-auto md:px-5 w-full">
          <Text
            className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
            size="txtUbuntuBold20Gray900"
          >
            Top Collections
          </Text>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-28 grid md:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
              <NFTsMarketPageColumnone className="bg-white-A700_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full" />
              <NFTsMarketPageColumnone className="bg-white-A700_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full" />
              <NFTsMarketPageColumnone className="bg-white-A700_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full" />
              <NFTsMarketPageColumnone className="bg-white-A700_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full" />
              <NFTsMarketPageColumnone className="bg-white-A700_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full" />
            </div>
            <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
              <NFTsMarketPageColumnone className="bg-white-A700_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full" />
              <NFTsMarketPageColumnone className="bg-white-A700_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full" />
              <NFTsMarketPageColumnone className="bg-white-A700_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full" />
              <NFTsMarketPageColumnone className="bg-white-A700_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full" />
            </div>
          </List>
        </div>
        <Footer className="bg-white-A700 flex items-center justify-center mt-[184px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default NFTsMarketpagePage;
