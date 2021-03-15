import Header from "./Header";
import React from "react";
import "./MyLayout.less";


const MyLayout = ({ children }) => {
    return (
        <div>
            <div className={'header'}>
                <Header />
            </div>
            <div className={'content'}>
                {children}
            </div>
        </div>
    )
}

export default MyLayout
