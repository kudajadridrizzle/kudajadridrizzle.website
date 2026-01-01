'use client';

import { ReactNode } from "react";
import clsx from "clsx";

type WrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div
      className={clsx(
        "w-full px-4 sm:px-8 lg:px-16 xl:px-[12%]",
        className
      )}
    >
      {children}
    </div>
  );
}
