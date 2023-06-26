import React from "react";

import { Img, Text } from "components";

const NFTsMarketPageColumnone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-6 items-center justify-start md:ml-[0] ml-[19px] w-auto">
          <Text
            className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-gray-600 tracking-[0.18px] w-auto"
            size="txtUbuntuMedium36"
          >
            {props?.username}
          </Text>
          <div className="flex flex-row gap-6 items-start justify-start w-auto">
            <Img
              className="h-20 md:h-auto rounded-[50%] w-20"
              src="images/img_ellipse11.png"
              alt="ellipseEleven"
            />
            <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
              <Text
                className="capitalize text-blue_gray-800 text-lg tracking-[0.09px] w-auto"
                size="txtUbuntuMedium18Bluegray800"
              >
                {props?.userclub}
              </Text>
              <Text
                className="capitalize text-gray-600 text-lg tracking-[0.09px] w-auto"
                size="txtUbuntuMedium18Gray600"
              >
                {props?.usereth}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

NFTsMarketPageColumnone.defaultProps = {
  username: "#1",
  userclub: "Bored Ape Yatch Club",
  usereth: "20.00000ETH",
};

export default NFTsMarketPageColumnone;
