import React from "react"
import { Layout, Tabs } from "antd"
import Login from "../../../components/adminComponents/Login"
import Register from "../../../components/adminComponents/Register"

export default function SignIn() {
    const { Content } = Layout;
    const { TabPane } = Tabs;
    return (
        <Layout>
            <Content className="ml-96">
                <Tabs>
                    <TabPane tab={<span>Iniciar Sesión</span>} key="1">
                        <Login />
                    </TabPane>
                </Tabs>
                <Tabs>
                    <TabPane tab={<span>Registrar</span>} key="2">
                        <Register />
                    </TabPane>
                </Tabs>
            </Content>
        </Layout>
    )
}