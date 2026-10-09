import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  // index.html sets the initial class before paint (saved choice, else system preference).
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid size-10 cursor-pointer place-items-center rounded-full text-muted transition-colors duration-200 hover:bg-line/60 hover:text-fg"
    >
      {dark ? <Sun className="size-5" aria-hidden="true" /> : <Moon className="size-5" aria-hidden="true" />}
    </button>
  );
}
