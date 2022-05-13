import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Layout, Form, Input, Button, Checkbox } from "antd"

export function SignIn() {
    return (
        <Layout>
            <Form>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: "Por favor ingresa tu nombre de usuario" }]}
                >
                    <Input />
                </Form.Item>
                <Input placeholder="Default size" prefix={<UserOutlined />} />
                <Input placeholder="Default size" prefix={<MailOutlined />} />
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Por favor ingresa tu contraseña" }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}