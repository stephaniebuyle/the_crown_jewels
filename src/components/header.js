import * as React from "react"
import Navigation from './navigation'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

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
      <header className="mt-4 mb-6 pt-6">
        <div className="flex items-center bg-baby-rose">
 
          <h1 className="font-Poppins text-some-kind-of-purple text-3xl font-bold ml-6">{data.site.siteMetadata.title.toUpperCase()}</h1>
          
          <StaticImage 
            alt="logo"
            src="../images/logo5c.png"
            className="ml-4 w-10"
          />
        
      
          <Navigation />
        
        </div>

      </header>

    </div>

  )
}

export default Header
