import styles from './linkPage.module.css';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';

import logo from '../../assets/geek-union.png';
import img from '../../assets/EduSignup.png';

function LinkPage() {
  const navigate = useNavigate();
  const { auth } = useContext(UserContext);

  const signOut = () => {
    navigate('/login');
    setAuth(null);
  };

  return (
    <div className={styles['linkPage']}>
      <figure className={styles['right-section']}>
        <img src={img} alt='' />
      </figure>

      <div className={styles['left-section']}>
        <img className={styles['logo']} src={logo} alt='logo' />
        <h1 className={styles['title']}>
          {' '}
          Welcome {auth.firstName} {auth.lastName}
        </h1>
        <p className={styles['subtitle']}>
          Navigate through Geek either as a Student or an Admin
        </p>

        <section>
          <p> </p>

          <div
            onClick={() => navigate('/studentsDash')}
            className={styles['link']}
          >
            Student
          </div>

          <div
            onClick={() => navigate('/admin-dashboard')}
            className={styles['link']}
          >
            Admin
          </div>

          <div onClick={signOut} className={styles['link']}>
            Sign Out
          </div>
        </section>
      </div>
    </div>
  );
}

export default LinkPage;
