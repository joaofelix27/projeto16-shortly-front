import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./Header";
import trofeu from "../assets/ranking.png";

export default function Ranking() {
  const [ranking, setRanking] = useState([]);
  const [login, setLogin] = useState(null);

  
  useEffect(() => {
    const loginData=JSON.parse(localStorage.getItem("loginData"))
    const promise = axios.get("https://shortly27.herokuapp.com/ranking");
    setLogin(loginData)   
    promise.then((response) => setRanking(response.data));
  }, []);
  
  return (
    <Main>
      <Header loginData={login} setLogin={setLogin} />
      <RankingContainer>
        <RankingHeader>
          <img src={trofeu} />
          <h1>Ranking</h1>
        </RankingHeader>
        <RankingBody>
          {ranking.length > 0
            ? ranking.map((values, index) => {
                return (
                  <div key={index}>
                    <h1>
                      {`${index + 1}. ${values?.name} - `}
                    </h1>
                    <h2>
                      - {`${values?.linksCount} links -
                            ${values.visitCount} visualizações`}
                    </h2>
                  </div>
                );
              })
            : "Carregando"}
        </RankingBody>
      </RankingContainer>
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
const RankingContainer = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  width: 1017px;
`;
const RankingHeader = styled.div`
  img {
    width: 56px;
    margin-right: 10px;
  }
  h1 {
    font-family: Lexend Deca;
    font-size: 36px;
    font-weight: 700;
    line-height: 45px;
    letter-spacing: 0em;
    text-align: left;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1017px;
`;
const RankingBody = styled.div`
    div{
        display:flex;
    }
  h1 {
    font-family: Lexend Deca;
    font-size: 22px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
  }
  h2 {
    font-family: Lexend Deca;
    font-size: 22px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
  }
  padding: 20px 40px;
  margin-top: 57px;
  height: 241px;
  width: 1017px;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px 24px 0px 0px;
`;
