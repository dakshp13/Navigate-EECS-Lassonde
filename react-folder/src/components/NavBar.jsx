import { Link } from "react-router-dom"
import "../css/Navbar.css"


function NavBar() {
    return (
    <nav className="navbar">
       <Link to="/About" className="nav-link">
            About
       </Link>
       <Link to="/Review" className="nav-link">
            Leave a Review Here
       </Link>

    </nav>
    )
}

export default NavBar