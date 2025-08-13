import { ReactNode, MouseEventHandler } from "react";

type ButtonProps = {
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  target?: string;
  icon?: ReactNode;
  href?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button = ({
  text,
  onClick,
  className,
  target,
  icon,
  href,
  ariaLabel,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const accessibleLabel = text ? undefined : ariaLabel;

  const content = (
    <>
      {icon && <span>{icon}</span>}
      {text}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={className}
        aria-label={accessibleLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={className}
      aria-label={accessibleLabel}
      type={type}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
