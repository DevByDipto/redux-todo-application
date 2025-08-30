import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Task from "@/pages/Task";
import User from "@/pages/User";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { index:true,
        element: <Task></Task>
      },
      { path:'/task',
        element: <Task></Task>
      },
      { path: "/user",
        element: <User></User>
      },
      ]
  },
]);