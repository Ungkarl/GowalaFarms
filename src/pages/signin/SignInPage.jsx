import { useAuth } from "../../hooks/useAuth";
import styles from './signInPage.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignInPage = () => {
    const { signIn, signOut, signedIn } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();
    const [emailNotEmpty, setEmailNotEmpty] = useState(false);
    const [passwordNotEmpty, setPasswordNotEmpty] = useState(false);

    // const checkSignedIn = () => {
    //     if (signedIn) {
    //         console.log('Signed in');
    //         navigate('/backoffice/employees');
    //     } else {
    //         console.log('Not signed in');
    //     }
    // };

    // useEffect(() => {
    //     checkSignedIn();
    // }, [signedIn]);

    const onSubmit = async (data) => {
        const { email, password } = data;
        let result = await signIn(email, password);
        if (result) {
            navigate('/backoffice/employees');
        } else {
            alert('Invalid email or password');
        }
    };

    useEffect(() => {
        setValue('email', 'admin@mediacollege.dk');
        setValue('password', 'admin');
    }, [setValue]);

    const emailValue = watch('email', ''); 
    const passwordValue = watch('password', ''); 

    useEffect(() => {
        setEmailNotEmpty(emailValue.trim() !== '');
        setPasswordNotEmpty(passwordValue.trim() !== '');
    }, [emailValue, passwordValue]);

    return (
        <div className={styles.loginContainer}>
            <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <label>
                    <input
                        type="text"
                        {...register('email', { 
                            required: "Email is required", 
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address"
                            }
                        })}
                        className={`${emailNotEmpty ? styles.notEmpty : ''} ${errors.email ? styles.error : ''}`}
                    />
                    <p className={styles.emailHint}>Email</p>
                    {errors.email && <p className={styles.errorText}>{errors.email.message}</p>}
                </label>

                <label>
                    <input
                        type="password"
                        {...register('password', { required: true })}
                        className={`${passwordNotEmpty ? styles.notEmpty : ''} ${errors.password ? styles.error : ''}`}
                    />
                    <p className={styles.passwordHint}>Password</p>
                    {errors.password && <p className={styles.errorText}>Password is required</p>}
                </label>

                <div className={styles.buttons}></div>

                <button className={styles.button} type="submit">Sign In</button>
                <button className={styles.button} type="button" onClick={() => signOut()}>Sign Out</button>
            </form>
        </div>
    );
};

export default SignInPage;
