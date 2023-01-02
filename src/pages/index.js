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

  const image1 = getImage(homeFields.picture1.localFile)
  const image2 = getImage(homeFields.picture2.localFile)

  return (
    <Layout pageTitle="Welcome to Crown Jewels!">

      <section className="mx-8 font-Neuton text-some-kind-of-purple">
        <article>

          <div
            className="font-Poppins italic w-[80%] mx-auto text-s-orange mb-8 text-lg text-center"
            dangerouslySetInnerHTML={{
              __html: homeFields.description,
            }}
          />
          <h1 className="text-4xl mb-6 text-center"> {homeFields.title.toUpperCase()}</h1>
        </article>
        <article className="flex flex-row justify-center">

          <div className="relative h-[500px] w-[980px]">

            <a
              target="__blank"
              href={homeFields.callToAction.url}
            >
              <button className=" absolute left-[320px] bottom-[10px] mx-1 animate-pulse bg-some-kind-of-purple px-4 py-2 font-bold text-baby-rose hover:scale-110 transition-all ease-in-out z-50">{homeFields.callToAction.title.toUpperCase()}</button>
            </a>

            <div className="absolute top-0 left-[0px] w-96 h-96 bg-minty-green rounded-full z-20 opacity-90"></div>
            <div>
              <GatsbyImage
                className="absolute top-[50px] left-[140px] w-96 h-96 rounded-full to-transparent bg-gradient-to-b z-30"
                image={image1}
                alt={homeFields.picture1.altText}
              />
            </div>


            <div className="absolute top-0 left-[280px] w-96 h-96 bg-some-kind-of-purple rounded-full z-20 opacity-90"></div>
            <div>
              <GatsbyImage
                className="absolute top-[50px] left-[420px] w-96 h-96 rounded-full to-transparent bg-gradient-to-b z-30"
                image={image2}
                alt={homeFields.picture2.altText}
              />
            </div>
            <div className="absolute top-0 left-[600px] w-96 h-96 bg-s-orange rounded-full z-20 opacity-90"></div>
          </div>
        </article>
      </section>

      <section className="mx-6">
        <h2 className="text-6xl font-Neuton text-some-kind-of-purple">Featured Royals</h2>
        <p>
          All of our artists are veterans in the industery and have proven themselves time and time again. Every week we put out 3 of our artists in the spotlight section, you can check out their individual portfolio’s and book them by contacting us. Send an email to book@artistagency.com or call us on 0123456789.
        </p>
        <div className="grid grid-cols-3 place-items-center">
          {homeFields.featuredRoyals.map(royal => {
            return <Royal slug={`royals/${royal.slug}`} key={royal.id} royal={royal} titles={royal.titles} />
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
      picture1 {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      picture2 {
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