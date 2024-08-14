// BurgerIcon.jsx
import styles from './navigation.module.css';

const BurgerIcon = ({ handleClick }) => {
    return (
        <div className={styles.burger} onClick={handleClick} aria-label="Menu">
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
        </div>
    );
};

export default BurgerIcon;
