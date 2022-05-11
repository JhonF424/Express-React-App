import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/adminComponents/menu/MenuTop";
import MenuSider from "../components/adminComponents/menuSider";

export default function LayoutAdmin() {
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer } = Layout;
    return (
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout>
                <Header>
                    <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} />
                </Header>
                <Content className="">
                    <h1 className="">Rutas</h1>
                </Content>
                <Footer className="mx-auto w-full fixed bottom-0">
                    MERN UCaldas
                </Footer>
            </Layout>
        </Layout>
    );
}