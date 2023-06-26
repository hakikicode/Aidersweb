import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Comp from "components/Comp";
import Footer from "components/Footer";
import Header1 from "components/Header1";
import NFTsMarketPageColumnThirtyNine from "components/NFTsMarketPageColumnThirtyNine";
import NFTsMarketPageColumnone from "components/NFTsMarketPageColumnone";
import NFTsMarketPageColumnrectangle131 from "components/NFTsMarketPageColumnrectangle131";

const NFTsMarketpagePage = () => {
  const nfTsMarketPageColumnrectangle131PropList = [
    {},
    { username: "PepeRock" },
    { username: "Tokens NFT" },
    { username: "BlackRock" },
    { username: "Pasta Alpha" },
    { username: "The Phantom" },
    { username: "Mutant Ape" },
    { username: "Milady Maker" },
    { username: "Other Coder" },
    { username: "Stack Legends" },
    { username: "The Beacon" },
    { username: "Famacy Siri" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <Header1 className="bg-white-A700_01 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col md:gap-10 gap-16 items-start justify-start max-w-[1240px] mt-36 mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
            <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
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
                    {new Array(3).fill({}).map((props, index) => (
                      <React.Fragment key={`Comp${index}`}>
                        <Comp
                          className="flex flex-col gap-4 items-center justify-start w-auto"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </List>
                  <Comp className="flex flex-col gap-4 items-center justify-start w-auto" />
                  <List
                    className="sm:flex-col flex-row gap-10 grid grid-cols-2 w-[21%] md:w-full"
                    orientation="horizontal"
                  >
                    <Comp className="flex flex-col gap-4 items-center justify-start w-auto" />
                    <Comp className="flex flex-col gap-4 items-center justify-start w-auto" />
                  </List>
                  <Comp className="flex flex-col gap-4 items-center justify-start w-auto" />
                  <Comp className="flex flex-col gap-4 items-center justify-start w-auto" />
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
                      key={`NFTsMarketPageColumnThirtyNine${index}`}
                    >
                      <NFTsMarketPageColumnThirtyNine
                        className="bg-yellow-A400 flex flex-1 flex-col gap-6 items-center justify-start pb-[39px] rounded-[20px] w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
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
        </div>
        <Footer className="bg-white-A700 flex items-center justify-center mt-52 md:px-5 w-full" />
      </div>
    </>
  );
};

export default NFTsMarketpagePage;
