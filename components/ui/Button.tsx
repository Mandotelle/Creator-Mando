import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wide transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 text-sm md:text-base py-3 px-6 md:py-4 md:px-8 rounded-lg";
  
  const variants = {
    primary: "bg-mando-red text-white hover:bg-red-600 shadow-[0_4px_14px_0_rgba(255,0,85,0.39)]",
    secondary: "bg-white text-black hover:bg-gray-200",
    outline: "border-2 border-white/20 text-white hover:border-white hover:bg-white/10",
    danger: "bg-red-800 text-white hover:bg-red-900"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};