import React, { Fragment } from "react";
import MyHead from "./MyHead";
import Header from "./Header";
import Footer from "./Footer";

const Page = ({ children }) => {
    return (
        <Fragment>
            <MyHead />
            <div className={'header'}>
                <Header />
            </div>
            <div className={'content'}>
                {children}
            </div>
            <div className={'footer'}>
                <Footer />
            </div>
        </Fragment>
    )
}

export default Page
