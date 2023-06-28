import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const RewardsPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <header className="bg-white-A700_01 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-1 md:flex-col flex-row gap-12 items-center justify-start mb-[26px] ml-24 md:ml-[0] md:mt-0 mt-10 w-auto md:w-full">
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
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-start mb-[46px] md:ml-[0] ml-[196px] mr-24 md:mt-0 mt-[77px] w-auto">
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
        <div className="flex flex-col gap-12 items-start justify-start max-w-[1220px] mt-36 mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
            <Text
              className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800 tracking-[0.16px] w-auto"
              size="txtUbuntuMedium32"
            >
              Rewards
            </Text>
            <Text
              className="capitalize text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[0.12px] w-auto"
              size="txtUbuntuMedium24"
            >
              Complete easy tasks on our platform and get these amazing rewards
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="md:gap-5 gap-[272px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700_01 border-2 border-solid border-yellow-A400 flex flex-1 flex-col items-start justify-end p-[38px] sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-row gap-[136px] items-center justify-between md:ml-[0] ml-[34px] mt-[18px] w-auto">
                  <Text
                    className="capitalize text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl tracking-[0.12px] w-auto"
                    size="txtUbuntuBold24"
                  >
                    Referral
                  </Text>
                  <Img
                    className="h-[98px] md:h-auto object-cover w-[98px]"
                    src="images/img_refer6164061.png"
                    alt="refer6164061"
                  />
                </div>
                <Text
                  className="capitalize leading-[40.00px] md:ml-[0] ml-[34px] mt-12 text-center text-gray-500 text-lg tracking-[0.09px] w-[83%] sm:w-full"
                  size="txtUbuntuMedium18Gray500"
                >
                  For every referral you make on our platform you are reward for
                  it
                </Text>
                <Text
                  className="capitalize leading-[40.00px] md:ml-[0] ml-[242px] mt-32 text-center text-gray-900 text-xl tracking-[0.10px] w-[31%] sm:w-full"
                  size="txtUbuntuMedium20Gray900"
                >
                  <span className="md:text-[22px] sm:text-xl text-gray-900 font-ubuntu text-2xl font-bold">
                    10.00 ANT
                  </span>
                  <span className="text-gray-900 font-ubuntu font-normal">
                    {" "}
                  </span>
                  <span className="text-gray-900 font-ubuntu font-normal">
                    per referral
                  </span>
                </Text>
              </div>
              <div className="bg-white-A700_01 border-2 border-solid border-yellow-A400 flex flex-1 flex-col items-start justify-end p-[38px] sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-col items-end justify-start ml-2.5 md:ml-[0] mt-[18px] w-[89%] md:w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="capitalize text-[22px] text-blue_gray-800 sm:text-lg md:text-xl tracking-[0.11px] w-auto"
                        size="txtUbuntuBold22"
                      >
                        Aiders Task Reward
                      </Text>
                      <Text
                        className="capitalize text-[19px] text-gray-900 tracking-[0.10px] w-auto"
                        size="txtUbuntuMedium19"
                      >
                        Affiliate Marketing{" "}
                      </Text>
                    </div>
                    <Img
                      className="h-[98px] md:h-auto object-cover w-[98px]"
                      src="images/img_monetization7245704.png"
                      alt="monetization724"
                    />
                  </div>
                  <Text
                    className="capitalize leading-[40.00px] mt-12 text-center text-gray-500 text-lg tracking-[0.09px] w-[94%] sm:w-full"
                    size="txtUbuntuMedium18Gray500"
                  >
                    For every Affiliate marketing task you perform on our
                    platform you are reward for it
                  </Text>
                  <Text
                    className="capitalize leading-[40.00px] mt-[88px] text-center text-gray-900 text-xl tracking-[0.10px] w-[36%] sm:w-full"
                    size="txtUbuntuMedium20Gray900"
                  >
                    <span className="md:text-[22px] sm:text-xl text-blue_gray-800 font-ubuntu text-2xl font-bold">
                      50.00 ANT{" "}
                    </span>
                    <span className="text-gray-900 font-ubuntu font-normal">
                      per Task
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_01 border-2 border-solid border-yellow-A400 flex flex-1 flex-col items-start justify-end p-[38px] sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-col items-end justify-start ml-2.5 md:ml-[0] mt-[18px] w-[89%] md:w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="capitalize text-[22px] text-blue_gray-800 sm:text-lg md:text-xl tracking-[0.11px] w-auto"
                        size="txtUbuntuBold22"
                      >
                        Aiders Task Reward
                      </Text>
                      <Text
                        className="capitalize text-[19px] text-gray-900 tracking-[0.10px] w-auto"
                        size="txtUbuntuMedium19"
                      >
                        Surveys
                      </Text>
                    </div>
                    <Img
                      className="h-[98px] md:h-auto object-cover w-[98px]"
                      src="images/img_review707675.png"
                      alt="review707675"
                    />
                  </div>
                  <Text
                    className="capitalize leading-[40.00px] mt-12 text-center text-gray-500 text-lg tracking-[0.09px] w-[94%] sm:w-full"
                    size="txtUbuntuMedium18Gray500"
                  >
                    For every survey task you perform on our platform you are
                    reward for it
                  </Text>
                  <Text
                    className="capitalize leading-[40.00px] mt-32 text-center text-gray-900 text-xl tracking-[0.10px] w-[36%] sm:w-full"
                    size="txtUbuntuMedium20Gray900"
                  >
                    <span className="md:text-[22px] sm:text-xl text-blue_gray-800 font-ubuntu text-2xl font-bold">
                      30.00 ANT{" "}
                    </span>
                    <span className="text-gray-900 font-ubuntu font-normal">
                      per task
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_01 border-2 border-solid border-yellow-A400 flex flex-1 flex-col items-start justify-end p-[38px] sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-col items-end justify-start ml-2.5 md:ml-[0] mt-[18px] w-[89%] md:w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="capitalize text-[22px] text-blue_gray-800 sm:text-lg md:text-xl tracking-[0.11px] w-auto"
                        size="txtUbuntuBold22"
                      >
                        Aiders Task Reward
                      </Text>
                      <Text
                        className="capitalize text-[19px] text-gray-900 tracking-[0.10px] w-auto"
                        size="txtUbuntuMedium19"
                      >
                        watch videos
                      </Text>
                    </div>
                    <Img
                      className="h-[98px] md:h-auto object-cover w-[98px]"
                      src="images/img_videoclip5809143.png"
                      alt="videoclip580914"
                    />
                  </div>
                  <Text
                    className="capitalize leading-[40.00px] mt-12 text-center text-gray-500 text-lg tracking-[0.09px] w-[94%] sm:w-full"
                    size="txtUbuntuMedium18Gray500"
                  >
                    For every video you watch on our platform you are reward for
                    it
                  </Text>
                  <Text
                    className="capitalize leading-[40.00px] mt-32 text-center text-gray-900 text-xl tracking-[0.10px] w-[36%] sm:w-full"
                    size="txtUbuntuMedium20Gray900"
                  >
                    <span className="md:text-[22px] sm:text-xl text-blue_gray-800 font-ubuntu text-2xl font-bold">
                      20.00 ANT{" "}
                    </span>
                    <span className="text-gray-900 font-ubuntu font-normal">
                      per video
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_01 border-2 border-solid border-yellow-A400 flex flex-1 flex-col items-start justify-end p-[38px] sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-col items-end justify-start ml-2.5 md:ml-[0] mt-[18px] w-[89%] md:w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="capitalize text-[22px] text-blue_gray-800 sm:text-lg md:text-xl tracking-[0.11px] w-auto"
                        size="txtUbuntuBold22"
                      >
                        Aiders Task Reward
                      </Text>
                      <Text
                        className="capitalize text-[19px] text-gray-900 tracking-[0.10px] w-auto"
                        size="txtUbuntuMedium19"
                      >
                        Give Reviews
                      </Text>
                    </div>
                    <Img
                      className="h-[98px] md:h-auto object-cover w-[98px]"
                      src="images/img_feedback1208703.png"
                      alt="feedback1208703"
                    />
                  </div>
                  <Text
                    className="capitalize leading-[40.00px] mt-12 text-center text-gray-500 text-lg tracking-[0.09px] w-[94%] sm:w-full"
                    size="txtUbuntuMedium18Gray500"
                  >
                    For every review task you perform on our platform you are
                    reward for it
                  </Text>
                  <Text
                    className="capitalize leading-[40.00px] mt-32 text-center text-gray-900 text-xl tracking-[0.10px] w-[36%] sm:w-full"
                    size="txtUbuntuMedium20Gray900"
                  >
                    <span className="md:text-[22px] sm:text-xl text-blue_gray-800 font-ubuntu text-2xl font-bold">
                      30.00 ANT{" "}
                    </span>
                    <span className="text-gray-900 font-ubuntu font-normal">
                      per task
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_01 border-2 border-solid border-yellow-A400 flex flex-1 flex-col items-start justify-end p-[38px] sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-col items-end justify-start ml-2.5 md:ml-[0] mt-[18px] w-[89%] md:w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="capitalize text-[22px] text-blue_gray-800 sm:text-lg md:text-xl tracking-[0.11px] w-auto"
                        size="txtUbuntuBold22"
                      >
                        Aiders Task Reward
                      </Text>
                      <Text
                        className="capitalize text-[19px] text-gray-900 tracking-[0.10px] w-auto"
                        size="txtUbuntuMedium19"
                      >
                        Answer Quizzes
                      </Text>
                    </div>
                    <Img
                      className="h-[98px] md:h-auto object-cover w-[98px]"
                      src="images/img_tasklist4861134.png"
                      alt="tasklist4861134"
                    />
                  </div>
                  <Text
                    className="capitalize leading-[40.00px] mt-12 text-center text-gray-500 text-lg tracking-[0.09px] w-[94%] sm:w-full"
                    size="txtUbuntuMedium18Gray500"
                  >
                    For every review task you perform on our platform you are
                    reward for it
                  </Text>
                  <Text
                    className="capitalize leading-[40.00px] mt-32 text-center text-gray-900 text-xl tracking-[0.10px] w-[36%] sm:w-full"
                    size="txtUbuntuMedium20Gray900"
                  >
                    <span className="md:text-[22px] sm:text-xl text-blue_gray-800 font-ubuntu text-2xl font-bold">
                      10.00 ANT{" "}
                    </span>
                    <span className="text-gray-900 font-ubuntu font-normal">
                      per task
                    </span>
                  </Text>
                </div>
              </div>
            </div>
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

export default RewardsPagePage;
