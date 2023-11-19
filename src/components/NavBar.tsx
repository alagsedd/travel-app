import styles from "../styles/NavBar.module.css";
import logo from "../assets/Images/logo.jpg";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nameLogoBox}>
        <img
          className={styles.logoPic}
          src={logo}
          alt="Your browser doesn't support this image"
        />
        <span>A-Travels</span>
      </div>

      <ul className={styles.ul1}>
        <li>Home</li>
        <li>Bookings</li>
        <li>Company</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default NavBar;
