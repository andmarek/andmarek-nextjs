import Link from "next/link";
import React from 'react';

interface NavLinkProps {
    linkText: string;
    destination: string;
}

export default function NavLink(props: NavLinkProps): React.JSX.Element {
    return <Link className="font-sans hover:drop-shadow-glow hover:text-papaya-whip text-champagne-pink transition-all duration-500" href={props.destination}>
        {props.linkText}
    </Link>
}