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

            <section className="font-Neuton grid grid-cols-2 gap-6 text-center px-6" >
                <article className="bg-minty-green py-6">
                    <h2 className="text-4xl font-bold text-some-kind-of-purple p-4">{contactFields.title}</h2>
                    <GatsbyImage className="object-contain h-62 w-96 rounded-lg " image={image} alt={contactFields.picture.altText} />
                    <div>
                        <a href={`mailto:${contactFields.email}`}>
                            {contactFields.email}
                        </a>
                        <a href={`tel:${contactFields.phoneNumber}`}>
                            {contactFields.phoneNumber}
                        </a>
                        <p>{`${contactFields.address}, ${contactFields.zipCode} ${contactFields.city}`}</p>

                    </div>
                </article>
                <article>

                    <div className="mb-4">
                        <div className="text-xl bg-some-kind-of-purple text-baby-rose p-6 border-2 rounded-lg"
                            dangerouslySetInnerHTML={{
                                __html: contactFields.description,
                            }}
                        />

                    </div>

                    <form className="text-lg uppercase border-2 rounded-lg text-baby-rose bg-some-kind-of-purple py-6 px-4 " name="contact" method="POST" data-netlify="true">

                        <div className="grid grid-cols-2 gap-6 mb-6 items-center ">
                            <div className="mx-auto">

                                <label className="block mb-2 tracking-widest" >First Name</label>
                                <input
                                    className="text-base font-Poppins text-s-orange block text-center italic p-2 w-60"
                                    type="text" name="first_name" required={true} placeholder="First Name">

                                </input>
                            </div>
                            <div className="mx-auto">
                                <label className="block mb-2 tracking-widest">Last Name</label>
                                <input
                                    className="text-base font-Poppins text-s-orange block text-center italic p-2 w-60"
                                    type="text" name="last_name" required={true} placeholder="Last Name">

                                </input>
                            </div>

                            <div className="mx-auto">
                                <label label className="block mb-2 tracking-widest" >Email</label>
                                <input
                                    className="text-base font-Poppins text-s-orange block text-center italic p-2 w-60"
                                    type="email" name="email" required={true} placeholder="Email"></input>
                            </div>
                            <div className="mx-auto">
                                <label className="block mb-2 tracking-widest">Subject</label>
                                <input
                                    className="text-base font-Poppins text-s-orange block text-center italic p-2 w-60"
                                    type="text" name="subject" required={true} placeholder="Subject">

                                </input>

                            </div>
                        </div>


                        <div className="mx-auto">
                            <label className="block mb-2 tracking-widest">Message</label>
                            <textarea 
                                id="message" name="message" placeholder="Your message" required={true}
                                className="mb-6 text-base font-Poppins text-s-orange p-2 mt-1 block w-full min-h-32 rounded-md" >
                            </textarea>
                        </div>
                        <button
                            className="font-Poppins uppercase mx-1 -skew-x-12 bg-s-orange text-lg px-4 py-2 font-bold text-baby-rose hover:scale-110 transition-all ease-in-out"
                            type="button">
                            Send
                        </button>

                    </form>


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
