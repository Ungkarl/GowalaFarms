import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './subscribeForm.module.css';
import { FaCheckCircle } from "react-icons/fa";

const SubscribeForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPopup, setShowPopup] = useState(false); 

    const onSubmit = (data) => {
        console.log(data);
        setShowPopup(true); 
        document.querySelector('input').value = ''; 
        setTimeout(() => {
            setShowPopup(false); 
            
            
        }, 3000); 
    };

    return (
        <div className={styles.subscribeForm}>
            {showPopup && ( 
                <div className={styles.popup}>
                    <FaCheckCircle />
                    <p>Thank you for subscribing.</p>
                    </div> 
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.email && <span>This field is required</span>}
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    {...register("email", { required: true })}
                />
                
                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default SubscribeForm;