import { Link } from 'react-router-dom'; 

import logo from '../assets/logo.svg';
import styles from '../css/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navcontainer}>
      <Link to="/"><img src={logo} alt="logo"/></Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;