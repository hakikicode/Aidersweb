import React from "react";

import { Img, Text } from "components";

const Comp = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
          src="images/img_ellipse10.png"
          alt="ellipseTen"
        />
        <Text
          className="capitalize text-base text-gray-900 tracking-[0.08px] w-auto"
          size="txtUbuntuRegular16Gray900"
        >
          Artwork
        </Text>
      </div>
    </>
  );
};

Comp.defaultProps = {};

export default Comp;
