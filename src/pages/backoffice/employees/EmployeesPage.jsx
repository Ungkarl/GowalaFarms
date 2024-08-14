import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from './EmployeesPage.module.css';
import { useAuth } from "../../../hooks/useAuth";
import EmployeeDeletedPopUp from "../../../components/backoffice/employeeDeletecPop/employeeDeletedPop";


const EmployeesPage = () => {
const [employees, setEmployees] = useState([]);
const [deletedEmployee, setDeletedEmployee] = useState(null);
const { token } = useAuth();
const navigate = useNavigate();


useEffect(() => {
    const getEmployees = async () => {
        let response = await fetch('http://localhost:3042/employees');
        let result = await response.json();
        setEmployees(result.data);
    };
    getEmployees();
}, []);

const createEmployee = async (formData) => {
    let response = await fetch('http://localhost:3042/employee', {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: formData
    });
    let result = await response.json();
    setEmployees(prevEmployees => [...prevEmployees, result.data]);
    navigate('/backoffice/employees');
};

const deleteEmployee = async (id) => {
    let response = await fetch(`http://localhost:3042/employee?id=${id}`, {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    let result = await response.json();
    console.log(result);
    let deletedEmployee = employees.find(employee => employee._id === id);
    let newEmployees = employees.filter(employee => employee._id !== id);
    setDeletedEmployee(deletedEmployee);
    setEmployees(newEmployees);
    navigate('/backoffice/employees');



};

return (
    <div className={styles.employees}>
        <EmployeeDeletedPopUp deletedEmployee={deletedEmployee} />
        <Link className={styles.addNewBtn} to={'/backoffice/employees/add'}>Add new employee</Link>

        <div className={styles.employeesTable}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee._id}>
                            <td>{employee.name}</td>                         
                            <td>{employee.position}</td>
                            <td className={styles.actions}>
                                <Link to={`/backoffice/employees/edit/${employee._id}`}>Edit</Link>
                                <Link to={`/backoffice/employees/delete/${employee._id}`}>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            

        </div>
        <Outlet context={{createEmployee, employees, deleteEmployee, deletedEmployee}}></Outlet>
    </div>
);

};


export default EmployeesPage;