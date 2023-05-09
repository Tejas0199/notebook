import { Link } from "react-router-dom";
import './style.css'

const Navbar = () => {
    return <div className="navbar">
        <h1>Js Rider's</h1>
        <Link to="/login">Login</Link>
    </div>
}

export default Navbar;