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
                <div className="grid grid-cols-4">
                    <section>

                        <p>Copyright 2022-23</p>
                    </section>
                    <section className="">
                        <p>{siteTitle}</p>
                        <p>{`${companyInfo.address}`}</p>
                        <p>{`${companyInfo.zipCode} ${companyInfo.city}`}</p>
                    </section>
                    <section>
                        socials
                    </section>
                    <section>
                        Home<br />Royals<br />Contact<br />
                    </section>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
