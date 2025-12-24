import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ---------- Variants ---------- */
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-black text-white hover:bg-gray-900",
        secondary: "bg-gray-200 text-black hover:bg-gray-300",
        outline: "border border-black text-black hover:bg-black hover:text-white",
        ghost: "text-black hover:bg-gray-100",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

/* ---------- Props ---------- */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string;
  href?: string;
}

/* ---------- Component ---------- */
const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      label,
      href,
      ...props
    },
    ref
  ) => {
    // If href → render Link
    if (href) {
      return (
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant, size, fullWidth }),
            className
          )}
        >
          {label}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, fullWidth }),
          className
        )}
        {...props}
      >
        {label}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
