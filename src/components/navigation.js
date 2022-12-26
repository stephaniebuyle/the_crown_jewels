import * as React from 'react'
import { Link } from 'gatsby';

const Navigation = () => {
    return (
        <nav className="font-Spectral text-xl text-something-purple p-2 ml-auto">
            <ul className="flex md:flex md:flex-grow flex-row">
                <li className="mr-8">
                    <Link className="hover:text-s-blue-1" to="/">Home</Link>
                </li>
                <li className="mr-8">
                    <Link className="hover:text-s-blue-1" to="/royals">Royals</Link>
                </li>
                <li className="mr-8">
                    <Link className="hover:text-s-blue-1" to="/about">About</Link>
                </li>
                <li className="mr-8">
                    <Link className="hover:text-s-blue-1" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation; 