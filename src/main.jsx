import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {createHashRouter, RouterProvider} from 'react-router-dom'
import Home from "./Routes/Home.jsx";
import AboutMe from "./Routes/AboutMe";

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/aboutMe',
    element: <AboutMe />
  },
  /*{
    path: '/technologies',
    element: <Technologies />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/games',
    element: <Games />
  },
  {
    path: '/contact',
    element: <Contact />
  } */
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <div className="cursor-div">
      {/* <App /> */}
      </div>
  </React.StrictMode>
);
