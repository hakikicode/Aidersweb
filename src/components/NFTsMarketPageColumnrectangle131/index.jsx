import React from "react";

import { Button, Img, Text } from "components";

const NFTsMarketPageColumnrectangle131 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[214px] sm:h-auto object-cover rounded-[40px] w-[93%] md:w-full"
          src="images/img_rectangle131.png"
          alt="rectangle131"
        />
        <div className="flex flex-col gap-2 items-center justify-start mb-2 w-auto">
          <Text
            className="capitalize text-base text-white-A700_01 tracking-[0.08px] w-auto"
            size="txtUbuntuMedium16WhiteA70001"
          >
            {props?.username}
          </Text>
          <div className="flex flex-col items-start justify-start w-auto">
            <div className="flex flex-row gap-3 items-center justify-center w-[164px]">
              <div className="border border-solid border-white-A700_01 flex flex-col h-10 items-center justify-start rounded-[50%] w-10">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_ellipse8.png"
                  alt="ellipseEight"
                />
              </div>
              <Text
                className="capitalize text-sm text-white-A700_01 tracking-[0.07px] w-auto"
                size="txtUbuntuRegular14"
              >
                {props?.usertitle}
              </Text>
            </div>
            <div className="flex flex-row gap-24 items-end justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-[42%]">
                <Button className="bg-blue_gray-800 cursor-pointer font-bold font-ubuntu min-w-[113px] py-[17px] rounded-[28px] text-center text-lg text-white-A700_01 tracking-[0.09px]">
                  {props?.buybutton}
                </Button>
              </div>
              <div className="flex flex-col gap-[22px] items-center justify-start w-auto">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="capitalize text-sm text-white-A700_01 tracking-[0.07px] w-auto"
                    size="txtUbuntuRegular14"
                  >
                    {props?.pricelabel}
                  </Text>
                </div>
                <Text
                  className="capitalize text-lg text-yellow-A400 tracking-[0.09px] w-auto"
                  size="txtUbuntuBold18"
                >
                  {props?.pricevalue}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

NFTsMarketPageColumnrectangle131.defaultProps = {
  username: "CryptoFish",
  usertitle: "The Lord of NFTs",
  buybutton: "Buy",
  pricelabel: "Price:",
  pricevalue: "$10000",
};

export default NFTsMarketPageColumnrectangle131;
