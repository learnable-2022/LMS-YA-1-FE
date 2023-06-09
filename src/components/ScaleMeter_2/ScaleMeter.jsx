import { useState, useEffect } from 'react';
import './style.css';
import PropTypes from 'prop-types';
const ScaleMeter2 = ({
  number,
  meterColor,
  progressColor,
  width,
  title,
  className,
  progressClass,
  meterClass,
}) => {
  const [scaleWidth, setScaleWidth] = useState(0);
  useEffect(() => {
    setScaleWidth(number);
  }, [number]);

  const backgroundStyle = {
    backgroundColor: '#fff',
  };

  const meterStyle = {
    backgroundColor: `${meterColor}`,
    height: '20px',
    width: `${width}`,
    overflow: 'hidden',
  };

  const progressStyle = {
    backgroundColor: `${progressColor}`,
    height: '100%',
    width: `${scaleWidth}%`,
    transition: 'width 0.5s ease-in-out',
  };

  return (
    <div style={backgroundStyle} className={className}>
      <h3>{title}</h3>
      <div style={meterStyle} className={meterClass}>
        <div style={progressStyle} className={progressClass}></div>
      </div>
      <p>{number}%</p>
    </div>
  );
};

ScaleMeter2.propTypes = {
  number: PropTypes.object,
  className: PropTypes.object,
  meterClass: PropTypes.object,
  progressClass: PropTypes.object,
  meterColor: PropTypes.string,
  progressColor: PropTypes.string,
  width: PropTypes.string,
  title: PropTypes.string,
};

export default ScaleMeter2;
