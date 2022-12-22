import * as React from 'react'
import Header from './header'
import Footer from './footer'
import { useStaticQuery, graphql } from 'gatsby'


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      wpPage(slug: {eq: "contact"}) {
        contactFields {
          address
          city
          zipCode
        }
      }
    }
    `)

  return (
    <>
      <div class="flex flex-col h-screen bg-baby-rose">
        <title> {pageTitle} | {data.site.siteMetadata.title}</title>
        <Header />
        <body>
          <main>
            {/* <h1 className="text-3xl font-Spectral underline"> {data.site.siteMetadata.title}</h1> */}
            {children}
          </main>
        </body>
      </div>
      <Footer
        siteTitle={data.site.siteMetadata.title}
        companyInfo={data.wpPage.contactFields}
      />
    </>
  )
}

export default Layout