import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type ButtonVariants = "solid" | "outline" | "primary";

type ButtonSizes = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSizes;
  variant: ButtonVariants;
  wide?: boolean;
  disabled?: boolean;
  active?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  children,
  size = "md",
  variant = "solid",
  wide = false,
  disabled = false,
  active = false,
  className,
  ...rest
}: ButtonProps) => {
  const base =
    "flex items-center justify-center text-center border font-semibold transition-all duration-200";

  const sizeClass = {
    lg: "h-[4.8rem] text-base border-[2px]",
    md: "h-[4rem] text-sm border-[2px]",
    sm: "h-[2.8rem] text-xs border-[1px]",
  }[size];

  const wideClass = wide ? "w-full" : "";

  const variantClass = clsx({
    // 기본 normal
    "bg-gray-800 text-white border-gray-800":
      variant === "solid" && !disabled && !active,
    "hover:bg-gray-700 active:bg-gray-900": variant === "solid" && !disabled,

    // outline
    "bg-white text-gray-800 border-gray-300":
      variant === "outline" && !disabled && !active,
    "hover:bg-gray-100 active:bg-white": variant === "outline" && !disabled,

    // primary
    "bg-purple-600 text-white border-purple-600":
      variant === "primary" && !disabled && !active,
    "hover:bg-purple-500 active:bg-purple-700":
      variant === "primary" && !disabled,

    // disabled
    "bg-gray-300 text-white border-gray-300 cursor-not-allowed": disabled,
  });

  const activeOverride = active
    ? clsx({
        "bg-gray-800 text-white border-gray-800": variant === "solid",
        "bg-white text-gray-800 border-gray-300": variant === "outline",
        "bg-purple-700 text-white border-purple-700": variant === "primary",
      })
    : "";

  return (
    <span
      type="button"
      // disabled={disabled}
      className={clsx(
        base,
        sizeClass,
        wideClass,
        variantClass,
        activeOverride,
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
};
