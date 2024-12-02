import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/register";
import Dashboard from "./components/Dashboard";
import Learning from "./components/Learning"
import GreenFarming from "./components/GreenFarming"
import Carpentry from "./components/Carpentry";
import Healthcare from "./components/Healtcare";
import MemoryGame from "./components/MemoryGame";
import AssessmentGarden from "./components/AssesmentGarden";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { auth } from "./components/firebase";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <Router>
      <div className="App">

            <Routes>
              <Route
                path="/"
                element={user ? <Navigate to="/login" /> : <Login />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/learning" element={<Learning />}/>
              <Route path="/greenfarming" element={<GreenFarming />}/>
              <Route path="/carpentry" element={<Carpentry />}/>
              <Route path="/memorygame" element={<MemoryGame />}/>
              <Route path="/healthcare" element={<Healthcare/>} />
              <Route path="/assesment_garden" element={<AssessmentGarden />} />

            </Routes>
            <ToastContainer />
  
      </div>
    </Router>
  );
}

export default App;
