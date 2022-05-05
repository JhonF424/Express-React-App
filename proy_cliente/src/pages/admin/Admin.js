import React from "react";

import { Card, Row, Col } from "antd";
export default function Admin() {
    return (
        <div className="flex items-center">
            <Row gutter={[16, 16]}>
                <Card title="Admin Login" extra={<a href="/admin/login">Click Here!</a>} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Row>
        </div>
    )
}