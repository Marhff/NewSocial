import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login/LoginForm"
import "./assets/style/style.scss"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
