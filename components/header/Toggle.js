export default function Toggle({ setMenuOpen, menuOpen }) {
  return (
    <div className="lg:hidden bg-slate-700">
      {/* toggle */}
      <button
        className="flex items-center px-3 py-2 border rounded text-slate-700 border-slate-700 hover:text-slate-500 hover:border-slate-500"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-3 h-3 text-white fill-current"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="12" height="2"></rect>
          <rect y="5" width="12" height="2"></rect>
          <rect y="10" width="12" height="2"></rect>
        </svg>
      </button>
    </div>
  );
}
