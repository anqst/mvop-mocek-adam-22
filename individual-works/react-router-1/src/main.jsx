import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Root, { loader as rootLoader, action as rootAction, } from "./routes/root";
import Contact from "./routes/contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,

        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,

        children: [
            {
                path: "/contacts/:contactId",
                element: <Contact />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
