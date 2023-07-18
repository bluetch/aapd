import { memo, useMemo } from "react";
import ICONS from "./icons";

const ICON_SIZES = {
  xs: "w-2 h-2",
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-10 w-10",
};

const COLORS = {
  primary: "fill-black",
  white: "fill-white",
  error: "fill-red-500",
  gray: "fill-gray-500",
  blue: "fill-blue-900",
};

const Icon = ({ name = "more", size = "md", color = "primary", className = "", onClick = undefined, ...rest }) => {
  const computedClasses = `
    inline-block
    ${ICON_SIZES[size] || ""}
    ${COLORS[color] || color}
    ${className}
    ${onClick ? "cursor-pointer" : ""}
  `;

  const DynamicIcon = useMemo(() => {
    if (name in ICONS) return ICONS[name];
    return null;
  }, [name]);

  if (!DynamicIcon) {
    console.warn(`Icon "${name}" not found in ICONS`);
    return null;
  }

  return (
    <DynamicIcon
      data-test={name}
      className={computedClasses}
      onClick={onClick}
      {...rest}
    />
  );
};

export default memo(Icon);
