import { ReactElement } from 'react'
import TheHeader from './TheHeader'
import TheAppBar from './TheAppBar'
import styles from './layout.module.scss'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

const Layout = ({ children }: LayoutProps) => (
  <>
    <div className={styles.platform}>
      <TheHeader />
      <main>{children}</main>
      <TheAppBar />
    </div>
  </>
)

export default Layout
