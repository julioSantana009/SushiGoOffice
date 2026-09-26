import styled from "styled-components";
import BG from "../../assets/BgLogin.png";

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
