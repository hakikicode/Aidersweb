import React from "react";

import { useNavigate } from "react-router-dom";

import { loginDeviceAuth } from "service/api";

import { Button, Img, Line, Text } from "components";
import Comp from "components/Comp";
import Footer from "components/Footer";
import LandingPageHeader from "components/LandingPageHeader";

const SignInPagePage = () => {
  const [login, setLogin] = React.useState();
  const navigate = useNavigate();

  function submit() {
    const req = {};

    loginDeviceAuth(req)
      .then((res) => {
        setLogin(res?.data);

        navigate("/nftsmarketpage");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <LandingPageHeader className="bg-white-A700_01 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[26px] sm:px-5 w-full" />
        <div className="flex flex-col md:gap-10 gap-[104px] items-center justify-start max-w-[1102px] mt-36 mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[88px] items-center justify-start w-auto md:w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
              <Text
                className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-800 tracking-[0.20px] w-auto"
                size="txtUbuntuMedium40"
              >
                Sign In
              </Text>
              <Text
                className="text-gray-900 text-xl tracking-[0.10px] w-auto"
                size="txtUbuntuRegular20"
              >
                Sign in now and continue to enjoy awesome rewards through
                performing easy tasks
              </Text>
            </div>
            <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
              <Text
                className="bg-white-A700_01 border border-blue_gray-800 border-solid justify-center sm:px-5 px-[35px] py-[25px] rounded-[30px] text-base text-gray-600 text-shadow-ts tracking-[0.08px] w-auto"
                size="txtUbuntuMedium16"
              >
                Username
              </Text>
              <Text
                className="bg-white-A700_01 border border-blue_gray-800 border-solid justify-center sm:px-5 px-[35px] py-[25px] rounded-[30px] text-base text-gray-600 text-shadow-ts tracking-[0.08px] w-auto"
                size="txtUbuntuMedium16"
              >
                {login?.data?.email}
              </Text>
              <div className="bg-white-A700_01 border border-blue_gray-800 border-solid flex flex-row md:gap-10 items-center justify-between p-[23px] sm:px-5 rounded-[30px] shadow-bs2 w-full">
                <Text
                  className="ml-[49px] text-base text-gray-600 tracking-[0.08px]"
                  size="txtUbuntuMedium16"
                >
                  Password
                </Text>
                <Img
                  className="h-6 mr-[49px] w-6"
                  src="images/img_cihide.svg"
                  alt="cihide"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[72px] sm:h-auto items-center justify-start w-[396px] sm:w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-auto">
              <Button
                className="common-pointer bg-blue_gray-800 cursor-pointer font-bold min-w-[142px] py-[17px] rounded-[28px] text-center text-lg text-white-A700_01 tracking-[0.09px]"
                onClick={() => {
                  submit();
                }}
              >
                Submit
              </Button>
              <a
                href="javascript:"
                className="text-blue_gray-800 text-lg tracking-[0.09px] w-auto"
              >
                <Text size="txtUbuntuMedium18Bluegray800">Forgot Password</Text>
              </a>
            </div>
            <div className="flex flex-col gap-14 items-center justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-4 items-center justify-center w-auto">
                <Text
                  className="text-base text-gray-600 tracking-[0.08px] w-auto"
                  size="txtUbuntuMedium16"
                >
                  OR
                </Text>
                <Text
                  className="text-gray-900 text-lg tracking-[0.09px] w-auto"
                  size="txtUbuntuMedium18Gray900"
                >
                  Continue with
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-12 items-center justify-center w-auto sm:w-full">
                <div className="bg-white-A700_01 border border-blue_gray-800 border-solid flex flex-col h-[100px] items-center justify-start p-[18px] rounded-[50%] w-[100px]">
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <div className="md:h-7 h-8 p-0.5 relative w-8">
                      <Img
                        className="h-7 m-auto w-7"
                        src="images/img_globe.svg"
                        alt="globe"
                      />
                      <Img
                        className="absolute h-4 inset-x-[0] mx-auto top-[22%]"
                        src="images/img_volume.svg"
                        alt="volume"
                      />
                    </div>
                    <Text
                      className="text-base text-gray-900 tracking-[0.08px] w-auto"
                      size="txtUbuntuMedium16Gray900"
                    >
                      Apple
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700_01 border border-blue_gray-800 border-solid flex flex-col h-[100px] items-center justify-start p-[18px] rounded-[50%] w-[100px]">
                  <Comp className="flex flex-col gap-2 items-center justify-start w-auto" />
                </div>
                <div className="bg-white-A700_01 border border-blue_gray-800 border-solid flex flex-col h-[100px] items-center justify-start p-3.5 rounded-[50%] w-[100px]">
                  <div className="flex flex-col gap-2 items-center justify-start my-1 w-auto">
                    <div className="bg-blue-A400 flex flex-col h-8 items-center justify-start p-2 rounded-[50%] w-8">
                      <Img
                        className="h-4 w-4"
                        src="images/img_plus_white_a700.svg"
                        alt="plus"
                      />
                    </div>
                    <Text
                      className="text-base text-gray-900 tracking-[0.08px] w-auto"
                      size="txtUbuntuMedium16Gray900"
                    >
                      Facebook
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-white-A700 flex items-center justify-center mt-52 md:px-5 w-full" />
      </div>
    </>
  );
};

export default SignInPagePage;
