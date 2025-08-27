import React,{ useEffect,useState } from "react";
import Home from "./pages/Home.jsx";
import Createaccount from "./pages/Createaccount.jsx";
import Login from "./pages/Login.jsx"
import Success from "./pages/Success.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  
  return(<>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/createacc" element={<Createaccount />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/success" element={<Success />}/>
      </Routes>
    </Router>
  </>
  )
}
export default App;