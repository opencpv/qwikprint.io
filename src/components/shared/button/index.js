import React from "react";

const Button = ({
  variant = "colored",
  color = "primary",
  size = "medium",
  width = "fit",
  loading = false,
  children,
  ...props
}) => {
  const baseClasses =
    "font-bold rounded-md transition-colors duration-200 ease-in-out relative";

  const variantClasses = {
    colored: {
      primary: "bg-green-500 text-white hover:bg-green-600",
      secondary: "bg-blue-500 text-white hover:bg-blue-600",
      accent: "bg-purple-500 text-white hover:bg-purple-600",
    },
    outline: {
      primary: "border-2 border-green-500 text-green-500 hover:bg-green-50",
      secondary: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
      accent: "border-2 border-purple-500 text-purple-500 hover:bg-purple-50",
    },
    ghost: {
      primary: "text-green-500 hover:bg-green-50",
      secondary: "text-blue-500 hover:bg-blue-50",
      accent: "text-purple-500 hover:bg-purple-50",
    },
  };

  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-3",
    large: "px-6 py-4 text-lg",
  };

  const widthClasses = {
    full: "w-full",
    fit: "w-fit",
  };

  const classes = `${baseClasses} ${variantClasses[variant][color]} ${
    sizeClasses[size]
  } ${widthClasses[width]} ${loading ? "cursor-not-allowed opacity-70" : ""}`;

  const LoadingIcon = () => (
    <svg
      className="animate-spin h-5 w-5 text-current"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  return (
    <button className={classes} disabled={loading} {...props}>
      {loading ? (
        <>
          <span className="opacity-0">{children}</span>
          <span className="absolute inset-0 flex items-center justify-center">
            <LoadingIcon />
          </span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
