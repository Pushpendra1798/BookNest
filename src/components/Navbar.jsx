import { NavLink } from "react-router-dom";
import { BookOpen, Heart, Plus } from "lucide-react";

const Navbar = () => {
    const navLinkStyle = ({ isActive }) =>
        `relative flex items-center gap-2 py-2 text-sm font-medium transition-all duration-300
    ${isActive
            ? "text-emerald-400"
            : "text-gray-400 hover:text-white"
        }`;

    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0d0d]/95 backdrop-blur-md">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                        <BookOpen size={23} />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold tracking-wide text-white">
                            Book<span className="text-emerald-400">Nest</span>
                        </h2>

                        <p className="text-[10px] tracking-widest text-gray-500">
                            YOUR PERSONAL LIBRARY
                        </p>
                    </div>

                </NavLink>

                {/* Navigation */}
                <div className="flex items-center gap-8">

                    <NavLink to="/" className={navLinkStyle}>
                        Home
                    </NavLink>

                    <NavLink to="/favorites" className={navLinkStyle}>
                        <Heart size={17} />
                        Favorites
                    </NavLink>

                    <NavLink
                        to="/add-book"
                        className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-emerald-400"
                    >
                        <Plus size={18} />
                        Add Book
                    </NavLink>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;