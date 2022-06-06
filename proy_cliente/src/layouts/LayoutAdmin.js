import React, { Children, useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/adminComponents/menu/MenuTop";
import MenuSider from "../components/adminComponents/menuSider";
import { GithubOutlined } from "@ant-design/icons"
import SignIn from "../pages/admin/signIn/SignIn";
import { Route, Routes } from "react-router-dom";
export default function LayoutAdmin(props) {
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer } = Layout;
    const { children } = props;
    const user = null;
    if (!user) {
        return (
            <>
                <SignIn />
                <Routes>
                    <Route path="/admin/login/*" element={<SignIn />} />
                </Routes>
            </>
        );
    }
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
                            <GithubOutlined className="text-2xl" />
                        </a>
                    </div>
                </Footer>
            </Layout>
        </Layout>
    );
}