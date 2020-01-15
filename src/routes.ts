import About from "./views/About";
import Login from "./views/Login";
import { ComponentType, } from "react";

interface RouteParams {
    title: string,
    path: string,
    component: ComponentType<any>,
    exact?: boolean;
}

const routes: RouteParams[] = [
    {
        title: "Login",
        path: "/",
        component: Login,
        exact: true
    },
    {
        title: "About",
        path: "/about",
        component: About
    }
];

export default routes;