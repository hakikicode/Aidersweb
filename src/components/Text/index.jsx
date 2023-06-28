import React from "react";

const sizeClasses = {
  txtUbuntuRegular14WhiteA70001: "font-normal font-ubuntu",
  txtSofiaSansRegular14: "font-normal font-sofiasans",
  txtUbuntuMedium18Indigo900: "font-medium font-ubuntu",
  txtUbuntuMedium24: "font-medium font-ubuntu",
  txtUbuntuRegular20: "font-normal font-ubuntu",
  txtUbuntuBold96: "font-bold font-ubuntu",
  txtUbuntuMedium64: "font-medium font-ubuntu",
  txtUbuntuBold36: "font-bold font-ubuntu",
  txtUbuntuMedium20: "font-medium font-ubuntu",
  txtUbuntuMedium18Bluegray800: "font-medium font-ubuntu",
  txtUbuntuMedium40: "font-medium font-ubuntu",
  txtUbuntuMedium16WhiteA70001: "font-medium font-ubuntu",
  txtUbuntuMedium20Gray500: "font-medium font-ubuntu",
  txtUbuntuLight15: "font-light font-ubuntu",
  txtUbuntuMedium20Gray900: "font-medium font-ubuntu",
  txtUbuntuMedium48: "font-medium font-ubuntu",
  txtUbuntuBold20Gray900: "font-bold font-ubuntu",
  txtUbuntuMedium16Gray500: "font-medium font-ubuntu",
  txtUbuntuMedium18Gray900: "font-medium font-ubuntu",
  txtUbuntuBold20Gray500: "font-bold font-ubuntu",
  txtUbuntuMedium20Gray400: "font-medium font-ubuntu",
  txtUbuntuRegular14: "font-normal font-ubuntu",
  txtUbuntuRegular16: "font-normal font-ubuntu",
  txtUbuntuMedium18Gray500: "font-medium font-ubuntu",
  txtUbuntuRegular18: "font-normal font-ubuntu",
  txtUbuntuBold20: "font-bold font-ubuntu",
  txtUbuntuMedium14: "font-medium font-ubuntu",
  txtUbuntuMedium36: "font-medium font-ubuntu",
  txtUbuntuRegular20GreenA700: "font-normal font-ubuntu",
  txtUbuntuRegular16Indigo900: "font-normal font-ubuntu",
  txtUbuntuBold24: "font-bold font-ubuntu",
  txtUbuntuMedium32: "font-medium font-ubuntu",
  txtUbuntuBold22: "font-bold font-ubuntu",
  txtUbuntuRegular16Gray400: "font-normal font-ubuntu",
  txtUbuntuBold18: "font-bold font-ubuntu",
  txtUbuntuRegular18Gray900: "font-normal font-ubuntu",
  txtUbuntuMedium19: "font-medium font-ubuntu",
  txtUbuntuBold16: "font-bold font-ubuntu",
  txtUbuntuMedium18: "font-medium font-ubuntu",
  txtUbuntuMedium17: "font-medium font-ubuntu",
  txtUbuntuMedium16: "font-medium font-ubuntu",
  txtUbuntuRegular14Gray900: "font-normal font-ubuntu",
  txtUbuntuRegular16Gray900: "font-normal font-ubuntu",
  txtUbuntuRegular20RedA700: "font-normal font-ubuntu",
  txtUbuntuRegular18Gray500: "font-normal font-ubuntu",
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
