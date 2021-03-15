import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className={'header-inner'}>
            <Link href={'/home'}>
                <a>Home</a>
            </Link>
            <Link href={'/about'}>
                <a>About</a>
            </Link>
            <Link href={'/show'}>
                <a>Show</a>
            </Link>
        </div>
    )
}

export default Header
