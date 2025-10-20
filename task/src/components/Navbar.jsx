import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-800">
      <h1 className="font-bold">My App</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-blue-600 text-white dark:bg-yellow-500 dark:text-black"
      >
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}
