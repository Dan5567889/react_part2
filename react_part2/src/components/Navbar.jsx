import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
function Navbar(){
return(
    <nav className={styles.nav}>
        <p> Dante and Wilson </p>
        <ul>
            <Link to ="/dante"> <li> Dante </li> </Link>
            <Link to ="/wilson"> <li> Wilson </li> </Link>
            <Link to ="/goals"> <li> Goals </li> </Link>
        </ul>
    </nav>
);
}
export default Navbar;