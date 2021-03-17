import Link from "next/link";
import { useRouter } from 'next/router'
import React, { useEffect, useState } from "react";
import { Menu, Button, Dropdown } from "antd";
import classnames from 'classnames';
import { UserOutlined } from "@ant-design/icons";


const menu = (
    <Menu>
        <Menu.Item key="0">
            <Link href="/">
                <div>
                    <UserOutlined />
                    我的主页
                </div>
            </Link>
        </Menu.Item>
        <Menu.Item key="1">
            <Link href="/article">
                <div>
                    <UserOutlined />
                    我的专辑
                </div>
            </Link>
        </Menu.Item>
        <Menu.Item key="2">
            <Link href="/about">
                <div>
                    <UserOutlined />
                    我的文章
                </div>
            </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">我的收藏</Menu.Item>
        <Menu.Item key="4">我的钱包</Menu.Item>
        <Menu.Item key="5">我的啥</Menu.Item>
        <Menu.Item key="6">我的啥</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="7">我的设置</Menu.Item>
        <Menu.Item key="8">退出</Menu.Item>
    </Menu>
);

const Header = () => {
    const [active, setActive] = useState('/')
    const router = useRouter()
    useEffect(() => {
        const path = router.pathname.split('/')
        if (path.length && path[1]) {
            setActive(`${path[1]}`)
        } else {
            setActive('/')
        }
    }, [])
    return (
        <div className={"nav nav-main header"}>
            <div className={" header-inner"}>
                <div className={"header-content"}>
                    <div className={"header-left"}>
                        <div className={"logo"}>
                            <img src="/images/logo.png"
                                 alt="logo"></img>
                        </div>
                    </div>
                    <div className="header-menu">
                        <div
                            onClick={() => {
                                setActive("/");
                            }}
                            className={classnames({
                                "header-menu-item": true,
                                active: active === "/"
                            })}
                        >
                            <Link href="/">
                                <a>首页</a>
                            </Link>
                        </div>
                        <div
                            onClick={() => {
                                setActive("redux");
                            }}
                            className={classnames({
                                "header-menu-item": true,
                                active: active === "redux"
                            })}
                        >
                            <Link href="/redux">
                                <a>redux</a>
                            </Link>
                        </div>
                        <div
                            onClick={() => {
                                setActive("collect");
                            }}
                            className={classnames({
                                "header-menu-item": true,
                                active: active === "collect"
                            })}
                        >
                            <Link href="/article">
                                <a>专辑</a>
                            </Link>
                        </div>
                        <div
                            onClick={() => {
                                setActive("article");
                            }}
                            className={classnames({
                                "header-menu-item": true,
                                active: active === "article"
                            })}
                        >
                            <Link href="/article">
                                <a>文章</a>
                            </Link>
                        </div>
                        <div
                            onClick={() => {
                                setActive("about");
                            }}
                            className={classnames({
                                "header-menu-item": true,
                                active: active === "about"
                            })}
                        >
                            <Link href="/about">
                                <a>关于</a>
                            </Link>
                        </div>
                    </div>

                    <div className={"header-right"}>
                        <Dropdown overlay={menu}
                                  trigger={["click"]}
                                  placement="bottomCenter">
                            <div className={"avatar"}>
                                <img
                                    src="https://images.xiaozhuanlan.com/photo/2019/2ad6384db0b94cd8e76d11194400df23.jpeg"
                                    alt="avatar"
                                ></img>
                            </div>
                        </Dropdown>
                    </div>

                    <div className="header-btn">
                        <Button type="danger"
                                ghost
                                shape="round"
                                icon="edit"
                                onClick={() => router.push("/write")}>
                            写文章>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
