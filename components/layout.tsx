import { ReactElement } from 'react'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'
import styles from './layout.module.scss'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

const Layout = ({ children }: LayoutProps) => (
  <>
    <div className={styles.platform}>
      <TheHeader />
      <main>{children}</main>
      <TheFooter />
    </div>
  </>
)

export default Layout
