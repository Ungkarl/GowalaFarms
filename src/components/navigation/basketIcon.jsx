import { FaShoppingBasket } from "react-icons/fa";
import styles from './navigation.module.css';

const BasketIcon = ( {handleClick} ) => {
    return (
        <div className={styles.basket} onClick={handleClick}>
           <FaShoppingBasket />
        </div>
    );
};

export default BasketIcon;