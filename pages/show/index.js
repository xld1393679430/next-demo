import React from "react";
import MyLayout from "../components/MyLayout";
import Router from 'next/router'
import { useEffect } from "react";

const Show = () => {

    const handleRouteChange = (e) => {
        console.log(e, 'handleRouteChange')
    }


    useEffect(() => {
        Router.events.on('routeChangeStart', handleRouteChange)
        return () => {
            Router.events.off('routeChangeStart', handleRouteChange)
        }
    })


    return (
        <MyLayout>
            <p>Show</p>
        </MyLayout>
    )
}

export default Show
