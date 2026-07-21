import "./Button.css";

function Button({
  href,
  type = "button",
  variant = "primary",
  children,
  text,
  ariaLabel,
  ...props
}) {
  const content = children || text;
  const className = `button button--${variant}`;

  if (href) {
    return (
      <a
        href={href}
        className={className}
        aria-label={ariaLabel}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={className}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;