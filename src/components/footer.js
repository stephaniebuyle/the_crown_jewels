import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'


const Footer = ({ siteTitle, companyInfo }) => {

    return (
        <div>

            <footer className="bg-some-kind-of-purple text-baby-rose font-Roboto px-4 py-8 relative">
                <div className="absolute right-12 -top-12">
                    <StaticImage
                        alt="footer heart"
                        src="../images/heart-trans.png"
                        className="z-50 w-32"
                    />
                </div>
                <section>
                    <p>{siteTitle}</p>
                    <p>Copyright 2022-23</p>
                </section>
                <section>
                    <p>{`${companyInfo.address}, ${companyInfo.zipCode} ${companyInfo.city}`}</p>
                </section>
            </footer>
        </div>
    )
}

export default Footer;
