import React from "react";
import MyLayout from "../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button } from "antd";

const Page = ({ shows = [] }) => {
    // todo
    const login = () => {
        const CLIENT_ID = "Iv1.bc38f44ba1e26019";
        const REDIRECT_URL = 'http://localhost:3002/about';
        const url = "https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID + `&client_secret=${REDIRECT_URL}`;
        window.location.href = url;
    }
    return (
        <MyLayout>
            <Button type="primary" icon="github" size="large" onClick={login}>
                Github登录
            </Button>

            <p>Home</p>
            <ul>
                {
                    shows.map(item => (
                        <li key={item.id}>
                            <Link href={`/detail?id=${item.id}`}>
                                <a>{item.name}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </MyLayout>
    )
}

Page.getInitialProps = async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const shows = await res.json()
    return {
        shows: shows.map(item => item.show)
    }
}

export default Page
