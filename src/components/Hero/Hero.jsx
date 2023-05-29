import styles from './hero.module.css'
import logo from '../../assets/Group 8838.png'
function Hero() {
    return (
      <div className={styles['h1']}>
       <h1 className={styles['hero']}><b>
        Redefining Online Education.
       </b></h1>
       <p className={styles['hero2']}>
       
        Experience the future of Online Education with
        Seamless Teachings and Engaging Learning on a 
        Single All-In-One Platform with Greek.
       </p>
       <img className={styles['logo']} src={logo} alt={styles["logo"]} />
       
       <button className={styles['btn']}> Get Started
    
       </button>
       
      
      </div>
    )
  }
  
  export default Hero
  