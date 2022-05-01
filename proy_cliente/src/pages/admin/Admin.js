import React from "react";

import { Card, Row, Col } from "antd";
export default function Admin() {
    return (
        <div>
            <Row gutter={[16, 16]}>
                <Card title="Admin Login" extra={<a href="/admin/login">Click Here!</a>} className="mx-2 w-40 ant-col-6 bg-slate-400">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Row>
        </div>
    )
}