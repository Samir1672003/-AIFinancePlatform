
interface ButtonProps {
  content?: React.ReactNode;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  content,
  children,
  type = "button",
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
}) => {
  const base =
    "inline-flex items-center cursor-pointer justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const styles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline:
      "border border-border text-foreground hover:bg-secondary",
    ghost:
      "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
    danger:
      "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${sizes[size]} ${styles[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
    >
      {children || content}
    </button>
  );
};

export default Button;