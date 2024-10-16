import { ReactNode } from "react";

type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "caption";
  children?: ReactNode;
  text?: string;
  className?: string;
};

const Typography = ({
  variant,
  children,
  text = "",
  className = "",
}: TypographyProps) => {
  const Component = variant;
  return (
    <Component className={className}>
      {text}
      {children}
    </Component>
  );
};

export default Typography;
