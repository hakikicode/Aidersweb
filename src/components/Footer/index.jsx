import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";

const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
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
                      <Text
                        className="common-pointer text-gray-600 text-sm tracking-[0.04px]"
                        size="txtUbuntuRegular14Gray600"
                        onClick={() => navigate("/nftsmarketpage")}
                      >
                        NFTs
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="common-pointer text-gray-600 text-sm tracking-[0.04px]"
                        size="txtUbuntuRegular14Gray600"
                        onClick={() => navigate("/rewardspage")}
                      >
                        Rewards
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.04px]"
                        size="txtUbuntuRegular14Gray600"
                      >
                        Tasks
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.04px]"
                        size="txtUbuntuRegular14Gray600"
                      >
                        Converters
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.04px]"
                        size="txtUbuntuRegular14Gray600"
                      >
                        Bid Market
                      </Text>
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
                      <Text
                        className="common-pointer text-center text-gray-600 text-sm tracking-[0.04px]"
                        size="txtUbuntuRegular14Gray600"
                        onClick={() => navigate("/aboutuspage")}
                      >
                        About
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-center text-gray-600 text-sm tracking-[0.04px]"
                        size="txtUbuntuRegular14Gray600"
                      >
                        Branding
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-center text-gray-600 text-sm tracking-[0.04px]"
                        size="txtUbuntuRegular14Gray600"
                      >
                        Newsroom
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-center text-gray-600 text-sm tracking-[0.04px]"
                        size="txtUbuntuRegular14Gray600"
                      >
                        Partnerships
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-center text-gray-600 text-sm tracking-[0.04px]"
                        size="txtUbuntuRegular14Gray600"
                      >
                        Charity
                      </Text>
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
                      <Text
                        className="text-gray-600 text-sm tracking-[0.04px]"
                        size="txtUbuntuRegular14Gray600"
                      >
                        Help center
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.04px]"
                        size="txtUbuntuRegular14Gray600"
                      >
                        Contact us
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.04px]"
                        size="txtUbuntuRegular14Gray600"
                      >
                        Privacy & Terms
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.04px]"
                        size="txtUbuntuRegular14Gray600"
                      >
                        Safety information
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.04px]"
                        size="txtUbuntuRegular14Gray600"
                      >
                        Sitemap
                      </Text>
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
                      <Text
                        className="text-gray-600 text-sm tracking-[0.04px]"
                        size="txtUbuntuRegular14Gray600"
                      >
                        Advertisers
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.04px]"
                        size="txtUbuntuRegular14Gray600"
                      >
                        Content Creators
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-600 text-sm tracking-[0.04px]"
                        size="txtUbuntuRegular14Gray600"
                      >
                        Publishers
                      </Text>
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
                <div className="flex flex-row gap-6 items-start justify-start w-auto">
                  <Text
                    className="text-gray-900 text-sm tracking-[0.04px] w-auto"
                    size="txtSofiaSansRegular14"
                  >
                    Help
                  </Text>
                  <Text
                    className="text-gray-900 text-sm tracking-[0.04px] w-auto"
                    size="txtSofiaSansRegular14"
                  >
                    Privacy
                  </Text>
                  <Text
                    className="text-gray-900 text-sm tracking-[0.04px] w-auto"
                    size="txtSofiaSansRegular14"
                  >
                    Terms
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-end justify-center w-auto">
                <Img className="h-6 w-6" src="images/img_plus.svg" alt="plus" />
                <div className="flex flex-col h-5 items-end justify-start w-5">
                  <Img
                    className="h-3.5"
                    src="images/img_twitter.svg"
                    alt="twitter"
                  />
                </div>
                <Img
                  className="h-5 md:h-auto object-cover w-5"
                  src="images/img_socialmedialogo.png"
                  alt="socialmedialogo"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
