import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  children,
  ...rest
}) {
  const classes = twMerge(
    className(rest.className, "flex items-center border px-4 py-2.5", {
      "bg-blue-500 border-blue-500 text-white": primary,
      "bg-gray-900 border-gray-900 text-white": secondary,
      "bg-green-500 border-green-500 text-white": success,
      "bg-yellow-500 border-yellow-500 text-white": warning,
      "bg-red-500 border-red-500 text-white": danger,
      "rounded-lg": rounded,
      "bg-white": outline,
      "text-blue-500": primary && outline,
      "text-gray-900": secondary && outline,
      "text-green-500": success && outline,
      "text-yellow-500": warning && outline,
      "text-red-500": danger && outline,
    })
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
export default Button;
