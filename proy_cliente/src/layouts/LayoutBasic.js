import React from "react";
import { Layout } from "antd";
export default function LayoutBasic(props) {
    const { children } = props;
    const { Header, Content, Footer } = Layout;
    return (
        <Layout>
            <Layout>
                <Header className="">
                    Header
                </Header>
                <Content>
                    {children}
                </Content>
                <Footer>
                    React Project 2022
                </Footer>
            </Layout>
        </Layout>
    );
}