import react from "react";
import StyleLogin from "../Login/Login.module.css";
import { Manos } from "../../components/icon/icons";
import FormLoginCuenta from "./FomrLogin/FormLoginCuenta";
import FormLogin from "./FomrLogin/FormLogin";
import { Switch } from "antd";
import React from "react";

const Login = () => {
  const [showFormLogin, setShowFormLogin] = React.useState(true); // Inicialmente muestra FormLogin

  const toggleForm = () => {
    setShowFormLogin(!showFormLogin); // Cambia entre FormLogin y FormLoginCuenta
  };
  return (
    <div className={StyleLogin.container}>
      <div className={StyleLogin.board}>
        <div className={StyleLogin.mano}>
          <Manos />
        </div>

        <div className={StyleLogin.left}>
          <div className={StyleLogin.leftContainer}>
            <h2 className={StyleLogin.title}>Bienvenido a Pulsof</h2>
          </div>
        </div>
        <div className={StyleLogin.rigth}>
          <Switch checked={showFormLogin} onChange={toggleForm} /> 
          {showFormLogin ? <FormLogin /> : <FormLoginCuenta />}
        </div>
      </div>
    </div>
  );
};
export default Login;
