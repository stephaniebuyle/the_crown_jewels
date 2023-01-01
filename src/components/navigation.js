import * as React from 'react'
import { Link } from 'gatsby';

const Navigation = () => {
    return (
        <nav className="font-Roboto text-lg text-something-purple p-2 ml-auto mr-6 ">
            <ul className="flex md:flex md:flex-grow flex-row">
                <li className="mx-1 -skew-x-12 bg-some-kind-of-purple px-4 py-2 font-bold text-baby-rose hover:scale-110 transition-all ease-in-out">
                    <Link className="" to="/">Home</Link>
                </li>
                <li className="mx-1 -skew-x-12 bg-some-kind-of-purple px-4 py-2 font-bold text-baby-rose hover:scale-110 transition-all ease-in-out">
                    <Link className="" to="/royals">Royals</Link>
                </li>
                <li className="mx-1 -skew-x-12 bg-some-kind-of-purple px-4 py-2 font-bold text-baby-rose hover:scale-110 transition-all ease-in-out">
                    <Link className="" to="/about">About</Link>
                </li>
                <li className="mx-1 -skew-x-12 bg-some-kind-of-purple px-4 py-2 font-bold text-baby-rose hover:scale-110 transition-all ease-in-out">
                    <Link className="" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation; 