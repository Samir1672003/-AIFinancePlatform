import React from "react";

const Button = ({
  content,
  type = "button",
  onClick,
  className = "",
  variant = "primary",
  disabled = false,
}) => {
  const base = "px-6 py-3 rounded-lg font-semibold transition duration-200";

  const styles = {
    primary:
      "bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:opacity-90 cursor-pointer",
    secondary:
      "bg-white/10 text-white border border-white/20 hover:bg-white/20 cursor-pointer",
    outline:
      "border border-purple-500 text-purple-400 hover:bg-purple-500/10 cursor-pointer",
    danger: "bg-red-500 text-white hover:bg-red-600 cursor-pointer",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`  ${base} ${styles[variant]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {content}
    </button>
  );
};

export default Button;
