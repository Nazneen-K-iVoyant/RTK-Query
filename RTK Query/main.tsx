// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App, { router } from './App.tsx'
// import './index.css'

// import { BrowserRouter, RouterProvider } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { store } from './store.ts'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     {/* <Provider store={store} >
//     <App />
//     </Provider> */}
//     {/* <RouterProvider router={router} /> */}

//     {/* <BrowserRouter>
//       <App/>
//     </BrowserRouter> */}

//     <Provider store={store} >
//       <App/>
//     </Provider>
//   </React.StrictMode>
// )


import React from "react";
import ReactDOM from "react-dom/client";
import App, { router } from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);