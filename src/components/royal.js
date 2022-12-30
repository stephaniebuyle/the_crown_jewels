import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    polygonImage
} from "./royal.module.css"

const Royal = ({ royal, slug }) => {

    const cardImage = getImage(royal.royalMeta.pictureCard.localFile)

    return (
        <Link to={slug} className="font-Roboto odd:bg-s-orange bg-minty-green drop-shadow-lg">
            <section className="flex">
                <article className="flex flex-col object-cover justify-center mb-4 w-72 drop-shadow-md">
                    <div className="hover:opacity-50"><GatsbyImage
                        className={polygonImage}
                        image={cardImage}
                        alt={royal.royalMeta.pictureCard.altText}
                    /></div>
                    <div className="flex-1 text-center">
                        <p>
                            {royal.royalMeta.firstName} {royal.royalMeta.lastName}
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