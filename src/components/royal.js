import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    polygonImage
} from "./royal.module.css"
import {
    RiMoneyDollarBoxFill
} from 'react-icons/ri';

const Royal = ({
    royal,
    slug,
    titles: { nodes: royalTitles }
}) => {

    const cardImage = getImage(royal.royalMeta.pictureCard.localFile)

    const netWorth = royal.royalMeta.estimatedNetWorth

    // show level of richness in the cards 
    const showRichness = () => {
        if (netWorth <= 10000000) {
            return <div className="flex flex-row justify-center text-some-kind-of-purple"><RiMoneyDollarBoxFill className="pl-2 text-4xl" /></div>
        }
        else if (netWorth > 10000000 && netWorth < 50000000) {
            return (
                <div className="flex flex-row justify-center text-some-kind-of-purple">
                    <RiMoneyDollarBoxFill className="pl-2 text-4xl" />
                    <RiMoneyDollarBoxFill className="pl-2 text-4xl" />
                </div>)
        }
        else {
            return (
                <div className="flex flex-row justify-center text-some-kind-of-purple">
                    <RiMoneyDollarBoxFill className="pl-2 text-4xl" />
                    <RiMoneyDollarBoxFill className="pl-2 text-4xl" />
                    <RiMoneyDollarBoxFill className="pl-2 text-4xl" />
                </div>
            )
        }
    }

    return (
        // odd & even om afwisselend groene en oranje cards te tonen 
        <div className="odd:bg-s-orange bg-minty-green w-[80%] font-Poppins text-lg drop-shadow-lg">
            <Link to={slug}>
                <section className="flex pb-4 w-full">
                    <article className="flex flex-col object-cover justify-center mb-4 w-full drop-shadow-md">
                        <div className="hover:opacity-50">
                            <GatsbyImage
                                className={polygonImage}
                                image={cardImage}
                                alt={royal.royalMeta.pictureCard.altText}
                            />
                        </div>
                        <div className="flex-1 ">
                            <div className="ml-4 mb-4">
                                {royalTitles.map((title, i) => (

                                    <button key={i} className="border border-some-kind-of-purple rounded-lg font-bold p-2 mx-1" >{title.name} {i + 1 < title.length && "- "} </button>

                                ))}
                            </div>
                            <p className="font-bold text-center text-xl track-wide">
                                {royal.royalMeta.firstName.toUpperCase()} {royal.royalMeta.lastName.toUpperCase()}
                            </p>
                            <p className="text-center">
                                {royal.royalMeta.house}
                            </p>
                            <div>
                                {showRichness()}
                            </div>
                        </div>
                    </article>
                </section>
            </Link>
        </div>
    )
}

export default Royal;