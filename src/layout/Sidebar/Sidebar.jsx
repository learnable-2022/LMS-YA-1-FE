import design from './sidebar.module.css';
import { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

import {
  Dashboard,
  Profile,
  Enrolled,
  Students,
  Certification,
  Settings,
  Logout,
  LOGO,
} from '../../assets/sideIcons.js';

const Sidebar = () => {
  const reloadPage = () => {
    window.location.reload();
  };
  const [activeItem, setActiveItem] = useState('');
  const location = useLocation();

  //Logout Functionality
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  // update activeItem based on current location
  useEffect(() => {

    if (location.pathname === "/dashboard") {
      setActiveItem("dashboard");
    } else if (location.pathname === "/students") {
      setActiveItem("students");
    } else if (location.pathname === "/student-details/:name") {
      setActiveItem("students");
    } else if (location.pathname === "/dashboard/leaderboard") {
      setActiveItem("leaderboard");
    } else if (location.pathname === "/courses") {
      setActiveItem("courses");
    } else if (location.pathname === "/dashboard/settings") {
      setActiveItem("settings");

    }
  }, [location]);

  // define active and inactive colors
  const activeBackgroundColor = '#1164D3';

  // set style for active link
  const activeLinkStyle = {
    backgroundColor: activeBackgroundColor,
    textDecoration: 'none',
    color: '#fff',
    transition: '.5s ease',
  };

  return (
    <div className={design.Sidebar_wrapper}>
      <img src={LOGO} className={design.SideLogo} onClick={reloadPage} />
      <div className={design.menuItems}>
        {' '}
        <div>
          <Link
            className={design.Sidebar_tabs}
            to='/dashboard'
            style={activeItem === 'dashboard' ? activeLinkStyle : {}}
          >
            {' '}
            <div className={design.Sidebar_tabs_inner}>
              <img src={Dashboard} />

              <h3>Dashboard</h3>
            </div>
          </Link>
        </div>
        <div>
          <Link
            className={design.Sidebar_tabs}
            to='wallet'
            style={activeItem === 'wallet' ? activeLinkStyle : {}}
          >
            <div className={design.Sidebar_tabs_inner}>
              <img src={Profile} />

              <h3>My Profile</h3>
            </div>
          </Link>
        </div>
        <div>
          <Link
            className={design.Sidebar_tabs}
            to='/courses'
            style={activeItem === 'courses' ? activeLinkStyle : {}}
          >
            <div className={design.Sidebar_tabs_inner}>
              <img src={Enrolled} />

              <h3>Courses</h3>
            </div>{' '}
          </Link>
        </div>
        <div>
          <Link
            className={design.Sidebar_tabs}
            to='/students'
            style={activeItem === 'students' ? activeLinkStyle : {}}
          >
            <div className={design.Sidebar_tabs_inner}>
              <img src={Students} />

              <h3>Students</h3>
            </div>{' '}
          </Link>
        </div>
        <div>
          <Link
            className={design.Sidebar_tabs}

            to="/certificate"
            style={activeItem === "certificate" ? activeLinkStyle : {}}

          >
            <div className={design.Sidebar_tabs_inner}>
              <img src={Certification} />


              <h3>Certificates</h3>
            </div>

          </Link>
        </div>
        <div>
          <Link
            className={design.Sidebar_tabs}
            to='settings'
            style={activeItem === 'settings' ? activeLinkStyle : {}}
          >
            <div className={design.Sidebar_tabs_inner}>
              <img src={Settings} />

              <h3>Settings</h3>

            </div>
          </Link>
        </div>

        <div className={design.Sidebar_tabs} onClick={handleLogout}>
          <img src={Logout} /> <h3>Log out</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
