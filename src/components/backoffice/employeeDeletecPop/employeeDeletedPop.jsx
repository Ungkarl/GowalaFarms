import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from './employeeDeletedPop.module.css';

const EmployeeDeletedPopUp = ({deletedEmployee}) => {
    
    const [show, setShow] = useState(false);

    useEffect(() => {
        console.log(deletedEmployee);
        if (deletedEmployee != null) {
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 3000);
        }
    }, [deletedEmployee]);

    return (
        <div className={show ? styles.employeeDeletedPopUp : `${styles.employeeDeletedPopUp} ${styles.hidden}`}>
            <p>{deletedEmployee ? `${deletedEmployee.name} was successfully deleted` : ''}</p>
        </div>
    );
};

export default EmployeeDeletedPopUp;