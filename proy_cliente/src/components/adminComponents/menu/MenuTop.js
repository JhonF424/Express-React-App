import React from "react";
import { Button } from "antd";

export default function Menu(props){
    const { menuCollapsed, setMenuCollapsed } = props;

    return (
        <div className="bg-cyan-800 text text-2xl py-4 h-full w-full">
            <div className="">
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    {/* <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"}></Icon> */}
                </Button>
            </div>
            <div className="">
                <h3>Logout</h3>
            </div>
        </div>
    )
}