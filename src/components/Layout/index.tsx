import 'src/styles/main.scss'
import * as React from 'react'
import styles from './styles.module.scss'

interface LayoutProps {
  children: JSX.Element
}

class Layout extends React.PureComponent<LayoutProps> {
  public render(): JSX.Element {
    return (
      <React.Fragment>
        <main className={styles.layout}>{this.props.children}</main>
      </React.Fragment>
    )
  }
}

export default Layout
