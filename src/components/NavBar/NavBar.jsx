import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";


const NavBar = () => {
    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/donation">Donation</NavLink>
        <NavLink to="/statistics">Statistics</NavLink>
    </>
    return (
        <nav className="py-4">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to="/">
                        <img src="https://i.ibb.co/2y1bQYt/logo.png" alt="Website Logo" />
                    </Link>
                </div>
                <div className="hidden md:block">
                    <div className="flex-none md:space-x-8 text-xl">
                        {links}
                    </div>
                </div>
                <div className="dropdown block md:hidden -ml-2">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <GiHamburgerMenu className="scale-150"></GiHamburgerMenu>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded space-y-4 -ml-8 text-center bg-white">
                        {links}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;