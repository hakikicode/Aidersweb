import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Home1 from "components/Home1";

const FAQsPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <Home1 className="bg-white-A700_01 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col gap-12 items-center justify-start max-w-[1242px] mt-36 mx-auto md:px-5 w-full">
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
