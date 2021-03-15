import MyLayout from "../components/MyLayout";
import React from "react";
import fetch from "isomorphic-unfetch";

import Markdown from "react-markdown";


const Index = ({ show }) => {
    return (
        <MyLayout>
            <h1>{ show.name }</h1>
            {/*<div className={'markdown'} dangerouslySetInnerHTML={{__html: show.summary}}>*/}
            {/*    /!*<Markdown source={show.summary.replace(/<[/]?p>/g, '')} />*!/*/}
            {/*</div>*/}
            <img src={show.image.medium} />
            <style jsx global>{`
                .markdown {
                    font-family: 'Arial';
                }
                .markdown a {
                    text-decoration: none;
                    color: blue;
                }
                .markdown a:hover {
                    opacity: 0.6
                }
                
                .markdown h3 {
                    margin: 0;
                    padding: 0;
                    text-transform: uppercase
                }
            `}</style>
        </MyLayout>
    )
}

Index.getInitialProps = async (context) => {
    const { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()
    return { show }
}

export default Index
