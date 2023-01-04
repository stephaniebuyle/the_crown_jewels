import React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'

// zelfgeschreven fancybox component dat wordt gebruikt in de detailpage ({royal.slug}.js)
const FancyBox = (props) => {
    return(
        <div>
            <button className="uppercase absolute top-5 right-[50%] p-4 bg-some-kind-of-purple text-baby-rose z-20 mx-1 -skew-x-12 font-bol hover:scale-110 transition-all ease-in-out" onClick={() => { props.callbackSetModal(false) }}>
                    <p className="skew-x-12">Close image</p>
                </button>
                <div>
                    <GatsbyImage
                        className="border-2 border-some-kind-of-purple"
                        image={props.profiles[props.active]}
                        alt={props.profilesAlts[props.active]}

                    />
                </div>
        </div>
    )

}
export default FancyBox;