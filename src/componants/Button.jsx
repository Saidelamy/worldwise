import styles from "./Button.module.css";
function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[className]}`}>
      {children}
    </button>
  );
}

export default Button;
