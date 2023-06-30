import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const FAQsPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <header className="bg-white-A700_01 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-1 md:flex-col flex-row gap-12 items-center justify-start mb-[11px] ml-24 md:ml-[0] md:mt-0 mt-10 w-auto md:w-full">
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
                <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                  <a
                    href="javascript:"
                    className="text-base text-gray-900 tracking-[0.08px] w-auto"
                  >
                    <Text size="txtUbuntuMedium16">FAQs</Text>
                  </a>
                  <Line className="bg-blue_gray-800 h-[5px] rounded-sm w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-start mb-[46px] md:ml-[0] ml-[145px] mr-24 md:mt-0 mt-[77px] w-auto">
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
        <div className="flex flex-col gap-12 items-start justify-start max-w-[1242px] mt-36 mx-auto md:px-5 w-full">
          <Text
            className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800 tracking-[0.16px] w-auto"
            size="txtUbuntuMedium32"
          >
            Frequently asked questions
          </Text>
          <Text
            className="capitalize leading-[40.00px] text-black-900 text-lg tracking-[0.09px]"
            size="txtUbuntuRegular18"
          >
            <>
              1. How does the Aider app work?
              <br /> - The Aider app is a platform where users can earn rewards
              by completing various tasks. These tasks can include watching
              videos, taking surveys, downloading apps, or participating in
              promotional offers. Users accumulate points for each completed
              task, which can then be exchanged for rewards such as gift cards,
              discounts, or cash.
              <br />
              <br />
              2. How can I download the Aider app?
              <br /> - The Aider app can be downloaded for free from the App
              Store or Google Play Store. Simply search for &quot;Aider&quot;
              and click on the download button to install it on your mobile
              device.
              <br />
              <br />
              3. Is the Aider app available worldwide?
              <br /> - Yes, the Aider app is available for users around the
              world. However, the availability of tasks and rewards may vary
              depending on your location.
              <br />
              <br />
              4. How do I create an account on the Aider app?
              <br /> - To create an account on the Aider app, simply open the
              app after downloading it and click on the &quot;Sign Up&quot; or
              &quot;Create Account&quot; button. You will be prompted to enter
              your email address and create a password. Once you have completed
              the registration process, you can start earning rewards by
              completing tasks.
              <br />
              <br />
              5. How many points do I need to earn before I can redeem rewards?
              <br /> - The number of points required to redeem rewards varies
              depending on the specific reward you choose. Some rewards may
              require a higher number of points, while others may be available
              at a lower point threshold. You can view the available rewards and
              their corresponding point requirements within the app.
              <br />
              <br />
              6. How long does it take to receive rewards after redemption?
              <br /> - The time it takes to receive your rewards after
              redemption may vary depending on the specific reward and the
              platform used for redemption. In most cases, rewards are delivered
              within a few business days, but it could take up to a couple of
              weeks for certain rewards to be processed and delivered.
              <br />
              <br />
              7. Can I use the Aider app on multiple devices?
              <br /> - Yes, you can use the Aider app on multiple devices as
              long as you log in with the same account credentials. Your account
              and points will be synchronized across all devices, allowing you
              to earn rewards and track your progress seamlessly.
              <br />
              <br />
              8. Are there any age restrictions for using the Aider app?
              <br /> - Yes, in order to use the Aider app, you must be at least
              18 years old or the age of majority in your jurisdiction. The app
              is designed for adult users only.
            </>
          </Text>
        </div>
        <Footer className="bg-white-A700 flex items-center justify-center mt-52 md:px-5 w-full" />
      </div>
    </>
  );
};

export default FAQsPagePage;
