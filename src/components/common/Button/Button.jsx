import "./Button.css";

export function Button({ children, borderColor, backColor, color, onClick }) {
  return (
    <button
      style={{
        border: borderColor ? `1px solid ${borderColor}` : `none`,
        backgroundColor: backColor,
        color: color,
      }}
      className="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
