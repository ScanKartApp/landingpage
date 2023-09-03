import React from "react";

const sizeClasses = {
  txtInterMedium12Gray600cc: "font-inter font-medium",
  txtInterMedium20Bluegray100a5: "font-inter font-medium",
  txtInterSemiBold3926: "font-inter font-semibold",
  txtInterMedium24: "font-inter font-medium",
  txtInterMedium14Gray600: "font-inter font-medium",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterMedium12RedA400: "font-inter font-medium",
  txtInterBold84: "font-bold font-inter",
  txtInterMedium12Gray600: "font-inter font-medium",
  txtInterBold64: "font-bold font-inter",
  txtInterMedium13Gray90001: "font-inter font-medium",
  txtInterMedium30: "font-inter font-medium",
  txtInterSemiBold32: "font-inter font-semibold",
  txtInterBold60: "font-bold font-inter",
  txtArchivoRomanMedium18: "font-archivo font-medium",
  txtInterBold60Gray10002: "font-bold font-inter",
  txtInterMedium16Gray900: "font-inter font-medium",
  txtInterRegular24: "font-inter font-normal",
  txtInterMedium14Red800: "font-inter font-medium",
  txtInterRegular28: "font-inter font-normal",
  txtInterMedium18Red800: "font-inter font-medium",
  txtInterMedium18: "font-inter font-medium",
  txtInterRegular10: "font-inter font-normal",
  txtInterSemiBold36: "font-inter font-semibold",
  txtInterMedium12: "font-inter font-medium",
  txtInterMedium13: "font-inter font-medium",
  txtInterMedium32: "font-inter font-medium",
  txtInterMedium10: "font-inter font-medium",
  txtInterSemiBold13: "font-inter font-semibold",
  txtInterMedium11: "font-inter font-medium",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterBold56: "font-bold font-inter",
  txtInterMedium14: "font-inter font-medium",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterMedium8: "font-inter font-medium",
  txtInterMedium24Bluegray10099: "font-inter font-medium",
  txtInterSemiBold24Gray900: "font-inter font-semibold",
  txtInterMedium20: "font-inter font-medium",
  txtInterSemiBold64: "font-inter font-semibold",
  txtInterRegular13Gray600: "font-inter font-normal",
  txtInterMedium11Gray600cc: "font-inter font-medium",
  txtInterMedium13Amber900: "font-inter font-medium",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular13: "font-inter font-normal",
  txtInterMedium9: "font-inter font-medium",
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
