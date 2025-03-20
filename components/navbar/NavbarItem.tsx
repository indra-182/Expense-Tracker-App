"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

interface NavbarItemProps {
  path: string;
  label: string;
}

const NavbarItem = ({ path, label }: NavbarItemProps) => {
  const pathName = usePathname();
  const isActive = pathName === path;

  return (
    <div className="relative flex items-center">
      <Link
        href={path}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "w-full justify-start text-lg text-muted-foreground hover:text-foreground",
          isActive && "text-foreground"
        )}
      >
        {label}
      </Link>
      {isActive && (
        <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block" />
      )}
    </div>
  );
};

export default NavbarItem;
