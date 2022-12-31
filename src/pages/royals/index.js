import { graphql, Link } from 'gatsby';
import * as React from 'react'
import Layout from '../../components/layout'
import Royal from "../../components/royal"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const RoyalsPage = ({ data:
  {
    allWpRoyal: { edges },
    wpPage: { royalsFields },
  }

}) => {

  const image = getImage(royalsFields.picture.localFile)

  return (
    <Layout pageTitle="Crown Jewels">

      <GatsbyImage
        className="cover w-full h-2/4"
        image={image}
        alt={royalsFields.picture.altText}
      />

      <div dangerouslySetInnerHTML={{
        __html: royalsFields.description,
      }}
      />


      <div className="place-items-center grid grid-cols-3 gap-y-20">
        {edges.map(({ node: royal }) => (
          <Royal key={royal.id} slug={royal.slug} royal={royal} titles={royal.titles} />
        ))}
      </div>


    </Layout>
  )
}
export default RoyalsPage;

export const query = graphql`
query {
    wpPage(slug: {eq: "royals"}) {
      royalsFields {
        title
        description
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
          altText
        }
      }
    }
    allWpRoyal {
      edges {
        node {
          id
          royalMeta {
            firstName
            lastName
            officialTitle
            house
            pictureCard {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
          slug
          titles {
            nodes {
              name
            }
          }
        }
      }
    }

}
`