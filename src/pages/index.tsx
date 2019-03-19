import * as React from 'react'

import { graphql } from 'gatsby'

// import * as styles from './styles.module.scss'
import Greeting from '../components/Greeting'
import * as styles from './styles.module.scss'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`

class IndexPage extends React.Component<IndexPageProps> {
  public render(): JSX.Element {
    const { siteName } = this.props.data.site.siteMetadata

    return (
      <div className={styles.wrapper}>
        <Greeting />
        Check out the way I typed GraphQL Queries - I am very open for
        improvements on my {siteName}
      </div>
    )
  }
}

export default IndexPage
