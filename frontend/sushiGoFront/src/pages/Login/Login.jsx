import * as C from "./style";
import Boat from "../../assets/leadership.gif";
import * as BTN from "../../conponents/Buttons/Button";
const Login = () => {
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
              <form action="" method="POST">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Digite seu E-mail."
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Digite sua Senha."
                />
                <BTN.Login_BTN>
                  <button class="Login_BTN" role="button">
                    Entrar
                  </button>
                </BTN.Login_BTN>
              </form>
            </div>
          </div>
        </C.RightDiv>
      </C.Container>
    </>
  );
};

export default Login;
