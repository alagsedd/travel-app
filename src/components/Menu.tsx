import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import styles from "../styles/Menu.module.css";
import { useState } from "react";

const Menu = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <>
      <FiMenu
        onClick={() => setMenuVisibility(true)}
        className={styles.menuIcon}
        size="30"
      />
      {menuVisibility && (
        <ul className={styles.ul}>
          <li>
            <IoClose onClick={() => setMenuVisibility(false)} size="30" />
          </li>
          <li>Home</li>
          <li>Bookings</li>
          <li>Company</li>
          <li>Contact Us</li>
        </ul>
      )}
    </>
  );
};

export default Menu;
