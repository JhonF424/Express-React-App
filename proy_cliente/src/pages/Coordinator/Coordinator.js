import { GithubOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MenuSider from "../../components/AdminComponents/MenuSider";
import MenuTop from "../../components/AdminComponents/MenuTop";
import useAuth from "../../hooks/useAuth";
import SignIn from "../Home";

export default function Coord(props) {
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer } = Layout;
    const { children } = props;
    const { user, isLoading } = useAuth();
    /* Si no hay usuario y ya termino de cargar la página, no es un usuario logueado */
    if (!user && !isLoading) {
        return (
            <>
                <SignIn />
                <Routes>
                    <Route path="/admin/login" element={<SignIn />} />
                </Routes>
            </>
        );
    }

    return (
        <div>
            <h2>Panel de coordinador</h2>
            <p>Si estas viendo esto, es porque estás logeado con una cuenta diferente a la de Coordinador del sistema</p>
        </div>
    );
}