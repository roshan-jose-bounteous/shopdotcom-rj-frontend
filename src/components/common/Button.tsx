import React from "react";
import { ReactNode } from "react";

type ButtonProps = {
  variant: "Default" | "Newsletter";
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
      "bg-white text-black font-albertsans rounded-3xl py-2 px-2 font-medium",
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
