import * as C from "./style";
import * as BTN from "../../conponents/Buttons/Button";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";

import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
        let response = await axios.post("http://localhost:3000/register", {
      name,
      email,
      password,
      role,
    });
    console.log(response.data);
    navigate("/login");
    }catch(error){
      console.error(error);
    }
  };

  return (
    <>
      <C.Container>
        <C.LeftDiv></C.LeftDiv>
        <C.RightDiv>
          <div className="right_wrap">
            <div className="title">
              <h1>Cadastre-se</h1>
            </div>
            
            <div className="formContainer">
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="role" id="role" value={role}
                onChange={(e) => setRole(e.target.value)}
                />  
                   <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu Nome."
                />
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu E-mail."
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua Senha."
                />
                <BTN.Login_BTN>
                  <button type="submit" className="Login_BTN" role="button">
                    Cadastrar
                  </button>
                </BTN.Login_BTN>
              </form>
              <br />
              <Link to="/login">
              <BTN.Back_BTN>
                  <button className="button-54" role="button">
                    Voltar
                  </button>
              </BTN.Back_BTN>
              </Link>
            </div>
          </div>
        </C.RightDiv>
      </C.Container>
    </>
  );
};

export default Register;
