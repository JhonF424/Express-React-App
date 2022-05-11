import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons"

export default function MenuSlider(props) {
    const { menuCollapsed } = props;
    const { Sider } = Layout;

    return (
        <Sider className="fixed left-0 top-16 h-screen overflow-auto" collapsed={menuCollapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["/admin"]}>
                <Menu.Item key="1">
                    <Link to={"/admin"}>
                        <HomeOutlined />
                        <span className="">Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to={"/admin/menu-web"}>
                        <HomeOutlined />
                        <span className="">Menu Web</span>
                    </Link>
                </Menu.Item>

            </Menu>
        </Sider>
    );
}