import styles from './styles.module.css'

export function IconSpinner () {
  return (
    <svg className={styles.svg}>
      <circle cx={10} cy={10} r={10} className={styles.circle} />
    </svg>
  )
}
