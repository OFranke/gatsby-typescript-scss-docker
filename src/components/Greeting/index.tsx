import * as React from 'react'
import * as styles from './styles.module.scss'

class Greeting extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <div className={styles.text}>
        Thanks for checking out - if you have feedback or want to say anything,
        just reach out to me at oliver.franke@limebit.de
      </div>
    )
  }
}

export default Greeting
