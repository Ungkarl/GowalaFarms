import styles from './serviceTeaser.module.css';
import Card from './card';

const ServiceTeaser = () => {
    const images = [
        '/services/01.png',
        '/services/02.png',
        '/services/03.png',
    ];
    const cards = [
        {
            title: "Farm Technological Leader",
            description: "Continually productize compelling quality for packed with Elated Themes Setting up to website and it crating pages .",
            image: images[0],
        },
        {
            title: "Farm Technological Leader",
            description: "Continually productize compelling quality for packed with Elated Themes Setting up to website and it crating pages .",
            image: images[1],
        },
        {
            title: "Farm Technological Leader",
            description: "Continually productize compelling quality for packed with Elated Themes Setting up to website and it crating pages .",
            image: images[2],
        }
    ];

    return (
        <div className={styles.serviceTeaser}>
            <div className={styles.title}>
                <h2 className={styles.serviceH2}>The Leader of all Milk</h2>
                <h1 className={styles.serviceH1}>Safe and Healthy Milk Since 1975</h1>
                <div className={styles.cards}>
                    {cards.map((card, index) => (
                        <Card key={index} title={card.title} description={card.description} image={card.image} />
                    ))}
                    
                </div>
            </div>
        </div>
    );



};


export default ServiceTeaser;