import React from 'react';
import Error from "next/error";

function Page(props) {
    let title = '发生了未知错误'
    return (
        <Error title={title} statusCode={props.statusCode || null}></Error>
    )
}

export default Page
