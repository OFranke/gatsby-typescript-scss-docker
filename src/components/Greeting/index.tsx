import * as React from 'react'
import * as styles from './styles.module.scss'

class Greeting extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <div className={styles.text}>
        <h1>Thanks for checking out</h1>
        <span>
          if you have feedback or want to say anything, just reach out to me at
          oliver.franke@limebit.de
        </span>
      </div>
    )
  }
}

export default Greeting
