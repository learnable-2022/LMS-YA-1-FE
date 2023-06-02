import { useState } from 'react';
import AddButton from '../../AddButton/AddButton';
import design from './addWeek.module.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const AddWeek = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };
  return isVisible ? (
    <div className={design.AddWeek}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2>Week 1</h2>
        <HighlightOffIcon
          onClick={handleClose}
          style={{
            cursor: 'pointer',
            color: '#292D32',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          color: '#3D4555',
        }}
      >
        <label htmlFor='title'>
          <h3>Title:</h3>
        </label>
        <input type='text' id='title' name='title' />
      </div>
      <AddButton content='Save' />{' '}
    </div>
  ) : null;
};

export default AddWeek;
