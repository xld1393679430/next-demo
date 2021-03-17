import React from "react";
import MyLayout from "../../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Page = ({ shows }) => {
    return (
        <MyLayout>
            <p>Home</p>
            <ul>
                {
                    shows.map(item => (
                        <li key={item.id}>
                            <Link href={'/detail/[id]'} as={`/detail/${item.id}`}>
                                <a>{item.name}</a>
                            </Link>
                            {/*<Link href={`/detail?id=${item.id}`}>*/}
                            {/*    <a>{item.name}</a>*/}
                            {/*</Link>*/}
                        </li>
                    ))
                }
            </ul>
        </MyLayout>
    )
}

Page.getInitialProps = async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const shows = await res.json()
    return {
        shows: shows.map(item => item.show)
    }
}

export default Page
