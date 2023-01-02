import { graphql} from 'gatsby';
import * as React from 'react'
import Layout from '../../components/layout'
import Royal from "../../components/royal"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  hero
} from "../../page.module.css"

const RoyalsPage = ({ data:
  {
    allWpRoyal: { edges },
    wpPage: { royalsFields },
  }

}) => {

  const image = getImage(royalsFields.picture.localFile)

  return (
    <Layout pageTitle="Crown Jewels">
      <section className="bg-minty-green relative">
        <article className="overflow-hidden">
          <div className={hero}>
          <GatsbyImage
            className="hover:scale-110 object-contain w-full transition-all duration-500 ease-in-out"
            image={image}
            alt={royalsFields.picture.altText}
          />
          </div>
        </article>
        <article className="font-Neuton text-some-kind-of-purple text-xl w-[600px] absolute right-32 bottom-40 bg-opacity-25 bg-minty-green p-12 ">
          <h1 className="font-bold text-6xl" >{royalsFields.title}</h1>
          <div className='p-6 text-2xl text-center'
            dangerouslySetInnerHTML={{ __html: royalsFields.description, }}
          />
        </article>
      </section>

      <section className="">

        <div className="place-items-center grid grid-cols-3 gap-y-20 mt-12 mb-12">
          {edges.map(({ node: royal }) => (
            <Royal key={royal.id} slug={royal.slug} royal={royal} titles={royal.titles} />
          ))}
        </div>
      </section>


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