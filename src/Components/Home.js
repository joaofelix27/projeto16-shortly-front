import { useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./Header";


export default function Home(){
    const[ranking, setRanking] = useState([]);

    useEffect(()=>{
    const promise = axios.get("https://shortly27.herokuapp.com/ranking");
    promise.then(response=>setRanking(response.data))
   
    },[]);

    console.log(ranking)
    return (
        <Main>
        <Header/>
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    min-width:100vw;
    min-height: 100vh;
    align-items: center;
`
