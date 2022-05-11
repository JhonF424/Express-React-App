import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";
import AdminHome from "../pages/admin";
import AdminSignIn from "../pages/admin/SignIn";
import NotFound from "../layouts/NotFound";
import Home from "../pages/Home.js";
import Contact from "../pages/Contact"
const adminRoutes = [
    {
        path: "/admin",
        layout: LayoutAdmin,
        component: AdminHome,
    },
    {
        path: "/admin/login",
        layout: LayoutAdmin,
        component: AdminSignIn,
    },

];

const routeNotFound = [
    {
        path: "*",
        layout: NotFound,
    }
]

const clientRoutes = [
    {
        path: "/",
        layout: Home,
        component: LayoutBasic,
    },
    {
        path: '/contacts',
        layout: LayoutBasic,
        component: Contact
    }
]

const routes = [...adminRoutes, ...clientRoutes, ...routeNotFound]

export default routes;