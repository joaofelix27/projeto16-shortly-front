import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/globalstyle";
import Cadastro from "./Cadastro";
import Ranking from './Ranking'
import Login from "./Login";
import Home from "./Home";

function App() {

//   const contextValue = {
//     login,
//     setLogin,
//     chosenProducts,
//     setChosenProducts,viaCart,setViaCart,totalValue,setTotalValue
//   };

  return (
    <>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Ranking />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
