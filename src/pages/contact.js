import { graphql } from 'gatsby'
import * as React from 'React'
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ContactPage = ({
    data: {
        wpPage: { contactFields },
    },
}) => {

    const image = getImage(contactFields.picture.localFile);

    return (
        <Layout pageTitle="Contact us">

            <section className="grid grid-cols-2 gap-6 text-center py-6 px-6 m-12" >
                <article className="bg-minty-green py-12">
                    <h2 className="font-Roboto text-4xl font-bold text-some-kind-of-purple p-4">{contactFields.title}</h2>
                    <GatsbyImage className="object-contain h-62 w-96 rounded-lg " image={image} alt={contactFields.picture.altText} />
                </article>
                <article>

                    <div className="">
                        <div className="bg-some-kind-of-purple text-baby-rose p-4 border-2 rounded-lg"
                            dangerouslySetInnerHTML={{
                                __html: contactFields.description,
                            }}
                        />
                        <div>
                            <a href={`mailto:${contactFields.email}`}>
                                {contactFields.email}
                            </a>
                            <a href={`tel:${contactFields.phoneNumber}`}>
                                {contactFields.phoneNumber}
                            </a>
                            <p>{`${contactFields.address}, ${contactFields.zipCode} ${contactFields.city}`}</p>

                        </div>
                    </div>

                </article>
            </section>

        </Layout >
    )

}

export const query = graphql`
    query {
        wpPage(slug: {eq: "contact"}) {
            contactFields {
              description
              title
              picture {
                id
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              address
              city
              email
              phoneNumber
              zipCode
            }
          
        }        
    }
`
export default ContactPage; 
