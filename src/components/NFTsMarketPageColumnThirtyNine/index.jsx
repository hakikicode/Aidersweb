import React from "react";

import { Img, Text } from "components";

const NFTsMarketPageColumnThirtyNine = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[238px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] rounded-tl-[20px] rounded-tr-[20px] w-full"
          src="images/img_rectangle131_238x390.png"
          alt="rectangle131"
        />
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="capitalize text-indigo-900 text-lg tracking-[0.09px] w-auto"
            size="txtUbuntuMedium18Indigo900"
          >
            {props?.cyptopunk}
          </Text>
          <div className="flex flex-col gap-2 items-center justify-start w-auto">
            <Text
              className="capitalize leading-[23.00px] max-w-[342px] md:max-w-full text-[15px] text-gray-600 tracking-[0.07px]"
              size="txtUbuntuLight15"
            >
              {props?.userdescription}
            </Text>
            <div className="flex flex-row gap-28 items-center justify-between w-auto">
              <div className="flex flex-row gap-2 items-start justify-start w-auto">
                <Text
                  className="capitalize text-base text-indigo-900 tracking-[0.08px] w-auto"
                  size="txtUbuntuRegular16Indigo900"
                >
                  {props?.owners}
                </Text>
                <Text
                  className="capitalize text-base text-indigo-900 tracking-[0.08px]"
                  size="txtUbuntuBold16"
                >
                  {props?.twenty}
                </Text>
              </div>
              <div className="flex flex-col gap-[19px] items-center justify-start w-auto">
                <Text
                  className="capitalize text-base text-indigo-900 tracking-[0.08px] w-auto"
                  size="txtUbuntuRegular16Indigo900"
                >
                  {props?.totalvolume}
                </Text>
                <Text
                  className="capitalize text-gray-600 text-xl tracking-[0.10px] w-auto"
                  size="txtUbuntuBold20Gray600"
                >
                  {props?.totalvolume1}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

NFTsMarketPageColumnThirtyNine.defaultProps = {
  cyptopunk: "Cyptopunk",
  userdescription:
    "These are a collection of 10,000 unique 8-bit characters created by Larva Labs. They were one of the first NFTs to gain popularity and have sold for millions of dollars. The most expensive CryptoPunk ever sold for $69 million.",
  owners: "Owners:",
  twenty: "20",
  totalvolume: "Total Volume",
  totalvolume1: "200.00ETH",
};

export default NFTsMarketPageColumnThirtyNine;
