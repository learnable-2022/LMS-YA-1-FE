import { useNavigate } from 'react-router-dom';
import UserContext from '../../../context/UserContext';
import { useContext } from 'react';
import style from './studentsDash.module.css';

function StudentsDash() {
  const { auth, setAuth } = useContext(UserContext);
  const navigate = useNavigate();
  // test
  return (
    <div className={style['students-dash']}>
      <img src={auth?.avatarUrl} alt='' />

      <h3>
        {auth?.firstName} {auth?.lastName}
      </h3>
      <p>You are signed in as {auth?.role}</p>
      <section>
        <button onClick={() => navigate('/linkpage')}>Link Page</button>
        <button onClick={() => navigate('/student-dashboard')}>
          Students Dashboard
        </button>
      </section>
    </div>
  );
}

export default StudentsDash;
