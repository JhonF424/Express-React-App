import LayoutAdmin from "../layouts/LayoutAdmin";
import AdminHome from "../pages/admin";
import AdminSignIn from "../pages/admin/SignIn"
import NotFound from "../layouts/NotFound"
const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: "/admin",
                component: AdminHome,
                exact: true,
            },
            {
                path: "/admin/login",
                component: AdminSignIn,
                exact: true
            },
            {
                path: "*",
                component: NotFound,
                exact: true
            }
        ]
    }
]

export default routes;