export default function Button({ children, ...props }) {
  return (
    <button {...props} className="px-4 py-2 text-xs md:text-base text-stone-100 rounded-md transition ease-in-out delay-50 bg-gradient-to-r from-purple-700 via-purple-700 to-pink-500 hover:-translate-y-1 hover:scale-110 hover:from-pink-500 hover:to-purple-500 ...   hover: hover:text-stone-100 {...props}">
      {children}
    </button>
  );
}
