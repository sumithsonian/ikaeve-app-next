import { ReactElement } from 'react'
import TheHeader from './TheHeader'
import TheAppbar from './TheAppbar'
import styles from './layout.module.scss'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

const Layout = ({ children }: LayoutProps) => (
  <>
    <div className={styles.platform}>
      <TheHeader />
      <main>{children}</main>
      <TheAppbar />
    </div>
  </>
)

export default Layout
