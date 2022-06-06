import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { Layout, Form, Input, Button, Checkbox } from "antd"

export default function Login() {
    return (
        <Layout className="mx-auto">
            <Form className="">
                <Form.Item>
                    <Input
                        prefix={
                            <MailOutlined />
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
                            <LockOutlined />
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