import MyLayout from "../components/MyLayout";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
    const router = useRouter()
    console.log(router, 'router')
    return (
        <MyLayout>
            <p>post-as-link</p>
            <p>{ router.query.title }</p>
        </MyLayout>
    )
}

export default Index
