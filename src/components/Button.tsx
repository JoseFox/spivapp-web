import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

export const Button: React.FC<ButtonProps> = (props) => {
  if (props.isLoading === true) {
    return (
      <button
        disabled
        type={props.type}
        className={`mt-3 p-2.5 bg-gray-600 text-indigo-100 ${props.className}`}
      >
        Loading...
      </button>
    );
  }

  return (
    <button
      type={props.type}
      className={`mt-3 p-2.5 bg-indigo-600 text-indigo-100 hover:bg-indigo-800 ${props.className}`}
    >
      {props.children}
    </button>
  );
};
