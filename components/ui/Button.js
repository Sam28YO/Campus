// components/ui/button.js
export const Button = ({ children, className = "", ...props }) => (
  <button
    className={`transition px-4 py-2 rounded-md font-medium ${className}`}
    {...props}
  >
    {children}
  </button>
);
