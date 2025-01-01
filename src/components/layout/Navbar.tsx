import { NavLink } from "react-router";
import { navLinks } from "../../constants/navigation";

export default function Navbar() {
  return (
    <div className="flex items-center min-w-full justify-center min-h-20 bg-red-300">
      <nav className=" container flex justify-between text-2xl ">
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.path}
            to={navLink.path}
            className={({ isActive }) =>
              isActive ? " text-red-500" : "text-pink-500"
            }
          >
            {navLink.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
