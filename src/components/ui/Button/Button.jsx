import "./Button.css";

function Button({ text, href, variant = "primary" }) {
  return (
    <a className={`button button--${variant}`} href={href}>
      {text}
    </a>
  );
}

export default Button;