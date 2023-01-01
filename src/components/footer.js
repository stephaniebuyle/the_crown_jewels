import * as React from "react"
import Navigation from './navigation';
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'


const Footer = ({ siteTitle, companyInfo }) => {

    return (
        <div>
        
            <footer className="bg-some-kind-of-purple text-baby-rose font-Roboto px-4 py-8 relative">
            <StaticImage 
            alt="footer heart"
            src="../images/heart-trans.png"
            className="absolute right-12 -top-12 z-50 w-32"
          />
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
