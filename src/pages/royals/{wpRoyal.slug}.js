import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const RoyalPage = ({ data: { wpRoyal: { royalMeta: royal } } }) => {

    const image = getImage(royal.profilePicture.localFile);

    return (
        <Layout pageTitle="Royals Template">
            <div>
                <div className="py-6 flex flex-wrap justify-center">
                    <div className="w-64 px-4 polygon ">
                        <GatsbyImage className="shadow clipmax-w-full h-64 align-middle border-none" image={image} alt={royal.profilePicture.altText} />
                    </div>
                    <div>
                        <h3>{royal.firstName}</h3>
                    </div>
                </div>
            </div>
            <div className="m-12 font-Roboto">
                <a href="#" aria-labelledby="title" className=" inset-0 bg-s-blue-1 relative py-6 px-6 rounded border-s-blue-1 group text-baby-rose">
                    <span id="title" className=" text-xl">Send</span>
                    <div className="inset-0 border-2 absolute py-6 px-6 bg-baby-rose text-s-blue-1 motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_120%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)]">
                        <span className="text-xl">Send</span>
                    </div>
                </a>
            </div>

        </Layout>
    )
}

export const query = graphql` 
    query ($id: String) {
        wpRoyal(id: {eq: $id}) {
            royalMeta {
                firstName
                lastName
                house
                age
                bio
                education
                estimatedNetWorth
                gender
                knownScandals
                officialTitle
                origin
                spokenLanguages
                rankingInSuccession
                sports
                title
                profilePicture {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                      }
                    }
                    altText
                }
            }
        }
    }
  `

export default RoyalPage; 