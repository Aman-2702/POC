import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SignUp from './Components/Signup'
import Address from './Components/Address'
import Preview from './Components/Preview'

import { ContextProvider } from './Components/Context';


function App() {
  return (
    <ContextProvider>
    <Router>
      <div className="App">
        <div className="outer">
          <div className="inner">
            <Routes>
                <Route path="/" element={<SignUp />} /> 
                <Route path="/Address" element={<Address />} />
                <Route path="/Preview" element={<Preview />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </ContextProvider>
  )
}

export default App