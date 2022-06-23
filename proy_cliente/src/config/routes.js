import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

/* Importamos los pages */
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";
import AdminUsers from "../pages/Admin/Users";
import AdminSubjects from "../pages/Admin/Subjects";

// Pages del Coordinador
import CoordHome from '../pages/Coordinator/Coordinator'
import CoordSubjects from '../pages/Admin/Subjects'

import Home from "../pages/Home";
import NotFound from "../pages/NotFound/NotFound";
import Contact from "../pages/Contact";

const routesAdmin = [
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
  {
    path: "/admin/users",
    layout: LayoutAdmin,
    component: AdminUsers,
  },
  {
    path: "/admin/subjects",
    layout: LayoutAdmin,
    component: AdminSubjects,
  },
];

//Rutas para los coordinadores
const routesCoord = [
  {
    path: "/coord",
    layout: LayoutAdmin,
    component: CoordHome,
  },
  {
    path: "/coord/subjects",
    layout: LayoutAdmin,
    component: CoordSubjects,
  }
]

/* Ruta home, notfound */
const routesClient = [
  {
    path: "/",
    layout: LayoutBasic,
    component: Home,
  },
  {
    path: "/contact",
    layout: LayoutBasic,
    component: Contact,
  },
];

const routeNotFound = [
  {
    path: "*",
    layout: LayoutBasic,
    component: NotFound,
  },
];

const routes = [...routesAdmin, ...routesCoord, ...routesClient, ...routeNotFound];
export default routes;
