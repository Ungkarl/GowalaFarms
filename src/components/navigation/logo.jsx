// Logo.jsx
import React from 'react';
import styles from './navigation.module.css';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <NavLink to="/">
            <img src={logo} alt="Logo" />
            </NavLink>
        </div>
    );
};

export default Logo;
