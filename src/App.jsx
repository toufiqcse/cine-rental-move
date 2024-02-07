import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Page from "./Page";
import { MovieContext, ThemeContext } from "./context";
import { cartReducer, initialState } from "./reducers/CartReducers";

function App() {
  // const [cartData, setCartData] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const [darkMode, setDarkMode] = useState(true)
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Page />
        <ToastContainer />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
