// main.jsx or index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App"; // This should be your main App component (not the router)
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import About from "./routes/about";
import Services from "./routes/services";
import WebDesign from "./routes/web-design";
import WebDev from "./routes/web-dev";
import Frontend from "./routes/frontend";
import Php from "./routes/php";
import NodeJs from "./routes/node";
import SEO from "./routes/seo";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <App /> }, // This loads your main homepage
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      { path: "web-design", element: <WebDesign /> },
      { path: "web-dev", element: <WebDev /> },
      { path: "frontend", element: <Frontend /> },
      { path: "node", element: <NodeJs /> },
      { path: "php", element: <Php /> },
      { path: "seo", element: <SEO /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
