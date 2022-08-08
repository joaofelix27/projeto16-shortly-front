import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaconf, setSenhaconf] = useState("");
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  function fazerCadastro(event) {
    event.preventDefault();
    if (senha !== senhaconf) {
      alert("Senhas não conferem");
      return;
    }
    if (email !== "") {
      const URL = `https://shortly27.herokuapp.com/signUp`;
      const profileData = {
        email: email,
        name: nome,
        password: senha,
        confirmPassword:senhaconf,
      };
      const promise = axios.post(URL, profileData);
      promise
        .then((response) => {
          if (response.status === 201) {
            alert("E-mail cadastrado!");
            navigate("/login");
          }
        })
        .catch((err) => {
          if (err.response.status === 409) {
            alert("E-mail já cadastrado!");
          } else {
            alert("Erro no cadastro!");
          }
        });
    }
  }

  function montarFormularioCadastro() {
    return (
      <>
        <form>
          <input
            type="text"
            required
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
          ></input>
          <input
            type="email"
            required
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            required
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          ></input>
          <input
            type="password"
            required
            placeholder="Confirme a senha"
            onChange={(e) => setSenhaconf(e.target.value)}
          ></input>
          <button type="submit">Criar Conta</button>
        </form>
      </>
    );
  }

  const formularioCadastro = montarFormularioCadastro();
  return (
    <Container>
      <Header />
      <FormularioCadastro onSubmit={fazerCadastro}>
        {formularioCadastro}
      </FormularioCadastro>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const FormularioCadastro = styled.div`
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
      margin-top:36px;
    height: 60px;
    width: 182px;
    border-radius: 12px;
    background-color: #5d9040;
    font-family: Lexend Deca;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    border:0px;
    color: #FFFFFF;
  }
`;
