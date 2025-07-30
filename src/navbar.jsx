import { Link } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa6";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import "./navbar.css";

function NavBar () {
    return (
        <nav>
            <Link to='/'>Home <IoHomeOutline /></Link>
            <Link to='/login'>Login <FaWpforms /></Link>
            <Link to='/dashboard'>Dashboard <MdOutlineSpaceDashboard /></Link>
        </nav>
    )
}

export default NavBar