import Document, { Html, Main, NextScript, Head } from "next/document";
import React from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <div className="document">
                        <Main />
                        <div className="inner-document"></div>
                        <NextScript />
                    </div>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
