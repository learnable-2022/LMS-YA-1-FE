import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ScaleMeter = ({
  number,
  meterColor,
  progressColor,
  width,
  height,
  title,
  className,
  progressClass,
  meterClass,
  coverClass,
  paragraphStyle,
  titleStyle,
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
    height: `${height}`,
    borderTopLeftRadius: '150px',
    borderTopRightRadius: '150px',
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
      <h3 style={titleStyle}>{title}</h3>
      <div style={meterStyle} className={meterClass}>
        <div style={progressStyle} className={progressClass}></div>
        <div className={coverClass}>
          {' '}
          <p className={paragraphStyle}>{number}%</p>
        </div>
      </div>
    </div>
  );
};

ScaleMeter.propTypes = {
  number: PropTypes.object,
  className: PropTypes.object,
  coverClass: PropTypes.object,
  titleStyle: PropTypes.object,
  paragraphStyle: PropTypes.object,
  meterClass: PropTypes.object,
  progressClass: PropTypes.object,
  meterColor: PropTypes.string,
  progressColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
};

export default ScaleMeter;
