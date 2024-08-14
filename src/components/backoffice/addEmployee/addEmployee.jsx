import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/useAuth";
import { Link, useOutletContext } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import styles from './addEmployee.module.css'; // Assuming this is the correct path

const AddEmployee = () => {
    const [image, setImage] = useState('/vite.svg');
    const { token } = useAuth();
    const { register, handleSubmit, setValue } = useForm();
    const { createEmployee } = useOutletContext();

    const onImageChange = (e) => {
        let objectUrl = window.URL.createObjectURL(e.target.files[0]);
        setImage(objectUrl);
        setValue("file", e.target.files[0]); 
    };

    // const createEmployee = async (formData) => {
    //     let response = await fetch('http://localhost:3042/employee', {
    //         method: 'POST',
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         },
    //         body: formData
    //     });
    //     let result = await response.json();
    //     console.log(result);
    // };

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('file', data.file);
        formData.append('name', data.name);
        formData.append('position', data.position);
        formData.append('description', data.description);

        createEmployee(formData);
    };

    

    return (
        <div className={styles.addEmployeeContainer}>
            

            <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <Link to="/backoffice/employees" className={styles.backButton}><IoIosArrowRoundBack /></Link>
            <label className={styles.label}>
    Upload Billede
    <img className={styles.EmployeeImg} src={image} alt="Employee Preview" />
    <input
        type="file"
        {...register("file")}
        onChange={onImageChange}
        className={`${styles.input} ${styles.ImgInputHidden}`}
    />
</label>

<label className={styles.label}>
    Name
    <input
        type="text"
        {...register("name")}
        defaultValue="Anders"
        className={styles.input}
    />
</label>

<label className={styles.label}>
    Position
    <select {...register("position")} className={styles.input}>
        <option value="CEO">CEO</option>
        <option value="Admin">Admin</option>
        <option value="Employee Manager">Employee Manager</option>
    </select>
</label>

<label className={styles.label}>
    Description
    <input
        type="text"
        {...register("description")}
        defaultValue="Anders is the CEO of the company"
        className={styles.input}
    />
</label>

                <button className={styles.button} type="submit">CREATE</button>
            </form>
        </div>
    );
};

export default AddEmployee;
