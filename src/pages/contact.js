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

            <form name="contact" method="POST" data-netlify="true">
                <section className="font-Neuton text-baby-rose flex flex-col items-center bg-s-black bg-opacity-70 pb-24 -mb-24" >
                    <div className=" text-xl text-baby-rose p-6 w-[60%] text-center italic"
                        dangerouslySetInnerHTML={{
                            __html: contactFields.description,
                        }}
                    />
                    <div className="relative w-[804px] h-[792px]">
                        <GatsbyImage className="object-contain rounded-lg w-[804px] h-[792px] " image={image} alt={contactFields.picture.altText} />
                        <h2 className="absolute top-[20px] left-[310px] text-4xl font-bold text-s-orange">{contactFields.title}</h2>
                        <div className="absolute top-[100px] left-[65px]">
                            <div className="mb-4">

                                <label for="first_name" className="block mb-2 tracking-widest" >First Name
                                    <input
                                        className="text-base font-Poppins text-s-orange block text-center italic p-2 w-60"
                                        type="text" id="first_name" name="first_name" required={true} placeholder="First Name">

                                    </input>
                                </label>
                            </div>
                            <div className="">
                                <label for="email" className="block mb-2 tracking-widest" >Email
                                    <input
                                        className="tracking-wide text-base font-Poppins text-s-orange block text-center italic p-2 w-60"
                                        type="email" id="email" name="email" required={true} placeholder="Email"></input>
                                </label>
                            </div>
                        </div>
                        <div className="absolute top-[100px] right-[75px]">
                            <div className="mb-4">
                                <label for="last_name" className="block mb-2 tracking-widest">Last Name
                                    <input
                                        className="text-base font-Poppins text-s-orange block text-center italic p-2 w-60"
                                        type="text" id="last_name" name="last_name" required={true} placeholder="Last Name">

                                    </input>
                                </label>
                            </div>
                            <div className="">
                                <label for="subject" className="block mb-2 tracking-widest">Subject
                                    <input
                                        className="text-base font-Poppins text-s-orange block text-center italic p-2 w-60"
                                        type="text" id="subject" name="subject" required={true} placeholder="Subject">

                                    </input>
                                </label>
                            </div>

                        </div>
                        <div className="absolute top-[500px] left-[100px] w-[600px] flex flex-col items-center">
                            <div className="w-full">
                                <label className="block mb-2 tracking-widest">Message
                                    <textarea
                                        id="message" name="message" placeholder="Your message" required={true}
                                        className="mb-6 text-base font-Poppins text-s-orange p-2 mt-1 block w-full min-h-32 rounded-md" >
                                    </textarea>
                                </label>
                            </div>
                            <button
                                className="font-Poppins uppercase -skew-x-12 bg-s-orange text-lg px-4 py-2 font-bold text-baby-rose hover:scale-110 transition-all ease-in-out"
                                type="button">
                                Send
                            </button>

                        </div>
                    </div>
                    <div className="text-center text-xl italic">
                        <p className="underline">Also reachable via: </p>
                        <a href={`mailto:${contactFields.email}`}>
                            {contactFields.email}
                        </a><br />
                        <a href={`tel:${contactFields.phoneNumber}`}>
                            {contactFields.phoneNumber}
                        </a>
                        <p>{`${contactFields.address}, ${contactFields.zipCode} ${contactFields.city}`}</p>

                    </div>
                </section>
            </form>





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
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
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
