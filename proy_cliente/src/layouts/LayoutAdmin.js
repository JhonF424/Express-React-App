import React from "react";
import { Layout } from "antd";
export default function LayoutAdmin(props) {
    const { children } = props;
    const { Header, Content, Footer } = Layout;
    return (
        <Layout>
            <Layout>
                <Header className="bg-slate-600 text-emerald-500 text-2xl py-4">
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