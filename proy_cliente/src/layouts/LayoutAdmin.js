import React, { Children, useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/adminComponents/menu/MenuTop";
import MenuSider from "../components/adminComponents/menuSider";
import { GithubOutlined } from "@ant-design/icons"
export default function LayoutAdmin(props) {
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer } = Layout;
    const { children } = props;
    
    return (
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout>
                <Header>
                    <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} />
                </Header>
                <Content className="">
                    {children}
                </Content>
                <Footer className="mx-auto w-full fixed bottom-0 flex flex-row">
                    <p className="mx-auto w-full">
                        MERN UCaldas
                    </p>
                    <div className="">
                        <a href="https://github.com/JhonF424" target="_blank">
                            <GithubOutlined />
                        </a>
                    </div>
                </Footer>
            </Layout>
        </Layout>
    );
}