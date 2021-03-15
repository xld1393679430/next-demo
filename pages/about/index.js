import React from "react";
import MyLayout from "../components/MyLayout";
import Link from "next/link";

const PostLink = ({title}) => {
    return (
        <li>
            <Link href={`/post/[title]`} as={`/post/${title}`}>
                <a>{title}</a>
            </Link>
        </li>
    )
}

const AsLink = ({title}) => {
    return (
        <li>
            <Link href={`/post?title=${title}`} as={`/post/${title}`}>
                <a>{title}</a>
            </Link>
        </li>
    )
}

const getPosts = () => {
    return [
        {id: "hello-nextjs", title: "hello-next"},
        {id: "learn-nextjs", title: "learn-nextjs"},
        {id: "deploy-nextjs", title: "deploy-nextjs"}
    ];
}

const About = () => {
    return (
        <MyLayout>
            <p>About</p>
            <ul>
                {
                    getPosts().map(item => (
                        <li key={item.id}>
                            <Link href={'/post/[title]'} as={`/post/${item.title}`}>
                                <a>{item.title}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <br />

            <ul>
                {
                    getPosts().map(item => {
                        return <PostLink key={item.id} title={item.title} />
                    })
                }
            </ul>

            <br />
            <PostLink title="Hello Next.js" />
            <PostLink title="Learn Next.js is awesome" />
            <PostLink title="Deploy apps with Zeit" />
            <br />
            <ul>
                <AsLink title="as-link" />
            </ul>
            <style jsx global>{`
                h1, a {
                    font-family: 'Arial'
                }
                ul {
                    padding: 0;
                }
                
                li {
                    list-style: none;
                    margin: 5px 0;
                }
                a {
                    text-decoration: none;
                    color: red
                }
                a:hover {
                    opacity: 0.6
                }
            `}</style>
        </MyLayout>
    )
}

export default About
