import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
export default function Header({ loginData, setLogin }) {
  const navigate = useNavigate();
  function logOut(){
    localStorage.removeItem("loginData");
    setLogin(null)
    navigate("/")
}
  return (
    <>
      <TopContainer loginData={loginData}> {
        loginData ?   <TopLeft>{
          `Seja bem-vindo(a), ${loginData.name}!`
          }
       
      </TopLeft> : ""
      }
      
        <TopRight>
          {loginData ? (
            <Link to="/home" style={{ textDecoration: "none" }}>
              <TopRightText>Home</TopRightText>
            </Link>
          ) : (
            ""
          )}
          {loginData ? (
            <Link to="/" style={{ textDecoration: "none" }}>
              <TopRightText>Ranking</TopRightText>
            </Link>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <TopRightText>Entrar</TopRightText>
            </Link>
          )}
               {loginData ? (
            <Link to="/" style={{ textDecoration: "none" }}>
              <TopRightText onClick={()=> logOut()}>Sair</TopRightText>
            </Link>
          ) : (
            <Link to="/cadastro" style={{ textDecoration: "none" }}>
            <TopRightText>Cadastre-se</TopRightText>
          </Link>
          )}
        
        </TopRight>
      </TopContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo>
          <h1>Shortly</h1>
          <img src={logo} />
        </Logo>
      </Link>
    </>
  );
}
const TopContainer = styled.div`
  width: 1100px;
  margin-top: 60px;
  display: flex;
  justify-content:${props => props.loginData ? "space-between": "right"};
`;
const TopRight = styled.div`
  display: flex;
  align-items: center;
`;
const TopLeft = styled.div`
  display: flex;
  align-items: center;
  color: #5D9040;

`;
const TopRightText = styled.h1`
  font-family: Lexend Deca;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  margin-left: 22px;
  color: #9C9C9C;

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
