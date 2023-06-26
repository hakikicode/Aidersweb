import React from "react";

const sizeClasses = {
  txtUbuntuMedium18Indigo900: "font-medium font-ubuntu",
  txtSofiaSansRegular14: "font-normal font-sofiasans",
  txtUbuntuRegular20: "font-normal font-ubuntu",
  txtUbuntuMedium64: "font-medium font-ubuntu",
  txtUbuntuMedium20: "font-medium font-ubuntu",
  txtUbuntuBold36: "font-bold font-ubuntu",
  txtUbuntuMedium18Bluegray800: "font-medium font-ubuntu",
  txtUbuntuMedium40: "font-medium font-ubuntu",
  txtUbuntuMedium16WhiteA70001: "font-medium font-ubuntu",
  txtUbuntuLight15: "font-light font-ubuntu",
  txtUbuntuBold20Gray900: "font-bold font-ubuntu",
  txtUbuntuMedium18Gray900: "font-medium font-ubuntu",
  txtUbuntuMedium18Gray600: "font-medium font-ubuntu",
  txtUbuntuMedium16Gray900: "font-medium font-ubuntu",
  txtUbuntuBold20Gray600: "font-bold font-ubuntu",
  txtUbuntuRegular14: "font-normal font-ubuntu",
  txtUbuntuRegular16: "font-normal font-ubuntu",
  txtUbuntuRegular18: "font-normal font-ubuntu",
  txtUbuntuBold20: "font-bold font-ubuntu",
  txtUbuntuMedium14: "font-medium font-ubuntu",
  txtUbuntuMedium36: "font-medium font-ubuntu",
  txtUbuntuRegular16Indigo900: "font-normal font-ubuntu",
  txtUbuntuBold24: "font-bold font-ubuntu",
  txtUbuntuMedium32: "font-medium font-ubuntu",
  txtUbuntuBold18: "font-bold font-ubuntu",
  txtUbuntuRegular18Gray900: "font-normal font-ubuntu",
  txtUbuntuBold16: "font-bold font-ubuntu",
  txtUbuntuMedium18: "font-medium font-ubuntu",
  txtUbuntuMedium17: "font-medium font-ubuntu",
  txtUbuntuMedium16: "font-medium font-ubuntu",
  txtUbuntuRegular14Gray900: "font-normal font-ubuntu",
  txtUbuntuRegular16Gray900: "font-normal font-ubuntu",
  txtUbuntuRegular14Gray600: "font-normal font-ubuntu",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
