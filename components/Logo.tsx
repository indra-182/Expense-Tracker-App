import { BadgeDollarSign } from "lucide-react";

const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-2">
      <BadgeDollarSign className="hidden h-11 w-11 stroke-amber-500 stroke-[1.5] sm:block" />
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        Expense Tracker
      </p>
    </a>
  );
};

export default Logo;
