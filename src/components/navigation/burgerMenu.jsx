import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

const BurgerMenu = ({ toggleBurger }) => {
    return (
        <>
            <NavLink to="/shop" className={({ isActive }) => isActive ? styles.active : ''} onClick={toggleBurger}>Shop</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? styles.active : ''} onClick={toggleBurger}>Services</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''} onClick={toggleBurger}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''} onClick={toggleBurger}>Contact</NavLink>
        </>
    );
};

export default BurgerMenu;