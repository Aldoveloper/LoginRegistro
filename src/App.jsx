import React from "react";
import Register from "./Pages/Register/Register";
import { ConfigProvider } from "antd";
import Login from "./Pages/Login/Login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
  RouterProvider,
} from "react-router-dom";
import FormLoginCuenta from "./Pages/Login/FomrLogin/FormLoginCuenta";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/formCuenta" element={<FormLoginCuenta />} />
      </Route>
    )
  );
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Poppins",
            colorPrimary: "#FFFA8E",
            colorText: "#000",
            colorTextLightSolid: "#000",
            colorError: "#000",
        
            
          },
          components: {
            Select: {
              colorTextQuaternary: "#000",
            },
            Checkbox: {
              colorPrimary: "#1758FF",
            },
          },
        }}
      >
        <RouterProvider router={router}></RouterProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
