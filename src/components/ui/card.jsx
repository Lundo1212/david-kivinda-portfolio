export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl shadow-xl bg-white/10 backdrop-blur-md p-4 ${className}`}>
      {children}
    </div>
  );
}
