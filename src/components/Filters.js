import styles from './Filters.module.css'
import Icon from './Icons'

export default function Filters({ isNsfw, setNsfw = () => {}, language, setLanguage }) {
  return (
    <div className={styles.filters}>
      <div className={styles.button} onClick={() => setNsfw(!isNsfw)}>
        <Icon name={isNsfw ? 'show' : 'hide'} />
      </div>
      <div className={styles.right}>
        <div className={styles.button}>CH</div>
      </div>
    </div>
  )
}