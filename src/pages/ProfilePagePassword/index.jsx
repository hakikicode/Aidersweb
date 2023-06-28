import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const ProfilePagePasswordPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-green-A100 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700_01 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="bg-white-A700_01 flex flex-col items-start justify-start max-w-[1126px] mt-36 mx-auto p-16 md:px-5 rounded-[60px] w-full">
          <div className="flex flex-col gap-8 items-start justify-start md:ml-[0] ml-[11px] w-auto md:w-full">
            <Text
              className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800 tracking-[0.16px] w-auto"
              size="txtUbuntuMedium32"
            >
              Profile Details
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[272px] items-start justify-between w-auto md:w-full">
                <Text
                  className="common-pointer text-gray-400 text-xl tracking-[0.80px] w-auto"
                  size="txtUbuntuMedium20Gray400"
                  onClick={() => navigate("/profilepagepersonaldata")}
                >
                  Personal Data
                </Text>
                <Text
                  className="text-blue_gray-800 text-xl tracking-[0.80px] w-auto"
                  size="txtUbuntuMedium20"
                >
                  Password
                </Text>
                <Text
                  className="common-pointer text-gray-500 text-xl tracking-[0.80px] w-auto"
                  size="txtUbuntuMedium20Gray500"
                  onClick={() => navigate("/profilepageverificationstatus")}
                >
                  Verification Status
                </Text>
              </div>
              <Img
                className="h-0.5 w-[976px]"
                src="images/img_group2.svg"
                alt="groupTwo"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 h-[395px] md:h-auto items-start justify-start md:ml-[0] ml-[11px] mt-[55px] w-[600px] md:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="text-blue_gray-800 text-xl tracking-[0.80px] w-auto"
                size="txtUbuntuMedium20"
              >
                Current Password
              </Text>
              <Input
                name="password_One"
                placeholder="*********"
                className="font-medium p-0 placeholder:text-blue_gray-800 sm:px-5 text-blue_gray-800 text-left text-xl tracking-[0.80px] w-full"
                wrapClassName="bg-green-A100 flex pb-[25px] pt-5 px-[35px] rounded-[30px] w-full"
                suffix={
                  <Img
                    className="mt-px mb-auto h-6 ml-[35px]"
                    src="images/img_cihide_blue_gray_800.svg"
                    alt="ci:hide"
                  />
                }
              ></Input>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="text-blue_gray-800 text-xl tracking-[0.80px] w-auto"
                size="txtUbuntuMedium20"
              >
                New Password
              </Text>
              <div className="bg-green-A100 flex flex-col items-end justify-start p-[21px] sm:px-5 rounded-[30px] w-full">
                <Img
                  className="h-6 mb-1 mr-[62px] w-6"
                  src="images/img_cihide_blue_gray_800.svg"
                  alt="cihide"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="text-blue_gray-800 text-xl tracking-[0.80px] w-auto"
                size="txtUbuntuMedium20"
              >
                Confirm New Password
              </Text>
              <div className="bg-green-A100 flex flex-col items-end justify-start p-[21px] sm:px-5 rounded-[30px] w-full">
                <Img
                  className="h-6 mb-1 mr-[62px] w-6"
                  src="images/img_cihide_blue_gray_800.svg"
                  alt="cihide_One"
                />
              </div>
            </div>
          </div>
          <Button className="bg-blue_gray-800 cursor-pointer font-bold mb-[124px] min-w-[144px] md:ml-[0] ml-[11px] mt-[104px] py-[17px] rounded-[28px] text-center text-lg text-white-A700_01 tracking-[0.09px]">
            Update
          </Button>
        </div>
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

export default ProfilePagePasswordPage;
