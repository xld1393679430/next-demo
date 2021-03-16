import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MyLayout = ({ children }) => {
    return (
        <div>
            <div className={'header'}>
                <Header />
            </div>
            <div className={'content'}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MyLayout
