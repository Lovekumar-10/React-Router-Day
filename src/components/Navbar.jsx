import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-slate-800 px-6 py-4 flex gap-6">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "text-white font-semibold border-b-2 border-white"
            : "text-slate-300 hover:text-white"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-white font-semibold border-b-2 border-white"
            : "text-slate-300 hover:text-white"
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-white font-semibold border-b-2 border-white"
            : "text-slate-300 hover:text-white"
        }
      >
        Contact
      </NavLink>

      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive
            ? "text-white font-semibold border-b-2 border-white"
            : "text-slate-300 hover:text-white"
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/user"
        className={({ isActive }) =>
          isActive
            ? "text-white font-semibold border-b-2 border-white"
            : "text-slate-300 hover:text-white"
        }
      >
        User
      </NavLink>
    </nav>
  );
};

export default Navbar;



















