import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import { Layout, Form, Input, Button, Checkbox, notification } from "antd"
import { useState } from "react";
import { signUpApi } from "../../../api/user";
import {
    emailValidation,
    minLengthValidation,
} from "../../../validation/FormValidation"
export default function Register() {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        repeatPassword: "",
        privacyPolicy: false,
    });

    const [formValid, setFormValid] = useState({
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
        // console.log(formValid);

        const { type, name } = evt.target;

        if (type === "email") {
            setFormValid({
                ...formValid,
                [name]: emailValidation(evt.target),
            });
        }

        if (type === "password") {
            setFormValid({
                ...formValid,
                [name]: minLengthValidation(evt.target, 6),
            });
        }

        if (type === "checkbox") {
            setFormValid({
                ...formValid,
                [name]: evt.target.checked
            });
        }
    }

    const register = async (evt) => {
        evt.preventDefault();
        console.log("Pasa por register");
        const emailVal = inputs.email;
        const passwordVal = inputs.password;
        const repeatPassword = inputs.repeatPassword;
        const privacyPolicyVal = inputs.privacyPolicy;

        if (
            !emailVal ||
            !passwordVal ||
            !repeatPassword ||
            !privacyPolicyVal
        ) {
            notification["error"]({
                message: "Error con el registro: Verifique que no hay campos vacíos y que las contraseñas coinciden"
            });
        } else {
            const result = await signUpApi(inputs);
            console.log(result);
            if (!result.user_creado) {
                notification["error"]({
                    message: result.message
                });
            } else {
                notification["success"]({
                    message: result.message
                });
                resetForm();
            }
        }
    }

    const resetForm = () => {
        const inputs = document.getElementsByTagName("input");

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove("bg-green-200")
            inputs[i].classList.remove("bg-red-200")
        }

        setInputs({
            email: "",
            password: "",
            repeatPassword: "",
            privacyPolicy: false,
        });

        setFormValid({
            email: false,
            password: false,
            repeatPassword: false,
            privacyPolicy: false,
        });
    };

    return (
        <Layout className="mx-auto">
            <Form className="" onChange={changeForm}>
                <Form.Item>
                    <Input
                        prefix={
                            <MailOutlined />
                        }
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        className="my-2"
                        onChange={inputValidation}
                        value={inputs.email}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={
                            <LockOutlined />
                        }
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        className="my-2"
                        onChange={inputValidation}
                        value={inputs.password}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={
                            <LockOutlined />
                        }
                        type="password"
                        name="repeatPassword"
                        placeholder="Repetir contraseña"
                        className="my-2"
                        onChange={inputValidation}
                        value={inputs.repeatPassword}
                    />
                </Form.Item>
                <Form.Item>
                    <Checkbox name="privacyPolicy"
                        onChange={inputValidation}
                        checked={inputs.privacyPolicy}>
                        He leído y acepto la política de privacidad
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" onClick={register} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 mx-2 rounded">
                        Crear cuenta
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}