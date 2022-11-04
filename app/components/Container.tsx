import { ComponentProps } from "react";

export const Container = ({
  children,
  className,
  ...props
}: ComponentProps<"div">) => (
  <div className={`mx-auto max-w-screen-md ${className ?? ""}`} {...props}>
    {children}
  </div>
);
