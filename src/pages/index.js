import * as React from 'react'
import Layout from '../components/layout'
import Royal from "../components/royal"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HomePage = ({
  data: {
    wpPage: { homeFields },
  },
}) => {

  const image = getImage(homeFields.picture.localFile)

  return (
    <Layout pageTitle="Welcome to Crown Jewels!">

      <section>
        <article>
          <h1> {homeFields.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: homeFields.description,
            }}
          />
          <a target="__blank" href={homeFields.callToAction.url}>
            {homeFields.callToAction.title}
          </a>
        </article>
        <div>
          <GatsbyImage
            image={image}
            alt={homeFields.picture.altText}
          />
        </div>
      </section>

      <section >
        <h2>Featured Royals</h2>
        <p>
        All of our artists are veterans in the industery and have proven themselves time and time again. Every week we put out 3 of our artists in the spotlight section, you can check out their individual portfolio’s and book them by contacting us. Send an email to book@artistagency.com or call us on 0123456789.
        </p>
        <div>
          {homeFields.featuredRoyals.map(royal => {
            return <Royal slug={`royals/${royal.slug}`} key={royal.id} royal={royal} titles={royal.titles}/>
          })}
        </div>
      </section>
        
    </Layout>
  )
}


export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homeFields {
      featuredRoyals {
        ... on WpRoyal {
          id
          slug
          royalMeta {
            officialTitle
            firstName
            lastName
            pictureCard {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
              }
            }
          }
          titles {
            nodes {
              name
            }
          }
        }
      }
      callToAction {
        title
        url
      }
      title
      description
      picture {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
}
`
export default HomePage