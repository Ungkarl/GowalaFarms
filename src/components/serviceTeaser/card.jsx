import styles from './card.module.css';

const Card = ({ title, description, image}) => {

    return (
        <div className={styles.card}>
            <img className={styles.cardImg} src={image} alt={title} />
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{description}</p>
        </div>
    );

};

export default Card;