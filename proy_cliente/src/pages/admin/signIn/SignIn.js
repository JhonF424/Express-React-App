import React from "react"
import { Layout, Tabs } from "antd"
import Login from "../../../components/adminComponents/Login"
import Register from "../../../components/adminComponents/Register"

export default function SignIn() {
    const { Content } = Layout;
    const { TabPane } = Tabs;
    return (
        <Layout className="py-36 mx-auto">
            <Content className="flex flex-col justify-center space-y-10 lg:space-y-0 lg:space-x-10 mx-auto lg:flex-row">
                <Tabs>
                    <TabPane className="" tab={<span>Iniciar Sesión</span>} key="1">
                        <Login />
                    </TabPane>
                </Tabs>
                <Tabs>
                    <TabPane className="" tab={<span>Registrar</span>} key="2">
                        <Register />
                    </TabPane>
                </Tabs>
            </Content>
        </Layout>
    )
}