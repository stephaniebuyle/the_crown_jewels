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
        <div className="odd:bg-s-orange bg-minty-green w-[80%]  font-Roboto drop-shadow-lg">
        <Link to={slug} className="">
            <section className="flex pb-4 w-full">
                <article className="flex flex-col object-cover justify-center mb-4 w-full  drop-shadow-md">
                    <div className="hover:opacity-50"><GatsbyImage
                        className={polygonImage}
                        image={cardImage}
                        alt={royal.royalMeta.pictureCard.altText}
                    /></div>
                    <div className="flex-1 ">
                        <div className="ml-4 mb-4">
                        {royalTitles.map((title, i) => (
                            
                                <button key={i} className="border border-some-kind-of-purple rounded-lg font-bold p-2 mx-1" >{title.name} {i + 1 < title.length && "- "} </button>
                            
                        ))}
                        </div>
                        <p className="font-bold text-center">
                            {royal.royalMeta.firstName.toUpperCase()} {royal.royalMeta.lastName.toUpperCase()}
                        
                        </p>
                        <p className="text-center">
                            {royal.royalMeta.house}
                        </p>
                    </div>


                </article>
            </section>


            <article>
                {/*royal.royalMeta.firstName && <p>{royal.royalMeta.firstName}</p>*/}

            </article>
        </Link>
        </div>
    )
}

export default Royal;