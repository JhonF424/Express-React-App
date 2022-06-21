import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/MenuTop";
import MenuSider from "../components/AdminComponents/MenuSider";
import { GithubOutlined } from "@ant-design/icons";
import { Button } from "antd";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const { children } = props;

  return (
    <Layout>
      <Layout>
        <Header className="">
          Header
        </Header>
        <Content className="layout-admin__content">
          {children}
        </Content>
        <Footer className="layout-admin__footer">
          React Project 2022
        </Footer>
      </Layout>
    </Layout>
  );
}
