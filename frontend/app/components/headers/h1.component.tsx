import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

export const H1: FC<
  PropsWithChildren<
    DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
  >
> = ({ children, ...props }) => {
  return (
    <h1
      {...props}
      className={`${props.className} text-5xl lg:text-7xl font-extrabold`}
    >
      {children}
    </h1>
  );
};
