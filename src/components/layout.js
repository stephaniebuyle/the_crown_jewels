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
      <div class="flex flex-col h-full bg-baby-rose justify-between">
        <title> {pageTitle} | {data.site.siteMetadata.title}</title>
        <Header />
        <body>
          <main className="pt-6 pb-12 ">
            {/* <h1 className="text-3xl font-Spectral underline"> {data.site.siteMetadata.title}</h1> */}
            {children}
          </main>
        </body>
      
      <Footer
        siteTitle={data.site.siteMetadata.title}
        companyInfo={data.wpPage.contactFields}
      />
      </div>
    </>
  )
}

export default Layout