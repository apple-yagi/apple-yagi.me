import type { ComponentProps } from "react";

export const LinkItem = ({ children, className, ...props }: ComponentProps<"div">) => (
  <div
    className={`flex items-center justify-center bg-slate-400 rounded-3xl aspect-square hover:rotate-3 transition ${
      className ?? ""
    }`}
    {...props}
  >
    {children}
  </div>
);
