import { ReactNode, MouseEventHandler } from "react";

type ButtonProps = {
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  icon?: ReactNode;
  href?: string;
  ariaLabel?: string;
};

const Button = ({
  text,
  onClick,
  className,
  icon,
  href,
  ariaLabel,
}: ButtonProps) => {
  const content = (
    <>
      {icon && <span>{icon}</span>}
      {text}
    </>
  );

  if (href) {
    return (
      <a href={href} className={className} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className} aria-label={ariaLabel}>
      {content}
    </button>
  );
};

export default Button;
