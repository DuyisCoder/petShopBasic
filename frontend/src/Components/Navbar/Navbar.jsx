import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
    return (
        <>
        <div className="navbar">
            <Link  className="navbarItem" to="/">Home</Link>
            <Link className="navbarItem" to="/dogs">Dogs</Link>
            <Link  className="navbarItem"to="/cart">My carts</Link>
        </div>
        </>
      );
}

export default Navbar;