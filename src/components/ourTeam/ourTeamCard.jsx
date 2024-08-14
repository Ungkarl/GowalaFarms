import styles from './ourTeamCard.module.css';

const OurTeamCard = ({ name, desc, image }) => {

    return (
        <div className={styles.teamCard}>
            <img className={styles.teamImg} src={image} alt={name} />
            <div className={styles.nameDesc}>
            <p className={styles.teamDesc}>{desc}</p>
            <h3 className={styles.teamName}>{name}</h3>
            </div>
            
        </div>
    );

};

export default OurTeamCard;