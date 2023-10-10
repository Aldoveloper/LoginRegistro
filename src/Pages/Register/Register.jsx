import react from "react";
import StyleRegister from "./Register.module.css";
import { CoheteRegister, LogoPulsof, Nube, Nube2 } from "../../components/icon/icons";
import FormRegister from "../Register/FormRegister/FormRegister";

const Register = () => {
  return (
    <div className={StyleRegister.container}>
      <div className={StyleRegister.board}>
        <div className={StyleRegister.left}>
          <div className={StyleRegister.leftContainerCohete}>
            {<CoheteRegister />}
          </div>
          <div className={StyleRegister.nube}>
            <div className={StyleRegister.nube2}>
              <Nube2 />
            </div>
            <Nube />
          </div>
          <div className={StyleRegister.leftContainer}>
            <h2 className={StyleRegister.title}>
              Comienza a darle vida a tus ideas
            </h2>
            <ul>
              <li className={StyleRegister.list}>
                Experiencia de uso fácil e intuitiva
              </li>
              <li className={StyleRegister.list}>
                Adaptable a todo tipo de recompensa
              </li>
              <li className={StyleRegister.list}>
                Sin límites, flexibilidad total
              </li>
            </ul>
          </div>
          <div className={StyleRegister.leftContainerLogo}>
            {<LogoPulsof />}
          </div>
        </div>
        <div className={StyleRegister.rigth}>
          <FormRegister/>
        </div>
      </div>
    </div>
  );
};
export default Register;
