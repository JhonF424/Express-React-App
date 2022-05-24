import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import { Layout, Form, Input, Button, Checkbox } from "antd"
import { useState } from "react";

import {
    emailValidation,
    minLengthValidation,
} from "../../../validation/FormValidation"
export default function Register() {
    const [inputs, setInputs] = useState({
        name_user: "",
        lastname: "",
        email: "",
        password: "",
        repeatPassword: "",
        privacyPolicy: false,
    });

    const [formValid, setFormValid] = useState({
        name_user: false,
        lastname: false,
        email: false,
        password: false,
        repeatPassword: false,
        privacyPolicy: false
    });

    const changeForm = (e) => {
        if (e.target.name === "privacyPolicy") {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked,
            })
        } else {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value,
            });
        }
    };

    const inputValidation = (evt) => {
        const { type, name } = evt.target;
        if (type === "name_user" || type === "lastname") {
            setFormValid({
                ...formValid,
                [name]: minLengthValidation(evt.target, 3),
            });
        }
        if (type === "email") {
            setFormValid({
                ...formValid,
                [name]: minLengthValidation(evt.target, 6),
            });
        }
        if (type === "checkbox") {
            setFormValid({
                ...formValid,
                [name]: evt.target.checked
            })
        }
    }

    const register = async (evt) => {
        evt.preventDefault();
        console.log(fromValid);
        const name_user = inputs.name_user;
        const lastname = inputs.lastname;
        const emailVal = inputs.email;
        const passwordVal = inputs.password;
        const repeatPassword = inputs.repeatPassword;
        const privacyPolicyVal = inputs.privacyPolicy;

        if (
            !name_user ||
            !lastname ||
            !emailVal ||
            !passwordVal ||
            !repeatPassword ||
            !privacyPolicyVal
        ) {
            console.log("Campos vacíos");
        } else {
            
        }
    }

    return (
        <Layout>
            <Form className="w-1/2" onChange={changeForm}>
                <Form.Item>
                    <Input
                        prefix={
                            <UserOutlined />
                        }
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        className="my-2"
                        value={inputs.email}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={
                            <UserOutlined />
                        }
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        className="my-2"
                        value={inputs.password}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={
                            <UserOutlined />
                        }
                        type="password"
                        name="repeatPassword"
                        placeholder="Repetir contraseña"
                        className="my-2"
                        value={inputs.repeatPassword}
                    />
                </Form.Item>
                <Form.Item>
                    <Checkbox name="privacyPolicy" checked={inputs.privacyPolicy}>
                        He leído y acepto la política de privacidad
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 mx-2 rounded">
                        Crear cuenta
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}