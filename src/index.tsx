/* React */
import React from 'react';
import { createRoot } from 'react-dom/client';

/* Components */
import { App } from './app/App';

/* ReactRouter */
import { BrowserRouter } from 'react-router-dom';
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import { LoginPage } from 'pages/login/login';
// import ErrorPage from 'pages/404';

const container = document.getElementById('root')!;
const root = createRoot(container);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "login",
//     element: <LoginPage />,
//     errorElement: <ErrorPage />,
//   },
// ]);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);