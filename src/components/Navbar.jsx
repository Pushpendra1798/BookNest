import { NavLink } from "react-router-dom";
import { BookOpen, Compass, Heart, Plus, Home } from "lucide-react";

const Navbar = () => {

    const navLinkStyle = ({ isActive }) =>
        `flex items-center justify-center gap-2 py-2 text-sm font-medium transition-all duration-300
        ${
            isActive
                ? "text-emerald-400"
                : "text-gray-400 hover:text-white"
        }`;

    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0d0d]/95 backdrop-blur-md">

            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">

                {/* Top Row */}
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-2 sm:gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 sm:h-10 sm:w-10">
                            <BookOpen size={22} />
                        </div>

                        <div>
                            <h2 className="text-lg font-bold tracking-wide text-white sm:text-xl">
                                Book
                                <span className="text-emerald-400">
                                    Nest
                                </span>
                            </h2>

                            <p className="hidden text-[10px] tracking-widest text-gray-500 sm:block">
                                YOUR PERSONAL LIBRARY
                            </p>
                        </div>

                    </NavLink>


                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">

                        <NavLink to="/" className={navLinkStyle}>
                            Home
                        </NavLink>

                        <NavLink
                            to="/favorites"
                            className={navLinkStyle}
                        >
                            <Heart size={17} />
                            Favorites
                        </NavLink>

                        <NavLink
                            to="/discover"
                            className={navLinkStyle}
                        >
                            <Compass size={17} />
                            Discover
                        </NavLink>

                        <NavLink
                            to="/add-book"
                            className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-400"
                        >
                            <Plus size={18} />
                            Add Book
                        </NavLink>

                    </div>


                    {/* Mobile Add Book */}
                    <NavLink
                        to="/add-book"
                        className="flex items-center gap-1.5 rounded-xl bg-emerald-500 px-3 py-2 text-sm font-semibold text-black transition hover:bg-emerald-400 md:hidden"
                    >
                        <Plus size={17} />

                        <span className="hidden xs:inline">
                            Add Book
                        </span>

                        <span className="xs:hidden">
                            Add
                        </span>
                    </NavLink>

                </div>


                {/* Mobile Navigation */}
                <div className="mt-3 grid grid-cols-3 border-t border-white/10 pt-2 md:hidden">

                    <NavLink to="/" className={navLinkStyle}>
                        <Home size={17} />
                        Home
                    </NavLink>

                    <NavLink
                        to="/favorites"
                        className={navLinkStyle}
                    >
                        <Heart size={17} />
                        Favorites
                    </NavLink>

                    <NavLink
                        to="/discover"
                        className={navLinkStyle}
                    >
                        <Compass size={17} />
                        Discover
                    </NavLink>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;