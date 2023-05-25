import styles from './footer.module.css'
import logo from '../../assets/geek-logo.png'
import { GrFacebookOption, GrTwitter, GrInstagram, GrLinkedin } from "react-icons/gr";
import Button from '../UserJourney/JourneyComponents/Button/Button'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={styles['footer']}>
      <section className={styles['section-1']}>
        <img src={logo} alt="logo" />

        <div>
          <p>Redefining online education</p>
            <Link to='/signup'>
                <Button
                  text="Get Started"
                  customStyle={{"backgroundColor": "#0C4592", "color":"#FFFFFF"}}
                />
            </Link>
        </div>
      </section>
      <section className={styles['section-2']}>

        <figure className={styles['icon-container']}>
          <GrFacebookOption className={styles["social-media-icon"]}/>
          <GrTwitter className={styles["social-media-icon"]} />
          <GrInstagram className={styles["social-media-icon"]} />
          <GrLinkedin className={styles["social-media-icon"]} />
        </figure>

        <div className={styles['legal-details-container']} >
          <p className={styles['legal-details-1']}>Terms of Service</p>
          <p className={styles['legal-details-2']}>Privacy Policy</p>
        </div>

      </section>
    </div>
  )
}

export default Footer
