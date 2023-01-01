import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
    polygonImage
} from "../../page.module.css"

const RoyalPage = ({ data: { wpRoyal: { royalMeta: royal } } }) => {

    const profile1 = getImage(royal.profilePicture.localFile);
    const profile2 = getImage(royal.profilePictureExtra.localFile);
    const profile3 = getImage(royal.profilePictureOptional?.localFile);

    return (
        <Layout pageTitle="Royals Template">
            <div className="grid grid-cols-5 h-screen">
                <div className="col-span-2">


                    <div className="grid grid-cols-2 p-8">
                        <div>
                            {profile1 && (
                                <GatsbyImage
                                    className="w-72 h-72 object-fit hover:skew-y-6 rounded-lg drop-shadow-lg transition-all duration-500 ease-in-out cursor-pointer"
                                    image={profile1}
                                    alt={royal.profilePicture.altText}
                                />
                            )
                            }

                        </div>
                        <div>
                            {profile2 && (
                                <GatsbyImage
                                    className="w-72 h-72 object-fit hover:skew-y-6 rounded-lg drop-shadow-lg transition-all duration-500 ease-in-out cursor-pointer"
                                    image={profile2}
                                    alt={royal.profilePictureExtra.altText}
                                />
                            )
                            }
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {profile3 && (
                            <GatsbyImage
                                className="w-72 h-72 object-fit hover:skew-y-6 rounded-lg drop-shadow-lg transition-all duration-500 ease-in-out cursor-pointer"
                                image={profile3}
                                alt={royal.profilePictureOptional.altText}
                            />
                        )
                        }
                    </div>
                </div>

                <div className="col-span-3">
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
                profilePictureExtra {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                      }
                    }
                    altText
                }
                profilePictureOptional {
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