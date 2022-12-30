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
                <article className="bg-minty-green py-6">
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

                    <div>
                        <form>
                            <label>First Name</label>
                            <label>Last Name</label>
                            <label>Description</label>
                            <div className="mt-1 p-2">
                                <textarea id="description" name="description" rows="3" className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Your message"></textarea>
                            </div>
                            <button className="w-16 bg-s-blue-1 text-s-rose-1 rounded-lg p-2" type="button">Send</button>
 
                        </form>
                    </div>

                </article>
                <div className="m-12 font-Roboto">
                <a href="#" aria-labelledby="title" className=" inset-0 bg-s-blue-1 relative py-6 px-6 rounded border-s-blue-1 group text-baby-rose">
                    <span id="title" className=" text-xl">Send</span>
                    <div className="inset-0 border-2 absolute py-6 px-6 bg-baby-rose text-s-blue-1 motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_120%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)]">
                        <span className="text-xl">Send</span>
                    </div>
                </a>
            </div>
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
