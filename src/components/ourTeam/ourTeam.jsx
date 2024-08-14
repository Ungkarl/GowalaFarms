import styles from './ourTeam.module.css';
import OurTeamCard from './ourTeamCard';
const OurTeam = () => {

    const teamMembers = [
        {
            name: 'Michael Swartz',
            desc: 'Continually productize compelling quality for packed with Elated Themes Setting up to website and it crating pages.',
            image: '/employees/01.jpg'
        },
        {
            name: 'Michael Swartz',
            desc: 'Continually productize compelling quality for packed with Elated Themes Setting up to website and it crating pages.',
            image: '/employees/02.jpg'
        }


    ];

    return (
        <div className={styles.ourTeam}>
            <div className={styles.ourTeamTitle}>
            <h1 className={styles.ourTeamH1}>Our Team</h1>
                <h2 className={styles.ourTeamH2}>2000+ People work since 1975</h2>
                <p className={styles.ourTeamDesc}>Continually productize compelling quality for packed with Elated Themes Setting up to website and it crating pages .</p>
    
            </div>
            <div className={styles.teamCards}>
            
             {teamMembers.map((teamMember, index) => (
                <OurTeamCard key={index} name={teamMember.name} desc={teamMember.desc} image={teamMember.image} />
             ))}       
            </div>
          

        </div>
    );
};

export default OurTeam;