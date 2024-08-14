import styles from './navigation.module.css';
import BurgerIcon from './burgerIcon';
import BurgerMenu from './burgerMenu';
import BasketIcon from './basketIcon';
import Logo from './logo.jsx';
import BasketMenu from './basketMenu.jsx';
import { useState } from 'react';

const Navigation = () => {

    const [burgerOpen, setBurgerOpen] = useState(false);
    const [basketOpen, setBasketOpen] = useState(false);

    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen);
        if (basketOpen) {
            setBasketOpen(false);
        }
    };

    const toggleBasket = () => {
        setBasketOpen(!basketOpen);
        if (burgerOpen) {
            setBurgerOpen(false);
        }
    };


    return (
       
        <nav className={styles.nav}>
            <Logo />
            <div className={styles["basket-burger"]}>
                <BurgerIcon handleClick={toggleBurger} />
                <BasketIcon handleClick={toggleBasket} />
                   
            </div>

            <div className={`${styles["burger-menu"]} ${burgerOpen ? styles.active : ''}`}>
                <BurgerMenu toggleBurger={toggleBurger} />
            </div>
            <div className={`${styles["basket-menu"]} ${basketOpen ? styles.active : ''}`}>
                <BasketMenu />
            </div>

         
        </nav>
    );


};

export default Navigation;