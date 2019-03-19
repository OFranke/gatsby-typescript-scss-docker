import * as React from 'react'
import * as styles from './styles.module.scss'

import Greeting from 'components/Greeting'
import { graphql } from 'gatsby'

interface HomePageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
  }
}

export const homeQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`

class HomePage extends React.Component<HomePageProps> {
  public render(): JSX.Element {
    const { siteName } = this.props.data.site.siteMetadata

    return (
      <div className={styles.wrapper}>
        <Greeting siteName={siteName} />
      </div>
    )
  }
}

export default HomePage
