import { ComponentProps } from "react";

export const Container = ({ children, ...props }: ComponentProps<"div">) => (
  <div className="mx-auto max-w-screen-md" {...props}>
    {children}
  </div>
);
