import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import {
    FaInstagram, FaTwitter, FaFacebookF,
} from 'react-icons/fa';



const Footer = ({ siteTitle, companyInfo }) => {

    return (
        <div>

            <footer className="bg-some-kind-of-purple text-baby-rose font-Roboto px-4 py-8 relative">
                <Link to="/">
                    <section className="absolute right-12 -top-16">
                        <StaticImage
                            alt="footer heart"
                            src="../images/logo5c.png"
                            className="z-50 w-16"
                        />
                    </section>
                </Link>

                <section className="grid grid-cols-4 place-items-center">
                    <article>
                        <p>Copyright 2022-23</p>
                        <p>Stephanie Buyle - CMS Development</p>
                    </article>
                    <article className="">
                        <p>{siteTitle}</p>
                        <p>{`${companyInfo.address}`}</p>
                        <p>{`${companyInfo.zipCode} ${companyInfo.city}`}</p>
                    </article>
                    <article>
                        <p className="mb-2">Follow us:</p>
                        <div className="flex justify-start">
                        <a
                            className="pl-1 pr-2 hover:scale-110 transition-all ease-in-out"
                            target="__blank"
                            href={companyInfo.instagram}
                        ><FaInstagram /></a>
                        <a
                           className="pr-2 hover:scale-110 transition-all ease-in-out"
                            target="__blank"
                            href={companyInfo.twitter}
                        ><FaTwitter /></a>
                        <a
                            className="hover:scale-110 transition-all ease-in-out"
                            target="__blank"
                            href={companyInfo.facebook}
                        ><FaFacebookF /></a>
                        </div>
                    </article>
                    <article className="flex flex-col">
                        <Link className="hover:underline" to='/'>Home</Link>
                        <Link className="hover:underline" to='/royals'>Royals</Link>
                        <Link className="hover:underline" to='/contact'>Contact</Link>
                       
                    </article>
                </section>
            </footer>
        </div>
    )
}

export default Footer;
