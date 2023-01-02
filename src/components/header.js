import * as React from "react"
import Navigation from './navigation'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby';

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

          <Link to="/">
            <StaticImage
              alt="logo"
              src="../images/logo5c.png"
              className="ml-8 w-10"
            />
          </Link>
          <Link to="/">
            <h1 className="font-Poppins text-some-kind-of-purple text-3xl font-bold ml-6">{data.site.siteMetadata.title.toUpperCase()}</h1>

          </Link>

          <Navigation />

        </div>

      </header>

    </div>

  )
}

export default Header
