export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-xl bg-white/20 text-white font-semibold hover:bg-white/30 transition"
    >
      {children}
    </button>
  );
}
