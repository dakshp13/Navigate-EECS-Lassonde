import { Link } from "react-router-dom"
import "../css/NavBar.css"


function NavBar() {
    return (
    <nav className="navbar">
       <Link to="/About" className="nav-link">
            About
       </Link>
       <Link to="/Notes" className="nav-link">
            Notes
       </Link>

    </nav>
    )
}

export default NavBar