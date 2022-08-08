import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/globalstyle";
import Home from './Home'

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
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
