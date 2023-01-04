import * as React from "react"
import Navigation from './navigation'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby';

// Navigation wordt geïmporteerd
const Header = ({siteTitle}) => {

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
            <h1 className="font-Poppins text-some-kind-of-purple text-3xl font-bold ml-6">{siteTitle.toUpperCase()}</h1>
          </Link>

          <Navigation />

        </div>
      </header>
    </div>

  )
}

export default Header
