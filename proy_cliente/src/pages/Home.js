import React from "react";
import { Card, Row, Col } from "antd";
export default function SignIn() {
  return (
    <div className="">
      <h2 className="">
        Home page
      </h2>
      <div style={{padding: 45}}>
        <Row gutter={[16, 16]}>
          <Card title="Contacts" extra={<a href="/contacts">Click Here!</a>} style={{ width: 400, margin: 20 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card title="Admin Page" extra={<a href="/admin">Click Here!</a>} style={{ width: 400, margin: 20 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Row>
      </div>
    </div>
  )
}