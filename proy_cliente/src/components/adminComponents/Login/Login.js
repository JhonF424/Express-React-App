import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Layout, Form, Input, Button, Checkbox } from "antd"

export default function Login() {
    return (
        <Layout>
            <Form className="w-1/2">
                <Form.Item>
                    <Input
                        prefix={
                            <UserOutlined />
                        }
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        className="my-2"
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={
                            <UserOutlined />
                        }
                        type="password"
                        name="password"
                        placeholder="contraseña"
                        className="my-2"
                    />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 mx-2 rounded">
                        Ingresar
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}