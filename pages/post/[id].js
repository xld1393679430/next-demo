import { useRouter } from "next/router";
import Layout from "../components/MyLayout";
import Markdown from "react-markdown";
import React from "react";

const Content = () => {
    const router = useRouter();

    return (
        <>
            <h1>{router.query.title}</h1>
            <div className="markdown">
                <Markdown
                    source={`  # Live demo Changes are automatically rendered as you type.     
                          ## Table of Contents       
                          * Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
                          * Renders actual, "native" React DOM elements
                          * Allows you to escape or skip HTML (try toggling the checkboxes above)
                          * If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!        
                          ## HTML block below        
                        <blockquote>
                          This blockquote will change based on the HTML settings above.
                        </blockquote>`
                    }
                />
            </div>
            <style jsx global>{`
               .markdown {
                  font-family: "Arial";
                }
        
               .markdown code {
                  text-decoration: none;
                  color: blue;
                }
        
               .markdown code:hover {
                  opacity: 0.6;
                }
        
               .markdown code {
                  margin: 0;
                  padding: 0;
                  text-transform: uppercase;
                }
             `}</style>
        </>
    );
};

const Page = () => (
    <Layout>
        <Content />
    </Layout>
);

export default Page;
