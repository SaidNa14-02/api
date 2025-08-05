import "./Navbar.css";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { MdSpeed } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { GiAlienFire } from "react-icons/gi";

function Navbar() {
  return (
    <nav className="main-navbar">
      <div className="logo-div">
        <GiAlienFire />
        ReactRouter
      </div>
      <div className="menu">
        <h3>Menú Principal</h3>
        <Link className="nav-link" to="/">
          <FaHome />
          Inicio
        </Link>
        <Link className="nav-link" to="/login">
          <MdOutlineLogin />
          Login
        </Link>
        <Link className="nav-link" to="/dashboard">
          <MdSpeed />
          Dashboard
        </Link>
        <Link className="nav-link" to="/about">
          <FaInfoCircle />
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
