import React from "react";
import { ReactNode } from "react";

type ButtonProps = {
  variant: "Default" | "Newsletter" | "SizeFilter" | "ApplyFilter";
  children?: ReactNode;
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string; // Custom class for styling
};

const Button = ({
  variant,
  text = "",
  children,
  className = "",
  onClick,
}: ButtonProps) => {
  const baseStyles = " focus:outline-none transition duration-300";

  const variantStyles = {
    Default: "",
    Newsletter:
      "bg-white text-black font-albertsans rounded-3xl py-2 font-medium",
    ApplyFilter: "bg-black font-albertsans text-white rounded-3xl py-2 text-sm",
    SizeFilter:
      "font-albertsans bg-[#f0f0f0] py-2 px-5 md:px-4 rounded-3xl text-sm text-black text-opacity-60 active:bg-black active:text-white active:text-opacity-100 hover:bg-black hover:text-white hover:text-opacity-100",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
