interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "danger";
  className?: string; // নতুন এই প্রপটি যোগ করুন
}

export default function Button({ 
  children, 
  onClick, 
  type = "button", 
  variant = "primary",
  className = "" // ডিফল্ট ভ্যালু খালি রাখুন
}: ButtonProps) {
  
  const baseStyle = "px-5 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]";
  
  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-200 hover:from-indigo-700 hover:to-indigo-800",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
    danger: "bg-red-50 text-red-600 hover:bg-red-100"
  };

  return (
    // এখানে ${className} যোগ করা হয়েছে
    <button 
      type={type} 
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}