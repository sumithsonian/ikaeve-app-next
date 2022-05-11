import { ReactElement } from "react";
import styles from "./layout.module.scss";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

const Layout = ({ children }: LayoutProps) => (
  <>
    <div className={styles.platform}>
      <header>
        <p>header</p>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  </>
);

export default Layout;
