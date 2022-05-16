import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Layout, Form, Input, Button, Checkbox } from "antd"

export default function () {
    return (
        <Layout>
            <Form className="w-1/2">
                <Form.Item
                    className="my-2"
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: "Por favor ingresa tu nombre de usuario" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Por favor ingresa tu contraseña" }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 mx-2 rounded">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}