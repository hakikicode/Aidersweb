import React from "react";

import { Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mx-auto my-12 w-[85%]">
          <ul className="flex flex-col items-center justify-center w-full common-column-list">
            <li>
              <Line className="bg-gray-700_3f h-px" />
            </li>
            <li>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-10">
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
                <ul className="flex flex-col gap-3 items-start justify-start w-[59%] md:w-full common-column-list">
                  <li>
                    <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full common-column-list">
                      <li>
                        <Text
                          className="text-[17px] text-gray-900 tracking-[0.09px]"
                          size="txtUbuntuMedium17"
                        >
                          Services
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="md:ml-[0] ml-[154px] text-[17px] text-center text-gray-900 tracking-[0.09px]"
                          size="txtUbuntuMedium17"
                        >
                          About us
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="md:ml-[0] ml-[89px] text-[17px] text-gray-900 tracking-[0.09px]"
                          size="txtUbuntuMedium17"
                        >
                          Help and support
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="md:ml-[0] ml-[69px] text-[17px] text-gray-900 tracking-[0.09px]"
                          size="txtUbuntuMedium17"
                        >
                          Community
                        </Text>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full common-column-list">
                      <li>
                        <Text
                          className="text-gray-600 text-sm tracking-[0.04px]"
                          size="txtUbuntuRegular14"
                        >
                          NFTs
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="md:ml-[0] ml-[190px] text-center text-gray-600 text-sm tracking-[0.04px]"
                          size="txtUbuntuRegular14"
                        >
                          About
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="md:ml-[0] ml-[119px] text-gray-600 text-sm tracking-[0.04px]"
                          size="txtUbuntuRegular14"
                        >
                          Help center
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="md:ml-[0] ml-[132px] text-gray-600 text-sm tracking-[0.04px]"
                          size="txtUbuntuRegular14"
                        >
                          Advertisers
                        </Text>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full common-column-list">
                      <li>
                        <Text
                          className="text-gray-600 text-sm tracking-[0.04px]"
                          size="txtUbuntuRegular14"
                        >
                          Rewards
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="md:ml-[0] ml-[167px] text-center text-gray-600 text-sm tracking-[0.04px]"
                          size="txtUbuntuRegular14"
                        >
                          Branding
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="md:ml-[0] ml-[101px] text-gray-600 text-sm tracking-[0.04px]"
                          size="txtUbuntuRegular14"
                        >
                          Contact us
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="md:ml-[0] ml-[139px] text-gray-600 text-sm tracking-[0.04px]"
                          size="txtUbuntuRegular14"
                        >
                          Content Creators
                        </Text>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full common-column-list">
                      <li>
                        <Text
                          className="text-gray-600 text-sm tracking-[0.04px]"
                          size="txtUbuntuRegular14"
                        >
                          Tasks
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="md:ml-[0] ml-[186px] text-center text-gray-600 text-sm tracking-[0.04px]"
                          size="txtUbuntuRegular14"
                        >
                          Newsroom
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="md:ml-[0] ml-[90px] text-gray-600 text-sm tracking-[0.04px]"
                          size="txtUbuntuRegular14"
                        >
                          Privacy & Terms
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="md:ml-[0] ml-[106px] text-gray-600 text-sm tracking-[0.04px]"
                          size="txtUbuntuRegular14"
                        >
                          Publishers
                        </Text>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[497px] mt-[13px]">
                <Text
                  className="text-gray-600 text-sm tracking-[0.04px]"
                  size="txtUbuntuRegular14"
                >
                  Converters
                </Text>
                <Text
                  className="sm:ml-[0] ml-[152px] text-center text-gray-600 text-sm tracking-[0.04px]"
                  size="txtUbuntuRegular14"
                >
                  Partnerships
                </Text>
                <Text
                  className="sm:ml-[0] ml-[78px] text-gray-600 text-sm tracking-[0.04px]"
                  size="txtUbuntuRegular14"
                >
                  Safety information
                </Text>
              </div>
            </li>
            <li>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[497px] mt-[13px]">
                <Text
                  className="text-gray-600 text-sm tracking-[0.04px]"
                  size="txtUbuntuRegular14"
                >
                  Bid Market
                </Text>
                <Text
                  className="sm:ml-[0] ml-[152px] text-center text-gray-600 text-sm tracking-[0.04px]"
                  size="txtUbuntuRegular14"
                >
                  Charity
                </Text>
                <Text
                  className="sm:ml-[0] ml-[113px] text-gray-600 text-sm tracking-[0.04px]"
                  size="txtUbuntuRegular14"
                >
                  Sitemap
                </Text>
              </div>
            </li>
            <li>
              <Line className="bg-gray-700_3f h-px mt-14" />
            </li>
            <li>
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[43px] mt-10 md:w-full">
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
                  <Img
                    className="h-6 w-6"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
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
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
