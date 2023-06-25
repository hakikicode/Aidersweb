import React from "react";

import { Text } from "components";

const Rew = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700_01 border-2 border-solid border-yellow-A400 flex flex-col items-end justify-start p-[46px] md:px-10 sm:px-5 rounded-[10px] w-[47%] md:w-full">
          <div className="flex flex-col items-center justify-start mb-[55px] mt-3.5 w-[92%] md:w-full">
            <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
              <Text
                className="capitalize mt-[18px] text-black-900 text-xl tracking-[0.10px]"
                size="txtUbuntuMedium20"
              >
                Referral
              </Text>
              <div className="bg-blue_gray-100 h-[102px] w-[24%]"></div>
            </div>
            <Text
              className="capitalize leading-[40.00px] mt-[126px] text-black-900 text-xl tracking-[0.10px] w-[91%] sm:w-full"
              size="txtUbuntuMedium20"
            >
              For every referral you make on our platform you are reward for it
            </Text>
            <Text
              className="capitalize mt-[163px] text-black-900 text-xl tracking-[0.10px]"
              size="txtUbuntuMedium20"
            >
              $10.00 per referral
            </Text>
          </div>
        </div>
        <div className="bg-white-A700_01 border-2 border-solid border-yellow-A400 flex flex-col justify-start p-9 sm:px-5 rounded-[10px]">
          <Text
            className="capitalize ml-36 md:ml-[0] text-black-900 text-xl tracking-[0.10px]"
            size="txtUbuntuMedium20"
          >
            Task
          </Text>
          <Text
            className="capitalize ml-6 md:ml-[0] mt-[90px] text-black-900 text-xl tracking-[0.10px]"
            size="txtUbuntuMedium20"
          >
            Affiliate Marketing{" "}
          </Text>
          <Text
            className="capitalize leading-[40.00px] md:ml-[0] ml-[34px] mr-[68px] mt-[87px] text-black-900 text-xl tracking-[0.10px] w-4/5 sm:w-full"
            size="txtUbuntuMedium20"
          >
            For every referral you make on our platform you are reward for it
          </Text>
          <Text
            className="capitalize mb-[66px] md:ml-[0] ml-[304px] mt-[188px] text-black-900 text-xl tracking-[0.10px]"
            size="txtUbuntuMedium20"
          >
            $50.00 per Task
          </Text>
        </div>
      </div>
    </>
  );
};

Rew.defaultProps = {};

export default Rew;
