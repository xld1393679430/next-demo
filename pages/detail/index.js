import MyLayout from "../components/MyLayout";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
    const router = useRouter()
    return (
        <MyLayout>
            <p>detail-id</p>
            <p>{ router.query.id }</p>
        </MyLayout>
    )
}

export default Index
