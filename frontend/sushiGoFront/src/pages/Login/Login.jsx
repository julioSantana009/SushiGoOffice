import * as C from "./style";
import Boat from "../../assets/leadership.gif";
import * as BTN from "../../conponents/Buttons/Button";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import { axiosConfig } from "../../AxiosConfig/AxiosConfig";

import { useState} from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


    
  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await axios.post("http://localhost:3000/auth", {
      email,
      password,
    }).then(response =>{
        
     if(response.status === 200){
      let token = response.data.token;
      localStorage.setItem("token", token);
      axiosConfig.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
      console.log(response.data,token);
      navigate("/");
     }
    }).catch(error =>{
      alert("Email ou senha incorretos!");
      console.log(error)
    })

    console.log(response.status);
  };


  return (
    <>
      <C.Container>
        <C.LeftDiv></C.LeftDiv>
        <C.RightDiv>
          <div className="right_wrap">
            <div className="title">
              <h1>Faça seu Login.</h1>
            </div>
            <div className="img_wrap">
              <img src={Boat} alt="" />
            </div>
            <div className="formContainer">
              <form onSubmit={handleSubmit}>
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
                    Entrar
                  </button>
                </BTN.Login_BTN>
              </form>
               <Link to="/register">
              <BTN.Back_BTN>
                  <button className="button-54" role="button">
                    Cadastrar
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

export default Login;
