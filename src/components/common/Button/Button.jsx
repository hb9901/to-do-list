export function Button({ children, borderColor, backColor, color }) {
  return (
    <button
      style={{
        border: borderColor ? `1px solid ${borderColor}` : `none`,
        backgroundColor: backColor,
        color: color,
      }}
      className="button"
    >
      {children}
    </button>
  );
}
