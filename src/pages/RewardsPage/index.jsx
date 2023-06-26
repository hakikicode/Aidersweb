import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Compo from "components/Compo";
import Footer from "components/Footer";
import Rew from "components/Rew";

const RewardsPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Compo className="bg-white-A700_01 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <Text
            className="capitalize md:ml-[0] ml-[98px] mt-[158px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800 tracking-[0.16px]"
            size="txtUbuntuMedium32"
          >
            Rewards
          </Text>
          <List
            className="flex flex-col gap-[51px] md:ml-[0] ml-[98px] mt-[210px] md:px-5 w-[91%]"
            orientation="vertical"
          >
            <Rew className="flex md:flex-col flex-row md:gap-10 gap-[88px] items-center justify-start w-[96%] md:w-full" />
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="bg-white-A700_01 border-2 border-solid border-yellow-A400 flex md:flex-1 flex-col items-end justify-start md:mt-0 mt-[29px] p-[27px] sm:px-5 rounded-[10px] w-[45%] md:w-full">
                <div className="flex flex-col justify-start mb-[73px] mr-[29px] w-[84%] md:w-full">
                  <Text
                    className="capitalize md:ml-[0] ml-[86px] text-black-900 text-xl tracking-[0.10px]"
                    size="txtUbuntuMedium20"
                  >
                    Task
                  </Text>
                  <div className="flex flex-row items-start justify-between mt-[9px] w-full">
                    <Text
                      className="capitalize mt-12 text-black-900 text-xl tracking-[0.10px]"
                      size="txtUbuntuMedium20"
                    >
                      Watch Videos
                    </Text>
                    <div className="bg-blue_gray-100 h-[102px] w-[24%]"></div>
                  </div>
                  <Text
                    className="capitalize leading-[40.00px] md:ml-[0] ml-[18px] mt-[126px] text-black-900 text-xl tracking-[0.10px] w-[92%] sm:w-full"
                    size="txtUbuntuMedium20"
                  >
                    For every referral you make on our platform you are reward
                    for it
                  </Text>
                  <Text
                    className="capitalize md:ml-[0] ml-[270px] mt-[163px] text-black-900 text-xl tracking-[0.10px]"
                    size="txtUbuntuMedium20"
                  >
                    $20.00 per Video
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_01 border-2 border-solid border-yellow-A400 flex flex-col justify-start mb-[29px] p-9 sm:px-5 rounded-[10px]">
                <Text
                  className="capitalize ml-36 md:ml-[0] text-black-900 text-xl tracking-[0.10px]"
                  size="txtUbuntuMedium20"
                >
                  Task
                </Text>
                <Text
                  className="capitalize ml-6 md:ml-[0] mt-[91px] text-black-900 text-xl tracking-[0.10px]"
                  size="txtUbuntuMedium20"
                >
                  Surveys
                </Text>
                <Text
                  className="capitalize leading-[40.00px] md:ml-[0] ml-[34px] mr-[68px] mt-[86px] text-black-900 text-xl tracking-[0.10px] w-4/5 sm:w-full"
                  size="txtUbuntuMedium20"
                >
                  For every referral you make on our platform you are reward for
                  it
                </Text>
                <Text
                  className="capitalize mb-[66px] md:ml-[0] ml-[304px] mt-[188px] text-black-900 text-xl tracking-[0.10px]"
                  size="txtUbuntuMedium20"
                >
                  $30.00 per Task
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
              <div className="bg-white-A700_01 border-2 border-solid border-yellow-A400 flex flex-col items-end justify-start md:mt-0 mt-[13px] p-[27px] sm:px-5 rounded-[10px] w-[46%] md:w-full">
                <div className="flex flex-col justify-start mb-[73px] mr-[29px] w-[84%] md:w-full">
                  <Text
                    className="capitalize md:ml-[0] ml-[86px] text-black-900 text-xl tracking-[0.10px]"
                    size="txtUbuntuMedium20"
                  >
                    Task
                  </Text>
                  <div className="flex flex-row items-start justify-between mt-[9px] w-full">
                    <Text
                      className="capitalize mt-[50px] text-black-900 text-xl tracking-[0.10px]"
                      size="txtUbuntuMedium20"
                    >
                      Quizzes
                    </Text>
                    <div className="bg-blue_gray-100 h-[102px] w-[24%]"></div>
                  </div>
                  <Text
                    className="capitalize leading-[40.00px] md:ml-[0] ml-[18px] mt-[126px] text-black-900 text-xl tracking-[0.10px] w-[92%] sm:w-full"
                    size="txtUbuntuMedium20"
                  >
                    For every referral you make on our platform you are reward
                    for it
                  </Text>
                  <Text
                    className="capitalize md:ml-[0] ml-[270px] mt-[163px] text-black-900 text-xl tracking-[0.10px]"
                    size="txtUbuntuMedium20"
                  >
                    $20.00 per Video
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_01 border-2 border-solid border-yellow-A400 flex flex-col justify-start mb-[13px] p-9 sm:px-5 rounded-[10px]">
                <Text
                  className="capitalize ml-36 md:ml-[0] text-black-900 text-xl tracking-[0.10px]"
                  size="txtUbuntuMedium20"
                >
                  Task
                </Text>
                <Text
                  className="capitalize ml-6 md:ml-[0] mt-[89px] text-black-900 text-xl tracking-[0.10px]"
                  size="txtUbuntuMedium20"
                >
                  Reviews
                </Text>
                <Text
                  className="capitalize leading-[40.00px] md:ml-[0] ml-[34px] mr-[68px] mt-[88px] text-black-900 text-xl tracking-[0.10px] w-4/5 sm:w-full"
                  size="txtUbuntuMedium20"
                >
                  For every referral you make on our platform you are reward for
                  it
                </Text>
                <Text
                  className="capitalize mb-[66px] md:ml-[0] ml-[304px] mt-[188px] text-black-900 text-xl tracking-[0.10px]"
                  size="txtUbuntuMedium20"
                >
                  $30.00 per Task
                </Text>
              </div>
            </div>
          </List>
          <Footer className="bg-white-A700 flex items-center justify-center mt-[58px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default RewardsPagePage;
