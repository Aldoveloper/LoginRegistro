import React from "react";
import StyleForm from "./FormRegister.module.css";
import { Controller, useForm } from "react-hook-form";
import { Button, Checkbox, Form, Input, Modal, Select } from "antd";
import {
  Email,
  Empresa,
  Password,
  Usuario,
} from "../../../components/icon/icons";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { setLocale } from "yup";

setLocale({
  mixed: {
    required: "Este campo es obligatorio",
    notType: "Número no válido",
  },
});
const terminosYCondiciones = `
  <p>Según Ley 1581 de 2012 y el decreto parcialmente reglamentario 1377 del 27 de junio de 2013, nos permitiremos registrarlo en nuestra base de datos para hacerle envío de información referente a los eventos, noticias y actividades relacionadas con tecclas.</p>
  <p>Podrá solicitar información, rectificación, cancelación y oposición del tratamiento de sus datos en el correo electrónico tecclas.l@outlook.com. A partir de la fecha de registro, tendrá un plazo máximo de 15 días hábiles para solicitar la supresión de sus datos por medio de correo electrónico; si en tal plazo no existe manifestación al respecto, entendemos que su voluntad ha sido autorizar la continuidad del tratamiento de la información de la cual es titular.</p>
  <p>Todos los logotipos y marcas de la página Web son de propiedad de teclas.</p>
  <p>Aceptación de Términos. Se presume que cuando un participante accede al sitio Web lo hace bajo su total responsabilidad y que, por tanto, acepta plenamente y sin reservas el contenido de los términos y condiciones de uso del sitio Web.</p>
`;

const schema = yup
  .object({
    nombreEmpresa: yup
      .string()
      .required()
      .min(3, "La contraseña debe tener entre 3 y 30 caracteres")
      .max(30, "La contraseña debe tener entre 8 y 30 caracteres"),

    nombre: yup
      .string()
      .required()
      .min(3, "El nombre debe tener al menos tres caracteres")
      .max(30, "El nombre debe tener máximo treinta caracteres"),

    email: yup.string().required().email("Correo no válido"),

    password: yup
      .string()
      .required()
      .min(8, "La contraseña debe tener entre 8 y 30 caracteres")
      .max(30, "La contraseña debe tener entre 8 y 30 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]*$/,
        "La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial (!@#$%^&*)"
      ),
    password2: yup
      .string()
      .required("La confirmación de contraseña es requerida")
      .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir"),

    // condiciones: yup
    //   .boolean()
    //   .oneOf(
    //     [true],
    //     "Debes aceptar los términos y condiciones para continuar."
    //   ),
  })
  .required();
const FormRegister = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  // const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleModalToggle = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <Modal
        title="Términos y Condiciones"
        open={modalVisible}
        onCancel={handleModalToggle}
        footer={null}
        width={600}
      >
        <div dangerouslySetInnerHTML={{ __html: terminosYCondiciones }} />
      </Modal>
      <div className={StyleForm.registerDiv}>
        <Form
          onFinish={methods.handleSubmit(onSubmit, (e) => {
            console.log("Error", e);
          })}
        >
          <div className={StyleForm.title}>
            <span className={StyleForm.crearTitulo}>Crear cuenta</span>
          </div>
          <div className={StyleForm.divForm}>
            <Controller
              control={methods.control}
              name={"nombreEmpresa"}
              rules={{}}
              render={({
                field: { value, onChange, onBlur },
                formState: { errors },
                fieldState: { error },
              }) => (
                <Form.Item
                  // required={error ? true : false}
                  style={{
                    margin: "0",
                    padding: "0",
                  }}
                  hasFeedback={true}
                  labelCol={{ span: 24 }}
                  className={StyleForm.inputItem}
                  validateStatus={errors?.["nombreEmpresa"] && "error"}
                  help={errors?.["nombreEmpresa"]?.message}
                >
                  <Input
                    prefix={<Empresa />}
                    placeholder="Empresa"
                    value={value || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={StyleForm.estiloInput}
                  />
                </Form.Item>
              )}
            />
            <Controller
              control={methods.control}
              name={"nombre"}
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
                  validateStatus={errors?.["nombre"] && "error"}
                  help={errors?.["nombre"]?.message}
                >
                  <Input
                    prefix={<Usuario />}
                    placeholder="Nombre"
                    value={value || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={StyleForm.estiloInput}
                  />
                </Form.Item>
              )}
            />
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
                    placeholder="Email"
                    value={value || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={StyleForm.estiloInput}
                  />
                </Form.Item>
              )}
            />
            <Controller
              control={methods.control}
              name={"password"}
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
                  validateStatus={errors?.["password"] && "error"}
                  help={errors?.["password"]?.message}
                >
                  <Input.Password
                    prefix={<Password />}
                    placeholder="Contraseña"
                    value={value || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={StyleForm.estiloInput}
                  />
                </Form.Item>
              )}
            />
            <Controller
              control={methods.control}
              name={"password2"}
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
                  validateStatus={errors?.["password2"] && "error"}
                  help={errors?.["password2"]?.message}
                >
                  <Input.Password
                    prefix={<Password />}
                    placeholder="Confirmar contraseña"
                    value={value || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={StyleForm.estiloInput}
                  />
                </Form.Item>
              )}
            />

            <div className={StyleForm.condiciones}>
              <span className={StyleForm.text1}>
                He leído y acepto los{" "}
                <Button
                  type="link"
                  style={{ margin: 0, padding: 0, fontSize: "12px" }}
                  onClick={(e) => {
                    handleModalToggle();
                  }}
                >
                  Términos y condiciones
                </Button>
              </span>

              <Controller
                control={methods.control}
                name={"condiciones"}
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
                    validateStatus={errors?.["condiciones"] && "error"}
                    help={errors?.["condiciones"]?.message}
                  >
                    <Checkbox
           
                      checked={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  </Form.Item>
                )}
              />
            </div>
          </div>

          <div className={StyleForm.form}>
            <Button
              type="primary"
              htmlType="submit"
              className={StyleForm.button}
              // lstyoading={}
              // disabled={}
            >
              Registrarme
            </Button>
            <span
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "12px",
                fontFamily: "Poppins",
              }}
            >
              ¿Ya eres parte de pulsof? &nbsp;
              <Link to={"/"}>Iniciar sesión</Link>
            </span>
          </div>
        </Form>
      </div>
    </>
  );
};
export default FormRegister;
