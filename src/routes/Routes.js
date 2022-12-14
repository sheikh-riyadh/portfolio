import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Portfolio from "../components/Portfolio/Portfolio";
import Skills from "../components/Skills/Skills";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: '/home',
                element: <Home></Home>
            }, {
                path: '/skills',
                element: <Skills></Skills>
            }, {
                path: '/projects',
                element: <Portfolio></Portfolio>
            }, {
                path: '/blogs',
                element: <Blogs></Blogs>
            }, {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])