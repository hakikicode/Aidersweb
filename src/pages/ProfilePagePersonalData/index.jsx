import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const ProfilePagePersonalDataPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-green-A100 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700_01 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="bg-white-A700_01 flex flex-col items-center justify-start max-w-[1126px] mt-36 mx-auto p-16 md:px-5 rounded-[60px] w-full">
          <div className="flex flex-col items-start justify-start mb-[15px] w-[98%] md:w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
              <Text
                className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800 tracking-[0.16px] w-auto"
                size="txtUbuntuMedium32"
              >
                Profile Details
              </Text>
              <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[272px] items-start justify-between w-auto md:w-full">
                  <Text
                    className="text-blue_gray-800 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20"
                  >
                    Personal Data
                  </Text>
                  <Text
                    className="common-pointer text-gray-500 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20Gray500"
                    onClick={() => navigate("/profilepagepassword")}
                  >
                    Password
                  </Text>
                  <Text
                    className="text-gray-500 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20Gray500"
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
            <div className="flex md:flex-col flex-row md:gap-10 gap-[71px] items-start justify-start mt-[55px] w-[84%] md:w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-[146px]">
                <Text
                  className="text-gray-500 text-xl tracking-[0.80px] w-auto"
                  size="txtUbuntuMedium20Gray500"
                >
                  Profile Picture
                </Text>
                <div className="md:h-[100px] h-[107px] relative w-[81%]">
                  <Img
                    className="absolute h-[100px] left-[0] rounded-[50%] top-[0] w-[100px]"
                    src="images/img_ellipse12.png"
                    alt="ellipseTwelve"
                  />
                  <Button className="absolute bg-gray-400 bottom-[0] flex h-[50px] items-center justify-center p-[13px] right-[0] rounded-[50%] w-[50px]">
                    <Img
                      className="h-6"
                      src="images/img_materialsymbolseditoutline.svg"
                      alt="materialsymbols"
                    />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-8 h-[536px] md:h-auto items-end justify-start w-[600px] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20Gray900"
                  >
                    Names:
                  </Text>
                  <Input
                    name="frame495"
                    placeholder="Benson Judge"
                    className="font-medium p-0 placeholder:text-blue_gray-800 sm:px-5 text-blue_gray-800 text-left text-xl tracking-[0.80px] w-full"
                    wrapClassName="bg-green-A100 px-[35px] py-[23px] rounded-[30px] w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20Gray900"
                  >
                    Username:
                  </Text>
                  <div className="h-[70px] relative w-full">
                    <div className="bg-green-A100 h-[70px] m-auto rounded-[30px] w-full"></div>
                    <Text
                      className="absolute h-max inset-y-[0] left-[12%] my-auto text-blue_gray-800 text-xl tracking-[0.80px]"
                      size="txtUbuntuMedium20"
                    >
                      Ben-J
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20Gray900"
                  >
                    Phone number:
                  </Text>
                  <Text
                    className="bg-green-A100 justify-center sm:px-5 px-[35px] py-[23px] rounded-[30px] text-blue_gray-800 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20"
                  >
                    +44 546 6788 987
                  </Text>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20Gray900"
                  >
                    Email Address:
                  </Text>
                  <Text
                    className="bg-green-A100 justify-center sm:px-5 px-[35px] py-[23px] rounded-[30px] text-blue_gray-800 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20"
                  >
                    bensonjudge@email.com
                  </Text>
                </div>
              </div>
            </div>
            <Button className="bg-blue_gray-800 cursor-pointer font-bold min-w-[207px] md:ml-[0] ml-[218px] mt-[71px] py-[17px] rounded-[28px] text-center text-lg text-white-A700_01 tracking-[0.09px]">
              Update Profile
            </Button>
          </div>
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

export default ProfilePagePersonalDataPage;
