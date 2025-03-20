import { useState } from "react";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

const ToggleButton = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleMode = (): void => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleMode}
      className="relative h-12 w-12 overflow-hidden"
      aria-label="Toggle dark mode"
    >
      <div
        className={`absolute transition-all duration-500 ease-in-out ${
          darkMode
            ? "translate-y-[-40px] opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <SunIcon className="h-6 w-6 text-primary" />
      </div>
      <div
        className={`absolute transition-all duration-500 ease-in-out ${
          darkMode
            ? "translate-y-0 opacity-100"
            : "translate-y-[40px] opacity-0"
        }`}
      >
        <MoonIcon className="h-6 w-6 text-primary" />
      </div>
    </Button>
  );
};

export default ToggleButton;
