import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Royal = ({ royal, slug }) => {

    const cardImage = getImage(royal.royalMeta.pictureCard.localFile)

    return (
        <Link to={slug}>
            <section className="flex">
                <div className="w-1/3 p-6 bg-gray-100 flex flex-col">
                    <GatsbyImage
                        className='h-64 w-64'
                        image={cardImage}
                        alt={royal.royalMeta.pictureCard.altText}
                    />
                    <div className="flex-1">
                        <p>
                            {royal.royalMeta.firstName} {royal.royalMeta.lastName}
                        </p>
                    </div>
                </div>
            </section>


            <article>
                {/*royal.royalMeta.firstName && <p>{royal.royalMeta.firstName}</p>*/}

            </article>
        </Link>
    )
}

export default Royal;