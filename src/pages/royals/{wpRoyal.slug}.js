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
                    <div className="relative mx-16">
                        <div>
                            {profile1 && (
                                <GatsbyImage
                                    className="absolute left-[0px] top-[0px] w-72 h-72 object-fit hover:skew-y-6 rounded-lg drop-shadow-lg transition-all duration-500 ease-in-out cursor-pointer"
                                    image={profile1}
                                    alt={royal.profilePicture.altText}
                                />
                            )
                            }
                        </div>
                        <div>
                            {profile2 && (
                                <GatsbyImage
                                    className="w-72 h-72 object-fit absolute left-[200px] top-[150px] hover:skew-y-6 rounded-lg drop-shadow-lg transition-all duration-500 ease-in-out cursor-pointer "
                                    image={profile2}
                                    alt={royal.profilePictureExtra.altText}
                                />
                            )
                            }
                        </div>
                        <div className="flex justify-center">
                            {profile3 && (
                                <GatsbyImage
                                    className="w-72 h-72 absolute top-[356px] left-[50px] object-fit hover:skew-y-6 rounded-lg drop-shadow-lg transition-all duration-500 ease-in-out cursor-pointer"
                                    image={profile3}
                                    alt={royal.profilePictureOptional.altText}
                                />
                            )
                            }
                        </div>
                    </div>


                </div>

                <div className="col-span-3">
                    <div className="w-full h-96">
                        <div className="relative w-full max-w-xl">
                            <div className="absolute left-[50px] top-[100px] z-50"><h1 className="font-Inconsolata text-6xl py-6 shadow-minty-green drop-shadow-md">{royal.firstName} {royal.lastName}</h1></div>
                            <div className="absolute top-0 left-[0px] w-72 h-72 bg-minty-green rounded-full z-20 opacity-70"></div>
                            <div className="absolute top-[50px] left-[140px] w-72 h-72 bg-s-orange rounded-full z-20 opacity-70"></div>
                            <div className="absolute top-0 left-[280px] w-72 h-72 bg-some-kind-of-purple rounded-full z-20 opacity-70"></div>

                        </div>
                    </div>

                    <div className="">

                        <div className="ml-16 font-Roboto">
                            <div className="text-xl py-2 text-s-orange-1 rounded-lg font-bold"
                                dangerouslySetInnerHTML={{ __html: royal.bio }} />

                            <p><span className="font-bold underline">Name:</span> {royal.firstName} {royal.lastName}</p>
                            <p><span className="font-bold underline">House:</span> {royal.house}</p>
                            <p><span className="font-bold underline">Official title:</span> {royal.officialTitle}</p>
                            <p><span className="font-bold underline">Age:</span> {royal.age}</p>
                           
                                <span className="font-bold underline">Education: </span>
                                <div
                                    className=""
                                    dangerouslySetInnerHTML={{ __html: royal.education }}
                                />
                           


                            <span className="font-bold underline">Sport(s): </span>{royal.sports.join(", ")}

                            <div className="font-bold underline">Known scandals: </div>
                            <div className="relative mt-6">
                                <div className="absolute bg-minty-green w-[80%] rounded-lg z-10">
                                    <div className="p-4" dangerouslySetInnerHTML={{ __html: royal.knownScandals }}>
                                    </div>
                                </div>
                                <div className="text-s-orange absolute bg-s-orange w-[80%]  rounded-lg z-5 rotate-3 opacity-70">
                                    <div className="p-4" dangerouslySetInnerHTML={{ __html: royal.knownScandals }}>
                                    </div>
                                </div>

                            </div>


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