export default function Button({ onClick, btnType, children }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
}
