import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import Header from "./Header";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [login, setLogin] = useState("");
  const navigate = useNavigate();
  function fazerLogin(event) {
    event.preventDefault();

    if (email !== "") {
      const URL = `https://shortly27.herokuapp.com/signIn`;
      const profileData = {
        email: email,
        password: senha,
      };
      const promise = axios.post(URL, profileData);
      promise
        .then((response) => {
          const { data } = response;
          const loginData = { ...data };
          const strLoginData = JSON.stringify(data);
          window.localStorage.setItem("loginData", strLoginData);
          setLogin(loginData);
          navigate("/");
        })
        .catch((err) => {
          alert("Erro no Login, dados incorretos!");
        });
    }
  }

  function montarFormularioLogin() {
    return (
      <>
        <form>
          <input
            type="email"
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Senha"
            required
            onChange={(e) => setSenha(e.target.value)}
          ></input>
          <button type="submit">Entrar</button>
        </form>
      </>
    );
  }

  const formularioLogin = montarFormularioLogin();
  return (
    <Container>
      <Header />
      <FormularioLogin onSubmit={fazerLogin}>{formularioLogin}</FormularioLogin>
    </Container>
  );
}
export default Login;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const FormularioLogin = styled.div`
  margin-top: 140px;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    height: 60px;
    width: 769px;
    background: #ffffff;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
    padding: 22px;
    font-family: Lexend Deca;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #9c9c9c;
    margin-bottom:25px;
  }
  button {
    margin-top: 36px;
    height: 60px;
    width: 182px;
    border-radius: 12px;
    background-color: #5d9040;
    font-family: Lexend Deca;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    border: 0px;
    color: #ffffff;
  }
`;
