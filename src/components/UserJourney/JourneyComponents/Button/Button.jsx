import styles from './button.module.css'

function Button({text, customStyle}) {
  return (
    <button style={customStyle} className={styles['btn']}>
      {text}
    </button>
  )
}

export default Button
