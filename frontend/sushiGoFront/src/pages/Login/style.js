import styled from "styled-components";
import BG from "../../assets/BgLogin.png";
import { Color } from "../../Colors/ListColor";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export const LeftDiv = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${BG});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const RightDiv = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${Color.BG_SoftBlack};
  display: flex;
  flex-direction: column;

  .right_wrap {
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    margin-bottom: auto;
  }

  .title {
    margin-left: auto;
    margin-right: auto;
    margin-top: 35px;

    h1 {
      font-size: 42px;
      font-weight: 300;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      color: ${Color.Text_SoftWhite};
    }
  }

  .img_wrap {
    margin-left: auto;
    margin-right: auto;
    img {
      height: 300px;
      width: 300px;
    }
  }

  .formContainer {
    width: 400px;
    margin-left: auto;
    margin-right: auto;

    form {
      display: flex;
      flex-direction: column;
      height: 250px;
      button {
        width: 200px;
        margin-left: auto;
        margin-right: auto;
      }

      input {
        height: 40px;
        width: 80%;
        padding: 6px;
        border: none;
        outline: none;
        border-radius: 10px;
        background-color: #e67e22;
        color: ${Color.Text_SoftWhite};
        &::placeholder {
          color: ${Color.Text_SoftWhite};
          opacity: 1;
        }
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 28px;
      }
    }
  }
`;
