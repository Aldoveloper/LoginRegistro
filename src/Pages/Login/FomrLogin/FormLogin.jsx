import React from "react";
import StyleForm from "../FomrLogin/FormLogin.module.css";
import { Controller, useForm } from "react-hook-form";
import { Button, Checkbox, ConfigProvider, Form, Input, Select } from "antd";

import { Link } from "react-router-dom";
import * as yup from "yup";
import { setLocale } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Email, LogoPulsof2 } from "../../../components/icon/icons";

setLocale({
  mixed: {
    required: "Este campo es obligatorio",
    notType: "Número no válido",
  },
});

const schema = yup
  .object({
    email: yup.string().required().email("Correo no válido"),
  })
  .required();
const FormLogin = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "115px",
        }}
      >
        <div className={StyleForm.title}>
          <div className={StyleForm.logoPulsof}>
            <LogoPulsof2 />
          </div>
          <span className={StyleForm.iniciarTitulo}>Iniciar sesión</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
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
                <Input
                  prefix={<Email />}
                  placeholder="Correo electrónico"
                  value={value || ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  className={StyleForm.estiloInput}
                />
              </Form.Item>
            )}
          />

          <Form>
            <div className={StyleForm.form}>
              <Button
                type="primary"
                onClick={methods.handleSubmit(onSubmit)}
                className={StyleForm.buttonInicio}
                // lstyoading={}
                // disabled={}
              >
                Enviar
              </Button>
              <span
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                Quiero ser parte de pulsof &nbsp;
                <Link to={"/register"}>Registrarme</Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
export default FormLogin;
