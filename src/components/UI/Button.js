import styles from "./Button.module.css";

function Button(props) {
  const { children, disabled = false, className } = props;
  return (
    <button
      {...props}
      className={`${styles.button} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
