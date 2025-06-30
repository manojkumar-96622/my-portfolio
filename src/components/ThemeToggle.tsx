import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-gray-800/20 transition-all duration-300 hover:scale-110 hover:bg-white/20 dark:hover:bg-black/20"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-amber-400" />
      ) : (
        <Moon className="w-6 h-6 text-blue-600" />
      )}
    </button>
  );
};

export default ThemeToggle;