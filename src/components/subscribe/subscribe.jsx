import styles from './subscribe.module.css';
import SubscribeForm from './subscribeForm';


const Subscribe = () => {

    return (
        <div className={styles.subscribe}>
            <div className={styles.subscribeTitle}>
                <h1 className={styles.subscribeH1}>Subscribe</h1>
                <p className={styles.subscribeDesc}>Get news about new dairy products</p>
                <p className={styles.subscribeDescSec}>
                Continually productize compelling quality for packed with Elated Themes Setting up to website and it crating pages .
                </p>
            </div>
            <SubscribeForm />
        </div>

    );

};

export default Subscribe;