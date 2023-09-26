import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="py-4">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to="/">
                        <img src="https://i.ibb.co/2y1bQYt/logo.png" alt="Website Logo" />
                    </Link>
                </div>
                <div className="flex-none space-x-8 text-xl">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/donation">Donation</NavLink>
                    <NavLink to="/statistics">Statistics</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;