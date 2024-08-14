import { NavLink, useRoutes, useLocation } from 'react-router-dom';
import './App.css';
import Frontpage from './pages/frontpage/frontpage';
import Navigation from './components/navigation/navigation';
import BackOfficePage from './pages/backoffice/BackOfficePage';
import SignInPage from './pages/signin/SignInPage';
import EmployeesPage from './pages/backoffice/employees/EmployeesPage';
import AddEmployee from './components/backoffice/addEmployee/addEmployee';
import DeleteEmployee from './components/backoffice/deleteEmployee/DeleteEmployee';

function App() {
  const location = useLocation();
  
  const routes = useRoutes([
    {
      path: '/',
      element: <Frontpage />
    },
    {
      path: '/backoffice',
      element: <BackOfficePage />,
      children: [
        {
          path: '/backoffice/signin',
          element: <SignInPage />
        },
        {
          path: '/backoffice/employees',
          element: <EmployeesPage />,
          children : [
            {
              path: '/backoffice/employees/add',
              element: <AddEmployee />
            },
            {
              path: '/backoffice/employees/delete/:id',
              element: <DeleteEmployee />

            },
            {
              path: '/backoffice/employees/edit/:id',
              element: <div>Edit Employee Component</div>
            }

          ]
        },
      ]
    }
  ]);

  // Tjek om den aktuelle path inkluderer '/backoffice'
  const isBackOffice = location.pathname.startsWith('/backoffice');

  return (
    <div className="center-page">
      <div className="background"></div>
      
      {!isBackOffice && <Navigation />}
      
      <div className={isBackOffice ? "backoffice-content" : "content"}>
        <div>{routes}</div>
        {!isBackOffice && <div>FOOTER</div>}
      </div>
    </div>
  );
}

export default App;
