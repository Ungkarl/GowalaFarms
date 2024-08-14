import { Outlet } from 'react-router-dom';
import styles from './backOfficePage.module.css';
import BackOfficeNavigation from '../../components/backoffice/backofficeNav/navigation/BackOfficeNavigation';
import EmployeeDeletedPopUp from '../../components/backoffice/employeeDeletecPop/employeeDeletedPop';
const BackOfficePage = () => {

    return (
        <div className={styles.backoffice}>
            
            <div className={styles.backofficeNav}>
                <BackOfficeNavigation /> 
            </div>
            <div className={styles.backofficeContent}>
              
                <Outlet />
            </div>
        </div>
    );
};


export default BackOfficePage;