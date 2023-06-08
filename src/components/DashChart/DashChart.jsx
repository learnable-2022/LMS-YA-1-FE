import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TEST from '../../assets/Tappi.png';
import STAR1 from '../../assets/star1.png';
import STAR2 from '../../assets/star2.png';
import design from './dashChart.module.css';

const DashChart = ({
  position1,
  position2,
  position3,
  //   student1,
  //   student2,
  //   student3,
}) => {
  const [scaleHeight1, setScaleHeight1] = useState(0);
  const [scaleHeight2, setScaleHeight2] = useState(0);
  const [scaleHeight3, setScaleHeight3] = useState(0);

  useEffect(() => {
    setScaleHeight1(position1);
  }, [position1]);

  useEffect(() => {
    setScaleHeight2(position2);
  }, [position2]);

  useEffect(() => {
    setScaleHeight3(position3);
  }, [position3]);

  const progressStyle2 = {
    backgroundColor: ' #FFF8D2',
    height: `${scaleHeight2}%`,
    transition: 'width 0.5s ease-in-out',
  };
  const progressStyle1 = {
    backgroundColor: '#E2F3DA',
    height: `${scaleHeight1}%`,
    transition: 'width 0.5s ease-in-out',
  };
  const progressStyle3 = {
    backgroundColor: ' #FFF8D2',
    height: `${scaleHeight3}%`,
    transition: 'width 0.5s ease-in-out',
  };

  return (
    <div className={design.DashChart}>
      <div className={design.DashChart_items}>
        <div style={progressStyle2} className={`${design.rotate}`}>
          <img src={STAR2} className={design.star} />
          <p>{`${position2}% `}</p>
        </div>
        {/* <p>{student2}</p> */}

        <img src={TEST} className={design.DashCart_User} />
      </div>
      <div className={design.DashChart_items}>
        <div style={progressStyle1} className={`${design.rotate}`}>
          <img src={STAR1} className={design.star} />
          <p>{`${position1}% `}</p>
        </div>
        {/* <p>{student1}</p> */}

        <img src={TEST} className={design.DashCart_User} />
      </div>
      {/* <div> */}
      <div className={design.DashChart_items}>
        <div style={progressStyle3} className={`${design.rotate}`}>
          {''}
          <img src={STAR2} className={design.star} />
          <p>{`${position3}% `}</p>
        </div>
        {/* <p>{student3}</p> */}
        <img src={TEST} className={design.DashCart_User} />
      </div>
      {/* </div> */}
    </div>
  );
};

DashChart.propTypes = {
  position1: PropTypes.object,
  position2: PropTypes.object,
  position3: PropTypes.object,
  student1: PropTypes.object,
  student2: PropTypes.object,
  student3: PropTypes.object,
};

export default DashChart;
