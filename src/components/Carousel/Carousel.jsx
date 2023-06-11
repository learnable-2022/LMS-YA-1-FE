import { useState } from 'react';
import CarouselItem from './CarouselItem';
import example1Icon from '../../assets/Carousel1.png';
import example2Icon from '../../assets/Carousel2.png';
import example3Icon from '../../assets/Carousel1.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './Carousel.module.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed commodo nibh etiam placerat. Ut eget in neque nulla vivamus. In proin arcu id risus volutpat rutrum eget purus odio.',
      icon: example1Icon,
      name: 'Mantas',
      title: 'Learnable Intern',
    },
    {
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed commodo nibh etiam placerat. Ut eget in neque nulla vivamus. In proin arcu id risus volutpat rutrum eget purus odio.',
      icon: example2Icon,
      name: 'Mantas',
      title: 'Learnable Intern',
    },
    {
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed commodo nibh etiam placerat. Ut eget in neque nulla vivamus. In proin arcu id risus volutpat rutrum eget purus odio.',
      icon: example3Icon,
      name: 'Mantas',
      title: 'Learnable Intern',
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className={styles.main}>
      <div className={styles['text-section']}>
        <h2 className={styles['text-title']}>
          What our customers <br /> say about us
        </h2>
        <p className={styles['text-description']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
          nibh etiam placerat. Ut eget in neque nulla vivamus. In proin arcu id
          risus volutpat rutrum eget purus odio.
        </p>
        <div className={styles['carousel-buttons']}>
          <button
            className={styles['carousel-arrow']}
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <ArrowBackIcon />
          </button>
          <button
            className={styles['carousel-arrow']}
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
      <div className={styles['carousel']}>
        <div
          className={styles.inner}
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <CarouselItem key={index} item={item} width={'100%'} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
