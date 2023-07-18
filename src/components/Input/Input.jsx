import { Icon } from "components";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const SIZES = {
  xs: "text-xs",
  sm: "px-2 py-1",
  md: "px-4 py-2",
  lg: "",
};

const Input = forwardRef(
  (
    {
      autoComplete = "off",
      id,
      iconStart = false,
      iconEnd = false,
      iconEndOnClick,
      label,
      desc = null,
      onClick,
      className = null,
      placeholder = "",
      size = "md",
      status = "default",
      fullWidth = false,
      value,
      required = false,
      type = "text",
      errorText = "Invalid input",
      ...rest
    },
    ref
  ) => {
    const computedClasses = twMerge(
      "box-border placeholder-gray/50 border rounded",
      status === "warn" && "focus:border-[#FFE599]",
      status === "error" && "border-transparent border-b-txError rounded-b-none",
      SIZES[size] || "",
      fullWidth && "w-full",
      iconStart && "pl-10",
      className
    );

    return (
      <div className="relative w-full">
        {label && (
          <label htmlFor={id} className="mb-2 text-sm text-white/60">
            {label}
            {required && <span className="text-red-500">*</span>}
          </label>
        )}
        {iconStart && (
          <div
            className={twMerge(
              "absolute left-1 -translate-y-1/2 cursor-pointer bg-txDark pl-2 hover:text-yellow-500",
              (label && fullWidth) ? "top-11" : "top-1/2",
            )}
            onClick={onClick}
          >
            <Icon name={iconStart} />
          </div>
        )}
        <input
          autoComplete={autoComplete}
          id={id}
          type={type}
          placeholder={placeholder}
          ref={ref}
          className={computedClasses}
          value={value}
          {...rest}
        />
        {status === "error" && <div className="mt-1 text-xs text-txError">{errorText}</div>}
        {iconEnd && (
          <Icon
            name={iconEnd}
            className={twMerge(
              "absolute top-11 right-6 translate-x-1/2 -translate-y-1/2 cursor-pointer bg-txDark pl-2 hover:text-yellow-500",
              (label && fullWidth) ? "top-11" : "top-1/2",
            )}
            onClick={iconEndOnClick}
          />
        )}
        {desc && <p className="mt-1 text-xs text-white/48">{desc}</p>}
      </div>
    );
  }
);

export default Input;
