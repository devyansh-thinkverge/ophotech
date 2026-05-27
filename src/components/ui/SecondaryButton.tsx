import { cn } from "@/lib/utils";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

import { CTAArrowIcon } from "./Button";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  withArrow?: boolean;
  leadingIcon?: ReactNode;
};

export const SecondaryButton = forwardRef<
  HTMLButtonElement,
  SecondaryButtonProps
>(({ className, children, withArrow = true, leadingIcon, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex items-center gap-2 rounded-lg border border-[#22c55e]/50 bg-transparent px-6 py-3 text-base text-[#4ade80] transition-all duration-200 hover:glass-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22c55e]",
      className,
    )}
    {...props}
  >
    {leadingIcon}
    <span>{children}</span>
    {withArrow ? <CTAArrowIcon /> : null}
  </button>
));

SecondaryButton.displayName = "SecondaryButton";
