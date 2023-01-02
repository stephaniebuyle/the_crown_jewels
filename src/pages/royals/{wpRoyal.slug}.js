import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const RoyalPage = ({ data: { wpRoyal: { royalMeta: royal } } }) => {

    const profile1 = getImage(royal.profilePicture.localFile);
    const profile2 = getImage(royal.profilePictureExtra.localFile);
    const profile3 = getImage(royal.profilePictureOptional?.localFile);
    const pictureCard = getImage(royal.pictureCard.localFile);

    return (
        <Layout pageTitle="Royals Template">
            <div className="grid grid-cols-8 min-h-screen">
                <div className="col-span-2">
                    <div className="relative mx-16">
                        <div>

                            {profile1 && (
                                <GatsbyImage
                                    className="w-72 h-72 mb-4 object-fit hover:skew-y-6 rounded-lg drop-shadow-lg transition-all duration-500 ease-in-out cursor-pointer "
                                    image={profile1}
                                    alt={royal.profilePicture.altText}
                                />
                            )
                            }
                        </div>
                        <div>
                            {profile2 && (
                                <GatsbyImage
                                    className="w-72 h-72 mb-4 object-fit hover:skew-y-6 rounded-lg drop-shadow-lg transition-all duration-500 ease-in-out cursor-pointer "
                                    image={profile2}
                                    alt={royal.profilePictureExtra.altText}
                                />
                            )
                            }
                        </div>
                        <div className="">
                            {profile3 && (
                                <GatsbyImage
                                    className="w-72 h-72 mb-4  object-fit hover:skew-y-6 rounded-lg drop-shadow-lg transition-all duration-500 ease-in-out cursor-pointer "
                                    image={profile3}
                                    alt={royal.profilePictureOptional.altText}
                                />
                            )
                            }
                        </div>
                    </div>


                </div>

                <div className="col-span-6 bg-some-kind-of-purple rounded-2xl p-4 mr-4 pb-24">
                    <div className="w-full h-96">
                        <div className="relative w-full">
                            <div className="absolute left-[55px] top-[100px] z-50 max-w-xl"><h1 className="font-Inconsolata  text-6xl py-6 shadow-minty-green drop-shadow-md">{royal.firstName} {royal.lastName}</h1></div>
                            <div className="absolute top-0 left-[0px] w-72 h-72 bg-minty-green rounded-full z-40 opacity-90"></div>
                            <div className="absolute top-[50px] left-[140px] w-72 h-72 bg-s-orange rounded-full z-30 opacity-90"></div>
                            <div className="absolute top-0 left-[280px] w-72 h-72 bg-baby-rose rounded-full z-20 opacity-90"></div>
                            
                            
                            {pictureCard && (
                                <GatsbyImage
                                    className="absolute top-[50px] right-12 w-72 h-72 bg-some-kind-of-purple rounded-full to-transparent bg-gradient-to-b"
                                    image={pictureCard}
                                    alt={royal.pictureCard.altText}
                                />
                            )
                            }
                         

                        </div>
                    </div>

                    <div className="pr-6">

                        <div className="ml-16 font-Roboto text-baby-rose">
                            <div className="text-2xl py-2 text-s-orange-1 rounded-lg font-bold my-2"
                                dangerouslySetInnerHTML={{ __html: royal.bio }} />

                            <p className="my-2"><span className="font-bold underline">Name:</span> {royal.firstName} {royal.lastName}</p>
                            <p className="my-2"><span className="font-bold underline">House:</span> {royal.house}</p>
                            <p className="my-2"><span className="font-bold underline">Origin:</span> {royal.origin}</p>
                            

                            <p className="my-2"><span className="font-bold underline">Official title:</span> {royal.officialTitle}</p>
                            <p className="my-2"><span className="font-bold underline">Age:</span> {royal.age}</p>
                     
                            <p className="my-2"><span className="font-bold underline">Succession Ranking:</span> {royal.rankingInSuccession}</p>

                            <span className="font-bold underline my-2">Education: </span>
                            <div
                                className="my-2"
                                dangerouslySetInnerHTML={{ __html: royal.education }}
                            />


                            <p className="my-2"><span className="font-bold underline">Spoken language(s):</span> {royal.spokenLanguages.join(", ")}</p>


                            <span className="font-bold underline my-2">Sport(s)</span>: {royal.sports.join(", ")}

                            <div className="font-bold underline my-2">Known scandals: </div>
                            <div className="relative mt-8">
                                <div className="text-s-orange absolute bg-baby-rose w-[80%] rounded-lg z-10 drop-shadow-lg">
                                    <div className="p-4" dangerouslySetInnerHTML={{ __html: royal.knownScandals }}>
                                    </div>
                                </div>
                                <div className="text-s-orange absolute bg-s-orange w-[80%]  rounded-lg z-5 rotate-3 ">
                                    <div className="p-4 " dangerouslySetInnerHTML={{ __html: royal.knownScandals }}>
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
                pictureCard {
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