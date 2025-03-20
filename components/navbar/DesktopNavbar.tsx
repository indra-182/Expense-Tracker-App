import { UserButton } from "@clerk/nextjs";
import Logo from "../Logo";
import NavbarItem from "./NavbarItem";
import ToggleButton from "../ToggleButton";
import { navItems } from "./Navbar";

const DesktopNavbar = () => {
  return (
    <div className="hidden border-separate border-b bg-background md:block">
      <nav className="container flex items-center justify-between px-8">
        <div className="flex h-[80px] min-h-[80px] items-center gap-4">
          <Logo />
          <div className="flex h-full">
            {navItems.map((item) => (
              <NavbarItem
                key={item.label}
                label={item.label}
                path={item.path}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ToggleButton />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
    </div>
  );
};

export default DesktopNavbar;
