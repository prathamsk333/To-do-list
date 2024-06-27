import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full p-1 bg-purple-50 border-b-2 rounded-md shadow-sm border-stone-300 text-stone-600 focus:outline-none focus:border-stone-600 ";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label ref={ref} className="text-sm font-bold uppercase text-violet-950">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
