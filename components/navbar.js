'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkMode from './darkMode';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-center sm:mt-6 sticky top-3">
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-md border border-gray-200 dark:border-gray-700 flex sm:gap-4 items-center">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`px-4 py-1 rounded-full transition-all font-medium ${
              pathname === href
                ? 'bg-gray-500 text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700'
            }`}           
            >             
            {label}           
          </Link>        
        ))}
        <DarkMode/>
      </div>
    </nav>
  );
}
