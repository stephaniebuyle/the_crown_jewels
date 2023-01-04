import * as React from 'react'
import Header from './header'
import Footer from './footer'
import { useStaticQuery, graphql } from 'gatsby'

// Footer & Header worden geïmporteerd 
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
          facebook
          instagram
          twitter
        }
      }
    }
    `)

  return (
    <>
      <div class="flex flex-col h-full bg-baby-rose justify-between">
        <title> {pageTitle} | {data.site.siteMetadata.title}</title>
        <Header siteTitle={data.site.siteMetadata.title}/>
        <body>
          <main className="pt-6 pb-12 mb-12">
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