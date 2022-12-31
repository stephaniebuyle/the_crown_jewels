import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
    polygonImage
} from "../../page.module.css"

const RoyalPage = ({ data: { wpRoyal: { royalMeta: royal } } }) => {

    const image = getImage(royal.profilePicture.localFile);

    return (
        <Layout pageTitle="Royals Template">
            <div>
                <div className="py-6 flex flex-wrap justify-center">
                    <div className="px-4 w-72 ">
                        <GatsbyImage className={polygonImage} image={image} alt={royal.profilePicture.altText} />
                    </div>
                    <div>
                        <h1 className=" font-Inconsolata text-6xl py-6">{royal.firstName} {royal.lastName}</h1>
                        <div className="font-Roboto">
                            <div className="text-xl py-2 px-4 text-s-orange-1 rounded-lg font-bold" dangerouslySetInnerHTML={{ __html: royal.bio }} />
                            <ul>
                                <li><span className="font-bold">Sports: </span>{royal.sports.join(", ")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
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