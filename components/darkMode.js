'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const dark = localStorage.getItem('theme') === 'dark';
    root.classList.toggle('dark', dark);
    setIsDark(dark);
  }, []);

  const toggleDark = () => {
    const root = window.document.documentElement;
    const newDark = !isDark;
    root.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
    setIsDark(newDark);
  };

  return (
    <button
      onClick={toggleDark}
      className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition text-amber-50"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
