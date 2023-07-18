import { memo } from "react";
import { Link } from "react-router-dom";
import { Icon } from "components";
import { twMerge } from "tailwind-merge";

const COLORS = {
  primary: {
    text: "",
    contained: "bg-black text-white hover:bg-black/80",
    outline: "text-txPurpleBlue border-txPurpleBlue hover:bg-txPurpleBlue/10",
  },
  gray: {
    text: "border-gray-500 text-gray-500 hover:bg-gray-500/10",
    contained: "text-black bg-gray-200 hover:bg-gray-200/80",
    outlined: "text-white border border-white/12 hover:bg-white/12",
  },
  white: {
    text: "border-white text-white hover:bg-white/90",
    contained: "text-black bg-white hover:bg-white/90",
    outlined: "text-black border hover:bg-black/10",
  },
  yellow: {
    text: "border-[#FFDF80] text-[#FFDF80] hover:bg-[#FFDF80]/10",
    contained: "text-[#FFDF80] bg-[#FFDF80]/10",
    outlined: "text-[#FFDF80] border-[#FFDF80] hover:bg-[#FFDF80]/10",
  },
  error: {
    text: "border-txError text-txError hover:bg-red-500/10",
    contained: "text-white bg-txError hover:bg-red-700",
    outline: "text-txError border-txError hover:bg-red-500/10",
  },
  dark: {
    text: "text-[#6985EF] hover:bg-[#6985EF]/10",
    contained: "text-[#6985EF] bg-[#1B1B1B] hover:bg-[#1B1B1B]/10 hover:underline",
    outline: "text-[#6985EF] border-[#6985EF] hover:bg-[#6985EF]/10",
  },
};

const SIZES = {
  xs: "text-sm px-2 py-1",
  sm: "text-sm px-2.5 py-2",
  md: "px-5 py-2",
  lg: "text-lg",
};

export const Button = ({
  href,
  children,
  loading = false,
  loadingPosition = "end",
  variant = "contained",
  color = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  onClick = () => { },
  className = "",
  type = "button",
  ...rest
}) => {
  const computedClasses = twMerge(
    "inline-flex items-center justify-center rounded break-keep capitalize",
    COLORS[color][variant] || "",
    SIZES[size] || "",
    fullWidth ? "w-full" : "",
    disabled ? "opacity-60 cursor-not-allowed" : loading ? "" : "cursor-pointer",
    className
  );

  const ButtonElement = href ? Link : "button";
  const isExternal = href?.startsWith("http");
  const linkProps = isExternal
    ? {
        to: href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <ButtonElement
      {...linkProps}
      className={computedClasses}
      onClick={disabled || loading ? () => { } : onClick}
      disabled={disabled || loading}
      type={type}
      {...rest}
    >
      {loading && loadingPosition === "start" && (
        <span className="ml-2">
          <Icon name="loading" />
        </span>
      )}
      {children}
      {loading && loadingPosition === "end" && (
        <span className="ml-2">
          <Icon name="loading" />
        </span>
      )}
    </ButtonElement>
  );
};
