import styled from "styled-components";
import { Link } from "react-router-dom";
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
      const URL = `https://narutinstore-api.herokuapp.com/register`;
      const profileData = {
        email: email,
        name: nome,
        password: senha,
      };
      const promise = axios.post(URL, profileData);
      promise
        .then((response) => {
          console.log(response);
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
          <button type="submit">Cadastrar</button>
        </form>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <h1>Já tem uma conta? Entre agora!</h1>
        </Link>
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
  margin-top:140px;
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
  }
  button {
    border: 0px;
    background-color: #ea8b1c;
    height: 46px;
    width: 326px;
    border-radius: 5px;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    color: #000000;
    margin-bottom: 32px;
  }
  h1 {
    font-family: Raleway;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    color: #000000;
    text-align: center;
  }
`;
