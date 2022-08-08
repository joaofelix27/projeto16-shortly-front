import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <TopContainer>
        <TopRight>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <TopRightText>Entrar</TopRightText>
          </Link>
          <Link to="/cadastro" style={{ textDecoration: "none" }}>
            <TopRightText>Cadastre-se</TopRightText>
          </Link>
        </TopRight>
      </TopContainer>
      <Logo>
        <h1>Shortly</h1>
        <img src={logo} />
      </Logo>
    </>
  );
}
const TopContainer = styled.div`
  width: 100%;
  margin-top: 60px;
  margin-right: 171px;
  display: flex;
  justify-content: right;
`;
const TopRight = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;
const TopRightText = styled.h1`
  font-family: Lexend Deca;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  margin-left: 22px;
  color:#000000;
`;
const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;

  h1 {
    font-family: Lexend Deca;
    font-size: 64px;
    font-weight: 200;
    line-height: 80px;
    letter-spacing: 0em;
    color: #000000;
    margin-right: 8px;
  }
`;
