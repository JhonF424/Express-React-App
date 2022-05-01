import React from "react";
import { Card, Row, Col } from "antd";
export default function SignIn() {
    return (
        <div className="">
            <h2 className="font-bold text-2xl flex items-center justify-center my-10">
                Home page
            </h2>
            <div className="">
                <Row gutter={[16, 16]}>
                    <Card title="Contacts" extra={<a href="/contacts">Click Here!</a>} className="mx-2 w-40 ant-col-6 bg-slate-400">
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card title="Admin Page" extra={<a href="/admin">Click Here!</a>} className="mx-2 w-40 ant-col-6 bg-slate-400">
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Row>
            </div>
        </div>
    )
}