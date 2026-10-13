import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center justify-center p-2 rounded-full border transition-all duration-200 cursor-pointer ${
        isDark
          ? 'bg-[#14231b] border-[#22c55e]/30 text-[#4ade80] hover:bg-[#1b2f24] hover:border-[#4ade80]/60 shadow-[0_0_12px_rgba(74,222,128,0.2)]'
          : 'bg-white/80 hover:bg-white border-black/10 text-[#0b1f14] hover:text-[#16a34a] shadow-sm'
      } ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
};
