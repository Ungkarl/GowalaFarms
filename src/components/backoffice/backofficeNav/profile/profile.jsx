import { useAuth } from "../../../../hooks/useAuth";
import styles from './profile.module.css';

const SignedIn = ({user}) => {
    return (
        <>
        <img className={styles.userImg} src={`http://localhost:3042/${user.picture ? user.picture : '/users/fallback.jpg'}`} />
        </>
        
    );
};


const SignedOut = () => {
    return (
        <>
        </>
    );
};

const Profile = () => {
    const { signedIn, getUser, signOut} = useAuth();

    const user = getUser();

    return (
        <div className={styles.profile}>
            <div className={styles.picture}>
                {signedIn ? <SignedIn user={user}></SignedIn> : <SignedOut></SignedOut>}
            </div>
            <div className={styles.info}>
                <h2>{signedIn ? user.name : 'Not signed in'}</h2>
                <p>{signedIn ? user.email : 'Sign in to see your profile'}</p>
                {signedIn ? <button className={styles.signOutBtn} onClick={signOut}>Sign out</button> : ''}
            </div>
         </div>   
    );



};

export default Profile;