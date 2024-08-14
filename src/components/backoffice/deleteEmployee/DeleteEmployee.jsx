import { Link, useOutletContext, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import styles from './DeleteEmployee.module.css';
import { useEffect, useState } from "react";
import {  PropagateLoader } from "react-spinners";

const DeleteEmployee = () => {
    const { id } = useParams();
    const { employees, deleteEmployee } = useOutletContext();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const fetchEmployee = async () => {
            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log(employees);
            const employee = employees.find(employee => employee._id === id);
            setEmployee(employee);
        };

        fetchEmployee();
    }, [employees, id]);

    if (!employee) {
        return <div className={styles.loading}><PropagateLoader color="#337744" size={20} /></div>;
    }

    const handleDelete = (e) => {
        e.preventDefault();
        deleteEmployee(id);

    };

    return (
        <div className={styles.deleteEmployeeContainer}>
            
            <div className={styles.employee}>
            <Link to="/backoffice/employees" className={styles.employeeBackButton}><IoIosArrowRoundBack /></Link>
                <div className={styles.employeeImgContainer}>
                <img className={styles.employeeImg} src={`http://localhost:3042${employee.imagePath}`} alt="Employee" />
                </div>
                <div className={styles.employeeInfo}>
                <h2>{employee.name}</h2>
                <p>{employee.position}</p>
                <p>{employee.description}</p>
                </div>
                
                <button className={styles.deleteConfirmBtn} onClick={handleDelete}>CONFIRM DELETION</button> 
            </div>
        </div>
    );
};

export default DeleteEmployee;