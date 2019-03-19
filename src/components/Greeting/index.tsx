import * as React from 'react'
import * as styles from './styles.module.scss'

interface GreetingProps {
  siteName: string
}
class Greeting extends React.PureComponent<GreetingProps> {
  public render(): JSX.Element {
    const { siteName } = this.props
    return (
      <div className={styles.textWrapper}>
        <h1>Thanks for checking out {siteName}</h1>
        <div>
          {
            "This stack is designed to create the most convenient developer experience possible. It's worked out to consider responsiveness and reusability from the beginning. Please refer to the README for details and documentation."
          }
        </div>
        <div>
          {
            "If you're here already and want to play around a little, check out the styles.module.scss of the <Greeting> component. There's already some cool magic happening."
          }
        </div>
        <div className={styles.feedback}>
          {
            "If you have feedback or suggestion for improval, I'd be super happy if you reach out to me at"
          }
          <div>
            <a href={'mailto:oliver.franke@limebit.de'}>
              {'oliver.franke@limebit.de'}
            </a>
          </div>
          <div>
            {'or just open a ticket at '}
            <a
              href={'https://github.com/OFranke/gatsby-typescript-scss-modules'}
            >
              {'gatsby-typescript-scss-modules'}
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Greeting
