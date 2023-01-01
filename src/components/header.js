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
      <header className="mt-4">
        <div className="flex items-center bg-baby-rose">
        <StaticImage 
            alt="logo crown jewels"
            src="../images/logo6.png"
            className="ml-6 w-10"
          />
          <h1 className="font-Poppins text-some-kind-of-purple text-3xl font-bold py-6 ml-2">{data.site.siteMetadata.title}</h1>
        
      
          <Navigation />
        
        </div>

      </header>

    </div>

  )
}

export default Header
