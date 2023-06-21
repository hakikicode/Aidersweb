import React from "react";

const sizeClasses = {
  txtUbuntuRegular14: "font-normal font-ubuntu",
  txtUbuntuRegular16: "font-normal font-ubuntu",
  txtUbuntuBold20: "font-bold font-ubuntu",
  txtSofiaSansRegular14: "font-normal font-sofiasans",
  txtUbuntuRegular20: "font-normal font-ubuntu",
  txtUbuntuBold24: "font-bold font-ubuntu",
  txtUbuntuMedium32: "font-medium font-ubuntu",
  txtUbuntuBold36: "font-bold font-ubuntu",
  txtUbuntuMedium64: "font-medium font-ubuntu",
  txtUbuntuMedium18: "font-medium font-ubuntu",
  txtUbuntuMedium17: "font-medium font-ubuntu",
  txtUbuntuMedium16: "font-medium font-ubuntu",
  txtUbuntuRegular14Gray900: "font-normal font-ubuntu",
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
