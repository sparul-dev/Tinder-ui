import { BrowserRouter, Route, Routes } from "react-router"
import NavBar from "./components/NavBar"
import Body from "./components/Body"
import Login from "./components/Login"


function App() {
 

  return (
    <>

      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>} >

            <Route path="/login" element={<Login/>} />

          </Route>
        </Routes>

      </BrowserRouter>
    </>
  
  )
}

export default App
