import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [url, setUrl] = useState([]);
  const [myUrls, setMyUrls] = useState([]);
  const [login, setLogin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    setLogin(loginData);
    const config = {
      headers: {
        Authorization: `Bearer ${loginData?.token}`,
      },
    };
    const promise = axios.get(
      "https://shortly27.herokuapp.com/users/me",
      config
    );
    promise.then((response) => setMyUrls(response.data?.shortenedurl));
    console.log(myUrls);
  }, []);
  function postShortUrl(event) {
    event.preventDefault();
    if (url !== "") {
      const loginData = JSON.parse(localStorage.getItem("loginData"));
      const body = { url: url };
      const config = {
        headers: {
          Authorization: `Bearer ${loginData?.token}`,
        },
      };
      const promise = axios.post(
        `https://shortly27.herokuapp.com/urls/shorten`,
        body,
        config
      );
      promise.then((response) => {
        if (response.status === 401) {
          alert("Sessão expirada, logue novamente");
          localStorage.removeItem("loginData");
          navigate("/");
        }
        setUrl("");
      });

      promise.catch((error) => {
        if (error.response.status == 401) {
          alert("Sessão expirada, logue novamente");
          localStorage.removeItem("loginData");
          navigate("/");
        } else {
          alert("Erro ao gerar shortUrl!");
        }
      });
    }
  }

  function deleteShortUrl(id) {
      console.log(id)
    if (url !== "") {
      const loginData = JSON.parse(localStorage.getItem("loginData"));
      const config = {
        headers: {
          Authorization: `Bearer ${loginData?.token}`,
        },
      };
      const promise = axios.delete(
        `https://shortly27.herokuapp.com/urls/${id}`,
        config
      );
      promise.then((response) => {
        alert("Short Url deletada com sucesso")
      });

      promise.catch((error) => {
      alert("Erro ao deletar")
      });
    }
  }

  return (
    <Main>
      <Header loginData={login} setLogin={setLogin} />
      <HomeContainer>
        <HomeHeader onSubmit={postShortUrl}>
          <input
            type="text"
            required
            placeholder="Links que cabem no bolso"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          ></input>
          <button type="submit">Encurtar link</button>
        </HomeHeader>
        <HomeBody>
          {myUrls.length > 0
            ? myUrls.map((values, index) => {
                return (
                  <div className="container">
                    <div className="url" key={index}>
                      <h1>{values?.url}</h1>
                      <h1>{values?.shortUrl}</h1>
                      <h1>{`Quantidade de Visitantes: ${values?.visitCount}`}</h1>
                    </div>
                    <IonIcons onClick={() => deleteShortUrl(values?.id)}>
                      <ion-icon  name="trash-outline"></ion-icon>
                    </IonIcons>
                  </div>
                );
              })
            : "Sem Links Gerados"}
        </HomeBody>
      </HomeContainer>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  align-items: center;
`;
const HomeContainer = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  width: 1017px;
`;
const HomeHeader = styled.form`
  input {
    height: 60px;
    width: 769px;
    border-radius: 12px;
    background: #ffffff;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
    font-family: Lexend Deca;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #9c9c9c;
    padding: 21px;
  }
  button {
    height: 60px;
    width: 182px;
    border: 0;
    border-radius: 12px;
    background-color: #5d9040;
    font-family: Lexend Deca;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    color: #ffffff;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1017px;
`;
const HomeBody = styled.div`
  .container {
    display: flex;
    width: 1017px;
  }
  .url {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: #80cc74;
    background: #80cc74;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 0px 0px 12px;
    padding-right: 94px;
    padding-left: 21px;
    margin-bottom: 42px;
    width: 90%;
  }
  h1 {
    font-family: Lexend Deca;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  margin-top: 57px;
  width: 100%;
`;
const IonIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 60px;
  background-color: #ffffff;
  border: 1px solid #78b15940;
  border-radius: 0px 12px 12px 0px;
  box-shadow: 0px 4px 24px 0px #78b1591f;
  ion-icon {
    font-size: 30px;
    color: red;
  }
`;
