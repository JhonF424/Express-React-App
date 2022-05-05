import React from "react";
import { Layout } from "antd";
// import "./LayoutBasic.scss";
import MenuTop from "../components/adminComponents/menu/MenuTop";
export default function LayoutAdmin(props) {
    const { children } = props;
    const { Header, Content, Footer } = Layout;
    return (
        <Layout>
            <Layout>
                <Header className="">
                    <MenuTop></MenuTop>
                </Header>
                <Content>
                    {children}
                </Content>
                <Footer className="absolute inset-x-0 bottom-0 h-16">
                    React Project 2022
                </Footer>
            </Layout>
        </Layout>
    );
}