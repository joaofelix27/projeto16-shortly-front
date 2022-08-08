import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/globalstyle";
import Cadastro from "./Cadastro";
import Home from './Home'
import Login from "./Login";

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
            <Route path="/" element={<Home />} />
            <Route path="/Cadastro" element={<Cadastro />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
