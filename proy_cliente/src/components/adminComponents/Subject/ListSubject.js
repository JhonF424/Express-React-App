import { UserAddOutlined } from "@ant-design/icons";
import { Button, List } from "antd";
import React from "react";

export default function ListSubject(props) {

    return (
        <div className="list-users">
            <div className="list-users__header">
                <div className="list-users__header-switch">
                    <List.Item
                        actions={[
                            <Button type="primary" onClick={() => console.log("Prueba")}>
                                <UserAddOutlined />
                            </Button>,
                        ]}
                    >
                        <List.Item.Meta
                            // title={
                            //     <span>
                                    // {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                            //     </span>
                            // }
                            // avatar={
                            //     <Switch
                            //         defaultChecked
                            //         onChange={() => setViewUsersActives(!viewUsersActives)}
                            //     />
                            // }
                        ></List.Item.Meta>
                    </List.Item>
                </div>
            </div>
        </div>
    )

}
