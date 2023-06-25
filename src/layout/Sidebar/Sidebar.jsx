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
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import MessageIcon from '@mui/icons-material/Message';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

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
    if (location.pathname === '/admin-dashboard') {
      setActiveItem('dashboard');
    } else if (location.pathname === '/announcement') {
      setActiveItem('announcement');
    } else if (location.pathname === '/courses') {
      setActiveItem('courses');
    } else if (location.pathname === '/teams') {
      setActiveItem('teams');
    } else if (location.pathname === '/meeting') {
      setActiveItem('meeting');
    } else if (
      location.pathname === '/students' ||
      location.pathname.startsWith('/student-details/')
    ) {
      setActiveItem('students');
    } else if (
      location.pathname === '/certificate' ||
      location.pathname.startsWith('/certificate')
    ) {
      setActiveItem('certificate');
    } else if (location.pathname === '/chat') {
      setActiveItem('chat');
    } else if (location.pathname === '/profile') {
      setActiveItem('profile');
    } else if (location.pathname === '/settings') {
      setActiveItem('settings');
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
            to='/admin-dashboard'
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
            to='/announcement'
            style={activeItem === 'announcement' ? activeLinkStyle : {}}
          >
            <div className={design.Sidebar_tabs_inner}>
              {/* <img src={Profile} /> */}
              <CampaignOutlinedIcon />

              <h3>Announcements</h3>
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
            to='/teams'
            style={activeItem === 'teams' ? activeLinkStyle : {}}
          >
            <div className={design.Sidebar_tabs_inner}>
              <Diversity3Icon />

              <h3>Teams</h3>
            </div>{' '}
          </Link>
        </div>
        <div>
          <Link
            className={design.Sidebar_tabs}
            to='/meeting'
            style={activeItem === 'meeting' ? activeLinkStyle : {}}
          >
            <div className={design.Sidebar_tabs_inner}>
              <MeetingRoomIcon />

              <h3>Meeting</h3>
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
            to='/certificate'
            style={activeItem === 'certificate' ? activeLinkStyle : {}}
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
            to='/chat'
            style={activeItem === 'chat' ? activeLinkStyle : {}}
          >
            <div className={design.Sidebar_tabs_inner}>
              {/* <img src={Students} /> */}
              <MessageIcon />

              <h3>Chat</h3>
            </div>{' '}
          </Link>
        </div>
        <div>
          <Link
            className={design.Sidebar_tabs}
            to='/profile'
            style={activeItem === 'profile' ? activeLinkStyle : {}}
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
            to='/settings'
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
