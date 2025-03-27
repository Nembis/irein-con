import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

export const H3: FC<
  PropsWithChildren<
    DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
  >
> = ({ children, ...props }) => {
  return (
    <h3
      {...props}
      className={`${props.className} text-2xl lg:text-4xl font-bold`}
    >
      {children}
    </h3>
  );
};
