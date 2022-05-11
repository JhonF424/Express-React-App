import React from "react";
import { Button } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PoweroffOutlined,
} from "@ant-design/icons"

export default function Menu(props) {
    const { menuCollapsed, setMenuCollapsed } = props;

    return (
        <div className="flex">
            <div className="">
                <Button className="hover:bg-cyan-700 text-cyan-500 rounded-full pb-8" type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            <div className="">
                <Button className="hover:bg-cyan-700 text-cyan-500 rounded-full pb-8" type="link" onClick={() => console.log("Log off")}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    )
}