import React, { useState } from 'react';
import styles from './backofficeNavigation.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/logo.png';
import { IoIosLogIn, IoIosLogOut  } from "react-icons/io";
import Profile from '../profile/profile';
import { useAuth } from '../../../../hooks/useAuth';


const BackOfficeNavigation = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { signedIn} = useAuth();

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div 
            className={`${styles.backofficeNavigation} ${isCollapsed ? styles.collapsed : ''}`} 
            onClick={handleToggle}
        >
            <div className={styles.logo}>
            <NavLink to="/">
            <img src={logo} alt="Logo" />
            </NavLink>
            </div>
            <div className={styles.links}>
            {!signedIn && (
                    <NavLink to="/backoffice/signin" className={({ isActive }) =>
                        isActive ? styles.active : ""
                    }>Sign In</NavLink>
                )}
            <NavLink to="/backoffice/employees" className={({ isActive }) =>
                isActive ? styles.active : ""
            }>Manage Employees</NavLink>
            </div>

            <div className={styles.user}>
                <Profile />
            </div>
            
        </div>
    );
};

export default BackOfficeNavigation;