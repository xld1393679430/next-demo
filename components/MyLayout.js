import React from "react";
import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";

const Page = ({ children }) => {
    return (
        <div>
            <Head />
            <div className={'header'}>
                <Header />
            </div>
            <div className={'content'}>
                {children}
            </div>
            <div className={'footer'}>
                <Footer />
            </div>
        </div>
    )
}

export default Page
