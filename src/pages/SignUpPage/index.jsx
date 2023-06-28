import React from "react";

import { useNavigate } from "react-router-dom";

import { loginDeviceAuth, registerDeviceAuth } from "service/api";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import LandingPageHeader from "components/LandingPageHeader";

const SignUpPagePage = () => {
  const [login1, setLogin1] = React.useState();
  const [register, setRegister] = React.useState();
  const navigate = useNavigate();

  function connectwallet() {
    const req = {};

    loginDeviceAuth(req)
      .then((res) => {
        setLogin1(res?.data);

        navigate("/nftsmarketpage");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function submit1() {
    const req = {};

    registerDeviceAuth(req)
      .then((res) => {
        setRegister(res?.data);

        navigate("/nftsmarketpage");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <LandingPageHeader
          className="bg-white-A700_01 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[26px] sm:px-5 w-full"
          onClick={() => connectwallet()}
        />
        <div className="flex flex-col md:gap-10 gap-[104px] items-center justify-start max-w-[1102px] mt-[140px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[88px] items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <Text
                className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-800 tracking-[0.20px] w-auto"
                size="txtUbuntuMedium40"
              >
                Sign Up
              </Text>
              <Text
                className="text-gray-900 text-xl tracking-[0.10px] w-auto"
                size="txtUbuntuRegular20"
              >
                Sign up now by providing the necessary information and enjoy
                awesome rewards through performing easy tasks
              </Text>
            </div>
            <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
              <Text
                className="bg-white-A700_01 border border-blue_gray-800 border-solid justify-center sm:px-5 px-[35px] py-[25px] rounded-[30px] text-base text-gray-500 text-shadow-ts tracking-[0.08px] w-auto"
                size="txtUbuntuMedium16Gray500"
              >
                {login1?.data?.id}
              </Text>
              <Text
                className="bg-white-A700_01 border border-blue_gray-800 border-solid justify-center sm:px-5 px-[35px] py-[25px] rounded-[30px] text-base text-gray-500 text-shadow-ts tracking-[0.08px] w-auto"
                size="txtUbuntuMedium16Gray500"
              >
                {register?.data?.password}
              </Text>
              <Text
                className="bg-white-A700_01 border border-blue_gray-800 border-solid justify-center sm:px-5 px-[35px] py-[25px] rounded-[30px] text-base text-gray-500 text-shadow-ts tracking-[0.08px] w-auto"
                size="txtUbuntuMedium16Gray500"
              >
                Phone number
              </Text>
              <Text
                className="bg-white-A700_01 border border-blue_gray-800 border-solid justify-center sm:px-5 px-[35px] py-[25px] rounded-[30px] text-base text-gray-500 text-shadow-ts tracking-[0.08px] w-auto"
                size="txtUbuntuMedium16Gray500"
              >
                Email Address
              </Text>
              <div className="bg-white-A700_01 border border-blue_gray-800 border-solid flex flex-row md:gap-10 items-center justify-between p-[23px] sm:px-5 rounded-[30px] shadow-bs2 w-full">
                <Text
                  className="ml-[49px] text-base text-gray-500 tracking-[0.08px]"
                  size="txtUbuntuMedium16Gray500"
                >
                  Password
                </Text>
                <Img
                  className="h-6 mr-[49px] w-6"
                  src="images/img_cihide_gray_500.svg"
                  alt="cihide"
                />
              </div>
              <div className="bg-white-A700_01 border border-blue_gray-800 border-solid flex flex-row md:gap-10 items-center justify-between p-[23px] sm:px-5 rounded-[30px] shadow-bs2 w-full">
                <Text
                  className="ml-[49px] text-base text-gray-500 tracking-[0.08px]"
                  size="txtUbuntuMedium16Gray500"
                >
                  Confirm Password
                </Text>
                <Img
                  className="h-6 mr-[49px] w-6"
                  src="images/img_cihide_gray_500.svg"
                  alt="cihide_One"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[72px] items-center justify-start w-auto sm:w-full">
            <Button
              className="common-pointer bg-blue_gray-800 cursor-pointer font-bold min-w-[142px] py-[17px] rounded-[28px] text-center text-lg text-white-A700_01 tracking-[0.09px]"
              onClick={() => navigate("/signupinoverlay")}
            >
              Submit
            </Button>
            <div className="flex flex-col gap-14 items-center justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-4 items-center justify-center w-auto">
                <Text
                  className="text-base text-gray-500 tracking-[0.08px] w-auto"
                  size="txtUbuntuMedium16Gray500"
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
                      size="txtUbuntuMedium16"
                    >
                      Apple
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700_01 border border-blue_gray-800 border-solid flex flex-col h-[100px] items-center justify-start p-[18px] rounded-[50%] w-[100px]">
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-8 rounded-[50%] w-8"
                      src="images/img_google.svg"
                      alt="google"
                    />
                    <Text
                      className="text-base text-gray-900 tracking-[0.08px] w-auto"
                      size="txtUbuntuMedium16"
                    >
                      Google
                    </Text>
                  </div>
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
                      size="txtUbuntuMedium16"
                    >
                      Facebook
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-white-A700 flex items-center justify-center mt-[212px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default SignUpPagePage;
