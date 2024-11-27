import { Link, NavLink } from "react-router-dom";
import "./Header.css"

function Header() {
    return (
        <header>
            <nav>
            <h2><Link to="/">Employee Manager App</Link></h2>
            <ul>
                <li><NavLink to="/employees">Employees</NavLink></li>
                <li><NavLink to="/form">Add New</NavLink></li>
                
            </ul>
            </nav>
        </header>
    )
}
export default Header;