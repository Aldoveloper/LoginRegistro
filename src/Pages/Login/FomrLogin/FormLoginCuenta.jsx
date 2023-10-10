import React from "react";
import StyleForm from "./FormLogin.module.css";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Checkbox,
  ConfigProvider,
  Form,
  Input,
  Row,
  Select,
} from "antd";


import { Flecha, Flecha2, LogoPulsof2, Usuario } from "../../../components/icon/icons";
import { Link } from "react-router-dom";

const FormLoginCuenta = () => {
  //   const methods = useForm({
  //     resolver: yupResolver(schema),
  //     mode: "onBlur",
  //   });
  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div
       className={StyleForm.contenedorCuenta}
      >
        <div className={StyleForm.title}>
          <div className={StyleForm.logoPulsof}>
            <LogoPulsof2 />
          </div>
          <div style={{
            display: "flex",
            alignItems: "center", 
            width: 'auto'
          }}>
          <span className={StyleForm.iniciarTitulo}>Selecciona una cuenta para iniciar sesión</span>
      
          </div>
           </div>
        <div
          className={StyleForm.controler}
        
        >
          <Controller
            control={methods.control}
            name={"email"}
            rules={{}}
            render={({
              field: { value, onChange, onBlur },
              formState: { errors },
            }) => (
              <Form.Item
                style={{
                  margin: "0",
                  padding: "0",
                }}
                hasFeedback={true}
                labelCol={{ span: 24 }}
                className={StyleForm.inputItem}
                validateStatus={errors?.["email"] && "error"}
                help={errors?.["email"]?.message}
              >
                <Button
                  icon={<Usuario/>}
                  type="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("click", e);
                  }}
                  style={{
                    width:"300px"
                  }}
                  className={StyleForm.estiloInput}
                >
                  logica cuenta
                </Button>
              </Form.Item>
            )}
          />

          <Form>
            <div className={StyleForm.formCuenta}>
              <Button
                type="primary"
                icon={<Flecha/>}
                onClick={(e) => {
                  console.log("click", e);
                }}
                className={StyleForm.buttonAtras}

                // lstyoading={}
                // disabled={}
              >
                <Link to={"/"}></Link>
              </Button>
              <Button
                type="primary"
                onClick={methods.handleSubmit(onSubmit)}
                className={StyleForm.button}
                // lstyoading={}
                // disabled={}
              >
                Continuar &nbsp; {<Flecha2/>}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
export default FormLoginCuenta;
