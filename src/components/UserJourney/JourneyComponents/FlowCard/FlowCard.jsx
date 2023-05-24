import styles from './flowCard.module.css'

function FlowCard({number, journey, description}) {
  return (
    <div className={styles['flowCard']}>
        <p className={styles['number']}>{number}</p>
        <h1 className={styles['title']}>{journey}</h1>
        <p className={styles['description']}>{description}</p>
    </div>
  )
}

export default FlowCard
