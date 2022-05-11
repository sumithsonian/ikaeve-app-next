import styles from './TheAppBar.module.scss'
import Link from 'next/link'

const TheAppBar = () => (
  <>
    <nav className={styles.appBar}>
      <ul>
        <li>
          <Link href="/">ホーム</Link>
        </li>
        <li>
          <Link href="/">ランキング</Link>
        </li>
        <li>
          <Link href="/">大会</Link>
        </li>
        <li>
          <Link href="/">チーム/団体</Link>
        </li>
        <li>
          <button>メニュー</button>
        </li>
      </ul>
    </nav>
  </>
)

export default TheAppBar
