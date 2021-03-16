import React from "react";
import MyLayout from "../../components/MyLayout";
import Link from "next/link";
import Markdown from "react-markdown";

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
            <hr />

            <Markdown source={"href={`/post?title=${title}`} as={`/post/${title}`}"} />
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
