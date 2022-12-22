import * as React from "react"
import Navigation from './navigation';
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
    `)

  return (

    <div>
      <header >
        <div className="flex items-center bg-baby-rose border-b-2">
          <h1 className="font-Inconsolata text-some-kind-of-purple text-6xl font-bold py-6 px-6">{data.site.siteMetadata.title}</h1>
          <Navigation />
        
        </div>

      </header>

    </div>

  )
}

export default Header
