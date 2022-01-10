import React from "react";

interface wrapperProps {
  variant?: "small" | "regular";
}

export const Wrapper: React.FC<wrapperProps> = ({
  children,
  variant = "regular",
}) => {
  const size = variant === "regular" ? "max-w-3xl" : "max-w-sm";
  return <div className={`mt-4 mx-auto ${size} w-full`}>{children}</div>;
};
