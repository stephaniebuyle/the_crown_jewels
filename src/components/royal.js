import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    polygonImage
} from "./royal.module.css"

const Royal = ({
    royal,
    slug,
    titles: { nodes: royalTitles }
}) => {

    const cardImage = getImage(royal.royalMeta.pictureCard.localFile)
    // const nobleTitle = royal
    //console.log(`Nobele titel ${royalTitle}`)

    return (
        <Link to={slug} className="font-Roboto odd:bg-s-orange bg-minty-green drop-shadow-lg">
            <section className="flex">
                <article className="flex flex-col object-cover justify-center mb-4 w-80 drop-shadow-md">
                    <div className="hover:opacity-50"><GatsbyImage
                        className={polygonImage}
                        image={cardImage}
                        alt={royal.royalMeta.pictureCard.altText}
                    /></div>
                    <div className="flex-1 text-center">
                        {royalTitles.map((title, i) => (
                            <div className="w-24 ml-4 mb-4" key={i}>
                                <p className="border border-some-kind-of-purple rounded-lg font-bold p-2" >{title.name} {i + 1 < title.length && "- "} </p>
                            </div>
                        ))}
                        <p className="font-bold">
                            {royal.royalMeta.firstName.toUpperCase()} {royal.royalMeta.lastName.toUpperCase()}
                        
                        </p>
                        <p>
                            {royal.royalMeta.house}
                        </p>
                    </div>


                </article>
            </section>


            <article>
                {/*royal.royalMeta.firstName && <p>{royal.royalMeta.firstName}</p>*/}

            </article>
        </Link>
    )
}

export default Royal;