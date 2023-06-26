import Elevate_Card from './Elevate_Components/Elevate_Card_L/Elevate_Card_L';
import Elevate_Card_D from './Elevate_Components/Elevate_Card_D/Elevate_Card_D';
import design from './elevate.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Elevate = () => {
  return (
    <div className={design.Elevate_wrapper}>
      <h1>Elevate Your Education Journey with Unparalleled Features</h1>
      <div className={design.Elevate_flex}>
        <Elevate_Card
          title='Blockchain supported certification'
          text='To combat certificate forgery/fraud/impersonation: Here, they can be issued certificates with QR codes on it for verifying its authenticity.'
        />
        <Elevate_Card_D
          title='Automated grouping for team projects/tasks'
          text='Here, the interns no longer have to search for their teammates when a grouping is done: the groups are created fir them automatically with their teammates in the group already.'
        />
        <Elevate_Card_D
          title='All your favorite features all in one place'
          text='Need video call for a class, we got you covered. Need a Leaderboard for your student ranking, we got you covered. Need a chat room for communicating effectively, we have that covered. We promised an all-in-one platform and we made sure we delivered.'
        />
        <Elevate_Card
          title='Affordable Pricing'
          text='You don’t have to break the bank before you can have access to all ur amazing features. Our pricing is affordable and the best part, it’s free to use for the first year.'
        />
      </div>
      <div className={design.Affordable_pricing}>
        <h2>Affordable Pricing</h2>
        <p>
          All the features in Geek beta are completely free ($0) to use for a
          period of one year
        </p>
        <Link to='/signup'>
          <Button
            content='Get started'
            style={{
              background: '#fff',
              color: '#0C4592',
              border: '1px solid #fff',
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Elevate;
